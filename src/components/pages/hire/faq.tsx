"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            FAQ
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">What is your hourly rate?</h3>
                <p className="text-sm text-muted-foreground">
                  My hourly rate varies between $30-$50 depending on the project
                  complexity.
                </p>
              </div>
              <div>
                <h3 className="font-medium">
                  How long does a typical project take?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on scope. A simple website might
                  take 2-3 weeks, while complex applications can take 2-3
                  months.
                </p>
              </div>
              <div>
                <h3 className="font-medium">
                  Do you offer maintenance services?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, I offer ongoing maintenance and support packages for all
                  completed projects.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default FAQ;
