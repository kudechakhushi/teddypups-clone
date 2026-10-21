"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, wa } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
      <div className="ribbon">every puppy is family</div>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <img src="/brand/logo.png" alt="" />
            <span>TeddyPups</span>
          </Link>
          <nav className="nav-desktop" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={active(n.href) ? "active" : ""}>{n.label}</Link>
            ))}
          </nav>
          <a className="btn btn-sm hide-mobile" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
        </div>
      </header>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true">
          <div className="drawer-top">
            <span className="hand">where to, friend?</span>
            <button className="menu-btn" style={{ display: "inline-flex" }} onClick={() => setOpen(false)}>Close</button>
          </div>
          <nav>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={active(n.href) ? "active" : ""}>{n.label}</Link>
            ))}
          </nav>
          <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <p>{SITE.phone}</p>
        </div>
      )}
    </>
  );
}