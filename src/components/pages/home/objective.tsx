"use client";

import { profileData } from "@/data/home_data";
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
      <p className="text-muted-foreground">{profileData.objective}</p>
    </motion.section>
  );
};

export default Objective;
