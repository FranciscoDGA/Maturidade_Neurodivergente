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
          body: "Notificações ativadas com sucesso.",
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
        className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-10 max-w-lg w-full animate-in fade-in zoom-in-95 duration-300 shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
            Conteúdo Editorial
          </span>
          <h2 className="text-3xl font-display font-light text-neutral-900 dark:text-white mb-6">
            Antes de <span className="font-bold">Partir</span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 mb-8 font-light leading-relaxed text-lg">
            Nossa curadoria seleciona apenas os artigos e guias mais relevantes sobre neurodiversidade na vida adulta. Quer receber os destaques mensais?
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <p className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-1">
                Notificações Silenciosas
              </p>
              <p className="text-sm text-neutral-500">
                Avisos apenas quando publicamos artigos extensos ou guias definitivos.
              </p>
            </div>
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <p className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-1">
                Acesso à Comunidade
              </p>
              <p className="text-sm text-neutral-500">
                Convite para nosso grupo privado no WhatsApp focado em networking neurodivergente.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleEnableNotifications}
              className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold py-4 transition-colors"
            >
              Ativar Notificações
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-sm py-2 transition-colors uppercase tracking-widest font-semibold"
            >
              Continuar Navegando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
