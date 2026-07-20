"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você poderia integrar com um serviço de email
    console.log("Form submitted:", formState);
    setFormState({ ...formState, submitted: true });
    setTimeout(() => {
      setFormState({ ...formState, submitted: false });
    }, 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-5xl mb-6 block">📞</span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-neutral-900 dark:text-white">
          Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">Conversar</span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Tem uma pergunta, sugestão, ou quer colaborar conosco? Adoramos ouvir suas ideias e construir esse espaço juntos.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
            Envie uma Mensagem
          </h2>

          {formState.submitted && (
            <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4">
              <span className="text-xl">✨</span>
              <p className="pt-0.5">Obrigado! Sua mensagem foi enviada com sucesso e responderemos em breve.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-slate-600 bg-neutral-50/50 dark:bg-slate-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Como gostaria de ser chamado?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-slate-600 bg-neutral-50/50 dark:bg-slate-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Assunto
              </label>
              <input
                id="subject"
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-slate-600 bg-neutral-50/50 dark:bg-slate-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Sobre o que vamos conversar?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-slate-600 bg-neutral-50/50 dark:bg-slate-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg shadow-primary-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-neutral-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="p-2 bg-primary-50 dark:bg-slate-700 rounded-lg">📧</span>
              Contato Direto
            </h3>
            <a
              href="mailto:contato@maturidadeneurodivergente.com"
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline break-all"
            >
              contato@maturidadeneurodivergente.com
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-neutral-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="p-2 bg-primary-50 dark:bg-slate-700 rounded-lg">📱</span>
              Redes Sociais
            </h3>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors p-2 -mx-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-slate-700/50">
                <span className="text-xl">📷</span> Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors p-2 -mx-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-slate-700/50">
                <span className="text-xl">𝕏</span> Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors p-2 -mx-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-slate-700/50">
                <span className="text-xl">💼</span> LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-primary-50 dark:from-slate-800 dark:to-slate-800/80 rounded-3xl p-8 border border-indigo-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2">
              <span>💡</span> Dica de Acessibilidade
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200/80 text-sm leading-relaxed">
              Se você tem TDAH ou dificuldade de completar formulários extensos, fique à vontade para nos enviar uma mensagem direta ou áudio no Instagram. Facilitamos o contato como for melhor para você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
