import Link from "next/link";
import { GONE_HOME, img } from "@/lib/data";

export const metadata = { title: "Gone home", description: "Puppies who have found their forever families." };

export default function GoneHome() {
  return (
    <section className="section">
      <div className="container">
        <p className="hand">happy endings</p>
        <h1>Gone home ♥</h1>
        <p className="lead">These puppies have found their families.</p>
        <div className="grid">
          {GONE_HOME.map((g) => (
            <div key={g.name} className="card gone">
              <div className="card-img"><img src={img(g.src)} alt={g.name} loading="lazy" /><span className="tag tag-gone">gone home ♥</span></div>
              <div className="card-body"><h3>{g.name}</h3></div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}><Link className="btn" href="/puppies">See available puppies</Link></div>
      </div>
    </section>
  );
}