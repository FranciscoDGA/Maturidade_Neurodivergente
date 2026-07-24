"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (hasShown) return;
      if (e.clientY <= 5) {
        setIsOpen(true);
        setHasShown(true);
      }
    },
    [hasShown]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleEnableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Maturidade Neurodivergente", {
          body: "Notificações ativadas! Você receberá nossos melhores conteúdos.",
          icon: "/images/logo.png",
        });
      }
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-3xl mb-5 shadow-lg">
            🧠
          </div>

          <h2 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3">
            Antes de ir...
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            Que tal receber conteúdo exclusivo sobre neurodiversidade direto
            no seu celular? <strong>Sem spam, prometemos.</strong>
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">🔔</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  Notificações
                </p>
                <p className="text-xs text-neutral-500">
                  Receba alertas de novos artigos e dicas práticas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">💬</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  Grupo WhatsApp
                </p>
                <p className="text-xs text-neutral-500">
                  Comunidade ativa com +200 neurodivergentes trocando ideia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">📚</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  E-book Grátis
                </p>
                <p className="text-xs text-neutral-500">
                  Guia &ldquo;10 Ferramentas para Neurodivergentes&rdquo; ao se inscrever
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={handleEnableNotifications}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              🔔 Ativar Notificações
            </button>

            <a
              href="https://chat.whatsapp.com/SEU_GRUPO_AQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Entrar no Grupo WhatsApp
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 text-sm font-medium py-2 transition-colors"
            >
              Não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
