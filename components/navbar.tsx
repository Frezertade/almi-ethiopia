"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import { images } from "@/lib/config";
import { useI18n } from "./i18n-provider";
import Image from "next/image";

function useRuntimeLogo() {
  const [logo, setLogo] = useState(images.logo);
  useEffect(() => {
    fetch("/data/images.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data.logo) setLogo(data.logo);
      })
      .catch(() => {});
  }, []);
  return logo;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();
  const logoSrc = useRuntimeLogo();

  const navLinks = [
    { href: "/", label: t("nav.home") as string },
    { href: "/about", label: t("nav.about") as string },
    { href: "/projects", label: t("nav.projects") as string },
    { href: "/blog", label: t("nav.blog") as string },
    { href: "/get-involved", label: t("nav.getInvolved") as string },
    { href: "/donate", label: t("nav.donate") as string },
    { href: "/contact", label: t("nav.contact") as string },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden transition-colors ${scrolled ? "bg-white" : "bg-white/20 backdrop-blur-sm"}`}>
              <Image
                src={logoSrc}
                alt="ALMI Ethiopia Logo"
                fill
                className="object-contain p-0.5"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-bold font-serif leading-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
                ALMI Ethiopia
              </span>
              <span className={`text-[10px] md:text-xs leading-tight tracking-wider uppercase transition-colors ${scrolled ? "text-stone-medium" : "text-white/80"}`}>
                {t("hero.badge")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="mr-2">
              <LocaleSwitcher />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                    ? "text-stone-dark hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${scrolled ? "bg-primary" : "bg-white"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-primary hover:bg-sage-light" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-stone-light/20 shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-primary text-white"
                        : "text-stone-dark hover:bg-sage-light hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
