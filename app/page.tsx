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
    <div className="py-12 font-sans relative">
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      
      {/* Decorative Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-accent-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide mb-2 backdrop-blur-md">
          Bem-vindo ao futuro da Neurodiversidade
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white">
          Maturidade <br className="hidden sm:block"/> Neurodivergente
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Um espaço calmo para mentes ativas. Sem ruído — apenas reflexão, significado e tecnologia a favor da sua evolução.
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Conteúdo por neurodivergentes
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Acessível e inclusivo
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Baseado em evidências
          </div>
        </div>
      </div>

      {/* Hero Post */}
      {heroPost && (
        <div className="mb-20">
          <Link href={`/blog/${heroPost.slug}`} className="block relative w-full aspect-[2/1] md:aspect-[21/9] rounded-3xl overflow-hidden group shadow-glass dark:shadow-none ring-1 ring-neutral-200 dark:ring-dark-border">
            {heroPost.coverImage ? (
              <Image
                src={heroPost.coverImage}
                alt={heroPost.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-900 to-accent-900"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {heroPost.category}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight max-w-4xl">
                  {heroPost.title}
                </h2>
                <p className="text-neutral-200 text-lg md:text-xl max-w-2xl line-clamp-2 hidden md:block">
                  {heroPost.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Content + Sidebar Grid */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
          {breakingNews.map((post, i) => (
            <div key={post.slug} className={`group ${i === 0 ? 'sm:col-span-2' : ''}`}>
              <Link 
                href={`/blog/${post.slug}`} 
                className="block h-full bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl overflow-hidden hover:shadow-glow hover:border-accent-500/50 transition-all duration-300 dark:hover:bg-dark-cardHover flex flex-col"
              >
                <div className={`relative w-full overflow-hidden ${i === 0 ? 'aspect-[2/1] sm:aspect-[21/9]' : 'aspect-video'}`}>
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800"></div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-3 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3 leading-snug group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-3 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-primary-500"></div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white leading-none">{post.author || "Maturidade Neurodivergente"}</p>
                      <p className="text-xs text-neutral-500 mt-1">{formatDate(post.date)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Community CTA */}
          <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl p-8 text-white shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
            <h3 className="text-2xl font-display font-bold mb-4 relative z-10">Faça parte da revolução calma.</h3>
            <p className="text-white/80 mb-6 relative z-10 text-sm">
              Junte-se a milhares de mentes neurodivergentes que estão redesenhando suas vidas.
            </p>
            <Link href="/contact" className="block w-full bg-white text-neutral-900 font-bold py-3 rounded-2xl hover:bg-neutral-100 transition-colors shadow-lg relative z-10 text-center">
              Inscreva-se Gratuitamente
            </Link>
          </div>

          {/* Flash News */}
          <div className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              Leituras Rápidas
            </h4>
            <div className="space-y-5">
              {flashNews.length > 0 ? flashNews.map((post) => (
                <div key={post.slug} className="flex gap-4 group">
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold font-display text-neutral-900 dark:text-white leading-tight mb-1 group-hover:text-primary-500 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p className="text-xs text-neutral-500">{post.category} &middot; {formatDate(post.date)}</p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                     {post.coverImage && (
                       <Image
                         src={post.coverImage}
                         alt={post.title}
                         fill
                         className="object-cover transition-transform duration-300 group-hover:scale-110"
                       />
                     )}
                  </Link>
                </div>
              )) : (
                <p className="text-sm text-neutral-500 text-center py-4">Em breve, novos artigos aqui!</p>
              )}
            </div>
            <Link href="/blog" className="block mt-6 text-center text-sm font-bold text-primary-600 dark:text-primary-400 hover:underline">
              Ver todos os artigos &rarr;
            </Link>
          </div>

          {/* About Card */}
          <div className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-lg">&#129504;</span>
              Sobre o Projeto
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              O Maturidade Neurodivergente é um espaço criado por neurodivergentes, para neurodivergentes. Nosso objetivo é fornecer conteúdo acessível, validado por profissionais e baseado em evidências científicas.
            </p>
            <Link href="/about" className="text-sm font-bold text-primary-600 dark:text-primary-400 hover:underline">
              Saiba mais &rarr;
            </Link>
          </div>

          {/* Popular Tags */}
          <div className="bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Tags Populares
            </h4>
            <div className="flex flex-wrap gap-2">
              {["TDAH", "Autismo", "Diagnóstico", "Maturidade", "Organização", "Autoconhecimento", "Relacionamentos", "Saúde Mental"].map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- EXPLORE BY CATEGORY --- */}
      <div className="mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Explore Seu Universo
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Escolha o tema que mais ressoa com a sua busca atual por autoconhecimento.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Neurodiversidade 101", icon: "&#129504;", color: "from-emerald-400 to-teal-500", desc: "O básico para começar", count: allPosts.filter(p => p.category === "Neurodiversidade 101").length },
            { name: "Maturidade Neurodivergente", icon: "&#127793;", color: "from-purple-400 to-pink-500", desc: "Crescimento pessoal", count: allPosts.filter(p => p.category === "Maturidade Neurodivergente").length },
            { name: "TDAH", icon: "&#9889;", color: "from-amber-400 to-orange-500", desc: "Organização e Foco", count: allPosts.filter(p => p.category === "TDAH").length },
            { name: "Autismo", icon: "&#129513;", color: "from-blue-400 to-indigo-500", desc: "Identidade e Limites", count: allPosts.filter(p => p.category === "Autismo").length }
          ].map((cat) => (
            <Link href={`/blog?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="group relative overflow-hidden bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-6 text-center hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} transition-opacity duration-300`}></div>
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <span dangerouslySetInnerHTML={{ __html: cat.icon }} />
              </div>
              <h3 className="font-display font-bold text-neutral-900 dark:text-white text-lg mb-1">{cat.name}</h3>
              <p className="text-xs text-neutral-500 mb-2">{cat.desc}</p>
              <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{cat.count} artigos</span>
            </Link>
          ))}
        </div>
      </div>

      {/* --- HOW IT WORKS / JOURNEY --- */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-2 block">Como Funciona</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Sua Jornada Começa Aqui
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Não sabia por onde começar? Siga estes três passos para iniciar sua jornada de autoconhecimento neurodivergente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500/80 to-accent-500/20 z-0"></div>
          
          {[
            { step: "01", title: "Entenda o Conceito", desc: "O que significa ter um cérebro que funciona diferente do padrão. Comece pelo guia definitivo de iniciantes.", link: "/blog/neurodiversidade-guia-iniciantes", cta: "Ler artigo" },
            { step: "02", title: "Abrace a Aceitação", desc: "O processo de luto e alívio de um diagnóstico tardio na vida adulta. Você não está sozinho.", link: "/blog/diagnostico-tardio", cta: "Ler artigo" },
            { step: "03", title: "Mude seus Métodos", desc: "Por que as dicas de produtividade normais não funcionam com você — e o que funciona de verdade.", link: "/blog/organizacao-tdah", cta: "Ler artigo" }
          ].map((item, idx) => (
            <Link href={item.link} key={idx} className="relative z-10 bg-white dark:bg-[#111424] border border-neutral-200 dark:border-dark-border p-8 rounded-3xl hover:border-primary-500/50 hover:shadow-glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center font-display font-bold text-neutral-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">{item.desc}</p>
              <span className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center">
                {item.cta} <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <div className="mt-32">
        <div className="bg-neutral-900 dark:bg-neutral-800 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black mb-2">11+</div>
              <div className="text-sm text-neutral-400">Artigos Publicados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black mb-2">7</div>
              <div className="text-sm text-neutral-400">Categorias</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black mb-2">100%</div>
              <div className="text-sm text-neutral-400">Acessível</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black mb-2">0</div>
              <div className="text-sm text-neutral-400">Cobranças</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MISSION QUOTE --- */}
      <div className="mt-32 mb-12">
        <div className="bg-gradient-to-br from-neutral-900 to-black dark:from-[#0f111a] dark:to-[#050608] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-accent-500/20 blur-[100px] rounded-[100%] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-8 leading-tight relative z-10">
            &ldquo;Não estamos quebrados.<br/>Apenas rodamos um sistema operacional diferente.&rdquo;
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 relative z-10 leading-relaxed">
            Nossa missão é fornecer ferramentas validadas, acolhimento genuíno e conhecimento científico para ajudar pessoas neurodivergentes a pararem de lutar contra a sua própria natureza e começarem a trabalhar a favor dela.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-colors">
              Conheça Nossa História
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS --- */}
      <div className="mt-32 grid lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-8 bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-accent-500 animate-pulse"></span>
            <h3 className="font-display font-bold text-xl uppercase tracking-widest text-neutral-900 dark:text-white">A Comunidade</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <div className="flex text-amber-400 mb-4 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 italic leading-relaxed">
                &ldquo;Ler o artigo sobre diagnóstico tardio foi como se alguém estivesse narrando a minha vida. Finalmente um espaço sem tabus e sem romantizar o sofrimento.&rdquo;
              </p>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">&mdash; Leitora anônima</div>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <div className="flex text-amber-400 mb-4 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 italic leading-relaxed">
                &ldquo;As dicas de organização propostas aqui funcionam incrivelmente bem para o meu TDAH porque foram pensadas por quem realmente vive isso.&rdquo;
              </p>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">&mdash; Membro da comunidade</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-primary-900 text-white rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/30 blur-2xl rounded-full z-0"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 bg-neutral-800 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <div className="text-4xl">&#128104;&#8205;&#128187;</div>
            </div>
            <h3 className="font-display font-bold text-2xl mb-1">Curadoria Especializada</h3>
            <p className="text-primary-200 font-medium mb-6 text-sm">Escrito por neurodivergentes</p>
            <p className="text-neutral-300 text-sm leading-relaxed mb-8">
              Todo o conteúdo desta plataforma é validado por quem vive a neurodiversidade na pele. Sem capacitismo e sem fórmulas mágicas.
            </p>
            <Link href="/about" className="inline-block border border-white/30 rounded-xl px-6 py-2 text-sm font-bold hover:bg-white/10 transition-colors">
              Conheça o Autor
            </Link>
          </div>
        </div>
      </div>

      {/* --- FINAL CTA: Newsletter --- */}
      <div className="mt-20 mb-20">
        <div className="bg-[#111111] dark:bg-[#080808] border border-neutral-800 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/10 blur-[100px] rounded-full group-hover:bg-primary-500/20 transition-colors duration-700"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-500/10 blur-[100px] rounded-full group-hover:bg-accent-500/20 transition-colors duration-700"></div>
          
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 mb-6 relative z-10">
            Newsletter
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10 relative z-10 leading-snug">
            Dicas práticas, orientação e acolhimento emocional direto no seu email. Sem spam, sem floreios.
          </p>
          
          <form className="w-full max-w-md relative z-10 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Seu melhor email..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all backdrop-blur-md"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-black font-bold rounded-xl px-8 py-4 hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}