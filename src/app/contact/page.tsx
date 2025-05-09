"use client";

import ContactForm from "@/components/pages/contact/contact-form";
import ContactInfo from "@/components/pages/contact/contact-nfo";
import Container from "@/components/shared/container";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
