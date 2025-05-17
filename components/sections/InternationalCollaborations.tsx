"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe2,
  Users,
  Handshake,
  Building2,
  Network,
  Scale,
  FileText,
  GanttChartSquare,
  Building,
  Landmark,
  Globe,
  Flag,
  BookOpen,
  LineChart,
} from "lucide-react";

const COLLABORATIONS = [
  {
    title: "Cross-Border Tech Partnerships",
    icon: <Handshake className="w-12 h-12" />,
    description: "Fostering international collaboration in technology development",
    initiatives: [
      {
        name: "Research Exchange Programs",
        icon: <BookOpen className="w-6 h-6" />,
        description: "International research collaboration networks",
        stats: "50+ Countries Participating"
      },
      {
        name: "Joint Innovation Labs",
        icon: <Network className="w-6 h-6" />,
        description: "Shared facilities for collaborative research",
        stats: "25 Global Innovation Hubs"
      }
    ]
  },
  {
    title: "Global Tech Policy & Standards",
    icon: <Scale className="w-12 h-12" />,
    description: "Harmonizing technology policies across borders",
    initiatives: [
      {
        name: "Policy Frameworks",
        icon: <FileText className="w-6 h-6" />,
        description: "Unified approaches to tech regulation",
        stats: "30+ Policy Frameworks Developed"
      },
      {
        name: "Standards Development",
        icon: <GanttChartSquare className="w-6 h-6" />,
        description: "International technical standards",
        stats: "100+ Standards Implemented"
      }
    ]
  },
  {
    title: "Public-Private Partnerships",
    icon: <Building2 className="w-12 h-12" />,
    description: "Bridging government and industry collaboration",
    initiatives: [
      {
        name: "Innovation Funding",
        icon: <LineChart className="w-6 h-6" />,
        description: "Joint investment in tech development",
        stats: "$2B+ in Joint Funding"
      },
      {
        name: "Industry Consortiums",
        icon: <Building className="w-6 h-6" />,
        description: "Cross-sector technology alliances",
        stats: "75+ Active Consortiums"
      }
    ]
  },
  {
    title: "International Organizations",
    icon: <Landmark className="w-12 h-12" />,
    description: "Coordinating global tech initiatives",
    initiatives: [
      {
        name: "Policy Coordination",
        icon: <Globe className="w-6 h-6" />,
        description: "Harmonized technology governance",
        stats: "20+ Major Initiatives"
      },
      {
        name: "Development Programs",
        icon: <Flag className="w-6 h-6" />,
        description: "Technology capacity building",
        stats: "40+ Countries Supported"
      }
    ]
  }
];

const GLOBAL_STATS = [
  {
    value: "150+",
    label: "Partner Countries",
    description: "Global network of technology collaboration"
  },
  {
    value: "$50B+",
    label: "Joint Investments",
    description: "Combined public-private funding"
  },
  {
    value: "1000+",
    label: "Active Projects",
    description: "Ongoing international initiatives"
  },
  {
    value: "500+",
    label: "Policy Frameworks",
    description: "Harmonized technology standards"
  }
];

export default function InternationalCollaborations() {
  return (
    <section className="py-24 gradient-bg-international">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            International <span className="text-kesari">Collaborations</span> & Tech Diplomacy
          </h2>
          <p className="text-lg text-muted-foreground">
            Building bridges across borders to foster global technology innovation
            and harmonized policy frameworks.
          </p>
        </motion.div>

        {/* Global Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {GLOBAL_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-kesari mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLABORATIONS.map((collab, index) => (
            <motion.div
              key={collab.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="rounded-full bg-kesari/10 p-4 text-kesari mr-4">
                      {collab.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{collab.title}</h3>
                      <p className="text-muted-foreground">{collab.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {collab.initiatives.map((initiative, i) => (
                      <div
                        key={i}
                        className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="rounded-full bg-background p-2 text-kesari mr-3">
                            {initiative.icon}
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{initiative.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {initiative.description}
                            </p>
                            <Badge variant="secondary">
                              {initiative.stats}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-none bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary/20 p-4">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Join the Global Tech Community
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with international partners, participate in cross-border
                initiatives, and contribute to global technology development.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="default">
                  Explore Opportunities
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}