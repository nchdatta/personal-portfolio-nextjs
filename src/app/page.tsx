"use client";

import Container from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, ExternalLink, Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Container className="flex-1">
      <motion.section
        className="flex flex-col items-center mt-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/placeholder.svg?height=160&width=160"
            alt="Nayan Chandra Datta"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Nayan Chandra Datta</h1>
          <p className="text-muted-foreground mt-1">
            Analytical, self-motivating and confident.
          </p>
          <p className="text-primary font-medium mt-1">
            MERN Full-Stack Web Developer.
          </p>

          <div className="flex justify-center gap-4 mt-3">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <Code size={14} />
            Web Developer
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <span className="text-blue-500">⚛</span> React Developer
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <span className="text-green-500">⬢</span> Node
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <span className="text-yellow-500">🔶</span> MERN
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <span>🎨</span> Material UI
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mt-4 px-3 py-1 flex items-center gap-1 border-green-200 bg-green-50 text-green-700"
          >
            <span>🤝</span> Collaborate
          </Badge>
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-4">Objective</h2>
        <p className="text-muted-foreground">
          A motivated individual with in-depth knowledge of programming
          languages, especially JavaScript and development tools. I am skilled &
          experienced in both Front-end and Back-end Web Development, seeking a
          position as a Web Developer in a growth-oriented company where I can
          use my skills to the advantage of the company while having the scope
          to develop my own skills.
        </p>
      </motion.section>

      <motion.section
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-4">Qualifications</h2>

        <motion.div
          className="mb-8 relative pl-6 border-l-2 border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
              2022
            </span>
            <h3 className="font-bold">Full Stack Web Development</h3>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            Complete web development course which included HTML to JavaScript,
            React, Node/Express, MongoDB etc.
          </p>
          <p className="text-xs text-muted-foreground">
            Pirple • Jun 2021 - December 2021
          </p>
        </motion.div>

        <motion.div
          className="mb-8 relative pl-6 border-l-2 border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
              2020
            </span>
            <h3 className="font-bold">
              BSc. in Computer Science & Engineering (CSE)
            </h3>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            Achieved four years bachelor degree from a reputed university. It
            was a great really a experience of life.
          </p>
          <p className="text-xs text-muted-foreground">
            DIU • January 2016 - December 2020
          </p>
        </motion.div>

        <motion.div
          className="mb-8 relative pl-6 border-l-2 border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded">
              2014
            </span>
            <h3 className="font-bold">Higher Secondary School Certificate</h3>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            Achieved two years higher secondary degree from Science major from a
            reputed college.
          </p>
          <p className="text-xs text-muted-foreground">
            BCC • July 2012 - Jun 2014
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-6">Tech Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-sm"></span>
                <span>JavaScript</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
                <span>HTML5</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                <span>CSS3</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-600 rounded-sm"></span>
                <span>PHP</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Junior
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-500 rounded-sm"></span>
                <span>Markdown</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Junior
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Front-end</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-400 rounded-sm"></span>
                <span>React</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
                <span>Firebase</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
                <span>Bootstrap</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sky-500 rounded-sm"></span>
                <span>Tailwind</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                <span>jQuery</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Intermediate
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Back-end</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
                <span>Node.js</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-500 rounded-sm"></span>
                <span>Express.js</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Database</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-sm"></span>
                <span>MongoDB</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
                <span>MySQL</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Intermediate
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-700 rounded-sm"></span>
                <span>Mongoose</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Dev Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
                <span>Git</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-700 rounded-sm"></span>
                <span>GitHub</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
                <span>VS</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Design Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-800 rounded-sm"></span>
                <span>Adobe Photoshop</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Intermediate
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-600 rounded-sm"></span>
                <span>Adobe Illustrator</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Junior
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
                <span>Figma</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Junior
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                <span>MS PowerPoint</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  Expert
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-6">Recent works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="border rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gray-100">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="Personal Portfolio"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Personal Portfolio</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Professional page for personal portfolio showcase.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  Tailwind
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  JS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Vue
                </Badge>
              </div>

              <Button variant="default" size="sm" className="w-full">
                Read more →
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="border rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gray-100">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="Doctors Portal"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Doctors Portal</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Doctors appointment booking website.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Node
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  JS
                </Badge>
              </div>

              <Button variant="default" size="sm" className="w-full">
                Read more →
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="border rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gray-100">
              <Image
                src="/placeholder.svg?height=192&width=384"
                alt="Digital Marketing"
                width={384}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Digital Marketing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Professional page for digital marketing.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  BSS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  CSS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  JS
                </Badge>
              </div>

              <Button variant="default" size="sm" className="w-full">
                Read more →
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Container>
  );
};

export default Home;
