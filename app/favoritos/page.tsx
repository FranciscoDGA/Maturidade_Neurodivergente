"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { allPosts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default function Favoritos() {
  const { favorites, mounted } = useFavorites();

  if (!mounted) {
    return (
      <div className="max-w-content mx-auto mb-16 text-center py-20">
        Carregando seus favoritos...
      </div>
    );
  }

  const favoritePosts = allPosts.filter((post) => favorites.includes(post.slug));

  return (
    <div className="max-w-content mx-auto mb-16">
      <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-3">
          <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Meus Favoritos
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Você tem {favoritePosts.length} artigo{favoritePosts.length !== 1 ? 's' : ''} salvo{favoritePosts.length !== 1 ? 's' : ''} para ler depois.
        </p>
      </header>

      {favoritePosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoritePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <svg className="w-16 h-16 mx-auto text-neutral-300 dark:text-neutral-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-neutral-200">
            Nenhum favorito ainda
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            Explore o blog e clique no ícone de coração para salvar os artigos que você achar mais interessantes.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explorar o Blog
          </Link>
        </div>
      )}
    </div>
  );
}
