export default function Search() {
  return (
    <div className="max-w-content mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
        🔍 Buscar
      </h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
        A página de busca será implementada em breve. Por enquanto, explore nosso blog por categorias.
      </p>
      <a
        href="/blog"
        className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Ir ao Blog
      </a>
    </div>
  );
}
