"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Sparkles,
  Globe2,
  Rocket,
  Users,
  Brain,
  Lightbulb,
  Scale,
  Leaf,
  Building2,
  GraduationCap,
} from "lucide-react";

const DAYS = [
  {
    day: 1,
    theme: "Deep Tech & Innovation",
    gradient: "from-purple-500/20 to-blue-500/20 dark:from-purple-500/10 dark:to-blue-500/10",
    sessions: [
      {
        title: "Inaugural Session",
        icon: <Sparkles className="w-5 h-5" />,
        time: "09:00 - 10:30",
        highlights: ["Opening ceremony", "Welcome address", "Vision keynote"]
      },
      {
        title: "Keynotes",
        icon: <Brain className="w-5 h-5" />,
        time: "11:00 - 12:30",
        highlights: ["Industry leaders", "Tech visionaries", "Future trends"]
      },
      {
        title: "Deep Tech & Research",
        icon: <Rocket className="w-5 h-5" />,
        time: "14:00 - 15:30",
        highlights: ["AI & quantum computing", "Biotechnology", "Advanced materials"]
      },
      {
        title: "Industry Collaboration",
        icon: <Building2 className="w-5 h-5" />,
        time: "16:00 - 17:30",
        highlights: ["Partnership frameworks", "Joint ventures", "Research commercialization"]
      }
    ]
  },
  {
    day: 2,
    theme: "Policy & Governance",
    gradient: "from-blue-500/20 to-green-500/20 dark:from-blue-500/10 dark:to-green-500/10",
    sessions: [
      {
        title: "Innovation Ecosystem",
        icon: <Lightbulb className="w-5 h-5" />,
        time: "09:00 - 10:30",
        highlights: ["Startup support", "Incubation programs", "Funding mechanisms"]
      },
      {
        title: "Policy Frameworks",
        icon: <Scale className="w-5 h-5" />,
        time: "11:00 - 12:30",
        highlights: ["Regulatory guidelines", "Compliance standards", "Industry policies"]
      },
      {
        title: "Governance",
        icon: <Users className="w-5 h-5" />,
        time: "14:00 - 15:30",
        highlights: ["Digital governance", "Ethics in tech", "Public-private partnership"]
      },
      {
        title: "Regulatory Sessions",
        icon: <Scale className="w-5 h-5" />,
        time: "16:00 - 17:30",
        highlights: ["Implementation strategies", "Impact assessment", "Future roadmap"]
      }
    ]
  },
  {
    day: 3,
    theme: "Global Impact & Future",
    gradient: "from-green-500/20 to-purple-500/20 dark:from-green-500/10 dark:to-purple-500/10",
    sessions: [
      {
        title: "Global Tech Diplomacy",
        icon: <Globe2 className="w-5 h-5" />,
        time: "09:00 - 10:30",
        highlights: ["International collaboration", "Cross-border initiatives", "Global standards"]
      },
      {
        title: "Sustainability",
        icon: <Leaf className="w-5 h-5" />,
        time: "11:00 - 12:30",
        highlights: ["Green tech", "Climate solutions", "Circular economy"]
      },
      {
        title: "Future Workforce",
        icon: <GraduationCap className="w-5 h-5" />,
        time: "14:00 - 15:30",
        highlights: ["Skills development", "Digital transformation", "Workplace evolution"]
      },
      {
        title: "Startup Showcase & Closing",
        icon: <Rocket className="w-5 h-5" />,
        time: "16:00 - 17:30",
        highlights: ["Innovation demos", "Awards ceremony", "Closing remarks"]
      }
    ]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Summit <span className="text-kesari">Outline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three days of innovation, collaboration, and transformation shaping the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DAYS.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${day.gradient}`} />
                <CardContent className="relative p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                      <CalendarDays className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Day {day.day}</h3>
                      <p className="text-sm text-muted-foreground">{day.theme}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {day.sessions.map((session, sessionIndex) => (
                      <motion.div
                        key={session.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sessionIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-background/80 backdrop-blur-sm rounded-lg p-4 hover:bg-background/90 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-2 mt-1">
                            {session.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-medium">{session.title}</h4>
                              {/* <Badge variant="outline" className="shrink-0">
                                {session.time}
                              </Badge> */}
                            </div>
                            <ul className="mt-2 space-y-1">
                              {session.highlights.map((highlight, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-muted-foreground flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}