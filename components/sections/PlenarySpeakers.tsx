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
    name: "Prof. Indranil Manna",
    role: "Vice-Chancellor",
    company:
      "BIT Mesra, Ranchi Institute Chair Professor, Indian Institute of Technology (IIT) Kharagpur",
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Dr. Subi Chaturvedi",
    role: " Chief Corporate Affairs & Public Policy Officer",
    company: "inMobi",
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
    id: 5,
    name: "Prof. Shishir Sinha",
    role: "Director General",
    company: "Central Institute of Petrochemicals Engineering & Technology (CIPET)",
    bio: "",
    image: "/speakers/Prof. Shishir Sinha.png",
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
    name: "Dr. Tripta Thakur",
    role: "Director General",
    company: "National Power Training Institute (NPTI)",
    bio: "",
    image: "/speakers/Dr. Tripta Thakur.png",
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
  {
    id: 8,
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
    id: 9,
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

  
  // {
  //   id: 10,
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

  {
    id: 11,
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
    id: 12,
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

  

  // {
  //   id: 13,
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
 

  {
    id: 14,
    name: "Prof. T G Sitharam",
    role: "Chairman",
    company:
      "All India Council for Technical Education (AICTE), Government of India",
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
    id: 15,
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
    id: 16,
    name: "Prof. Avinash Agarwal",
    role: "Director",
    company: "Indian Institute of Technology (IIT) Jodhpur",
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
    id: 17,
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
    id: 18,
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
    id: 19,
    name: "Prof. Amit Patra ",
    role: "Director",
    company:
      "Indian Institute of Technology (IIT) Varanasi",
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

  // {
  //   id: 17,
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
  //   id: 18,
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
  //   id: 20,
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

  {
    id: 20,
    name: "Prof. Suman Chakraborty",
    role: "Director",
    company: "Indian Institute of Technology(IIT), Kharagpur",
    bio: "",
    image: "/directors/Dr. Suman Chakraborty.png",
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
    name: "Dr. Rupa Vasudevan",
    role: "Chancellor",
    company: "Bharatiya Engineering Science and Technology Innovation University (BESTIU)",
    bio: "",
    image: "/directors/Dr Rupa Vasudevan.png",
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

  // {
  //   id: 21,
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

  {
    id: 22,
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
    id: 23,
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

  // {
  //   id: 24,
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
  {
    id: 24,
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
    id: 25,
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
    id: 19,
    name: "Prof. Ajit Kumar Chaturvedi",
    role: "Professor(HAG), IIT Kanpur",
    company: "Former Director IIT Roorkee",
    bio: "",
    image: "/dist/Prof. A K Chaturvedi .png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  // {
  //   id: 26,
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
  //   id: 28,
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
  //   id: 27,
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
  //   id: 30,
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
  //   id: 28,
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
  //   id: 29,
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
  //   id: 33,
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
  {
    id: 30,
    name: "Prof. Shantanu Bhattacharya",
    role: "Director",
    company: "CSIR-Central Scientific Instruments Organisation (CSIO), Chandigarh",
    bio: "",
    image: "/speakers/Prof. Shantanu Bhattacharya.jpg",
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
    name: "Prof. G.D.Yadav",
    role: "Former Vice Chancellor ",
    company: "Institute of Chemical Technology (ICT), Mumbai",
    bio: "",
    image: "/speakers/G. D. Yadav.jpg",
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
    name: "Dr. Anil Kumar Tripathi",
    role: "Director, IISER Mohali",
    company: "Vice President, Indian National Science Academy (INSA), New Delhi",
    bio: "",
    image: "/speakers/Dr. Anil Kumar Tripathi.png ",
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
    name: "Prof. Bhrigu Nath Singh",
    role: "Vice Chancellor",
    company: "Rajiv Gandhi National Aviation University, Amethi",
    bio: "",
    image: "/speakers/Prof. Bhrigu Nath Singh.png",
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
    name: "Prof. Sunil S. Bhagwat",
    role: "Director",
    company: "Indian Institute of Science Education and Research (IISER), Pune",
    bio: "",
    image: "/speakers/Prof Sunil S. Bhagwat.png",
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
    name: "Prof. Gobardhan Das",
    role: "Director",
    company: "Indian Institute of Science Education and Research (IISER), Bhopal",
    bio: "",
    image: "/speakers/prof gobardhan das.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 35,
  //   name: "Dr. M. Ravichandran",
  //   role: "Secretary",
  //   company: "Ministry of Earth Sciences (MoES), GoI",
  //   bio: "",
  //   image: "/speakers/Dr. M. Ravichandran.png",
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
  //   name: "Dr. Renu Swarup",
  //   role: "Former Secretary",
  //   company: "Department of Biotechnology (DBT)",
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
  //   id: 37,
  //   name: "Prof. K. VijayRaghavan",
  //   role: "Former Principal Scientific Adviser",
  //   company: "PMO",
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
  {
    id: 38,
    name: "Prof. Gautam Biswas",
    role: "Former Director",
    company: "Indian Institute of Technology(IIT), Guwahati",
    bio: "",
    image: "/speakers/Prof. Gautam Biswas.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 39,
  //   name: "Prof. Marc Madou",
  //   role: "Distinguished Professor",
  //   company: "University of California, Irvine",
  //   bio: "",
  //   image: "/speakers/prof. marc madou.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 40,
    name: "Prof. Giridhar U. Kulkarni",
    role: "President",
    company: "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore",
    bio: "",
    image: "/speakers/Giridhar U Kulkarni.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  // {
  //   id: 41,
  //   name: "Prof. Alamgir Karim",
  //   role: "Dow Chair Professor and Director",
  //   company: "Materials Program, University of Houston",
  //   bio: "",
  //   image: "/speakers/Prof. Alamgir Karim.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  {
    id: 42,
    name: "Dr. Kavinder Kumar",
    role: "Member- Steering Committee",
    company: "Ministry of Communications, Former CEO, Atal Incubation Centre-JNUFI (NITI AAYOG)",
    bio: "",
    image: "/speakers/Mr. Kavindra Taliyan.png",
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
    name: "Prof. Amitabha Ghosh",
    role: "Senior Scientist",
    company: "Indian National Science Academy (INSA)",
    bio: "",
    image: "/speakers/Prof. Amitabha Ghosh.png",
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
    name: "Mr. Kris Gopalakrishnan",
    role: "Co-founder",
    company: "Infosys",
    bio: "",
    image: "/speakers/Mr. Kris Gopalakrishnan.png",
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
    name: "Prof. K S Gandhi",
    role: "Professor",
    company: "Indian Institute of Science (IISc), Bangalore",
    bio: "",
    image: "/speakers/Prof. K. S. Gandh.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 46,
    name: "Prof. Nitin Seth",
    role: "Director",
    company: "Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA), DST",
    bio: "",
    image: "/speakers/Prof. Nitin Seth.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 47,
    name: "Dr. Shekhar C. Mande",
    role: "Ex-Director General",
    company: "Council of Scientific Research (CSIR)",
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

  {
    id: 48,
    name: "Mr. Vijay Parikh",
    role: "Managing Director",
    company: "Transcont (India) Finvest Pvt. Ltd.",
    bio: "",
    image: "/speakers/Mr. Vijay Parikh.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 49,
    name: "Prof. Ramesh Chandra",
    role: "Founder & Director",
    company: "Dr. BR Ambedkar Centre for Biomedical Research, University of Delhi",
    bio: "",
    image: "/speakers/Prof. Ramesh Chandra.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 49,
    name: "Prof. Santanu Bhattacharya",
    role: "Director",
    company: "IISER Tirupati",
    bio: "",
    image: "/speakers/Prof. Santanu Bhattacharya.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 50,
    name: "Dr. Arvind C Ranade",
    role: "Director",
    company: "National Innovation Foundation, GoI",
    bio: "",
    image: "/speakers/Dr. Arvind C Ranade.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 51,
    name: "Dr. Geetha Vani Rayasam",
    role: "Head",
    company: "CSIR- Human Resource Development Group",
    bio: "",
    image: "/speakers/Dr. Geetha Vani Rayasam.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 52,
    name: "Prof. Spenta R. Wadia",
    role: "Vice President",
    company: "Indian National Science Academy (INSA)",
    bio: "",
    image: "/speakers/Prof. Spenta R. Wadia.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 53,
    name: "Prof. S. Pushpavanam",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Madras",
    bio: "",
    image: "/speakers/Prof. S. Pushpavanam.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 54,
    name: "Prof. Shankar Narsimhan",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Madras",
    bio: "",
    image: "/speakers/Prof. Shankar Narsimhan.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 55,
    name: "Mr. Amod Agrawal",
    role: "Board of Directors",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Mr. Amod Agrawal.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 56,
    name: "Prof. Ashok Kumar",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Prof. Ashok Kumar.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 57,
    name: "Prof. Jitendra K. Bera",
    role: "Dean, Dean of Faculty Affairs",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Prof. Jitendra K. Bera.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 58,
    name: "Prof. Jayant K. Singh",
    role: "Professor",
    company: "Indian Institute of Technology (IIT) Kanpur",
    bio: "",
    image: "/speakers/Prof. Jayant K. Singh.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 59,
    name: "Dr. Samiran Mahapatra",
    role: "Director",
    company: "Open Innovation Asia, Principal Research Scientist, Unilever",
    bio: "",
    image: "/speakers/Dr. Samiran Mahapatra.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 60,
    name: "Dr. Rohini Srivathsa",
    role: "Chief Technology Officer",
    company: "Microsoft India & South Asia",
    bio: "",
    image: "/speakers/Dr. Rohini Srivathsa.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 61,
    name: "Dr. Dipti Kakkar Thukral",
    role: "Scientist G",
    company: "Anusandhan National Research Foundation (ANRF)",
    bio: "",
    image: "/speakers/Dr. Dipti Kakkar Thukral.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 62,
    name: "Dr. C. Anandharamakrishnan",
    role: "Director",
    company: "CSIR-National Institute for Interdisciplinary Science and Technology (NIIST)",
    bio: "",
    image: "/speakers/Dr. C. Anandharamakrishnan.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 63,
    name: "Dr. R Vijay",
    role: "Director",
    company: "International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), Hyderabad",
    bio: "",
    image: "/speakers/Dr. R Vijay.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },

  {
    id: 64,
    name: "Mr. Jai Shankar Sharma",
    role: "Chairperson-Startup Master Class & Mentor",
    company: "IITK Alumni Association",
    bio: "",
    image: "/speakers/Mr. Jai Shankar Sharma.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 65,
    name: "Dr. Koppillil Radhakrishnan",
    role: "Chairperson",
    company: "Board of Governors Indian Institute of Technology (IIT), Kanpur Chairman, Standing Committee IIT Council",
    bio: "",
    image: "/speakers/Dr. Koppillil Radhakrishnan.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 66,
    name: "Dr. Ashish Lele",
    role: "Director",
    company: "National Chemical Laboratory (NCL), Pune",
    bio: "",
    image: "/speakers/Dr. Ashish Lele.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 67,
    name: "Dr. Sanjeev K Varshney",
    role: "Former Scientist G",
    company: "Department of Science & Technology (DST)",
    bio: "",
    image: "/speakers/Dr. Sanjeev K Varshney.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 68,
    name: "Prof. Alok Dhawan",
    role: "Director",
    company: "Centre of BioMedical Research (CBMR), Lucknow",
    bio: "",
    image: "/speakers/Prof. Alok Dhawan.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 69,
    name: "Dr. Meghendra Sharma",
    role: "Secretary",
    company: "Vigyan Bharati Rajasthan (Vibha), Rajasthan",
    bio: "",
    image: "/speakers/Dr. Meghendra Sharma.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 70,
    name: "Dr. Anubhav Saxena",
    role: "Chief R&D Officer",
    company: "Pidilite Industries Limited",
    bio: "",
    image: "/speakers/Dr. Anubhav Saxena.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 71,
    name: "Prof. Ashok Kumar Ganguli",
    role: "Director",
    company: "Indian Institute of Science Education and Research (IISER), Berhampur",
    bio: "",
    image: "/speakers/Prof. Ashok Kumar Ganguli.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 72,
    name: "Mr. Saurabh Srivastava",
    role: "Former Chairman, National Association of Software and Service Companies (NASSCOM)",
    company: "Founder Chairman, India Angel Networks",
    bio: "",
    image: "/speakers/Mr. Saurabh Srivastava.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 73,
    name: "Dr. Kingsuk Mukhopadhyay",
    role: "Director",
    company: "Defence Materials and Stores Research and Development Establishment (DMSRDE), Kanpur",
    bio: "",
    image: "/speakers/Dr. Kingsuk Mukhopadhyay.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 73,
    name: "Prof. Manoj Choudhary",
    role: "Vice Chancellor",
    company: "Gati Shakti Vishwavidyalaya, Vadodara",
    bio: "",
    image: "/speakers/Prof. Manoj Choudhary.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 74,
    name: "Dr. Shweta Jha",
    role: "Assistant Professor",
    company: "Jodhpur University",
    bio: "",
    image: "/speakers/Dr. Shweta Jha.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 75,
    name: "Mr. Umakant Soni",
    role: "Founder, CEO",
    company: "Artpark, Bangalore & Pi Ventures",
    bio: "",
    image: "/speakers/Mr. Umakant Soni.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 76,
    name: "Mr. B. Anand",
    role: "Secretary Department",
    company: "Ex-Servicemen Ministry of Defense & Member Central Administrative Tribunal (CAT), GOI",
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
    id: 77,
    name: "Prof. Diwan Singh Rawat",
    role: "Vice-Chancellor",
    company: "Kumaun University, Nainital",
    bio: "",
    image: "/speakers/Prof. Diwan Singh Rawat.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 78,
    name: "Narayana Prasad Padhy",
    role: "Director",
    company: "Malaviya National Institute of Technology (MNIT), Jaipur",
    bio: "",
    image: "/speakers/Narayana Prasad Padhy.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 79,
    name: "Dr. Sangeeth S Pillai",
    role: "Assistant Professor",
    company: "Malaviya National Institute of Technology (MNIT), Jaipur",
    bio: "",
    image: "/speakers/Dr. Sangeeth S Pillai.jpg",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 80,
    name: "Dr. M. Ravichandran",
    role: "Secretary",
    company: "Ministry of Earth Sciences (MoES), GOI",
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
    id: 81,
    name: "Prof. Vinod K. Singh",
    role: "President",
    company: "National Academy of Sciences, India (NASI), Institute Chair Professor Department of Chemistry IIT Kanpur",
    bio: "",
    image: "/committee/Prof. Vinod K. Singh.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 82,
    name: "Prof. Sandeep Verma",
    role: "Professor",
    company: "Department of Chemistry, Professor In-Charge (Head) Gangwal School of Medical Sciences and Technology",
    bio: "",
    image: "/committee/Prof. Sandeep Verma.png",
    category: "",
    featured: false,
    socials: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  
  // {
  //   id: 39,
  //   name: "Prof. A. Seshadri Sekhar",
  //   role: " Director",
  //   company: "IIT Palakkad",
  //   bio: "",
  //   image: "/directors/Prof. A. Seshadri Sekhar.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
];

export default function PlenarySpeakers() {
  const [category, setCategory] = useState<string>("all");

  const filteredSpeakers =
    category === "all"
      ? SPEAKERS
      : SPEAKERS.filter((speaker) => speaker.category === category);

  const featuredSpeakers = SPEAKERS.filter((speaker) => speaker.featured);

  return (
    <section id="speakers" className="py-18 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Meet Our <span className="text-kesari">Eminent Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the
            future of technology across various domains.
          </p> */}

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
