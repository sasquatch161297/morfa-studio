export type Material = {
  name: string;
  detail?: string;
};

export type Dimensions = {
  width?: number;
  depth?: number;
  diameter?: number;
  height: number;
  unit: "mm";
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  objectNumber: string;
  type: string;
  description: string;
  inspiration: string;
  visualLanguage: string[];
  designPrinciples: string[];
  dimensions: Dimensions;
  materials: Material[];
  heroImage: string;
  gallery: string[];
  availability: string;
  edition?: { size: number; artistProofs: number };
  tone: string;
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  number: string;
  subject: string;
  description: string;
  philosophy: string;
  principles: string[];
  heroImage: string;
  gallery: string[];
  status: "current" | "forthcoming";
};

export type JournalArticle = {
  slug: string;
  title: string;
  category: "Field Notes" | "Materials" | "Processes" | "Species" | "Objects";
  date: string;
  excerpt: string;
  image: string;
};
