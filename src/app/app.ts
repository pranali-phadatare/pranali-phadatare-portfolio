import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { ThemeService } from './services/theme.service';

/**
 * Root App Component — persistent shell: Navbar + Router Outlet + Footer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Inject ThemeService to apply saved theme on startup
  private themeService = inject(ThemeService);
}
