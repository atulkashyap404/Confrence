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
    company:
      "Department of Science & Technology (DST), Government of India",
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
    company: "Council of Scientific and Industrial Research (CSIR) & Secretary DSIR",
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
    id: 9,
    name: "Dr. Shivkumar Kalyanaraman",
    role: "CEO",
    company: "Anusandhan National Research Foundation (ARNF), & DST, Government of India",
    bio: "",
    image: "/speakers/Dr S Kalyanaraman.png",
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
    id: 13,
    name: "Prof. Annapurni Subramaniam",
    role: "Director",
    company: "Indian Institute of Astrophysics (IIA), Bangalore",
    bio: "",
    image: "/speakers/Prof. Annapurni Subramaniam.png",
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
    name: "Prof. Aniruddha B Pandit",
    role: "Vice Chancellor",
    company: "Institute of Chemical Technology (ICT), Mumbai",
    bio: "",
    image: "/speakers/Aniruddha Bhalchandra Pandit.jpg",
    category: "",
    featured: true,
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
    id: 16,
    name: "Dr. Ashish Kishore Lele",
    role: "Director",
    company: "National Chemical Laboratory (NCL), Pune",
    bio: "",
    image: "/speakers/Ashish Kishore Lele.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 17,
    name: "Dr. Madhu Dikshit",
    role: "Former Director",
    company: "CSIR-Central Drug Research Institute (CDRI), Lucknow",
    bio: "",
    image: "/speakers/Dr Madhu Dikshit.png",
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
    name: "Dr. Soumya Swaminathan",
    role: "Chief Scientist",
    company: "World Health Organization (WHO)",
    bio: "",
    image: "/speakers/Dr Soumya Swaminathan.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 19,
    name: "Mr. Naveen Tiwari",
    role: " CEO",
    company: "inMobi",
    bio: "",
    image: "/speakers/Mr Naveen Tiwari.png",
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
    name: "Prof. Sachin Chaturvedi",
    role: "Vice-Chancellor",
    company: "Nalanda University, Bihar",
    bio: "",
    image: "/speakers/Prof. Sachin Chaturvedi.png",
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
    name: "Prof. V Ramgopal Rao",
    role: "Group Vice-Chancellor",
    company: "Birla Institute of Technology & Science (BITS) Pilani ",
    bio: "",
    image: "/speakers/V. Ramgopal Rao.jpg",
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
    name: "Prof. T G Sitharam",
    role: "Chairman",
    company: "All India Council for Technical Education (AICTE), Government of India",
    bio: "",
    image: "/speakers/Prof. T G Sitharam.jpg",
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
    name: "Prof. Indranil Manna",
    role: "Vice-Chancellor",
    company: "BIT Mesra, Ranchi Institute Chair Professor, Indian Institute of Technology (IIT) Kharagpur",
    bio: "",
    image: "/speakers/Indranil manna.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 24,
    name: "Prof. Rajat Moona ",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Gandhinagar",
    bio: "",
    image: "/speakers/Prof. Rajat Moona.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 25,
    name: "Prof. Avinash Agarwal",
    role: "Director",
    company:
      "Indian Institute of Technology (IIT) Jodhpur",
    bio: "",
    image: "/speakers/Avinash Kumar Agarwal.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 26,
    name: "Prof. Dhirendra S Katti",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Goa",
    bio: "",
    image: "/directors/Prof, Dhirendra S Katti-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 27,
    name: "Prof. Thalappil Pradeep",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Madras",
    bio: "",
    image: "/speakers/Thalappil Pradeep.jpg",
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
    company: "Indian National Science Academy INSA, New Delhi; Institute Chair Professor, IIT Kanpur",
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
    id: 29,
    name: "Prof. Amit Patra ",
    role: "Director",
    company:
      "Indian Institute of Technology (IIT) Varanasi Officiating Director, Indian Institute of Technology (IIT) Kharagpur",
    bio: "",
    image: "/directors/Prof, Amit Patra-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 30,
    name: "Prof. Shireesh Kedare",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Bombay",
    bio: "",
    image: "/directors/Prof, Shireesh Kedare-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 31,
    name: "Prof. Kamakoti Veezhinathan",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Madras",
    bio: "",
    image: "/directors/Prof, Kamakoti Veezhinathan-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 32,
    name: "Prof. Rangan Banerjee",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Delhi",
    bio: "",
    image: "/directors/Prof. Rangan Banerjee-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 33,
    name: "Prof. Kamal K Pant",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Roorkee",
    bio: "",
    image: "/directors/Prof, Kamal Kishore Pant-Picsart-AiImageEnhancer.jpeg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 34,
    name: "Prof. Devendra Jalihal",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Guwahati",
    bio: "",
    image: "/directors/Prof, Devendra Jalihal-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 35,
    name: "Prof. B S Murty",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Hyderabad",
    bio: "",
    image: "/directors/Prof, B S Murty-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 36,
    name: "Prof. Suhas S Joshi",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Indore",
    bio: "",
    image: "/directors/Prof, Suhas S, Joshi-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 37,
    name: "Prof. Sukumar Mishra",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Dhanbad",
    bio: "",
    image: "/directors/Prof, Sukumar Mishra-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 38,
    name: "Prof. Rajeev Ahuja",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Ropar",
    bio: "",
    image: "/directors/Prof, Rajeev Ahuja-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 39,
    name: "Prof. Laxmidhar Behera",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Mandi",
    bio: "",
    image: "/directors/Prof, Laxmidhar Behera-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 40,
    name: "Prof. T N Singh",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Patna",
    bio: "",
    image: "/directors/Prof, T,N, Singh-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 41,
    name: "Prof. Shreepad Karmalkar",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Bhubaneshwar",
    bio: "",
    image: "/directors/Prof, Shreepad Karmalkar-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 42,
    name: "Prof. Kalidindi N Satyanarayana",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Tirupati",
    bio: "",
    image: "/directors/Prof, Kalidindi N, Satyanarayana-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 43,
    name: "Prof. Manoj Singh Gaur",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Jammu",
    bio: "",
    image: "/directors/Prof, Manoj Singh Gaur-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 44,
    name: "Prof. A Seshadri Sekhar",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Palakkad",
    bio: "",
    image: "/directors/Prof, A, Seshadri Sekhar-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 45,
    name: "Prof. Rajiv Prakash",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Bhilai",
    bio: "",
    image: "/directors/Prof, Rajiv Prakash-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 46 ,
    name: "Prof. Venkappayya R Desai",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Dharwad",
    bio: "",
    image: "/directors/Prof, Venkappayya R, Desai-Picsart-AiImageEnhancer.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  

  // {
  //   id: 7,
  //   name: "Prof. Ganapati D. Yadav",
  //   role: "Emeritus Professor of Eminence",
  //   company: "Institute of Chemical Technology (ICT), Mumbai",
  //   bio: "",
  //   image: "/speakers/G. D. Yadav.jpg",
  //   category: "emerging",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 8,
  //   name: "Prof. Devang v Khakhar ",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Bombay",
  //   bio: "",
  //   image: "/speakers/Devang V. Khakhar.jpg",
  //   category: "cloud",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 9,
  //   name: "Prof. S. Pushpavanam",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Madras",
  //   bio: "",
  //   image: "/speakers/Prof. S. Pushpavanam.jpg",
  //   category: "cloud",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 10,
  //   name: "Rajdeep",
  //   role: "",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 11,
  //   name: "Pushpavanam",
  //   role: "",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 12,
  //   name: "Rajesh Khanna",
  //   role: "",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Prof. Sirsendu De",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/speakers/Sirshendu De.jpg",
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
  //   name: "Prof. Rabibrata Mukherjee",
  //   role: "Dean, Professor",
  //   company: "Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/speakers/Rabibrata Mukherjee.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 15,
  //   name: "Prof. Amitabha Ghosh",
  //   role: "Honorary Distinguished Professor",
  //   company: "National Academy of Sciences, India & IIEST Shibpur",
  //   bio: "",
  //   image: "/speakers/Prof. Amitabha Ghosh.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 15,
  //   name: "Prof. V. Ramgopal Rao",
  //   role: "Vice Chancellor",
  //   company: "BITS Pilani Group",
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
  //   id: 16,
  //   name: "Prof. Dipankar Das Sarma",
  //   role: "Professor",
  //   company: "Indian Institute of Science (IISc), Bangalore",
  //   bio: "",
  //   image: "/speakers/Dipankar Das Sarma.jpg",
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
  //   name: "Prof. Giridhar U. Kulkarni",
  //   role: "President",
  //   company: "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore ",
  //   bio: "",
  //   image: "/speakers/Giridhar U Kulkarni.jpg",
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
  //   name: "Prof. Indranil Manna",
  //   role: "Vice Chancellor",
  //   company: "BIT Mesra, Ranchi Institute Chair Professor, Indian Institute of Technology (IIT) Kharagpur",
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

  //  {
  //   id: 20,
  //   name: "Prof. P B Sunil Kumar",
  //   role: "Chair Professor",
  //   company: "Indian Institute of Technology (IIT) Madras",
  //   bio: "",
  //   image: "/speakers/Prof. P B Sunil Kumar.jpg",
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
  //   name: "Prof. Renu Swaroop",
  //   role: "Chairperson",
  //   company: "Biotechnology Industry Research Assistance Council (BIRAC), New Delhi",
  //   bio: "",
  //   image: "/speakers/Renu Swarup.jpg",
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
  //   name: "Ghokale",
  //   role: "Professor",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Prof. K VijayaRaghavan",
  //   role: "Professor",
  //   company: "National Centre for Biological Sciences, Tata Institute of Fundamental Research (TIFR), Bangalore",
  //   bio: "",
  //   image: "/speakers/Prof. K VijayaRaghavan.jpg",
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
  //   name: "Prof. Shekhar Mande",
  //   role: "Distinguished Honorary Professor",
  //   company: "Savitribai Phule Pune University, Pune",
  //   bio: "",
  //   image: "/speakers/Shekhar C. Mande.jpg",
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
  //   name: "Prof. Brajesh Pandey",
  //   role: "Executive Director",
  //   company: "Indian National Science Academy (INSA), New Delhi",
  //   bio: "",
  //   image: "/speakers/Brajesh Pandey.jpg",
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
  //   name: "Prof. VN Tiwari ",
  //   role: "Professor",
  //   company: "Mangalayatan University, Aligarh (U.P.), India",
  //   bio: "",
  //   image: "/speakers/Prof. VN Tiwari .jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 28,
  //   name: "Dr. Samir V Kamat",
  //   role: "Secretary",
  //   company: "Department of Defence R&D and Chairman, Defence Research and Development Organisation (DRDO)",
  //   bio: "",
  //   image: "/speakers/Dr. Samir V Kamat.jpg",
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
  //   name: "Prof. Suman Chakraborty ",
  //   role: "Chair Professor",
  //   company: "Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/speakers/Suman Chakraborty.jpg",
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
  //   name: "Amit Prothi",
  //   role: "Director General, Coalition for Disaster Resilient Infrastructure",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/Amit Prothi.jpg",
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
  //   name: "Dr. Mayank Dwivedi",
  //   role: "Director",
  //   company: "DRDO-Defence Material and Stores Research and Development Establishment (DMSRDE), Kanpur",
  //   bio: "",
  //   image: "/speakers/Dr. Mayank Dwivedi.jpg",
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
  //   name: "Dr. Debmalya Roy",
  //   role: "Scientist",
  //   company: "DRDO-Defence Material and Stores Research and Development Establishment (DMSRDE), Kanpur",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Prof. Shantanu Bhattacharya",
  //   role: "Director",
  //   company: "CSIR-Central Scientific Instruments Organisation (CSIO), Chandigarh Professor, IIT Kanpur",
  //   bio: "",
  //   image: "/speakers/Prof. Shantanu Bhattacharya.jpg",
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
  //   name: "Janhavi Raut",
  //   role: "Director CSIR-Central Scientific Instruments Organisation (CSIO)",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Dr. Samiran Mahapatra's",
  //   role: "Unilever R&D Bangalore",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Saurav Shrivtastav",
  //   role: "Researcher",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/dummy-person.jpg",
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
  //   name: "Mr. Vijay Parikh",
  //   role: "Manging Director ",
  //   company: "Transcont (India) Finvest Private Limited",
  //   bio: "",
  //   image: "/speakers/Mr. Vijay Parikh.jpg",
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
  //   name: "Prof. Prashant K. Bhattacharya  ",
  //   role: "Professor (Retd.)",
  //   company: "Indian Institute of Technology (IIT) Kanpur",
  //   bio: "",
  //   image: "/speakers/Prof. P. K. Bhattacharya.jpg",
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
  //   name: "Deepak Kunzru",
  //   role: "Distinguished Professor and Dean",
  //   company: "Ahmedabad University, Gujarat",
  //   bio: "",
  //   image: "/speakers/Deepak Kunzru.jpg",
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
  //   name: "Prof. Raj Chhabra",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Ropar",
  //   bio: "",
  //   image: "/speakers/Dr. Raj P. Chhabra.jpg",
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
  //   name: "Dr. Harshvardhan Goel",
  //   role: "Former union cabinet minister ",
  //   company: "Government of India",
  //   bio: "",
  //   image: "/speakers/Harsh Vardhan.jpg",
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
  //   name: "Sanjay Malhotra",
  //   role: "Governor of the Reserve Bank of India",
  //   company: "",
  //   bio: "",
  //   image: "/speakers/Sanjay Malhotra.jpg",
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
  //   name: "Prof. Bansi D Malhotra ",
  //   role: "Professor",
  //   company: "Delhi Technological University (DTU), Delhi",
  //   bio: "",
  //   image: "/speakers/Prof. Bansi D Malhotra.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 47,
  //   name: "Dr. Arvind C Ranade",
  //   role: "Director",
  //   company: "National Innovation Foundation India, Government of India",
  //   bio: "",
  //   image: "/speakers/Dr. Arvind C Ranade.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 48,
  //   name: "Mr. Bhagwan Swarup",
  //   role: "Deputy Inspector General",
  //   company: "Lucknow",
  //   bio: "",
  //   image: "/speakers/Shri Bhagwan Swaroop Srivastava.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 49,
  //   name: "Mr. Sanjay Prasad",
  //   role: "Director",
  //   company: "Government of Uttar Pradesh",
  //   bio: "",
  //   image: "/speakers/Sanjay Prasad.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 50,
  //   name: "Dr. R. Vijay",
  //   role: "Director",
  //   company: "International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), Hyderabad",
  //   bio: "",
  //   image: "/speakers/Dr. R. Vijay.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 51,
  //   name: "Prof. Bikranjit Basu",
  //   role: "Director",
  //   company: "CSIR-Central Glass & Ceramic Research Institute (CGCRI), Kolkata Professor, Indian Institute of Science (IISc), Bangalore",
  //   bio: "",
  //   image: "/speakers/Prof. Bikramjit Basu.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 52,
  //   name: "Prof. Sanjay Bihari",
  //   role: "Director",
  //   company: "Sree Chitra Tirunal Institute for Medical Sciences & Technology (SCTIMST), Trivandrum Professor, SGPGIMS Lucknow",
  //   bio: "",
  //   image: "/speakers/Dr. Sanjay Behari.jpg",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 53,
  //   name: "Dr. Radha Rangarajan",
  //   role: "Director",
  //   company: "CSRI-Central Drug Research Institute (CDRI), Lucknow",
  //   bio: "",
  //   image: "/speakers/Dr Radha Rangarajan.jpg",
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
        </motion.div>

        {/* Featured Speakers */}
        {/* <motion.div
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
        </motion.div> */}

        {/* All Speakers */}
        <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
          {/* <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="emerging">Emerging Tech</TabsTrigger>
            </TabsList>
          </div> */}

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
          {/* <p className="text-muted-foreground mb-4">
            Interested in speaking at TRIP 2025?
          </p> */}
          {/* <Button variant="outline">Become a Speaker</Button> */}
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
          {/* <Badge variant="outline" className="mb-4">
            {speaker.category === "ai" && "AI & ML"}
            {speaker.category === "cloud" && "Cloud"}
            {speaker.category === "blockchain" && "Blockchain"}
            {speaker.category === "design" && "Design"}
            {speaker.category === "security" && "Security"}
            {speaker.category === "emerging" && "Emerging Tech"}
          </Badge> */}
        </CardContent>
        {/* <CardFooter className="flex justify-start space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Globe className="h-4 w-4" />
          </Button>
        </CardFooter> */}
      </Card>
    </motion.div>
  );
}

// function FeaturedSpeakerCard({ speaker, index }: SpeakerCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: index * 0.2 }}
//       viewport={{ once: true }}
//       className="relative"
//     >
//       <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//         <div className="absolute top-0 right-0 z-10">
//           <Badge className="m-2 bg-primary">Featured</Badge>
//         </div>
//         <CardContent className="p-0">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-2/5 h-64 md:h-auto relative">
//               <motion.img
//                 src={speaker.image}
//                 alt={speaker.name}
//                 className="w-full h-full object-cover"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//             <div className="md:w-3/5 p-6">
//               <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
//               <p className="text-muted-foreground mb-1">
//                 {speaker.role}  {speaker.company}
//               </p>
//               <Badge variant="outline" className="mb-4">
//                 {speaker.category === "ai" && "AI & ML"}
//                 {speaker.category === "cloud" && "Cloud"}
//                 {speaker.category === "blockchain" && "Blockchain"}
//                 {speaker.category === "design" && "Design"}
//                 {speaker.category === "security" && "Security"}
//                 {speaker.category === "emerging" && "Emerging Tech"}
//               </Badge>
//               <p className="mb-4 text-sm">{speaker.bio}</p>
//               <div className="flex space-x-2">
//                 <Button variant="ghost" size="icon" className="h-8 w-8">
//                   <Twitter className="h-4 w-4" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="h-8 w-8">
//                   <Linkedin className="h-4 w-4" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="h-8 w-8">
//                   <Globe className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }
