"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SPONSORS = [
  // Partners
  {
    id: 1,
    name: "C3i hub",
    image: "/Sponsors/C3i hub.png",
    category: "Partners",
  },
  {
    id: 2,
    name: "Kotak School of Sustainability",
    image: "/Sponsors/Kotak school of sustainibility.png",
    category: "Partners",
  },
  {
    id: 3,
    name: "Centre for Nanosciences",
    image: "/Sponsors/Centre for Nanosciences.jpg",
    category: "Partners",
  },
  {
    id: 4,
    name: "E-spin Nanotech Pvt. Ltd.",
    image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
    category: "Partners",
  },

  // Government Sponsors

  {
    id: 7,
    name: "Indian National Science Academy (INSA)",
    image: "/Sponsors/Indian National Science Academy.png",
    category: "Government Sponsors",
  },
  {
    id: 7,
    name: "Bharatiya Engineering Science & Technology Innovation University (BESTIU)",
    image: "/Sponsors/BEST University.png",
    category: "Government Sponsors",
  },
  {
    id: 5,
    name: "Department of Biotechnology (DBT)",
    image: "/Sponsors/Department of Biotechnology.png",
    category: "Government Sponsors",
  },
  {
    id: 6,
    name: "Department of Science and Technology (DST)",
    image: "/Sponsors/Department of Science and Technology.jpg",
    category: "Government Sponsors",
  },
  
  {
    id: 8,
    name: "Indian Agricultural Research Institute (IARI)",
    image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
    category: "Government Sponsors",
  },
  {
    id: 9,
    name: "Ministry of New Renewable Energy",
    image: "/Sponsors/ministry of new renewable energy.png",
    category: "Government Sponsors",
  },
  {
    id: 10,
    name: "Ministry of Jal Shakti",
    image: "/Sponsors/Ministry of Jal Shakti.png",
    category: "Government Sponsors",
  },
  {
    id: 11,
    name: "Defence Research and Development Organisation (DRDO)",
    image: "/Sponsors/Defence Research and Development Organisatio.png",
    category: "Government Sponsors",
  },
  {
    id: 12,
    name: "Council of Scientific and Industrial Research (CSIR)",
    image: "/Sponsors/CSIR.jpg",
    category: "Government Sponsors",
  },
  {
    id: 13,
    name: "National Test House (NTH)",
    image: "/Sponsors/National Test House.jpg",
    category: "Government Sponsors",
  },
  {
    id: 14,
    name: "National Bank For Agriculture And Rural Development (NABARD)",
    image: "/Sponsors/NABARD.png",
    category: "Government Sponsors",
  },
  {
    id: 14,
    name: "International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI)",
    image: "/Sponsors/ARCI.png",
    category: "Government Sponsors",
  },

  // Industry Sponsors
  {
    id: 14,
    name: "American Chemical Society (ACS)",
    image: "/Sponsors/ACS.png",
    category: "Industry Sponsors",
  },
  {
    id: 15,
    name: "Kent RO",
    image: "/Sponsors/Kent RO.png",
    category: "Industry Sponsors",
  },
  {
    id: 16,
    name: "Carl Zeiss",
    image: "/Sponsors/zeiss.png",
    category: "Industry Sponsors",
  },
  {
    id: 17,
    name: "Anton Paar India Pvt. Ltd.",
    image: "/Sponsors/Anton Paar.jpg",
    category: "Industry Sponsors",
  },
  {
    id: 18,
    name: "Anarghya Innovations and Technology Pvt. Ltd.",
    image: "/Sponsors/Anarghya Innovations and Technology.png",
    category: "Industry Sponsors",
  },

  // Digital & Media Partners
  {
    id: 16,
    name: "Gaatha",
    image: "/Sponsors/Media partners.jpeg",
    category: "Digital & Media Partners",
  },
  // {
  //   id: 17,
  //   name: "Dainik Jagran",
  //   image: "/Sponsors/Dainik Jagran.png",
  //   category: "Digital & Media Partners",
  // },
  // {
  //   id: 18,
  //   name: "Hindustan Times",
  //   image: "/Sponsors/Hindustan Times.png",
  //   category: "Digital & Media Partners",
  // },
];

const categories = [
  "Partners",
  "Government Sponsors",
  "Industry Sponsors",
  "Digital & Media Partners",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-muted">
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
        </motion.div>

        {categories.map((cat) => {
          const sponsorsInCategory = SPONSORS.filter((s) => s.category === cat);
          const isCentered =
            cat === "Industry Sponsors" || cat === "Digital & Media Partners";
          const gridCols =
            cat === "Digital & Media Partners"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-1"
              : cat === "Industry Sponsors"
              ? "grid-cols-3 sm:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

          return (
            <div key={cat} className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center text-kesari">{cat}</h3>
              <div className="flex justify-center">
                <div className={`grid gap-6 ${gridCols}`}>
                  {sponsorsInCategory.map((sponsor, index) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface Sponsor {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

function SponsorCard({ sponsor, index }: SponsorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index * 0.1) % 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="p-0">
          <div className="h-48 w-full relative bg-white">
            <motion.img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-2 text-center text-kesari">
          <CardTitle className="text-lg font-bold">
            {sponsor.name}
          </CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  );
}





// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const SPONSORS = [
//   // Partners
//   {
//     id: 1,
//     name: "C3i hub",
//     image: "/Sponsors/C3i hub.png",
//     category: "Partners",
//   },
//   {
//     id: 2,
//     name: "Kotak School of Sustainability",
//     image: "/Sponsors/Kotak school of sustainibility.png",
//     category: "Partners",
//   },
//   {
//     id: 3,
//     name: "Centre for Nanosciences",
//     image: "/Sponsors/Centre for Nanosciences.jpg",
//     category: "Partners",
//   },
//   {
//     id: 4,
//     name: "E-spin Nanotech Pvt. Ltd.",
//     image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
//     category: "Partners",
//   },

//   // Government Sponsors
//   {
//     id: 5,
//     name: "Department of Biotechnology (DBT)",
//     image: "/Sponsors/Department of Biotechnology.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 6,
//     name: "Department of Science and Technology (DST)",
//     image: "/Sponsors/Department of Science and Technology.jpg",
//     category: "Government Sponsors",
//   },
//   {
//     id: 7,
//     name: "Indian National Science Academy (INSA)",
//     image: "/Sponsors/Indian National Science Academy.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 8,
//     name: "Indian Agricultural Research Institute (IARI)",
//     image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 9,
//     name: "Ministry of New Renewable Energy",
//     image: "/Sponsors/ministry of new renewable energy.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 10,
//     name: "Ministry of Jal Shakti",
//     image: "/Sponsors/Ministry of Jal Shakti.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 11,
//     name: "Defence Research and Development Organisation (DRDO)",
//     image: "/Sponsors/Defence Research and Development Organisatio.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 12,
//     name: "Council of Scientific and Industrial Research (CSIR)",
//     image: "/Sponsors/CSIR.jpg",
//     category: "Government Sponsors",
//   },
//   {
//     id: 13,
//     name: "National Test House (NTH)",
//     image: "/Sponsors/National Test House.jpg",
//     category: "Government Sponsors",
//   },

//   // Industry Sponsors
//   {
//     id: 14,
//     name: "American Chemical Society (ACS)",
//     image: "/Sponsors/ACS.png",
//     category: "Industry Sponsors",
//   },
//   {
//     id: 15,
//     name: "Kent RO",
//     image: "/Sponsors/Kent RO.png",
//     category: "Industry Sponsors",
//   },

//   // Digital Media Partners
//   {
//     id: 16,
//     name: "Gaatha",
//     image: "/Sponsors/Media partners.jpeg",
//     category: "Digital Media Partners",
//   },
//   {
//     id: 17,
//     name: "Dainik Jagran",
//     image: "/Sponsors/Dainik Jagran.png",
//     category: "Digital Media Partners",
//   },
//   {
//     id: 18,
//     name: "Hindustan Times",
//     image: "/Sponsors/Hindustan Times.png",
//     category: "Digital Media Partners",
//   },
// ];

// const categories = [
//   "Partners",
//   "Government Sponsors",
//   "Industry Sponsors",
//   "Digital Media Partners",
// ];

// export default function Sponsors() {
//   return (
//     <section id="sponsors" className="py-24 bg-muted">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Our <span className="text-kesari">Sponsors</span>
//           </h2>
//         </motion.div>

//         {categories.map((cat) => {
//           const sponsorsInCategory = SPONSORS.filter((s) => s.category === cat);
//           const isCenteredCategory =
//             cat === "Industry Sponsors" || cat === "Digital Media Partners";

//           return (
//             <div key={cat} className="mb-16">
//               <h3 className="text-2xl font-semibold mb-6 text-center">{cat}</h3>
//               <div className="flex justify-center">
//                 <div
//                   className={`grid gap-6 ${
//                     isCenteredCategory
//                       ? "grid-cols-1 sm:grid-cols-2"
//                       : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//                   }`}
//                 >
//                   {sponsorsInCategory.map((sponsor, index) => (
//                     <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// interface Sponsor {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
// }

// interface SponsorCardProps {
//   sponsor: Sponsor;
//   index: number;
// }

// function SponsorCard({ sponsor, index }: SponsorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: (index * 0.1) % 0.4 }}
//       viewport={{ once: true }}
//     >
//       <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
//         <CardHeader className="p-0">
//           <div className="h-48 w-full relative bg-white">
//             <motion.img
//               src={sponsor.image}
//               alt={sponsor.name}
//               className="w-full h-full object-contain"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="pt-6 pb-2 text-center">
//           <CardTitle className="text-lg font-semibold">
//             {sponsor.name}
//           </CardTitle>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const SPONSORS = [
//   // PARTNERS
//   {
//     id: 1,
//     name: "C3i hub",
//     image: "/Sponsors/C3i hub.png",
//     category: "partners",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Kotak School of Sustainability",
//     image: "/Sponsors/Kotak school of sustainibility.png",
//     category: "partners",
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Centre for Nanosciences",
//     image: "/Sponsors/Centre for Nanosciences.jpg",
//     category: "partners",
//     featured: true,
//   },
//   {
//     id: 4,
//     name: "E-spin Nanotech Pvt. Ltd.",
//     image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
//     category: "partners",
//     featured: true,
//   },

//   // GOVERNMENT
//   {
//     id: 5,
//     name: "Department of Biotechnology (DBT)",
//     image: "/Sponsors/Department of Biotechnology.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 6,
//     name: "Department of Science and Technology (DST)",
//     image: "/Sponsors/Department of Science and Technology.jpg",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 7,
//     name: "Indian National Science Academy (INSA)",
//     image: "/Sponsors/Indian National Science Academy.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 8,
//     name: "Indian Agricultural Research Institute (IARI)",
//     image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 9,
//     name: "Ministry of New Renewable Energy",
//     image: "/Sponsors/ministry of new renewable energy.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 10,
//     name: "Ministry of Jal Shakti",
//     image: "/Sponsors/Ministry of Jal Shakti.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 11,
//     name: "Defence Research and Development Organisation (DRDO)",
//     image: "/Sponsors/Defence Research and Development Organisatio.png",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 12,
//     name: "Council of Scientific and Industrial Research (CSIR)",
//     image: "/Sponsors/CSIR.jpg",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 13,
//     name: "National Test House (NTH)",
//     image: "/Sponsors/National Test House.jpg",
//     category: "government",
//     featured: true,
//   },
//   {
//     id: 14,
//     name: "National Bank For Agriculture And Rural Development (NABARD)",
//     image: "/Sponsors/NABARD.png",
//     category: "government",
//     featured: true,
//   },

//   // INDUSTRY
//   {
//     id: 14,
//     name: "American Chemical Society (ACS)",
//     image: "/Sponsors/ACS.png",
//     category: "industry",
//     featured: true,
//   },
//   {
//     id: 15,
//     name: "Kent RO",
//     image: "/Sponsors/Kent RO.png",
//     category: "industry",
//     featured: true,
//   },

//   // DIGITAL MEDIA
//   {
//     id: 16,
//     name: "Gaatha",
//     image: "/Sponsors/Media partners.jpeg",
//     category: "media",
//     featured: true,
//   },
//   {
//     id: 17,
//     name: "Dainik Jagran",
//     image: "/Sponsors/Dainik Jagran.png",
//     category: "media",
//     featured: true,
//   },
//   {
//     id: 18,
//     name: "Hindustan Times",
//     image: "/Sponsors/Hindustan Times.png",
//     category: "media",
//     featured: true,
//   },
// ];

// export default function Sponsors() {
//   const [category, setCategory] = useState<string>("partners");

//   const filteredSponsors = SPONSORS.filter(
//     (sponsor) => sponsor.category === category
//   );

//   return (
//     <section id="sponsors" className="py-24 bg-muted">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Our <span className="text-kesari">Sponsors</span>
//           </h2>
//         </motion.div>

//         <Tabs defaultValue="partners" value={category} onValueChange={setCategory}>
//           <TabsList className="flex flex-wrap justify-center gap-4 mb-8">
//             <TabsTrigger value="partners">Partners</TabsTrigger>
//             <TabsTrigger value="government">Government Sponsors</TabsTrigger>
//             <TabsTrigger value="industry">Industry Sponsors</TabsTrigger>
//             <TabsTrigger value="media">Digital Media Partners</TabsTrigger>
//           </TabsList>

//           <TabsContent value={category}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//             >
//               {filteredSponsors.map((sponsor, index) => (
//                 <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
//               ))}
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// }

// interface Sponsor {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
//   featured: boolean;
// }

// interface SponsorCardProps {
//   sponsor: Sponsor;
//   index: number;
// }

// function SponsorCard({ sponsor, index }: SponsorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 % 0.4 }}
//       viewport={{ once: true }}
//     >
//       <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
//         <CardHeader className="p-0">
//           <div className="h-48 w-full relative bg-white">
//             <motion.img
//               src={sponsor.image}
//               alt={sponsor.name}
//               className="w-full h-full object-contain"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="pt-6 pb-2 text-center">
//           <CardTitle className="text-lg font-semibold">{sponsor.name}</CardTitle>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }






// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const SPONSORS = [
//   // Partners
//   {
//     id: 1,
//     name: "C3i hub",
//     image: "/Sponsors/C3i hub.png",
//     category: "Partners",
//   },
//   {
//     id: 2,
//     name: "Kotak School of Sustainability",
//     image: "/Sponsors/Kotak school of sustainibility.png",
//     category: "Partners",
//   },
//   {
//     id: 3,
//     name: "Centre for Nanosciences",
//     image: "/Sponsors/Centre for Nanosciences.jpg",
//     category: "Partners",
//   },
//   {
//     id: 4,
//     name: "E-spin Nanotech Pvt. Ltd.",
//     image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
//     category: "Partners",
//   },

//   // Government Sponsors
//   {
//     id: 5,
//     name: "Department of Biotechnology (DBT)",
//     image: "/Sponsors/Department of Biotechnology.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 6,
//     name: "Department of Science and Technology (DST)",
//     image: "/Sponsors/Department of Science and Technology.jpg",
//     category: "Government Sponsors",
//   },
//   {
//     id: 7,
//     name: "Indian National Science Academy (INSA)",
//     image: "/Sponsors/Indian National Science Academy.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 8,
//     name: "Indian Agricultural Research Institute (IARI)",
//     image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 9,
//     name: "Ministry of New Renewable Energy",
//     image: "/Sponsors/ministry of new renewable energy.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 10,
//     name: "Ministry of Jal Shakti",
//     image: "/Sponsors/Ministry of Jal Shakti.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 11,
//     name: "Defence Research and Development Organisation (DRDO)",
//     image: "/Sponsors/Defence Research and Development Organisatio.png",
//     category: "Government Sponsors",
//   },
//   {
//     id: 12,
//     name: "Council of Scientific and Industrial Research (CSIR)",
//     image: "/Sponsors/CSIR.jpg",
//     category: "Government Sponsors",
//   },
//   {
//     id: 13,
//     name: "National Test House (NTH)",
//     image: "/Sponsors/National Test House.jpg",
//     category: "Government Sponsors",
//   },

//   // Industry Sponsors
//   {
//     id: 14,
//     name: "American Chemical Society (ACS)",
//     image: "/Sponsors/ACS.png",
//     category: "Industry Sponsors",
//   },
//   {
//     id: 15,
//     name: "Kent RO",
//     image: "/Sponsors/Kent RO.png",
//     category: "Industry Sponsors",
//   },

//   // Digital Media Partners
//   {
//     id: 16,
//     name: "Gaatha",
//     image: "/Sponsors/Media partners.jpeg",
//     category: "Digital Media Partners",
//   },
//   {
//     id: 17,
//     name: "Dainik Jagran",
//     image: "/Sponsors/Dainik Jagran.png",
//     category: "Digital Media Partners",
//   },
//   {
//     id: 18,
//     name: "Hindustan Times",
//     image: "/Sponsors/Hindustan Times.png",
//     category: "Digital Media Partners",
//   },
// ];

// const categories = [
//   "Partners",
//   "Government Sponsors",
//   "Industry Sponsors",
//   "Digital Media Partners",
// ];

// export default function Sponsors() {
//   return (
//     <section id="sponsors" className="py-24 bg-muted">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Our <span className="text-kesari">Sponsors</span>
//           </h2>
//         </motion.div>

//         {categories.map((cat) => {
//           const sponsorsInCategory = SPONSORS.filter((s) => s.category === cat);
//           return (
//             <div key={cat} className="mb-16">
//               <h3 className="text-2xl font-semibold mb-6 text-center">{cat}</h3>
//               <div className="flex justify-center">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {sponsorsInCategory.map((sponsor, index) => (
//                   <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
//                 ))}
//               </div>
//             </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// interface Sponsor {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
// }

// interface SponsorCardProps {
//   sponsor: Sponsor;
//   index: number;
// }

// function SponsorCard({ sponsor, index }: SponsorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: (index * 0.1) % 0.4 }}
//       viewport={{ once: true }}
//     >
//       <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
//         <CardHeader className="p-0">
//           <div className="h-48 w-full relative bg-white">
//             <motion.img
//               src={sponsor.image}
//               alt={sponsor.name}
//               className="w-full h-full object-contain"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="pt-6 pb-2 text-center">
//           <CardTitle className="text-lg font-semibold">
//             {sponsor.name}
//           </CardTitle>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }









// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // Speaker data
// const SPEAKERS = [
//   {
//     id: 1,
//     name: "Department of Biotechnology",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Department of Biotechnology.png",
//     category: "",
//     featured: true,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 2,
//     name: "Department of Science and Technology",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Department of Science and Technology.jpg",
//     category: "",
//     featured: false,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 3,
//     name: "E-spin Nanotech Pvt. Ltd.",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/E-spin Nanotech Pvt. Ltd.jpg",
//     category: "",
//     featured: true,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 4,
//     name: "Indian National Science Academy",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Indian National Science Academy.png",
//     category: "",
//     featured: false,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 5,
//     name: "Indian Agricultural Research Institute",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Indian_Agricultural_Research_Institute_.png",
//     category: "",
//     featured: true,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 6,
//     name: "Kent RO",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Kent RO.png",
//     category: "",
//     featured: false,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 7,
//     name: "Ministry of New Renewable Energy",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/ministry of new renewable energy.png",
//     category: "",
//     featured: false,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
//   {
//     id: 8,
//     name: "Media partners",
//     role: "",
//     company: "",
//     bio: "",
//     image: "/Sponsors/Media partners.jpeg",
//     category: "",
//     featured: false,
//     socials: {
//       twitter: "#",
//       linkedin: "#",
//       website: "#",
//     },
//   },
 

// ];

// export default function Speakers() {
//   const [category, setCategory] = useState<string>("all");
  
//   const filteredSpeakers = category === "all" 
//     ? SPEAKERS 
//     : SPEAKERS.filter(speaker => speaker.category === category);
  
//   const featuredSpeakers = SPEAKERS.filter(speaker => speaker.featured);
  
//   return (
//     <section id="sponsors" className="py-24 bg-muted">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//             Our <span className="text-kesari">Sponsors</span>
//           </h2>
//           {/* <p className="text-lg text-muted-foreground">
//             Learn from industry pioneers and thought leaders who are shaping the
//             future of technology across various domains.
//           </p> */}
//         </motion.div>
        
       
        
//         {/* All Speakers */}
//         <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
          
          
//           <TabsContent value={category}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//             >
//               {filteredSpeakers.map((speaker, index) => (
//                 <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
//               ))}
//             </motion.div>
//           </TabsContent>
//         </Tabs>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// interface Speaker {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
//   featured: boolean;
// }

// interface SpeakerCardProps {
//   speaker: Speaker;
//   index: number;
// }

// function SpeakerCard({ speaker, index }: SpeakerCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 % 0.4 }}
//       viewport={{ once: true }}
//     >
//       <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
//         <CardHeader className="p-0">
//           <div className="h-48 w-full relative">
//             <motion.img
//               src={speaker.image}
//               alt={speaker.name}
//               className="w-full h-full object-contain"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="pt-6 pb-2">
//           <CardTitle className="text-lg font-semibold mb-1">
//             {speaker.name}
//           </CardTitle>
          
//         </CardContent>
        
//       </Card>
//     </motion.div>
//   );
// }

