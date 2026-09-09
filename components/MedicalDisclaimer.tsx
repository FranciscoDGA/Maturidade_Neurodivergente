export default function MedicalDisclaimer() {
  return (
    <aside
      aria-label="Aviso Legal Informativo"
      className="my-10 border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-6 rounded-none"
    >
      <div className="flex items-start gap-3">
        <span className="text-neutral-500 dark:text-neutral-400 font-mono text-sm uppercase tracking-widest mt-0.5">
          [Aviso]
        </span>
        <div className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          <p className="font-semibold text-neutral-900 dark:text-neutral-200">
            Conteúdo informativo baseado em vivência e pesquisa independente
          </p>
          <p>
            O autor deste blog compartilha vivências reais, reflexões e estratégias de rotina na vida adulta neurodivergente, <strong>não sendo médico, psiquiatra ou psicólogo</strong>. As informações publicadas aqui têm finalidade exclusivamente educativa e de acolhimento mútuo, e não devem ser utilizadas como substitutas para diagnóstico clínico, avaliação neuropsicológica ou prescrição médica. Se você suspeita de TDAH, TEA ou outra condição, procure um profissional de saúde mental devidamente habilitado.
          </p>
        </div>
      </div>
    </aside>
  );
}
