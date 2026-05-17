import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  const fests = [
    {
      title: 'TECHPRABHA',
      description: 'Our premier annual technical festival. A convergence of brilliant minds featuring hackathons, robotics, coding challenges, and cutting-edge exhibitions that push the boundaries of innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      )
    },
    {
      title: 'KRISTITARANG',
      description: 'Our vibrant annual cultural festival. A spectacular celebration of arts, music, dance, and drama that brings our campus to life and showcases the boundless creative spirit of our student community.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.124-.298-.336-.481-.769-.481-1.25 0-1.069.868-1.938 1.938-1.938h1.961C20.485 16.031 22 14.28 22 12c0-5.5-4.5-10-10-10Z" />
        </svg>
      )
    }
  ];

  return (
    <PageLayout title="ABOUT US" subtitle="The Architects of the Future">
      <div className="flex flex-col items-center justify-center py-10 space-y-12">

        <div className="max-w-4xl text-center">
          <h2 className="text-3xl text-white font-bold tracking-widest uppercase mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Our College
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Ghani Khan Choudhury Institute of Engineering and Technology (GKCIET), located in Malda, West Bengal, is a centrally funded technical institute under the Ministry of Education. Established to foster technical education and innovation, it serves as a dynamic hub for aspiring engineers and technologists, empowering them to shape the future of modern industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-8">
          {fests.map((fest, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] hover:border-[#7000ff]/50">
              
              {/* Outer glowing circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#7000ff] mb-6 flex items-center justify-center">
                {/* Inner dark circle containing the icon */}
                <div className="w-14 h-14 bg-[#0B0914] rounded-full flex items-center justify-center">
                  {fest.icon}
                </div>
              </div>

              <h3 className="text-2xl text-white font-bold uppercase tracking-wider mb-4">{fest.title}</h3>
              <p className="text-gray-400 text-base font-light">{fest.description}</p>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}