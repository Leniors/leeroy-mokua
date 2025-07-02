"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiAppwrite } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const services = [
  {
    title: "Front-End Development",
    description:
      "I build fast, responsive user interfaces using React, Next.js, and Tailwind CSS — from idea to polished UI.",
    icon: <FaReact className="text-sky-400 w-7 h-7" />,
  },
  {
    title: "Full-Stack Applications",
    description:
      "I connect powerful backends to clean frontends. I use Node.js and Appwrite to ship scalable, full-stack solutions.",
    icon: <FaNodeJs className="text-green-500 w-7 h-7" />,
  },
  {
    title: "Modern UI/UX Design",
    description:
      "I bring simplicity and clarity to my designs. Clean layouts, smooth animations, and intuitive flows come first.",
    icon: <MdDesignServices className="text-pink-400 w-7 h-7" />,
  },
  {
    title: "Next.js + SSR",
    description:
      "I use Next.js to create SEO-optimized, performant websites with API routes, middleware, and dynamic routing.",
    icon: <SiNextdotjs className="text-white w-7 h-7" />,
  },
  {
    title: "Tailwind CSS",
    description:
      "I style with Tailwind CSS — for fast iteration, consistency, and beautiful design systems.",
    icon: <SiTailwindcss className="text-cyan-400 w-7 h-7" />,
  },
  {
    title: "Authentication & Databases",
    description:
      "I use Appwrite for secure auth, database management, and file storage — ideal for modern SaaS products.",
    icon: <SiAppwrite className="text-red-400 w-7 h-7" />,
  },
];

const WhatIDo = () => {
  return (
    <section id="skills" className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-6">Skills</h2>
        <p className="text-center text-lg text-neutral-400 max-w-3xl mx-auto mb-12">
          I specialize in building full-stack web applications that feel fast, look good, and solve real problems.
          From front-end design to back-end architecture — I bring ideas to life on the web.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">{service.icon}<span className="text-lg font-semibold">{service.title}</span></div>
              <p className="text-sm text-neutral-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
