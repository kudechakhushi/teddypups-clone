"use client";
import { useState } from "react";
import { PUPPIES} from "@/lib/data";

export default function ContactLetter() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
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

  if (status === "sent") return <p className="ok">Your letter has been posted. We&apos;ll write back soon! 🐾</p>;

  return (
    <form className="letter" onSubmit={onSubmit}>
      <p>Dear TeddyPups,</p>
      <p>
        my name is <input name="name" required aria-label="Your name" />, and you can reach me on{" "}
        <input name="phone" required aria-label="Phone" /> or by email at{" "}
        <input name="email" type="email" aria-label="Email" />.
      </p>
      <p>
        I live in <input name="area" aria-label="Area" />, and I&apos;m curious about{" "}
        <select name="puppy" aria-label="Puppy you are interested in">
          <option value="">any puppy (not sure yet)</option>
          {PUPPIES.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name} ({p.name === p.breed ? "" : `${p.breed}, `}{p.sex})</option>
          ))}
        </select>.
      </p>
      <textarea name="message" rows={4} placeholder="Your message (optional)" />
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {error && <p className="err">{error}</p>}
      <p>with love, a future puppy parent</p>
      <button className="btn" disabled={status === "sending"}>{status === "sending" ? "Posting…" : "Post my letter"}</button>
    </form>
  );
}