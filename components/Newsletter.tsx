"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 pb-12 mt-16 max-w-2xl mx-auto">
      <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4">
        Acompanhe Nossa Jornada
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8 font-light text-lg">
        Receba novos artigos, reflexões e atualizações diretamente no seu e-mail. Apenas o essencial, sem ruído.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors rounded-none"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold py-3 px-8 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "Inscrito!" : "Inscrever-se"}
        </button>
      </form>
    </div>
  );
}
