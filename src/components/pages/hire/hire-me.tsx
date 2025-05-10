"use client";

import { HireMeDetail } from "@/services/types";
import { motion } from "framer-motion";
import HireMeDetails from "./hireme-details";

interface Props {
  data: HireMeDetail[];
}

const HireMe = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4">Hire Me</h1>
      <p className="text-muted-foreground mb-8">
        I&apos;m available for freelance work! Reach out via email or find me on
        Upwork and Fiverr.
      </p>
      <HireMeDetails details={data} />
    </motion.div>
  );
};

export default HireMe;
