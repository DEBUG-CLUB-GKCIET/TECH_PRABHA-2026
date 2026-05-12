"use client";

interface RegisterButtonProps {
  color: string;
}

export default function RegisterButton({ color }: RegisterButtonProps) {
  return (
    <button 
      className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
  );
}
