import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  highlights = [
    { icon: '🎯', title: 'Problem Solver',    desc: 'Breaking complex problems into elegant solutions.' },
    { icon: '🚀', title: 'Performance First', desc: 'Optimizing every byte for blazing-fast user experiences.' },
    { icon: '📚', title: 'Always Learning',   desc: 'Exploring new Angular features and frontend trends daily.' },
    { icon: '🤝', title: 'Team Player',       desc: 'Thriving in Agile teams with designers and backend devs.' },
  ];

  facts = [
    { label: '🏢 Location',   value: 'Pune, Maharashtra, India' },
    { label: '💼 Experience', value: '4 Years Frontend Development' },
    { label: '🎓 Education',  value: 'B.Sc. Computer Science & Currently Pursuing PGDM in Information Technology' },
    { label: '🌐 Open to',    value: 'Office, Remote & Hybrid Roles' },
    { label: '💡 Interests',  value: 'UI/UX, Angular' },
  ];
}
