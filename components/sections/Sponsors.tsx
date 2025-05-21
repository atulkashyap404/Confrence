"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Sponsor data
const SPONSORS = {
  platinum: [
    {
      id: 1,
      name: "TechVision Labs",
      logo: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Industry leader in artificial intelligence and machine learning solutions.",
    },
    {
      id: 2,
      name: "FutureTech Inc.",
      logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Pioneering cloud infrastructure and next-generation computing platforms.",
    },
    {
      id: 3,
      name: "GlobalConnect",
      logo: "https://images.pexels.com/photos/11533228/pexels-photo-11533228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Building the networking infrastructure for tomorrow's connected world.",
    },
  ],
  gold: [
    {
      id: 4,
      name: "SecureNet Defense",
      logo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Comprehensive cybersecurity solutions for enterprise and government.",
    },
    {
      id: 5,
      name: "Quantum Frontiers",
      logo: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Advancing the capabilities of quantum computing for real-world applications.",
    },
    {
      id: 6,
      name: "Interface Innovators",
      logo: "https://images.pexels.com/photos/5702281/pexels-photo-5702281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Creating intuitive user experiences across digital platforms.",
    },
    {
      id: 7,
      name: "DataFlow Systems",
      logo: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Big data analytics and visualization tools for enterprise decision-making.",
    },
  ],
  silver: [
    {
      id: 8,
      name: "StartupBoost",
      logo: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Accelerator program supporting the next generation of tech entrepreneurs.",
    },
    {
      id: 9,
      name: "DevTools Pro",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Professional development tools and platforms for software engineers.",
    },
    {
      id: 10,
      name: "Connected Devices Inc.",
      logo: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "IoT solutions for smart homes, cities, and industrial applications.",
    },
    {
      id: 11,
      name: "Scale Systems",
      logo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Infrastructure scaling solutions for high-growth tech companies.",
    },
    {
      id: 12,
      name: "HealthTech Innovations",
      logo: "https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Technology solutions transforming healthcare delivery and outcomes.",
    },
    {
      id: 13,
      name: "EduTech Platform",
      logo: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Digital learning platforms making education more accessible globally.",
    },
  ],
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-muted/50 dark:bg-background">
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
          <p className="text-lg text-muted-foreground">
            TechConf 2025 is made possible thanks to our incredible sponsors.
            These organizations are at the forefront of technological innovation.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Sponsors</TabsTrigger>
              <TabsTrigger value="platinum">Platinum</TabsTrigger>
              <TabsTrigger value="gold">Gold</TabsTrigger>
              <TabsTrigger value="silver">Silver</TabsTrigger>
            </TabsList>
          </div>

          {/* All Sponsors Tab */}
          <TabsContent value="all">
            <div className="space-y-12">
              <SponsorTier
                title="Platinum Sponsors"
                sponsors={SPONSORS.platinum}
                columns={3}
                size="large"
              />
              <Separator />
              <SponsorTier
                title="Gold Sponsors"
                sponsors={SPONSORS.gold}
                columns={4}
                size="medium"
              />
              <Separator />
              <SponsorTier
                title="Silver Sponsors"
                sponsors={SPONSORS.silver}
                columns={6}
                size="small"
              />
            </div>
          </TabsContent>

          {/* Platinum Sponsors Tab */}
          <TabsContent value="platinum">
            <SponsorTier
              title="Platinum Sponsors"
              sponsors={SPONSORS.platinum}
              columns={3}
              size="large"
            />
          </TabsContent>

          {/* Gold Sponsors Tab */}
          <TabsContent value="gold">
            <SponsorTier
              title="Gold Sponsors"
              sponsors={SPONSORS.gold}
              columns={4}
              size="medium"
            />
          </TabsContent>

          {/* Silver Sponsors Tab */}
          <TabsContent value="silver">
            <SponsorTier
              title="Silver Sponsors"
              sponsors={SPONSORS.silver}
              columns={4}
              size="medium"
            />
          </TabsContent>
        </Tabs>

        {/* Become a Sponsor */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-background rounded-lg p-8 shadow-sm border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">
            Become a TechConf 2025 Sponsor
          </h3>
          <p className="text-muted-foreground mb-6">
            Showcase your brand to thousands of tech professionals and decision-makers.
            Our sponsorship packages offer high-visibility opportunities to connect
            with a targeted audience passionate about technology innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Brand Visibility</h4>
              <p className="text-sm text-muted-foreground">
                Prominent logo placement across event materials and digital platforms
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Lead Generation</h4>
              <p className="text-sm text-muted-foreground">
                Connect with qualified prospects and potential partners
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Thought Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Speaking opportunities and content collaboration
              </p>
            </div>
          </div>
          <Button size="lg">Download Sponsorship Prospectus</Button>
        </motion.div> */}
      </div>
    </section>
  );
}

interface SponsorTierProps {
  title: string;
  sponsors: {
    id: number;
    name: string;
    logo: string;
    description: string;
  }[];
  columns: number;
  size: "small" | "medium" | "large";
}

function SponsorTier({ title, sponsors, columns, size }: SponsorTierProps) {
  const getGridCols = () => {
    switch (columns) {
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      case 6:
        return "grid-cols-1 sm:grid-cols-3 lg:grid-cols-6";
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
  };

  const getImageHeight = () => {
    switch (size) {
      case "small":
        return "h-24";
      case "medium":
        return "h-36";
      case "large":
        return "h-48";
      default:
        return "h-36";
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className={`grid ${getGridCols()} gap-6`}>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 % 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`${getImageHeight()} w-full mb-4 overflow-hidden rounded-md`}>
                  <motion.img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">{sponsor.name}</h4>
                {size !== "small" && (
                  <p className="text-sm text-muted-foreground">
                    {sponsor.description}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}