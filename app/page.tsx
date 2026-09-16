import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Automations from "./components/Automations";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-text-primary">
      <Header />
      <Hero />
      <Capabilities />
      <Services />
      <Process />
      <Projects />
      <Automations />
      <Experience />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
