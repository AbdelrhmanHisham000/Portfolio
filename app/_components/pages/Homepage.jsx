import { Cinzel_Decorative } from "next/font/google";
import About from "./About";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Homepage() {
  return (
    <div className=" py-60 text-white flex flex-col">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <div
          className={`uppercase text-3xl md:text-5xl font-bold mb-4 ${cinzel.className}`}
        >
          <p>my name is</p>
          <p className="text-5xl md:text-6xl text-yellow-400">Abdelrhman Hisham</p>
        </div>
        <p className="capitalize text-lg text-gray-300 mb-6">
          front end developer based in Egypt
        </p>

        {/* CTA Buttons */}
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300"
          >
            View Work
          </a>
          <a
            href="#contacts"
            className="border border-yellow-400 px-6 py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black"
          >
            Contact Me
          </a>
        </div>

      </main>
    </div>
  );
}
