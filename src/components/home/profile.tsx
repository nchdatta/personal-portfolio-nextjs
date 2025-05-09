"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
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
  );
};

export default Profile;
