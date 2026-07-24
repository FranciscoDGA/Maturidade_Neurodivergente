"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl p-8 my-12 text-center max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Acompanhe nossa jornada
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6">
        Receba novos artigos, dicas e reflexões sobre maturidade neurodivergente diretamente na sua caixa de entrada. Zero spam, prometemos.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "Inscrito! 🎉" : "Inscrever-se"}
        </button>
      </form>
    </div>
  );
}
