"use client";
import { useState } from "react";

export default function FaqList({ items, searchable = false }) {
  const [q, setQ] = useState("");
  const shown = items.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      {searchable && (
        <input className="search" placeholder="sniff out a question…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search questions" />
      )}
      <div className="faq">
        {shown.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
        {shown.length === 0 && <p className="center">No matches. Ask us on WhatsApp instead!</p>}
      </div>
    </>
  );
}