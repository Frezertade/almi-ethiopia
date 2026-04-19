"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useI18n } from "./i18n-provider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6">
              <Mail className="w-7 h-7 text-accent-light" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
              {t("newsletter.title")}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {t("newsletter.description")}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-medium" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder") as string}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-stone-dark placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t("newsletter.success")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("newsletter.button")}
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-accent-light text-sm"
              >
                {t("newsletter.success")}
              </motion.p>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
