"use client";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const RecentProjects = () => {
  return (
    <section id='projects' className="py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
        A few of my <span className="text-purple-500">recent projects</span>
      </h1>

      <BentoGrid className="mt-10">
        {projects.map((project) => (
          <BentoGridItem
            key={project.id}
            title={
              <div className="flex justify-between items-center">
                <span>{project.title}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 text-neutral-400 hover:text-neutral-200" />
                </a>
              </div>
            }
            description={
              <>
                <p>{project.description}</p>
                <div className="flex space-x-2 mt-2 text-white text-sm">
                  {project.iconLists.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </>
            }
            header={project.header}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default RecentProjects;
