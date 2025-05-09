"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Interests = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">My Interests</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <Badge variant="outline" className="px-3 py-1.5">
          <Heart size={14} className="mr-1 text-red-500" /> Open Source
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          Web Accessibility
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          Progressive Web Apps
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          UI/UX Design
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          Serverless Architecture
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          Tech Blogging
        </Badge>
        <Badge variant="outline" className="px-3 py-1.5">
          Mentoring
        </Badge>
      </div>
    </motion.div>
  );
};

export default Interests;
