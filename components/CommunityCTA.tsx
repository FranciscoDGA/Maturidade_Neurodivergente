"use client";

export default function CommunityCTA() {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 my-16 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4">
          Comunidade Fechada
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg font-light mb-8 leading-relaxed">
          Nossa comunidade conecta adultos neurodivergentes de forma organizada. Discutimos estratégias práticas de vida, carreira e regulação emocional sem o ruído das redes sociais.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://chat.whatsapp.com/SEU_GRUPO_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold py-3 px-6 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Entrar no WhatsApp <span className="text-xl">&rarr;</span>
          </a>
          <a
            href="https://t.me/SEU_CANAL_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold py-3 px-6 hover:border-neutral-900 dark:hover:border-white transition-colors"
          >
            Canal do Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
