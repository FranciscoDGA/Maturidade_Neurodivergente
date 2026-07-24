import type { Metadata } from "next";
import Link from "next/link";
import { storiesData } from "@/data/stories";
import { getPostBySlug } from "@/data/posts";

export const metadata: Metadata = {
  title: "Web Stories",
  description:
    "Histórias visuais sobre neurodiversidade, TDAH e autismo. Conteúdo rápido e envolvente para Descobertas do Google.",
  alternates: { canonical: "/stories" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maturidadeneurodivergente.com.br/stories",
    title: "Web Stories | Maturidade Neurodivergente",
    description:
      "Histórias visuais sobre neurodiversidade, TDAH e autismo.",
  },
};

export default function StoriesPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide backdrop-blur-md">
          Descobertas do Google
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-neutral-900 dark:text-white">
          Web Stories
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          Histórias visuais e envolventes sobre neurodiversidade. Deslize para descobrir.
        </p>
      </div>

      {/* Stories Grid */}
      {storiesData.map((group) => {
        const post = getPostBySlug(group.articleSlug);

        return (
          <div key={group.articleSlug} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                {post?.category || "Artigo"}
              </span>
              <span className="text-neutral-400">·</span>
              <Link
                href={`/blog/${group.articleSlug}`}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
              >
                {group.articleTitle}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.stories.map((story) => (
                <a
                  key={story.slug}
                  href={`/stories/${story.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[9/16] rounded-3xl overflow-hidden border border-neutral-200 dark:border-dark-border hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${story.posterImage})`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                      Web Story · {story.pages.length} páginas
                    </span>
                    <h3 className="text-xl font-display font-bold text-white leading-snug mb-3 group-hover:text-primary-300 transition-colors">
                      {story.title}
                    </h3>
                    <span className="text-sm font-bold text-white/80 flex items-center gap-2">
                      Assistor
                      <span className="transform group-hover:translate-x-2 transition-transform">
                        &rarr;
                      </span>
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-2xl transition-colors"
        >
          Ver Todos os Artigos
        </Link>
      </div>
    </div>
  );
}
