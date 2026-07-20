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
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center md:text-left py-12 md:py-20 border-b border-neutral-200 dark:border-slate-800">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-neutral-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
            Maturidade
          </span>{" "}
          <br className="hidden md:block" />
          Neurodivergente
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          Explore artigos, reflexões e guias práticos sobre neurodiversidade, autoconhecimento e desenvolvimento pessoal.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-12 items-start">
        {/* Sidebar */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sticky top-24 border border-neutral-200 dark:border-slate-700 shadow-sm">
            <h2 className="font-bold text-lg text-neutral-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Categorias
            </h2>
            <nav className="space-y-1.5">
              <button
                onClick={() => setSelectedCategory("Todos")}
                className={`block w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === "Todos"
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-slate-700/50 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Todos
                <span className="float-right bg-white/20 text-xs py-0.5 px-2 rounded-full">
                  {allPosts.length}
                </span>
              </button>
              {categories.map((category) => {
                const count = allPosts.filter((p) => p.category === category).length;
                if (count === 0) return null; // Esconde categorias vazias
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-slate-700/50 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    {category}
                    <span className="float-right bg-black/10 dark:bg-white/10 text-xs py-0.5 px-2 rounded-full">
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Posts Grid */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {sortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-neutral-50 dark:bg-slate-800/20 rounded-3xl border border-dashed border-neutral-300 dark:border-slate-700">
              <span className="text-6xl mb-4 block">🔍</span>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                Nenhum artigo encontrado nesta categoria.
              </p>
              <button
                onClick={() => setSelectedCategory("Todos")}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
              >
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
