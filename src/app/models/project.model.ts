// Project data model
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: ('angular' | 'web' | 'other')[];
  featured: boolean;
}
