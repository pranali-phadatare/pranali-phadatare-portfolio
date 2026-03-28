import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  year = new Date().getFullYear();

  socials = [
    { icon: '🐙', label: 'GitHub',   href: 'https://github.com/pranali-phadatare' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranali-phadatare11' },
    { icon: '📧', label: 'Email',    href: 'mailto:pranali.phadatare@email.com' },
  ];

  navLinks = [
    { label: 'Home',       route: '/home' },
    { label: 'About',      route: '/about' },
    { label: 'Skills',     route: '/skills' },
    { label: 'Projects',   route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact',    route: '/contact' },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
