import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
  technologies: string[];
  location: string;
  type: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      company: 'Inxise Datalabs Pvt. Ltd.',
      role: 'Frontend Developer (Angular)',
      startDate: 'March 2024',
      endDate: 'Present',
      isCurrent: true,
      description: [
        'Led complete UI development using Angular following component-based design approach.',
        'Developed responsive web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and Angular 2+.',
        'Consumed RESTful Web APIs (JSON) for dynamic chatbot question modules.',
        'Improved frontend performance by optimizing DOM rendering and reducing page load time by 30%.',
        'Developed and integrated backend APIs using Next.js, ensuring seamless frontend-backend data integration.',
        'Worked in Agile environment, participating in sprint planning, code reviews, and release cycles.',
        'Used Git for version control and collaborative development.',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'REST APIs'],
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  education = [
    {
      degree: 'PGDM in Information Technology',
      institution: 'MIT School of Distance Education, Pune',
      year: '2025 – Present',
      grade: 'PGDM/MBA – Pursuing',
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Shivaji University Kolhapur',
      year: '2019 – 2022',
      grade: 'CGPA: 8.7 / 10',
    },
  ];
}
