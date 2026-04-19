"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HandHeart } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
                  <HandHeart className="w-4 h-4" />
                  Join Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                  Help Restore Ethiopia&apos;s Agriculture and Environment
                </h2>
                <p className="text-white/80 text-lg">
                  Ethiopia&apos;s agriculture suffers from declining soil fertility, inefficient farming practices, and deforestation. Your support can transform lives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-300"
                  >
                    Donate Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-colors duration-300"
                  >
                    Get Involved
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
