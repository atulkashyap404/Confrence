"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/accommodation/lib2.jpg",
  "/accommodation/lib3.jpg",
  "/accommodation/lib4.jpg",
  "/accommodation/lib5.jpg",
  "/accommodation/lib6.jpg",
  // Add more image paths as needed
];

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-16 px-4 md:px-10 lg:px-20 bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-kesari mb-10">Accommodation</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                height={500}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
