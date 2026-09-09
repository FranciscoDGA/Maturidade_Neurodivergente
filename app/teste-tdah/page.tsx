"use client";

import { useState } from "react";
import Link from "next/link";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

interface Question {
  id: number;
  text: string;
  isHighSeverity: boolean; // para critério de rastreio ASRS-18 Parte A
}

const asrsQuestions: Question[] = [
  {
    id: 1,
    text: "Com que frequência você tem dificuldade para finalizar os detalhes finais de um projeto, depois que as partes mais desafiadoras já foram feitas?",
    isHighSeverity: true,
  },
  {
    id: 2,
    text: "Com que frequência você tem dificuldade para organizar as coisas quando precisa fazer uma tarefa que exige organização?",
    isHighSeverity: true,
  },
  {
    id: 3,
    text: "Com que frequência você tem problemas para lembrar de compromissos, prazos ou tarefas do dia a dia?",
    isHighSeverity: true,
  },
  {
    id: 4,
    text: "Quando você precisa realizar uma tarefa que exige muito pensamento e concentração, com que frequência você a evita ou adia o início?",
    isHighSeverity: true,
  },
  {
    id: 5,
    text: "Com que frequência você fica inquieto, mexendo as mãos ou os pés, ou se remexendo na cadeira quando precisa ficar sentado por muito tempo?",
    isHighSeverity: false,
  },
  {
    id: 6,
    text: "Com que frequência você se sente excessivamente ativo e compelido a fazer coisas, como se estivesse com 'um motor ligado por dentro'?",
    isHighSeverity: false,
  },
];

const options = [
  { label: "Nunca", value: 0 },
  { label: "Raramente", value: 1 },
  { label: "Às vezes", value: 2 },
  { label: "Frequentemente", value: 3 },
  { label: "Muito Frequentemente", value: 4 },
];

export default function TesteTDAH() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isComplete = asrsQuestions.every((q) => answers[q.id] !== undefined);

  // No ASRS-18 Parte A:
  // Questões 1, 2, 3: pontua como significativo se resposta for "Às vezes" (2), "Frequentemente" (3) ou "Muito Frequentemente" (4)
  // Questões 4, 5, 6: pontua se for "Frequentemente" (3) ou "Muito Frequentemente" (4)
  // 4 ou mais respostas significativas indicam forte probabilidade de TDAH
  const calculateResult = () => {
    let significantCount = 0;

    asrsQuestions.forEach((q) => {
      const val = answers[q.id];
      if (q.id <= 3 && val >= 2) {
        significantCount++;
      } else if (q.id > 3 && val >= 3) {
        significantCount++;
      }
    });

    return {
      significantCount,
      isPositive: significantCount >= 4,
    };
  };

  const result = isComplete ? calculateResult() : null;

  return (
    <div className="py-12 max-w-content mx-auto">
      {/* Header */}
      <div className="mb-16 space-y-6 text-center sm:text-left">
        <div className="inline-block text-xs uppercase tracking-widest text-neutral-500 font-semibold px-3 py-1 border border-neutral-200 dark:border-neutral-800">
          Ferramenta de Rastreio Educativo
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-light tracking-tight text-neutral-900 dark:text-white">
          Auto-Teste de Rastreio de <span className="font-bold">TDAH em Adultos</span>
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          Baseado no questionário padrão <strong>ASRS-V1.1 (Parte A)</strong> da Organização Mundial da Saúde (OMS). Responda com base no seu comportamento nos últimos 6 meses.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-12">
        {asrsQuestions.map((q, idx) => (
          <div
            key={q.id}
            className="border-t border-neutral-200 dark:border-neutral-800 pt-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-mono text-sm text-neutral-400 font-semibold pt-1">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <p className="text-lg font-medium text-neutral-900 dark:text-white leading-relaxed">
                {q.text}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pl-8">
              {options.map((opt) => {
                const isSelected = answers[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(q.id, opt.value)}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center transition-all border ${
                      isSelected
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                        : "bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500">
          {Object.keys(answers).length} de {asrsQuestions.length} perguntas respondidas
        </p>
        <button
          type="button"
          disabled={!isComplete}
          onClick={() => setShowResult(true)}
          className={`py-4 px-8 font-semibold uppercase tracking-widest text-sm transition-all ${
            isComplete
              ? "bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 cursor-pointer"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"
          }`}
        >
          Ver Meu Resultado
        </button>
      </div>

      {/* Result Card */}
      {showResult && result && (
        <div className="mt-16 p-8 sm:p-12 border-2 border-neutral-900 dark:border-white bg-neutral-100/70 dark:bg-neutral-900/50 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-neutral-900 dark:bg-white" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-500">
              Resultado da Triagem
            </h2>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
            {result.isPositive
              ? "Sintomas Altamente Consistentes com TDAH em Adultos"
              : "Sintomas Abaixo do Ponto de Corte Típico"}
          </h3>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
            {result.isPositive ? (
              <>
                Você pontuou em <strong>{result.significantCount} de 6 critérios críticos</strong> de rastreio da OMS. Na literatura clínica, 4 ou mais respostas significativas indicam que é <strong>fortemente recomendada uma avaliação diagnóstica</strong> com profissional habilitado (médico psiquiatra ou neuropsicólogo).
              </>
            ) : (
              <>
                Você pontuou em <strong>{result.significantCount} de 6 critérios críticos</strong>. Embora sua pontuação esteja abaixo do corte clássico para TDAH nesta triagem inicial, se você sente prejuízos em sua rotina ou foco, vale a pena investigar outros fatores, como sobrecarga emocional, privação de sono ou ansiedade.
              </>
            )}
          </p>

          <div className="pt-6 border-t border-neutral-300 dark:border-neutral-700 flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/sinais-tdah-adulto"
              className="inline-block py-3 px-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs uppercase tracking-widest font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Ler: 15 Sinais de TDAH em Adultos &rarr;
            </Link>
            <Link
              href="/blog/avaliacao-neuropsicologica-adultos"
              className="inline-block py-3 px-6 border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-xs uppercase tracking-widest font-semibold text-center hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              Como Funciona a Avaliação Clínica &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <MedicalDisclaimer />
    </div>
  );
}
