"use client";

import { motion } from "framer-motion";
import { Lightbulb, Speech, Settings, Users, Presentation  } from "lucide-react";

export default function Trips2025Page() {
  const themes = [
    "Corporate R&D Trends",
    "Frontiers in Scientific Research",
    "Industry 4.0 & Beyond",
    "Next-gen chemical engineering for a smart future",
    "Policy for Science, Innovation, and Sustainability",
    "Smart Systems and Digital Sustainability",
    "Technology for Sustainability",
    "Translational Research and Industry-Academia Collaboration",
  ];

  const highlights = [
    { title: "Expert Talks", icon: <Speech size={24} /> },
    { title: "Panel Discussion", icon: <Users size={24} /> },
    { title: "Poster Presentation", icon: <Presentation size={24} /> },
  ];

  return (
    <section id="summitscope">
      <main className="min-h-screen px-4 py-10 md:px-20 md:py-20 bg-gradient-to-tr from-kesari/60 via-white to-kesari/10 text-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-kesari"
        >
          Summit Scope – TRIPS 2025
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-lg text-black rounded-2xl px-8 py-6 max-w-4xl mx-auto mb-14 shadow-xl border border-kesari"
        >
          <p className="text-lg md:text-xl text-center font-medium leading-relaxed">
            A one-of-its-kind summit in India celebrating research, tech innovation,
            and progressive policy. Uniting experts, researchers, and policymakers
            to shape a sustainable, future-ready world.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          <span className="text-kesari">Summit</span> Themes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 text-gray-800 text-lg"
        >
          Dive into critical pillars of innovation and progress—each stream led by pioneers redefining what&apos;s possible in STEM.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {themes.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white/70 border border-orange-100 backdrop-blur-md shadow-lg rounded-xl text-center font-semibold text-gray-800 transition"
            >
              <Lightbulb className="text-kesari mx-auto mb-2" />
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          <span className="text-kesari">Summit</span> Highlights
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          {highlights.map((highlight, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-kesari text-white w-64 h-28 flex flex-col items-center justify-center rounded-2xl shadow-lg text-lg font-semibold transition-all"
              key={i}
            >
              {highlight.icon}
              <span className="mt-2">{highlight.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </section>
  );
}















// "use client";

// import { motion } from "framer-motion";

// export default function Trips2025Page() {
//   return (
//     <section id="summitscope">
//       <main className="min-h-screen bg-muted px-4 py-10 md:px-20 md:py-20 text-black">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-bold text-center text-kesari mb-10"
//         >
//           <span className="text-black">Summit Scope</span> - TRIPS 2025
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="bg-kesari/90 text-white rounded-lg px-6 py-6 max-w-4xl mx-auto mb-14 shadow-md"
//         >
//           <p className="text-lg md:text-xl text-center">
//             A one-of-its-kind summit in India is set to celebrate research, technological innovation, and progressive policy regulations aimed at building a sustainable future. This landmark event brings together leading experts, researchers, industry professionals, and policymakers to explore the evolving landscape of STEM and its transformative impact on society.
//           </p>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-2xl md:text-3xl font-bold text-kesari text-center mb-6"
//         >
//           <span className="text-black">Summit</span> Themes
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="text-center max-w-4xl mx-auto mb-6 text-gray-900 text-xl"
//         >
//           Explore diverse thematic streams at TRIPS 2025—each stream targets a critical pillar of sustainable innovation, education, and development. Dive into deep, future-focused discussions led by experts and pioneers across STEM domains.
//         </motion.p>

//         <motion.ul
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//           className="list-disc list-inside max-w-2xl mx-auto text-gray-800 text-lg space-y-2 mb-12"
//         >
//           {[
//             "Corporate R&D Trends",
//             "Frontiers in Scientific Research",
//             "Industry 4.0 & Beyond",
//             "Next-gen chemical engineering for a smart future",
//             "Policy for Science, Innovation, and Sustainability",
//             "Smart Systems and Digital Sustainability",
//             "Technology for Sustainability",
//             "Translational Research and Industry-Academia Collaboration",
//           ].map((item, i) => (
//             <motion.li
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, x: -10 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//             >
//               {item}
//             </motion.li>
//           ))}
//         </motion.ul>

//         <motion.h2
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-2xl md:text-3xl font-bold text-kesari text-center mb-8"
//         >
//           <span className="text-black">Summit Key</span> Highlights
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="flex flex-col md:flex-row justify-center items-center gap-6"
//         >
//           {[
//             "Expert Talks",
//             "Panel Discussion",
//             "Poster Presentation",
//           ].map((title, i) => (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-kesari text-white w-60 h-24 flex items-center justify-center rounded-lg shadow text-lg font-medium"
//               key={i}
//             >
//               {title}
//             </motion.div>
//           ))}
//         </motion.div>
//       </main>
//     </section>
//   );
// }



















// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Brain, GraduationCap, Globe, Laptop, Earth } from "lucide-react";

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
//     icon: <Earth className="w-12 h-12" />,
//     description: "",
//   },
// ];

// export default function SummitScope() {
//   return (
//     <section id="summitscope" className="py-24 bg-gray-100 dark:from-gray-900 dark:to-gray-950">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
//             Summit Scope - <span className="text-kesari">TRIPS 2025</span>
//           </h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//             TRIPS 2025 is a dynamic platform dedicated to advancing Science, Technology, Engineering, and Mathematics (STEM) through collaborative innovation, sustainability, and policy integration. The summit brings together leading experts, researchers, industry professionals, and policymakers to explore the future of STEM and its transformative impact on society.
//           </p>
//         </motion.div>

//         {/* Topic Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {TOPICS.map((topic, index) => (
//             <motion.div
//               key={topic.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <CardContent className="p-8">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="rounded-full bg-kesari/10 p-4 text-kesari">
//                         {topic.icon}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                         {topic.title}
//                       </h3>
//                       {topic.description && (
//                         <p className="text-muted-foreground">{topic.description}</p>
//                       )}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Final Paragraph */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto text-center text-lg text-gray-800 dark:text-gray-300 leading-relaxed px-4"
//         >
//           By uniting diverse perspectives, TRIPS 2025 seeks to accelerate progress towards a greener, more innovative, and sustainable world.
//         </motion.p>
//       </div>
//     </section>
//   );
// }









// // "use client";

// // import { motion } from "framer-motion";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { 
// //   Brain,
// //   GraduationCap,
// //   Globe,
// //   Laptop,
// // } from "lucide-react";

// // const TOPICS = [
// //   {
// //     title: "Showcase cutting-edge research, sustainable technologies, and innovations.",
// //     icon: <Brain className="w-12 h-12" />,
// //     description: "",
// //   },
// //   {
// //     title: "Foster interdisciplinary collaborations to address real-world challenges.",
// //     icon: <GraduationCap className="w-12 h-12" />,
// //     description: "",
  
// //   },
// //   {
// //     title: "Bridge the gap between scientific innovation, sustainability goals, and policy frameworks.",
// //     icon: <Laptop className="w-12 h-12" />,
// //     description: "",
// //   },
// //   {
// //     title: "Promote inclusive growth, capacity building, and equitable access to STEM opportunities.",
// //     icon: <Globe className="w-12 h-12" />,
// //     description: "",
// //   },
// //   {
// //     title: "Drive evidence-based strategies for a resilient, climate-conscious, and sustainable future.",
// //     icon: <Globe className="w-12 h-12" />,
// //     description: "",
// //   }
// // ];

// // export default function SummitScope() {
// //   return (
// //     <section className="py-24 bg-gray-100">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //           className="text-center max-w-3xl mx-auto mb-16"
// //         >
// //           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
// //             Summit Scope - <span className="text-kesari">TRIPS 2025</span>
// //           </h2>
// //           <p className="text-lg text-muted-foreground">
// //             TRIPS 2025 is a dynamic platform dedicated to advancing Science, Technology, Engineering, and Mathematics (STEM) through collaborative innovation, sustainability, and policy integration. The summit brings together leading experts, researchers, industry professionals, and policymakers to explore the future of STEM and its transformative impact on society.
// //           </p>
          
// //         </motion.div>
// //         {/* Main Content */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {TOPICS.map((topic, index) => (
// //             <motion.div
// //               key={topic.title}
// //               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //             >
// //               <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
// //                 <CardContent className="p-8">
// //                   <div className="flex items-start space-x-6">
// //                     <div className="flex-shrink-0">
// //                       <div className="rounded-full bg-kesari/10 p-4 text-kesari">
// //                         {topic.icon}
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl  mb-3">{topic.title}</h3>
// //                       <p className="text-muted-foreground mb-4">
// //                         {topic.description}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
            
// //           ))}
// //         </div>
// //         <p>By uniting diverse perspectives, TRIPS 2025 seeks to accelerate progress towards a greener, more innovative, and sustainable world.</p>
// //       </div>
// //     </section>
// //   );
// // }