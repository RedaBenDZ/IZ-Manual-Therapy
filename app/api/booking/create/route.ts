import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations/booking";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data", details: parsed.error.flatten() }, { status: 400 });
  }
  const supabase = createSupabaseServerClient();
  const { client, medicalHistory, serviceId, packageId, slotId } = parsed.data as any;

  const { data: clientRecord, error: clientError } = await supabase
    .from("clients")
    .upsert({ ...client }, { onConflict: "email" })
    .select()
    .maybeSingle();
  if (clientError || !clientRecord) {
    return NextResponse.json({ error: clientError?.message ?? "Client not saved" }, { status: 500 });
  }

  await supabase.from("medical_history").insert({ ...medicalHistory, client_id: clientRecord.id });
  await supabase.from("availability_slots").update({ booked: true }).eq("id", slotId);

  const { data: booking } = await supabase
    .from("bookings")
    .insert({ client_id: clientRecord.id, service_id: serviceId, package_id: packageId, slot_id: slotId, status: "pending" })
    .select()
    .maybeSingle();

  const amount = 5000;
  const session = await createCheckoutSession({
    id: booking?.id ?? "",
    description: "Manual therapy booking",
    amount,
    successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/book`,
    metadata: { booking_id: booking?.id ?? "" },
  });

  return NextResponse.json({ sessionId: session.id, url: session.url });
}
