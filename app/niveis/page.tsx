"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Niveis() {
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        delay: i * 0.08,
      },
    }),
  };

  const niveis = [
    {
      emoji: "🟢",
      titulo: "Fácil",
      cor: "bg-green-500 hover:bg-green-600",
      texto: "text-white",
      Link: "/jogo_facil",
    },
    {
      emoji: "🔥",
      titulo: "Médio",
      cor: "bg-yellow-500 hover:bg-yellow-600",
      texto: "text-gray-800",
      Link: "/jogo_medio",
    },
    {
      emoji: "💎",
      titulo: "Difícil",
      cor: "bg-red-500 hover:bg-red-600",
      texto: "text-white",
      Link: "/jogo_dificil",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 bg-gray-900 p-6">
      {/* Título */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-white">
        Escolher Nível
      </h1>

      <p className="text-gray-400 text-lg">
        Escolha seu desafio 🚀
      </p>

      {/* Níveis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-md mt-6">
        {niveis.map((nivel, i) => (
          <motion.div
            key={nivel.titulo}
            custom={i}
            variants={item}
            initial="hidden"
            animate="show"
            onClick={() => window.location.href = nivel.Link}
            className={`flex flex-col items-center justify-center p-6 rounded-xl text-lg font-semibold cursor-pointer transition ${nivel.cor} ${nivel.texto} hover:scale-105`}
          >
            <span className="text-2xl">{nivel.emoji}</span>
            <span>{nivel.titulo}</span>
          </motion.div>
        ))}
      </div>

      {/* Botão voltar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.25 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-xl transition"
        >
          ← Voltar
        </Link>
      </motion.div>
    </div>
  );
}