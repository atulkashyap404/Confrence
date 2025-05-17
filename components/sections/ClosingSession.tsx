"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck2, Presentation, Loader as Roadmap, ThumbsUp, MessageSquare } from "lucide-react";

const TAKEAWAYS = [
  {
    title: "Key Policy Recommendations",
    description:
      "Summarized insights and actionable recommendations from the summit.",
    icon: <ThumbsUp className="w-6 h-6" />,
  },
  {
    title: "Technology Roadmap 2030",
    description:
      "Strategic vision for technology development and policy alignment.",
    icon: <Roadmap className="w-6 h-6" />,
  },
  {
    title: "Future Collaboration",
    description:
      "Opportunities for ongoing engagement and partnership.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

export default function ClosingSession() {
  return (
    <section className="py-24 gradient-bg-closing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Closing Session & <span className="text-kesari">Future Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reflecting on key insights and charting the course for future
            technology and policy initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TAKEAWAYS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-kesari/10 p-3 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Thank you for participating in TechConf 2025!
          </h3>
          <p className="text-muted-foreground mb-6">
            We appreciate your contributions and look forward to continuing this
            journey together.
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              Download Summit Report
            </Button>
            <Button variant="outline">
              Explore Future Events
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}