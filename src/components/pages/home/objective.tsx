"use client";

import { type Objective } from "@/services/types";
import { motion } from "framer-motion";

interface ObjectiveProps {
  objective: Objective;
}

const Objective = ({ objective }: ObjectiveProps) => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">{objective.title}</h2>
      <p className="text-muted-foreground">{objective.content}</p>
    </motion.section>
  );
};

export default Objective;
