import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Hank Dong",
  initials: "HD",
  url: "https://emotionlesshank.github.io",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/Melbourne",
  description:
    "Full-Stack Engineer · Frontend-Primary — 5+ years · React / Next.js / TypeScript, with AI system integration & Go / Python backend.",
  summary:
    "Full-stack engineer with 5+ years building high-performance production web products, primarily in React / Next.js / TypeScript. From DJI's company-wide DevOps platform serving 10,000+ employees, to owning a top-2 feature on GMGN's on-chain trading terminal, to building [OddFi](https://oddfi.io)'s React 19 prediction-market frontend end-to-end (0→1) — where I also helped build and integrate the product's AI agent system and took on part of the Go backend. Based in Melbourne with full Australian working rights · UNSW Master of IT (Distinction).",
  avatarUrl: "/avatar.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "TailwindCSS", icon: undefined },
    { name: "React Query", icon: undefined },
    { name: "RxJS", icon: undefined },
    { name: "RAG / LLM", icon: undefined },
    { name: "pgvector", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "AWS", icon: undefined },
    { name: "Vue", icon: undefined },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hankdong1997@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EmotionlessHank",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hank-dong",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hankdong1997@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "OddFi",
      href: "https://oddfi.io",
      badges: [],
      location: "Melbourne (Remote)",
      title: "Full-Stack / Frontend-Lead Engineer",
      logoUrl: "/logos/oddfi.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Built the React 19 / Next.js 15 frontend for an on-chain sports prediction market end-to-end (0→1) — 30+ feature domains (bet-slip, live odds, pools/staking, swap, portfolio, World-Cup bracket, AI chat) with wagmi/viem Web3 integration, decimal.js exact-precision money math, and 9-language i18n. Co-developed and integrated the product's AI agent system (streaming SSE chat, semantic memory, provider-agnostic LLM layer) and built Go backend services for the live data layer (Sportmonks ingestion, Redis pub/sub + WebSocket, on-chain↔off-chain reconciliation). Owned deployment across Vercel (4 environments) and AWS EC2.",
    },
    {
      company: "GMGN.ai (BitUniverse)",
      href: "https://gmgn.ai",
      badges: [],
      location: "Shenzhen (Hybrid)",
      title: "Senior Frontend Engineer, Web3",
      logoUrl: "/logos/gmgn.png",
      start: "Jun 2025",
      end: "Jan 2026",
      description:
        "Core owner of the Trending/Leaderboard module (a top-2 platform feature) and sole frontend owner of several standalone features on a top on-chain trading terminal. Fixed a 6-month-old copy-trade flicker with RxJS request-dedup and switchMap cancellation (render speed +30%); built Address Radar 0→1 with Jotai atomic state and AbortController race handling; cut Credits Mall first-paint 3s→0.5s (−83%) via CSR→SSR; led site-wide Cloudflare Turnstile bot protection; and built a real-time WebSocket + RxJS market-data layer.",
    },
    {
      company: "DJI",
      href: "https://www.dji.com",
      badges: [],
      location: "Shenzhen",
      title: "Frontend / Engineering-Productivity Engineer",
      logoUrl: "/logos/dji.png",
      start: "Mar 2022",
      end: "Mar 2025",
      description:
        "Built and architected the frontend (Vue 2 + ECharts) for a company-wide R&D-efficiency DevOps cockpit serving 10,000+ employees / 2,000+ engineers — a modular panel system with a unified API adapter layer absorbing two incompatible API formats. Led build-machine standardisation + CI optimisation for the iOS/Android build fleet (Jenkins + Docker + Grafana): 3× iOS build capacity, −40% build-queue time, −60% build-failure rate. Built GitLab CI/CD pipelines for drone-firmware builds (Kubernetes runners) and backend services in Python/Django.",
    },
  ],
  education: [
    {
      school: "University of New South Wales (UNSW)",
      href: "https://www.unsw.edu.au",
      degree: "Master of IT — Artificial Intelligence major (Distinction)",
      logoUrl: "/logos/unsw.png",
      start: "",
      end: "",
    },
    {
      school: "Shenzhen University",
      href: "https://www.szu.edu.cn",
      degree: "Bachelor's Degree",
      logoUrl: "/logos/szu.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "ShallowL",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A free, self-hosted DeepL alternative — bring your own LLM (BYOK), your own document library (RAG), and your own translation glossary.",
      technologies: ["Go", "PostgreSQL", "pgvector", "htmx", "SSE"],
      links: [
        {
          type: "Demo coming soon",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "moat",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "First-hand-citation RAG: answers grounded only in your own sources, every claim cited back to where it came from.",
      technologies: ["Python", "FastAPI", "pgvector", "MongoDB", "AWS Fargate"],
      links: [
        {
          type: "Demo coming soon",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "invest-cockpit",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A BTC/MSTR investment dashboard tracking a real dollar-cost-averaging strategy (public demo runs on seed data).",
      technologies: ["Flask", "Python", "ECharts"],
      links: [
        {
          type: "Demo coming soon",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "amazing-dev-skills",
      href: "https://github.com/EmotionlessHank/amazing-dev-skills",
      dates: "2025 - Present",
      active: true,
      description:
        "A 35+ reusable Claude Code skill library — design audits, CI/CD build doctors, frontend performance audits, and multi-agent parallel-worktree orchestration.",
      technologies: ["Claude Code", "TypeScript", "Automation"],
      links: [
        {
          type: "Source",
          href: "https://github.com/EmotionlessHank/amazing-dev-skills",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Awesome-Context-Scribe",
      href: "https://github.com/EmotionlessHank/Awesome-Context-Scribe",
      dates: "2025",
      active: true,
      description:
        "A published npm CLI for audio transcription — Gemini multimodal with speaker diarization.",
      technologies: ["Node.js", "TypeScript", "Gemini"],
      links: [
        {
          type: "Source",
          href: "https://github.com/EmotionlessHank/Awesome-Context-Scribe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
