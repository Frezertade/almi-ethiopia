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

// Unsplash image URLs for the site
export const images = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
  heroFallback: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",
  about: "https://images.unsplash.com/photo-1595855709915-fa457bd2419d?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
  agroforestry: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4f7?auto=format&fit=crop&w=800&q=80",
  urbanAg: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
  farmImplements: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
  community: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
  soil: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
  water: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
  blog1: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1595855709915-fa457bd2419d?auto=format&fit=crop&w=800&q=80",
  blog3: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
  blog4: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  blog5: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4f7?auto=format&fit=crop&w=800&q=80",
  blog6: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
  contact: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  donate: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  getInvolved: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
};
