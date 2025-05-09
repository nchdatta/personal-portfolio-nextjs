"use client";

import { motion } from "framer-motion";

const Objective = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Objective</h2>
      <p className="text-muted-foreground">
        A motivated individual with in-depth knowledge of programming languages,
        especially JavaScript and development tools. I am skilled & experienced
        in both Front-end and Back-end Web Development, seeking a position as a
        Web Developer in a growth-oriented company where I can use my skills to
        the advantage of the company while having the scope to develop my own
        skills.
      </p>
    </motion.section>
  );
};

export default Objective;
