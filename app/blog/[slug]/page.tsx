import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { allPosts as allPostsMetadata } from "@/data/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import FavoriteButton from "@/components/FavoriteButton";
import AudioReader from "@/components/AudioReader";
import Comments from "@/components/Comments";
import Newsletter from "@/components/Newsletter";
import CommunityCTA from "@/components/CommunityCTA";
import AuthorBox from "@/components/AuthorBox";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import { generateBlogPostSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const metaPost = allPostsMetadata.find((p) => p.slug === slug);

  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maturidadeneurodivergente.vercel.app";
  const url = `${baseUrl}/blog/${slug}`;
  const ogImage = metaPost?.coverImage || "/images/og-default.png";

  return {
    title: post.title,
    description: post.excerpt,
    keywords: metaPost?.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author || "Maturidade Neurodivergente"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const metaPost = allPostsMetadata.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPostsSlugs = allPostsMetadata
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      date: p.date,
      coverImage: p.coverImage,
    }));

  const faqRegex = /### (.+?)\n\n([\s\S]*?)(?=### |---|\*\*Fontes|$)/g;
  const faqs: { question: string; answer: string }[] = [];
  let match;
  while ((match = faqRegex.exec(post.content)) !== null) {
    faqs.push({
      question: match[1].replace(/\?$/, ""),
      answer: match[2].replace(/\n/g, " ").trim(),
    });
  }

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const words = post.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  const headingsRegex = /^## (.+)$/gm;
  const headings: { text: string; id: string }[] = [];
  let hMatch;
  while ((hMatch = headingsRegex.exec(post.content)) !== null) {
    const text = hMatch[1].trim();
    if (text.toLowerCase().includes("perguntas frequentes") || text.toLowerCase().includes("fontes")) continue;
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ text, id });
  }

  const mdxComponents = {
    h2: ({ children }: any) => {
      const text = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return <h2 id={id} className="scroll-mt-24">{children}</h2>;
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              title: post.title,
              excerpt: post.excerpt,
              date: post.date,
              author: post.author,
              keywords: metaPost?.keywords,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Início", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs)),
          }}
        />
      )}

      {/* Article Header */}
      <article className="max-w-content mx-auto mb-16">
        <header className="mb-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Início</Link></li>
              <li><span className="mx-1">/</span></li>
              <li><Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><span className="mx-1">/</span></li>
              <li className="text-neutral-900 dark:text-white font-medium truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold mb-4 inline-block"
          >
            ← Voltar ao Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-neutral-600 dark:text-neutral-400">
            <span className="inline-block text-xs uppercase tracking-widest text-neutral-500 font-semibold px-3 py-1 border border-neutral-200 dark:border-neutral-800">
              {post.category}
            </span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>⏱️ {readingTime} min de leitura</span>
            <span>•</span>
            <span>Por {post.author && post.author !== "Maturidade Neurodivergente" ? post.author : "Francisco Gomes"}</span>
            <div className="ml-auto bg-white/50 dark:bg-black/20 rounded-full">
              <FavoriteButton slug={post.slug} />
            </div>
          </div>
        </header>

        {metaPost?.coverImage && (
          <div className="relative w-full aspect-[16/9] mb-12 rounded-[5px] overflow-hidden">
            <Image
              src={metaPost.coverImage}
              alt={post.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
        )}

        {/* Table of Contents */}
        {headings.length > 1 && (
          <div className="my-8 p-6 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-4">
              Neste Artigo
            </h4>
            <ul className="space-y-2">
              {headings.map((h, idx) => (
                <li key={h.id} className="text-sm">
                  <a
                    href={`#${h.id}`}
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-baseline gap-2"
                  >
                    <span className="font-mono text-xs text-neutral-400">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <span>{h.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <AudioReader contentId="article-content" />

        {/* Article Content */}
        <div id="article-content" className="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-12">
          <div className="leading-relaxed space-y-6">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>

        {/* E-E-A-T: Medical Disclaimer & Author Attribution */}
        <MedicalDisclaimer />
        <AuthorBox authorName={post.author && post.author !== "Maturidade Neurodivergente" ? post.author : "Francisco Gomes"} />

        {/* Navigation */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8 mt-12 flex gap-4 justify-between">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700"
          >
            ← Voltar ao Blog
          </Link>
        </div>

        <CommunityCTA />
        <Newsletter />
        <Comments />
      </article>

      {/* Related Posts */}
      {relatedPostsSlugs.length > 0 && (
        <section className="mt-24 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-display font-bold mb-12 text-neutral-900 dark:text-white">
            Artigos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPostsSlugs.map((relPost) => (
              <BlogCard key={relPost.slug} post={relPost} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

