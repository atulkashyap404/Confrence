"use client";

import { motion } from "framer-motion";

export default function ClosingSession() {
  return (
    <section id="welcome"  className="py-24 bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
            Welcome <span className="text-kesari">Address</span>
          </h2>

          <div className="bg-white/80 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm p-10 text-left">
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify mb-6 font-sans">
              A warm welcome to the <strong>Technology, Research, Innovation, and Policy Summit</strong>. With the theme{" "}
              <em>“Bridging Research, Innovation, and Policy for a Sustainable Future,”</em> we are honored to host this gathering of brilliant minds from across the STEM community.
            </p>

            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify mb-6 font-sans">
              This summit is more than a meeting — it’s a platform to spark ideas, share breakthroughs, and drive impactful collaborations. As we engage in meaningful discussions, celebrate achievements, and address pressing global challenges, let us work together toward building a more sustainable and innovative world.
            </p>

            <p className="text-lg text-gray-900 dark:text-gray-100 font-semibold mt-4">
              Thank you for joining us — let the conversations begin!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}











// "use client";

// import { motion } from "framer-motion";
// export default function ClosingSession() {
//   return (
//     <section className="py-24 gradient-bg-closing">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Welcome <span className="text-kesari">Address</span>
//           </h2>
//           <p className="text-xl text-muted-foreground border p-8 shadow-lg font-sans text-warp">
//             A warm welcome to the Technology, Research, Innovation, and Policy Summit. With the theme “Bridging Research, Innovation, and Policy for a Sustainable Future,” we are honored to host this gathering of brilliant minds from across the STEM community. This summit is more than a meeting- it&apos;s a platform to spark ideas, share breakthroughs, and drive impactful collaborations. As we engage in meaningful discussions, celebrate achievements, and address pressing global challenges, let us work together toward building a more sustainable and innovative world.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }