import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Speakers from "@/components/sections/Speakers";
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
import Schedule from "@/components/sections/Schedule";
import SummitScope from "@/components/sections/SummitScope";
import SummitStream from "@/components/sections/SummitStream";
import HowToReachPage from "@/components/sections/HowToReach";
import OrganizingCommittee from "@/components/sections/OrganizingCommittee";
import ContactUs from "@/components/sections/ContactUs";
import CountDown from "@/components/sections/CountDown";
import PlenarySpeakers from "@/components/sections/PlenarySpeakers";
import DistinguishedSpeaker from "@/components/sections/DistinguishedSpeaker";
import Accommodation from "@/components/sections/Accommodation";
import Direction from "@/components/sections/Direction"
import TripsSchedule from "@/components/sections/TripsSchedule"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ClosingSession />
          <CountDown />
          <SummitScope />
          
          {/* <SummitStream /> */}
          <Speakers />
          <PlenarySpeakers />
          <DistinguishedSpeaker />
          <OrganizingCommittee />
          
          
          
          
          <TripsSchedule/>
          {/* <Sponsors /> */}
          <HowToReachPage />
          <Accommodation/>
          <Direction />
          <ContactUs />


          {/* <About />
          <InnovationEcosystem />
          <Governance />
          <FutureWork />
          <SustainableInnovation />
          <InternationalCollaborations /> */}
          
          
          
          
          
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}