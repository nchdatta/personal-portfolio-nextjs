"use client";

import { certificationData } from "@/data/home_data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">Certifications</h2>

      <div className="space-y-4">
        {certificationData.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="flex items-start gap-3 p-4 border rounded-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          >
            <div className="bg-primary/10 p-2 rounded-full">
              <Award size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.organization}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              {cert.description && (
                <p className="text-sm mt-2">{cert.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
