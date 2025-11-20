// app/components/Projects.tsx

"use client";

import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/utils/constants";



const Projects: FC = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-8">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
              location={project.location}
              github={project.github? project.github : undefined}
              // demo={project.demo? project.demo : undefined} 
              demo={project.link ? project.link : undefined} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
