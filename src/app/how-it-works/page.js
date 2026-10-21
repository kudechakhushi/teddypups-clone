import Link from "next/link";
import { LOCAL_STEPS, IMPORT_STEPS_LONG, PROMISE, DELIVERY, WHY } from "@/lib/data";
import { wa } from "@/lib/site";

export const metadata = {
  title: "How it works",
  description: "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you. Every step, from choosing to coming home.",
};

const Cards = ({ items }) => (
  <div className="trust">{items.map((x) => (<div key={x.t}><h3>{x.t}</h3><p>{x.d}</p></div>))}</div>
);

export default function HowItWorks() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <h1>How it works</h1>
          <p className="lead">Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
          <div className="chips">
            <a className="chip" href="#two-ways">1 Two ways home</a>
            <a className="chip" href="#promise">2 Our premium puppy promise</a>
            <a className="chip" href="#delivery">3 Delivery &amp; collection</a>
            <a className="chip" href="#why">4 Why choose us</a>
          </div>
        </div>
      </section>

      <section className="section" id="two-ways">
        <div className="container">
          <p className="hand">choose your way</p>
          <h2>Two ways home</h2>

          <h3 style={{ margin: "2rem 0 .5rem" }}>Meet your puppy in person <span className="route">· In Dubai</span></h3>
          <p className="lead">Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they&apos;re raised with care, proper nutrition, and veterinary checks.</p>
          <div className="steps">{LOCAL_STEPS.map((s) => (<div className="step" key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>))}</div>

          <h3 style={{ margin: "3rem 0 .5rem" }}>Order upon request <span className="route">· Imported (Europe · Korea → Dubai)</span></h3>
          <p className="lead">Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world&apos;s most sought-after teacup breeds, ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond. From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world&apos;s finest puppies to Dubai, just for you.</p>
          <div className="steps">{IMPORT_STEPS_LONG.map((s) => (<div className="step" key={s.t}><h3>{s.t}</h3><p>{s.d}</p></div>))}</div>
        </div>
      </section>

      <section className="section alt" id="promise">
        <div className="container">
          <p className="hand">puppy passport</p>
          <h2 style={{ marginBottom: "1.5rem" }}>Our premium puppy promise</h2>
          <Cards items={PROMISE} />
        </div>
      </section>

      <section className="section" id="delivery">
        <div className="container">
          <h2>Delivery &amp; collection</h2>
          <p className="lead">From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.</p>
          <Cards items={DELIVERY} />
        </div>
      </section>

      <section className="section alt" id="why">
        <div className="container">
          <h2>Why choose us</h2>
          <p className="lead">We&apos;re here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we&apos;re with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.</p>
          <Cards items={WHY} />
          <h3 style={{ marginTop: "3rem" }}>Unique and high quality puppies</h3>
          <p className="lead">When you choose TeddyPups, you can trust that you&apos;re getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
          <div className="row">
            <a className="btn" href={wa()} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>
            <Link className="btn btn-ghost" href="/puppies">See available puppies</Link>
          </div>
        </div>
      </section>
    </>
  );
}