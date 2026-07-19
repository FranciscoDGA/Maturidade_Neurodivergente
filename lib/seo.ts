export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function generateMetadata(seo: SEOMetadata) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(", "),
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: seo.ogType || "website",
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    ...(seo.canonical && { alternates: { canonical: seo.canonical } }),
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Maturidade Neurodivergente",
    },
    keywords: post.keywords?.join(", "),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maturidade Neurodivergente",
    description:
      "Um espaço inclusivo para entender maturidade neurodivergente com clareza, compaixão e acessibilidade.",
    url: "https://maturidadeneurodivergente.com",
    logo: "https://maturidadeneurodivergente.com/logo.png",
    sameAs: [
      "https://instagram.com/maturidadend",
      "https://twitter.com/maturidadend",
      "https://linkedin.com/company/maturidadend",
    ],
  };
}
