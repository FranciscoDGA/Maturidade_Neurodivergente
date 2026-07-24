"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoriteButton({ slug }: { slug: string }) {
  const { isFavorite, toggleFavorite, mounted } = useFavorites();

  if (!mounted) return <div className="w-8 h-8" />; // placeholder

  const favorite = isFavorite(slug);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevents Link wrapper click if it's inside one
        e.stopPropagation();
        toggleFavorite(slug);
      }}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors z-10 relative"
      aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <svg
        className={`w-6 h-6 transition-colors ${
          favorite ? "text-red-500 fill-current" : "text-neutral-400 dark:text-neutral-500 hover:text-red-400"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
