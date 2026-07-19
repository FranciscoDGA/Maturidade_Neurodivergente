export default function Terms() {
  return (
    <div className="max-w-content mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
        Termos de Uso
      </h1>

      <div className="space-y-8 text-neutral-700 dark:text-neutral-300">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Bem-vindo
          </h2>
          <p>
            Ao acessar este site, você concorda com estes termos de uso. Se não concordar, não continue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Conteúdo
          </h2>
          <p>
            O conteúdo deste site é fornecido para fins informativos e educacionais. Não substitui aconselhamento profissional médico, psicológico ou legal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Propriedade Intelectual
          </h2>
          <p>
            Todo conteúdo (textos, imagens, designs) é protegido por direitos autorais. Você pode compartilhar e fazer referência, mas não reproduzir sem permissão.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Limitação de Responsabilidade
          </h2>
          <p>
            Não somos responsáveis por danos diretos ou indiretos do uso deste site ou conteúdo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Mudanças
          </h2>
          <p>
            Podemos atualizar estes termos a qualquer momento. Continuando a usar o site, você aceita as mudanças.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Contato
          </h2>
          <p>
            Dúvidas? Entre em contato através da{" "}
            <a href="/contact" className="text-primary-600 dark:text-primary-400">
              página de contato
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
