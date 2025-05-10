"use client";

import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/home_data";
import { type Experience } from "@/services/types";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-6">Work Experience</h2>

      {experienceData.map((exp, index) => (
        <motion.div
          key={exp.id}
          className="mb-8 relative pl-6 border-l-2 border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-blue-500" />
            <h3 className="font-bold">{exp.position}</h3>
            {exp.current && (
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                Current
              </Badge>
            )}
          </div>
          <p className="text-base font-medium mb-1">{exp.company}</p>
          <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
          <p className="text-sm text-muted-foreground mb-3">
            {new Date(exp.startDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            -{" "}
            {exp.current
              ? "Present"
              : exp.endDate
              ? new Date(exp.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              : "N/A"}
          </p>
          <p className="text-sm mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
