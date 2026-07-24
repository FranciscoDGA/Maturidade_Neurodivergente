import { allPosts } from "@/data/posts";

export async function GET() {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL || "https://maturidadeneurodivergente.com";

  const feedItems = allPosts
    .map((post) => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${site_url}/blog/${post.slug}</link>
          <guid>${site_url}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
          <category>${post.category}</category>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Maturidade Neurodivergente</title>
        <link>${site_url}</link>
        <description>Um espaço inclusivo para entender maturidade neurodivergente</description>
        <language>pt-BR</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${feedItems}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
