"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiJavascript,
  SiSupabase,
  SiRedux,
  SiReduxsaga, // Redux Toolkit doesn't have a dedicated icon; this is a close stand-in.
} from "react-icons/si";
const techStack = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  { icon: <SiSupabase className="text-green-500" />, name: "Supabase" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiReduxsaga className="text-indigo-500" />, name: "Redux Toolkit" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  {
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
    name: "GitHub",
  },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  {
    icon: <SiFramer className="text-black dark:text-white" />,
    name: "Framer Motion",
  },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
];
export default function About() {
  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg leading-7 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        HI! My name is{" "}
        <span className="font-semibold text-blue-600">Abdelrhman Hisham</span> —
        a front-end engineer, based in Egypt.
      </motion.p>

      <motion.p
        className="text-lg leading-7 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I specialize in building fast, accessible, and engaging web interfaces
        using technologies like <strong>React</strong>, <strong>Next.js</strong>{" "}
        and <strong>Tailwind CSS</strong>, My approach combines clean code,
        thoughtful UI, and a touch of motion to bring designs to life.
      </motion.p>

      <motion.p
        className="text-lg leading-7 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        My journey began with a love for design and problem-solving. Over time,
        I evolved into a developer who values both form and function — crafting
        user experiences that are not only visually polished, but also intuitive
        and performant.
      </motion.p>

      <motion.p
        className="text-lg leading-7 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Whether it&apos;s designing seamless animations, integrating APIs, or
        optimizing for performance, I enjoy turning ideas into interactive
        digital products that feel great to use.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Technologies I use:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 p-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-2xl  transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="text-sm text-center text-zinc-700 dark:text-zinc-200">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
