import Link from "next/link";
import Hero from "@/components/Hero";
import PuppyCard from "@/components/PuppyCard";
import FaqList from "@/components/FaqList";
import { PUPPIES, FAMILIES, SHOWROOM, JOURNEY, TRUST, FAQS, QUOTE, img, sub } from "@/lib/data";
import { wa } from "@/lib/site";

export default function Home() {
  const slides = PUPPIES.slice(0, 6).map((p) => ({
    slug: p.slug, src: img(p.images[0]), alt: `${p.name}: ${sub(p)}`, label: p.name,
  }));

  return (
    <>
      <Hero slides={slides} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Meet the pups</h2>
              <p>Real puppies, real photos, looking for their families right now.</p>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/puppies">See all available puppies</Link>
          </div>
          <div className="grid">
            {PUPPIES.map((p) => <PuppyCard key={p.slug} p={p} />)}
            <Link href="/puppies" className="card more-tile">Meet them all →</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="center" style={{ marginBottom: "2rem" }}>Two ways to meet your puppy</h2>
          <div className="two-col">
            <div className="panel">
              <img className="panel-img" src={img(SHOWROOM[0])} alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" />
              <div className="panel-body">
                <span className="route">In our showroom</span>
                <h3>Puppies in Dubai</h3>
                <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
                <Link className="btn" href="/puppies?origin=local">Meet local puppies</Link>
              </div>
            </div>
            <div className="panel">
              <div className="panel-body imported">
                <span className="route">Korea → Dubai</span>
                <h3>Imported for you</h3>
                <p>Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let us handle the import.</p>
                <Link className="btn" href="/puppies?origin=imported">See imported puppies</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: "2rem" }}>
            <h2>Your puppy journey</h2>
            <p className="lead" style={{ margin: "1rem auto" }}>A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
          </div>
          <div className="steps">
            {JOURNEY.map((s) => (<div className="step" key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>))}
          </div>
          <div className="strip">
            {SHOWROOM.map((s) => <img key={s} src={img(s)} alt="The apricot teddy bear puppy from our showroom" loading="lazy" />)}
          </div>
          <div className="row" style={{ justifyContent: "center", marginTop: "2rem" }}>
            <Link className="btn btn-ghost" href="/how-it-works">How it works</Link>
            <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="hand center">puppy passport</p>
          <h2 className="center" style={{ marginBottom: "2rem" }}>Why families trust TeddyPups</h2>
          <div className="trust">
            {TRUST.map((t) => (<div key={t.t}><h3>{t.t}</h3><p>{t.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="center">Happy families &amp; puppies</h2>
          <p className="lead center" style={{ margin: "1rem auto 2rem" }}>We are truly honored to see our puppies become cherished members of loving families.</p>
          <blockquote className="quote">“{QUOTE.text}”<cite>{QUOTE.by}</cite></blockquote>
          <div className="masonry">
            {FAMILIES.map((f) => (
              <figure key={f.src}><img src={img(f.src)} alt="A happy TeddyPups family with their new puppy" loading="lazy" /><figcaption>{f.caption}</figcaption></figure>
            ))}
          </div>
          <div className="center" style={{ marginTop: "1.5rem" }}><Link className="btn btn-ghost" href="/happy-families">See every happy family</Link></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><h2>Questions, answered</h2><Link className="btn btn-ghost btn-sm" href="/faq">Read all questions</Link></div>
          <FaqList items={FAQS.slice(0, 3)} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Ready to meet your new best friend?</h2>
              <p>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
              <div className="row">
                <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
                <Link className="btn btn-ghost" href="/contact">Visit &amp; contact</Link>
              </div>
            </div>
            <img src={img(PUPPIES[0].images[0])} alt="Max, waiting inside" />
          </div>
        </div>
      </section>
    </>
  );
}