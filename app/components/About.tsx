"use client";

import { motion } from "framer-motion";
import Container from "./Container";
// import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section
      id="about"
      //   className="py-10 px-6 sm:px-10 lg:px-20 max-w-5xl mx-auto"
      className="py-2"
    >
      <Container>
        {/* <SectionTitle title="Sobre mim" /> */}
        <h1 className="text-4xl font-bold">Sobre mim</h1>
        <motion.div
          className="mt-6 space-y-6 text-base leading-relaxed text-[color:var(--color-primary)] dark:text-[color:var(--color-primary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="paragraph-about">
            Frank Maldonado, desenvolvedor web com mais de 20 anos de experiência em TI,
            tendo me aprofundado nos últimos anos no ecossistema JavaScript
            moderno:
            <strong className="text-[color:var(--color-secondary)] dark:text-[color:var(--color-secondary)]">
              {" "}
              Node.js, React.js e Next.js
            </strong>
            .
          </p>
          <p className="paragraph-about">
            Já atuei em projetos de gestão, delivery, agronegócio e BI, com foco
            em qualidade, escalabilidade e código limpo. Tenho perfil autodidata
            e sou movido por desafios.
          </p>
          <p className="paragraph-about">
            Também incluo em minhas stacks favoritas:
            <strong className="text-[color:var(--color-secondary)] dark:text-[color:var(--color-secondary)]">
              {" "}
              PostgreSQL, TailwindCSS, Git e Docker.
            </strong>{" "}
            Também gosto de aplicar boas práticas, como organização por
            responsabilidades (Clean Architecture) e testes automatizados.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
