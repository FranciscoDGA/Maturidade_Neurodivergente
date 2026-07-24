import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Não Encontrada",
  description: "A página que você procura não existe ou foi movida.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-xl mx-auto">
      <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
        Página não encontrada
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        A página que você procura não existe ou foi movida para outro endereço.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
        >
          Voltar ao Início
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-semibold"
        >
          Ver Blog
        </Link>
      </div>
    </div>
  );
}
