"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk, Syncopate } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

export default function Countdown() {
  // Target Date: May 29, 2026 at 10:00 AM IST
  const TARGET_DATE = new Date("2026-05-29T10:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [TARGET_DATE]);

  // Prevent hydration mismatch by not rendering the numbers until the client mounts
  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-8 z-20">
      
      <div className="flex gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" color="#ff00ff" />
        <span className="text-white/50 text-3xl md:text-5xl font-light self-start mt-2 md:mt-4 animate-pulse">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" color="#00f0ff" />
        <span className="text-white/50 text-3xl md:text-5xl font-light self-start mt-2 md:mt-4 animate-pulse">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" color="#7000ff" />
        <span className="text-white/50 text-3xl md:text-5xl font-light self-start mt-2 md:mt-4 animate-pulse">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" color="#ff00ff" />
      </div>
    </div>
  );
}

// Sub-component for the individual glowing boxes
interface TimeUnitProps {
  value: number;
  label: string;
  color: string;
}

function TimeUnit({ value, label, color }: TimeUnitProps) {
  // Pad with leading zero if single digit
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-center group relative">
      {/* Glowing Backdrop */}
      <div 
        className="absolute inset-0 blur-xl opacity-20 transition-opacity duration-500 group-hover:opacity-50"
        style={{ backgroundColor: color }}
      />
      
      {/* Number Box */}
      <div 
        className="relative w-16 h-20 md:w-24 md:h-28 bg-[#0a101f]/80 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-lg"
        style={{ 
          clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
          boxShadow: `inset 0 0 15px rgba(255,255,255,0.05)`
        }}
      >
        <span 
          className={`${spaceGrotesk.className} text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
        >
          {formattedValue}
        </span>
        
        {/* Decorative corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
          style={{ borderColor: color }}
        />
      </div>

      {/* Label */}
      <span className={`${syncopate.className} text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-400`}>
        {label}
      </span>
    </div>
  );
}