import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts, allPosts } from "@/data/posts";
import { generateOrganizationSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
  description:
    "Um espaço editorial para explorar neurodiversidade, TDAH, autismo e maturidade com clareza, empatia e sem jargões corporativos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maturidadeneurodivergente.com.br",
    title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
    description:
      "Um espaço editorial para explorar neurodiversidade, TDAH, autismo e maturidade com clareza, empatia e sem jargões corporativos.",
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
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="font-sans relative">
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* Hero Section */}
      <div className="pt-24 pb-32 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-8">
          Entenda a Neurodiversidade. <br className="hidden sm:block"/>
          <span className="font-bold">Viva a Maturidade.</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
          Um espaço editorial dedicado a mentes ativas. Sem jargões corporativos — apenas reflexão, significado e recursos validados para o seu desenvolvimento.
        </p>
      </div>

      {/* Hero Post */}
      {heroPost && (
        <div className="mb-32">
          <Link href={`/blog/${heroPost.slug}`} className="group block">
            <div className="w-full aspect-[21/9] md:aspect-[24/9] relative bg-neutral-100 dark:bg-neutral-900 mb-10 overflow-hidden">
              {heroPost.coverImage && (
                <Image
                  src={heroPost.coverImage}
                  alt={heroPost.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  priority
                />
              )}
            </div>
            <div className="max-w-4xl">
              <span className="text-neutral-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-4 block">
                {heroPost.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight mb-6 transition-colors group-hover:text-neutral-500">
                {heroPost.title}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-xl leading-relaxed font-light mb-8 max-w-3xl">
                {heroPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-400 uppercase tracking-widest">
                <span>{heroPost.author || "Editorial"}</span>
                <span>&mdash;</span>
                <span>{formatDate(heroPost.date)}</span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-16 mb-32">
        
        {/* Left Column (Featured Articles) */}
        <div className="lg:col-span-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-12 border-b border-neutral-200 dark:border-dark-border pb-4">
            Em Destaque
          </h3>
          <div className="flex flex-col space-y-16">
            {breakingNews.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-full sm:w-2/5 aspect-[4/3] relative bg-neutral-100 dark:bg-neutral-900 shrink-0 overflow-hidden">
                    {post.coverImage && (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                      />
                    )}
                  </div>
                  <div className="w-full sm:w-3/5 flex flex-col justify-center py-2">
                    <span className="text-neutral-900 dark:text-white font-bold uppercase tracking-widest text-[10px] mb-3">
                      {post.category}
                    </span>
                    <h4 className="text-2xl font-display font-bold text-neutral-900 dark:text-white leading-snug mb-4 group-hover:text-neutral-500 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-neutral-500 dark:text-neutral-400 line-clamp-3 text-base leading-relaxed font-light mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{formatDate(post.date)}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            
            {/* Recent Articles */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-8 border-b border-neutral-200 dark:border-dark-border pb-4">
              Recentes
            </h4>
            <div className="flex flex-col space-y-8 mb-16">
              {flashNews.length > 0 ? flashNews.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                  <h5 className="font-display font-bold text-lg text-neutral-900 dark:text-white leading-snug mb-2 group-hover:text-neutral-500 transition-colors">
                    {post.title}
                  </h5>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {post.category} &middot; {formatDate(post.date)}
                  </span>
                </Link>
              )) : (
                <p className="text-sm text-neutral-400 font-light">Em breve, novos artigos aqui!</p>
              )}
            </div>

            {/* Tags */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-8 border-b border-neutral-200 dark:border-dark-border pb-4">
              Tópicos
            </h4>
            <div className="flex flex-wrap gap-2">
              {["TDAH", "Autismo", "Diagnóstico Tardio", "Maturidade", "Organização", "Autoconhecimento", "Saúde Mental"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border border-neutral-200 dark:border-dark-border text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-900 dark:hover:border-white transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Explore by Category */}
      <div className="py-24 border-t border-neutral-200 dark:border-dark-border">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-display font-light text-neutral-900 dark:text-white mb-4">
            Explorar por <span className="font-bold">Categorias</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg">
            Aprofunde-se nos temas que mais ressoam com seu momento atual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {[
            { name: "Neurodiversidade 101", desc: "Os conceitos fundamentais", count: allPosts.filter(p => p.category === "Neurodiversidade 101").length },
            { name: "Maturidade Neurodivergente", desc: "Crescimento pessoal", count: allPosts.filter(p => p.category === "Maturidade Neurodivergente").length },
            { name: "TDAH", desc: "Foco e função executiva", count: allPosts.filter(p => p.category === "TDAH").length },
            { name: "Autismo", desc: "Identidade e regulação", count: allPosts.filter(p => p.category === "Autismo").length }
          ].map((cat) => (
            <Link href={`/blog?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="group block">
              <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-2 group-hover:text-neutral-500 transition-colors">{cat.name}</h3>
              <p className="text-sm text-neutral-500 font-light mb-4">{cat.desc}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                <span>{cat.count} artigos</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Minimalist CTA */}
      <div className="py-32 border-t border-neutral-200 dark:border-dark-border flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 dark:text-white mb-6">
          Nossa <span className="font-bold">História</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-xl leading-relaxed font-light mb-10">
          Maturidade Neurodivergente é um manifesto pela acessibilidade e validação de vivências adultas, criado por neurodivergentes, para neurodivergentes.
        </p>
        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white hover:opacity-70 transition-opacity">
          <span>Conheça o Projeto</span>
          <span>&rarr;</span>
        </Link>
      </div>

    </div>
  );
}