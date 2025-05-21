"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, GraduationCap, Globe, Laptop, Earth } from "lucide-react";

const TOPICS = [
  {
    title: "Showcase cutting-edge research, sustainable technologies, and innovations.",
    icon: <Brain className="w-12 h-12" />,
    description: "",
  },
  {
    title: "Foster interdisciplinary collaborations to address real-world challenges.",
    icon: <GraduationCap className="w-12 h-12" />,
    description: "",
  },
  {
    title: "Bridge the gap between scientific innovation, sustainability goals, and policy frameworks.",
    icon: <Laptop className="w-12 h-12" />,
    description: "",
  },
  {
    title: "Promote inclusive growth, capacity building, and equitable access to STEM opportunities.",
    icon: <Globe className="w-12 h-12" />,
    description: "",
  },
  {
    title: "Drive evidence-based strategies for a resilient, climate-conscious, and sustainable future.",
    icon: <Earth className="w-12 h-12" />,
    description: "",
  },
];

export default function SummitScope() {
  return (
    <section className="py-24 bg-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Summit Scope - <span className="text-kesari">TRIPS 2025</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            TRIPS 2025 is a dynamic platform dedicated to advancing Science, Technology, Engineering, and Mathematics (STEM) through collaborative innovation, sustainability, and policy integration. The summit brings together leading experts, researchers, industry professionals, and policymakers to explore the future of STEM and its transformative impact on society.
          </p>
        </motion.div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TOPICS.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-kesari/10 p-4 text-kesari">
                        {topic.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      {topic.description && (
                        <p className="text-muted-foreground">{topic.description}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-lg text-gray-800 dark:text-gray-300 leading-relaxed px-4"
        >
          By uniting diverse perspectives, TRIPS 2025 seeks to accelerate progress towards a greener, more innovative, and sustainable world.
        </motion.p>
      </div>
    </section>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   Brain,
//   GraduationCap,
//   Globe,
//   Laptop,
// } from "lucide-react";

// const TOPICS = [
//   {
//     title: "Showcase cutting-edge research, sustainable technologies, and innovations.",
//     icon: <Brain className="w-12 h-12" />,
//     description: "",
//   },
//   {
//     title: "Foster interdisciplinary collaborations to address real-world challenges.",
//     icon: <GraduationCap className="w-12 h-12" />,
//     description: "",
  
//   },
//   {
//     title: "Bridge the gap between scientific innovation, sustainability goals, and policy frameworks.",
//     icon: <Laptop className="w-12 h-12" />,
//     description: "",
//   },
//   {
//     title: "Promote inclusive growth, capacity building, and equitable access to STEM opportunities.",
//     icon: <Globe className="w-12 h-12" />,
//     description: "",
//   },
//   {
//     title: "Drive evidence-based strategies for a resilient, climate-conscious, and sustainable future.",
//     icon: <Globe className="w-12 h-12" />,
//     description: "",
//   }
// ];

// export default function SummitScope() {
//   return (
//     <section className="py-24 bg-gray-100">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Summit Scope - <span className="text-kesari">TRIPS 2025</span>
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             TRIPS 2025 is a dynamic platform dedicated to advancing Science, Technology, Engineering, and Mathematics (STEM) through collaborative innovation, sustainability, and policy integration. The summit brings together leading experts, researchers, industry professionals, and policymakers to explore the future of STEM and its transformative impact on society.
//           </p>
          
//         </motion.div>
//         {/* Main Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {TOPICS.map((topic, index) => (
//             <motion.div
//               key={topic.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
//                 <CardContent className="p-8">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="rounded-full bg-kesari/10 p-4 text-kesari">
//                         {topic.icon}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl  mb-3">{topic.title}</h3>
//                       <p className="text-muted-foreground mb-4">
//                         {topic.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
            
//           ))}
//         </div>
//         <p>By uniting diverse perspectives, TRIPS 2025 seeks to accelerate progress towards a greener, more innovative, and sustainable world.</p>
//       </div>
//     </section>
//   );
// }