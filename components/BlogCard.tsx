import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-200 flex flex-col h-full">
      {/* Category Badge */}
      <div className="mb-3">
        <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex-grow">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <time className="text-xs text-neutral-500 dark:text-neutral-400">
          {formattedDate}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Ler →
        </Link>
      </div>
    </article>
  );
}
