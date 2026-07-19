export default function About() {
  return (
    <>
      <div className="max-w-content mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
          👤 Sobre Nós
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
          Bem-vindo ao Maturidade Neurodivergente — um espaço dedicado a explorar, entender e celebrar a vida como pessoa neurodivergente.
        </p>
      </div>

      <div className="max-w-content mx-auto space-y-12">
        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            🎯 Missão
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Criar um espaço inclusivo, acessível e compassivo onde pessoas neurodivergentes possam:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>✓ Entender sua própria neurodivergência de forma não patológica</li>
            <li>✓ Explorar maturidade emocional e desenvolvimento pessoal</li>
            <li>✓ Descobrir estratégias práticas para navegar a vida adulta</li>
            <li>✓ Conectar-se com comunidades de suporte</li>
            <li>✓ Celebrar as forças únicas de seu funcionamento cerebral</li>
          </ul>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
            💎 Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">
                ♿ Acessibilidade
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Conteúdo claro, baixa carga sensorial, modo escuro, fontes legíveis e sem distrações.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">
                🤝 Inclusão
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Reconhecemos a neurodiversidade como uma variação natural, não uma deficiência.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">
                💡 Clareza
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Informações diretas, bem organizadas e fáceis de digerir.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-dark-card p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">
                🌱 Compaixão
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Entendemos que cada jornada é única. Sem julgamentos, apenas apoio.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
            📚 O Que Você Encontrará Aqui
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                🧠 Neurodiversidade 101
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Conceitos fundamentais: o que é TDAH, autismo, dislexia? Como funcionamos? Qual é a diferença entre diagnóstico e identidade?
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                🌱 Maturidade Emocional
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Desenvolvimento inteligência emocional, gestão de emoções, autossabotagem e autocompaixão para neurodivergentes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                💡 Autoconhecimento
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Ferramentas, exercícios e reflexões para entender seus padrões, forças e desafios únicos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                👩‍💼 Vida Adulta Neurodivergente
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Carreira, relacionamentos, finanças, moradia, saúde — estratégias práticas para cada área da vida.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                📚 Recursos
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Livros recomendados, ferramentas, comunidades, podcasts e plataformas que podem ajudar sua jornada.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-neutral-100 dark:bg-dark-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            📖 Nossa História
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            Este projeto nasceu da necessidade pessoal de um espaço que entendesse a complexidade de ser neurodivergente na vida adulta — não como algo a ser "consertado", mas como algo a ser compreendido e integrado.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Acreditamos que maturidade neurodivergente é possível quando nos permitimos ser quem somos, entender como funcionamos e construir uma vida que respeite nossos ritmos e necessidades únicas.
          </p>
        </section>
      </div>
    </>
  );
}
