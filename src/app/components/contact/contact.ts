import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  submitMessage = signal('');

  // Reactive form with built-in Angular validators
  contactForm: FormGroup = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
  });

  contactInfo = [
    { icon: '📧', label: 'Email',    value: 'phadatarepranali116@gmail.com', href: 'mailto:phadatarepranali116@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/pranali-phadatare', href: 'https://www.linkedin.com/in/pranali-phadatare11' },
    { icon: '🐙', label: 'GitHub',   value: 'github.com/pranali-phadatare', href: 'https://github.com/pranali-phadatare' },
    { icon: '📍', label: 'Location', value: 'Pune, Maharashtra, India', href: null },
  ];

  /** Returns true if a field is invalid AND has been touched/dirty */
  isInvalid(field: string): boolean {
    const c = this.contactForm.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  /** Returns a user-friendly error message for a given field */
  getError(field: string): string {
    const c = this.contactForm.get(field);
    if (!c?.errors) return '';
    if (c.errors['required'])   return `${this.cap(field)} is required.`;
    if (c.errors['email'])      return 'Enter a valid email address.';
    if (c.errors['minlength'])  return `At least ${c.errors['minlength'].requiredLength} characters required.`;
    if (c.errors['maxlength'])  return `Maximum ${c.errors['maxlength'].requiredLength} characters allowed.`;
    return 'Invalid input.';
  }

  private cap(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Show all validation errors
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitStatus.set('success');
        this.submitMessage.set("Thanks! I'll get back to you within 24 hours. 🚀");
        this.contactForm.reset();
        setTimeout(() => this.submitStatus.set('idle'), 6000);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.submitStatus.set('error');
        this.submitMessage.set('Something went wrong. Please email me directly!');
      },
    });
  }

  get messageLength(): number {
    return this.contactForm.get('message')?.value?.length ?? 0;
  }
}
