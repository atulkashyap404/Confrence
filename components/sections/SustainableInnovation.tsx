"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf,
  Building2,
  Brain,
  Heart,
  Users,
  GraduationCap,
  Home,
  Globe,
  TreePine,
  Recycle,
  Lightbulb,
  UserCheck
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Green Technology & Circular Economy",
    icon: <Leaf className="w-12 h-12" />,
    description: "Sustainable solutions for a greener future",
    initiatives: [
      {
        title: "Renewable Energy Solutions",
        icon: <TreePine className="w-6 h-6" />,
        description: "Advanced solar and wind power technologies",
        impact: "40% reduction in carbon emissions"
      },
      {
        title: "Waste Management Innovation",
        icon: <Recycle className="w-6 h-6" />,
        description: "Smart recycling and waste reduction systems",
        impact: "60% increase in recycling efficiency"
      }
    ]
  },
  {
    title: "Smart Cities & Urban Innovation",
    icon: <Building2 className="w-12 h-12" />,
    description: "Creating sustainable urban environments",
    initiatives: [
      {
        title: "Intelligent Transportation",
        icon: <Globe className="w-6 h-6" />,
        description: "AI-powered traffic management systems",
        impact: "30% reduction in commute times"
      },
      {
        title: "Smart Infrastructure",
        icon: <Home className="w-6 h-6" />,
        description: "IoT-enabled city management",
        impact: "25% improvement in resource efficiency"
      }
    ]
  },
  {
    title: "Ethical AI & Responsible Innovation",
    icon: <Brain className="w-12 h-12" />,
    description: "Ensuring ethical technology development",
    initiatives: [
      {
        title: "AI Ethics Framework",
        icon: <Lightbulb className="w-6 h-6" />,
        description: "Guidelines for responsible AI development",
        impact: "100+ organizations adopted framework"
      },
      {
        title: "Bias Detection Tools",
        icon: <UserCheck className="w-6 h-6" />,
        description: "Advanced algorithms for fair AI systems",
        impact: "85% reduction in algorithmic bias"
      }
    ]
  },
  {
    title: "Technology for Social Good",
    icon: <Heart className="w-12 h-12" />,
    description: "Leveraging tech for societal impact",
    initiatives: [
      {
        title: "Healthcare Innovation",
        icon: <Heart className="w-6 h-6" />,
        description: "AI-powered diagnostic tools",
        impact: "50% faster disease detection"
      },
      {
        title: "EdTech Solutions",
        icon: <GraduationCap className="w-6 h-6" />,
        description: "Accessible learning platforms",
        impact: "1M+ students reached globally"
      }
    ]
  }
];

const IMPACT_STATS = [
  { value: "500+", label: "Green Tech Startups Supported" },
  { value: "30M+", label: "Lives Impacted" },
  { value: "45%", label: "Carbon Reduction Achieved" },
  { value: "100+", label: "Smart City Projects" }
];

export default function SustainableInnovation() {
  return (
    <section className="py-24 gradient-bg-sustainable">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Sustainable Innovation & <span className="text-kesari">Social Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Driving technological innovation for environmental sustainability and social progress
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-kesari/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-kesari mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="rounded-full bg-kesari/10 p-4 text-kesari mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.initiatives.map((initiative, i) => (
                      <div
                        key={i}
                        className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="rounded-full bg-background p-2 text-kesari mr-3">
                            {initiative.icon}
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{initiative.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {initiative.description}
                            </p>
                            <Badge variant="secondary">
                              Impact: {initiative.impact}
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

        {/* Women in Technology Panel */}
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
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Women in Technology & Leadership Panel
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join industry leaders for an inspiring discussion on promoting diversity,
                equality, and inclusion in technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="default">
                  Register for Panel
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