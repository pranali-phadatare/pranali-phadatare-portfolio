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
      id: 4,
      title: 'Portfolio Website',
      description: 'This portfolio! Built with Angular 20 featuring dark/light mode, typewriter effect, scroll animations, lazy-loaded routes, and fully responsive design.',
      techStack: ['Angular 20', 'TypeScript', 'CSS3', 'Angular Router'],
      githubUrl: 'https://github.com/pranali-phadatare/pranali-phadatare-portfolio',
      demoUrl: '#',
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
