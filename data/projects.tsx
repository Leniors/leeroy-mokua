/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// data/projects.ts
import { FaReact, FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import { SiAppwrite, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const projects = [
  {
    id: 4,
    title: "LegalEase AI",
    description:
      "A smart legal assistant that helps users ask legal questions and receive accurate AI-generated responses. Includes a clean landing page, an intuitive Ask page, and an About section.",
    iconLists: [<FaReact />, <SiAppwrite />, <FaBrain />],
    header: (
      <img
        src="/legalease-ai.png"
        alt="LegalEase AI Screenshot"
        className="rounded-xl object-cover h-48 w-full"
      />
    ),
    link: "https://legal-ease-ai-nine.vercel.app/",
  },
  {
    id: 3,
    title: "The Vault",
    description:
      "An e-commerce platform featuring a modern UI, M-Pesa & card payments, a persistent cart, and admin order management.",
    iconLists: [<FaReact />, <SiAppwrite />, <FaDatabase />],
    header: (
      <img
        src="/thevaultscreenshot.png"
        alt="The Vault Screenshot"
        className="rounded-xl object-cover h-48 w-full"
      />
    ),
    link: "https://the-vault-phi.vercel.app/",
  },
  {
    id: 2,
    title: "Lynks",
    description:
      "A link-in-bio app for developers with public profiles, custom icons, color themes, drag-and-drop link ordering, and real-time updates.",
    iconLists: [<SiNextdotjs />, <SiTailwindcss />, <SiAppwrite />],
    header: (
      <img
        src="/lynksscreenshot.png"
        alt="The Vault Screenshot"
        className="rounded-xl object-cover h-48 w-full"
      />
    ),
    link: "https://lynks-seven.vercel.app/",
  },
  {
    id: 1,
    title: "JobTrek-ai",
    description:
      "An AI-powered CV and job description matcher that helps job seekers improve their applications with smart suggestions.",
    iconLists: [<FaReact />, <SiTailwindcss />, <FaCode />],
    header: (
      <img
        src="/jobtrek-aiscreenshot.png"
        alt="The Vault Screenshot"
        className="rounded-xl object-cover h-48 w-full"
      />
    ),
    link: "https://jobtrek-ai.vercel.app/",
  },
];
