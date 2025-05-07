"use client";

import { motion } from "framer-motion";
import Footer from "../footer/footer";
import Header from "../header/header";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
