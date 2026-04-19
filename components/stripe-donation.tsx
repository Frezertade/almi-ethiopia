"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { stripeConfig } from "@/lib/config";
import { Heart, Loader2 } from "lucide-react";
import { useI18n } from "./i18n-provider";

const stripePromise = loadStripe(stripeConfig.publishableKey);

interface DonationLevel {
  amount: string;
  priceId: string;
  descriptionKey: string;
}

export default function StripeDonation() {
  const [loading, setLoading] = useState<string | null>(null);
  const { t } = useI18n();

  const donationLevels: DonationLevel[] = [
    { amount: "$25", priceId: stripeConfig.priceIds.usd25, descriptionKey: "donate.seedDesc" },
    { amount: "$50", priceId: stripeConfig.priceIds.usd50, descriptionKey: "donate.treeDesc" },
    { amount: "$100", priceId: stripeConfig.priceIds.usd100, descriptionKey: "donate.trainDesc" },
    { amount: "$250", priceId: stripeConfig.priceIds.usd250, descriptionKey: "donate.toolDesc" },
    { amount: "$500", priceId: stripeConfig.priceIds.usd500, descriptionKey: "donate.plotDesc" },
    { amount: "$1,000", priceId: stripeConfig.priceIds.usd1000, descriptionKey: "donate.waterDesc" },
  ];

  const handleDonate = async (level: DonationLevel) => {
    if (level.priceId.startsWith("price_")) {
      alert(t("donate.stripeNotConfigured"));
      return;
    }

    setLoading(level.amount);
    const stripe = await stripePromise;
    if (!stripe) {
      setLoading(null);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (stripe as any).redirectToCheckout({
      lineItems: [{ price: level.priceId, quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/donate?success=true`,
      cancelUrl: `${window.location.origin}/donate?canceled=true`,
    });

    if (error) {
      console.error(error);
    }
    setLoading(null);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {donationLevels.map((level) => (
        <button
          key={level.amount}
          onClick={() => handleDonate(level)}
          disabled={loading === level.amount}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-stone-light/10 group text-left disabled:opacity-70"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-primary font-serif">
              {level.amount}
            </span>
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              {loading === level.amount ? (
                <Loader2 className="w-5 h-5 text-primary group-hover:text-white animate-spin" />
              ) : (
                <Heart className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              )}
            </div>
          </div>
          <p className="text-stone-medium text-sm leading-relaxed">
            {t(level.descriptionKey)}
          </p>
        </button>
      ))}
    </div>
  );
}
