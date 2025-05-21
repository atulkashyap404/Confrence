import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Speakers from "@/components/sections/Speakers";
import Schedule from "@/components/sections/Schedule";
import Registration from "@/components/sections/Registration";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import InnovationEcosystem from "@/components/sections/InnovationEcosystem";
import Governance from "@/components/sections/Governance";
import FutureWork from "@/components/sections/FutureWork";
import SustainableInnovation from "@/components/sections/SustainableInnovation";
import InternationalCollaborations from "@/components/sections/InternationalCollaborations";
import ClosingSession from "@/components/sections/ClosingSession";
import SummitFormat from "@/components/sections/SummitFormat";
import SummitScope from "@/components/sections/SummitScope";
import SummitStream from "@/components/sections/SummitStream";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ClosingSession />
          <SummitScope />
          <SummitStream />
          <About />
          <InnovationEcosystem />
          <Governance />
          <FutureWork />
          <SustainableInnovation />
          <InternationalCollaborations />
          <SummitFormat />
          <Speakers />
          <Sponsors />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}