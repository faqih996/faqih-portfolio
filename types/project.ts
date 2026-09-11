export interface Project {
  id: number;

  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  technologies: string[];

  website?: string;

  github?: string;

  featured: boolean;

  year: number;

  company?: string;

  role?: string;

  color?: string;
}