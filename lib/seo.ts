export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL || "https://maturidadeneurodivergente-5d3adfs94.vercel.app";

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
  const baseUrl = getBaseUrl();
  const authorName = post.author && post.author !== "Maturidade Neurodivergente" ? post.author : "Francisco Gomes";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: "Criador & Editor",
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Maturidade Neurodivergente",
      url: baseUrl,
    },
    keywords: post.keywords?.join(", "),
  };
}

export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maturidade Neurodivergente",
    description:
      "Um espaço independente e inclusivo para entender a neurodiversidade na vida adulta com base em vivências e maturidade emocional.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    founder: {
      "@type": "Person",
      name: "Francisco Gomes",
    },
    sameAs: [
      "https://instagram.com/maturidadend",
      "https://twitter.com/maturidadend",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
