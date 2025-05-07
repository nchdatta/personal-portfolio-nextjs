"use client";

import Container from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, MapPin, User } from "lucide-react";
import Image from "next/image";

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-1 md:sticky md:top-10 h-fit"
          >
            <div className="rounded-lg overflow-hidden border mb-4">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Nayan Chandra Datta"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User size={18} className="text-primary" />
                <span>Nayan Chandra Datta</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <span>MERN Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <span>BSc in Computer Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate and dedicated MERN Full-Stack Web Developer
                with a strong foundation in both front-end and back-end
                technologies. My journey in web development began during my
                university years, where I discovered my love for creating
                interactive and user-friendly web applications.
              </p>
              <p>
                With over 4 years of experience in the field, I have honed my
                skills in JavaScript, React, Node.js, and MongoDB, allowing me
                to build complete web solutions from concept to deployment. I am
                constantly learning and adapting to new technologies to stay at
                the forefront of web development.
              </p>
              <p>
                I believe in creating clean, efficient, and maintainable code.
                My approach to development is user-centered, focusing on
                delivering intuitive interfaces and seamless experiences. I
                enjoy solving complex problems and turning ideas into reality
                through code.
              </p>
            </div>

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
                    <h3 className="font-bold text-lg mb-2">
                      Front-end Development
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Creating responsive, interactive, and user-friendly
                      interfaces using modern frameworks like React.
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
                    <h3 className="font-bold text-lg mb-2">
                      Back-end Development
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Building robust server-side applications with Node.js,
                      Express, and MongoDB.
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
                    <h3 className="font-bold text-lg mb-2">
                      Full-Stack Solutions
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Developing complete web applications from concept to
                      deployment using the MERN stack.
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
                    <h3 className="font-bold text-lg mb-2">
                      UI/UX Collaboration
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Working with designers to transform mockups into
                      functional, beautiful interfaces.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">My Interests</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="outline" className="px-3 py-1.5">
              <Heart size={14} className="mr-1 text-red-500" /> Open Source
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              Web Accessibility
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              Progressive Web Apps
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              UI/UX Design
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              Serverless Architecture
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              Tech Blogging
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              Mentoring
            </Badge>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutPage;
