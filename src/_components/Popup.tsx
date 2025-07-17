"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Github,
  Mail,
  Briefcase,
  User,
  FileText,
  Menu,
  X,
  Cannabis,
  Home,
} from "lucide-react";
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

const RADIUS = 60;
export default function Popup() {
  const [open, setOpen] = useState(false);

  const circleVariants: Variants = {
    closed: { scale: 1, backgroundColor: "#1d4ed8" },
    open: { scale: 1.05, backgroundColor: "#1d4ed8" },
  };

  const itemVariants: Variants = {
    closed: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 0,
      transition: {
        type: "spring", //  نوع الحركة
        stiffness: 300, //قوة النابض.
        damping: 20, //كمية التخميد أو التثبيط
        delay: (menuItems.length - i) * 0.03, // reverse‑stagger on collapse
      },
    }),

    open: (i: number) => {
      const angel = (i * (2 * Math.PI)) / menuItems.length - Math.PI / 2;
      return {
        x: RADIUS * Math.cos(angel),
        y: RADIUS * Math.sin(angel),
        opacity: 1,

        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: i * 0.05, // stagger‑in
        },
      };
    },
  };
  return (
    <div className="grid place-items-center text-white relative ">
      <motion.button
        variants={circleVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br cursor-pointer from-blue-500 to-indigo-500 ring-4 ring-blue-600/40 focus:outline-none"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? <X className="h-5 w-5" /> : <Cannabis className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {menuItems.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            className="absolute"
            variants={itemVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit="closed"
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
