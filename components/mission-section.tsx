"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "./animated-section";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To promote and support the sustainable management of Natural Resources, implement efficient Agricultural Technologies, and enhance the livelihoods of our targeted beneficiaries in partnership with communities across Ethiopia.",
    color: "bg-primary",
    iconColor: "text-primary",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To provide economic opportunity through innovation, helping rural Ethiopia thrive; promote agriculture production that better nourishes Ethiopians and preserve our Nation's Natural Resources for a sustainable future.",
    color: "bg-accent",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We uphold participatory approaches, empowering communities in decision-making. We believe in integrity, sustainability, innovation, and the power of partnerships to create lasting positive change.",
    color: "bg-secondary",
    iconColor: "text-secondary",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
            Guided by Purpose
          </h2>
          <p className="text-stone-medium text-lg max-w-2xl mx-auto">
            Every action we take is rooted in our commitment to restore and sustain Ethiopia&apos;s agricultural landscape.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-stone-light/10"
              >
                <div
                  className={`w-14 h-14 ${item.color}/10 rounded-xl flex items-center justify-center mb-6`}
                >
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-stone-dark mb-4 font-serif">
                  {item.title}
                </h3>
                <p className="text-stone-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
