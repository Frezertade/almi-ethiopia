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
import { useI18n } from "./i18n-provider";

export default function FocusAreas() {
  const { t } = useI18n();

  const areas = [
    {
      icon: TreePine,
      title: t("focusAreas.agroforestry"),
      description: t("focusAreas.agroforestryDesc"),
      stat: "10,000+",
      statLabel: "Trees (Phase One)",
    },
    {
      icon: Building2,
      title: t("focusAreas.urbanAg"),
      description: t("focusAreas.urbanAgDesc"),
      stat: "15+",
      statLabel: "Cities (Phase One)",
    },
    {
      icon: Tractor,
      title: t("focusAreas.farmImplements"),
      description: t("focusAreas.farmImplementsDesc"),
      stat: "50%",
      statLabel: "Efficiency",
    },
    {
      icon: Users,
      title: t("focusAreas.community"),
      description: t("focusAreas.communityDesc"),
      stat: "100+",
      statLabel: "Communities (Phase One)",
    },
    {
      icon: Sprout,
      title: t("focusAreas.soil"),
      description: t("focusAreas.soilDesc"),
      stat: "30%",
      statLabel: "Fertility",
    },
    {
      icon: Shield,
      title: t("focusAreas.climate"),
      description: t("focusAreas.climateDesc"),
      stat: "6",
      statLabel: "Zones (Phase One)",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("focusAreas.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
            {t("focusAreas.title")}
          </h2>
          <p className="text-stone-medium text-lg max-w-2xl mx-auto">
            {t("focusAreas.description")}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <AnimatedSection key={area.title as string} delay={index * 0.1}>
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
