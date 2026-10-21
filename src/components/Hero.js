"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { wa } from "@/lib/site";

export default function Hero({ slides }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hand">every puppy is family</p>
          <h1>Premium teacup <span className="accent">puppies</span> in Dubai</h1>
          <p className="lead">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
          <div className="row">
            <Link className="btn" href="/puppies">View available puppies</Link>
            <a className="btn btn-ghost" href={wa()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
          </div>
        </div>
        <div>
          <div className="hero-media">
            {slides.map((s, k) => (
              <Link key={s.slug} href={`/puppies/${s.slug}`} className={`hero-slide ${k === i ? "on" : ""}`} tabIndex={k === i ? 0 : -1}>
                <img src={s.src} alt={s.alt} />
              </Link>
            ))}
          </div>
          <div className="hero-names">
            {slides.map((s, k) => (
              <button key={s.slug} className={k === i ? "on" : ""} onClick={() => setI(k)}>{s.label}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}