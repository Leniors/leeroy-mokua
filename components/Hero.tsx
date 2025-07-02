"use client";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { Send } from "lucide-react";

const Hero = () => {
  return (
    <div id="about" className="relative pt-20 md:pb-15">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="top-5 left-5 w-[60vw] md:w-[80vw] md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-40 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-20 left-60 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background (Dark as default) */}
      <div className="absolute top-0 left-0 z-[-10] flex h-screen w-full items-center justify-center bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Development with Next.js and React
          </h2>

          <TextGenerateEffect
            className="mt-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
            words="Transforming Your Ideas into Reality"
          />

          <p className="mb-4 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider text-white">
            I&apos;m Leeroy Mokua — a creative software engineer from Kenya, building
            full-stack digital products using React, Next.js, and Appwrite. I
            turn ideas into scalable, real-world applications.
          </p>

          <a href="#projects">
            <MagicButton title="Explore My Projects" icon={<Send />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
