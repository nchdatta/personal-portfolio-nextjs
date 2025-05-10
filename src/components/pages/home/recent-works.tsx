"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/home_data";
import { motion } from "framer-motion";
import Image from "next/image";

const RecentWorks = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-6">Portfolio Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="border rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gray-100">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="default" size="sm" className="w-full" asChild>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project →
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default RecentWorks;
