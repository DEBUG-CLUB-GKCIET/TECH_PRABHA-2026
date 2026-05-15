"use client";
import Image from "next/image";
import Link from "next/link";
import { EventDetails } from "@/data/events";
import { Space_Grotesk, Syncopate } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  event: EventDetails;
  onRegisterClick?: () => void; // <-- 1. Add this prop
}

export default function SciFiEventCard({ event, onRegisterClick }: Props) {
  const clipShape = 'polygon(44px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 44px 100%, 24px calc(100% - 20px), 24px 55%, 8px 55%, 0 calc(55% - 8px), 0 calc(20% + 8px), 8px 20%, 24px 20%, 24px 20px)';

  const gradientStyle = {
    background: `linear-gradient(to bottom, #030303 0%, #0d0d0d 40%, ${event.color}80 75%, ${event.color} 100%)`
  };

  return (
    <div className="group relative w-full h-[480px] transition-transform duration-300 hover:-translate-y-2">
      {/* Outer Border Layer */}
      <div
        className="absolute inset-0 bg-white/30 group-hover:bg-white transition-colors duration-500"
        style={{ clipPath: clipShape, boxShadow: `0 0 20px ${event.color}40` }}
      >
        <div className="absolute inset-[2px] overflow-hidden" style={{ clipPath: clipShape, ...gradientStyle }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none"></div>

          <div className="absolute left-[2px] top-[20%] h-[35%] w-[20px] flex items-center justify-center pointer-events-none z-10">
            <span className="text-[9px] text-white/80 font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {event.category}
            </span>
          </div>

          <div className="absolute inset-0 pl-[28px] pr-4 pt-6 pb-4 flex flex-col h-full z-20">
            <h3 className={`${syncopate.className} text-white font-bold text-center text-sm md:text-base leading-snug uppercase mb-4 h-12 flex items-center justify-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
              {event.title}
            </h3>

            <div className="w-full relative h-[140px] mb-auto border-[1.5px] border-white/20 p-[2px] bg-black/60 shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="400px"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            <div className={`${syncopate.className} flex justify-center items-center flex-col font-semibold`}>
              <span>{event.date}</span>
              <span>{event.day}</span>
              <span>{event.time}</span>
            </div>
              
            {/* Buttons Area */}
            <div className="flex w-full gap-3 justify-center mb-6 mt-4">
              <Link
                href={`/events/${event.slug}`}
                className={`${syncopate.className} flex-1 inline-flex items-center justify-center w-full bg-[#0a101f] border-2 text-white text-[10px] md:text-xs font-bold py-2 transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black group-hover:shadow-[0_0_20px_currentColor]`}
                style={{ borderColor: event.color }}
              >
                {(event.registrationLinks || event.registrationUrl)? "Explore and Register" : "Explore"}
              </Link>
            </div>


            {/* Prize Pool Area */}
            <div className="flex flex-col items-center justify-end h-10">
              {event.prizePool && <>
              <span className={`${spaceGrotesk.className} text-[10px] md:text-xs text-white/90 tracking-widest font-semibold uppercase`}>
                Prize Pool:
              </span>
              <span className={`${spaceGrotesk.className} text-sm md:text-base text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]`}>
                {event.prizePool}
              </span>
              </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}