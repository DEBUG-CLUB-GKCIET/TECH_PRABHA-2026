"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Space_Grotesk, Inter, Yatra_One } from "next/font/google";
import { Suspense, useState } from "react";
import Countdown from "@/components/Countdown";

// Disable SSR for the 3D Canvas and load it only on capable clients
const SynthCanvas = dynamic(() => import("./SynthCanvas"), {
  ssr: false,
  loading: () => null,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const yatraOne = Yatra_One({ subsets: ["latin"], weight: "400" });

export default function HeroSection() {
  const [canRenderCanvas] = useState(() => {
    if (typeof document === "undefined") return false;

    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch {
      return false;
    }
  });

  return (
    <section className="relative w-full min-h-[100svh] bg-[#030008] flex items-center justify-center">
      {/* Subtle atmospheric gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7000ff] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none" />

      {/* 3D Canvas Background */}
      {canRenderCanvas && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <SynthCanvas />
          </Suspense>
        </div>
      )}

      {/* Glass UI Foreground */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 w-full max-w-6xl mx-auto pointer-events-none h-full">
        {/* Sci-Fi HUD Badge */}
        <motion.div
          className="relative mb-6 mt-16 md:mt-24 group flex items-center justify-center cursor-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing Backing */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 to-[#7000ff]/20 blur-xl rounded-full opacity-50" />
          
          {/* Parallelogram Container */}
          <div 
            className="relative flex items-center gap-4 px-8 py-2.5 bg-black/40 border border-white/10 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] transition-all duration-300 group-hover:border-white/30 group-hover:bg-black/60"
            style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
          >
            {/* Left Accent */}
            <div className="flex gap-[2px]">
              <div className="w-[3px] h-[14px] bg-[#00f0ff] animate-pulse" />
              <div className="w-[3px] h-[14px] bg-[#00f0ff]/40" />
            </div>
            
            <span className={`${spaceGrotesk.className} text-[10px] md:text-xs text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}>
              Malda&apos;s Largest Tech Festival
            </span>

            {/* Right Accent */}
            <div className="flex gap-[2px]">
              <div className="w-[3px] h-[14px] bg-[#7000ff]/40" />
              <div className="w-[3px] h-[14px] bg-[#7000ff] animate-pulse" />
            </div>
          </div>
          
          {/* Outer Decorative Brackets (Expand on Hover) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[120%] border-l-2 border-t-2 border-b-2 border-[#00f0ff]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-4 pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[120%] border-r-2 border-t-2 border-b-2 border-[#7000ff]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-4 pointer-events-none" />
        </motion.div>

        {/* Main Typography */}
        <motion.div
          className="flex flex-col items-center justify-center relative w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow effect behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/30 via-[#7000ff]/30 to-[#00f0ff]/30 blur-[60px] rounded-full mix-blend-screen" />
            <h1
              className={`${yatraOne.className} relative text-[10vw] md:text-[5.5rem] lg:text-[7rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#00f0ff] via-white to-[#7000ff] drop-shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:drop-shadow-[0_0_40px_rgba(0,240,255,0.8)] transition-all duration-700 ease-in-out`}
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
            >
              TECHPRABHA
            </h1>
          </div>
          {/* Elegant subtitle */}
          <p
            className={`${inter.className} mt-8 text-sm md:text-xl lg:text-2xl text-gray-400 font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-center max-w-2xl`}
          >
            GKCIET's {""}
            <span className="text-[#00f0ff] font-semibold drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">TechFest</span>
          </p>
        </motion.div>
        <motion.div>
          <Countdown />
        </motion.div>

        {/* Dates - Glass Card */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 md:gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md">
            <span
              className={`${spaceGrotesk.className} block text-white text-lg md:text-2xl font-bold`}
            >
              May 29 - 30
            </span>
            <span
              className={`${inter.className} text-xs md:text-sm text-gray-400 tracking-wider uppercase`}
            >
              Edition 2026
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/events"
            className="group relative inline-flex px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] border border-transparent hover:border-[#00f0ff]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span
              className={`${spaceGrotesk.className} relative z-10 flex items-center gap-2 font-bold uppercase tracking-wider text-sm md:text-base transition-colors duration-300`}
            >
              Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
