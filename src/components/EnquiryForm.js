"use client";
import { useState } from "react";

export default function EnquiryForm({ puppy, defaultMessage }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    data.puppy = puppy || "";
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  }

  if (status === "sent") return <p className="ok">Thank you! Your enquiry is on its way. We&apos;ll get back to you shortly.</p>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Your name *<input name="name" required /></label>
      <label>Phone or WhatsApp *<input name="phone" required placeholder="With country code, e.g. +971 50 123 4567" /></label>
      <label>Email (optional)<input name="email" type="email" /></label>
      <label>Your area (optional)<input name="area" placeholder="e.g. Dubai Marina" /></label>
      <label>Message (optional)<textarea name="message" rows={4} defaultValue={defaultMessage} /></label>
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {error && <p className="err">{error}</p>}
      <button className="btn" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}