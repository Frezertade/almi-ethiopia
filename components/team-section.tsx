"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import AnimatedSection from "./animated-section";

const team = [
  {
    name: "Dr. Kefeni Kejela",
    role: "CEO and President",
    bio: "Ph.D. in Environmental Science from Oklahoma State University. Former Soil Scientist with Ethiopia's Ministry of Agriculture and USDA/NRCS. Recipient of the USDA National Civil Rights Award 2022.",
    initials: "KK",
    color: "bg-primary",
  },
  {
    name: "Assefa Foche (MBA)",
    role: "Executive Member & Secretary",
    bio: "MBA, University of Phoenix. 30+ years of leadership in public administration, agriculture, logistics, nonprofit management, and community development across Ethiopia and the U.S. Executive Member & Secretary of ALMI-Ethiopia.",
    initials: "AF",
    color: "bg-accent",
  },
  {
    name: "Abishu Wogari",
    role: "Executive Board Member & Chief Accountant",
    bio: "BSC in Naval Logistics and Accounting from Ethiopian Naval College. Passionate about protecting the planet from deterioration of natural resources and deforestation.",
    initials: "AW",
    color: "bg-secondary",
  },
  {
    name: "Dr. Dejene Alemayehu (PhD)",
    role: "Executive Member & Project Officer",
    bio: "Ph.D. in Environmental Science from Oklahoma State University. Former Environmental Director for Kaw Nation and Program Officer for Norwegian Church Aid in Ethiopia.",
    initials: "DA",
    color: "bg-terra",
  },
  {
    name: "Mekonnen Abote (MA)",
    role: "Executive Member & PR/IT Officer",
    bio: "MA in Rural Social Development from University of Reading, UK. Over 20 years of experience managing rural development projects with international donors.",
    initials: "MA",
    color: "bg-primary-light",
  },
  {
    name: "Dr. Melkamu Adeba",
    role: "Executive Member & Treasury",
    bio: "Ph.D. in Instructional Design and Technology. Chemistry Adjunct Faculty and Program Specialist with passion for environmental issues since childhood.",
    initials: "MA",
    color: "bg-accent",
  },
  {
    name: "Erjabo Wanore",
    role: "Executive Board Member",
    bio: "Business owner in residential construction for 15 years. Served on Board of Directors at Unto Global Logistics Center, coordinating medical supplies during COVID.",
    initials: "EW",
    color: "bg-secondary",
  },
  {
    name: "Frezer Kifle (M.Sc)",
    role: "Technology Consultant",
    bio: "Software Engineer with 7+ years of experience. Expert in ReactJS, Angular, Spring, and scalable software solutions. Passionate about Ethiopia's technological advancement.",
    initials: "FK",
    color: "bg-primary",
  },
  {
    name: "Betru Nedessa (M.Sc)",
    role: "Country Representative",
    bio: "M.Sc in Agricultural Science from Queensland University. Led the WFP MERET Project for 20 years. Awarded the 2019 UNCCD Land for Life Award.",
    initials: "BN",
    color: "bg-terra",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
            Meet Our Team
          </h2>
          <p className="text-stone-medium text-lg max-w-2xl mx-auto">
            Dedicated professionals and volunteers working together to transform Ethiopia&apos;s agricultural landscape.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border border-stone-light/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 ${member.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-dark font-serif">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-stone-medium text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-2">
                  <button className="p-2 text-stone-light hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-stone-light hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
