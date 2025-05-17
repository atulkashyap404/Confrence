"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Clock, MapPin } from "lucide-react";

// Schedule data
const SCHEDULE = {
  day1: [
    {
      id: "1-1",
      time: "09:00 - 10:00",
      title: "Conference Welcome & Keynote",
      speaker: "Dr. Emily Chen",
      location: "Main Hall",
      category: "keynote",
      details:
        "Opening remarks and keynote address on the future of artificial intelligence and its impact on society.",
    },
    {
      id: "1-2",
      time: "10:15 - 11:15",
      title: "The Future of Cloud Computing",
      speaker: "Marcus Johnson",
      location: "Tech Theater",
      category: "session",
      details:
        "An in-depth analysis of emerging trends in cloud infrastructure and distributed systems architecture.",
    },
    {
      id: "1-3",
      time: "11:30 - 12:30",
      title: "Blockchain Beyond Cryptocurrency",
      speaker: "Sarah Williams",
      location: "Innovation Lab",
      category: "session",
      details:
        "Exploring practical applications of blockchain technology across industries beyond financial services.",
    },
    {
      id: "1-4",
      time: "12:30 - 13:30",
      title: "Lunch Break",
      speaker: "",
      location: "Dining Hall",
      category: "break",
      details: "Networking lunch with exhibitors and fellow attendees.",
    },
    {
      id: "1-5",
      time: "13:30 - 14:30",
      title: "Human-Centered Design for AI Products",
      speaker: "David Rodriguez",
      location: "Design Studio",
      category: "workshop",
      details:
        "Interactive workshop on designing intuitive and transparent interfaces for AI-powered applications.",
    },
    {
      id: "1-6",
      time: "14:45 - 15:45",
      title: "Cybersecurity in a Connected World",
      speaker: "Aisha Patel",
      location: "Tech Theater",
      category: "session",
      details:
        "Critical insights into emerging cyber threats and effective strategies for enterprise security.",
    },
    {
      id: "1-7",
      time: "16:00 - 17:00",
      title: "Panel: The Future of Work",
      speaker: "Multiple Industry Leaders",
      location: "Main Hall",
      category: "panel",
      details:
        "Discussion on how AI, automation, and remote work are reshaping the global workforce.",
    },
    {
      id: "1-8",
      time: "17:30 - 19:30",
      title: "Welcome Reception",
      speaker: "",
      location: "Grand Foyer",
      category: "networking",
      details:
        "Welcome drinks, appetizers, and networking opportunities with speakers and fellow attendees.",
    },
  ],
  day2: [
    {
      id: "2-1",
      time: "09:00 - 10:00",
      title: "Quantum Computing: From Theory to Practice",
      speaker: "Michael Zhang",
      location: "Main Hall",
      category: "keynote",
      details:
        "Exploring the current state of quantum computing and its implications for the tech industry.",
    },
    {
      id: "2-2",
      time: "10:15 - 11:15",
      title: "IoT Ecosystems at Scale",
      speaker: "Lisa Tompkins",
      location: "Innovation Lab",
      category: "session",
      details:
        "Strategies for building and managing large-scale IoT deployments across enterprise environments.",
    },
    {
      id: "2-3",
      time: "11:30 - 12:30",
      title: "ML Ops: From Research to Production",
      speaker: "James Wilson",
      location: "Tech Theater",
      category: "workshop",
      details:
        "Hands-on workshop covering best practices for deploying and maintaining machine learning models.",
    },
    {
      id: "2-4",
      time: "12:30 - 13:30",
      title: "Lunch Break",
      speaker: "",
      location: "Dining Hall",
      category: "break",
      details: "Networking lunch with topic-based table discussions.",
    },
    {
      id: "2-5",
      time: "13:30 - 14:30",
      title: "Building High-Performing Tech Teams",
      speaker: "Marcus Johnson",
      location: "Leadership Forum",
      category: "session",
      details:
        "Strategies for recruiting, developing, and retaining top technical talent in a competitive landscape.",
    },
    {
      id: "2-6",
      time: "14:45 - 15:45",
      title: "Ethical Considerations in AI Development",
      speaker: "Dr. Emily Chen",
      location: "Main Hall",
      category: "panel",
      details:
        "Panel discussion on the ethical challenges and responsibilities in building AI systems.",
    },
    {
      id: "2-7",
      time: "16:00 - 17:00",
      title: "The Future of Edge Computing",
      speaker: "Aisha Patel",
      location: "Tech Theater",
      category: "session",
      details:
        "Examining the evolution of edge computing and its role in next-generation applications.",
    },
    {
      id: "2-8",
      time: "19:00 - 22:00",
      title: "Gala Dinner & Innovation Awards",
      speaker: "",
      location: "Grand Ballroom",
      category: "special",
      details:
        "Celebration of technological innovation with dinner, awards, and entertainment.",
    },
  ],
  day3: [
    {
      id: "3-1",
      time: "09:00 - 10:00",
      title: "The Metaverse: Vision and Reality",
      speaker: "David Rodriguez",
      location: "Main Hall",
      category: "keynote",
      details:
        "Exploring the current state and future potential of immersive digital environments.",
    },
    {
      id: "3-2",
      time: "10:15 - 11:15",
      title: "Sustainable Technology Practices",
      speaker: "Sarah Williams",
      location: "Green Tech Hub",
      category: "session",
      details:
        "Strategies for reducing the environmental impact of technology infrastructure and development.",
    },
    {
      id: "3-3",
      time: "11:30 - 12:30",
      title: "Web3 Development Workshop",
      speaker: "Michael Zhang",
      location: "Innovation Lab",
      category: "workshop",
      details:
        "Hands-on introduction to building decentralized applications using Web3 technologies.",
    },
    {
      id: "3-4",
      time: "12:30 - 13:30",
      title: "Lunch Break",
      speaker: "",
      location: "Dining Hall",
      category: "break",
      details: "Final networking lunch with exhibitors and attendees.",
    },
    {
      id: "3-5",
      time: "13:30 - 14:30",
      title: "The Future of Health Tech",
      speaker: "Lisa Tompkins",
      location: "Tech Theater",
      category: "session",
      details:
        "Examining how IoT, AI, and data analytics are transforming healthcare delivery and outcomes.",
    },
    {
      id: "3-6",
      time: "14:45 - 15:45",
      title: "Open Source: Building Digital Public Goods",
      speaker: "James Wilson",
      location: "Community Commons",
      category: "panel",
      details:
        "Discussion on the importance of open source in building technology for the common good.",
    },
    {
      id: "3-7",
      time: "16:00 - 17:00",
      title: "Closing Keynote & Conference Wrap-up",
      speaker: "Dr. Emily Chen",
      location: "Main Hall",
      category: "keynote",
      details:
        "Reflecting on key insights from the conference and looking ahead to the future of technology.",
    },
  ],
};

export default function Schedule() {
  const [filter, setFilter] = useState<string>("all");
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "keynote":
        return <Badge className="bg-purple-500">Keynote</Badge>;
      case "session":
        return <Badge className="bg-blue-500">Session</Badge>;
      case "workshop":
        return <Badge className="bg-green-500">Workshop</Badge>;
      case "panel":
        return <Badge className="bg-orange-500">Panel</Badge>;
      case "break":
        return <Badge variant="outline">Break</Badge>;
      case "networking":
        return <Badge className="bg-pink-500">Networking</Badge>;
      case "special":
        return <Badge className="bg-red-500">Special Event</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };
  
  const filterSchedule = (sessions: any[]) => {
    if (filter === "all") return sessions;
    return sessions.filter(session => session.category === filter);
  };
  
  return (
    <section id="schedule" className="py-24 bg-muted/50 dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Conference <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plan your TechConf experience with our comprehensive schedule of
            keynotes, sessions, workshops, and networking events.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {/* Days and Filter Tabs */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Tabs defaultValue="day1" className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day1">
                <ScheduleDay 
                  sessions={filterSchedule(SCHEDULE.day1)} 
                  day={1} 
                  date="July 15, 2025"
                  getCategoryBadge={getCategoryBadge}
                />
              </TabsContent>
              
              <TabsContent value="day2">
                <ScheduleDay 
                  sessions={filterSchedule(SCHEDULE.day2)} 
                  day={2} 
                  date="July 16, 2025"
                  getCategoryBadge={getCategoryBadge}
                />
              </TabsContent>
              
              <TabsContent value="day3">
                <ScheduleDay 
                  sessions={filterSchedule(SCHEDULE.day3)} 
                  day={3} 
                  date="July 17, 2025"
                  getCategoryBadge={getCategoryBadge}
                />
              </TabsContent>
            </Tabs>
            
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              <Badge 
                onClick={() => setFilter("all")}
                className={`cursor-pointer ${filter === "all" ? "bg-primary" : "bg-pink-400 hover:bg-green-500"}`}
              >
                All
              </Badge>
              <Badge 
                onClick={() => setFilter("keynote")}
                className={`cursor-pointer ${filter === "keynote" ? "bg-purple-500" : "bg-red-300 hover:bg-green-500"}`}
              >
                Keynotes
              </Badge>
              <Badge 
                onClick={() => setFilter("session")}
                className={`cursor-pointer ${filter === "session" ? "bg-blue-500" : "bg-yellow-400 hover:bg-green-500"}`}
              >
                Sessions
              </Badge>
              <Badge 
                onClick={() => setFilter("workshop")}
                className={`cursor-pointer ${filter === "workshop" ? "bg-green-500" : "bg-fuchsia-400 hover:bg-green-400"}`}
              >
                Workshops
              </Badge>
              <Badge 
                onClick={() => setFilter("panel")}
                className={`cursor-pointer ${filter === "panel" ? "bg-orange-500" : "bg-lime-400 hover:bg-green-400"}`}
              >
                Panels
              </Badge>
              <Badge 
                onClick={() => setFilter("networking")}
                className={`cursor-pointer ${filter === "networking" ? "bg-pink-500" : "bg-slate-400 hover:bg-green-400"}`}
              >
                Networking
              </Badge>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button variant="outline">
              Download Full Schedule (PDF)
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ScheduleDayProps {
  sessions: any[];
  day: number;
  date: string;
  getCategoryBadge: (category: string) => JSX.Element;
}

function ScheduleDay({ sessions, day, date, getCategoryBadge }: ScheduleDayProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">Day {day}</h3>
          <div className="flex items-center text-muted-foreground">
            <CalendarDays className="w-4 h-4 mr-1" /> {date}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {sessions.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">
            No sessions match the selected filter.
          </p>
        ) : (
          sessions.map((session, index) => (
            <ScheduleItem
              key={session.id}
              session={session}
              index={index}
              getCategoryBadge={getCategoryBadge}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface ScheduleItemProps {
  session: any;
  index: number;
  getCategoryBadge: (category: string) => JSX.Element;
}

function ScheduleItem({ session, index, getCategoryBadge }: ScheduleItemProps) {
  const isBreak = session.category === "break";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={session.id} className="border-none">
          <Card className={`${isBreak ? "bg-muted/50" : "bg-card"}`}>
            <CardContent className="p-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0 rounded-l-md px-3 py-2 bg-primary/10 text-primary flex items-center font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {session.time}
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-medium text-lg">{session.title}</h4>
                      {session.speaker && (
                        <p className="text-muted-foreground text-sm">
                          Presented by: {session.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 md:mt-0">
                    {getCategoryBadge(session.category)}
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {session.location}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-4">
                <p className="text-muted-foreground mb-4">
                  {session.details}
                </p>
                
                {!isBreak && (
                  <Button variant="outline" size="sm">
                    Add to My Schedule
                  </Button>
                )}
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}