"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  const toggleFavorite = (slug: string) => {
    let updated;
    if (favorites.includes(slug)) {
      updated = favorites.filter((s) => s !== slug);
    } else {
      updated = [...favorites, slug];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  return { favorites, toggleFavorite, isFavorite, mounted };
}
