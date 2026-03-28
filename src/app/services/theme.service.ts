import { Injectable, signal } from '@angular/core';

/**
 * ThemeService: Manages dark/light mode globally.
 * Uses signals for reactive state. Persists preference to localStorage.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(true);

  constructor() {
    // Check saved preference, then system preference
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      this.isDark.set(saved === 'dark');
    } else {
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark.update(v => !v);
    localStorage.setItem('portfolio-theme', this.isDark() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDark()) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
}
