"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


interface Question {
  question: string;
  options: string[];
  img?: string; 
  answer: string;
}

const questions: Question[]= [
  {
    question: "Como se diz 'Elefante' em Umbundu?",
    options: ["Onjou", "Serpente", "Cavalo", "Pássaro"],
    img: "/elephant.png",
    answer: "Onjou",
  },
  {
    question: "Como se diz 'Girafa' em Umbundu?",
    options: ["Cavalo", "Macaco", "Onça", "Girafa"],
    img:"/giraffe-OwMJToyS.png",
    answer: "Girafa",
  },
  {
    question: "Como se diz 'Leão' em Umbundu?",
    options: ["Leopardo", "Hiena", "Javali", "Leão"],
    img: "/lion-S2AAjwwL.png",
    answer: "Leão",
  },
  {
    question: "Como se diz 'Coruja' em Umbundu?",
    options: ["Coruja", "Porco", "Rato", "Sapo"],
    img: "/owl-DBwZenDH.png",
    answer: "Coruja",
  },
  {
    question: "Qual o planeta conhecido como Planeta Vermelho?",
    options: ["Marte", "Terra", "Vénus", "Júpiter"],
    answer: "Marte",
  },
];

export default function Facil() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [locked, setLocked] = useState(false);

  const colors = [
    "bg-blue-500 hover:bg-blue-600",
    "bg-purple-500 hover:bg-purple-600",
    "bg-green-500 hover:bg-green-600",
    "bg-orange-500 hover:bg-orange-600",
  ];

  function handleAnswer(option: string) {
    if (locked) return;

    setSelected(option);
    setLocked(true);

    const correct = questions[current].answer === option;
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setSelected(null);
        setLocked(false);
      } else {
        setFinished(true);
      }
    }, 500);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setLocked(false);
  }

  const q = questions[current];

  if (finished && score> 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
        <div className="bg-white shadow-2xl rounded-3xl p-10 text-center w-full max-w-md">
          <h1 className="text-6xl mb-4">🏆</h1>
          <h2 className="text-3xl font-bold text-gray-900">Excelente!</h2>
          <p className="text-gray-500 mt-2">Resultado final</p>
          <div className="mt-6 text-4xl font-black text-blue-600">
            {score} / {questions.length}
          </div>
          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition active:scale-95 shadow-lg shadow-blue-200">

          <Link
            href="../jogo_medio"
            
          >
            Proxímo Nível
          </Link>
          </button>
          <Link href="/" className="block mt-6 text-gray-400 hover:text-gray-600 font-medium">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  if(finished){
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
        <div className="bg-white shadow-2xl rounded-3xl p-10 text-center w-full max-w-md">
          <h1 className="text-6xl mb-4">🏆</h1>
          <h2 className="text-3xl font-bold text-gray-900">OH Que mal!</h2>
          <p className="text-gray-500 mt-2">Resultado final</p>
          <div className="mt-6 text-4xl font-black text-blue-600">
            {score} / {questions.length}
          </div>
          <button
            onClick={restart}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition active:scale-95 shadow-lg shadow-blue-200"
          >
            Jogar novamente
          </button>
          <Link href="/" className="block mt-6 text-gray-400 hover:text-gray-600 font-medium">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
        
       
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6">
          
          {/* img */}
          <div className="w-full md:w-2/3">
            <div className="relative w-full h-48 md:h-60 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-inner">
              {q.img ? (
                <Image
                  src={q.img}
                  alt="Pergunta"
                  fill
                  className="object-contain p-2"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-xs">
                  Sem Imagem
                </div>
              )}
            </div>
          </div>

          {/*header */}
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-1/3">
            <Link
              href="/"
              className="flex-1 md:flex-none bg-red-50 text-red-500 border border-red-100 py-3 rounded-2xl text-xs md:text-sm font-black hover:bg-red-100 transition text-center uppercase tracking-tighter"
            >
              Sair
            </Link>

            <div className="flex-1 md:flex-none flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-2 md:p-4 border border-blue-100">
              <span className="text-[10px] md:text-xs text-blue-400 uppercase font-black">Pontuação</span>
              <span className="text-base md:text-2xl font-black text-blue-600">⭐ {score}</span>
            </div>

            <div className="flex-1 md:flex-none flex flex-col items-center justify-center bg-purple-50 rounded-2xl p-2 md:p-4 border border-purple-100">
              <span className="text-[10px] md:text-xs text-purple-400 uppercase font-black">Nível</span>
              <span className="text-sm md:text-lg font-black text-purple-700">{current + 1}/{questions.length}</span>
            </div>
          </div>
        </div>

        {/* PERGUNTA E RESPOSTAS */}
        <div className="px-6 pb-8 md:px-8">
          <h1 className="text-xl md:text-2xl font-black text-gray-800 text-center mb-6 leading-tight">
            {q.question}
          </h1>

          <div className="grid grid-cols-2 gap-3">
            {q.options.map((opt, index) => {
              const isSelected = selected === opt;
              const isCorrect = q.answer === opt;
              let style = `${colors[index % colors.length]} text-white`;

              if (selected) {
                if (isSelected && isCorrect) style = "bg-green-500 text-white scale-[1.03] shadow-lg shadow-green-100";
                else if (isSelected && !isCorrect) style = "bg-red-500 text-white";
                else style = "bg-gray-100 text-gray-300 opacity-40 grayscale";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  disabled={locked}
                  className={`w-full py-4 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 transform active:scale-95 shadow-md ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

        {/* barra de progresso */}
          <div className="mt-8 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-700 ease-in-out"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}