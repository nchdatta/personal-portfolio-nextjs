"use client";

import FAQ from "@/components/pages/hire/faq";
import ProjectRequestForm from "@/components/pages/hire/project-request-form";
import Services from "@/components/pages/hire/services";
import Container from "@/components/shared/container";
import { motion } from "framer-motion";

const HireMePage = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-4">Hire Me</h1>
        <p className="text-muted-foreground mb-8">
          Let&apos;s work together on your next project!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Services />
            <FAQ />
          </div>
          <ProjectRequestForm />
        </div>
      </motion.div>
    </Container>
  );
};

export default HireMePage;
