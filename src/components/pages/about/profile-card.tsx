"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";
import Image from "next/image";

const ProfileCard = () => {
  return (
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
  );
};

export default ProfileCard;
