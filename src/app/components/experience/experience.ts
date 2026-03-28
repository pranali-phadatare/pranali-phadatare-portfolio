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
    {
      id: 2,
      company: 'Claritech Solutions, Pune',
      role: 'Junior Frontend Developer',
      startDate: 'April 2022',
      endDate: 'March 2024',
      isCurrent: false,
      description: [
        'Involved in the design and development of applications as per requirements across all modules.',
        'Responsible for developing UI pages using Angular, HTML5, CSS3, JavaScript, PrimeNG, and Bootstrap.',
        'Worked with Angular versions 12, 13, 15, and 17 to develop dynamic Single Page Applications (SPAs).',
        'Created and implemented custom directives, reusable components, and templates to enhance application modularity and efficiency.',
        'Integrated HTTP requests using the RxJS Observable library for handling asynchronous data streams.',
        'Developed TypeScript-based reusable components and services to consume RESTful APIs following Angular\'s component-based architecture.',
        'Utilized tools and technologies such as Angular 12+, Next.js, HTML5, CSS3, PrimeNG, Bootstrap 5, JSON, Git, Jira, Agile methodology, and Visual Studio Code for development and version control.',
      ],
      technologies: ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      location: 'Remote',
      type: 'Full-time',
    }
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
