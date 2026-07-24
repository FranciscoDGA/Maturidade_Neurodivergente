"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioReader({ contentId }: { contentId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
      return;
    }

    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try to find a Portuguese voice
      const ptVoice = voices.find((v) => v.lang.startsWith("pt-BR") || v.lang.startsWith("pt-PT"));
      
      if (utteranceRef.current && ptVoice) {
        utteranceRef.current.voice = ptVoice;
      }
    };

    window.speechSynthesis.onvoiceschanged = setVoice;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayPause = () => {
    if (!supported) return;

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      const element = document.getElementById(contentId);
      if (!element) return;
      
      const text = element.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find((v) => v.lang.startsWith("pt-BR") || v.lang.startsWith("pt-PT"));
      if (ptVoice) utterance.voice = ptVoice;
      
      utterance.rate = 0.9; // Slightly slower for better accessibility
      
      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };
      
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (supported) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  if (!supported) return null;

  return (
    <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 p-2 px-4 rounded-full text-sm mt-6 mb-2 w-fit border border-neutral-200 dark:border-neutral-700">
      <span className="font-semibold text-neutral-700 dark:text-neutral-300 mr-2 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        Ouvir artigo
      </span>
      
      <button 
        onClick={handlePlayPause}
        className="p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label={isPlaying && !isPaused ? "Pausar leitura" : "Iniciar leitura"}
      >
        {isPlaying && !isPaused ? (
          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {isPlaying && (
        <button 
          onClick={handleStop}
          className="p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Parar leitura"
        >
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      )}
    </div>
  );
}
