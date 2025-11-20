// app/components/Skills.tsx
"use client";

import { skills } from "@/utils/constants";
import Container from "./Container";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-10" id="skills">
      <Container>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 mb-2"
                width={16}
                height={16}
              />
              <span className="text-sm font-medium text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
