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
    name: "Prof. V K Saraswat",
    role: "Distinguished Professor",
    company:
      "Indian Institute of Technology (IIT) Hyderabad, Member NITI Aayog",
    bio: "",
    image: "/speakers/Prof. V. K. Saraswat.jpg",
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
    name: "Prof. Man Mohan Sharma",
    role: "Emeritus Professor of Eminence",
    company: "Institute of Chemical Technology (ICT), Mumbai",
    bio: "",
    image: "/speakers/Man Mohan Sharma.jpg",
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
    id: 28,
    name: "Prof. Ashutosh Sharma",
    role: "President",
    company:
      "Indian National Science Academy INSA, New Delhi; Institute Chair Professor, IIT Kanpur",
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
  {
    id: 4,
    name: "Dr. Raghunath A Mashelkar",
    role: "Former Director General ",
    company: "Council for Scientific and Industrial Research (CSIR), New Delhi",
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
  {
    id: 5,
    name: "Dr. R S Gokhale",
    role: "Secretary",
    company: "Department of Biotechnology (DBT) Government of India",
    bio: "",
    image: "/speakers/Dr R S Gokhale.png",
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
    name: "Prof. Abhay Karandikar",
    role: "Secretary",
    company: "Department of Science & Technology (DST), Government of India",
    bio: "",
    image: "/speakers/Abhay Karandikar.jpg",
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
    name: "Dr. N Kalaiselvi",
    role: "Director",
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
    name: "Mr. Sanjeev Sanyal",
    role: "Secretary",
    company: "PMO Economic Advisory Council, Government of India",
    bio: "",
    image: "/speakers/Mr. Sanjeev Sanyal.jpg",
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
    name: "Mrs. Vartika Shukla",
    role: "Chairman",
    company:
      "Chairperson and Managing Director (Technical) and Director (Finance) of Engineers India Ltd. (EIL)",
    bio: "",
    image: "/speakers/Ms. Vartika Shukla.jpg",
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
    name: "Prof. Jyeshtharaj Bhalchandra Joshi",
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
  {
    id: 15,
    name: "Dr. Mahesh Gupta",
    role: "Chairperson",
    company: "Kent RO Systems",
    bio: "",
    image: "/speakers/Mahesh Gupta.jpg",
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
    name: "Prof. Manindra Agrawal",
    role: "Director",
    company: "Indian Institute of Technology, Kanpur",
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
  // {
  //   id: 9,
  //   name: "Dr. Shivkumar Kalyanaraman",
  //   role: "CEO",
  //   company:
  //     "Anusandhan National Research Foundation (ARNF), & DST, Government of India",
  //   bio: "",
  //   image: "/speakers/Dr S Kalyanaraman.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  

 
  

  // {
  //   id: 13,
  //   name: "Prof. Annapurni Subramaniam",
  //   role: "Director",
  //   company: "Indian Institute of Astrophysics (IIA), Bangalore",
  //   bio: "",
  //   image: "/speakers/Prof. Annapurni Subramaniam.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 14,
  //   name: "Prof. Aniruddha B Pandit",
  //   role: "Vice Chancellor",
  //   company: "Institute of Chemical Technology (ICT), Mumbai",
  //   bio: "",
  //   image: "/speakers/Aniruddha Bhalchandra Pandit.jpg",
  //   category: "",
  //   featured: true,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  
  // {
  //   id: 16,
  //   name: "Dr. Ashish Kishore Lele",
  //   role: "Director",
  //   company: "National Chemical Laboratory (NCL), Pune",
  //   bio: "",
  //   image: "/speakers/Ashish Kishore Lele.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 17,
  //   name: "Dr. Madhu Dikshit",
  //   role: "Former Director",
  //   company: "CSIR-Central Drug Research Institute (CDRI), Lucknow",
  //   bio: "",
  //   image: "/speakers/Dr Madhu Dikshit.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 18,
  //   name: "Dr. Soumya Swaminathan",
  //   role: "Chief Scientist",
  //   company: "World Health Organization (WHO)",
  //   bio: "",
  //   image: "/speakers/Dr Soumya Swaminathan.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 19,
  //   name: "Mr. Naveen Tiwari",
  //   role: " CEO",
  //   company: "inMobi",
  //   bio: "",
  //   image: "/speakers/Mr Naveen Tiwari.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 20,
  //   name: "Prof. Sachin Chaturvedi",
  //   role: "Vice-Chancellor",
  //   company: "Nalanda University, Bihar",
  //   bio: "",
  //   image: "/speakers/Prof. Sachin Chaturvedi.png",
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
  //   name: "Prof. V Ramgopal Rao",
  //   role: "Group Vice-Chancellor",
  //   company: "Birla Institute of Technology & Science (BITS) Pilani ",
  //   bio: "",
  //   image: "/speakers/V. Ramgopal Rao.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 22,
  //   name: "Prof. T G Sitharam",
  //   role: "Chairman",
  //   company:
  //     "All India Council for Technical Education (AICTE), Government of India",
  //   bio: "",
  //   image: "/speakers/Prof. T G Sitharam.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 23,
  //   name: "Prof. Indranil Manna",
  //   role: "Vice-Chancellor",
  //   company:
  //     "BIT Mesra, Ranchi Institute Chair Professor, Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/speakers/Indranil manna.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 24,
  //   name: "Prof. Rajat Moona ",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Gandhinagar",
  //   bio: "",
  //   image: "/speakers/Prof. Rajat Moona.png",
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
  //   name: "Prof. Avinash Agarwal",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Jodhpur",
  //   bio: "",
  //   image: "/speakers/Avinash Kumar Agarwal.jpg",
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
  //   name: "Prof. Dhirendra S Katti",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Goa",
  //   bio: "",
  //   image: "/directors/Prof, Dhirendra S Katti-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 27,
  //   name: "Prof. Thalappil Pradeep",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Madras",
  //   bio: "",
  //   image: "/speakers/Thalappil Pradeep.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  

  // {
  //   id: 29,
  //   name: "Prof. Amit Patra ",
  //   role: "Director",
  //   company:
  //     "Indian Institute of Technology (IIT) Varanasi Officiating Director, Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/directors/Prof, Amit Patra-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 30,
  //   name: "Prof. Shireesh Kedare",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Bombay",
  //   bio: "",
  //   image: "/directors/Prof, Shireesh Kedare-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 31,
  //   name: "Prof. Kamakoti Veezhinathan",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Madras",
  //   bio: "",
  //   image: "/directors/Prof, Kamakoti Veezhinathan-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 32,
  //   name: "Prof. Rangan Banerjee",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Delhi",
  //   bio: "",
  //   image: "/directors/Prof. Rangan Banerjee-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 33,
  //   name: "Prof. Kamal K Pant",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Roorkee",
  //   bio: "",
  //   image: "/directors/Prof, Kamal Kishore Pant-Picsart-AiImageEnhancer.jpeg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 34,
  //   name: "Prof. Devendra Jalihal",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Guwahati",
  //   bio: "",
  //   image: "/directors/Prof, Devendra Jalihal-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 35,
  //   name: "Prof. B S Murty",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Hyderabad",
  //   bio: "",
  //   image: "/directors/Prof, B S Murty-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 36,
  //   name: "Prof. Suhas S Joshi",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Indore",
  //   bio: "",
  //   image: "/directors/Prof, Suhas S, Joshi-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 37,
  //   name: "Prof. Sukumar Mishra",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Dhanbad",
  //   bio: "",
  //   image: "/directors/Prof, Sukumar Mishra-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 38,
  //   name: "Prof. Rajeev Ahuja",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Ropar",
  //   bio: "",
  //   image: "/directors/Prof, Rajeev Ahuja-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 39,
  //   name: "Prof. Laxmidhar Behera",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Mandi",
  //   bio: "",
  //   image: "/directors/Prof, Laxmidhar Behera-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 40,
  //   name: "Prof. T N Singh",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Patna",
  //   bio: "",
  //   image: "/directors/Prof, T,N, Singh-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 41,
  //   name: "Prof. Shreepad Karmalkar",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Bhubaneshwar",
  //   bio: "",
  //   image: "/directors/Prof, Shreepad Karmalkar-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 42,
  //   name: "Prof. Kalidindi N Satyanarayana",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Tirupati",
  //   bio: "",
  //   image:
  //     "/directors/Prof, Kalidindi N, Satyanarayana-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 43,
  //   name: "Prof. Manoj Singh Gaur",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Jammu",
  //   bio: "",
  //   image: "/directors/Prof, Manoj Singh Gaur-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 44,
  //   name: "Prof. A Seshadri Sekhar",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Palakkad",
  //   bio: "",
  //   image: "/directors/Prof, A, Seshadri Sekhar-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 45,
  //   name: "Prof. Rajiv Prakash",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Bhilai",
  //   bio: "",
  //   image: "/directors/Prof, Rajiv Prakash-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 46,
  //   name: "Prof. Venkappayya R Desai",
  //   role: "Director",
  //   company: "Indian Institute of Technology (IIT) Dharwad",
  //   bio: "",
  //   image: "/directors/Prof, Venkappayya R, Desai-Picsart-AiImageEnhancer.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
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
