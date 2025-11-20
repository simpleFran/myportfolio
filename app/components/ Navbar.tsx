"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      const root = document.documentElement;

      if (nextMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      // Salvar a preferência no localStorage
      localStorage.setItem("theme", nextMode ? "dark" : "light");

      return nextMode;
    });
  };

  // Ao carregar o componente, verifica se existe uma preferência salva
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Define o tema baseado na preferência salva ou no sistema
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  //Observa quais seções estao 'visiveis' e atualiza o estado
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, //ativa quando no min. 60% da seção estiver visivel
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <nav className=" bg-light fixed w-full top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault(); // impede o reload
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold cursor-pointer"
        >
          Frank Dev
        </Link>
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"}`}>
          <Link
            href="#skills"
            className={`menu-effect ${
              activeSection === "skills"
                ? "active-underline text-[color:var(--color-secondary)]"
                : ""
            }`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`menu-effect ${
              activeSection === "projects"
                ? "active-underline text-[color:var(--color-secondary)]"
                : ""
            }`}
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className={`menu-effect ${
              activeSection === "contact"
                ? "active-underline text-[color:var(--color-secondary)]"
                : ""
            }`}
          >
            Contato
          </Link>

          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 w-10 h-10 flex items-center 
            justify-center rounded-full hover:bg-gray-300 transition -mt-1 cursor-pointer"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
