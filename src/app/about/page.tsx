"use client";

import Interests from "@/components/pages/about/interests";
import ProfileCard from "@/components/pages/about/profile-card";
import WhatIDo from "@/components/pages/about/what-i-do";
import WhoIAm from "@/components/pages/about/who-i-am";
import Container from "@/components/shared/container";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default AboutPage;
