import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Skill {
  name: string;
  level: number; // 0–100
  color: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Frontend Core',
      icon: '🌐',
      skills: [
        { name: 'Angular',           level: 90, color: '#DD0031', icon: '🅰️' },
        { name: 'TypeScript',        level: 85, color: '#3178C6', icon: '🔷' },
        { name: 'JavaScript (ES6+)', level: 88, color: '#F7DF1E', icon: '📜' },
        { name: 'HTML5',             level: 95, color: '#E34F26', icon: '🏷️' },
        { name: 'CSS3 / SCSS',       level: 88, color: '#1572B6', icon: '🎨' },
      ],
    },
    {
      category: 'Angular Ecosystem',
      icon: '⚡',
      skills: [
        { name: 'RxJS',             level: 82, color: '#B7178C', icon: '🔄' },
        { name: 'Angular Material', level: 85, color: '#DD0031', icon: '💎' },
        { name: 'NgRx',             level: 72, color: '#BA2BD2', icon: '🗃️' },
        { name: 'Angular Router',   level: 88, color: '#DD0031', icon: '🛣️' },
        { name: 'Reactive Forms',   level: 85, color: '#DD0031', icon: '📝' },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85, color: '#F05032', icon: '🐙' },
        { name: 'REST APIs',    level: 88, color: '#22D3EE', icon: '🔌' },
        { name: 'Jest / Karma', level: 72, color: '#C21325', icon: '🧪' },
        { name: 'Figma',        level: 70, color: '#F24E1E', icon: '🎭' },
        { name: 'VS Code',      level: 92, color: '#007ACC', icon: '💻' },
      ],
    },
  ];

  techStack = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx',
    'HTML5', 'CSS3', 'SCSS', 'REST API', 'Git', 'Karma', 'Figma',
  ];
}
