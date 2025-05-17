export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company?: string;
  photo: string;
  bio?: string;
  topics?: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}