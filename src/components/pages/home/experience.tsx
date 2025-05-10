"use client";

import { Badge } from "@/components/ui/badge";
import { type Experience } from "@/services/types";
import { motion } from "framer-motion";

interface Props {
  experiences: Experience[];
}

const Experience = ({ experiences }: Props) => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Experiences</h2>

      {experiences?.map((item, index: number) => (
        <motion.div
          key={index}
          className="mb-8 relative pl-6 border-l-2 border-green-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-500 text-white text-sm px-2 py-0.5 rounded">
              {item.year}
            </span>
            <h3 className="font-bold">{item.title}</h3>
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {item.company} • {item.location}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.technologies?.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs">
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
