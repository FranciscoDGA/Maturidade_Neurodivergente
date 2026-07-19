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
    <>
      <div className="max-w-content mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
          📞 Contato
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Tem uma pergunta, sugestão ou quer colaborar? Adoramos ouvir de você!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
            Envie uma Mensagem
          </h2>

          {formState.submitted && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
              ✓ Obrigado! Sua mensagem foi enviada com sucesso.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-bg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-bg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
              >
                Assunto
              </label>
              <input
                id="subject"
                type="text"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-bg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-bg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
            Outras Formas de Contato
          </h2>

          <div className="space-y-6">
            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                📧 Email
              </h3>
              <a
                href="mailto:contato@maturidadeneurodivergente.com"
                className="text-primary-600 dark:text-primary-400"
              >
                contato@maturidadeneurodivergente.com
              </a>
            </div>

            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
                📱 Redes Sociais
              </h3>
              <div className="space-y-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
                >
                  📷 Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
                >
                  𝕏 Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                ⏰ Tempo de Resposta
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Respondemos dentro de 3-5 dias úteis. Obrigado pela paciência!
              </p>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border border-primary-200 dark:border-primary-700">
              <h3 className="font-bold text-lg text-primary-900 dark:text-primary-100 mb-2">
                💡 Dica de Acessibilidade
              </h3>
              <p className="text-primary-800 dark:text-primary-200">
                Se você tem TDAH e dificuldade de completar formulários, sinta-se à vontade para nos enviar uma mensagem casual no Instagram ou via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
