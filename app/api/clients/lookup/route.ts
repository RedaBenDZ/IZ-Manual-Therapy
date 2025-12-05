import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const bodySchema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const supabase = createSupabaseServerClient();
  const { data: client } = await supabase.from("clients").select("*").eq("email", parsed.data.email).maybeSingle();
  if (!client) return NextResponse.json({ data: null });
  const { data: medical } = await supabase
    .from("medical_history")
    .select("*")
    .eq("client_id", client.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  return NextResponse.json({ data: { client, medical } });
}
