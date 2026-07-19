import BlogCard from "@/components/BlogCard";

const allPosts = [
  {
    slug: "neurodiversidade-101",
    title: "Neurodiversidade 101: Entendendo o Espectro",
    excerpt: "Uma introdução acessível ao conceito de neurodiversidade e por que isso importa para sua vida.",
    category: "Neurodiversidade 101",
    date: "2026-07-15",
  },
  {
    slug: "maturidade-emocional",
    title: "Maturidade Emocional: Além do Diagnóstico",
    excerpt: "Como desenvolver inteligência emocional sendo neurodivergente. Dicas práticas e inclusivas.",
    category: "Maturidade Emocional",
    date: "2026-07-10",
  },
  {
    slug: "autoconhecimento-neurodivergente",
    title: "Autoconhecimento Neurodivergente: Seu Guia Pessoal",
    excerpt: "Ferramentas e exercícios para entender seus padrões únicos de funcionamento.",
    category: "Autoconhecimento",
    date: "2026-07-05",
  },
  {
    slug: "vida-adulta-neurodivergente",
    title: "Vida Adulta Neurodivergente: Desafios e Oportunidades",
    excerpt: "Navegando carreira, relacionamentos e responsabilidades com autismo, TDAH ou outras neurodivergências.",
    category: "Vida Adulta Neurodivergente",
    date: "2026-06-28",
  },
  {
    slug: "recursos-essenciais",
    title: "Recursos Essenciais para Neurodivergentes",
    excerpt: "Uma curadoria de livros, ferramentas, comunidades e plataformas que podem ajudar sua jornada.",
    category: "Recursos",
    date: "2026-06-20",
  },
];

const categories = [
  "Neurodiversidade 101",
  "Maturidade Emocional",
  "Autoconhecimento",
  "Vida Adulta Neurodivergente",
  "Recursos",
];

export default function BlogPage() {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
          📖 Blog
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Explore artigos sobre maturidade neurodivergente, autoconhecimento e desenvolvimento pessoal.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-neutral-100 dark:bg-dark-card rounded-lg p-6">
            <h2 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
              Categorias
            </h2>
            <nav className="space-y-2">
              <button className="block w-full text-left px-3 py-2 rounded-lg bg-primary-500 text-white font-medium">
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-left px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Posts Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
