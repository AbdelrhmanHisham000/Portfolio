'use client'
import { ProjectCard } from "@/src/_components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BlackLuxe-Store",
    description:
      "A visually striking, dark-themed e-commerce web application featuring a luxury aesthetic, user-friendly shopping experience, and a powerful admin dashboard",
    image: "/BlackLuxe.png",
    link: "https://blackluxe.vercel.app/",
    tags: ["Next.js", "Tailwind", "TypeScript", "Supabase"],
  },
  {
    title: "Quran App",
    description:
      " A responsive, feature-rich Quran reading app with audio recitation, Tafseer, and Hadith integration",
    image: "/Quran-App.png",
    link: "https://qurann1.netlify.app/",
    tags: ["Html", "CSS", "JS"],
  },
  {
    title: "Quran App V2",
    description:
      "An upgraded and modernized Quran web application built with React, adding advanced features and improved user experience.",
    image: "/Quran-App-V2.png",
    link: "https://quran-app-v2.vercel.app/",
    tags: ["React", "Tailwind"],
  },
];

export default  function Page() {

  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 pt-10 pb-40">
      <motion.h1
        className="text-4xl font-bold mb-2 text-cyan-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-gray-400 mb-10 max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        A selection of apps and websites I&apos;ve built recently.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
