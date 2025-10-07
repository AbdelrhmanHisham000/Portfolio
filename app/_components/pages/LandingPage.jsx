"use client";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Skills from "./Skills";

import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="min-h-screen flex items-center justify-center"
    id={id}
  >
    {children}
  </motion.section>
);

export default function LandingPage() {
  return (
    <div>
      <SectionWrapper id="home">
        <Homepage />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="contacts">
        <Contact />
      </SectionWrapper>
    </div>
  );
}
