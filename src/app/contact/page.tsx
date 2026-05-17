import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { getAllStandardTeams, getEventCoordinators, ContactDetails } from "@/data/contacts";

const getInitials = (name: string) => {
  const parts = name.split(' ').filter(p => p.length > 0);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  if (parts.length === 1) return `${parts[0][0]}`.toUpperCase();
  return "NA";
};

// -------------------------------------------------------------
// SMALL CARD (For Teams with >= 10 Members)
// -------------------------------------------------------------
const SmallMemberCard = ({ member }: { member: ContactDetails }) => (
  <div className="flex items-center gap-4 bg-[#1e1e21] border border-gray-800 hover:border-gray-600 transition-colors p-4 rounded-xl w-full">
    <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-[#333336] flex items-center justify-center border border-gray-700">
      {member.image && member.image !== "/profileImages/nodp.png" ? (
        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="48px" />
      ) : (
        <span className="text-gray-300 font-semibold text-lg tracking-widest">{getInitials(member.name)}</span>
      )}
    </div>
    
    {/* Dynamically center name if no role exists */}
    <div className={`flex flex-col overflow-hidden ${!member.role ? "justify-center h-full" : ""}`}>
      <h4 className="text-white font-bold text-sm md:text-base truncate">{member.name}</h4>
      <p className="text-gray-500 text-xs md:text-sm font-medium mt-0.5">{member.dept}</p>
      <p className="text-gray-500 text-xs md:text-sm font-medium mt-0.5">Ph: {member.phone}</p>
    </div>
  </div>
);

// -------------------------------------------------------------
// MEDIUM CARD (For Teams with < 10 Members)
// -------------------------------------------------------------
const MediumMemberCard = ({ member }: { member: ContactDetails }) => (
  <div className="relative group flex flex-col items-center bg-[#18181b] border border-gray-800 hover:border-[#7000ff]/60 transition-all duration-300 p-6 rounded-2xl w-full max-w-[260px] mx-auto overflow-hidden hover:shadow-[0_0_20px_rgba(112,0,255,0.15)]">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7000ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative w-32 h-32 mb-5 rounded-full overflow-hidden bg-[#27272a] border-2 border-transparent group-hover:border-[#00f0ff] transition-colors flex items-center justify-center shadow-lg">
      {member.image && member.image !== "/profileImages/default.png" ? (
        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
      ) : (
        <span className="text-gray-400 font-bold text-3xl tracking-widest">{getInitials(member.name)}</span>
      )}
    </div>

    <div className="text-center w-full">
      <h4 className={`text-white font-bold text-lg tracking-wide truncate ${!member.role ? "mb-0" : "mb-1"}`}>{member.name}</h4>
      {member.role && <p className="text-[#00f0ff] text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>}
      
      {/* Contact info bottom section */}
      {(member.dept || member.email) && (
        <div className="flex flex-col gap-1 text-xs text-gray-400 mt-2 border-t border-gray-800 pt-3">
          {member.dept && <p className="truncate">{member.dept}</p>}
          {member.email && <p className="truncate">{member.email}</p>}
        </div>
      )}
    </div>
  </div>
);

export default async function ContactPage() {
  const [allTeams, eventCoordinators] = await Promise.all([
    getAllStandardTeams(),
    getEventCoordinators()
  ]);

  const managementTeam = allTeams.find(t => t.category === "MANAGEMENT TEAM");
  const otherTeams = allTeams.filter(t => t.category !== "MANAGEMENT TEAM");

  return (
    <PageLayout title="CONTACT" subtitle="Meet the Organizers">
      <div className="flex flex-col gap-24 py-12 relative z-10 w-full max-w-7xl mx-auto items-center px-4">
        
        {/* --- 1. MANAGEMENT TEAM --- */}
        {managementTeam && managementTeam.members.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 tracking-widest uppercase" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(0,240,255,0.6)' }}>
              {managementTeam.category}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-12">
              {managementTeam.members.map((member, mIdx) => (
                <div key={mIdx} className="relative group w-72 lg:w-80">
                  <div className="absolute inset-0 bg-transparent border-[1.5px] border-[#7000ff] rounded-tr-3xl rounded-bl-3xl transform skew-x-[-2deg] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(112,0,255,0.4)] group-hover:border-[#00f0ff]"></div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center pt-8 pb-4 h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold bg-clip-text text-white tracking-widest">{member.name}</h3>
                      <p className="text-xs text-[#00f0ff] tracking-widest mt-1 font-bold uppercase">LEAD ORGANISER</p>
                    </div>

                    <div className="relative w-48 h-56 mb-4 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] flex-grow flex items-end justify-center">
                      <Image
                        src={member.image || "/profileImages/default.png"}
                        alt={member.name}
                        fill
                        className="object-cover h-full object-bottom"
                        style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}
                      />
                    </div>

                    <div className="w-[90%] border border-[#7000ff]/60 bg-black/60 backdrop-blur-md py-3 px-2 text-center rounded-sm relative group-hover:border-[#00f0ff]/80 transition-colors">
                      <p className="text-xs text-gray-300 mb-1">{member.dept}</p>
                      {member.email && <p className="text-xs text-gray-300 mb-1">{member.email}</p>}
                      {member.phone && <p className="text-xs text-gray-300">{member.phone}</p>}
                      
                      <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-[#00f0ff]"></div>
                      <div className="absolute top-0 right-0 w-2 h-[2px] bg-[#00f0ff]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. OTHER TEAMS (DYNAMIC SIZING LOGIC) --- */}
        {otherTeams.map((team, tIdx) => {
          const useMediumCards = team.members.length < 10;

          return (
            <div key={tIdx} className="flex flex-col items-center w-full">
              <h2 className="text-2xl md:text-4xl font-black text-gray-200 text-center mb-10 tracking-wider uppercase">
                {team.category}
              </h2>
              
              {useMediumCards ? (
                <div className="flex flex-wrap justify-center gap-6 w-full">
                  {team.members.map((member, mIdx) => (
                    <MediumMemberCard key={mIdx} member={member} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                  {team.members.map((member, mIdx) => (
                    <SmallMemberCard key={mIdx} member={member} />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* --- 3. EVENT COORDINATORS --- */}
        {eventCoordinators.length > 0 && (
          <div className="flex flex-col items-center w-full mt-12">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 tracking-widest uppercase" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(0,240,255,0.6)' }}>
              EVENT COORDINATORS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-col gap-10">
              {eventCoordinators.map((event, eIdx) => (
                <div key={eIdx} className="w-full relative bg-[#0a0a0c] border border-[#7000ff]/50 p-6 md:p-8 rounded-2xl shadow-[0_0_20px_rgba(112,0,255,0.1)]">
                  
                  <h3 className="text-2xl md:text-2xl font-black text-white mb-6 uppercase tracking-wider border-b border-gray-800 pb-4 flex items-center gap-4">
                    <span className="w-2 h-8 bg-[#00f0ff] inline-block rounded-sm"></span>
                    {event.eventName}
                  </h3>
                  
                  <div className="mb-8">
                    <p className="text-xs text-[#00f0ff] font-bold uppercase tracking-widest mb-4">Lead Coordinators</p>
                    <div className="flex flex-wrap gap-4">
                      {event.heads.map((head, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-3 bg-[#7000ff]/10 border border-[#7000ff]/60 py-2 px-4 rounded-lg">
                          {/* Added relative, overflow-hidden, and flex-shrink-0 for the Image to fit */}
                          <div className="relative w-8 h-8 rounded-full bg-[#7000ff]/30 flex items-center justify-center border border-[#7000ff] overflow-hidden flex-shrink-0">
                            {head.image && head.image !== "/profileImages/default.png" ? (
                              <Image src={head.image} alt={head.name} fill className="object-cover" sizes="32px" />
                            ) : (
                              <span className="text-[#00f0ff] text-xs font-bold">{getInitials(head.name)}</span>
                            )}
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">{head.name}</p>
                            {/* Optional: if you want the "Head" subtitle back, keep this line */}
                            {/* <p className="text-[10px] text-gray-400 uppercase">Head</p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {event.others.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Coordinators</p>
                      <div className="grid grid-cols-2 gap-3">
                        {event.others.map((other, oIdx) => (
                          <span key={oIdx}>{other.name}</span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
}