"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const WhatIDo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Front-end Development</h3>
              <p className="text-muted-foreground text-sm">
                Creating responsive, interactive, and user-friendly interfaces
                using modern frameworks like React and Next.js.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Back-end Development</h3>
              <p className="text-muted-foreground text-sm">
                Building robust server-side applications with Node.js, Express,
                Nest.js, and various databases.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Full-Stack Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Developing complete web applications from concept to deployment
                using modern tech stacks.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">E-commerce Development</h3>
              <p className="text-muted-foreground text-sm">
                Creating online stores with payment integrations, product
                management, and user-friendly interfaces.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatIDo;
