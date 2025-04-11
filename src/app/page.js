import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ContactForm from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  );
}
