import Link from "next/link";
import { img, sub } from "@/lib/data";

export default function PuppyCard({ p }) {
  return (
    <Link href={`/puppies/${p.slug}`} className="card">
      <div className="card-img">
        <img src={img(p.images[0])} alt={`${p.name}: ${sub(p)}`} loading="lazy" />
        <span className="tag">Available</span>
        {p.video && <span className="tag tag-video">▶ video</span>}
      </div>
      <div className="card-body">
        <h3>{p.name}</h3>
        <p>{sub(p)}</p>
      </div>
    </Link>
  );
}