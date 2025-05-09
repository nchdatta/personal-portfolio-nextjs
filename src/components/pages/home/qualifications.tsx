"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Qualifications = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Qualifications</h2>

      <motion.div
        className="mb-8 relative pl-6 border-l-2 border-blue-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
            2022
          </span>
          <h3 className="font-bold">Full Stack Web Development</h3>
          <ExternalLink size={16} className="text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          Complete web development course which included HTML to JavaScript,
          React, Node/Express, MongoDB etc.
        </p>
        <p className="text-xs text-muted-foreground">
          Pirple • Jun 2021 - December 2021
        </p>
      </motion.div>

      <motion.div
        className="mb-8 relative pl-6 border-l-2 border-blue-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
            2020
          </span>
          <h3 className="font-bold">
            BSc. in Computer Science & Engineering (CSE)
          </h3>
          <ExternalLink size={16} className="text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          Achieved four years bachelor degree from a reputed university. It was
          a great really a experience of life.
        </p>
        <p className="text-xs text-muted-foreground">
          DIU • January 2016 - December 2020
        </p>
      </motion.div>

      <motion.div
        className="mb-8 relative pl-6 border-l-2 border-blue-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
            2014
          </span>
          <h3 className="font-bold">Higher Secondary School Certificate</h3>
          <ExternalLink size={16} className="text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          Achieved two years higher secondary degree from Science major from a
          reputed college.
        </p>
        <p className="text-xs text-muted-foreground">
          BCC • July 2012 - Jun 2014
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Qualifications;
