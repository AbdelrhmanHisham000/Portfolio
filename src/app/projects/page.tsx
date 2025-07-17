import { ProjectCard } from "@/src/_components/ProjectCard";

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

export default async function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 pt-10 pb-40">
      <h1 className="text-4xl font-bold mb-2 text-cyan-400">Projects</h1>
      <p className="text-gray-400 mb-10 max-w-2xl">
        A selection of apps and websites I&apos;ve built recently.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}
