"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  GraduationCap,
  Globe,
  Users,
  Laptop,
  Network,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const TOPICS = [
  {
    title: "Workforce Readiness for AI & Automation",
    icon: <Brain className="w-12 h-12" />,
    description: "Preparing the workforce for the AI revolution through strategic upskilling initiatives",
    points: [
      "AI literacy programs",
      "Automation adaptation strategies",
      "Digital skills assessment frameworks"
    ]
  },
  {
    title: "Reskilling & Upskilling",
    icon: <GraduationCap className="w-12 h-12" />,
    description: "Comprehensive programs for continuous learning in the innovation age",
    points: [
      "Personalized learning paths",
      "Industry-aligned certifications",
      "Hands-on technical training"
    ]
  },
  {
    title: "Remote Work & Gig Economy",
    icon: <Laptop className="w-12 h-12" />,
    description: "Policies and frameworks for the evolving digital workplace",
    points: [
      "Remote work best practices",
      "Gig worker protections",
      "Digital collaboration tools"
    ]
  },
  {
    title: "Digital Inclusion",
    icon: <Globe className="w-12 h-12" />,
    description: "Ensuring equal access to digital opportunities across communities",
    points: [
      "Infrastructure development",
      "Digital literacy programs",
      "Accessibility initiatives"
    ]
  }
];

const STATISTICS = [
  { value: "85%", label: "Jobs in 2025 haven't been invented yet" },
  { value: "60%", label: "Workforce requiring reskilling by 2025" },
  { value: "40%", label: "Increase in remote work adoption" },
  { value: "95%", label: "Companies adopting AI by 2025" }
];

export default function FutureWork() {
  return (
    <section className="py-24 gradient-bg-future-work">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Future of Work & <span className="text-kesari">Digital Economy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Shaping the workforce of tomorrow through innovative policies and digital transformation
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {STATISTICS.map((stat, index) => (
            <Card key={index} className="border-none bg-kesari/10">
              <CardContent className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-kesari mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOPICS.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-kesari/10 p-4 text-kesari">
                        {topic.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {topic.description}
                      </p>
                      <ul className="space-y-2">
                        {topic.points.map((point, i) => (
                          <li key={i} className="flex items-center">
                            <ArrowRight className="w-4 h-4 text-kesari mr-2" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-none bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary/20 p-4">
                  <Network className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Join the Digital Transformation
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with industry leaders, access resources, and be part of the
                movement shaping the future of work in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="default">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}