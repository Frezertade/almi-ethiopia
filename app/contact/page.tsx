"use client";

import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import ContactForm from "@/components/contact-form";
import { images } from "@/lib/config";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

export default function ContactPage() {
  const { t } = useI18n();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      lines: ["136 Werner St.", "Wernersville, PA 19565"],
    },
    {
      icon: Mail,
      title: t("contact.email"),
      lines: ["info@almiethiopia.org", "kefeni@yahoo.com"],
      href: "mailto:info@almiethiopia.org",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      lines: ["+1 610-301-2826"],
      href: "tel:+16103012826",
    },
    {
      icon: Clock,
      title: t("contact.responseTime"),
      lines: [t("contact.responseText") as string],
    },
  ];

  return (
    <>
      <PageHeader
        title={t("contact.pageTitle")}
        subtitle={t("contact.pageSubtitle")}
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {t("contact.infoSubtitle")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-6">
                  {t("contact.infoTitle")}
                </h2>
                <p className="text-stone-medium leading-relaxed mb-10">
                  {t("contact.infoDesc")}
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.title as string} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-dark mb-1">
                          {info.title}
                        </h3>
                        {info.lines.map((line, i) =>
                          info.href ? (
                            <a
                              key={i}
                              href={info.href}
                              className="block text-stone-medium text-sm hover:text-primary transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-stone-medium text-sm">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-light/10">
                  <h3 className="text-2xl font-bold text-stone-dark mb-2 font-serif">
                    {t("contact.formTitle")}
                  </h3>
                  <p className="text-stone-medium mb-8">
                    {t("contact.formDesc")}
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mb-4">
              {t("contact.whereWeWork")}
            </h2>
            <p className="text-stone-medium text-lg max-w-2xl mx-auto">
              {t("contact.whereDesc")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden h-80 md:h-[450px] relative">
              <img
                src={images.contact}
                alt="Ethiopian landscape where ALMI Ethiopia operates"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/25 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">
                    Headquartered in Wernersville, Pennsylvania
                  </p>
                  <p className="text-white/80 mt-2">
                    Operations in Oromia, Amhara, SNNPR, Sidama, and other regions of Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
