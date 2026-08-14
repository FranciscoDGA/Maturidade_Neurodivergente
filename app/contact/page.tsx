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
    console.log("Form submitted:", formState);
    setFormState({ ...formState, submitted: true });
    setTimeout(() => {
      setFormState({ ...formState, submitted: false });
    }, 5000);
  };

  return (
    <div className="max-w-content mx-auto py-12">
      <div className="mb-24 space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight text-neutral-900 dark:text-white">
          Vamos <span className="font-bold">Conversar</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
          Tem uma pergunta, sugestão, ou quer colaborar conosco? Adoramos ouvir suas ideias.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-16 items-start border-t border-neutral-200 dark:border-neutral-800 pt-16">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">
            Envie uma Mensagem
          </h2>

          {formState.submitted && (
            <div className="mb-8 p-4 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 font-medium">
              Sua mensagem foi enviada. Responderemos assim que possível.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors rounded-none"
                  placeholder="Como gostaria de ser chamado?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors rounded-none"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Assunto
              </label>
              <input
                id="subject"
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors rounded-none"
                placeholder="Sobre o que vamos conversar?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors resize-none rounded-none"
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold py-4 px-8 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-12 lg:border-l lg:border-neutral-200 dark:border-neutral-800 lg:pl-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">
              Contato Direto
            </h3>
            <a
              href="mailto:contato@maturidadeneurodivergente.com"
              className="text-neutral-900 dark:text-white text-lg font-light hover:text-neutral-600 transition-colors break-all"
            >
              contato@maturidadeneurodivergente.com
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">
              Redes Sociais
            </h3>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white text-lg font-light hover:text-neutral-600 transition-colors">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white text-lg font-light hover:text-neutral-600 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white text-lg font-light hover:text-neutral-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-xs uppercase tracking-widest text-neutral-900 dark:text-white font-bold mb-3">
              Acessibilidade
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              Se você tem TDAH ou dificuldade de completar formulários extensos, fique à vontade para nos enviar uma mensagem direta no Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
