import { NextResponse } from "next/server";

const API_BASE_URL = "https://backend.bigbrosai.com/api/v1";

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/billing/whatsapp-pricing/public-rates`, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });

    const payload = await response.json().catch(() => null);

    return NextResponse.json(payload ?? { data: [] }, {
      status: response.status,
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, data: [], message: "Pricing is temporarily unavailable" },
      { status: 502 },
    );
  }
}
