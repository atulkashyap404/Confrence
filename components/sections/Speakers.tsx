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
  // {
  //   id: 1,
  //   name: "Prof. V. K. Saraswat",
  //   role: "Member NITI Aayog, & Former Director General",
  //   company:"Defence Research and Development Organisation (DRDO)",
  //   bio: "",
  //   image: "/speakers/Prof. V. K. Saraswat.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 2,
    name: "Prof. Ajay Sood",
    role: "Principal Scientific Adviser ",
    company: "Government of India",
    bio: "",
    image: "/speakers/Sood Ajay.jpg",
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
    name: "Prof. Manmohan Sharma",
    role: "Emeritus Professor of Eminence",
    company: "Institute of Chemical Technology (ICT), Mumbai",
    bio: "",
    image: "/speakers/Prof. Manmohan Sharma.jpg",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 4,
  //   name: "Dr. Harsh Vardhan",
  //   role: "Former Union Cabinet Minister",
  //   company: "Science & Technology and Health & Family Welfare, Govt. of India",
  //   bio: "",
  //   image: "/speakers/Dr. Harsh Vardhan.jpg",
  //   category: "",
  //   featured: true,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 5,
    name: "Dr. R. A. Mashelkar",
    role: "Former Director General",
    company: "Council of Scientific and Industrial Research (CSIR) & Former Secretary DSIR ",
    bio: "",
    image: "/speakers/Raghunath Anant Mashelkar.jpg",
    category: "",
    featured: true,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  
  // {
  //   id: 6,
  //   name: "Prof. Abhay Karandikar",
  //   role: "Secretary",
  //   company: "Department of Science & Technology (DST)",
  //   bio: "",
  //   image: "/speakers/Abhay Karandikar.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 7,
    name: "Dr. N. Kalaiselvi",
    role: "Director General",
    company:
      "Council of Scientific and Industrial Research (CSIR) & Secretary DSIR",
    bio: "",
    image: "/speakers/Dr N Kalaiselvi.png",
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
    name: "Dr. M. Ravichandran",
    role: "Secretary",
    company: "Ministry of Earth Sciences (MoES), Govt. of India",
    bio: "",
    image: "/speakers/Dr. M. Ravichandran.jpg",
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
    name: "Dr. Shekhar C. Mande",
    role: "Former Director General",
    company: "Council of Scientific and Industrial Research (CSIR) & Former Secretary DSIR",
    bio: "",
    image: "/speakers/Dr. Shekhar C. Mande.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 9,
  //   name: "Mr. Sanjeev Sanyal",
  //   role: "Secretary",
  //   company: "PMO Economic Advisory Council, Government of India",
  //   bio: "",
  //   image: "/speakers/Mr. Sanjeev Sanyal.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 10,
    name: "Prof. T. G. Sitharam",
    role: "Chairman",
    company: "All India Council for Technical Education (AICTE)",
    bio: "",
    image: "/speakers/Prof_T._G._Sitharam.jpg",
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
    name: "Dr. Raghupati Singhania",
    role: "Chairman and Managing Director",
    company: "JK Tyres & Industries Ltd.",
    bio: "",
    image: "/speakers/Dr. Raghupati Singhania.jpg",
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
    name: "Dr. Vijay Chauthaiwale",
    role: "In-Charge",
    company: "Foreign Affairs Department, BJP",
    bio: "",
    image: "/speakers/Dr. Vijay Chauthaiwale.jpg",
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
    name: "Dr. Ram Madhav",
    role: "Indian Politician",
    company: "Social Leader, Author, and Thinker",
    bio: "",
    image: "/speakers/Dr. Ram Madhav.png",
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
    name: "Mr. B. Anand",
    role: "Member,",
    company: "Central Administrative Tribunal (CAT) & Former Secretary, Department of Ex-Servicemen, Ministry of Defense, Govt. of India",
    bio: "",
    image: "/speakers/Mr. B. Anand.jpg",
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
    name: "Shri. Voruganti Srinivas",
    role: "Secretary",
    company: "Department of Administrative Reforms & Public Grievance (DARPG), Govt. of India",
    bio: "",
    image: "/speakers/Shri. Voruganti Srinivas.jpg",
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
    name: "Shri. Bharat Lal",
    role: "Secretary General and CEO,",
    company: "National Human Rights Commission (NHRC), Govt. of India",
    bio: "",
    image: "/speakers/Shri. Bharat Lal.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 15,
  //   name: "Mr. Upendra Prasad Singh",
  //   role: "Former Secretary,",
  //   company: "Ministry of Textiles, Govt. of India",
  //   bio: "",
  //   image: "/speakers/Mr. Upendra Prasad Singh.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 16,
  //   name: "Mrs. Vartika Shukla",
  //   role: "Chairman & Managing Director",
  //   company:"Engineers India Ltd. (EIL)",
  //   bio: "",
  //   image: "/speakers/Ms. Vartika Shukla.jpg",
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
    name: "Prof. J. B. Joshi",
    role: "Chancellor",
    company: "Institute of Chemical Technology (ICT), Mumbai",
    bio: "",
    image: "/speakers/Jyeshtharaj Joshi.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 18,
  //   name: "Dr. Mahesh Gupta",
  //   role: "Founder",
  //   company: "Kent RO",
  //   bio: "",
  //   image: "/speakers/Dr. Mahesh Gupta.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 19,
    name: "Prof. Manindra Agrawal",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Prof. Manindra Agrawal.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  

  
  {
    id: 20,
    name: "Dr. Shivkumar Sharma",
    role: "National Organizing Secretary",
    company: "Vigyan Bharati",
    bio: "",
    image: "/speakers/Dr. Shiv Kumar Sharma .png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 20,
    name: "Mr. Naveen Tiwari",
    role: "CEO & Founder",
    company: "InMobi and glance",
    bio: "",
    image: "/speakers/Mr. Naveen Tiwari.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 21,
    name: "Dr. Subi Chaturvedi",
    role: " Global SVP",
    company: "Chief Corporate Affairs & Public Policy Officer, InMobi",
    bio: "",
    image: "/speakers/Dr. Subi Chaturvedi.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 22,
    name: "Prof. Ashutosh Sharma",
    role: "President",
    company:
      "Indian National Science Academy (INSA), & Institute Chair Professor, Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Prof. Ashutosh Sharma.jpg",
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

  const filteredSpeakers =
    category === "all"
      ? SPEAKERS
      : SPEAKERS.filter((speaker) => speaker.category === category);

  const featuredSpeakers = SPEAKERS.filter((speaker) => speaker.featured);

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
            Meet Our <span className="text-kesari">Eminent Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the
            future of technology across various domains.
          </p>

          {/* <h3 className="text-3xl font-bold text-kesari mb-2 mt-12">
            Keynote Speakers
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
