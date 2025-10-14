import { Bitcount_Prop_Double } from "next/font/google";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const bitcount = Bitcount_Prop_Double({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: 'About | Abdelrhman Hisham',
  description: 'Learn more about Abdelrhman Hisham – Web Developer & Designer.',
};
export default function About() {
  return (
    <div className="container mx-auto py-8  space-y-16">
      {/* Profile Header */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <img
            src="/img1.jpg"
            alt="My Profile"
            className="w-64 h-64 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
        </div>
        <div>
          <h1
            className={`text-4xl ${bitcount.className} font-extrabold tracking-tight mb-2`}
          >
            Hi, I'm <span className="text-yellow-400">Abdelrhman Hisham</span>{" "}
            
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Frontend Developer based in Egypt. Passionate about building modern,
            responsive, and user-friendly applications.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">
          Contact Information
        </h2>

        <div className="grid sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <div className="bg-[#1e1d1d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <FaEnvelope className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href="mailto:abdelrhman@example.com"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              aboodhisham222@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#1e1d1d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <FaPhoneAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a
              href="tel:+201234567890"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              +201022652513
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#1e1d1d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <FaMapMarkerAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">Al-Minya, Egypt</p>
          </div>
        </div>

        {/* CV Download */}
        <div className="text-center mt-12">
          <a
            href="/Abdelrhman Hisham (Front-End Resume).pdf" 
            download
            className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
