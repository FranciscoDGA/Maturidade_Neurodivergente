import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/types/post";

export default function BlogCard({ post }: { post: PostMetadata }) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col h-full border-t border-neutral-200 dark:border-neutral-800 pt-6">
      {/* Cover Image Area */}
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`} className="relative w-full h-48 sm:h-56 overflow-hidden mb-6 block">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </Link>
      )}

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
            {post.category}
          </span>
          <span className="text-xs text-neutral-400">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-neutral-500 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex justify-between items-center">
          <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-neutral-500 transition-colors flex items-center gap-2">
            Ler Artigo <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
