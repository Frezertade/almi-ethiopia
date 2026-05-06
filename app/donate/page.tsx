"use client";

import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import StripeDonation from "@/components/stripe-donation";
import PayPalDonation from "@/components/paypal-donation";
import { images } from "@/lib/config";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

export default function DonatePage() {
  const { t } = useI18n();

  const transparencyItems = [
    { label: t("donate.programCosts"), pct: "85%" },
    { label: t("donate.adminCosts"), pct: "10%" },
    { label: t("donate.fundraising"), pct: "5%" },
  ];

  const whyDonate = [
    t("donate.why1"),
    t("donate.why2"),
    t("donate.why3"),
    t("donate.why4"),
    t("donate.why5"),
    t("donate.why6"),
  ];

  return (
    <>
      <PageHeader
        title={t("donate.pageTitle")}
        subtitle={t("donate.pageSubtitle")}
      />

      {/* Impact Image */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden h-64 md:h-96 relative">
              <img
                src={images.donate}
                alt="Community farming in Ethiopia"
                className="w-full h-full object-cover almi-image-treatment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg md:text-xl font-medium max-w-2xl">
                  Every donation plants a seed of hope in Ethiopian farming communities.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stripe Donation Options */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Make a Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-4">
              {t("donate.impactTitle")}
            </h2>
            <p className="text-stone-medium text-lg max-w-2xl mx-auto">
              {t("donate.impactDesc")}
            </p>
          </AnimatedSection>

          <StripeDonation />
        </div>
      </section>

      {/* PayPal Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-dark font-serif mb-4">
              Prefer PayPal?
            </h2>
            <p className="text-stone-medium max-w-xl mx-auto">
              You can also support our work securely through PayPal.
            </p>
          </AnimatedSection>
          <PayPalDonation />
        </div>
      </section>

      {/* Custom Donation CTA */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
                  {t("donate.customTitle")}
                </h3>
                <p className="text-white/80 mb-8">
                  {t("donate.customDesc")}
                </p>
                <a
                  href="mailto:info@almiethiopia.org"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-300"
                >
                  {t("donate.customBtn")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Transparency
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-6">
                {t("donate.transparencyTitle")}
              </h2>
              <p className="text-stone-medium leading-relaxed mb-8">
                {t("donate.transparencyDesc")}
              </p>
              <div className="space-y-4">
                {transparencyItems.map((item) => (
                  <div key={item.label as string}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-stone-dark text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="text-primary font-bold text-sm">
                        {item.pct}
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-stone-light/10">
                <h3 className="text-xl font-bold text-stone-dark mb-6 font-serif">
                  {t("donate.whyTitle")}
                </h3>
                <div className="space-y-4">
                  {whyDonate.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-stone-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
