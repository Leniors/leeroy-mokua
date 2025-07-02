// data/bento/index.tsx
import { Box, Atom, Paintbrush } from "lucide-react";
import {
  Code2,
  MonitorSmartphone,
  Paintbrush2,
  DatabaseZap,
} from "lucide-react";
import { User, Folder, BookOpen, MessageCircle } from "lucide-react";

export const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

  {
    name: "Skills",
    link: "#skills",
    icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Folder className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const gridItems = [
  {
    title: "Next.js",
    description: "A React framework for production.",
    header: <div className="text-blue-500">Framework</div>,
    icon: <Box className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    header: <div className="text-green-500">Library</div>,
    icon: <Atom className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    header: <div className="text-purple-500">CSS Framework</div>,
    icon: <Paintbrush className="w-8 h-8 text-purple-500" />,
  },
];

export const projects = [
  {
    id: 1,
    title: "DevPort – Developer Portfolio",
    description:
      "A clean, responsive portfolio template built with Next.js, Tailwind CSS, and Framer Motion.",
    img: "/projects/devport.png",
    iconLists: [
      <Code2 key="1" />,
      <MonitorSmartphone key="2" />,
      <Paintbrush2 key="3" />,
    ],
    link: "https://devport.example.com",
  },
  {
    id: 2,
    title: "BizLanding – Business Landing Page",
    description:
      "A conversion-focused landing page UI template designed for startups and agencies.",
    img: "/projects/bizlanding.png",
    iconLists: [
      <Paintbrush2 key="1" />,
      <MonitorSmartphone key="2" />,
      <DatabaseZap key="3" />,
    ],
    link: "https://bizlanding.example.com",
  },
  {
    id: 3,
    title: "Tech Blog CMS",
    description:
      "A content management system for tech blogs with MDX support and customizable components.",
    img: "/projects/techblog.png",
    iconLists: [
      <Code2 key="1" />,
      <DatabaseZap key="2" />,
      <MonitorSmartphone key="3" />,
    ],
    link: "https://techblog.example.com",
  },
  {
    id: 4,
    title: "DashboardX – Admin Dashboard",
    description:
      "A feature-rich admin dashboard with analytics, charts, and role-based access.",
    img: "/projects/dashboardx.png",
    iconLists: [
      <DatabaseZap key="1" />,
      <MonitorSmartphone key="2" />,
      <Code2 key="3" />,
    ],
    link: "https://dashboardx.example.com",
  },
];
