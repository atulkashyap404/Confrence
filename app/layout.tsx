import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'TRIPS 2025 – TECHNOLOGY, RESEARCH,INNOVATION, AND POLICY SUMMIT',
  description:
    'A warm welcome to the Technology, Research, Innovation, and Policy Summit. With the theme “Bridging Research, Innovation, and Policy for a Sustainable Future,” we are honored to host this gathering of brilliant minds from across the STEM community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ✅ Manual <head> for favicon */}
      <head>
        <link rel="icon" href="/android-chrome-512x512.png" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}








// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter, Poppins } from 'next/font/google';
// import { Analytics } from '@vercel/analytics/next';
// import { SpeedInsights } from '@vercel/speed-insights/next';


// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

// const poppins = Poppins({ 
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--font-poppins',
// });

// export const metadata: Metadata = {
//   title: 'TRIPS 2025 – TECHNOLOGY, RESEARCH,INNOVATION, AND POLICY SUMMIT',
  
//   description: 'A warm welcome to the Technology, Research, Innovation, and Policy Summit. With the theme “Bridging Research, Innovation, and Policy for a Sustainable Future,” we are honored to host this gathering of brilliant minds from across the STEM community.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}
//         <Analytics />
//         <SpeedInsights />
//       </body>
      
//     </html>
//   );
// }