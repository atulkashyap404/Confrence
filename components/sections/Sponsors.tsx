import Image from "next/image";
import dbtLogo from "@/public/images/sponsors/Department of Biotechnology.png";
import dstLogo from "@/public/images/sponsors/Department of Science and Technology.jpg";
import espinLogo from "@/public/images/sponsors/E-spin Nanotech Pvt. Ltd..png";
import insaLogo from "@/public/images/sponsors/Indian National Science Academy.png";
import iariLogo from "@/public/images/sponsors/Indian_Agricultural_Research_Institute_.png";
import kentLogo from "@/public/images/sponsors/Kent RO.png";
import mnreLogo from "@/public/images/sponsors/ministry of new renewable energy.png";

export default function SponsorsSection() {
  const sponsors = [
    { src: dbtLogo, alt: "Department of Biotechnology" },
    { src: dstLogo, alt: "Department of Science and Technology" },
    { src: espinLogo, alt: "E-spin Nanotech Pvt. Ltd." },
    { src: insaLogo, alt: "Indian National Science Academy" },
    { src: iariLogo, alt: "Indian Agricultural Research Institute" },
    { src: kentLogo, alt: "Kent RO" },
    { src: mnreLogo, alt: "Ministry of New and Renewable Energy" },
  ];

  return (
    <section id="sponsors" className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">Our Sponsors</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background shadow-md rounded-xl p-4 flex items-center justify-center h-36 hover:shadow-lg transition-shadow"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                className="object-contain mx-auto"
                style={{ maxHeight: '80px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}









// import Image from "next/image";

// const sponsors = [
//   { src: "/image/sponsors/Department of Biotechnology.png", alt: "Department of Biotechnology" },
//   { src: "/image/sponsors/Department of Science and Technology.jpg", alt: "Department of Science and Technology" },
//   { src: "/image/sponsors/E-spin Nanotech Pvt. Ltd..png", alt: "E-spin Nanotech Pvt. Ltd." },
//   { src: "/image/sponsors/Indian National Science Academy.png", alt: "Indian National Science Academy" },
//   { src: "/image/sponsors/Indian_Agricultural_Research_Institute_.png", alt: "Indian Agricultural Research Institute" },
//   { src: "/image/sponsors/Kent RO.png", alt: "Kent RO" },
//   { src: "/image/sponsors/ministry of new renewable energy.png", alt: "Ministry of New and Renewable Energy" },
// ];

// export default function Sponsors() {
//   return (
//     <section id="sponsors" className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-kesari mb-10">Our Sponsors</h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
//           {sponsors.map((sponsor, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-background shadow-md rounded-xl p-4 flex items-center justify-center h-36 hover:shadow-lg transition-shadow"
//             >
//               <div className="relative w-full h-full max-h-24">
//                 <Image
//                   src={sponsor.src}
//                   alt={sponsor.alt}
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
