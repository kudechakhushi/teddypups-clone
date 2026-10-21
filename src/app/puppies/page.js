import Link from "next/link";
import PuppyCard from "@/components/PuppyCard";
import { PUPPIES, GONE_HOME, BREEDS, img } from "@/lib/data";
import { wa } from "@/lib/site";

export const metadata = {
  title: "Available puppies",
  description: "Teacup and teddy bear puppies available now in Dubai and imported from trusted breeders. Every listing shows real photos of the puppy.",
};

export default async function PuppiesPage({ searchParams }) {
  const sp = await searchParams;
  const origin = sp?.origin;
  const breed = sp?.breed;

  let list = PUPPIES;
  if (origin === "local" || origin === "imported") list = list.filter((p) => p.origin === origin);
  if (breed) list = list.filter((p) => p.breedKey === breed);

  const href = (o, b) => {
    const q = new URLSearchParams();
    if (o) q.set("origin", o);
    if (b) q.set("breed", b);
    const s = q.toString();
    return `/puppies${s ? `?${s}` : ""}`;
  };

  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <p className="hand">from Teddy&apos;s sketchbook</p>
          <h1>Available puppies</h1>
          <p className="lead">Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.</p>

          <div className="chips">
            <Link className={`chip ${!origin ? "on" : ""}`} href={href(null, breed)}>All</Link>
            <Link className={`chip ${origin === "local" ? "on" : ""}`} href={href("local", breed)}>In Dubai</Link>
            <Link className={`chip ${origin === "imported" ? "on" : ""}`} href={href("imported", breed)}>Imported</Link>
          </div>
          <div className="chips">
            <Link className={`chip ${!breed ? "on" : ""}`} href={href(origin, null)}>Any breed</Link>
            {BREEDS.map((b) => (
              <Link key={b.key} className={`chip ${breed === b.key ? "on" : ""}`} href={href(origin, b.key)}>{b.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          {list.length ? (
            <div className="grid">{list.map((p) => <PuppyCard key={p.slug} p={p} />)}</div>
          ) : (
            <div className="center">
              <p className="lead" style={{ margin: "0 auto 1rem" }}>No puppies match those filters right now.</p>
              <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>
            </div>
          )}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div><h2>Already gone home</h2><p>These puppies have found their families.</p></div>
            <Link className="btn btn-ghost btn-sm" href="/gone-home">See the puppies who&apos;ve gone home</Link>
          </div>
          <div className="grid">
            {GONE_HOME.map((g) => (
              <div key={g.name} className="card gone">
                <div className="card-img"><img src={img(g.src)} alt={g.name} loading="lazy" /><span className="tag tag-gone">gone home ♥</span></div>
                <div className="card-body"><h3>{g.name}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}