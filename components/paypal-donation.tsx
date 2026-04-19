"use client";

import { paypalConfig } from "@/lib/config";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useI18n } from "./i18n-provider";

export default function PayPalDonation() {
  const { t } = useI18n();
  const clientId = paypalConfig.clientId;

  if (clientId === "YOUR_PAYPAL_CLIENT_ID") {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-stone-light/10">
        <p className="text-stone-medium">
          {t("donate.paypalPlaceholder")}
        </p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: "USD",
        intent: "capture",
      }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-light/10 max-w-md mx-auto">
        <h3 className="text-lg font-bold text-stone-dark mb-4 font-serif text-center">
          {t("donate.paypalTitle")}
        </h3>
        <PayPalButtons
          style={{ layout: "vertical", shape: "rect", color: "gold" }}
          createOrder={(_, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: "50.00",
                    breakdown: {
                      item_total: {
                        currency_code: "USD",
                        value: "50.00",
                      },
                    },
                  },
                  description: "Donation to ALMI Ethiopia",
                },
              ],
            });
          }}
          onApprove={async (_, actions) => {
            await actions.order!.capture();
            window.location.href = "/donate?success=true";
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}
