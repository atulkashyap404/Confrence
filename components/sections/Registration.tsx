"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Users, Activity, Sparkles } from "lucide-react";

// Pricing tiers
const PRICING_TIERS = [
  {
    id: "standard",
    name: "Standard",
    price: 599,
    description: "Full conference access",
    features: [
      "All keynote sessions",
      "All breakout sessions",
      "Networking events",
      "Lunch and refreshments",
      "Conference materials",
    ],
    recommended: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 999,
    description: "Enhanced conference experience",
    features: [
      "All Standard tier features",
      "Pre-conference workshops",
      "VIP networking reception",
      "Reserved seating at keynotes",
      "Conference recordings",
      "Exclusive speaker meet & greets",
    ],
    recommended: true,
  },
  {
    id: "executive",
    name: "Executive",
    price: 1599,
    description: "Ultimate conference experience",
    features: [
      "All Premium tier features",
      "Executive lounge access",
      "Private meeting rooms",
      "One-on-one sessions with speakers",
      "Executive dinner",
      "Annual membership to Tech Leaders Network",
    ],
    recommended: false,
  },
];

// Registration form schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  tier: z.enum(["standard", "premium", "executive"]),
  addOns: z.array(z.string()).optional(),
  dietaryRequirements: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState("premium");
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tier: "premium",
      addOns: [],
      agreeTerms: false,
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsSubmitted(true);
  };
  
  return (
    <section id="register" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Register for <span className="text-primary">TechConf 2025</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Secure your spot at the most anticipated tech conference of the year.
            Early registration ensures you don&apost miss this transformative event.
          </p>
        </motion.div>
        
        {isSubmitted ? (
          <RegistrationSuccess />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pricing Tiers */}
            <div className="lg:col-span-3 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PRICING_TIERS.map((tier, index) => (
                  <PricingCard
                    key={tier.id}
                    tier={tier}
                    index={index}
                    isSelected={selectedTier === tier.id}
                    onSelect={() => setSelectedTier(tier.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Registration Form</CardTitle>
                    <CardDescription>
                      Please fill in your details to complete your registration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="First Name"
                            {...register("firstName")}
                          />
                          {errors.firstName && (
                            <p className="text-destructive text-sm">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Last Name"
                            {...register("lastName")}
                          />
                          {errors.lastName && (
                            <p className="text-destructive text-sm">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Company Name"
                            {...register("company")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job Title</Label>
                          <Input
                            id="jobTitle"
                            placeholder="Job Title"
                            {...register("jobTitle")}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Ticket Tier *</Label>
                        <Controller
                          name="tier"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedTier(value);
                              }}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              {PRICING_TIERS.map((tier) => (
                                <div
                                  key={tier.id}
                                  className={`flex items-center space-x-2 rounded-md border p-3 ${
                                    selectedTier === tier.id ? "border-primary" : "border-border"
                                  }`}
                                >
                                  <RadioGroupItem value={tier.id} id={tier.id} />
                                  <Label htmlFor={tier.id} className="flex-1 cursor-pointer">
                                    <div className="font-medium">
                                      {tier.name} - ${tier.price}
                                    </div>
                                    <div className="text-muted-foreground text-sm">
                                      {tier.description}
                                    </div>
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          )}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Add-ons (Optional)</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="workshop" value="workshop" {...register("addOns")} />
                            <Label htmlFor="workshop" className="flex-1 cursor-pointer">
                              <div className="font-medium">Pre-conference Workshop ($199)</div>
                              <div className="text-muted-foreground text-sm">
                                Hands-on workshops on July 14th
                              </div>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox id="gala" value="gala" {...register("addOns")} />
                            <Label htmlFor="gala" className="flex-1 cursor-pointer">
                              <div className="font-medium">Gala Dinner Ticket ($149)</div>
                              <div className="text-muted-foreground text-sm">
                                Exclusive dinner and awards ceremony
                              </div>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox id="recordings" value="recordings" {...register("addOns")} />
                            <Label htmlFor="recordings" className="flex-1 cursor-pointer">
                              <div className="font-medium">Session Recordings ($99)</div>
                              <div className="text-muted-foreground text-sm">
                                Access to all recorded sessions for 1 year
                              </div>
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                        <Controller
                          name="dietaryRequirements"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select dietary requirements" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">No special requirements</SelectItem>
                                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                <SelectItem value="vegan">Vegan</SelectItem>
                                <SelectItem value="gluten-free">Gluten-free</SelectItem>
                                <SelectItem value="other">Other (specify at check-in)</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" {...register("agreeTerms")} />
                          <Label htmlFor="terms" className="cursor-pointer">
                            I agree to the terms and conditions
                          </Label>
                        </div>
                        {errors.agreeTerms && (
                          <p className="text-destructive text-sm">{errors.agreeTerms.message}</p>
                        )}
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Complete Registration
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Registration Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Registration Details</CardTitle>
                    <CardDescription>
                      Important information about your registration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">Conference Dates</h4>
                      <p className="text-muted-foreground">July 15-17, 2025</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">
                        Tech Convention Center<br />
                        123 Innovation Avenue<br />
                        IIT Kanpur, UP 208016
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium">Registration Includes</h4>
                      <ul className="text-muted-foreground space-y-1 mt-2">
                        <li className="flex items-center">
                          <BadgeCheck className="h-4 w-4 mr-2 text-primary" /> Access to all sessions
                        </li>
                        <li className="flex items-center">
                          <BadgeCheck className="h-4 w-4 mr-2 text-primary" /> Conference materials
                        </li>
                        <li className="flex items-center">
                          <BadgeCheck className="h-4 w-4 mr-2 text-primary" /> Lunch and refreshments
                        </li>
                        <li className="flex items-center">
                          <BadgeCheck className="h-4 w-4 mr-2 text-primary" /> Networking events
                        </li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium">Group Discounts</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        Register 3+ attendees and receive 10% off each ticket.
                        Contact <span className="text-primary">groups@techconf2025.com</span> for details.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Questions?</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        Email us at <span className="text-primary">registration@techconf2025.com</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface PricingCardProps {
  tier: {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    recommended: boolean;
  };
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

function PricingCard({ tier, index, isSelected, onSelect }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {tier.recommended && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <Card
        className={`h-full transition-all hover:shadow-md ${
          isSelected ? "border-primary shadow-md" : ""
        } ${tier.recommended ? "mt-4" : ""}`}
      >
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{tier.name}</span>
            <span className="text-2xl">${tier.price}</span>
          </CardTitle>
          <CardDescription>{tier.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <BadgeCheck className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant={isSelected ? "default" : "outline"}
            className="w-full"
            onClick={onSelect}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function RegistrationSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/20 p-3">
              <BadgeCheck className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Registration Successful!</CardTitle>
          <CardDescription>
            Thank you for registering for TechConf 2025
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Your registration has been confirmed. We&aposve sent a confirmation
            email with all the details to your provided email address.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
              <Users className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Connect</h3>
              <p className="text-sm text-muted-foreground text-center">
                with industry experts and peers
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
              <Activity className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Learn</h3>
              <p className="text-sm text-muted-foreground text-center">
                about cutting-edge technologies
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Grow</h3>
              <p className="text-sm text-muted-foreground text-center">
                your skills and career opportunities
              </p>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Be sure to mark your calendar for July 15-17, 2025. We look forward
            to seeing you at the Tech Convention Center in San Francisco!
          </p>
        </CardContent>
        <CardFooter className="justify-center space-x-4">
          <Button>Add to Calendar</Button>
          <Button variant="outline">View My Registration</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}