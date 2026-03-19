export interface Product {
  id: string;
  name: string;
  category: string;
  tagNumber: string;
  image: string;
  badge?: "Bestseller" | "New" | "Trending";
  collection?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  slug: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  image: string;
  emoji?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
}
