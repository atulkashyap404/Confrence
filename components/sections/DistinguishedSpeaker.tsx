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
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Speaker data
const SPEAKERS = [
    {
    id: 1,
    name: "Prof. Dipankar Das Sarma",
    role: "Professor",
    company:
      "Indian Institute of Science (IISc), Bangalore",
    bio: "",
    image: "/dist/Prof. Dipankar Das Sarma.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
   {
    id: 2,
    name: "Dr. Akhilesh Gupta",
    role: "Senior Adviser",
    company: "Department of Science and Technology (DST)",
    bio: "",
    image: "/committee/Dr. Akhilesh Gupta.png",
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
    name: "Prof. Abhijit Majumdar ",
    role: "Core Faculty Professor",
    company: "Indian Institute of Technology (IIT) Bombay",
    bio: "",
    image: "/dist/Prof, Abhijit Majumdar.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 4,
  //   name: "Dr. Jahnavi Raut",
  //   role: "Principal Research Scientist",
  //   company:"Unilever R&D",
  //   bio: "",
  //   image: "/dist/Dr. Jahnavi Raut.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 5,
    name: "Dr. Venkataramana Runkana",
    role: "Chief Scientist",
    company: "Tata Research Development and Design Centre (TRDDC), Pune",
    bio: "",
    image: "/dist/Dr. Venkataramana Runkana.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 6,
    name: "Dr. Sanjay Behari",
    role: "Director",
    company: "Sree Chitra Institute, Thiruvananthapuram",
    bio: "",
    image: "/dist/Dr. Sanjay Behari.png",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  
  {
    id: 7,
    name: "Prof. Dipankar Bandyopadhyay",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Guwahati",
    bio: "",
    image: "/dist/Prof. Dipankar Bandyopadhyay.png",
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
    name: "Prof. Rabibrata Mukherjee",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Kharagpur",
    bio: "",
    image: "/dist/Prof. Rabibrata Mukherjee.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 9,
    name: "Prof. Chandra Shekhar Sharma",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Hyderabad",
    bio: "",
    image: "/dist/Prof. Chandra Shekhar Sharma.png",
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
    name: "Dr. Ankur Verma",
    role: "Associate Professor",
    company: "Indian Institute of Technology (IIT) BHU",
    bio: "",
    image: "/dist/Dr. Ankur Verma.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
 

  {
    id: 11,
    name: "Prof. Rajesh Khanna",
    role: "Professor",
    company:"Indian Institute of Technology, Delhi",
    bio: "",
    image: "/dist/Prof. Rajesh Khanna.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 12,
    name: "Dr. Alok Kumar Srivastava",
    role: "Director General",
    company: "National Test House (NTH)",
    bio: "",
    image: "/dist/Dr. Alok Kumar Srivastava.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 13,
    name: "Prof. Jayati Sarkar",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Delhi",
    bio: "",
    image: "/dist/Jayati-Sarkar.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 14,
    name: "Prof. Satinder Kumar Sharma",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Mandi",
    bio: "",
    image: "/dist/Prof. Satinder Kumar Sharma.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 15,
    name: "Dr. Manoj Gonuguntala",
    role: "Shell Technology Centre",
    company: "Bangalore",
    bio: "",
    image: "/dist/Dr Manoj Gonuguntla.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  

  // {
  //   id: 16,
  //   name: "Prof Asish Garg",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kanpur",
  //   bio: "",
  //   image: "/dist/Prof Asish Garg IIT Kanpur.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  {
    id: 17,
    name: "Prof. Deeksha Gupta ",
    role: "Senior Associate Director-India",
    company: "American Chemical Society (ACS)",
    bio: "",
    image: "/dist/Prof Deeksha Gupta.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 18,
    name: "Prof. Bushra Ateeq",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/dist/Prof. Bushra Ateeq.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  

  // {
  //   id: 20,
  //   name: "Prof. Nitin Saxena",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kanpur",
  //   bio: "",
  //   image: "/dist/Prof. Nitin Saxena.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 21,
  //   name: "Prof. Animangsu Ghatak",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kanpur",
  //   bio: "",
  //   image: "/dist/Prof. Animangsu Ghatak.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  {
    id: 22,
    name: "Dr. Bineesha Payattati",
    role: "Executive Director",
    company: "The International Institute of Waste Management (IIWM), Bangalore",
    bio: "",
    image: "/dist/Dr. Bineesha Payattati.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 23,
    name: "Dr. Brajesh Pandey",
    role: "Executive Director",
    company: "Indian National Science Academy (INSA)",
    bio: "",
    image: "/dist/Dr Brajesh Pandey .png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  // {
  //   id: 24,
  //   name: "Dr. Sanjeev Kumar Varshney",
  //   role: "Former-Head",
  //   company: "Department of Science & Technology (DST)",
  //   bio: "",
  //   image: "/dist/Dr Sanjeev Kumar Varshney.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 25,
  //   name: "Dr. Anita Gupta",
  //   role: "Head of the Climate",
  //   company: "Energy and Sustainable Technology (CEST), GoI",
  //   bio: "",
  //   image: "/dist/Dr Anita Gupta.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 26,
  //   name: "Dr. Nisha Mendiratta",
  //   role: "Executive Director",
  //   company: "Indo-U.S. Science & Technology Forum (IUSSTF)",
  //   bio: "",
  //   image: "/dist/Dr. Nisha Mendiratta.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  {
    id: 27,
    name: "Shri Vishvajit Sahay",
    role: "Additional Secretary & Financial Adviser",
    company: "Department of Science & Technology (DST)",
    bio: "",
    image: "/dist/Vishvajit Sahay.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  // {
  //   id: 28,
  //   name: "Shri Rajesh Kumar Pathak",
  //   role: "Civil Service Officer of IP&TAFS Cadre",
  //   company: "TDB & Secretary",
  //   bio: "",
  //   image: "/dist/Shri Rajesh Kumar Pathak.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  {
    id: 29,
    name: "Prof Shobha Shukla",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Bombay",
    bio: "",
    image:
      "/dist/Prof. S. Shukla-Picsart.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  }, 
];

export default function DistinguishedSpeaker() {
  const [category, setCategory] = useState<string>("all");

  const filteredSpeakers =
    category === "all"
      ? SPEAKERS
      : SPEAKERS.filter((speaker) => speaker.category === category);

  const featuredSpeakers = SPEAKERS.filter((speaker) => speaker.featured);

  return (
    <section id="speakers" className="py-18 bg-muted pb-4 pt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 pt-8">
            Distinguished <span className="text-kesari">Speakers</span>
          </h2> */}
          {/* <hr className="border-kesari"/> */}
          

          {/* <h3 className="text-3xl font-bold text-kesari mb-2">
            Plenary Speakers
            <hr className="border-kesari mt-2"/>
          </h3> */}
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
        ></motion.div>
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
      transition={{ duration: 0.5, delay: (index * 0.1) % 0.4 }}
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
          <CardDescription className="mb-2">
            {speaker.role} <br /> {speaker.company}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
