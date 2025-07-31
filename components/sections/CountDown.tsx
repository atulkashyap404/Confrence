"use client";

import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { Lightbulb, Speech, Settings, Users, Presentation  } from "lucide-react";

export default function TripsCountdownPage() {

  const highlights = [
    { title: "Expert Talks", icon: <Speech size={24} /> },
    { title: "Panel Discussion", icon: <Users size={24} /> },
    // { title: "Poster Presentation", icon: <Presentation size={24} /> },
  ];

  return (
    <div className="min-h-[20vh] bg-background text-foreground flex items-center justify-center p-6">
      <motion.div
        className="relative w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Countdown Banner */}
        <div className="bg-white text-kesari rounded-xl shadow-lg px-8 py-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-orange-300">
          <h2 className="text-4xl font-bold text-center md:text-left">
            ⏱️ Countdown to TRIPS 2025
          </h2>
          <div className="text-center">
            <CountdownTimer targetDate="2025-08-21T09:00:00" />
          </div>
        </div>

        {/* Stats Grid */}
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
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "100+", label: "Speakers" },
            { value: "15+", label: "Topics" },
            { value: "5+", label: "Panel Discussions" },
            { value: "2+", label: "Awards" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 text-center border border-border shadow-sm"
            >
              <div className="text-4xl font-bold text-kesari">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div> */}

        {/* Decorative blurs */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-kesari rounded-full blur-xl z-[-1]" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kesari/70 rounded-full blur-xl z-[-1]" />
      </motion.div>
    </div>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import CountdownTimer from "@/components/ui/CountdownTimer";

// export default function CountDown() {
//   return (
//     <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
//       <motion.div
//         className="relative max-w-xl w-full"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         <div className="bg-background/90 dark:bg-background/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-border">
//           <div className="text-center mb-8">
//             <h3 className="text-3xl font-semibold mb-4 text-kesari">COUNTDOWN TO TRIPS 2025</h3>
//             <CountdownTimer targetDate="2025-08-21T09:00:00" />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { value: "100+", label: "Speakers" },
//               { value: "15+", label: "Topic" },
//               { value: "5+", label: "Panel Discussion" },
//               { value: "2+", label: "Awards" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-background rounded-lg p-4 text-center border border-border"
//               >
//                 <div className="text-4xl font-bold text-kesari">{item.value}</div>
//                 <div className="text-sm text-muted-foreground">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Decorative blurs */}
//         <div className="absolute -top-4 -right-4 w-24 h-24 bg-kesari rounded-full blur-xl z-[-1]" />
//         <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kesari/70 rounded-full blur-xl z-[-1]" />
//       </motion.div>
//     </div>
//   );
// }
