"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Speaker data
const SPEAKERS = [
  {
    id: 1,
    name: "Department of Biotechnology",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Department of Biotechnology.png",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Department of Science and Technology",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Department of Science and Technology.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "E-spin Nanotech Pvt. Ltd.",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Indian National Science Academy",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Indian National Science Academy.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Indian Agricultural Research Institute",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "Kent RO",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Kent RO.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 7,
    name: "Ministry of New Renewable Energy",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/ministry of new renewable energy.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 8,
    name: "Media partners",
    role: "",
    company: "",
    bio: "",
    image: "/Sponsors/Media partners.jpeg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
 

];

export default function Speakers() {
  const [category, setCategory] = useState<string>("all");
  
  const filteredSpeakers = category === "all" 
    ? SPEAKERS 
    : SPEAKERS.filter(speaker => speaker.category === category);
  
  const featuredSpeakers = SPEAKERS.filter(speaker => speaker.featured);
  
  return (
    <section id="sponsors" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our <span className="text-kesari">Sponsors</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the
            future of technology across various domains.
          </p> */}
        </motion.div>
        
       
        
        {/* All Speakers */}
        <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
          
          
          <TabsContent value={category}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredSpeakers.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}

interface Speaker {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
}

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

function SpeakerCard({ speaker, index }: SpeakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 % 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="p-0">
          <div className="h-48 w-full relative">
            <motion.img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-2">
          <CardTitle className="text-lg font-semibold mb-1">
            {speaker.name}
          </CardTitle>
          
        </CardContent>
        
      </Card>
    </motion.div>
  );
}

