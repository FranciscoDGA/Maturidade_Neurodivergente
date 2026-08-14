import type { Metadata } from "next";
import Link from "next/link";
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
  return (
    <div className="py-12 max-w-content mx-auto">
      {/* Hero */}
      <div className="mb-24 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight text-neutral-900 dark:text-white">
          Sobre o <span className="font-bold">Projeto</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
          Um espaço editorial para mentes ativas. Sem ruído — apenas reflexão profunda, significado e ciência em favor da sua evolução.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              O Manifesto
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-neutral-900 dark:text-neutral-300 text-xl leading-relaxed font-light">
              Este projeto nasceu da necessidade de um espaço que entendesse a complexidade de ser neurodivergente na vida adulta — não como algo a ser "consertado", mas como uma variação neurológica a ser compreendida e integrada.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Acreditamos que a maturidade neurodivergente só é possível quando nos permitimos ser quem somos, entender como funcionamos biologicamente e construir uma arquitetura de vida que respeite nossos ritmos, e não lute contra eles.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16 mb-24">
        <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-12">
          Nossos Princípios
        </h2>
        <div className="grid sm:grid-cols-2 gap-12">
          {[
            {
              title: "Acessibilidade Elegante",
              desc: "Conteúdo claro, baixíssima carga visual, foco na tipografia e leitura ininterrupta.",
            },
            {
              title: "Neutralidade Científica",
              desc: "Abordagem desprovida de jargões de autoajuda. Fatos, estudos e vivências organizadas.",
            },
            {
              title: "Não Patologização",
              desc: "A neurodiversidade é tratada como característica inerente da condição humana, não um erro de percurso.",
            },
            {
              title: "Estética Silenciosa",
              desc: "Acreditamos que um ambiente digital sem ruído é o primeiro passo para a clareza mental.",
            },
          ].map((value) => (
            <div key={value.title} className="group">
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Find */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16 mb-24">
        <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-12">
          Tópicos Editoriais
        </h2>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Neurodiversidade 101",
              desc: "Conceitos fundamentais e base científica. Como funcionamos?",
            },
            {
              title: "Maturidade Emocional",
              desc: "Gestão de emoções, autossabotagem e arquitetura de rotinas adaptadas.",
            },
            {
              title: "Vida Adulta",
              desc: "Carreira, relacionamentos e estratégias de sobrevivência corporativa.",
            },
          ].map((cat) => (
            <Link
              key={cat.title}
              href={`/blog?category=${encodeURIComponent(cat.title)}`}
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-100 dark:border-neutral-800/50 pb-6 hover:border-neutral-900 dark:hover:border-neutral-50 transition-colors"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white group-hover:text-neutral-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-1">
                  {cat.desc}
                </p>
              </div>
              <span className="text-neutral-300 dark:text-neutral-700 font-light text-2xl group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
        <Newsletter />
      </div>
    </div>
  );
}