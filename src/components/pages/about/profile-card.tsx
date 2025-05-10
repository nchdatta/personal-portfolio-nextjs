"use client";

import { profileData } from "@/data/home_data";
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
          src="/nayanchdatta.jpg?height=400&width=300"
          alt={profileData.name}
          width={300}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <User size={18} className="text-primary" />
          <span>{profileData.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-primary" />
          <span>{profileData.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-primary" />
          <span>{profileData.location}</span>
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
