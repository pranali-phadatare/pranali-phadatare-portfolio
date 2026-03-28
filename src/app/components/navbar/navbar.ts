import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

/**
 * NavbarComponent: Fixed top navigation with dark/light toggle,
 * resume download, active route highlighting, and mobile menu.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  navItems: NavItem[] = [
    { label: 'Home',       route: '/home',       icon: '🏠' },
    { label: 'About',      route: '/about',      icon: '👤' },
    { label: 'Skills',     route: '/skills',     icon: '⚡' },
    { label: 'Projects',   route: '/projects',   icon: '🚀' },
    { label: 'Experience', route: '/experience', icon: '💼' },
    { label: 'Contact',    route: '/contact',    icon: '📬' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
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
