export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'kitchen' | 'bedroom' | 'commercial';
  location: string;
  area: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  materials: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  features: string[];
  deliverables: string[];
}

export interface StyleOption {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  palette: { name: string; hex: string }[];
  lightingTemp: string;
  materials: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  projectType: string;
  verified: boolean;
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  bhkSize: string;
  cityArea: string;
  budgetRange: string;
  preferredDate: string;
  notes: string;
}
