"use client";

import { useState } from "react";

type Comment = {
  id: string;
  name: string;
  text: string;
  date: string;
};

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Ana Costa",
      text: "Muito obrigada por compartilhar isso. Fez todo sentido para a minha jornada e me ajudou a entender processos que eu achava que estavam errados comigo.",
      date: "Há 2 dias",
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      name,
      text: newComment,
      date: "Agora mesmo",
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <section className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
      <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">
        Comentários ({comments.length})
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-10 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Como quer ser chamado?"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Comentário
          </label>
          <textarea
            id="comment"
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y"
            placeholder="Compartilhe seus pensamentos (seja gentil e acolhedor)..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Publicar Comentário
        </button>
      </form>

      {/* List */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold shrink-0">
              {c.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="font-semibold text-neutral-900 dark:text-white">{c.name}</h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{c.date}</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
