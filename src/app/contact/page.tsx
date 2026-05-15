import PageLayout from "@/components/PageLayout";
import Image from "next/image";

const teamData = [
  {
    category: "MANAGEMENT TEAM",
    members: [
      {
        name: "AKASH PATTANAYAK",
        role: "LEAD ORGANISER",
        dept: "ME, 2nd Year",
        email: "243550110194@gkciet.ac.in",
        phone: "+91 7980101528",
        image: "/profileImages/akash.png"
      },
      {
        name: "DIPAM PANDIT",
        role: "LEAD ORGANISER",
        dept: "CSE, 2nd Year",
        email: "dipam@techprabha.in",
        phone: "+91 8837454482",
        image: "/profileImages/dipam.png"
      }
    ]
  },
  {
    category: "FINANCIAL TEAM",
    members: [
      {
        name: "DIPAM PANDIT",
        role: "CORE RESPONSIBILITY",
        dept: "CSE, 2nd Year",
        email: "dipam.f@techprabha.in",
        phone: "+91 8837454482",
        image: "/profileImages/dipam.png"
      },
      {
        name: "MUKTADI HASSAN",
        role: "CORE RESPONSIBILITY",
        dept: "CSE, 2nd Year",
        email: "muktadi@techprabha.in",
        phone: "+91 9734177355",
        image: "/profileImages/MuktadiHassan.png"
      },
      {
        name: "SANKALPA GHOSWAMI",
        role: "CORE RESPONSIBILITY",
        dept: "FET, 2nd Year",
        email: "sankalpa@techprabha.in",
        phone: "+91 ",
        image: "/profileImages/nodp.png"
      },
      {
        name: "VICKY KUMAR SHAH",
        role: "CORE RESPONSIBILITY",
        dept: "CSE, 2nd Year",
        email: "vicky@techprabha.in",
        phone: "+91 87093 46468",
        image: "/profileImages/vickyshah.png"
      }
    ],
  },
  {
    category: "WEBSITE TEAM",
    members: [
      {
        name: "SOURANGSHU GHOSH",
        role: "CORE RESPONSIBILITY",
        dept: "EE, 2nd Year",
        email: "sourangshu098@gmail.com",
        phone: "+91 9123805272",
        image: "/profileImages/sourangshudp.png"
      },
      {
        name: "AMIT DAS ADHIKARI",
        role: "CORE RESPONSIBILITY",
        dept: "CSE, 2nd Year",
        email: "maken.dasadh@gmail.com",
        phone: "+91 9433800470",
        image: "/profileImages/amitdp1.png"
      }
    ],
  },
];

export default function ContactPage() {
  return (
    <PageLayout title="CONTACT" subtitle="Meet the Organizers">
      <div className="flex flex-col gap-24 py-12 relative z-10 w-full max-w-6xl mx-auto items-center">
        {teamData.map((section, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 tracking-widest" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(0,240,255,0.6)' }}>
              {section.category}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-12">
              {section.members.map((member, mIdx) => (
                <div key={mIdx} className="relative group w-72 lg:w-80">
                  {/* Cyberpunk HUD Frame */}
                  <div className="absolute inset-0 bg-transparent border-[1.5px] border-[#7000ff] rounded-tr-3xl rounded-bl-3xl transform skew-x-[-2deg] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(112,0,255,0.4)] group-hover:border-[#00f0ff]"></div>
                  
                  {/* Corner Sci-Fi accents */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center pt-8 pb-4 h-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold bg-clip-text text-white tracking-widest">{member.name}</h3>
                      <p className="text-xs text-gray-300 tracking-widest mt-1 font-light uppercase">{member.role}</p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative w-48 h-56 mb-4 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] flex-grow flex items-end justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="192px"
                        className="object-cover h-full object-bottom"
                        style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}
                      />
                    </div>

                    {/* Contact Bottom Box */}
                    <div className="w-[90%] border border-[#7000ff]/60 bg-black/60 backdrop-blur-md py-3 px-2 text-center rounded-sm relative group-hover:border-[#00f0ff]/80 transition-colors">
                      <p className="text-xs text-gray-300 mb-1">{member.dept}</p>
                      <p className="text-xs text-gray-300 mb-1">{member.email}</p>
                      <p className="text-xs text-gray-300">{member.phone}</p>
                      
                      {/* Sub accents for contact box */}
                      <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-[#00f0ff]"></div>
                      <div className="absolute top-0 right-0 w-2 h-[2px] bg-[#00f0ff]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
