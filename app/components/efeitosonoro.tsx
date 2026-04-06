"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";

export interface SoundEffectsHandle {
  playCorrect: () => void;
  playWrong: () => void;
}

const SoundEffects = forwardRef<SoundEffectsHandle>((_, ref) => {
  const correctRef = useRef<HTMLAudioElement | null>(null);
  const wrongRef = useRef<HTMLAudioElement | null>(null);

  // função de vibração segura
  const vibrate = (pattern: number | number[]) => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  };

  useImperativeHandle(ref, () => ({
    playCorrect() {
      if (correctRef.current) {
        correctRef.current.currentTime = 0;
        correctRef.current.play();
      }
      vibrate(100); // vibração curta = acerto
    },

    playWrong() {
      if (wrongRef.current) {
        wrongRef.current.currentTime = 0;
        wrongRef.current.play();
      }
      vibrate([200, 100, 200]); // vibração dupla = erro
    },
  }));

  return (
    <>
      <audio ref={correctRef} src="/certo.mp3" preload="auto" />
      <audio ref={wrongRef} src="/errado.mp3" preload="auto" />
    </>
  );
});

SoundEffects.displayName = "SoundEffects";

export default SoundEffects;