"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function MenuPrincipal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-lg shadow-lg"
    >
      <h1 className="font-[Lovable] text-4xl md:text-6xl text-gray-900 drop-shadow-xl font-extrabold tracking-tight">
        Okulilonguisa
      </h1>
      <p className="text-xl text-gray-400">
        Jogo de aprendizagem divertido! 🎮
      </p>
      <Image
        src="/mascot-BA6D8Sl6.png"
        alt="Umbundu Logo"
        width={180}
        height={90}
      />
       <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-4 w-full max-w-sm items-center"
      >
        <Link href="../niveis"  className="w-76 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 rounded-2xl transition duration-300 hover:scale-105 text-center">
          🎯 Jogar
        </Link>

        <button className="w-76 bg-blue-300 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-2xl transition duration-500 hover:scale-105">
          🎮 Como Jogar
        </button>
        </motion.div>
      <div className="mt-6">
        <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  className="flex gap-6 text-2xl"
>
  {["⭐", "🏆", "🎖️"].map((icon, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
    >
      {icon}
    </motion.span>
  ))}
</motion.div>
      </div>
    </motion.div>
  );
}
