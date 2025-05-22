// app/sponsors/page.tsx
import Image from 'next/image';

const sponsorLogos = [
  'Department of Biotechnology.png',
  'Department of Science and Technology.jpg',
  'E-spin Nanotech Pvt. Ltd..png',
  'Indian National Science Academy.png',
  'Indian_Agricultural_Research_Institute_.png',
  'Kent RO.png',
  'ministry of new renewable energy.png',
  // Add your image filenames here
];

export default function Sponsors() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Our Sponsors</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="w-32 h-32 relative">
            <Image
              src={`/sponsors/${logo}`}
              alt={`Sponsor ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
