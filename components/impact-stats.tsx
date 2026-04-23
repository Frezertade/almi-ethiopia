"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TreePine, Users, Sprout, Globe } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useI18n } from "./i18n-provider";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const { t } = useI18n();

  const stats = [
    {
      icon: TreePine,
      value: 10000,
      suffix: "+",
      label: t("impact.trees"),
    },
    {
      icon: Users,
      value: 15000,
      suffix: "+",
      label: t("impact.farmers"),
    },
    {
      icon: Sprout,
      value: 4,
      suffix: "",
      label: t("impact.regions"),
    },
    {
      icon: Globe,
      value: 40,
      suffix: "-50%",
      label: t("impact.productivity"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="stats-dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#stats-dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            {t("impact.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mt-3 mb-4">
            {t("impact.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t("impact.description")}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label as string} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-accent-light" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white font-serif mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
