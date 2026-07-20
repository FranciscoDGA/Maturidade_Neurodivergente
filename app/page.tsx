import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts, allPosts } from "@/data/posts";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const heroPost = featuredPosts[0];
  const breakingNews = featuredPosts.slice(1, 5);
  const flashNews = allPosts.slice(5, 11);
  
  // Custom dates or use the post dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-neutral-900 dark:border-white pb-6 mb-12">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 dark:text-white leading-none">
            Maturidade <br/> Neurodivergente
          </h1>
        </div>
        <div className="mt-6 md:mt-0 max-w-sm text-right">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-snug mb-4">
            Um espaço calmo para mentes ativas. Sem ruído — apenas reflexão, significado e curiosidade.
          </p>
          <Link href="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:opacity-70 transition-opacity">
            Leia os artigos <span className="ml-2 bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full">→</</span>
          </Link>
        </div>
      </div>

      {/* Hero Post */}
      {heroPost && (
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-4">
              • {heroPost.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-4 hover:underline decoration-2 underline-offset-4">
              <Link href={`/blog/${heroPost.slug}`}>{heroPost.title}</Link>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
              {heroPost.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-indigo-500"></div>
              <div>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">{heroPost.author}</p>
                <p className="text-xs text-neutral-500">{formatDate(heroPost.date)}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {heroPost.keywords?.slice(0, 4).map(kw => (
                <span key={kw} className="border border-neutral-300 dark:border-neutral-700 text-xs px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                  {kw}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <Link href={`/blog/${heroPost.slug}`} className="block relative aspect-[16/9] overflow-hidden rounded-sm group">
              {heroPost.coverImage ? (
                <Image
                  src={heroPost.coverImage}
                  alt={heroPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                  <span className="text-neutral-400">Imagem Indisponível</span>
                </div>
              )}
            </Link>
          </div>
        </div>
      )}

      {/* Breaking News Divider */}
      <div className="flex items-center mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mr-4 whitespace-nowrap">
          // Artigos em Destaque
        </h3>
        <div className="flex-1 h-px bg-neutral-300 dark:bg-neutral-700"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left Column (Breaking News) */}
        <div className="lg:col-span-8 space-y-12">
          {breakingNews.map((post) => (
            <div key={post.slug} className="grid sm:grid-cols-2 gap-6 group">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-sm">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800"></div>
                )}
              </Link>
              <div className="flex flex-col justify-center">
                <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-3">
                  • {post.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 hover:underline decoration-2 underline-offset-4 leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-400"></div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">{post.author}</p>
                    <p className="text-xs text-neutral-500">{formatDate(post.date)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4 space-y-12">
          {/* Flash News */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Leituras Rápidas
            </h4>
            <div className="space-y-6">
              {flashNews.map((post) => (
                <div key={post.slug} className="flex gap-4 group">
                  <div className="flex-1">
                    <h5 className="font-bold text-neutral-900 dark:text-white leading-tight mb-2 hover:underline">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p className="text-xs text-neutral-500">• {formatDate(post.date)}</p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block relative w-20 h-20 shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800">
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
              ))}
            </div>
          </div>

          {/* Top Authors */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Top Autores
            </h4>
            <div className="space-y-4">
              {[
                { name: "Maturidade Neurodivergente", title: "Autor Principal", followers: "25k" },
                { name: "Comunidade", title: "Colaboradores", followers: "12k" },
                { name: "Equipe Editorial", title: "Curadoria", followers: "15k" },
              ].map((author, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-sm flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-neutral-900 dark:text-white">{author.name}</p>
                    <p className="text-xs text-neutral-500">#{author.title} • {author.followers} leitores</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Siga-nos
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {['Instagram', 'TikTok', 'YouTube', 'Twitter'].map(social => (
                <button key={social} className="flex items-center justify-between px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">{social}</span>
                  <span className="text-xs text-neutral-500">+</span>
                </button>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-700 p-8 text-center rounded-sm">
            <p className="text-neutral-500 mb-4">Participe da Comunidade</p>
            <button className="bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold text-sm">
              Inscreva-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
