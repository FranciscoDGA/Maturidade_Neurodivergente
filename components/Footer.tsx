import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: "📷", url: "https://instagram.com" },
  { name: "Twitter", icon: "𝕏", url: "https://twitter.com" },
  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-neutral-200 dark:border-slate-800 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="font-black tracking-tighter text-neutral-900 dark:text-white mb-4 flex items-center gap-1">
              <span className="text-primary-600 dark:text-primary-500 font-extrabold tracking-tight">M</span>
              <span className="text-neutral-900 dark:text-white font-light tracking-widest uppercase text-sm mt-1">Neurodivergente</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-md">
              Um espaço inclusivo dedicado a explorar maturidade neurodivergente com clareza, compaixão e acessibilidade. Crescendo fora dos padrões.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Conecte-se
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-slate-800 text-sm font-semibold hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                  title={link.name}
                >
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} Maturidade Neurodivergente. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacidade
            </Link>
            <Link href="/terms" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
