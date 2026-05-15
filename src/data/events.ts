export interface EventDetails {
  slug: string;
  title: string;
  date: string;
  day: string;
  time: string;
  category: 'Ceremony' | 'Competition' | 'Exhibition' | 'Workshop' | 'Hackathon';
  description: string;
  subEvents?: string[];
  registrationUrl?: string;
  registrationLinks?: Array<{ label: string; url: string }>;
  color: string;
  prizePool?: string;
  image: string;
}

export const events: EventDetails[] = [
  // Day 1: 29.05.26 (Friday)
  {
    slug: "inauguration",
    title: "Inauguration",
    date: "29.05.26",
    day: "Friday",
    time: "10:00 AM - 11:00 AM",
    category: "Ceremony",
    description: "The grand opening ceremony marking the beginning of TECHPRABHA 2026. Join us as we initiate the paradigm and set the stage for relentless innovation.",
    color: "#ff00ff",
    image: "/eventImages/inauguration.png"
  },
  {
    slug: "integrated-tech-exhibition",
    title: "Integrated Tech Exhibition",
    date: "29.05.26",
    day: "Friday",
    time: "11:00 AM - 5:00 PM",
    category: "Exhibition",
    description: "A showcase of next-generation ideas brought to reality. Explore diverse projects spanning multiple disciplines, presented by the brightest innovators.",
    subEvents: [
      "Hardware Prototype",
      "Software Prototype",
      "Poster Presentation"
    ],
    registrationLinks: [
      {
        label: "Hardware Prototype Exhibition",
        url: "https://forms.gle/KsENGbSd9hkqZER1A"
      },
      {
        label: "Software Prototype Exhibition",
        url: "https://forms.gle/SzRVYBxYgiMyztwi7"
      },
      {
        label: "Poster Presentation Exhibition",
        url: "https://forms.gle/9GbRXQhuTL4biLcZ9"
      }
    ],
    color: "#ff00ff",
    prizePool: "TBA",
    image: "/eventImages/integratedTechExibition.png"
  },
  {
    slug: "quiz",
    title: "Quiz",
    date: "29.05.26",
    day: "Friday",
    time: "11:00 AM - 12:00 PM",
    category: "Competition",
    description: "Test your knowledge across various domains of technology, pop culture, and general awareness. A fast-paced battle of wits where only the sharpest minds survive.",
    registrationUrl: "https://forms.gle/VpsGgPXGUx7rs6cy8",
    color: "#00f0ff",
    prizePool: "TBA",
    image: "/eventImages/quiz.png"
  },
  {
    slug: "robo-race-event",
    title: "Robo Race Event",
    date: "29.05.26",
    day: "Friday",
    time: "11:00 AM - 1:00 PM",
    category: "Competition",
    description: "Watch autonomous and manual machines navigate complex tracks. Teams will deploy their robots to race against the clock and claim the top spot.",
    registrationUrl: "https://forms.gle/esQ1vkF62LzdmW3h9",
    color: "#00f0ff",
    prizePool: "TBA",
    image: "/eventImages/roborace.png"
  },
  {
    slug: "prompt-engineering-challenge",
    title: "Prompt Engineering Challenge",
    date: "29.05.26",
    day: "Friday",
    time: "12:30 PM - 02:00 PM",
    category: "Competition",
    description: "Communicate with the machine. Prove your ability to extract precise, creative, and optimized outputs from large language models in the shortest time possible.",
    registrationUrl: "https://forms.gle/Ft12qZPMh9LJtk3C7",
    color: "#7000ff",
    prizePool: "TBA",
    image: "/eventImages/promptEngineering.png"
  },
  {
    slug: "ui-ux-design-competition",
    title: "UI/UX Design Competition",
    date: "29.05.26",
    day: "Friday",
    time: "01:45 PM - 3:00 PM",
    category: "Competition",
    description: "Crafting the digital experience. Designers will be given a problem statement to wireframe, prototype, and present a high-fidelity interface that solves user needs.",
    registrationUrl: "https://forms.gle/UziZEFtAyQBgrZ6y6",
    color: "#7000ff",
    prizePool: "TBA",
    image: "/eventImages/uiux.png"
  },
  {
    slug: "coding-competition",
    title: "Coding Competition",
    date: "29.05.26",
    day: "Friday",
    time: "03:15 PM - 05:00 PM",
    category: "Competition",
    description: "Solve complex data structure and algorithm problems under intense time pressure.",
    registrationUrl: "https://forms.gle/bFmY4FqcUZhYe6ae8",
    color: "#00f0ff",
    prizePool: "TBA",
    image: "/eventImages/codingCompetition.png"
  },
  {
    slug: "innovative-idea-pitching",
    title: "Innovative Idea Pitching",
    date: "29.05.26",
    day: "Friday",
    time: "03:00 PM - 06:00 PM",
    category: "Competition",
    description: "Pitch your most groundbreaking startup or tech idea to a panel of expert judges.",
    registrationUrl: "https://forms.gle/PHKBXwwLRz5HAH2o9",
    color: "#00f0ff",
    prizePool: "TBA",
    image: "/eventImages/innovativeIdeaPitching.png"
  },
  // Day 2: 30.05.26 (Saturday)
  {
    slug: "9-hour-hackathon",
    title: "9-Hour Hackathon",
    date: "30.05.26",
    day: "Saturday",
    time: "09:00 AM - 06:00 PM",
    category: "Hackathon",
    description: "A marathon of code, caffeine, and creativity. Build a functional prototype from scratch addressing real-world themes within a grueling 9-hour window.",
    registrationUrl: "https://forms.gle/kRg28qsqkiV3hjoL8",
    color: "#ff00ff",
    prizePool: "TBA",
    image: "/eventImages/hackathon.png"
  },
  {
    slug: "lift-off",
    title: "Lift off",
    date: "30.05.26",
    day: "Saturday",
    time: "10:00 AM - 12:00 PM",
    category: "Competition",
    description: "Prepare for launch in this exciting aerodynamics and propulsion contest.",
    registrationUrl: "https://forms.gle/MwnBUnKwdVjJG3a99",
    color: "#7000ff",
    prizePool: "TBA",
    image: "/eventImages/liftoff.png"
  },
  {
    slug: "eggstravacanza",
    title: "Eggstravacanza",
    date: "30.05.26",
    day: "Saturday",
    time: "12:15 PM - 02:30 PM",
    category: "Competition",
    description: "Protect the egg at all costs! Design the ultimate safe landing structure.",
    registrationUrl: "https://forms.gle/zYcGxgAUoTt1pbTa7",
    color: "#7000ff",
    prizePool: "TBA",
    image: "/eventImages/eggstravacanza.png"
  },
  {
    slug: "bridge-building-competition",
    title: "Bridge Building Competition",
    date: "30.05.26",
    day: "Saturday",
    time: "02:30 PM - 04:00 PM",
    category: "Competition",
    description: "Engineering structural integrity using limited materials. Teams will construct model bridges and test their load-bearing capacities until failure.",
    registrationUrl: "https://forms.gle/gQ5HH7w4iECz4XiYA",
    color: "#ff00ff",
    prizePool: "TBA",
    image: "/eventImages/bridgeBuilding.png"
  },
  {
    slug: "autocad-2d-challenge",
    title: "AutoCAD 2D Challenge",
    date: "30.05.26",
    day: "Saturday",
    time: "04:00 PM - 05:30 PM",
    category: "Competition",
    description: "Precision meets speed. Participants will replicate complex 2D drafting designs using AutoCAD within the strict time limit.",
    registrationUrl: "https://forms.gle/r7ikpUifZXLXZQed9",
    color: "#00f0ff",
    prizePool: "TBA",
    image: "/eventImages/autocad.png"
  },
];
