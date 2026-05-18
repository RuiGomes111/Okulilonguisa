"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    title: "Bem-vindo 👋",
    text: "Estás prestes a começar o jogo. Vamos mostrar-te como funciona rapidamente.",
  },
  {
    title: "Entrar no Jogo 🎮",
    text: "Na tela inicial, clica no botão 'Jogar' para começar.",
  },
  {
    title: "Escolher Nível 🧩",
    text: "Seleciona o nível que queres jogar. Cada nível tem perguntas diferentes.",
  },
  {
    title: "Responder Perguntas 🧠",
    text: "Lê a pergunta e escolhe uma das opções disponíveis.",
  },
  {
    title: "Pontuação 🏆",
    text: "Acerta para ganhar pontos. Erros mostram a resposta correta.",
  },
];

export default function GuiaJogo() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
  // 1. Verifica se já viu. Se não viu, abre o guia.
  const visto = localStorage.getItem("guia_visto");
   if (!visto) {
    setTimeout(() => {
      setOpen(true);
    }, 0);
  }
  

  // 2. Lógica do ESC
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);


const nextStep = () => {
  if (step < steps.length - 1) {
    setStep(step + 1);
  } else {
    localStorage.setItem("guia_visto", "true"); 
    setOpen(false);

    window.location.href = "/niveis";
  }
};


  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 ${
      open ? "hidden" : "block"
    }`}>
      <div className="bg-white text-black p-6 rounded-2xl max-w-md w-full text-center">
        
        <h2 className="text-xl font-bold mb-3">
          {steps[step].title}
        </h2>

        <p className="text-sm mb-5">
          {steps[step].text}
        </p>

        {/* Indicador */}
        <div className="flex justify-center gap-2 mb-4">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === step ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Botões */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className="px-4 py-2 text-sm bg-gray-200 rounded-xl disabled:opacity-50"
          >
            Voltar
          </button>

          <button
            onClick={nextStep}
            className="px-4 py-2 text-sm bg-green-500 text-white rounded-xl"
          >
            {step === steps.length - 1 ? "Começar 🚀" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
}