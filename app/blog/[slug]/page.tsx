import Link from "next/link";
import BlogCard from "@/components/BlogCard";

// Exemplo de post dinâmico
const postData: Record<string, any> = {
  "neurodiversidade-101": {
    title: "Neurodiversidade 101: Entendendo o Espectro",
    category: "Neurodiversidade 101",
    date: "2026-07-15",
    author: "Maturidade Neurodivergente",
    content: `
# Neurodiversidade 101: Entendendo o Espectro

Neurodiversidade é um conceito revolucionário que mudou a forma como entendemos diferenças neurológicas. Mas o que isso realmente significa?

## O que é Neurodiversidade?

Neurodiversidade refere-se à ideia de que certas diferenças neurológicas são variações naturais do cérebro humano, e não deficiências. Isso inclui:

- **TDAH** (Transtorno do Déficit de Atenção/Hiperatividade)
- **Autismo**
- **Dislexia**
- **Dispraxia**
- **Síndrome de Tourette**
- Outras diferenças neurológicas

## Por que isso importa?

Durante muito tempo, a sociedade tratava essas diferenças como "problemas" que precisavam ser "corrigidos". A perspectiva neurodivergente reconhece que:

1. **Nós funcionamos de forma diferente, não deficiente**
2. **Nossas mentes têm força e desafios únicos**
3. **A sociedade pode se adaptar para nos incluir**

## O Espectro

É importante entender que neurodiversidade não é binária. Não existem duas categorias: "neurotípica" e "neurodivergente". Na verdade, é mais como um espectro multidimensional:

- Mesmo entre pessoas autistas, as experiências variam muito
- Uma pessoa com TDAH pode ter um tipo completamente diferente de TDAH que outra
- Traços podem mudar ao longo da vida

## Começando sua Jornada

Se você suspeita ser neurodivergente ou já recebeu um diagnóstico, saiba que:

- **Não há "cura" necessária** — você não está quebrado
- **Autoconhecimento é o primeiro passo** para viver melhor
- **Buscar apoio é um ato de coragem**, não fraqueza

## Próximos Passos

Nos próximos artigos, exploraremos como a neurodiversidade afeta diferentes áreas da vida: relacionamentos, carreira, maturidade emocional e muito mais.

Lembre-se: sua neurodivergência não define seu valor. Ela é parte de quem você é.
    `,
  },
};

const relatedPosts = [
  {
    slug: "maturidade-emocional",
    title: "Maturidade Emocional: Além do Diagnóstico",
    excerpt: "Como desenvolver inteligência emocional sendo neurodivergente.",
    category: "Maturidade Emocional",
    date: "2026-07-10",
  },
  {
    slug: "autoconhecimento-neurodivergente",
    title: "Autoconhecimento Neurodivergente: Seu Guia Pessoal",
    excerpt: "Ferramentas e exercícios para entender seus padrões únicos.",
    category: "Autoconhecimento",
    date: "2026-07-05",
  },
  {
    slug: "vida-adulta-neurodivergente",
    title: "Vida Adulta Neurodivergente",
    excerpt: "Navegando carreira, relacionamentos e responsabilidades.",
    category: "Vida Adulta Neurodivergente",
    date: "2026-06-28",
  },
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postData[slug] || postData["neurodiversidade-101"];
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Article Header */}
      <article className="max-w-content mx-auto mb-16">
        <header className="mb-8">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold mb-4 inline-block"
          >
            ← Voltar ao Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-neutral-600 dark:text-neutral-400">
            <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>Por {post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert dark:prose-invert max-w-none mb-12 text-neutral-800 dark:text-neutral-200">
          <div
            className="leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>

        {/* Navigation */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8 flex gap-4 justify-between">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700"
          >
            ← Artigos Anteriores
          </Link>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700"
          >
            Próximos Artigos →
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
          📚 Artigos Relacionados
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((relPost) => (
            <BlogCard key={relPost.slug} post={relPost} />
          ))}
        </div>
      </section>
    </>
  );
}

function formatContent(markdown: string): string {
  let html = markdown;

  // Headings
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Lists
  html = html.replace(/^\- (.*?)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/, "<ul>$1</ul>");

  return html;
}
