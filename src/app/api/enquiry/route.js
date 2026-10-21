import { NextResponse } from "next/server";

export async function POST(req) {
  let b;
  try { b = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  if (b.website) return NextResponse.json({ ok: true }); // honeypot: bots fill this hidden field

  const name = String(b.name || "").trim();
  const phone = String(b.phone || "").trim();
  const email = String(b.email || "").trim();

  if (name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });

  // Demo backend: logs to the server console (Vercel → Project → Logs).
  console.log("New enquiry:", { name, phone, email, area: b.area, puppy: b.puppy, message: b.message });
  return NextResponse.json({ ok: true });
}