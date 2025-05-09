"use client";

import { motion } from "framer-motion";

const TechSkills = () => {
  return (
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
  );
};

export default TechSkills;
