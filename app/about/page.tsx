import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedPosts } from "@/data/posts";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça o Maturidade Neurodivergente — um espaço dedicado a explorar, entender e celebrar a vida como pessoa neurodivergente.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maturidadeneurodivergente.com.br/about",
    title: "Sobre Nós | Maturidade Neurodivergente",
    description:
      "Um espaço inclusivo, acessível e compassivo para neurodivergentes explorarem maturidade emocional e autoconhecimento.",
  },
};

export default function About() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="py-8">
      {/* Hero */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide backdrop-blur-md">
          Quem Somos
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-neutral-900 dark:text-white">
          Sobre o Projeto
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Um espaço calmo para mentes ativas. Sem ruído — apenas reflexão, significado e tecnologia a favor da sua evolução.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-black mb-4 leading-tight">
            Nossa Missão
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Criar um espaço inclusivo, acessível e compassivo onde pessoas neurodivergentes possam entender sua própria neurodivergência de forma não patológica, explorar maturidade emocional e construir uma vida que respeite seus ritmos únicos.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "✓", text: "Entender sua neurodivergência" },
              { icon: "✓", text: "Explorar maturidade emocional" },
              { icon: "✓", text: "Estratégias práticas para a vida adulta" },
              { icon: "✓", text: "Conectar-se com comunidades" },
              { icon: "✓", text: "Celebrar forças únicas" },
              { icon: "✓", text: "Baseado em evidências científicas" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 text-sm">
                <span className="text-accent-400 font-bold">{item.icon}</span>
                <span className="text-white/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-3">
            Nossos Valores
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Os princípios que guiam cada decisão do projeto.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "♿",
              title: "Acessibilidade",
              desc: "Conteúdo claro, baixa carga sensorial, modo escuro, fontes legíveis e sem distrações.",
              color: "from-emerald-400 to-teal-500",
            },
            {
              icon: "🤝",
              title: "Inclusão",
              desc: "Reconhecemos a neurodiversidade como uma variação natural, não uma deficiência.",
              color: "from-purple-400 to-pink-500",
            },
            {
              icon: "💡",
              title: "Clareza",
              desc: "Informações diretas, bem organizadas e fáceis de digerir.",
              color: "from-amber-400 to-orange-500",
            },
            {
              icon: "🌱",
              title: "Compaixão",
              desc: "Entendemos que cada jornada é única. Sem julgamentos, apenas apoio.",
              color: "from-blue-400 to-indigo-500",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-2xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Find */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-3">
            O Que Você Encontrará Aqui
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Conteúdo organizado por temas para facilitar sua jornada.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🧠",
              title: "Neurodiversidade 101",
              desc: "Conceitos fundamentais: o que é TDAH, autismo, dislexia? Como funcionamos? Qual é a diferença entre diagnóstico e identidade?",
              color: "from-emerald-400 to-teal-500",
            },
            {
              icon: "🌱",
              title: "Maturidade Emocional",
              desc: "Desenvolvimento de inteligência emocional, gestão de emoções, autossabotagem e autocompaixão para neurodivergentes.",
              color: "from-purple-400 to-pink-500",
            },
            {
              icon: "💡",
              title: "Autoconhecimento",
              desc: "Ferramentas, exercícios e reflexões para entender seus padrões, forças e desafios únicos.",
              color: "from-amber-400 to-orange-500",
            },
            {
              icon: "👩‍💼",
              title: "Vida Adulta Neurodivergente",
              desc: "Carreira, relacionamentos, finanças, moradia, saúde — estratégias práticas para cada área da vida.",
              color: "from-blue-400 to-indigo-500",
            },
            {
              icon: "📚",
              title: "Recursos",
              desc: "Livros recomendados, ferramentas, comunidades, podcasts e plataformas que podem ajudar sua jornada.",
              color: "from-rose-400 to-red-500",
            },
          ].map((cat) => (
            <Link
              key={cat.title}
              href={`/blog?category=${encodeURIComponent(cat.title)}`}
              className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {cat.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {cat.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-neutral-900 to-black dark:from-[#0f111a] dark:to-[#050608] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-accent-500/20 blur-[100px] rounded-[100%] pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">
            Nossa História
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Este projeto nasceu da necessidade pessoal de um espaço que entendesse a complexidade de ser neurodivergente na vida adulta — não como algo a ser &ldquo;consertado&rdquo;, mas como algo a ser compreendido e integrado.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Acreditamos que maturidade neurodivergente é possível quando nos permitimos ser quem somos, entender como funcionamos e construir uma vida que respeite nossos ritmos e necessidades únicas.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/blog/neurodiversidade-guia-iniciantes"
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-colors"
            >
              Comece por Aqui
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-12">
        <div className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-white mb-2">11+</div>
              <div className="text-sm text-neutral-500">Artigos Publicados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-white mb-2">5</div>
              <div className="text-sm text-neutral-500">Categorias</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-white mb-2">100%</div>
              <div className="text-sm text-neutral-500">Acessível</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-white mb-2">0</div>
              <div className="text-sm text-neutral-500">Cobranças</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              Comece sua jornada por um destes artigos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-6">
                  <span className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-3 block">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-3 leading-snug group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center">
                    Ler artigo{" "}
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Newsletter />
    </div>
  );
}