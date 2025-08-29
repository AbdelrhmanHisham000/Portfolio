"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, Briefcase, User, FileText, Menu, X, Home } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: <Home />, label: "HomePage", href: "/" },
  { icon: <User />, label: "About", href: "about" },
  { icon: <Briefcase />, label: "Projects", href: "projects" },
  {
    icon: <FileText />,
    label: "Resume",
    href: "/Abdelrhman Hisham (Front-End Resume).pdf",
  },
  {
    icon: <Github />,
    label: "GitHub",
    href: "https://github.com/AbdelrhmanHisham000",
  },
] as const;

export default function MobilePopup() {
  const [open, setOpen] = useState(false);

  const itemVariants: Variants = {
    open: (i: number) => ({
      y: -(i + 1) * 55, // spacing between buttons (move UP)
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.05,
      },
    }),
    closed: {
      y: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="grid place-items-center text-white relative">
      {/* Toggle button */}
      <motion.button
        initial="closed"
        animate={open ? "open" : "closed"}
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br cursor-pointer from-blue-500 to-indigo-500 ring-4 ring-blue-600/40 focus:outline-none"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {/* Menu items that animate upward */}
      <AnimatePresence>
        {menuItems.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            variants={itemVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit="closed"
            className="absolute"
          >
            <Link
              href={item.href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow hover:bg-blue-500"
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
