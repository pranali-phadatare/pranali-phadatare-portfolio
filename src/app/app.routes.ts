import { Routes } from '@angular/router';

/**
 * Lazy-loaded routes — each section loads only when navigated to.
 * This improves initial bundle size via code splitting.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then(m => m.HomeComponent),
    title: 'Pranali Phadatare | Frontend Developer',
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.AboutComponent),
    title: 'About | Pranali Phadatare',
  },
  {
    path: 'skills',
    loadComponent: () => import('./components/skills/skills').then(m => m.SkillsComponent),
    title: 'Skills | Pranali Phadatare',
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects').then(m => m.ProjectsComponent),
    title: 'Projects | Pranali Phadatare',
  },
  {
    path: 'experience',
    loadComponent: () => import('./components/experience/experience').then(m => m.ExperienceComponent),
    title: 'Experience | Pranali Phadatare',
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent),
    title: 'Contact | Pranali Phadatare',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
