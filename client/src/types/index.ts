export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  achievements: string[];
  features?: string[];
  technologies: string[];
  icon?: JSX.Element;
  gradient: string;
  badgeColor: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Skills {
  programmingLanguages: string[];
  frameworks: string[];
  developerTools: string[];
  dataAnalysis: string[];
}

export interface SocialLinks {
  github: string;
  githubSchool: string;
  linkedin: string;
  email: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  available: boolean;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  contact: ContactInfo;
  social: SocialLinks;
}
