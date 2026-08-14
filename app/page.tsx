import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts, allPosts } from "@/data/posts";
import { generateOrganizationSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
  description:
    "Um espaço inclusivo para entender neurodiversidade, TDAH, autismo e maturidade neurodivergente. Artigos, guias e recursos para cérebros diversos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maturidadeneurodivergente.com.br",
    title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
    description:
      "Um espaço inclusivo para entender neurodiversidade, TDAH, autismo e maturidade neurodivergente.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Maturidade Neurodivergente",
      },
    ],
  },
};

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const heroPost = featuredPosts[0];
  const breakingNews = featuredPosts.slice(1, 5);
  const flashNews = allPosts.slice(5, 11);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="py-16 font-sans relative">
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* Hero Section */}
      <div className="mb-20 max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          Entenda a Neurodiversidade. <br className="hidden sm:block"/> Viva a Maturidade.
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Um espaço calmo para mentes ativas. Sem jargões — apenas reflexão, significado e recursos validados para a sua evolução pessoal.
        </p>
      </div>

      {/* Hero Post */}
      {heroPost && (
        <div className="mb-24">
          <Link href={`/blog/${heroPost.slug}`} className="group flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-2xl p-6 transition-all duration-300 hover:shadow-soft">
            <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
              {heroPost.coverImage && (
                <Image
                  src={heroPost.coverImage}
                  alt={heroPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
              <span className="text-primary-600 dark:text-primary-500 font-medium uppercase tracking-wide text-sm">
                {heroPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                {heroPost.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                {heroPost.excerpt}
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{heroPost.author || "Equipe Editorial"}</p>
                  <p className="text-sm text-neutral-500">{formatDate(heroPost.date)}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Content + Sidebar Grid */}
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-dark-border pb-4">Artigos em Destaque</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {breakingNews.map((post) => (
                <div key={post.slug} className="group flex flex-col">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="block h-full space-y-4"
                  >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      {post.coverImage && (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="flex flex-col flex-1 space-y-2">
                      <span className="text-primary-600 dark:text-primary-500 font-medium text-xs uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h4 className="text-xl font-display font-bold text-neutral-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 text-sm flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-neutral-500 pt-2">{formatDate(post.date)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Flash News */}
          <div>
            <h4 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-dark-border pb-4">
              Recentes
            </h4>
            <div className="space-y-6">
              {flashNews.length > 0 ? flashNews.map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="flex flex-col space-y-1">
                    <h5 className="font-bold text-neutral-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h5>
                    <p className="text-sm text-neutral-500">{post.category} &middot; {formatDate(post.date)}</p>
                  </Link>
                </div>
              )) : (
                <p className="text-sm text-neutral-500">Em breve, novos artigos aqui!</p>
              )}
            </div>
          </div>

          {/* About Card */}
          <div className="bg-neutral-50 dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-2xl p-8">
            <h4 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-4">
              Sobre o Projeto
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Maturidade Neurodivergente é um espaço criado por neurodivergentes, para neurodivergentes. Fornecemos conteúdo acessível, validado por profissionais e baseado em evidências.
            </p>
            <Link href="/about" className="inline-block font-medium text-primary-600 dark:text-primary-500 hover:underline">
              Nossa História &rarr;
            </Link>
          </div>

          {/* Popular Tags */}
          <div>
            <h4 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-4 border-b border-neutral-200 dark:border-dark-border pb-4">
              Tópicos
            </h4>
            <div className="flex flex-wrap gap-2">
              {["TDAH", "Autismo", "Diagnóstico", "Maturidade", "Organização", "Autoconhecimento", "Saúde Mental"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- EXPLORE BY CATEGORY --- */}
      <div className="mt-24 border-t border-neutral-200 dark:border-dark-border pt-16">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Explorar Categorias
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Encontre exatamente o que você busca.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Neurodiversidade 101", desc: "O básico para começar", count: allPosts.filter(p => p.category === "Neurodiversidade 101").length },
            { name: "Maturidade Neurodivergente", desc: "Crescimento pessoal", count: allPosts.filter(p => p.category === "Maturidade Neurodivergente").length },
            { name: "TDAH", desc: "Organização e Foco", count: allPosts.filter(p => p.category === "TDAH").length },
            { name: "Autismo", desc: "Identidade e Limites", count: allPosts.filter(p => p.category === "Autismo").length }
          ].map((cat) => (
            <Link href={`/blog?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="group bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-xl p-6 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-2">{cat.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{cat.desc}</p>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-500">{cat.count} artigos</span>
            </Link>
          ))}
        </div>
      </div>

      {/* --- FINAL CTA: Newsletter --- */}
      <div className="mt-32 mb-20">
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-12 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Acompanhe nossa Newsletter
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8 text-lg">
            Dicas práticas, orientação e acolhimento direto no seu email. Sem spam.
          </p>
          
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Seu melhor email..." 
              className="flex-1 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              required
            />
            <button 
              type="submit" 
              className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-lg px-6 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}