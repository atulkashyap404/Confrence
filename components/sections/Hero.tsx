"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
      {/* inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-teal-500/20 dark:from-purple-900/40 dark:to-teal-900/40 */}
        <div className="absolute " />
        <motion.div
        // bg-purple-500/30 dark:bg-purple-500/10
          className="absolute -top-40 -right-40 w-96 h-96  rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
        // bg-teal-500/30 dark:bg-teal-500/10
          className="absolute -bottom-40 -left-40 w-96 h-96  rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block"
            >
              <span className="bg-kesari/10 text-kesari px-4 py-1 rounded-full text-sm font-medium ">
                July 15-17, 2025
              </span>
            </motion.div>
            
            <motion.h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="block text-kesari">TRIPS 2025:</span>
              <span className="block text-3xl text-black ">TECHNOLOGY, RESEARCH,
              INNOVATION, AND POLICY SUMMIT</span>
            </motion.h1>
            
            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              THEME: BRIDGING RESEARCH, INNOVATION, AND POLICY FOR A SUSTAINABLE
              FUTURE
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button size="lg" className="rounded-full bg-kesari">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button size="lg" variant="outline" className="rounded-full">
                View Schedule
              </Button> */}
            </motion.div>
            
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-5 w-5 text-kesari" />
                <span>July 15-17, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-kesari" />
                <span>Tech Convention Center, IIT Kanpur</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-background/50 dark:bg-background/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-border">
              <Image
                src="/pexels-photo-2774556.webp"
                alt="Tech Conference"
                width={500}
                height={500}
                className="rounded-lg h-64 w-full object-cover mb-8"
              />
              
              <div className="text-center mb-8 ">
                <h3 className="text-2xl font-semibold mb-2">COUNTDOWN TO TRIPS 2025</h3>
                <CountdownTimer  targetDate="2025-07-15T09:00:00" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">150+</div>
                  <div className="text-sm text-muted-foreground">Speakers</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">75+</div>
                  <div className="text-sm text-muted-foreground">Sessions</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">30+</div>
                  <div className="text-sm text-muted-foreground">Workshops</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">5000+</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-kesari rounded-full blur-xl z-[-1]" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kesari/70 rounded-full blur-xl z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}