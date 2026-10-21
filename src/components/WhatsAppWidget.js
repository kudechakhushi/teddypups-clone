"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE, wa } from "@/lib/site";
import { BREEDS } from "@/lib/data";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="wa-panel" role="dialog" aria-label="Chat with TeddyPups">
          <div className="wa-head">
            <img src="/brand/logo.png" alt="" />
            <div><strong>{SITE.name}</strong><small>online</small></div>
          </div>
          <div className="wa-body">
            <p className="bubble me">Hi TeddyPups! I&apos;d love to know more about your puppies.</p>
            <p className="bubble">Select your preferred breed or tell us what you&apos;re looking for. We&apos;ll guide you based on availability and your lifestyle.</p>
            <div className="wa-chips">
              {BREEDS.map((b) => (
                <Link key={b.key} href={`/puppies?breed=${b.key}`} onClick={() => setOpen(false)}>{b.label}</Link>
              ))}
            </div>
          </div>
          <div className="wa-foot">
            <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp</a>
          </div>
        </div>
      )}
      <button className="wa-fab" onClick={() => setOpen(!open)} aria-label="Chat on WhatsApp">💬</button>
      <div className="mobile-bar">
        <a className="btn btn-sm" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        <a className="btn btn-sm btn-ghost" href={`tel:+${SITE.phoneRaw}`}>Call</a>
      </div>
    </>
  );
}