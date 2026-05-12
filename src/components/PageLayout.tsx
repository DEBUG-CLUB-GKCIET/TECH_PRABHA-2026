"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter, Syncopate } from "next/font/google";
import { Suspense, useEffect, useState } from "react";

const SynthCanvas = dynamic(() => import("./SynthCanvas"), {
  ssr: false,
  loading: () => null,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);

  useEffect(() => {
    let supported = false;
    try {
      const canvas = document.createElement("canvas");
      supported = Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch {
      supported = false;
    }
    setCanRenderCanvas(supported);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-x-hidden bg-[#030008] flex items-center justify-center pt-24 pb-12 px-6">
      {/* Subtle atmospheric gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#7000ff] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none" />

      {/* 3D Canvas Background */}
      {canRenderCanvas && (
        <div className="fixed inset-0 z-0">
          <Suspense fallback={null}>
            <SynthCanvas />
          </Suspense>
        </div>
      )}

      {/* Content Foreground */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto mt-10">
        
        {/* Main Typography */}
        <motion.div
          className="flex flex-col items-center justify-center relative w-full mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow effect behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 via-[#7000ff]/20 to-[#00f0ff]/20 blur-3xl rounded-full" />
            <h1
              className={`${syncopate.className} relative text-4xl md:text-[4rem] lg:text-[6rem] font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-tr from-[#00f0ff] via-white to-[#7000ff] drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] text-center`}
            >
              {title}
            </h1>
          </div>
          {subtitle && (
            <p
              className={`${inter.className} mt-6 text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-center max-w-2xl`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Glass Content Area */}
        <motion.div
          className="w-full bg-[#0B0914]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
