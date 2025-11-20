// app/components/Contact.tsx

"use client";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/frankmaldonado/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/fmcamargo2801",
    label: "Instagram",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/simpleFran",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:frank.m.camargo@gmail.com",
    label: "E-mail",
  },
  {
    icon:<FaWhatsapp/>,
    href: "https://wa.me/+5555991226585",
    label: "WhatsApp",
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
          Contato
        </h2>
        <p className="text-[var(--color-secondary)] mb-8">
          Fique à vontade para entrar em contato pelas redes abaixo:
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[var(--color-accent)] hover:text-[var(--color-primary)] transition"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
      <p className="text-[var(--color-secondary)] mb-8">
        +55 55 99122-6585
      </p>
    </section>
  );
}
