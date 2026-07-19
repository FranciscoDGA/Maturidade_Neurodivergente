import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { allPosts as allPostsMetadata } from "@/data/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
    }));

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Article Header */}
      <article className="max-w-content mx-auto mb-16">
        <header className="mb-8">
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
            <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>Por {post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert dark:prose-invert max-w-none mb-12 text-neutral-800 dark:text-neutral-200">
          <div
            className="leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </div>

        {/* Navigation */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8 flex gap-4 justify-between">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700"
          >
            ← Voltar ao Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPostsSlugs.length > 0 && (
        <section className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
            📚 Artigos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPostsSlugs.map((relPost) => (
              <BlogCard key={relPost.slug} post={relPost} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function formatMarkdown(markdown: string): string {
  let html = markdown
    .split("\n")
    .map((line) => {
      if (!line.trim()) return "<br/>";

      if (line.startsWith("### ")) {
        return `<h3>${line.replace(/^### /, "")}</h3>`;
      }
      if (line.startsWith("## ")) {
        return `<h2>${line.replace(/^## /, "")}</h2>`;
      }
      if (line.startsWith("# ")) {
        return `<h1>${line.replace(/^# /, "")}</h1>`;
      }
      if (line.startsWith("- ")) {
        return `<li>${line.replace(/^- /, "")}</li>`;
      }
      if (line.startsWith("> ")) {
        return `<blockquote>${line.replace(/^> /, "")}</blockquote>`;
      }

      return `<p>${line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/_(.*?)_/g, "<em>$1</em>")}</p>`;
    })
    .join("");

  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  return html;
}
