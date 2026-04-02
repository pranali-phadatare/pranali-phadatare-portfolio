import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * HomeComponent: Hero section with typewriter effect (RxJS-free, uses
 * native setTimeout for simplicity and performance), stats, and CTAs.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  // Signals for reactive UI updates
  displayRole = signal('');
  showCursor = signal(true);

  private roles = [
    'Frontend Developer',
    'Angular Specialist',
    'UI/UX Enthusiast',
    'TypeScript Expert',
  ];
  private roleIdx = 0;
  private charIdx = 0;
  private isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;
  private cursorTimer: ReturnType<typeof setInterval> | null = null;

  socialLinks = [
    { label: 'GitHub',   icon: '🐙', url: 'https://github.com/pranali-phadatare' },
    { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/pranali-phadatare11' },
    { label: 'Email',    icon: '📧', url: 'mailto:phadatarepranali116@gmail.com' },
  ];

  stats = [
    { value: '4',   label: 'Years Experience' },
    { value: '2+',  label: 'Projects Built' },
    { value: '10+',  label: 'Technologies' },
    { value: '100%', label: 'Passion' },
  ];

  ngOnInit(): void {
    this.runTypewriter();
    // Cursor blink
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 530);
  }

  ngOnDestroy(): void {
    if (this.typeTimer) clearTimeout(this.typeTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }

  private runTypewriter(): void {
    const role = this.roles[this.roleIdx];
    let delay = 120;

    if (!this.isDeleting && this.charIdx < role.length) {
      this.displayRole.set(role.slice(0, ++this.charIdx));
    } else if (!this.isDeleting && this.charIdx === role.length) {
      delay = 2000; // Pause at full word
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx > 0) {
      this.displayRole.set(role.slice(0, --this.charIdx));
      delay = 60;
    } else {
      this.isDeleting = false;
      this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      delay = 400;
    }

    this.typeTimer = setTimeout(() => this.runTypewriter(), delay);
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/Pranali_Resume.pdf';
    link.download = 'Pranali_Phadatare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
