import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: "📷", url: "https://instagram.com" },
  { name: "Twitter", icon: "𝕏", url: "https://twitter.com" },
  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-dark-card border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">
              Sobre
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              Um espaço inclusivo dedicado a explorar maturidade neurodivergente com clareza, compaixão e acessibilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} Maturidade Neurodivergente. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm">
              Privacidade
            </Link>
            <Link href="/terms" className="text-sm">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
