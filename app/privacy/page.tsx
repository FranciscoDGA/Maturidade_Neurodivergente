export default function Privacy() {
  return (
    <div className="max-w-content mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
        Política de Privacidade
      </h1>

      <div className="space-y-8 text-neutral-700 dark:text-neutral-300">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Introdução
          </h2>
          <p>
            Maturidade Neurodivergente respeita sua privacidade. Esta política explica como coletamos e usamos informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Informações Coletadas
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Informações fornecidas voluntariamente através de formulários (nome, email)</li>
            <li>Dados analíticos anônimos sobre como você usa o site</li>
            <li>Preferências do navegador (como o tema escuro)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Como Usamos Suas Informações
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Para responder suas mensagens</li>
            <li>Para enviar newsletter (apenas se consentimento dado)</li>
            <li>Para melhorar o site e a experiência do usuário</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Sua Segurança
          </h2>
          <p>
            Tomamos medidas para proteger suas informações. No entanto, nenhuma transmissão na internet é 100% segura.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Contato
          </h2>
          <p>
            Dúvidas sobre privacidade? Entre em contato através da{" "}
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
