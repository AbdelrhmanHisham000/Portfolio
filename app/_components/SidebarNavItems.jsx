

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarNavItems() {
  const [activeId, setActiveId] = useState("home");

  const items = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contacts", href: "#contacts", id: "contacts" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex flex-col gap-2 relative">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <li key={item.name} className="relative">
            <a
              href={item.href}
              className={`block px-4 py-2 rounded-lg font-medium relative z-10 transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              {item.name}
            </a>

 
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-lg bg-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
