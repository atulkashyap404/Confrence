"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Scale,
  Shield,
  Leaf,
  Lightbulb,
  Users,
  FileText,
  Lock,
  Globe,
  BookOpen,
  ScrollText
} from "lucide-react";

const SECTIONS = [
  {
    id: "policy",
    title: "Technology Policy Frameworks",
    description: "Strategic approaches to balance innovation and regulation",
    topics: [
      {
        icon: <Scale className="w-6 h-6" />,
        title: "Regulatory Balance",
        content: "Frameworks for responsible innovation"
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Standards",
        content: "International policy harmonization"
      },
      {
        icon: <FileText className="w-6 h-6" />,
        title: "Compliance Guidelines",
        content: "Implementation strategies for tech policies"
      }
    ]
  },
  {
    id: "privacy",
    title: "Data Privacy & Cybersecurity",
    description: "Evolving standards for data protection and security",
    topics: [
      {
        icon: <Lock className="w-6 h-6" />,
        title: "Privacy Standards",
        content: "Global data protection frameworks"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Security Protocols",
        content: "Advanced cybersecurity measures"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "User Rights",
        content: "Individual data sovereignty"
      }
    ]
  },
  {
    id: "sustainability",
    title: "Climate Tech Policies",
    description: "Policy frameworks for sustainable technology",
    topics: [
      {
        icon: <Leaf className="w-6 h-6" />,
        title: "Green Tech Standards",
        content: "Environmental impact guidelines"
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Initiatives",
        content: "International climate tech cooperation"
      }
    ]
  },
  {
    id: "ip",
    title: "Intellectual Property Rights",
    description: "Protection and management of tech innovations",
    topics: [
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Patent Frameworks",
        content: "Innovation protection strategies"
      },
      {
        icon: <ScrollText className="w-6 h-6" />,
        title: "IP Management",
        content: "Rights and licensing guidelines"
      }
    ]
  },
  {
    id: "panel",
    title: "Policy Recommendations",
    description: "Expert insights on emerging tech policies",
    topics: [
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Future Directions",
        content: "Strategic policy development"
      }
    ]
  }
];

export default function Governance() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Governance & <span className="text-kesari">Regulation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Exploring the intersection of technology innovation and regulatory frameworks
            to ensure responsible and sustainable development.
          </p>
        </motion.div>

        <Tabs defaultValue="policy" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <TabsTrigger value="policy">Policy</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="sustainability">Climate</TabsTrigger>
              <TabsTrigger value="ip">IP Rights</TabsTrigger>
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
                Shape the Future of Tech Policy
              </h3>
              <p className="text-muted-foreground mb-6">
                Join the discussion on creating balanced regulatory frameworks
                that foster innovation while ensuring responsible development.
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