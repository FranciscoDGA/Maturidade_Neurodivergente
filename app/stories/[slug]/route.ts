import { NextRequest } from "next/server";
import { getStoryBySlug, getAllStories } from "@/data/stories";

const SITE_URL = "https://maturidadeneurodivergente.com.br";

function generateAmpStoryHtml(story: ReturnType<typeof getStoryBySlug> & object) {
  const pages = story.pages
    .map(
      (page) => `
    <amp-story-page id="${page.id}">
      <amp-story-grid-layer template="fill">
        <amp-img src="${page.backgroundImage}" width="720" height="1280" layout="responsive" alt="${page.title || ""}"></amp-img>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="${page.template}" style="padding: 40px 24px;">
        ${
          page.title
            ? `<h2 style="font-size: 32px; font-weight: 800; line-height: 1.2; color: ${page.textColor || "white"}; text-shadow: 0 2px 8px rgba(0,0,0,0.6); margin: 0 0 12px 0;">${page.title}</h2>`
            : ""
        }
        ${
          page.subtitle
            ? `<p style="font-size: 18px; font-weight: 600; color: ${page.textColor || "white"}; text-shadow: 0 1px 4px rgba(0,0,0,0.5); margin: 0 0 8px 0; opacity: 0.9;">${page.subtitle}</p>`
            : ""
        }
        ${
          page.text
            ? `<p style="font-size: 20px; line-height: 1.5; color: ${page.textColor || "white"}; text-shadow: 0 1px 6px rgba(0,0,0,0.5); margin: 0;">${page.text}</p>`
            : ""
        }
      </amp-story-grid-layer>
    </amp-story-page>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html amp lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <title>${story.title}</title>
    <link rel="canonical" href="${SITE_URL}/stories/${story.slug}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="description" content="${story.title} - Maturidade Neurodivergente">
    <meta property="og:title" content="${story.title}">
    <meta property="og:description" content="${story.title} - Maturidade Neurodivergente">
    <meta property="og:image" content="${story.posterImage}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${SITE_URL}/stories/${story.slug}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${story.title}">
    <meta name="twitter:description" content="${story.title} - Maturidade Neurodivergente">
    <meta name="twitter:image" content="${story.posterImage}">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "${story.title}",
      "image": ["${story.posterImage}"],
      "mainEntityOfPage": "${SITE_URL}/stories/${story.slug}",
      "publisher": {
        "@type": "Organization",
        "name": "Maturidade Neurodivergente",
        "logo": {
          "@type": "ImageObject",
          "url": "${SITE_URL}/images/logo.png"
        }
      }
    }
    </script>
    <style amp-boilerplate>
      body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}
      @-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
    </style>
    <noscript><style amp-boilerplate>
      body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
    </style></noscript>
    <style amp-custom>
      amp-story-page {
        background-color: #111;
      }
      amp-story-grid-layer {
        padding: 40px 24px;
      }
    </style>
  </head>
  <body>
    <amp-story
      standalone
      title="${story.title}"
      publisher="Maturidade Neurodivergente"
      publisher-logo-src="${SITE_URL}/images/logo.png"
      poster-portrait-src="${story.posterImage}"
      supports-landscape
    >
      ${pages}
    </amp-story>
  </body>
</html>`;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return new Response("Story not found", { status: 404 });
  }

  const html = generateAmpStoryHtml(story);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export function generateStaticParams() {
  return getAllStories().map((story) => ({
    slug: story.slug,
  }));
}
