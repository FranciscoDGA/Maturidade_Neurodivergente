export interface PostMetadata {
  title: string;
  slug: string;
  excerpt: string;
  category: Category;
  date: string;
  author?: string;
  readingTime?: number;
  keywords?: string[];
  difficulty?: "iniciante" | "intermediário" | "avançado";
  coverImage?: string;
  featured?: boolean;
  draft?: boolean;
}

export type Category =
  | "Neurodiversidade 101"
  | "Maturidade Neurodivergente"
  | "TDAH"
  | "Autismo"
  | "Diagnóstico Tardio"
  | "Autoconhecimento"
  | "Relações"
  | "Carreira"
  | "Saúde Mental"
  | "Recursos";

export interface Post extends PostMetadata {
  content: string;
}
