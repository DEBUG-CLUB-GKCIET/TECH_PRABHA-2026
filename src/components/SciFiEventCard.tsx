"use client";
import Link from "next/link";
import { EventDetails } from "@/data/events";
import { Space_Grotesk, Syncopate } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  event: EventDetails;
}

export default function SciFiEventCard({ event }: Props) {
  // Complex clip-path representing the chamfered border and protruding left tab
  const clipShape = 'polygon(44px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 44px 100%, 24px calc(100% - 20px), 24px 55%, 8px 55%, 0 calc(55% - 8px), 0 calc(20% + 8px), 8px 20%, 24px 20%, 24px 20px)';

  // Determine vibrant bottom gradient based on event color.
  // Using 80% opacity for the color stop to match the deep, saturated look of the reference.
  const gradientStyle = {
    background: `linear-gradient(to bottom, #030303 0%, #0d0d0d 40%, ${event.color}80 75%, ${event.color} 100%)`
  };

  return (
    <div className="group relative w-full h-[480px] transition-transform duration-300 hover:-translate-y-2">

      {/* Outer Border Layer */}
      <div
        className="absolute inset-0 bg-white/30 group-hover:bg-white transition-colors duration-500"
        style={{
          clipPath: clipShape,
          // Inner glowing shadow for active hover state
          boxShadow: `0 0 20px ${event.color}40`
        }}
      >
        {/* Inner Content Layer (creates the 2px border effect) */}
        <div
          className="absolute inset-[2px] overflow-hidden"
          style={{
            clipPath: clipShape,
            ...gradientStyle
          }}
        >
          {/* Decorative faint dot pattern overlay for the bottom section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none"></div>

          {/* Left Vertical Tab Text */}
          <div className="absolute left-[2px] top-[20%] h-[35%] w-[20px] flex items-center justify-center pointer-events-none z-10">
            <span className="text-[9px] text-white/80 font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {event.category}
            </span>
          </div>

          {/* Main Content Area (inset past the left tab) */}
          <div className="absolute inset-0 pl-[28px] pr-4 pt-6 pb-4 flex flex-col h-full z-20">

            {/* Title (Bold, Uppercase, Tech Font) */}
            <h3 className={`${syncopate.className} text-white font-bold text-center text-sm md:text-base leading-snug uppercase mb-4 h-12 flex items-center justify-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
              {event.title}
            </h3>

            {/* Image Banner Container */}
            <div className="w-full relative h-[140px] mb-auto border-[1.5px] border-white/20 p-[2px] bg-black/60 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125"
              />
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Buttons Area (Overlapping the vibrant red/purple bottom) */}
            <div className="flex w-full gap-3 justify-center mb-6 mt-4">
              <button
                className={`${syncopate.className} flex-1 bg-[#0a101f] border-2 text-white text-[10px] md:text-xs font-bold py-2 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_currentColor]`}
                style={{ borderColor: event.color, color: 'inherit' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a101f';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Register
              </button>
              <Link href={`/events/${event.slug}`} className="flex-1">
                <button
                  className={`${syncopate.className} w-full bg-[#0a101f] border-2 text-white text-[10px] md:text-xs font-bold py-2 transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_currentColor]`}
                  style={{ borderColor: event.color, color: 'inherit' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a101f';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Explore
                </button>
              </Link>
            </div>

            {/* Prize Pool Area */}
            <div className="flex flex-col items-center justify-end">
              <span className={`${spaceGrotesk.className} text-[10px] md:text-xs text-white/90 tracking-widest font-semibold uppercase`}>
                Prize Pool:
              </span>
              <span className={`${spaceGrotesk.className} text-sm md:text-base text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]`}>
                {event.prizePool}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
