// Central configuration for ALMI Ethiopia
// Replace placeholder values with your actual API keys and endpoints

export const siteConfig = {
  name: "ALMI Ethiopia",
  url: "https://almiethiopia.org",
  email: "info@almiethiopia.org",
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

// High-quality curated images
export const images = {
  // Brand
  logo: "https://almiethiopia.org/wp-content/uploads/2024/02/logo.png",

  // Hero - AI-generated: two trees shaking hands (partnership & growth)
  hero: "/tree-handshake.jpg",

  // About - real photos from original site
  aboutBanner: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",

  // Projects - high-quality thematic Unsplash images
  agroforestry: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
  urbanAg: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
  farmImplements: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  community: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  soil: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
  water: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80",

  // Pages
  contact: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  donate: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  getInvolved: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",

  // Blog covers
  blog1: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4f7?auto=format&fit=crop&w=900&q=80",
  blog2: "https://images.unsplash.com/photo-1595855709915-fa457bd2419d?auto=format&fit=crop&w=900&q=80",
  blog3: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  blog4: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
  blog5: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
  blog6: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",

  // Team member photos (real from original site)
  drKefeni: "https://almiethiopia.org/wp-content/uploads/2024/02/Dr.-Kefene-phot-o1.png",
  assefaFoche: "https://almiethiopia.org/wp-content/uploads/2024/02/Screenshot-2024-02-15-at-6.23.03%E2%80%AFPM.png",
  abishuWogari: "https://almiethiopia.org/wp-content/uploads/2024/02/Abishu-wogari.png",
  drDejene: "https://almiethiopia.org/wp-content/uploads/2024/02/Screenshot-2024-02-15-at-6.40.30%E2%80%AFPM.png",
  mekonnenAbote: "https://almiethiopia.org/wp-content/uploads/2024/02/Screenshot-2024-02-15-at-6.44.09%E2%80%AFPM.png",
  drMelkamu: "https://almiethiopia.org/wp-content/uploads/2024/06/photo_2024-06-10-18.38.02.jpeg",
  erjaboWanore: "https://almiethiopia.org/wp-content/uploads/2024/06/photo_2024-06-10-18.29.21.jpeg",
  frezerKifle: "https://almiethiopia.org/wp-content/uploads/2024/06/Frezer.jpg",
  betruNedessa: "https://almiethiopia.org/wp-content/uploads/2024/02/Betru-Nedessa.png",
};
