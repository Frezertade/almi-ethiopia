"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe, MessageCircle, ExternalLink, Camera } from "lucide-react";
import { useI18n } from "./i18n-provider";

export default function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/get-involved", label: t("nav.getInvolved") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const focusAreas = [
    t("focusAreas.agroforestry"),
    t("focusAreas.urbanAg"),
    t("focusAreas.farmImplements"),
    t("focusAreas.community"),
    t("focusAreas.soil"),
    t("focusAreas.climate"),
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <Leaf className="w-6 h-6 text-accent-light" />
              </div>
              <span className="text-xl font-bold font-serif">ALMI Ethiopia</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, ExternalLink, Camera].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif">{t("footer.focusAreas")}</h3>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area as string}>
                  <span className="text-white/70 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  136 Werner St.<br />
                  Wernersville, PA 19565
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-light shrink-0" />
                <a
                  href="mailto:info@almiethiopia.org"
                  className="text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  info@almiethiopia.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-light shrink-0" />
                <a
                  href="tel:+16103012826"
                  className="text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  +1 610-301-2826
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} ALMI Ethiopia. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
