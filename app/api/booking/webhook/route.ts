import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature ?? "", webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const bookingId = session.metadata?.booking_id;
    if (bookingId) {
      await supabase.from("bookings").update({ status: "confirmed", payment_intent_id: session.payment_intent }).eq("id", bookingId);
      await supabase.from("admin_notifications").insert({ message: `Booking ${bookingId} confirmed` });
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as any;
    const bookingId = session.metadata?.booking_id;
    if (bookingId) {
      await supabase.from("bookings").update({ status: "cancelled" }).eq("id", bookingId);
      await supabase.from("availability_slots").update({ booked: false }).eq("id", bookingId);
    }
  }

  return NextResponse.json({ received: true });
}
