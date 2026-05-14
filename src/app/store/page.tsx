import PageLayout from "@/components/PageLayout";

export default function StorePage() {
  return (
    <PageLayout title="STORE" subtitle="Acquire Official Artifacts">
      <div className="flex flex-col items-center justify-center py-16">
        <div className="relative">
          {/* Holographic cube placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-[#ff00ff] rounded-3xl animate-[spin_10s_linear_infinite] flex items-center justify-center shadow-[0_0_30px_rgba(255,0,255,0.5)] relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-[#ff00ff]/20"></div>
             <div className="w-full h-[1px] bg-white/50 absolute top-1/2 left-0 shadow-[0_0_10px_#fff]"></div>
             <div className="w-[1px] h-full bg-white/50 absolute top-0 left-1/2 shadow-[0_0_10px_#fff]"></div>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl text-white font-bold tracking-widest uppercase mt-12 mb-4 text-center">
          Merchandise Terminal Offline
        </h2>
        <p className="text-gray-400 text-center max-w-lg text-sm md:text-base font-light">
          The inventory system is currently undergoing. Official T-shirts, hoodies, and exclusive digital assets will be available soon.
        </p>
        
      </div>
    </PageLayout>
  );
}
