"use client";

import { educationData } from "@/data/home_data";
import { motion } from "framer-motion";

const Qualifications = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Education</h2>

      {educationData.map((edu, index) => (
        <motion.div
          key={edu.id}
          className="mb-8 relative pl-6 border-l-2 border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
              {edu.year}
            </span>
            <h3 className="font-bold">{edu.degree}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            {edu.description}
          </p>
          <p className="text-xs text-muted-foreground">{edu.institution}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Qualifications;
