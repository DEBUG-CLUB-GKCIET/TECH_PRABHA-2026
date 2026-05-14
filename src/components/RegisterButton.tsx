"use client";

import { useState } from "react";

interface RegisterButtonProps {
  color: string;
}

export default function RegisterButton({ color }: RegisterButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 30px ${color}80`;
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 20px rgba(255,255,255,0.2)`;
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = '#000';
        }}
      >
        Register Now
      </button>

      {/* Coming Soon Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="bg-gray-950 border p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative"
            style={{ borderColor: `${color}40`, boxShadow: `0 0 40px ${color}20` }}
          >
            {/* Close 'X' Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-white mb-3 tracking-widest uppercase">
              Coming Soon
            </h2>
            <p className="text-gray-400 mb-6">
              Registration for this event has not opened yet. Stay tuned!
            </p>
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color, color: '#fff', boxShadow: `0 0 15px ${color}60` }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}