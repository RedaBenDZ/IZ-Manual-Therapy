import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = createSupabaseServerClient();
  const startDate = req.nextUrl.searchParams.get("startDate");
  const endDate = req.nextUrl.searchParams.get("endDate");
  let query = supabase.from("availability_slots").select("*").eq("booked", false);
  if (startDate) query = query.gte("start_time", startDate);
  if (endDate) query = query.lte("start_time", endDate);
  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}
