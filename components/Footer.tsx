import Link from "next/link";

const categories = [
  { name: "Neurodiversidade 101", href: "/blog?category=Neurodiversidade 101" },
  { name: "Maturidade Neurodivergente", href: "/blog?category=Maturidade Neurodivergente" },
  { name: "TDAH", href: "/blog?category=TDAH" },
  { name: "Autismo", href: "/blog?category=Autismo" },
  { name: "Diagnóstico Tardio", href: "/blog?category=Diagnóstico Tardio" },
  { name: "Autoconhecimento", href: "/blog?category=Autoconhecimento" },
];

const resources = [
  { name: "Guia para Iniciantes", href: "/blog/neurodiversidade-guia-iniciantes" },
  { name: "Organização com TDAH", href: "/blog/organizacao-tdah" },
  { name: "Autismo em Adultos", href: "/blog/autismo-adultos" },
  { name: "Diagnóstico Tardio", href: "/blog/diagnostico-tardio" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/maturidadend",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/maturidadend",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-dark-border bg-neutral-50 dark:bg-dark-bg text-neutral-900 dark:text-neutral-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20">
        
        {/* Top Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-5 flex flex-col space-y-8">
            <Link href="/" className="group font-display font-light text-neutral-900 dark:text-white flex items-center gap-1.5 focus:outline-none">
              <span className="font-bold tracking-tight">Maturidade</span>
              <span className="text-neutral-500 font-normal">Neurodivergente</span>
            </Link>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Um espaço editorial dedicado a explorar a maturidade neurodivergente com clareza científica, empatia e ausência de jargões corporativos.
            </p>

            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-4">Inscreva-se</h4>
              <form className="flex w-full max-w-sm relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 pr-10 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
                  aria-label="Inscrever-se"
                >
                  &rarr;
                </button>
              </form>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block col-span-1 md:col-span-1"></div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">Categorias</h4>
              <ul className="space-y-4">
                {categories.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors relative group">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">Artigos</h4>
              <ul className="space-y-4">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">Institucional</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:gap-8 text-xs text-neutral-500 text-center md:text-left">
            <p>
              &copy; {currentYear} Maturidade Neurodivergente. Todos os direitos reservados.
            </p>
            <p className="mt-2 md:mt-0 opacity-70">
              Conteúdo informativo. Não substitui orientação profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}