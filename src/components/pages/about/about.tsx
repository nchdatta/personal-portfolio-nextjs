"use client";

import { motion } from "framer-motion";
import Interests from "./interests";
import ProfileCard from "./profile-card";
import WhatIDo from "./what-i-do";
import WhoIAm from "./who-i-am";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ProfileCard />
        <div className="col-span-2">
          <WhoIAm />
          <WhatIDo />
        </div>
      </div>

      <Interests />
    </motion.div>
  );
};

export default About;
