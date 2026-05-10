import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  role: string;
  readTime: string;
  date: string;
  image: string;
  trending?: boolean;
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "africa-startups-billion-dollar-decade",
    title: "Africa's Startups Enter The Billion-Dollar Decade",
    excerpt:
      "From Lagos to Nairobi, a new class of founders is reshaping global capital flows — and the world is finally paying attention.",
    category: "Startups",
    author: "Amara Okafor",
    role: "Senior Editor",
    readTime: "8 min",
    date: "May 8, 2026",
    image: blog1,
    featured: true,
    trending: true,
  },
  {
    slug: "private-credit-quiet-revolution",
    title: "The Quiet Revolution Inside Private Credit",
    excerpt: "Why $2.1T of private credit is rewriting how the world's biggest deals get funded.",
    category: "Finance",
    author: "Daniel Reyes",
    role: "Markets Bureau",
    readTime: "6 min",
    date: "May 6, 2026",
    image: blog2,
    trending: true,
  },
  {
    slug: "ev-luxury-arms-race",
    title: "Inside The Luxury EV Arms Race",
    excerpt: "Three new players just entered the high-end electric segment — and the incumbents are nervous.",
    category: "Mobility",
    author: "Lina Park",
    role: "Industry",
    readTime: "5 min",
    date: "May 4, 2026",
    image: blog3,
    trending: true,
  },
  {
    slug: "gulf-sovereign-wealth-tech-pivot",
    title: "Why Gulf Sovereign Wealth Is Pivoting To Deep Tech",
    excerpt: "ADQ, PIF and Mubadala are quietly buying the future. Here's the playbook.",
    category: "Markets",
    author: "Hadi Mansour",
    role: "Global Capital",
    readTime: "7 min",
    date: "May 2, 2026",
    image: blog2,
  },
  {
    slug: "ai-agents-enterprise-stack",
    title: "AI Agents Are Eating The Enterprise Stack",
    excerpt: "The first wave of autonomous workers has shipped. The second wave will replace SaaS categories whole.",
    category: "Technology",
    author: "Sofía Mendes",
    role: "Tech",
    readTime: "9 min",
    date: "Apr 30, 2026",
    image: blog1,
  },
  {
    slug: "luxury-brands-direct-to-consumer",
    title: "Luxury Goes Direct: The End Of The Wholesale Era",
    excerpt: "Maisons are taking back the customer relationship — and margins are following.",
    category: "Business",
    author: "Claire Dubois",
    role: "Luxury Desk",
    readTime: "5 min",
    date: "Apr 28, 2026",
    image: blog3,
  },
];

export const CATEGORIES = ["All", "Startups", "Finance", "Markets", "Technology", "Mobility", "Business"];
