import Image from "next/image";

const sponsors = [
  { src: "/sponsors/Department of Biotechnology.png", alt: "Department of Biotechnology" },
  { src: "/sponsors/Department of Science and Technology.jpg", alt: "Department of Science and Technology" },
  { src: "/sponsors/E-spin Nanotech Pvt. Ltd..png", alt: "E-spin Nanotech Pvt. Ltd." },
  { src: "/sponsors/Indian National Science Academy.png", alt: "Indian National Science Academy" },
  { src: "/sponsors/Indian_Agricultural_Research_Institute_.png", alt: "Indian Agricultural Research Institute" },
  { src: "/sponsors/Kent RO.png", alt: "Kent RO" },
  { src: "/sponsors/ministry of new renewable energy.png", alt: "Ministry of New and Renewable Energy" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-kesari mb-10">Our Sponsors</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background shadow-md rounded-xl p-4 flex items-center justify-center h-36 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-full max-h-24">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
