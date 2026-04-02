import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

const PRICING: Record<string, { currency: string; amount: number }> = {
  fr: { currency: "eur", amount: 9900 }, // 39€
  en: { currency: "usd", amount: 9900 }, // $39
};

export async function POST(req: NextRequest) {
  try {
    const { locale } = await req.json();
    const lang = locale === "en" ? "en" : "fr";
    const { currency, amount } = PRICING[lang];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: lang,
      line_items: [
        {
          price_data: {
            currency,
            product: process.env.STRIPE_PRODUCT_ID!,
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&lang=${lang}`,
      cancel_url: `${baseUrl}/${lang}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
