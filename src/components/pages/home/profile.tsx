"use client";

import { Badge } from "@/components/ui/badge";
import { type Profile } from "@/services/types";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  profile: Profile;
}

const Profile = ({ profile }: ProfileProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "github":
        return <Github size={18} />;
      default:
        return null;
    }
  };

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
          src={profile.image.src}
          alt={profile.image.alt}
          width={profile.image.width}
          height={profile.image.height}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-muted-foreground mt-1">{profile.description}</p>
        <p className="text-primary font-medium mt-1">{profile.role}</p>

        <div className="flex justify-center gap-4 mt-3">
          {profile.socialLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.href}
              className="text-muted-foreground hover:text-primary"
            >
              {getSocialIcon(link.platform)}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-2 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {profile.badges.map((badge, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-3 py-1 flex items-center gap-1"
          >
            <span className={badge.color}>{badge.icon}</span> {badge.text}
          </Badge>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Badge
          variant={profile.collaborationBadge.variant as "outline"}
          className={`mt-4 px-3 py-1 flex items-center gap-1 ${profile.collaborationBadge.className}`}
        >
          <span>{profile.collaborationBadge.icon}</span>{" "}
          {profile.collaborationBadge.text}
        </Badge>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
