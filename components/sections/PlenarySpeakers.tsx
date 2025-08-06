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
    "name": "Shri. Akhilesh Jha",
    "role": "Chief Controller of Accounts",
    "company": "Government of India",
    "bio": "",
    "image": "/speakers/Shri. Akhilesh Jha.jpg",
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
    "name": "Prof. Ajit K. Chaturvedi",
    "role": "Vice Chancellor",
    "company": "Banaras Hindu University (BHU) & Professor, IIT Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Ajit K. Chaturvedi.jpg",
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
    "name": "Dr. Ajit K. Shasany",
    "role": "Director",
    "company": "CSIR-National Botanical Research Institute (NBRI), Lucknow",
    "bio": "",
    "image": "/speakers/Dr. Ajit K. Shasany.jpg",
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
    "name": "Prof. Alok Dhawan",
    "role": "Director",
    "company": "Centre of BioMedical Research (CBMR), Lucknow",
    "bio": "",
    "image": "/speakers/Prof. Alok Dhawan.jpg",
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
    "name": "Dr. Alok Srivastava",
    "role": "Director General",
    "company": "National Test House (NTH), Government of India",
    "bio": "",
    "image": "/speakers/Dr. Alok Srivastava.jpg",
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
    "name": "Prof. Amit Patra",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) BHU",
    "bio": "",
    "image": "/speakers/Prof. Amit Patra.jpg",
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
    "name": "Prof. Aniruddha Pandit",
    "role": "Vice Chancellor",
    "company": "Institute of Chemical Technology (ICT), Mumbai",
    "bio": "",
    "image": "/speakers/Aniruddha Bhalchandra Pandit.jpg",
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
    "name": "Prof. Anil Kumar Tripathi",
    "role": "Director",
    "company": "Indian Institutes of Science Education and Research (IISER) Mohali",
    "bio": "",
    "image": "/speakers/Dr. Anil Kumar Tripathi.png",
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
    "name": "Prof. Annapurni Subramaniam",
    "role": "Director",
    "company": "Indian Institute of Astrophysics (IIA), Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. Annapurni Subramaniam.png",
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
    "name": "Dr. Anubhav Saxena",
    "role": "Chief R&D Officer",
    "company": "Pidilite Industries Ltd.",
    "bio": "",
    "image": "/speakers/Dr. Anubhav Saxena.jpg",
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
    "name": "Dr. Arvind C. Ranade",
    "role": "Director",
    "company": "National Innovation Foundation, Government of India",
    "bio": "",
    "image": "/speakers/Dr. Arvind C Ranade.jpg",
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
    "name": "Prof. Ashok K. Ganguli",
    "role": "Director",
    "company": "Indian Institutes of Science Education and Research (IISER) Berhampur",
    "bio": "",
    "image": "/speakers/Prof. Ashok Kumar Ganguli.jpg",
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
    "name": "Dr. Ashish Lele",
    "role": "Director",
    "company": "CSIR- National Chemical Laboratory (NCL), Pune",
    "bio": "",
    "image": "/speakers/Dr. Ashish Lele.jpg",
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
    "name": "Prof. Avinash Agrawal",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Jodhpur",
    "bio": "",
    "image": "/speakers/Avinash Kumar Agarwal.jpg",
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
    "name": "Prof. B. S. Murty",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Hyderabad",
    "bio": "",
    "image": "/speakers/Prof. B. S. Murty.jpg",
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
    "name": "Prof. Bhrigu Nath Singh",
    "role": "Vice Chancellor",
    "company": "Rajiv Gandhi National Aviation University, Amethi",
    "bio": "",
    "image": "/speakers/Prof. Bhrigu Nath Singh.png",
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
    "name": "Dr. Bineesha Payattati",
    "role": "Executive Director",
    "company": "International Institute of Waste Management (IIWM), Bengaluru",
    "bio": "",
    "image": "/speakers/Dr. Bineesha Payattati.png",
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
    "name": "Dr. Brajesh Pandey",
    "role": "Executive Director",
    "company": "Indian National Science Academy (INSA)",
    "bio": "",
    "image": "/speakers/Dr Brajesh Pandey .png",
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
    "name": "Dr. C. Anandharamakrishnan",
    "role": "Director",
    "company": "CSIR-National Institute for Interdisciplinary Science and Technology (NIIST), Thiruvananthapuram",
    "bio": "",
    "image": "/speakers/Dr. C. Anandharamakrishnan.jpg",
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
    "name": "Dr. Deeksha Gupta",
    "role": "Director-Global Strategy",
    "company": "American Chemical Society (ACS)",
    "bio": "",
    "image": "/speakers/Prof Deeksha Gupta.png",
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
    "name": "Prof. Dhirendra Katti",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Goa",
    "bio": "",
    "image": "/speakers/Prof. Dhirendra Katti.jpg",
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
    "name": "Mr. Dinesh Kumar Jain",
    "role": "Former Chief Secretary, Maharashtra, & Member",
    "company": "Lokpal, India",
    "bio": "",
    "image": "/speakers/Mr. Dinesh Kumar Jain.jpg",
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
    "name": "Prof. Diwan Singh Rawat",
    "role": "Vice Chancellor",
    "company": "Kumaun University, Nainital",
    "bio": "",
    "image": "/speakers/Prof. Diwan Singh Rawat.jpg",
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
    "name": "Prof. G. D. Yadav",
    "role": "Former Vice Chancellor",
    "company": "Institute of Chemical Technology (ICT), Mumbai",
    "bio": "",
    "image": "/speakers/G. D. Yadav.jpg",
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
    "name": "Prof. G. U. Kulkarni",
    "role": "Former President",
    "company": "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bengaluru",
    "bio": "",
    "image": "/speakers/Giridhar U Kulkarni.jpg",
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
    "name": "Prof. Gautam Biswas",
    "role": "Former Director",
    "company": "Indian Institute of Technology (IIT) Guwahati",
    "bio": "",
    "image": "/speakers/Prof. Gautam Biswas.png",
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
    "name": "Dr. Geetha Vani Rayasam",
    "role": "Head",
    "company": "CSIR-Human Resource Development Group (HRDG)",
    "bio": "",
    "image": "/speakers/Dr. Geetha Vani Rayasam.jpg",
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
    "name": "Prof. Gobardhan Das",
    "role": "Director",
    "company": "Indian Institutes of Science Education and Research (IISER) Bhopal",
    "bio": "",
    "image": "/speakers/prof gobardhan das.png",
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
    "name": "Prof. Indranil Manna",
    "role": "President",
    "company": "Indian National Academy of Engineering (INAE) & Vice Chancellor, BIT Mesra",
    "bio": "",
    "image": "/speakers/Indranil manna.jpg",
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
    "name": "Prof. K. N. Ganesh",
    "role": "SERB National Science Chair & Professor",
    "company": "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. K. N. Ganesh.jpg",
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
    "name": "Prof. Kalidindi N. Satyanarayana",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Tirupati",
    "bio": "",
    "image": "/speakers/Prof. Kalidindi N. Satyanarayana.jpg",
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
    "name": "Prof. Kamal K. Pant",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Roorkee",
    "bio": "",
    "image": "/speakers/Prof. Kamal K. Pant.jpg",
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
    "name": "Dr. Kingsuk Mukhopadhyay",
    "role": "Director",
    "company": "Defence Materials and Stores Research and Development Establishment (DMSRDE), Kanpur",
    "bio": "",
    "image": "/speakers/Dr. Kingsuk Mukhopadhyay.jpg",
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
    "name": "Dr. Koppillil Radhakrishnan",
    "role": "Former Chairperson, Board of Governors",
    "company": "IIT Kanpur & Former Chairman, Indian Space Research Organisation (ISRO)",
    "bio": "",
    "image": "/speakers/Dr. Koppillil Radhakrishnan.jpg",
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
    "name": "Mr. Kris Gopalakrishnan",
    "role": "Co-Founder",
    "company": "Infosys",
    "bio": "",
    "image": "/speakers/Mr. Kris Gopalakrishnan.jpg",
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
    "name": "Prof. Laxmidhar Behera",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Mandi",
    "bio": "",
    "image": "/speakers/Prof. Laxmidhar Behera.jpg",
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
    "name": "Lt. General (Retd.) Madhuri Kanitkar",
    "role": "Vice Chancellor",
    "company": "Maharashtra University of Health Sciences",
    "bio": "",
    "image": "/speakers/Lt. General (Retd.) Madhuri Kanitkar.jpg",
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
    "name": "Prof. Manoj Choudhary",
    "role": "Vice Chancellor",
    "company": "Gati Shakti Vishwavidyalaya, Vadodara",
    "bio": "",
    "image": "/speakers/Prof. Manoj Choudhary.jpg",
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
    "name": "Dr. Narayan D. Rao",
    "role": "Director (Research)",
    "company": "SRM University",
    "bio": "",
    "image": "/speakers/Dr. Narayan D. Rao.jpg",
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
    "name": "Prof. Narayana P. Padhy",
    "role": "Director",
    "company": "Malaviya National Institute of Technology (MNIT), Jaipur",
    "bio": "",
    "image": "/speakers/Narayana Prasad Padhy.jpg",
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
    "name": "Prof. Nitin Seth",
    "role": "Director",
    "company": "Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA), DST",
    "bio": "",
    "image": "/speakers/Prof. Nitin Seth.jpg",
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
    "name": "Shri. Pradeep Goyal",
    "role": "Founder Chairman & Managing Director",
    "company": "Pradeep Metals Ltd.",
    "bio": "",
    "image": "/speakers/Shri. Pradeep Goyal.png",
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
    "name": "Dr. R. Vijay",
    "role": "Director",
    "company": "International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), Hyderabad",
    "bio": "",
    "image": "/speakers/Dr. R. Vijay.jpg",
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
    "name": "Dr. Rabindra Mukhopadhyay",
    "role": "Director R&D",
    "company": "JK Tyres & Industries Ltd.",
    "bio": "",
    "image": "/speakers/Dr. Rabindra Mukhopadhyay.jpg",
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
    "name": "Prof. Rajat Moona",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Gandhinagar",
    "bio": "",
    "image": "/speakers/Prof. Rajat Moona.png",
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
    "name": "Prof. Rajiv Prakash",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Bhilai",
    "bio": "",
    "image": "/speakers/Prof. Rajiv Prakash.jpg",
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
    "name": "Prof. Rajeev Ahuja",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Ropar",
    "bio": "",
    "image": "/speakers/Prof. Rajeev Ahuja.jpg",
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
    "name": "Dr. Rajeev Kumar Dwivedi",
    "role": "Director",
    "company": "Technical Training & Research Centre (TTRC) (A DIVISION OF LOHIA CORP LTD)",
    "bio": "",
    "image": "/speakers/ Rajeev Kumar Dwivedi.jpg",
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
    "name": "Dr. Rohini Srivathsa",
    "role": "Chief Technology Officer (CTO)",
    "company": "Microsoft India & South Asia",
    "bio": "",
    "image": "/speakers/Dr. Rohini Srivathsa.jpg",
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
    "name": "Dr. Rupa Vasudevan",
    "role": "Co-Founder & Chancellor",
    "company": "B.E.S.T. Innovation University",
    "bio": "",
    "image": "/speakers/Dr. Rupa Vasudevan.jpg",
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
    "name": "Prof. Sri Niwas Singh",
    "role": "Director",
    "company": "Atal Bihari Vajpayee-Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior",
    "bio": "",
    "image": "/speakers/Prof. Sri Niwas Singh.jpg",
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
    "name": "Prof. Sachchida Nand Tripathi",
    "role": "Professor & Dean",
    "company": "Kotak School of Sustainability, Indian Institute of Technology Kanpur",
    "bio": "",
    "image": "/speakers/Prof. Sachchida Nand Tripathi.png",
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
    "name": "Prof. Sandeep Verma",
    "role": "Professor",
    "company": "Indian Institute of Technology (IIT) Kanpur & Former Secretary, SERB",
    "bio": "",
    "image": "/speakers/Prof. Sandeep Verma.png",
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
    "name": "Dr. Sanjay Behari",
    "role": "Director",
    "company": "Sree Chitra Institute, Thiruvananthapuram",
    "bio": "",
    "image": "/speakers/Dr. Sanjay Behari.jpg",
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
    "name": "Prof. Santanu Bhattacharya",
    "role": "Director",
    "company": "Indian Institutes of Science Education and Research (IISER) Tirupati",
    "bio": "",
    "image": "/speakers/Prof. Santanu Bhattacharya.jpg",
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
    "name": "Mr. Saurabh Srivastava",
    "role": "Founder Chairman",
    "company": "Indian Angel Networks & Co-Founder, NASSCOM",
    "bio": "",
    "image": "/speakers/Mr. Saurabh Srivastava.jpg",
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
    "name": "Prof. Satish K. Tripathi",
    "role": "President",
    "company": "University at Buffalo, New York",
    "bio": "",
    "image": "/speakers/Prof. Satish K. Tripathi.jpg",
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
    "name": "Prof. Shantanu Bhattacharya",
    "role": "Director",
    "company": "CSIR-Central Scientific Instruments Organisation (CSIO), Chandigarh",
    "bio": "",
    "image": "/speakers/Prof. Shantanu Bhattacharya.jpg",
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
    "name": "Prof. Shishir Sinha",
    "role": "Director General",
    "company": "Central Institute of Petrochemicals Engineering & Technology (CIPET)",
    "bio": "",
    "image": "/speakers/Prof. Shishir Sinha.jpg",
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
    "name": "Dr. Shivkumar Kalyanaraman",
    "role": "Chief Executive Officer (CEO)",
    "company": "Anusandhan National Research Foundation (ANRF)",
    "bio": "",
    "image": "/speakers/Dr. Shivkumar Kalyanaraman.jpg",
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
    "name": "Dr. Soumya Swaminathan",
    "role": "Former Chief Scientist",
    "company": "World Health Organization (WHO)",
    "bio": "",
    "image": "/speakers/Dr Soumya Swaminathan.png",
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
    "name": "Prof. Sunil S. Bhagwat",
    "role": "Director",
    "company": "Indian Institutes of Science Education and Research (IISER) Pune",
    "bio": "",
    "image": "/speakers/Prof. Sunil S. Bhagwat.jpg",
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
    "name": "Prof. Suhas Joshi",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Indore",
    "bio": "",
    "image": "/speakers/Prof. Suhas Joshi.jpg",
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
    "name": "Prof. Suman Chakraborty",
    "role": "Director",
    "company": "Indian Institute of Technology (IIT) Kharagpur",
    "bio": "",
    "image": "/speakers/Suman Chakraborty.jpg",
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
    "name": "Dr. Tripta Thakur",
    "role": "Director General",
    "company": "National Power Training Institute (NPTI), Govt. of India",
    "bio": "",
    "image": "/speakers/Dr. Tripta Thakur.png",
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
    "name": "Prof. Umesh Waghmare",
    "role": "President",
    "company": "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bengaluru",
    "bio": "",
    "image": "/speakers/Prof. Umesh Waghmare.jpg",
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
    "name": "Mr. Umakant Soni",
    "role": "Co-Founder & CEO",
    "company": "Artpark, Bangalore & Pi Ventures",
    "bio": "",
    "image": "/speakers/Mr. Umakant Soni.jpg",
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
    "name": "Dr. Upendra Kumar Singh",
    "role": "Director General",
    "company": "Soldier Support System (SSS), DRDO",
    "bio": "",
    "image": "/speakers/Dr. Upendra Kumar Singh.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 68,
    "name": "Prof. V. Ramgopal Rao",
    "role": "Group Vice-Chancellor",
    "company": "Birla Institute of Technology & Science (BITS) Pilani",
    "bio": "",
    "image": "/speakers/V. Ramgopal Rao.jpg",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  },
  {
    "id": 69,
    "name": "Prof. Vinod K. Singh",
    "role": "Institute Chair Professor",
    "company": "IIT Kanpur & Former Director, IISER Bhopal",
    "bio": "",
    "image": "/speakers/Prof. Vinod K. Singh.png",
    "category": "",
    "featured": false,
    "socials": {
      "twitter": "#",
      "linkedin": "#",
      "website": "#"
    }
  }


];

export default function PlenarySpeakers() {
  const [category, setCategory] = useState<string>("all");

  const filteredSpeakers =
    category === "all"
      ? SPEAKERS
      : SPEAKERS.filter((speaker) => speaker.category === category);

  const featuredSpeakers = SPEAKERS.filter((speaker) => speaker.featured);

  return (
    <section id="speakers" className="py-18 bg-muted pt-4 pb-4">
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
