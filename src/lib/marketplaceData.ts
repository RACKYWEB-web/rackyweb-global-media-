export type Business = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  country: string;
  founded: number;
  verified: boolean;
  sponsored?: boolean;
  rating: number;
  employees: string;
  initials: string;
  accent: string; // tailwind gradient class
};

export const BUSINESSES: Business[] = [
  {
    id: "1",
    name: "Northwind Capital",
    tagline: "Cross-border private credit for emerging markets.",
    category: "Finance",
    country: "Singapore",
    founded: 2019,
    verified: true,
    sponsored: true,
    rating: 4.9,
    employees: "120+",
    initials: "NC",
    accent: "from-emerald-deep to-emerald",
  },
  {
    id: "2",
    name: "Sahel Robotics",
    tagline: "Industrial automation built for harsh climates.",
    category: "Industrial",
    country: "Morocco",
    founded: 2021,
    verified: true,
    rating: 4.8,
    employees: "45",
    initials: "SR",
    accent: "from-ink to-emerald-deep",
  },
  {
    id: "3",
    name: "Lumen Health",
    tagline: "AI-native diagnostics for primary care clinics.",
    category: "HealthTech",
    country: "United Kingdom",
    founded: 2022,
    verified: true,
    sponsored: true,
    rating: 4.95,
    employees: "80",
    initials: "LH",
    accent: "from-gold to-gold-soft",
  },
  {
    id: "4",
    name: "Kestrel Aerospace",
    tagline: "Autonomous cargo drones for last-mile logistics.",
    category: "Aerospace",
    country: "United States",
    founded: 2020,
    verified: true,
    rating: 4.7,
    employees: "210",
    initials: "KA",
    accent: "from-ink to-gold",
  },
  {
    id: "5",
    name: "Verdant Foods",
    tagline: "Plant-forward food brand operating in 14 markets.",
    category: "Consumer",
    country: "Netherlands",
    founded: 2018,
    verified: true,
    rating: 4.6,
    employees: "300",
    initials: "VF",
    accent: "from-emerald to-gold-soft",
  },
  {
    id: "6",
    name: "Helix Bio",
    tagline: "Computational biology platform for new therapeutics.",
    category: "BioTech",
    country: "Switzerland",
    founded: 2021,
    verified: true,
    sponsored: true,
    rating: 4.92,
    employees: "65",
    initials: "HB",
    accent: "from-emerald-deep to-ink",
  },
  {
    id: "7",
    name: "Atlas Realty",
    tagline: "Commercial real estate intelligence for institutional capital.",
    category: "Real Estate",
    country: "UAE",
    founded: 2017,
    verified: true,
    rating: 4.7,
    employees: "150",
    initials: "AR",
    accent: "from-gold to-ink",
  },
  {
    id: "8",
    name: "Orenda Studios",
    tagline: "Premium creative house for global luxury brands.",
    category: "Creative",
    country: "France",
    founded: 2020,
    verified: true,
    rating: 4.85,
    employees: "38",
    initials: "OS",
    accent: "from-gold-soft to-emerald",
  },
];

export const MARKET_CATEGORIES = [
  "All",
  "Finance",
  "Industrial",
  "HealthTech",
  "Aerospace",
  "Consumer",
  "BioTech",
  "Real Estate",
  "Creative",
];
