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
      title: 'TaskMind – Smart Task Manager',
      description: 'An Angular-based task management app that helps users organize and manage daily tasks efficiently. Built with AI-assisted development using Claude Code as part of my learning journey into modern Angular development.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/pranali-phadatare',
      demoUrl: 'https://thinktask-1.netlify.app/',
      category: ['angular', 'web'],
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'This portfolio! Built with Angular 20 featuring dark/light mode, typewriter effect, scroll animations, lazy-loaded routes, and fully responsive design.',
      techStack: ['Angular 20', 'TypeScript', 'CSS3', 'Angular Router'],
      githubUrl: 'https://github.com/pranali-phadatare/pranali-phadatare-portfolio',
      demoUrl: '#',
      category: ['angular'],
      featured: false,
    },
    {
      id: 3,
      title: 'E-Commerce SPA',
      description: 'A responsive e-commerce single-page app built with Angular 19 using standalone components and Signals-based state management, eliminating the need for NgRx. Features a cart management system with localStorage persistence, real-time totals, and quantity controls powered by computed signals, plus a reusable Angular Material UI with a router-synced tabbed interface and a global toast notification service. Includes typed reactive forms with custom validation (email, phone regex) and unit test coverage across components and services.',
      techStack: ['Angular 19', 'TypeScript', 'Signals', 'Angular Material', 'Reactive Forms'],
      githubUrl: 'https://github.com/pranali-phadatare/E-Commerce19',
      demoUrl: '#',
      category: ['angular', 'web'],
      featured: false,
    },
  ];

  // computed() recalculates only when activeFilter signal changes
  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.category.includes(f as any));
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
