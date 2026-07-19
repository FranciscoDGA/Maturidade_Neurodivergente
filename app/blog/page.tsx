"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { allPosts } from "@/data/posts";
import type { Category } from "@/types/post";

const categories: Category[] = [
  "Neurodiversidade 101",
  "Maturidade Neurodivergente",
  "TDAH",
  "Autismo",
  "Diagnóstico Tardio",
  "Autoconhecimento",
  "Relações",
  "Carreira",
  "Saúde Mental",
  "Recursos",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "Todos">("Todos");

  const filteredPosts =
    selectedCategory === "Todos"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  // Ordenar por data (mais recente primeiro)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
          📖 Blog
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Explore {allPosts.length}+ artigos sobre maturidade neurodivergente, autoconhecimento e desenvolvimento pessoal.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-neutral-100 dark:bg-dark-card rounded-lg p-6 sticky top-24">
            <h2 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
              Categorias
            </h2>
            <nav className="space-y-2">
              <button
                onClick={() => setSelectedCategory("Todos")}
                className={`block w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "Todos"
                    ? "bg-primary-500 text-white"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                Todos ({allPosts.length})
              </button>
              {categories.map((category) => {
                const count = allPosts.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary-500 text-white"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Posts Grid */}
        <div className="md:col-span-3">
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-4">
                Nenhum artigo encontrado nesta categoria ainda.
              </p>
              <button
                onClick={() => setSelectedCategory("Todos")}
                className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
              >
                Ver todos os artigos →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
