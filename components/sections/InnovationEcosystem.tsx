"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Rocket,
  LineChart,
  Globe,
  GraduationCap,
  Users,
  LightbulbIcon,
  Banknote,
  Scale,
  Building2,
  Network,
  BookOpen,
  Handshake
} from "lucide-react";

const SECTIONS = [
  {
    id: "startup",
    title: "Startup & Deep-Tech Innovation",
    description: "Accelerating growth through comprehensive policy support",
    topics: [
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "Policy Framework",
        content: "Strategic initiatives supporting deep-tech startups"
      },
      {
        icon: <LightbulbIcon className="w-6 h-6" />,
        title: "Innovation Support",
        content: "Resources and infrastructure for R&D"
      },
      {
        icon: <Network className="w-6 h-6" />,
        title: "Ecosystem Building",
        content: "Creating collaborative innovation networks"
      }
    ]
  },
  {
    id: "funding",
    title: "Funding & Investment Strategies",
    description: "Diverse funding channels for innovation",
    topics: [
      {
        icon: <Banknote className="w-6 h-6" />,
        title: "Venture Capital",
        content: "Strategic VC partnerships and investment"
      },
      {
        icon: <Building2 className="w-6 h-6" />,
        title: "Government Grants",
        content: "Public funding opportunities"
      },
      {
        icon: <LineChart className="w-6 h-6" />,
        title: "Private Funding",
        content: "Corporate investment and angel networks"
      }
    ]
  },
  {
    id: "scaling",
    title: "Scaling Innovation",
    description: "From prototype to global commercialization",
    topics: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Market Access",
        content: "International expansion strategies"
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: "Scale-up Support",
        content: "Resources for rapid growth"
      }
    ]
  },
  {
    id: "collaboration",
    title: "Academic & Industry Collaboration",
    description: "Strengthening research partnerships",
    topics: [
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Research Partnerships",
        content: "Joint R&D initiatives"
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Knowledge Transfer",
        content: "Technology commercialization"
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: "Industry Integration",
        content: "Applied research programs"
      }
    ]
  },
  {
    id: "panel",
    title: "Innovation Pitch Panel",
    description: "Aligning innovations with policy objectives",
    topics: [
      {
        icon: <Users className="w-6 h-6" />,
        title: "Expert Panel",
        content: "Feedback from industry leaders and policymakers"
      }
    ]
  }
];

export default function InnovationEcosystem() {
  return (
    <section className="py-24 gradient-bg-innovation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Innovation <span className="text-kesari">Ecosystem</span> & Entrepreneurship
          </h2>
          <p className="text-lg text-muted-foreground">
            Building bridges between startups, industry, academia, and policymakers
            to foster a thriving innovation ecosystem.
          </p>
        </motion.div>

        <Tabs defaultValue="startup" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <TabsTrigger value="startup">Startups</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
              <TabsTrigger value="scaling">Scaling</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
              <TabsTrigger value="panel">Panel</TabsTrigger>
            </TabsList>
          </div>

          {SECTIONS.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center mb-4">
                      {section.title}
                    </CardTitle>
                    <p className="text-center text-muted-foreground">
                      {section.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.topics.map((topic, index) => (
                        <motion.div
                          key={topic.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-all">
                            <CardContent className="p-6">
                              <div className="flex flex-col items-center text-center">
                                <div className="rounded-full bg-kesari/10 p-3 mb-4 text-kesari">
                                  {topic.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                  {topic.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {topic.content}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* <div className="mt-8 text-center">
                      <Button size="lg">
                        Learn More
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Join the Innovation Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with fellow innovators, investors, and industry leaders.
                Be part of the next wave of technological advancement.
              </p>
              <Button size="lg" variant="default">
                Get Involved
              </Button>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}