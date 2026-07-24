"use client";

import { useState } from "react";
import { allPosts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", ...Array.from(new Set(allPosts.map((p) => p.category)))];

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.keywords || []).some((kw) => kw.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "Todas" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-content mx-auto mb-16">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
          🔍 Buscar Posts
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
          Encontre artigos por título, conteúdo ou palavras-chave.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Digite sua busca..."
            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </header>

      <section>
        <div className="mb-6 text-neutral-600 dark:text-neutral-400">
          Encontrados {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
              Nenhum post encontrado
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Tente buscar por termos diferentes ou alterar a categoria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
