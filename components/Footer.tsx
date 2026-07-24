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
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/maturidadend",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/maturidadend",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-900 text-neutral-300 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Mantenha-se Conectado
              </h3>
              <p className="text-white/80 max-w-md">
                Receba artigos, dicas e reflexões sobre neurodiversidade direto no seu email. Sem spam, prometemos.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary-700 font-bold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-white font-display font-bold text-lg leading-none block">
                  Maturidade
                </span>
                <span className="text-primary-400 text-[10px] font-bold uppercase tracking-widest leading-none">
                  Neurodivergente
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Um espaço inclusivo dedicado a explorar a maturidade neurodivergente com clareza, compaixão e acessibilidade.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-400 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Categorias
            </h4>
            <ul className="space-y-2.5">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Artigos Populares
            </h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Mapa do Site
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Buscar Artigos
                </Link>
              </li>
              <li>
                <Link href="/favoritos" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  Meus Favoritos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500 text-center md:text-left">
            &copy; {currentYear} Maturidade Neurodivergente. Todos os direitos reservados. Feito com{' '}
            <span className="text-red-400">&#9829;</span> para a comunidade neurodivergente.
          </p>
          <p className="text-xs text-neutral-600 text-center md:text-right">
            Conteúdo informativo. Não substitui orientação profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}