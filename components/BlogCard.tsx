import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/types/post";
import FavoriteButton from "./FavoriteButton";

export default function BlogCard({ post }: { post: PostMetadata }) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col bg-white dark:bg-slate-800 rounded-[5px] overflow-hidden border border-neutral-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Cover Image Area */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-neutral-100 dark:bg-slate-700">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 dark:from-primary-500/40 dark:to-primary-900/40 flex items-center justify-center">
            <span className="text-4xl">🧠</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary-700 dark:text-primary-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-neutral-100 dark:border-slate-700 mt-auto">
          <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
            <svg className="w-4 h-4 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time>{formattedDate}</time>
          </div>
          {post.readingTime && (
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400 flex items-center">
              {post.readingTime} min ler
              <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
          <div className="ml-auto">
            <FavoriteButton slug={post.slug} />
          </div>
        </div>
      </div>
    </article>
  );
}
