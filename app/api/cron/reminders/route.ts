import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { sendAppointmentReminder } from "@/lib/resend";

export async function GET(request: Request) {
  const authHeader = (request.headers as any).get?.("authorization") || request.headers.get("authorization");
  if ((process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  const supabase = createSupabaseAdminClient();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const { data: bookings } = await supabase
    .from("bookings")
    .select("*, clients(*), services(*)")
    .eq("status", "confirmed");

  if (bookings) {
    await Promise.all(
      bookings.map((booking: any) =>
        sendAppointmentReminder(booking.clients.email, {
          clientName: booking.clients.name,
          clientEmail: booking.clients.email,
          serviceName: booking.services?.name ?? "Treatment",
          date: new Date(booking.start_time ?? tomorrow),
          address: booking.clients.address,
        }),
      ),
    );
  }

  return NextResponse.json({ success: true });
}
