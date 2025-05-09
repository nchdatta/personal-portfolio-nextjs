"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">My Services</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Web Application Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Frontend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Backend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>API Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Database Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Code Review & Optimization</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Services;
