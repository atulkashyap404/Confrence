"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LightbulbIcon,
  UsersIcon,
  BadgeCheckIcon,
  RocketIcon,
} from "@/components/ui/custom-icons";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-muted/50 dark:bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Frontiers of Critical <span className="text-kesari">and Exponential Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
          TRIPS 2025 is a summit uniting research, innovation, and policy to build a sustainable future through collaboration and impactful strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="highlights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="highlights" className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  TechConf 2025 brings together the brightest minds in technology
                  for three days of inspiration, learning and networking.
                </p>
                <ul className="space-y-3">
                  {[
                    "150+ expert speakers from leading tech companies",
                    "75+ sessions covering cutting-edge technologies",
                    "Networking opportunities with 5000+ attendees",
                    "Hands-on workshops and interactive sessions",
                    "Product showcases and demonstrations",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary mr-2">•</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="features">
                <p className="text-muted-foreground mb-6">
                  Experience an exceptional tech conference with features
                  designed to enhance your learning and networking experience.
                </p>
                <ul className="space-y-3">
                  {[
                    "Interactive Q&A sessions with industry leaders",
                    "Virtual reality demo zones",
                    "AI-powered networking matchmaking",
                    "On-demand session recordings",
                    "Exclusive roundtable discussions with experts",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary mr-2">•</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="history">
                <p className="text-muted-foreground mb-6">
                  TechConf has evolved from a small industry meetup to one of
                  the world&apos;s premier technology conferences.
                </p>
                <ul className="space-y-3">
                  {[
                    "2020: First virtual TechConf with 1,000 attendees",
                    "2021: Expanded to include interactive workshops",
                    "2022: Added specialized tracks for AI, blockchain and IoT",
                    "2023: Introduced the Startup Showcase and Innovation Awards",
                    "2024: Global expansion with satellite events in 5 countries",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary mr-2">•</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<LightbulbIcon />}
                title="Technology for Sustainability"
                description="Cyber-Physical Systems, AI, Quantum Computing, Nanotechnology, Space, Defence, and IoT."
                delay={0}
              />
              <FeatureCard
                icon={<UsersIcon />}
                title="Frontiers in Scientific Research"
                description="Innovations in Material Science, Biotechnology, and Energy."
                delay={0.1}
              />
              <FeatureCard
                icon={<BadgeCheckIcon />}
                title="Industry 4.0 & Beyond"
                description="Smart Manufacturing and Digital Transformation."
                delay={0.2}
              />
              <FeatureCard
                icon={<RocketIcon />}
                title="Corporate R&D Trends"
                description="Driving Disruptive Innovation"
                delay={0.3}
              />
              <FeatureCard
                icon={<RocketIcon />}
                title="Panel Discussion"
                description="Perspectives from Corporate Leaders & Policymakers"
                delay={0.3}
              />
            </div>
            
            <motion.div
              className="relative mt-8 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* <img
                src="https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="TechConf Event"
                className="w-full h-64 object-cover rounded-xl"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Immersive Tech Experience
                  </h3>
                  <p className="text-white/80">
                    Dive into interactive demos, workshops, and sessions at TechConf 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="text-kesari mb-4">{icon}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}