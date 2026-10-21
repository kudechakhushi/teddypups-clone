import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import { PUPPIES, INCLUDED, IMPORT_STEPS, LOCAL_STEPS, cap, img, sub } from "@/lib/data";
import { wa } from "@/lib/site";

export function generateStaticParams() {
  return PUPPIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PUPPIES.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name}, ${p.breed} puppy`,
    description: `Meet ${p.name}: ${p.breed}, ${p.sex}, ${p.age}. Real photos from TeddyPups U.A.E.`,
    openGraph: { images: [img(p.images[0])] },
  };
}

export default async function PuppyPage({ params }) {
  const { slug } = await params;
  const idx = PUPPIES.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();

  const p = PUPPIES[idx];
  const prev = PUPPIES[(idx - 1 + PUPPIES.length) % PUPPIES.length];
  const next = PUPPIES[(idx + 1) % PUPPIES.length];
  const imported = p.origin === "imported";
  const steps = imported ? IMPORT_STEPS : LOCAL_STEPS;
  const pageUrl = `https://puppy.instabizweb.com/puppies/${p.slug}`; // replace with your live URL after deploy
  const waText = `Hi TeddyPups! I'm interested in ${p.name}, the ${p.breed}: ${pageUrl}`;

  return (
    <div className="container">
      <p className="crumbs"><Link href="/puppies">Available puppies</Link> / {p.name}</p>

      <div className="detail-grid">
        <Gallery images={p.images.map(img)} alt={`${p.name}: ${sub(p)}`} video={p.video} />
        <div>
          <span className="tag">Available</span>
          <h1 style={{ margin: ".6rem 0 .2rem" }}>{p.name}</h1>
          <p className="hand">{p.breed}</p>
          <dl className="facts">
            <div><dt>Breed</dt><dd>{p.breed}</dd></div>
            <div><dt>Boy or girl</dt><dd>{cap(p.sex)}</dd></div>
            <div><dt>Age</dt><dd>{p.age}</dd></div>
            <div><dt>Where</dt><dd>{imported ? "Imported for you" : "In our Dubai showroom"}</dd></div>
          </dl>
          <div className="row">
            <a className="btn" href={wa(waText)} target="_blank" rel="noopener noreferrer">Ask about {p.name} on WhatsApp</a>
            <a className="btn btn-ghost" href={`#enquire-${p.slug}`}>Send an enquiry</a>
          </div>

          <h3 style={{ marginTop: "2rem" }}>Every Teddy Pup comes</h3>
          <ul className="ticks">{INCLUDED.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </div>

      <section className="section">
        <p className="hand">the way home</p>
        <h2 style={{ marginBottom: "1.5rem" }}>{imported ? "Coming home from abroad" : "Meet and take home"}</h2>
        <div className="steps">
          {steps.map((s) => (<div className="step" key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>))}
        </div>
      </section>

      <section className="section" id={`enquire-${p.slug}`}>
        <p className="hand">dear TeddyPups…</p>
        <h2>Ask about {p.name}</h2>
        <p className="lead">Leave your details and our team will get back to you promptly, or message us on WhatsApp for the quickest reply.</p>
        <EnquiryForm puppy={`${p.name} (${p.breed})`} defaultMessage={`Hi! I'd love to know more about ${p.name} (${p.breed}).`} />
      </section>

      <div className="pager">
        <Link href={`/puppies/${prev.slug}`}><img src={img(prev.images[0])} alt="" /><span><small>Previous pup</small>{prev.name}</span></Link>
        <Link href={`/puppies/${next.slug}`}><img src={img(next.images[0])} alt="" /><span><small>Next pup</small>{next.name}</span></Link>
      </div>
    </div>
  );
}