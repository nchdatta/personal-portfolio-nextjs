"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const RecentWorks = () => {
  return (
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
  );
};

export default RecentWorks;
