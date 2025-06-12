export interface SupportArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  lastUpdated: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
