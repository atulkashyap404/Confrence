"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Landmark, BookOpen, Cpu, FlaskConical, Bus } from "lucide-react";

const STREAMS = [
  {
    title: "Green Technologies and Sustainable Innovation",
    icon: <Leaf className="w-10 h-10" />,
    description:
      "Exploring breakthroughs in clean energy, circular economy, and eco-friendly materials. This stream focuses on scalable solutions that address climate change and promote environmental stewardship.",
  },
  {
    title: "Policy for Science, Innovation, and Sustainability",
    icon: <Landmark className="w-10 h-10" />,
    description:
      "Deliberating the role of evidence-based policy in driving sustainable development. Experts will discuss frameworks that align research and innovation with national and global sustainability agendas.",
  },
  {
    title: "Future of STEM Education and Workforce Development",
    icon: <BookOpen className="w-10 h-10" />,
    description:
      "Transforming STEM learning for an inclusive and skilled future-ready workforce. This stream highlights innovative educational practices and capacity-building strategies to meet evolving technological needs.",
  },
  {
    title: "Smart Systems and Digital Sustainability",
    icon: <Cpu className="w-10 h-10" />,
    description:
      "Harnessing AI, IoT, and data science to build smart, sustainable societies. Discussions will explore digital solutions for urban planning, resource management, and climate resilience.",
  },
  {
    title: "Translational Research and Industry-Academia Collaboration",
    icon: <FlaskConical className="w-10 h-10" />,
    description:
      "Bridging the gap between laboratory research and real-world application. This stream encourages partnerships that accelerate innovation and drive market-ready, sustainable solutions.",
  },
  {
    title: "Resilient Infrastructure and Sustainable Mobility",
    icon: <Bus className="w-10 h-10" />,
    description:
      "Innovating for climate-resilient infrastructure and low-carbon transport systems. Sessions will cover smart mobility, green buildings, and sustainable urban development.",
  },
];

export default function SummitStream() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Summit <span className="text-kesari">Stream</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Explore diverse thematic streams at TRIPS 2025—each stream targets a critical pillar of sustainable innovation, education, and development. Dive into deep, future-focused discussions led by experts and pioneers across STEM domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STREAMS.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-kesari/10 p-3 text-kesari">
                      {stream.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {stream.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {stream.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
