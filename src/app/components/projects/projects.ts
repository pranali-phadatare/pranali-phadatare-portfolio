import { Component, signal, computed } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleCasePipe, ScrollAnimationDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  activeFilter = signal<string>('all');

  filters = ['all', 'angular', 'web'];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Full-featured admin dashboard with real-time analytics, order management, and inventory tracking. Integrated with REST APIs and Chart.js for data visualization.',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Chart.js', 'Angular Material'],
      githubUrl: 'https://github.com/pranali-phadatare/ecommerce-dashboard',
      demoUrl: 'https://ecommerce-dashboard-demo.netlify.app',
      category: 'angular',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Productivity app with drag-and-drop Kanban boards, due dates, priority labels, and team collaboration. State managed with NgRx for predictable data flow.',
      techStack: ['Angular', 'NgRx', 'TypeScript', 'SCSS', 'REST API'],
      githubUrl: 'https://github.com/pranali-phadatare/task-manager',
      demoUrl: 'https://task-manager-pp.netlify.app',
      category: 'angular',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Real-time weather app with location search, 7-day forecast, and interactive maps. Fetches live data from OpenWeatherMap API using Angular HTTP client.',
      techStack: ['Angular', 'TypeScript', 'OpenWeatherMap API', 'RxJS'],
      githubUrl: 'https://github.com/pranali-phadatare/weather-app',
      demoUrl: 'https://weather-pp.netlify.app',
      category: 'angular',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This portfolio! Built with Angular 20 featuring dark/light mode, typewriter effect, scroll animations, lazy-loaded routes, and fully responsive design.',
      techStack: ['Angular 20', 'TypeScript', 'CSS3', 'Angular Router'],
      githubUrl: 'https://github.com/pranali-phadatare/portfolio',
      demoUrl: '#',
      category: 'angular',
      featured: true,
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Feature-rich blogging platform with rich text editor, categories, tags, user authentication, and comment system. SEO optimized with Angular Universal.',
      techStack: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'Angular Universal'],
      githubUrl: 'https://github.com/pranali-phadatare/blog-platform',
      demoUrl: 'https://blog-pp.netlify.app',
      category: 'web',
      featured: false,
    },
    {
      id: 6,
      title: 'Movie Discovery App',
      description: 'Discover trending movies and TV shows with search, genre filtering, watchlist, and detailed info pages. Powered by TMDB API with efficient caching via RxJS.',
      techStack: ['Angular', 'RxJS', 'TypeScript', 'TMDB API', 'Angular Material'],
      githubUrl: 'https://github.com/pranali-phadatare/movie-app',
      demoUrl: 'https://movies-pp.netlify.app',
      category: 'angular',
      featured: false,
    },
  ];

  // computed() recalculates only when activeFilter signal changes
  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.category === f);
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
