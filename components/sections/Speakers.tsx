"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Twitter, Globe } from "lucide-react";

// Speaker data
const SPEAKERS = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "AI Research Director",
    company: "TechVision Labs",
    bio: "Leading researcher in artificial intelligence and machine learning with over 15 years of experience.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ai",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    company: "FutureTech Inc.",
    bio: "Pioneering technologist specializing in cloud infrastructure and distributed systems.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "cloud",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Blockchain Strategist",
    company: "Decentralized Networks",
    bio: "Renowned expert in blockchain technology and decentralized applications.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "blockchain",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "UX Design Lead",
    company: "Interface Innovators",
    bio: "Award-winning designer focused on creating intuitive and accessible digital experiences.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "design",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Cybersecurity Expert",
    company: "SecureNet Defense",
    bio: "Specialized in advanced threat detection and ethical hacking methodologies.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "security",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "Michael Zhang",
    role: "Quantum Computing Researcher",
    company: "Quantum Frontiers",
    bio: "Pushing the boundaries of quantum computing and its applications in cryptography.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "emerging",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 7,
    name: "Lisa Tompkins",
    role: "IoT Solutions Architect",
    company: "Connected Devices Inc.",
    bio: "Specialist in creating scalable IoT ecosystems for enterprise applications.",
    image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "emerging",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 8,
    name: "James Wilson",
    role: "VP of Engineering",
    company: "Scale Systems",
    bio: "Expert in building and scaling engineering teams at high-growth technology companies.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "cloud",
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
    <section id="speakers" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Meet Our <span className="text-primary">Expert Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the
            future of technology across various domains.
          </p>
        </motion.div>
        
        {/* Featured Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8">Featured Speakers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSpeakers.map((speaker, index) => (
              <FeaturedSpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* All Speakers */}
        <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 sm:grid-cols-7">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="emerging">Emerging Tech</TabsTrigger>
            </TabsList>
          </div>
          
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
          <p className="text-muted-foreground mb-4">
            Interested in speaking at TechConf 2025?
          </p>
          <Button variant="outline">Become a Speaker</Button>
        </motion.div>
      </div>
    </section>
  );
}

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  category: string;
  featured: boolean;
  socials: {
    twitter: string;
    linkedin: string;
    website: string;
  };
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
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-2">
          <CardTitle className="text-lg font-semibold mb-1">
            {speaker.name}
          </CardTitle>
          <CardDescription className="mb-2">
            {speaker.role} at {speaker.company}
          </CardDescription>
          <Badge variant="outline" className="mb-4">
            {speaker.category === "ai" && "AI & ML"}
            {speaker.category === "cloud" && "Cloud"}
            {speaker.category === "blockchain" && "Blockchain"}
            {speaker.category === "design" && "Design"}
            {speaker.category === "security" && "Security"}
            {speaker.category === "emerging" && "Emerging Tech"}
          </Badge>
        </CardContent>
        <CardFooter className="flex justify-start space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Globe className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function FeaturedSpeakerCard({ speaker, index }: SpeakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="absolute top-0 right-0 z-10">
          <Badge className="m-2 bg-primary">Featured</Badge>
        </div>
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 h-64 md:h-auto relative">
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="md:w-3/5 p-6">
              <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
              <p className="text-muted-foreground mb-1">
                {speaker.role} at {speaker.company}
              </p>
              <Badge variant="outline" className="mb-4">
                {speaker.category === "ai" && "AI & ML"}
                {speaker.category === "cloud" && "Cloud"}
                {speaker.category === "blockchain" && "Blockchain"}
                {speaker.category === "design" && "Design"}
                {speaker.category === "security" && "Security"}
                {speaker.category === "emerging" && "Emerging Tech"}
              </Badge>
              <p className="mb-4 text-sm">{speaker.bio}</p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}