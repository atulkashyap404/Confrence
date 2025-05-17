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
    name: "Man Mohan Sharma",
    role: "Indian chemical engineer",
    company: "",
    bio: "Man Mohan Sharma is an Indian chemical engineer. He was educated at Jodhpur, Mumbai, and Cambridge. At age 27, he was appointed Professor of Chemical Engineering in the Institute of Chemical Technology, Mumbai.",
    image: "/speakers/mm sharma.jpg",
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
    name: "Sood Ajay",
    role: "Principal Scientific Adviser to the Government of India",
    company: "",
    bio: "Ajay Kumar Sood is an Indian physicist and researcher currently serving as the 4th Principal Scientific Adviser to the Government of India. He holds 2 United States and 5 Indian patents, and is known for his pioneering research findings on graphene and nanotechnology.",
    image: "/speakers/Ajay-Kumar-Sood-FRS.jpg",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Raghunath Anant Mashelkar",
    role: "Indian chemical engineer",
    company: "",
    bio: "Raghunath Anant Mashelkar FTWAS FNA FASc FRS FREng FRSC, also known as Ramesh Mashelkar, is an Indian chemical engineer who is a former Director General of the Council of Scientific and Industrial Research.",
    image: "/speakers/images.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Jyeshtharaj Joshi",
    role: "Indian chemical engineer",
    company: "",
    bio: "Jyeshtharaj Bhalchandra Joshi is an Indian chemical engineer, nuclear scientist, consultant and professor, widely known for his innovations in nuclear reactor designs and generally regarded as a respected teacher.",
    image: "/speakers/Jyeshtharaj Joshi.jpg",
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
    name: "Aniruddha Bhalchandra Pandit",
    role: "Vice-chancellor of the Institute of Chemical Technology",
    company: "",
    bio: "Aniruddha Bhalchandra Pandit FNA, FASc is an Indian chemical engineer, inventor and academic, known for his fundamental and commercial research on cavitational reactors, design of multiphase reactors, bubble dynamics.",
    image: "/speakers/Aniruddha_B._Pandit_(Institute_of_Chemical_Technology).jpg",
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
    name: "Ashish Kishore Lele",
    role: "Chemical engineer",
    company: "",
    bio: "Ashish Kishore Lele is an Indian chemical engineer, rheologist and the Director of the National Chemical Laboratory, Pune. He is known for his researches on micro and mesostructure of polymers and is an elected fellow of the Indian Academy of Sciences, and the Indian National Academy of Engineering.",
    image: "/speakers/ashish-lele-lrg.jpg",
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
    name: "G. D. Yadav",
    role: "Former vice-chancellor of the Institute of Chemical Technology",
    company: "",
    bio: "Ganapati Dadasaheb Yadav, better known as G. D. Yadav, is an Indian chemist, educator and academic. He did contributions to green chemistry, catalysis, and nanotechnology. He served as the Vice Chancellor of the Institute of Chemical Technology, Mumbai, from 2009 to 2019, where he is currently an emeritus professor.",
    image: "/speakers/Ganapati_D_Yadav_(2024).jpg",
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
    name: "Devang V. Khakhar",
    role: "Former director of the Indian Institute of Technology Bombay",
    company: "",
    bio: "Devang Vipin Khakhar is an Indian chemical engineer and the former director of the Indian Institute of Technology Bombay.",
    image: "/speakers/Devang Khakkar-Picsart-AiImageEnhancer.jpg",
    category: "cloud",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 9,
    name: "Dr. Shobha Shukla",
    role: "Professor in the Department of Metallurgical Engineering and Materials Sciences at the Indian Institute of Technology, Bombay, India.",
    company: "",
    bio: "",
    image: "/speakers/SS_1-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 10,
    name: "Dr. Shobha Shukla",
    role: "Professor in the Department of Metallurgical Engineering and Materials Sciences at the Indian Institute of Technology, Bombay, India.",
    company: "",
    bio: "",
    image: "/speakers/SS_1-Picsart-AiImageEnhancer.jpg",
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
            {speaker.role}  {speaker.company}
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
                {speaker.role}  {speaker.company}
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