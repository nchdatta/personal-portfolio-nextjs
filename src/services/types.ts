export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface Badge {
  icon: string;
  color: string;
  text: string;
}

export interface CollaborationBadge {
  icon: string;
  text: string;
  variant: "outline" | "secondary" | "default" | "destructive";
  className: string;
}

export interface Profile {
  name: string;
  description: string;
  role: string;
  image: Image;
  socialLinks: SocialLink[];
  badges: Badge[];
  collaborationBadge: CollaborationBadge;
}

export interface Objective {
  title: string;
  content: string;
}

export interface Qualification {
  year: string;
  title: string;
  description: string;
  institution: string;
  duration: string;
}

export interface SkillItem {
  name: string;
  color: string;
  level: string;
}

export interface TechSkill {
  name: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  image: Image;
  technologies: string[];
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface HomePage {
  profile: Profile;
  objective: Objective;
  qualifications: Qualification[];
  techSkills: TechSkill[];
  recentWorks: Project[];
  experiences: Experience[];
}

export interface HireMeDetail {
  platform: string;
  username: string;
  link: string;
  icon: "AtSign" | "Briefcase" | "DollarSign";
}
