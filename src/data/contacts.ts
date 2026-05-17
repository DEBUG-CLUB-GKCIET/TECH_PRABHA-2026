import Papa from 'papaparse';

// PASTE YOUR 7 SEPARATE CSV URLS HERE
const URLS = {
  MANAGEMENT: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=0&single=true&output=csv",
  EVENTS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=678073022&single=true&output=csv",
  MARKETING: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=15311941&single=true&output=csv",
  SOCIAL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=2139060864&single=true&output=csv",
  DESIGN: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=382668014&single=true&output=csv",
  FINANCE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=1099230143&single=true&output=csv",
  WEBSITE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNe-3-heKY8aZn6WeLRw4yq4vfZXdyrVJvLnsgoOKVfuscDyonEneqfPTRuh5T_T-Qi_Au3pugYJd6/pub?gid=1675725176&single=true&output=csv",
};

export interface ContactDetails {
  name: string;
  role: string;
  dept?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface EventCoordinatorInfo {
  eventName: string;
  heads: ContactDetails[];
  others: ContactDetails[];
}

export interface TeamSection {
  category: string;
  members: ContactDetails[];
}

// Helper function to fetch and parse a generic team CSV
async function fetchTeamData(url: string, categoryName: string): Promise<TeamSection> {
  if (!url || url.includes("YOUR_")) return { category: categoryName, members: [] };
  
  const res = await fetch(url, { next: { revalidate: 60 } });
  const csvText = await res.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  
  const members = (parsed.data as any[]).map(row => {
    // Determine the role
    let assignedRole = row.Role || "";
    
    // Automatically remove the "Core Member" or "Core Responsibility" tags
    if (assignedRole.toLowerCase().includes("core member") || assignedRole.toLowerCase().includes("core responsibility")) {
      assignedRole = "";
    }

    return {
      name: row.Name || "Unknown",
      role: assignedRole,
      dept: row.Dept || "",
      email: row.Email || "",
      phone: row.Phone || "",
      image: row.Image || ""
    };
  });

  return { category: categoryName, members };
}

export async function getAllStandardTeams(): Promise<TeamSection[]> {
  // Fetch all your separate tabs at the same time
  const [management, finance, website, marketing, social, design] = await Promise.all([
    fetchTeamData(URLS.MANAGEMENT, "MANAGEMENT TEAM"),
    fetchTeamData(URLS.FINANCE, "FINANCIAL TEAM"),
    fetchTeamData(URLS.WEBSITE, "WEBSITE TEAM"),
    fetchTeamData(URLS.MARKETING, "MARKETING TEAM"),
    fetchTeamData(URLS.SOCIAL, "SOCIAL MEDIA TEAM"),
    fetchTeamData(URLS.DESIGN, "DESIGN TEAM")
  ]);

//   return [management, finance, website, marketing, social, design].filter(team => team.members.length > 0);
    return [management, finance, website, marketing, social, design]
}

export async function getEventCoordinators(): Promise<EventCoordinatorInfo[]> {
  if (!URLS.EVENTS) return [];

  const res = await fetch(URLS.EVENTS, { next: { revalidate: 60 } });
  const csvText = await res.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  
  const grouped: Record<string, { heads: ContactDetails[], others: ContactDetails[] }> = {};

  (parsed.data as any[]).forEach(row => {
    if (!grouped[row.EventName]) {
      grouped[row.EventName] = { heads: [], others: [] };
    }
    
    const isHead = row.IsHead?.toLowerCase() === 'true';
    const memberObj: ContactDetails = {
      name: row.Name,
      role: isHead ? "Head Coordinator" : "",
      image: row.Image || ""
    };
    
    if (isHead) {
      grouped[row.EventName].heads.push(memberObj);
    } else {
      grouped[row.EventName].others.push(memberObj);
    }
  });

  return Object.keys(grouped).map(key => ({
    eventName: key,
    heads: grouped[key].heads,
    others: grouped[key].others
  }));
}