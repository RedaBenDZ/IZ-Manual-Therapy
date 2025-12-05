import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    today: 0,
    week: 0,
    monthRevenue: 0,
    notifications: 0,
  });
}
