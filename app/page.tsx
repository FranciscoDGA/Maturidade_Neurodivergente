import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPosts } from "@/data/posts";

const featuredPosts = getFeaturedPosts();

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center mb-16 md:mb-24 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
          Maturidade Neurodivergente
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          Um espaço para entender seu desenvolvimento único. Crescendo fora dos padrões com clareza, compaixão e acessibilidade.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
        >
          Leia os Últimos Artigos →
        </Link>
      </section>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
          📖 Artigos em Destaque
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-100 dark:bg-dark-card rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
          Quer receber atualizações?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 max-w-lg mx-auto">
          Inscreva-se em nossa newsletter para receber novos artigos, recursos e dicas sobre maturidade neurodivergente.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="seu@email.com"
            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-bg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-label="Email para newsletter"
            required
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
          >
            Inscrever
          </button>
        </form>
      </section>
    </>
  );
}
