
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  tags,
}: ProjectProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group block"
    >
      <div className="rounded-2xl h-[380px] overflow-hidden bg-white/5 backdrop-blur border border-white/10 shadow-lg transition-all hover:bg-white/10 hover:shadow-xl">
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition">
              {title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 mb-3 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-cyan-800/30 text-cyan-200 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};
