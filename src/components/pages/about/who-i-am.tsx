"use client";

import { motion } from "framer-motion";

const WhoIAm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I am a passionate and dedicated MERN Full-Stack Web Developer with a
          strong foundation in both front-end and back-end technologies. My
          journey in web development began during my university years, where I
          discovered my love for creating interactive and user-friendly web
          applications.
        </p>
        <p>
          With over 4 years of experience in the field, I have honed my skills
          in JavaScript, React, Node.js, and MongoDB, allowing me to build
          complete web solutions from concept to deployment. I am constantly
          learning and adapting to new technologies to stay at the forefront of
          web development.
        </p>
        <p>
          I believe in creating clean, efficient, and maintainable code. My
          approach to development is user-centered, focusing on delivering
          intuitive interfaces and seamless experiences. I enjoy solving complex
          problems and turning ideas into reality through code.
        </p>
      </div>
    </motion.div>
  );
};

export default WhoIAm;
