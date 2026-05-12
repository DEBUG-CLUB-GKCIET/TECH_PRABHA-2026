import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout title="ABOUT US" subtitle="The Architects of the Future">
      <div className="flex flex-col items-center justify-center py-10 space-y-12">

        <div className="max-w-4xl text-center">
          <h2 className="text-3xl text-white font-bold tracking-widest uppercase mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Our Vision
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            TECHPRABHA is not just a festival; it is a simulated paradigm shift. Established by the vanguard of GKCIET, we aim to converge the brightest minds across domains to shape, build, and break the boundaries of modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
          {['Innovation', 'Cybernetics', 'Evolution'].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] hover:border-[#7000ff]/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#7000ff] mb-6 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#0B0914] rounded-full"></div>
              </div>
              <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-4">{item}</h3>
              <p className="text-gray-400 text-sm font-light">Pushing the limits of what is possible within the defined parameters of our reality.</p>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
