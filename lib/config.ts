// Central configuration for ALMI Ethiopia
// Replace placeholder values with your actual API keys and endpoints

export const siteConfig = {
  name: "ALMI Ethiopia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://almiethiopia.vercel.app",
  email: "info@almiethiopia.org",
  description:
    "Agroforestry and Agricultural Land Management Initiative in Ethiopia, empowering communities through sustainable agriculture, urban farming, soil conservation, climate adaptation, and youth and women livelihood opportunities.",
};

// Formspree - Sign up at https://formspree.io/ to get your form ID
export const formspreeConfig = {
  formId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "YOUR_FORMSPREE_FORM_ID",
};

// Google Analytics 4 - Get your tracking ID from https://analytics.google.com/
export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
};

// Stripe - Get your publishable key from https://dashboard.stripe.com/
export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_YOUR_STRIPE_KEY",
  // Create these Price IDs in your Stripe Dashboard for each donation amount
  priceIds: {
    usd25: process.env.NEXT_PUBLIC_STRIPE_PRICE_25 || "price_25",
    usd50: process.env.NEXT_PUBLIC_STRIPE_PRICE_50 || "price_50",
    usd100: process.env.NEXT_PUBLIC_STRIPE_PRICE_100 || "price_100",
    usd250: process.env.NEXT_PUBLIC_STRIPE_PRICE_250 || "price_250",
    usd500: process.env.NEXT_PUBLIC_STRIPE_PRICE_500 || "price_500",
    usd1000: process.env.NEXT_PUBLIC_STRIPE_PRICE_1000 || "price_1000",
  },
};

// PayPal - Get your client ID from https://developer.paypal.com/
export const paypalConfig = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID",
  // Or use a direct PayPal.Me link for simple donations
  paypalMeLink: "https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID",
};

// Runtime image map loaded from editable JSON config
// Edit via /admin/images or directly via public/data/images.json
import { cache } from "react";

const getRuntimeImages = cache(async () => {
  const res = await fetch(`${siteConfig.url}/api/admin-images`, { next: { revalidate: 60 } });
  if (!res.ok) {
    return {} as Record<string, string>;
  }
  return (await res.json()) as Record<string, string>;
});

export async function getImages() {
  const runtime = await getRuntimeImages();
  return {
    // Brand
    logo: runtime.logo ?? "/logo.svg",

    // Hero
    hero: runtime.hero ?? "/tree-handshake.jpg",

    // About
    aboutBanner: runtime.aboutBanner ?? "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",

    // Projects
    agroforestry: runtime.agroforestry ?? "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    urbanAg: runtime.urbanAg ?? "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
    farmImplements: runtime.farmImplements ?? "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    community: runtime.community ?? "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    soil: runtime.soil ?? "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
    water: runtime.water ?? "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80",

    // Pages
    contact: runtime.contact ?? "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    donate: runtime.donate ?? "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    getInvolved: runtime.getInvolved ?? "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",

    // Blog covers
    blog1: runtime.blog1 ?? "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
    blog2: runtime.blog2 ?? "https://images.unsplash.com/photo-1595855709915-fa457bd2419d?auto=format&fit=crop&w=900&q=80",
    blog3: runtime.blog3 ?? "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    blog4: runtime.blog4 ?? "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
    blog5: runtime.blog5 ?? "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
    blog6: runtime.blog6 ?? "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",

    // Team member photos
    drKefeni: runtime.drKefeni ?? "/team-drKefeni.svg",
    assefaFoche: runtime.assefaFoche ?? "/assefa-foche.jpg",
    abishuWogari: runtime.abishuWogari ?? "/team-abishuWogari.svg",
    drDejene: runtime.drDejene ?? "/dr-dejene-alemayehu.jpg",
    mekonnenAbote: runtime.mekonnenAbote ?? "/mekonnen-abote.jpg",
    drMelkamu: runtime.drMelkamu ?? "/team-drMelkamu.svg",
    erjaboWanore: runtime.erjaboWanore ?? "/team-erjaboWanore.svg",
    frezerKifle: runtime.frezerKifle ?? "/team-frezerKifle.svg",
    betruNedessa: runtime.betruNedessa ?? "/team-betruNedessa.svg",
  };
}

// Backward-compatible static export used by the admin client.
// Server components and static builds should prefer `getImages()`.
export const images = {
  logo: "/logo.svg",
  hero: "/tree-handshake.jpg",
  aboutBanner: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",
  agroforestry: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
  urbanAg: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
  farmImplements: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  community: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  soil: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
  water: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80",
  contact: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  donate: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  getInvolved: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
  blog1: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
  blog2: "https://images.unsplash.com/photo-1595855709915-fa457bd2419d?auto=format&fit=crop&w=900&q=80",
  blog3: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  blog4: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
  blog5: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
  blog6: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
  drKefeni: "/team-drKefeni.svg",
  assefaFoche: "/assefa-foche.jpg",
  abishuWogari: "/team-abishuWogari.svg",
  drDejene: "/dr-dejene-alemayehu.jpg",
  mekonnenAbote: "/mekonnen-abote.jpg",
  drMelkamu: "/team-drMelkamu.svg",
  erjaboWanore: "/team-erjaboWanore.svg",
  frezerKifle: "/team-frezerKifle.svg",
  betruNedessa: "/team-betruNedessa.svg",
};
