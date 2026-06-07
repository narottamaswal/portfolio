export interface Personal {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  medium?: string;
  leetcode?: string;
  cvUrl?: string;
  heroImage?: string;
  heroImages?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  logo?: string;
  year: string;
  grade?: string;
  details?: string;
}

export interface Experience {
  company: string;
  logo?: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface Recommendation {
  name: string;
  title: string;
  company: string;
  avatar?: string;
  text: string;
  linkedinUrl?: string;
}

export interface Note {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link?: string;
}

export interface Portfolio {
  personal: Personal;
  skills: SkillCategory[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  recommendations: Recommendation[];
  notes: Note[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  details?: string;
}

export interface Experience {
  company: string;
  logo?: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface Recommendation {
  name: string;
  title: string;
  company: string;
  avatar?: string;
  text: string;
  linkedinUrl?: string;
}

export interface Note {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link?: string;
}

export interface Portfolio {
  personal: Personal;
  skills: SkillCategory[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  recommendations: Recommendation[];
  notes: Note[];
}
