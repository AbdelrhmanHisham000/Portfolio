import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFramer,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiReduxsaga,
  SiTypescript,
} from "react-icons/si";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="container mx-auto py-12 space-y-16" id="skills">
      {/* Section Header */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10 text-yellow-400">Skills</h2>
      </section>

      {/* Skills Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
       <div className="flex flex-col items-center">
  <FaHtml5
    size={60}
    className="hover:text-red-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">HTML</p>
</div>

<div className="flex flex-col items-center">
  <FaCss3Alt
    size={60}
    className="hover:text-blue-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">CSS</p>
</div>

<div className="flex flex-col items-center">
  <FaJsSquare
    size={60}
    className="hover:text-yellow-300 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">JavaScript</p>
</div>

<div className="flex flex-col items-center">
  <FaReact
    size={60}
    className="hover:text-cyan-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">React</p>
</div>

<div className="flex flex-col items-center">
  <SiNextdotjs
    size={60}
    className="hover:text-white hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Next.js</p>
</div>

<div className="flex flex-col items-center">
  <SiRedux
    size={60}
    className="hover:text-purple-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Redux</p>
</div>

<div className="flex flex-col items-center">
  <SiReduxsaga
    size={60}
    className="hover:text-pink-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Redux Toolkit</p>
</div>

<div className="flex flex-col items-center">
  <SiReactquery
    size={60}
    className="hover:text-red-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">React Query</p>
</div>

<div className="flex flex-col items-center">
  <SiReactrouter
    size={60}
    className="hover:text-pink-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">React Router</p>
</div>

<div className="flex flex-col items-center">
  <SiTypescript
    size={60}
    className="hover:text-blue-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Typescript</p>
</div>

<div className="flex flex-col items-center">
  <RiTailwindCssFill
    size={60}
    className="hover:text-sky-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Tailwind CSS</p>
</div>

<div className="flex flex-col items-center">
  <FaBootstrap
    size={60}
    className="hover:text-purple-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Bootstrap</p>
</div>

<div className="flex flex-col items-center">
  <FaSass
    size={60}
    className="hover:text-pink-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Sass</p>
</div>

<div className="flex flex-col items-center">
  <SiMui
    size={60}
    className="hover:text-blue-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Material UI</p>
</div>

<div className="flex flex-col items-center">
  <SiFramer
    size={60}
    className="hover:text-pink-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Framer Motion</p>
</div>

<div className="flex flex-col items-center">
  <FaReact
    size={60}
    className="hover:text-cyan-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">React Native</p>
</div>

<div className="flex flex-col items-center">
  <FaGitAlt
    size={60}
    className="hover:text-orange-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Git</p>
</div>

<div className="flex flex-col items-center">
  <FaGithub
    size={60}
    className="hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">GitHub</p>
</div>

<div className="flex flex-col items-center">
  <RiSupabaseFill
    size={60}
    className="hover:text-green-400 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Supabase</p>
</div>
<div className="flex flex-col items-center">
  <SiFirebase
    size={60}
    className="hover:text-yellow-500 hover:scale-125 transition duration-300 ease-in-out"
  />
  <p className="mt-3 text-gray-300 font-medium">Firebase</p>
</div>
      </section>
    </div>
  );
}
