"use client";

import { paypalConfig } from "@/lib/config";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalDonation() {
  const clientId = paypalConfig.clientId;

  // Don't render if using placeholder
  if (clientId === "YOUR_PAYPAL_CLIENT_ID") {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-stone-light/10">
        <p className="text-stone-medium">
          PayPal donation button will appear here once configured.
          Add your PayPal Client ID to <code className="bg-white px-2 py-1 rounded text-sm">lib/config.ts</code>
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
          Donate with PayPal
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
