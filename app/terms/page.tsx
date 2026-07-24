import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso do Maturidade Neurodivergente. Leia antes de utilizar o site.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <div className="max-w-content mx-auto py-12">
      <h1 className="text-4xl font-bold mb-2 text-neutral-900 dark:text-white">
        Termos de Uso
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Última atualização: 23 de julho de 2026
      </p>

      <div className="space-y-10 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* 1. Aceitação */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            1. Aceitação dos Termos
          </h2>
          <p className="mb-4">
            Ao acessar e utilizar o site <strong>Maturidade Neurodivergente</strong> (maturidadeneurodivergente.com.br), você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer parte destes termos, não utilize o site.
          </p>
          <p>
            Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação na página. O uso contínuo do site após as alterações constitui aceitação das novas condições.
          </p>
        </section>

        {/* 2. Descrição do Serviço */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            2. Descrição do Serviço
          </h2>
          <p className="mb-4">
            O Maturidade Neurodivergente é um site informativo e educacional dedicado a fornecer conteúdo sobre neurodiversidade, incluindo TDAH, autismo, dislexia e outras condições neurológicas. Nosso objetivo é promover a compreensão, o acolhimento e o autoconhecimento de pessoas neurodivergentes.
          </p>
          <p>
            O site oferece artigos, guias, recursos e uma comunidade para discussão sobre temas relacionados à neurodiversidade.
          </p>
        </section>

        {/* 3. Conteúdo Informativo */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            3. Natureza do Conteúdo
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-300">
              Aviso Importante:
            </p>
            <p className="text-yellow-700 dark:text-yellow-400">
              Todo o conteúdo publicado neste site é de caráter <strong>informativo e educacional</strong>. Ele não substitui, em hipótese alguma, aconselhamento médico, psicológico, psiquiátrico ou legal profissional.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Nunca ignore conselhos profissionais de saúde em razão de informações lidas neste site.</li>
            <li>Consulte sempre um profissional de saúde qualificado para diagnósticos, tratamentos e decisões sobre sua condição.</li>
            <li>Em caso de urgência ou emergência, procure atendimento médico imediatamente ou ligue para o SAMU (192) ou Bombeiros (193).</li>
          </ul>
        </section>

        {/* 4. Propriedade Intelectual */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            4. Propriedade Intelectual
          </h2>
          <p className="mb-4">
            Todo o conteúdo publicado no site — incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, compilações de dados, software e design — é de propriedade exclusiva do Maturidade Neurodivergente ou de seus licenciadores, e é protegido pelas leis brasileiras de direitos autorais (Lei nº 9.610/1998) e propriedade industrial.
          </p>
          <p className="mb-4">
            Você pode:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Compartilhar links para nossas páginas em redes sociais ou outros sites.</li>
            <li>Citar trechos curtos com devida atribuição e link para a página original.</li>
          </ul>
          <p className="mb-4">
            Você <strong>NÃO</strong> pode:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reproduzir, copiar ou redistribuir conteúdo integralmente sem autorização prévia por escrito.</li>
            <li>Modificar, adaptar ou criar trabalhos derivados.</li>
            <li>Usar nosso conteúdo para fins comerciais sem autorização.</li>
            <li>Remover avisos de direitos autorais de qualquer conteúdo.</li>
          </ul>
        </section>

        {/* 5. Conduta do Usuário */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            5. Conduta do Usuário
          </h2>
          <p className="mb-4">
            Ao utilizar o site, você concorda em NÃO:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Publicar conteúdo que seja difamatório, calunioso, discriminatório, ofensivo ou que incite ódio contra qualquer grupo.</li>
            <li>Assediar, ameaçar ou intimidar outros usuários.</li>
            <li>Publicar spam, publicidade não autorizada ou conteúdo enganoso.</li>
            <li>Tentar acessar áreas restritas do site ou comprometer a segurança da plataforma.</li>
            <li>Usar o site para fins ilegais ou não autorizados.</li>
            <li>Coletar dados pessoais de outros usuários sem consentimento.</li>
            <li>Fazer-se passar por outra pessoa ou entidade.</li>
          </ul>
          <p className="mt-4">
            Reservamo-nos o direito de remover conteúdo e/ou bloquear usuários que violarem estas regras, sem aviso prévio.
          </p>
        </section>

        {/* 6. Comentários e Conteúdo Gerado pelo Usuário */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            6. Comentários e Conteúdo Gerado pelo Usuário
          </h2>
          <p className="mb-4">
            Ao postar comentários ou outro conteúdo no site, você:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Declara e garante que tem o direito de publicar tal conteúdo.</li>
            <li>Concede ao Maturidade Neurodivergente uma licença não exclusiva, livre de royalties, para usar, modificar e exibir esse conteúdo em conexão com o funcionamento do site.</li>
            <li>É responsável pelo conteúdo que publica — não nos responsabilizamos por opiniões expressas por usuários.</li>
          </ul>
          <p className="mt-4">
            Recomendamos que não compartilhe informações pessoais sensíveis (como dados de saúde, diagnósticos ou informações de contato) em comentários públicos.
          </p>
        </section>

        {/* 7. Links Externos */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            7. Links para Sites de Terceiros
          </h2>
          <p className="mb-4">
            Nosso site pode conter links para sites de terceiros (como fontes científicas, órgãos governamentais, etc.). Esses links são fornecidos para conveniência e referência.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Não endossamos, garantimos ou assumimos responsabilidade pelo conteúdo de sites de terceiros.</li>
            <li>Não somos responsáveis por práticas de privacidade de sites externos.</li>
            <li>Recomendamos que você leia as políticas de privacidade de qualquer site de terceiros que visitar.</li>
          </ul>
        </section>

        {/* 8. Isenção de Responsabilidade */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            8. Isenção de Responsabilidade (Disclaimer)
          </h2>
          <p className="mb-4">
            O conteúdo do site é fornecido &quot;como está&quot; e &quot;conforme disponível&quot;, sem garantias de qualquer tipo, expressas ou implícitas.
          </p>
          <p className="mb-4">
            Em nenhuma circunstância o Maturidade Neurodivergente será responsável por:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso do site.</li>
            <li>Erros, imprecisões ou omissões no conteúdo.</li>
            <li>Interrupções, indisponibilidades ou falhas no site.</li>
            <li>Vírus ou elementos maliciosos que possam afetar seu dispositivo.</li>
            <li>Decisões tomadas com base no conteúdo do site (sempre consulte um profissional).</li>
          </ul>
        </section>

        {/* 9. Indenização */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            9. Indenização
          </h2>
          <p>
            Ao utilizar o site, você concorda em indenizar e isentar o Maturidade Neurodivergente, seus proprietários, colaboradores e parceiros de quaisquer reclamações, danos, perdas, responsabilidades e despesas (incluindo honorários advocatícios) decorrentes do uso indevido do site ou violação destes Termos de Uso.
          </p>
        </section>

        {/* 10. Disponibilidade */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            10. Disponibilidade do Site
          </h2>
          <p>
            Nos esforçamos para manter o site disponível 24 horas por dia, 7 dias por semana. No entanto, não garantimos disponibilidade ininterrupta. O site pode ficar temporariamente indisponível para manutenção, atualizações ou por motivos fora do nosso controle. Não nos responsabilizamos por quaisquer perdas decorrentes da indisponibilidade do site.
          </p>
        </section>

        {/* 11. Jurisdição e Foro */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            11. Jurisdição e Foro
          </h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será submetida ao foro da comarca de Brasília/DF, com exclusão de qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        {/* 12. Legislação Aplicável */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            12. Legislação Aplicável
          </h2>
          <p className="mb-4">
            Estes termos são regidos pela legislação brasileira, em especial:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lei nº 12.965/2014 (Marco Civil da Internet)</li>
            <li>Lei nº 13.709/2018 (LGPD — Lei Geral de Proteção de Dados)</li>
            <li>Lei nº 8.078/1990 (Código de Defesa do Consumidor)</li>
            <li>Lei nº 9.610/1998 (Lei de Direitos Autorais)</li>
          </ul>
        </section>

        {/* 13. Disposições Finais */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            13. Disposições Finais
          </h2>
          <p className="mb-4">
            A eventual invalidação de qualquer cláusula destes Termos de Uso não afetará a validade das demais cláusulas, que permanecerão em pleno vigor e efeito.
          </p>
          <p>
            A tolerância de qualquer partes quanto ao descumprimento de qualquer cláusula destes termos não constituirá renúncia ou precedente.
          </p>
        </section>

        {/* 14. Contato */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            14. Contato
          </h2>
          <p className="mb-4">
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato:
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
