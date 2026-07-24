import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Saiba como o Maturidade Neurodivergente utiliza cookies e tecnologias de rastreamento para melhorar sua experiência.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <div className="max-w-content mx-auto py-12">
      <h1 className="text-4xl font-bold mb-2 text-neutral-900 dark:text-white">
        Política de Cookies
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Última atualização: 23 de julho de 2026
      </p>

      <div className="space-y-10 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* 1. O que são Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            1. O que são Cookies?
          </h2>
          <p className="mb-4">
            Cookies são pequenos arquivos de texto que são colocados no seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como fornecer informações aos proprietários do site.
          </p>
          <p>
            Os cookies permitem que o site &quot;lembre&quot; das suas ações e preferências (como login, idioma, tamanho de fonte e outras preferências de exibição) ao longo do tempo, para que você não precise redefini-las sempre que visitar o site ou navegar entre páginas.
          </p>
        </section>

        {/* 2. Como Usamos Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            2. Como Utilizamos Cookies
          </h2>
          <p className="mb-4">
            Utilizamos cookies para os seguintes fins:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site. Sem eles, o site não pode funcionar corretamente.</li>
            <li><strong>Cookies de funcionalidade:</strong> permitem que o site lembre das suas preferências (como tema escuro/claro) para fornecer uma experiência mais personalizada.</li>
            <li><strong>Cookies analíticos:</strong> ajudam-nos a entender como os visitantes interagem com o site, coletando e relatando informações de forma anônima.</li>
            <li><strong>Cookies de performance:</strong> são usados para otimizar o desempenho do site, garantindo tempos de carregamento rápidos.</li>
          </ul>
        </section>

        {/* 3. Tipos de Cookies Utilizados */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            3. Tipos de Cookies que Utilizamos
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-300 dark:border-neutral-600 text-sm mb-4">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-left font-semibold text-neutral-900 dark:text-white">Categoria</th>
                  <th className="border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-left font-semibold text-neutral-900 dark:text-white">Finalidade</th>
                  <th className="border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-left font-semibold text-neutral-900 dark:text-white">Consentimento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Essenciais</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Funcionamento básico, segurança, sessão</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Não requer</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Funcionalidade</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Preferências do usuário (tema, idioma)</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Não requer</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Analíticos</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Estatísticas de uso (analytics)</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Requer consentimento</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Performance</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Otimização de carregamento</td>
                  <td className="border border-neutral-300 dark:border-neutral-600 px-4 py-2">Requer consentimento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Cookies de Terceiros */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            4. Cookies de Terceiros
          </h2>
          <p className="mb-4">
            Alguns cookies são definidos por serviços de terceiros que aparecem nas nossas páginas. Utilizamos os seguintes serviços de terceiros:
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            4.1 Vercel Analytics
          </h3>
          <p className="mb-4">
            Utilizamos o Vercel Analytics para coletar dados analíticos anônimos sobre o uso do site. Isso nos ajuda a entender como os visitantes interagem com nosso conteúdo e a melhorar continuamente o site.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Dados coletados:</strong> páginas visitadas, tempo de permanência, dispositivo, navegador, referrer.</li>
            <li><strong>Finalidade:</strong> melhoria do site e experiência do usuário.</li>
            <li><strong>Política de privacidade:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">Vercel Privacy Policy</a></li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            4.2 Google Analytics (quando aplicável)
          </h3>
          <p className="mb-4">
            Caso utilizemos Google Analytics no futuro, os dados serão coletados de forma anonimizada (com IP mascarado) e em conformidade com a LGPD.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Política de privacidade:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">Google Privacy Policy</a></li>
          </ul>
        </section>

        {/* 5. Duração dos Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            5. Duração dos Cookies
          </h2>
          <p className="mb-4">
            Os cookies podem ter diferentes durações:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies de sessão:</strong> são temporários e existem apenas durante a sua visita ao site. São automaticamente excluídos quando você fecha o navegador.</li>
            <li><strong>Cookies persistentes:</strong> permanecem no seu dispositivo por um período determinado ou até que você os exclua manualmente. São usados para lembrar suas preferências entre visitas.</li>
          </ul>
        </section>

        {/* 6. Gerenciando Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            6. Como Gerenciar e Desativar Cookies
          </h2>
          <p className="mb-4">
            Você pode controlar e gerenciar cookies de diversas maneiras:
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            6.1 Configurações do Navegador
          </h3>
          <p className="mb-4">
            A maioria dos navegadores permite que você recuse ou aceite cookies. Veja como fazer nos principais navegadores:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados de sites</li>
            <li><strong>Firefox:</strong> Configurações → Privacidade e segurança → Cookies e dados de sites</li>
            <li><strong>Safari:</strong> Preferências → Privacidade → Gerenciar dados de sites</li>
            <li><strong>Edge:</strong> Configurações → Cookies e permissões de site</li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            6.2 Desativação por Categoria
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies essenciais:</strong> NÃO podem ser desativados, pois são necessários para o funcionamento do site.</li>
            <li><strong>Cookies de funcionalidade:</strong> podem ser desativados, mas isso afetará sua experiência (ex: lembrança de tema).</li>
            <li><strong>Cookies analíticos e de performance:</strong> podem ser desativados sem afetar o funcionamento do site.</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-4 mt-4">
            <p className="font-semibold text-blue-800 dark:text-blue-300">
              Nota:
            </p>
            <p className="text-blue-700 dark:text-blue-400">
              Desativar cookies pode afetar sua experiência de navegação. Algumas funcionalidades do site podem ficar indisponíveis ou não funcionar corretamente.
            </p>
          </div>
        </section>

        {/* 7. Direitos do Usuário (LGPD) */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            7. Seus Direitos (LGPD)
          </h2>
          <p className="mb-4">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Consentimento informado:</strong> ser informado sobre o uso de cookies antes deles serem ativados.</li>
            <li><strong>Revogação:</strong> revogar o consentimento para cookies analíticos a qualquer momento.</li>
            <li><strong>Acesso:</strong> saber quais dados são coletados por meio de cookies.</li>
            <li><strong>Eliminação:</strong> solicitar a exclusão de dados coletados por cookies.</li>
          </ul>
          <p className="mt-4">
            Para exercer seus direitos, entre em contato através do formulário na{" "}
            <a href="/contact" className="text-primary-600 dark:text-primary-400 underline">
              página de contato
            </a>.
          </p>
        </section>

        {/* 8. Atualizações desta Política */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            8. Atualizações desta Política
          </h2>
          <p>
            Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política regularmente. A data da &quot;Última atualização&quot; no topo desta página indica quando foi pela última vez revisada.
          </p>
        </section>

        {/* 9. Contato */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            9. Contato
          </h2>
          <p className="mb-4">
            Se você tiver dúvidas sobre esta Política de Cookies, entre em contato:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>E-mail:</strong> contato@maturidadeneurodivergente.com.br</li>
            <li><strong>Formulário:</strong> <a href="/contact" className="text-primary-600 dark:text-primary-400 underline">Página de Contato</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
