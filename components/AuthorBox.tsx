import Link from "next/link";

interface AuthorBoxProps {
  authorName?: string;
}

export default function AuthorBox({ authorName = "Francisco Gomes" }: AuthorBoxProps) {
  return (
    <section className="my-12 border-t border-b border-neutral-200 dark:border-neutral-800 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-display font-bold text-xl flex-shrink-0 tracking-wider">
          FG
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
              {authorName}
            </h3>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold border border-neutral-200 dark:border-neutral-800 px-2 py-0.5">
              Criador & Editor
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Adulto neurodivergente e criador do <em>Maturidade Neurodivergente</em>. Compartilha vivências reais, reflexões sobre maturidade emocional e estratégias práticas de organização para desmistificar a vida atípica com honestidade, acolhimento e clareza.
          </p>
          <div className="pt-1">
            <Link
              href="/about"
              className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white hover:underline"
            >
              Conheça nossa história e manifesto &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
