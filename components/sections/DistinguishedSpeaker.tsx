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
    "id": 1,
    "name": "Dr. Akhilesh Gupta",
    "role": "Former Senior Adviser",
    "company": "Department of Science & Technology (DST)",
    "bio": "",
    "image": "/speakers/Dr. Akhilesh Gupta.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 2,
    "name": "Prof. Abhijit Majumdar",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Bombay",
    "bio": "",
    "image": "/speakers/Prof. Abhijit Majumdar.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 3,
    "name": "Prof. Alamgir Karim",
    "role": "Dow Chair Professor and Director, Materials Program",
    "company": "University of Houston",
    "bio": "",
    "image": "/speakers/Prof. Alamgir Karim.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 4,
    "name": "Prof. Amitabha Ghosh",
    "role": "Senior Scientist",
    "company": "Indian National Science Academy (INSA)",
    "bio": "",
    "image": "/speakers/Prof. Amitabha Ghosh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 5,
    "name": "Mr. Amod Agrawal",
    "role": "Member",
    "company": "IIT Kanpur Alumni Association",
    "bio": "",
    "image": "/speakers/Mr. Amod Agrawal.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 6,
    "name": "Prof. Ashok Kumar",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Ashok Kumar.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 7,
    "name": "Dr. Abir Ghosh",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) BHU",
    "bio": "",
    "image": "/speakers/Dr. Abir Ghosh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 8,
    "name": "Prof. Ahmad Tariq Jameel",
    "role": "Professor",
    "company": "Aligarh Muslim University (AMU)",
    "bio": "",
    "image": "/speakers/Prof. Ahmad Tariq Jameel.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 9,
    "name": "Dr. Amit Ranjan",
    "role": "Professor",
    "company": "Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Raebareli",
    "bio": "",
    "image": "/speakers/Dr. Amit Ranjan.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 10,
    "name": "Prof. Ankur Verma",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) BHU",
    "bio": "",
    "image": "/speakers/Prof. Ankur Verma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 11,
    "name": "Dr. Aashima Bagaria",
    "role": "Professor & Associate Dean",
    "company": "Manipal University, Jaipur",
    "bio": "",
    "image": "/speakers/Dr. Aashima Bagaria.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 12,
    "name": "Prof. Bushra Ateeq",
    "role": "Professor & Dean, International Relations",
    "company": "IIT Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Bushra Ateeq.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 13,
    "name": "Prof. Chandra Shekhar Sharma",
    "role": "Professor & Former Dean, R&D",
    "company": "Indian Institute of Technology (IIT) Hyderabad",
    "bio": "",
    "image": "/speakers/Prof. Chandra Shekhar Sharma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 14,
    "name": "Prof. D. D. Sarma",
    "role": "Honorary Professor",
    "company": "Indian Institute of Science (IISc), Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. D. D. Sarma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 15,
    "name": "Dr. Deeksha Awasthi",
    "role": "Founder",
    "company": "DeekshaLife",
    "bio": "",
    "image": "/speakers/Dr. Deeksha Awasthi.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 16,
    "name": "Mr. Deepak Gandhi",
    "role": "Director",
    "company": "Altruist Technologies Pvt. Ltd",
    "bio": "",
    "image": "/speakers/Mr. Deepak Gandhi.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 17,
    "name": "Dr. Dipti Kakkar Thukral",
    "role": "Scientist G",
    "company": "Anusandhan National Research Foundation (ANRF)",
    "bio": "",
    "image": "/speakers/Dr. Dipti Kakkar Thukral.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 18,
    "name": "Prof. Dipankar Bandyopadhyay",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Guwahati",
    "bio": "",
    "image": "/speakers/Prof. Dipankar Bandyopadhyay.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 19,
    "name": "Ms. Dipanwita Ghosh",
    "role": "Head, GCC Transformation Consulting",
    "company": "Zinnov",
    "bio": "",
    "image": "/speakers/Ms. Dipanwita Ghosh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 20,
    "name": "Mr. Jai Shankar Sharma",
    "role": "Chairperson",
    "company": "Startup Master Class, IIT Kanpur Alumni Association",
    "bio": "",
    "image": "/speakers/Mr. Jai Shankar Sharma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 21,
    "name": "Prof. Jayant K. Singh",
    "role": "Former Dean & Professor",
    "company": "Indian Institute of Technology (IIT) Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Jayant K. Singh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 22,
    "name": "Prof. Jayati Sarkar",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Delhi",
    "bio": "",
    "image": "/speakers/Prof. Jayati Sarkar.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 23,
    "name": "Dr. Janhavi Raut",
    "role": "Director R&D",
    "company": "Unilever",
    "bio": "",
    "image": "/speakers/Dr. Janhavi Raut.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 24,
    "name": "Prof. Jitendra K. Bera",
    "role": "Dean & Professor, Faculty Affairs",
    "company": "IIT Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Jitendra K. Bera.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 25,
    "name": "Prof. Kajari Kargupta",
    "role": "Professor",
    "company": "Jadavpur University",
    "bio": "",
    "image": "/speakers/Prof. Kajari Kargupta.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 26,
    "name": "Prof. K. S. Gandhi",
    "role": "Emeritus Professor",
    "company": "Indian Institute of Science (IISc), Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. K. S. Gandhi.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 27,
    "name": "Dr. Kamalika Banerjee",
    "role": "",
    "company": "FAST-India",
    "bio": "",
    "image": "/speakers/Dr. Kamalika Banerjee.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 28,
    "name": "Dr. Kavinder Kumar",
    "role": "Former CEO",
    "company": "Atal Incubation Centre-JNUFI (NITI AAYOG)",
    "bio": "",
    "image": "/speakers/Dr. Kavinder Kumar.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 29,
    "name": "Dr. Manoj Gonuguntla",
    "role": "Senior Materials & Corrosion Engineer",
    "company": "Shell Technology, Bengaluru",
    "bio": "",
    "image": "/speakers/Dr. Manoj Gonuguntla.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 30,
    "name": "Prof. Marc Madou",
    "role": "Distinguished Professor Emeritus",
    "company": "UC Irvine",
    "bio": "",
    "image": "/speakers/Prof. Marc Madou.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 31,
    "name": "Dr. Meghendra Sharma",
    "role": "Prant Secretary",
    "company": "Vibha Rajasthan",
    "bio": "",
    "image": "/speakers/Dr. Meghendra Sharma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 32,
    "name": "Prof. Neera Sharma",
    "role": "Professor",
    "company": "Hindu College, University of Delhi",
    "bio": "",
    "image": "/speakers/Prof. Neera Sharma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 33,
    "name": "Ms. Nidhi Pandey",
    "role": "Architect",
    "company": "Interior Designer",
    "bio": "",
    "image": "/speakers/Ms. Nidhi Pandey.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 34,
    "name": "Prof. Nishant Chakravorty",
    "role": "Chairperson INYAS & Professor",
    "company": "Indian Institute of Technology (IIT) Kharagpur",
    "bio": "",
    "image": "/speakers/Prof. Nishant Chakravorty.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 35,
    "name": "Prof. Paras N. Prasad",
    "role": "SUNY Distinguished Professor",
    "company": "University at Buffalo, New York",
    "bio": "",
    "image": "/speakers/Prof. Paras N. Prasad.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 36,
    "name": "Prof. Partho S. G. Pattader",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Guwahati",
    "bio": "",
    "image": "/speakers/Prof. Partho S. G. Pattader.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 37,
    "name": "Mr. Praveen Roy",
    "role": "Advisor Head, Technology, Translation & Innovation (TTI)",
    "company": "DST",
    "bio": "",
    "image": "/speakers/Mr. Praveen Roy.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 38,
    "name": "Prof. Rabibrata Mukherjee",
    "role": "Professor & Dean, Research and Development",
    "company": "Indian Institute of Technology (IIT) Kharagpur",
    "bio": "",
    "image": "/speakers/Prof. Rabibrata Mukherjee.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 39,
    "name": "Prof. Rajendra S. Dhaka",
    "role": "Member, INYAS & Professor",
    "company": "Indian Institute of Technology (IIT) Delhi",
    "bio": "",
    "image": "/speakers/Prof. Rajendra S. Dhaka.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 40,
    "name": "Prof. Rajesh Khanna",
    "role": "Professor & Former Dean, Student Affairs",
    "company": "Indian Institute of Technology (IIT) Delhi",
    "bio": "",
    "image": "/speakers/Prof. Rajesh Khanna.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 41,
    "name": "Mr. Rajesh Kumar Ojha",
    "role": "Partner & GIC/GCC Market Segment Leader",
    "company": "PwC India",
    "bio": "",
    "image": "/speakers/Mr. Rajesh Kumar Ojha.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 42,
    "name": "Prof. Ramesh Chandra",
    "role": "Founder & Director",
    "company": "Dr. B. R. Ambedkar Centre for Biomedical Research, University of Delhi",
    "bio": "",
    "image": "/speakers/Prof. Ramesh Chandra.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 43,
    "name": "Mr. Ritesh Kumar",
    "role": "Country Leader & Senior Director",
    "company": "Wiley India",
    "bio": "",
    "image": "/speakers/Mr. Ritesh Kumar.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 44,
    "name": "Ms. Rouble Nagi",
    "role": "",
    "company": "Indian artist, Sculptures, Art installations, and Paintings",
    "bio": "",
    "image": "/speakers/Ms. Rouble Nagi.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 45,
    "name": "Prof. S. Pushpavanam",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Madras",
    "bio": "",
    "image": "/speakers/Prof. S. Pushpavanam.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 46,
    "name": "Prof. Sameer Jadhav",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Bombay",
    "bio": "",
    "image": "/speakers/Prof. Sameer Jadhav.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 47,
    "name": "Dr. Sangeeth S Pillai",
    "role": "Professor",
    "company": "Malaviya National Institute of Technology (MNIT), Jaipur",
    "bio": "",
    "image": "/speakers/Dr. Sangeeth S Pillai.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 48,
    "name": "Dr. Samiran Mahapatra",
    "role": "R&D Director, Science & Technology",
    "company": "Unilever",
    "bio": "",
    "image": "/speakers/Dr. Samiran Mahapatra.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 49,
    "name": "Prof. Satinder Sharma",
    "role": "Professor & Head, International Relations Division",
    "company": "Indian Institute of Technology (IIT) Mandi",
    "bio": "",
    "image": "/speakers/Prof. Satinder Sharma.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 50,
    "name": "Prof. Sandeep Sangal",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Sandeep Sangal.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 51,
    "name": "Prof. Shankar Narsimhan",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Madras",
    "bio": "",
    "image": "/speakers/Prof. Shankar Narsimhan.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 52,
    "name": "Dr. Sanjeev K. Varshney",
    "role": "Former Scientist G",
    "company": "Department of Science & Technology (DST)",
    "bio": "",
    "image": "/speakers/Dr. Sanjeev K. Varshney.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 53,
    "name": "Dr. Shashi Bhushan Pandey",
    "role": "Scientist-G",
    "company": "ANRF",
    "bio": "",
    "image": "/speakers/Dr. Shashi Bhushan Pandey.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 54,
    "name": "Prof. Shobha Shukla",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Bombay",
    "bio": "",
    "image": "/speakers/Prof. Shobha Shukla.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 55,
    "name": "Dr. Shweta Jha",
    "role": "Professor",
    "company": "Jodhpur University",
    "bio": "",
    "image": "/speakers/Dr. Shweta Jha.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 56,
    "name": "Dr. Shweta Singh",
    "role": "Chairperson",
    "company": "Council for Industrial and Innovation Research (CIIR)",
    "bio": "",
    "image": "/speakers/Dr. Shweta Singh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 57,
    "name": "Prof. Sirshendu De",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Kharagpur",
    "bio": "",
    "image": "/speakers/Prof. Sirshendu De.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 58,
    "name": "Ms. Smita P. Mishra",
    "role": "Founder & Managing Director",
    "company": "Fandoro Technologies Pvt. Ltd",
    "bio": "",
    "image": "/speakers/Ms. Smita P. Mishra.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 59,
    "name": "Prof. Spenta R. Wadia",
    "role": "Vice President, INSA & Founder Director",
    "company": "International Centre for Theoretical Sciences (ICTS)- TIFR, Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. Spenta R. Wadia.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 60,
    "name": "Prof. Suggala V. Satyanarayan",
    "role": "Professor",
    "company": "Jawaharlal Nehru Technological University (JNTUA), Anantapur",
    "bio": "",
    "image": "/speakers/Prof. Suggala V. Satyanarayan.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 61,
    "name": "Prof. Tharamani Vasanth",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Ropar",
    "bio": "",
    "image": "/speakers/Prof. Tharamani Vasanth.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 62,
    "name": "Prof. T. Pradeep",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Madras",
    "bio": "",
    "image": "/speakers/Prof. T. Pradeep.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 63,
    "name": "Prof. Tushar Deshpande",
    "role": "",
    "company": "Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU), Jalgaon",
    "bio": "",
    "image": "/speakers/Prof. Tushar Deshpande.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 64,
    "name": "Dr. Veda Krishnan",
    "role": "Secretary, INYAS & Scientist",
    "company": "Indian Council of Agricultural Research (ICAR)",
    "bio": "",
    "image": "/speakers/Dr. Veda Krishnan.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 65,
    "name": "Dr. Venkataramana Runkana",
    "role": "Chief Scientist",
    "company": "Tata Research Development and Design Centre (TRDDC), TCS",
    "bio": "",
    "image": "/speakers/Dr. Venkataramana Runkana.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 66,
    "name": "Mr. Vijay Parikh",
    "role": "Managing Director",
    "company": "Transcont (India) Finvest Pvt. Ltd.",
    "bio": "",
    "image": "/speakers/Mr. Vijay Parikh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 67,
    "name": "Mr. Vivek Gaur",
    "role": "Vice President, Engineering",
    "company": "Colt Technology Services",
    "bio": "",
    "image": "/speakers/Mr. Vivek Gaur.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  }


  //   {
  //   id: 1,
  //   name: "Prof. Dipankar Das Sarma",
  //   role: "Professor",
  //   company:
  //     "Indian Institute of Science (IISc), Bangalore",
  //   bio: "",
  //   image: "/dist/Prof. Dipankar Das Sarma.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  //  {
  //   id: 2,
  //   name: "Dr. Akhilesh Gupta",
  //   role: "Senior Adviser",
  //   company: "Department of Science and Technology (DST)",
  //   bio: "",
  //   image: "/committee/Dr. Akhilesh Gupta.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // {
  //   id: 3,
  //   name: "Prof. Abhijit Majumdar ",
  //   role: "Core Faculty Professor",
  //   company: "Indian Institute of Technology (IIT) Bombay",
  //   bio: "",
  //   image: "/dist/Prof, Abhijit Majumdar.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },
  // // {
  // //   id: 4,
  // //   name: "Dr. Jahnavi Raut",
  // //   role: "Principal Research Scientist",
  // //   company:"Unilever R&D",
  // //   bio: "",
  // //   image: "/dist/Dr. Jahnavi Raut.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },
  // {
  //   id: 5,
  //   name: "Dr. Venkataramana Runkana",
  //   role: "Chief Scientist",
  //   company: "Tata Research Development and Design Centre (TRDDC), Pune",
  //   bio: "",
  //   image: "/dist/Dr. Venkataramana Runkana.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 6,
  //   name: "Dr. Sanjay Behari",
  //   role: "Director",
  //   company: "Sree Chitra Institute, Thiruvananthapuram",
  //   bio: "",
  //   image: "/dist/Dr. Sanjay Behari.png",
  //   category: "",
  //   featured: true,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  
  // {
  //   id: 7,
  //   name: "Prof. Dipankar Bandyopadhyay",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Guwahati",
  //   bio: "",
  //   image: "/dist/Prof. Dipankar Bandyopadhyay.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 8,
  //   name: "Prof. Rabibrata Mukherjee",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kharagpur",
  //   bio: "",
  //   image: "/dist/Prof. Rabibrata Mukherjee.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // {
  //   id: 9,
  //   name: "Prof. Chandra Shekhar Sharma",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Hyderabad",
  //   bio: "",
  //   image: "/dist/Prof. Chandra Shekhar Sharma.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  

  // {
  //   id: 10,
  //   name: "Dr. Ankur Verma",
  //   role: "Associate Professor",
  //   company: "Indian Institute of Technology (IIT) BHU",
  //   bio: "",
  //   image: "/dist/Dr. Ankur Verma.png",
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
  //   name: "Prof. Rajesh Khanna",
  //   role: "Professor",
  //   company:"Indian Institute of Technology, Delhi",
  //   bio: "",
  //   image: "/dist/Prof. Rajesh Khanna.png",
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
  //   name: "Prof. Jayati Sarkar",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Delhi",
  //   bio: "",
  //   image: "/dist/Jayati-Sarkar.png",
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
  //   name: "Prof. Satinder Kumar Sharma",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Mandi",
  //   bio: "",
  //   image: "/dist/Prof. Satinder Kumar Sharma.png",
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
  //   name: "Dr. Manoj Gonuguntala",
  //   role: "Shell Technology Centre",
  //   company: "Bangalore",
  //   bio: "",
  //   image: "/dist/Dr Manoj Gonuguntla.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  

  // // {
  // //   id: 16,
  // //   name: "Prof Asish Garg",
  // //   role: "Professor",
  // //   company: "Indian Institute of Technology (IIT) Kanpur",
  // //   bio: "",
  // //   image: "/dist/Prof Asish Garg IIT Kanpur.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  

  // {
  //   id: 18,
  //   name: "Prof. Bushra Ateeq",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Kanpur",
  //   bio: "",
  //   image: "/dist/Prof. Bushra Ateeq.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  

  // // {
  // //   id: 20,
  // //   name: "Prof. Nitin Saxena",
  // //   role: "Professor",
  // //   company: "Indian Institute of Technology (IIT) Kanpur",
  // //   bio: "",
  // //   image: "/dist/Prof. Nitin Saxena.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  // // {
  // //   id: 21,
  // //   name: "Prof. Animangsu Ghatak",
  // //   role: "Professor",
  // //   company: "Indian Institute of Technology (IIT) Kanpur",
  // //   bio: "",
  // //   image: "/dist/Prof. Animangsu Ghatak.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  

  

  // // {
  // //   id: 24,
  // //   name: "Dr. Sanjeev Kumar Varshney",
  // //   role: "Former-Head",
  // //   company: "Department of Science & Technology (DST)",
  // //   bio: "",
  // //   image: "/dist/Dr Sanjeev Kumar Varshney.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },
  // // {
  // //   id: 25,
  // //   name: "Dr. Anita Gupta",
  // //   role: "Head of the Climate",
  // //   company: "Energy and Sustainable Technology (CEST), GoI",
  // //   bio: "",
  // //   image: "/dist/Dr Anita Gupta.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  // // {
  // //   id: 26,
  // //   name: "Dr. Nisha Mendiratta",
  // //   role: "Executive Director",
  // //   company: "Indo-U.S. Science & Technology Forum (IUSSTF)",
  // //   bio: "",
  // //   image: "/dist/Dr. Nisha Mendiratta.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  // {
  //   id: 27,
  //   name: "Shri Vishvajit Sahay",
  //   role: "Additional Secretary & Financial Adviser",
  //   company: "Department of Science & Technology (DST)",
  //   bio: "",
  //   image: "/dist/Vishvajit Sahay.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // },

  // // {
  // //   id: 28,
  // //   name: "Shri Rajesh Kumar Pathak",
  // //   role: "Civil Service Officer of IP&TAFS Cadre",
  // //   company: "TDB & Secretary",
  // //   bio: "",
  // //   image: "/dist/Shri Rajesh Kumar Pathak.png",
  // //   category: "",
  // //   featured: false,
  // //   socials: {
  // //     twitter: "#",
  // //     linkedin: "#",
  // //     website: "#",
  // //   },
  // // },

  // {
  //   id: 29,
  //   name: "Prof Shobha Shukla",
  //   role: "Professor",
  //   company: "Indian Institute of Technology (IIT) Bombay",
  //   bio: "",
  //   image:
  //     "/dist/Prof. S. Shukla-Picsart.png",
  //   category: "",
  //   featured: false,
  //   socials: {
  //     twitter: "#",
  //     linkedin: "#",
  //     website: "#",
  //   },
  // }, 
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
