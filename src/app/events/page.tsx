"use client";
import PageLayout from "@/components/PageLayout";
import { events } from "@/data/events";
import SciFiEventCard from "@/components/SciFiEventCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(events.map(e => e.category)))];

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(e => e.category === activeCategory);

  return (
    <PageLayout title="EVENTS" subtitle="Explore The Paradigm Schedule">
      <div className="flex flex-col w-full max-w-[1400px] mx-auto py-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === category 
                  ? "bg-[#00f0ff] text-black border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.6)] scale-105" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3-Column Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SciFiEventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </PageLayout>
  );
}
