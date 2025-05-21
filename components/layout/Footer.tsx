"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kesari/90 text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">TRIPS 2025</h3>
            <p className="mb-4">
              The ultimate technology conference bringing together innovators,
              thought leaders, and tech enthusiasts from around the globe.
            </p>
            {/* <div className="flex space-x-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Youtube size={18} />
              </Button>
            </div> */}
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:underline">Frontiers of Critical and Exponential Technologies</Link>
              </li>
              <li>
                <Link href="#speakers" className="hover:underline">Innovation Ecosystem & Entrepreneurship</Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:underline">Governance & Regulation</Link>
              </li>
              <li>
                <Link href="#register" className="hover:underline">Future of Work & Digital-Cyber Economy</Link>
              </li>
              <li>
                <Link href="#sponsors" className="hover:underline">Sustainable Innovation & Social Impact</Link>
              </li>
            </ul>
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Centre for Nanosciences, IIT Kanpur, UP 208016</span>
              </li>
              
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 8737074576 </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 9936526009 </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@trips2025.com</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4">
              Get the latest updates about TRIPS 2025 directly to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md px-4 py-2 bg-white-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </motion.div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="text-center">
          <p className="text-sm text-primary-foreground/70">
            &copy; {currentYear} TRIPS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}