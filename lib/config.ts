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

// Real images from almiethiopia.org
export const images = {
  logo: "https://almiethiopia.org/wp-content/uploads/2024/02/logo.png",
  hero: "https://almiethiopia.org/wp-content/uploads/2024/03/Screenshot-2024-03-28-at-6.17.49%E2%80%AFPM-1.png",
  aboutBanner: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  about: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  team: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  agroforestry: "https://almiethiopia.org/wp-content/uploads/2024/02/image-2-edited.png",
  urbanAg: "https://almiethiopia.org/wp-content/uploads/2024/04/Untitled-1.png",
  farmImplements: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  community: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  soil: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  water: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog1: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog2: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog3: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog4: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog5: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  blog6: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  contact: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  donate: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  getInvolved: "https://almiethiopia.org/wp-content/uploads/2024/02/qtq80-Aq3KKw-e1708154156603.jpeg",
  // Team member photos
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
