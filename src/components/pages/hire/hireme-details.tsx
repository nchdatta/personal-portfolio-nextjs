"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HireMeDetail } from "@/services/types";
import { motion } from "framer-motion";
import { AtSign, Briefcase, DollarSign } from "lucide-react";
import Link from "next/link";

interface Props {
  details: HireMeDetail[];
}

const HireMeDetails = ({ details }: Props) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "AtSign":
        return <AtSign size={20} className="text-primary" />;
      case "Briefcase":
        return <Briefcase size={20} className="text-primary" />;
      case "DollarSign":
        return <DollarSign size={20} className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {details.map((detail, index) => (
              <motion.div
                key={detail.platform}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  {getIcon(detail.icon)}
                </div>
                <div>
                  <h3 className="font-medium">{detail.platform}</h3>
                  <p className="text-sm text-muted-foreground">
                    {detail.username}
                  </p>
                  <Link
                    href={detail.link}
                    className="text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.platform === "Email"
                      ? "Send Email"
                      : `Visit ${detail.platform} Profile`}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HireMeDetails;
