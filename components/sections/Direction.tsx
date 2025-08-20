"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/accommodation/lib1.jpeg",
];

export default function AccommodationPage() {
  return (
    <section
      id="accommodation"
      className="py-16 px-4 md:px-10 lg:px-20 bg-muted"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-kesari mb-4">Kindly scan the QR code to view directions to your accommodation.</h3>
        

        <div className="flex justify-center">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-xl border border-border shadow-lg bg-background"
            >
              <Image
                src={src}
                alt={`Accommodation ${idx + 1}`}
                width={600}
                height={600}
                className="w-100 h-100 object-for await (const element of object) {
                    
                }"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
