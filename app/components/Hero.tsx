"use client";

import Image from "next/image";
import { Parallax } from "./animations/Parallax";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <Parallax>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6">
                Olá, eu sou o Frank 👋
              </h1>
            </Parallax>

            <Parallax>
              <p className="text-lg sm:text-xl text-primary max-w-xl mb-2">
                Desenvolvedor Full Stack apaixonado por transformar ideias em
                código.
              </p>
              <p className="text-lg sm:text-xl text-primary max-w-xl">
                A solução é simples!
              </p>
            </Parallax>
          </div>

          {/* Imagem */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg border-4 border-[var(--color-soft)]">
              <Image
                src="/images/minha_photo.webp"
                // src="/images/pb.jpg"
                alt="Foto de Frank"
                fill
                // width={280}
                // height={280}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
