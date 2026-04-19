"use client";

import { motion } from "framer-motion";
import {
  TreePine,
  Building2,
  Tractor,
  Users,
  Sprout,
  Shield,
} from "lucide-react";
import AnimatedSection from "./animated-section";

const areas = [
  {
    icon: TreePine,
    title: "Agroforestry",
    description:
      "Establishing multistory agroforestry systems to combat deforestation, land degradation, and declining soil fertility while promoting high-value crops.",
    stat: "10,000+ Trees",
    statLabel: "Target planting",
  },
  {
    icon: Building2,
    title: "Urban Agriculture",
    description:
      "Promoting appropriate agricultural technologies in cities to provide alternative income sources for women, veterans, and unemployed youth.",
    stat: "15+ Cities",
    statLabel: "Planned outreach",
  },
  {
    icon: Tractor,
    title: "Improved Farm Implements",
    description:
      "Introducing efficient tillage practices and energy tools to replace the inefficient single-ox plow system and boost productivity.",
    stat: "50%",
    statLabel: "Efficiency increase",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Upholding participatory approaches where communities are empowered in decision-making to ensure relevant and beneficial initiatives.",
    stat: "100+",
    statLabel: "Communities",
  },
  {
    icon: Sprout,
    title: "Soil Conservation",
    description:
      "Implementing sustainable land management practices including terracing, contour farming, and organic matter enrichment.",
    stat: "30%",
    statLabel: "Fertility improvement",
  },
  {
    icon: Shield,
    title: "Climate Adaptation",
    description:
      "Building resilience against climate change through diversified farming systems, water harvesting, and drought-resistant crops.",
    stat: "6 Zones",
    statLabel: "Agroecological coverage",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
            Our Focus Areas
          </h2>
          <p className="text-stone-medium text-lg max-w-2xl mx-auto">
            We address Ethiopia&apos;s agricultural challenges through comprehensive, sustainable interventions.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <AnimatedSection key={area.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full group border border-stone-light/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary font-serif">
                      {area.stat}
                    </p>
                    <p className="text-xs text-stone-light uppercase tracking-wider">
                      {area.statLabel}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-stone-dark mb-2 font-serif">
                  {area.title}
                </h3>
                <p className="text-stone-medium text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
