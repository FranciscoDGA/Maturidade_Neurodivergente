import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Maturidade Neurodivergente. Saiba como seus dados são coletados, utilizados e protegidos conforme a LGPD.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <div className="max-w-content mx-auto py-12">
      <h1 className="text-4xl font-bold mb-2 text-neutral-900 dark:text-white">
        Política de Privacidade
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Última atualização: 23 de julho de 2026
      </p>

      <div className="space-y-10 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* 1. Introdução */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            1. Introdução
          </h2>
          <p className="mb-4">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o <strong>Maturidade Neurodivergente</strong> (&quot;nós&quot;, &quot;nosso site&quot;) coleta, usa, armazena e protege as informações pessoais dos usuários que acessam nosso site, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
          </p>
          <p className="mb-4">
            Ao acessar ou utilizar nosso site, você concorda com as práticas descritas nesta política. Caso não concorde, solicitamos que não utilize o site.
          </p>
          <p>
            Esta política aplica-se exclusivamente ao site <code>maturidadeneurodivergente.com.br</code> e não a sites de terceiros, mesmo que acessados por meio de links presentes em nosso conteúdo.
          </p>
        </section>

        {/* 2. Dados Pessoais Coletados */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            2. Dados Pessoais Coletados
          </h2>
          <p className="mb-4">
            Podemos coletar os seguintes tipos de dados pessoais, dependendo da sua interação com o site:
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            2.1 Dados fornecidos voluntariamente
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Nome e email:</strong> quando você preenche formulários de contato, se inscreve na newsletter ou envia comentários.</li>
            <li><strong>Conteúdo de mensagens:</strong> informações contidas em e-mails ou formulários que você nos envia.</li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            2.2 Dados coletados automaticamente
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência e páginas de referência.</li>
            <li><strong>Cookies e tecnologias semelhantes:</strong> consulte nossa <a href="/cookies" className="text-primary-600 dark:text-primary-400 underline">Política de Cookies</a> para detalhes.</li>
            <li><strong>Dados analíticos:</strong> estatísticas agregadas sobre uso do site, coletadas de forma anônima.</li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            2.3 Dados que NÃO coletamos
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Dados de saúde, diagnósticos médicos ou informações sobre condição neurológica (a menos que você voluntariamente compartilhe em comentários).</li>
            <li>Dados financeiros ou de pagamento.</li>
            <li>Dados de menores de 18 anos (ver seção 8).</li>
          </ul>
        </section>

        {/* 3. Finalidade do Tratamento */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            3. Finalidade do Tratamento dos Dados
          </h2>
          <p className="mb-4">
            Utilizamos seus dados pessoais para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Responder solicitações:</strong> entrar em contato quando você nos envia uma mensagem via formulário ou e-mail.</li>
            <li><strong>Enviar newsletter:</strong> apenas com seu consentimento expresso. Você pode cancelar a qualquer momento.</li>
            <li><strong>Melhorar o site:</strong> analisar dados de navegação para aprimorar conteúdo, usabilidade e experiência do usuário.</li>
            <li><strong>Garantir segurança:</strong> prevenir fraudes, abusos e atividades maliciosas.</li>
            <li><strong>Cumprir obrigações legais:</strong> quando exigido por lei ou ordem judicial.</li>
          </ul>
        </section>

        {/* 4. Base Legal */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            4. Base Legal para o Tratamento (LGPD)
          </h2>
          <p className="mb-4">
            O tratamento dos seus dados pessoais é realizado com base em:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Consentimento (Art. 7º, I da LGPD):</strong> quando você nos fornece dados voluntariamente (formulários, newsletter).</li>
            <li><strong>Legítimo interesse (Art. 7º, IX da LGPD):</strong> para melhoria do site, segurança e analytics.</li>
            <li><strong>Obrigação legal (Art. 7º, II da LGPD):</strong> quando exigido por lei.</li>
          </ul>
        </section>

        {/* 5. Compartilhamento de Dados */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            5. Compartilhamento de Dados
          </h2>
          <p className="mb-4">
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Seus dados podem ser compartilhados apenas nas seguintes situações:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong> Prestadores de serviços:</strong> empresas que nos auxiliam na operação do site (hospedagem, analytics, envio de e-mails), que são obrigadas contratualmente a manter a confidencialidade dos dados.</li>
            <li><strong>Obrigação legal:</strong> quando exigido por lei, ordem judicial ou autoridade competente.</li>
            <li><strong>Proteção de direitos:</strong> quando necessário para proteger nossos direitos, segurança ou a dos nossos usuários.</li>
          </ul>
        </section>

        {/* 6. Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            6. Cookies e Tecnologias de Rastreamento
          </h2>
          <p>
            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência. Para informações detalhadas sobre os cookies que utilizamos, seus tipos e como gerenciá-los, consulte nossa{" "}
            <a href="/cookies" className="text-primary-600 dark:text-primary-400 underline">
              Política de Cookies
            </a>.
          </p>
        </section>

        {/* 7. Retenção de Dados */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            7. Retenção de Dados
          </h2>
          <p className="mb-4">
            Seus dados pessoais são mantidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Dados de formulário de contato:</strong> até 12 meses após o último contato, ou até que você solicite a exclusão.</li>
            <li><strong>Dados de newsletter:</strong> até o cancelamento da inscrição.</li>
            <li><strong>Dados analíticos:</strong> mantidos de forma agregada e anônima por período indeterminado.</li>
            <li><strong>Logs de acesso:</strong> até 6 meses, conforme exigido pela Lei do Marco Civil da Internet (Lei nº 12.965/2014).</li>
          </ul>
        </section>

        {/* 8. Direitos do Titular */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            8. Seus Direitos (LGPD — Art. 18)
          </h2>
          <p className="mb-4">
            De acordo com a LGPD, você tem direito a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Confirmação:</strong> saber se tratamos seus dados pessoais.</li>
            <li><strong>Acesso:</strong> obter acesso aos seus dados pessoais.</li>
            <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados.</li>
            <li><strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li><strong>Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor.</li>
            <li><strong>Eliminação:</strong> solicitar a eliminação dos dados tratados com base no consentimento.</li>
            <li><strong>Informação sobre compartilhamento:</strong> saber com quem seus dados foram compartilhados.</li>
            <li><strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento.</li>
            <li><strong>Oposição:</strong> opor-se ao tratamento, quando não baseado em consentimento.</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato através do e-mail ou formulário disponível na{" "}
            <a href="/contact" className="text-primary-600 dark:text-primary-400 underline">
              página de contato
            </a>.
          </p>
        </section>

        {/* 9. Menores de Idade */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            9. Menores de Idade
          </h2>
          <p>
            Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores de idade. Se você é responsável por um menor de 18 anos e acredita que ele nos forneceu dados pessoais, entre em contato para que possamos proceder com a exclusão.
          </p>
        </section>

        {/* 10. Segurança */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            10. Segurança dos Dados
          </h2>
          <p className="mb-4">
            Adotamos medidas técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, destruição, perda, alteração e qualquer forma de tratamento inadequado ou ilícito, incluindo:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Criptografia SSL/TLS (HTTPS) em todo o site.</li>
            <li>Limitação de acesso a dados pessoais apenas a pessoas autorizadas.</li>
            <li>Monitoramento regular de vulnerabilidades de segurança.</li>
          </ul>
          <p className="mt-4">
            No entanto, nenhum sistema de segurança é 100% infalível. Apesar de nos esforçarmos para proteger seus dados, não podemos garantir segurança absoluta.
          </p>
        </section>

        {/* 11. Transferência Internacional */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            11. Transferência Internacional de Dados
          </h2>
          <p>
            Alguns dos nossos prestadores de serviços (como hospedagem e analytics) podem estar localizados fora do Brasil. Nesses casos, a transferência de dados é feita em conformidade com a LGPD, com garantias adequadas de proteção, como cláusulas contratuais padrão ou decisões de adequação.
          </p>
        </section>

        {/* 12. Alterações */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            12. Alterações nesta Política
          </h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página com a data de &quot;Última atualização&quot; revisada. Recomendamos que você revise esta política regularmente.
          </p>
        </section>

        {/* 13. Contato */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            13. Contato
          </h2>
          <p className="mb-4">
            Se você tiver dúvidas, preocupações ou desejar exercer seus direitos em relação aos seus dados pessoais, entre em contato:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>E-mail:</strong> contato@maturidadeneurodivergente.com.br</li>
            <li><strong>Formulário:</strong> <a href="/contact" className="text-primary-600 dark:text-primary-400 underline">Página de Contato</a></li>
            <li><strong>Encarregado (DPO):</strong> contato@maturidadeneurodivergente.com.br</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
