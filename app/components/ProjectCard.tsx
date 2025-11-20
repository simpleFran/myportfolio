/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  location: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  location,
  image,
  tags,
  github,
  link,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-[var(--color-light)] dark:bg-[var(--color-soft)] text-[var(--color-primary)] 
                 dark:text-[var(--color-light)] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
    >
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <h5 className="text-md font-semibold mb-2 text-primary">{location}</h5>
      <p className="text-md mb-3 text-primary">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[var(--color-secondary)] text-[var(--color-light)] px-2 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:text-[var(--color-primary)] transition"
          >
            <FaGithub size={20} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:text-[var(--color-primary)] transition"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
