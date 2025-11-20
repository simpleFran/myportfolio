import { About } from "./components/About";
import { FadeInWhenVisible } from "./components/animations/FadeInWhenVisible";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";

export default function Home() {
  return (
    <>
      {" "}
      <ScrollProgressBar />
      <main className="space-y-10 pt-20">
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <About />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <Skills />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <Projects />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <Contact />
        </FadeInWhenVisible>
      </main>
    </>
  );
}
