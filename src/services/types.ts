export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  objective: string;
  socialLinks: SocialLinks;
  skills: Skill[];
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  technologies: string[];
  location: string;
}

export interface Education {
  id: number;
  year: number;
  degree: string;
  institution: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface PersonalInfo {
  dateOfBirth: string;
  fatherName: string;
  motherName: string;
  nid: string;
}

// Type for tech expertise items
export interface TechExpertiseItem {
  id: number;
  name: string;
  level: "Expert" | "Intermediate" | "Beginner";
  color: string;
}

export interface TechExpertise {
  "Front-End Development": TechExpertiseItem[];
  "Back-End Development": TechExpertiseItem[];
  "Database Management": TechExpertiseItem[];
  "E-commerce & CMS": TechExpertiseItem[];
  "Cloud Services": TechExpertiseItem[];
  "DevOps & Infrastructure": TechExpertiseItem[];
  "Version Control": TechExpertiseItem[];
  "Testing & Debugging": TechExpertiseItem[];
  "Security & Performance": TechExpertiseItem[];
  Microservices: TechExpertiseItem[];
  "Payment Integrations": TechExpertiseItem[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  technologies: string[];
  featured: boolean;
}
