"use client";

import { TechSkill } from "@/services/types";
import { motion } from "framer-motion";

interface TechSkillsProps {
  techSkills: TechSkill[];
}

const TechSkills = ({ techSkills }: TechSkillsProps) => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-6">Tech Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techSkills.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">{category.name}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span className={`w-3 h-3 ${item.color} rounded-sm`}></span>
                  <span>{item.name}</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechSkills;
