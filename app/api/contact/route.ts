import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data", details: parsed.error.flatten() }, { status: 400 });
  }
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("contact_submissions").insert(parsed.data);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
