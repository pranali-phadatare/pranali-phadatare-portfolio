import { Directive, ElementRef, OnInit, inject } from '@angular/core';

/**
 * ScrollAnimationDirective: Triggers CSS animation when element enters viewport.
 * Usage: Add appScrollAnimation to any element. Also add class 'scroll-animate',
 * 'scroll-animate-left', or 'scroll-animate-right' for the direction.
 * The 'animate-in' class is added by this directive when element is visible.
 */
@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(this.el.nativeElement);
  }
}
