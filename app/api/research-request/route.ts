import { NextRequest, NextResponse } from "next/server";

interface ResearchRequest {
  fullName: string;
  email: string;
  phone: string;
  language: string;
  category: string;
  specificRequest: string;
  budget: string;
  destination: string;
  urgency: string;
  paymentPreference?: string;
  consent: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ResearchRequest;

    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.category ||
      !data.specificRequest ||
      !data.budget ||
      !data.destination ||
      !data.consent
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const packageLabel =
      data.urgency === "priority" ? "Priority 24h – $349" : "Standard 48–72h – $199";

    const summary = [
      `New LotLink Research Request`,
      `Time: ${timestamp}`,
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone/WhatsApp: ${data.phone}`,
      `Language: ${data.language}`,
      `Category: ${data.category}`,
      `Budget (USD): ${data.budget}`,
      `Destination: ${data.destination}`,
      `Package: ${packageLabel}`,
      `Payment preference: ${data.paymentPreference || "USDT/USDC"}`,
      ``,
      `Specific request:`,
      data.specificRequest,
    ].join("\n");

    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      await fetch(discordWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "New Research Request",
              color: 2269942,
              description: summary,
              fields: [
                { name: "Email", value: data.email, inline: true },
                { name: "Phone", value: data.phone, inline: true },
                { name: "Package", value: packageLabel, inline: true },
              ],
              footer: { text: "LotLink intake" },
              timestamp,
            },
          ],
        }),
      });
    } else {
      console.log("[LotLink] No DISCORD_WEBHOOK_URL set. Request logged:", summary);
    }

    return NextResponse.json({
      success: true,
      message: "Request received successfully",
      package: packageLabel,
    });
  } catch (error) {
    console.error("Research request error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
