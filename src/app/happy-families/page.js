import Link from "next/link";
import { FAMILIES, QUOTE, img } from "@/lib/data";
import { wa } from "@/lib/site";

export const metadata = { title: "Happy families", description: "Meet the families who welcomed a Teddy Pup into their homes and hearts." };

export default function HappyFamilies() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="center">Happy families &amp; puppies</h1>
        <p className="lead center" style={{ margin: "1rem auto 2rem" }}>We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.</p>
        <blockquote className="quote">“{QUOTE.text}”<cite>{QUOTE.by}</cite></blockquote>
        <div className="masonry">
          {FAMILIES.map((f) => (
            <figure key={f.src}><img src={img(f.src)} alt="A happy TeddyPups family with their new puppy" loading="lazy" /><figcaption>{f.caption}</figcaption></figure>
          ))}
        </div>
        <div className="row" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Link className="btn" href="/puppies">Meet available puppies</Link>
          <a className="btn btn-ghost" href={wa()} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}