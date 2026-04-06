"use client"; 

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="">
      <audio ref={audioRef} src="/jogo.mp3" loop />
      <button 
        onClick={toggleSound}
        className="bg-black text-white px-4 py-2 rounded-full border border-white/20"
      >
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
