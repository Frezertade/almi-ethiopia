"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useI18n } from "./i18n-provider";

export default function MissionSection() {
  const { t } = useI18n();

  const items = [
    {
      icon: Target,
      title: t("mission.missionTitle"),
      description: t("mission.missionText"),
      color: "bg-primary",
      iconColor: "text-primary",
    },
    {
      icon: Eye,
      title: t("mission.visionTitle"),
      description: t("mission.visionText"),
      color: "bg-accent",
      iconColor: "text-accent",
    },
    {
      icon: Heart,
      title: t("mission.valuesTitle"),
      description: t("mission.valuesText"),
      color: "bg-secondary",
      iconColor: "text-secondary",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("mission.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
            {t("mission.title")}
          </h2>
          <p className="text-stone-medium text-lg max-w-2xl mx-auto">
            {t("mission.description")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <AnimatedSection key={item.title as string} delay={index * 0.15}>
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
