"use client";

import { techExpertiseData } from "@/data/home_data";
import { motion } from "framer-motion";

const TechSkills = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-6">Tech Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(techExpertiseData).map(
          ([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + categoryIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="font-bold mb-3">{category}</h3>
              <ul className="space-y-2">
                {categorySkills.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 ${skill.color} rounded-sm`}
                    ></span>
                    <span>{skill.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default TechSkills;
