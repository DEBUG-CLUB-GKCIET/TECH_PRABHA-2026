import PageLayout from "@/components/PageLayout";

export default function SponsorsPage() {
  return (
    <PageLayout title="SPONSORS" subtitle="Entities Fueling The Simulation">
      <div className="flex flex-col items-center justify-center py-10 space-y-16">
        
        <div className="w-full">
          <h2 className="text-2xl text-[#00f0ff] font-bold tracking-widest uppercase mb-8 text-center drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            Title Partners
          </h2>
          <div className="flex justify-center items-center p-12 bg-black/40 border border-[#00f0ff]/30 rounded-3xl hover:border-[#00f0ff] transition-colors duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]">
            <span className="text-4xl md:text-5xl font-black text-white/20 tracking-[0.5em] uppercase">Pending...</span>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl text-[#7000ff] font-bold tracking-widest uppercase mb-6 text-center drop-shadow-[0_0_10px_rgba(112,0,255,0.5)]">
            Tech Associates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors">
                 <span className="text-sm font-bold text-white/30 tracking-widest uppercase">Slot {i}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
