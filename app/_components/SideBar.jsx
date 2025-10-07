"use client";
import SidebarNavItems from "./SidebarNavItems";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Cinzel_Decorative } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SideBar() {
  return (
    <motion.aside
      className="bg-white min-h-screen flex flex-col justify-between p-6 shadow-lg overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div
        variants={fadeUp}
        className={`${cinzel.className} text-2xl font-extrabold italic text-gray-800 tracking-wide`}
      >
        Abdelrhman Hisham
      </motion.div>

      {/* Navigation */}
      <motion.nav variants={fadeUp} className="flex-1 mt-10">
        <SidebarNavItems />
      </motion.nav>

      {/* Social Icons */}
      <motion.div
        variants={fadeUp}
        className="flex justify-center space-x-6 text-2xl mb-6"
      >
        <a
          href="https://www.linkedin.com/in/abdelrhman-hisham-a140b1308/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AbdelrhmanHisham000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/share/17BKQdSE5g/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        className="text-[11px] text-gray-500 text-center border-t border-gray-200 pt-3"
      >
        © 2025 Abdelrhman Dev. All rights reserved.
      </motion.footer>
    </motion.aside>
  );
}
