import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY ?? "";

export const stripe = new Stripe(stripeSecret, {
  apiVersion: "2024-06-20",
});

export interface CheckoutBookingData {
  id: string;
  description: string;
  amount: number;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}

export const createCheckoutSession = async (booking: CheckoutBookingData) => {
  return stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: { name: booking.description },
          unit_amount: booking.amount,
        },
        quantity: 1,
      },
    ],
    success_url: booking.successUrl,
    cancel_url: booking.cancelUrl,
    metadata: booking.metadata,
  });
};

export const createRefund = async (paymentIntentId: string, amount?: number) => {
  return stripe.refunds.create({
    payment_intent: paymentIntentId,
    amount,
  });
};
