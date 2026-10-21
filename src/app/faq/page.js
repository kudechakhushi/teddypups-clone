import FaqList from "@/components/FaqList";
import { FAQS } from "@/lib/data";
import { wa } from "@/lib/site";

export const metadata = {
  title: "Questions & answers",
  description: "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
};

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="center">Questions &amp; answers</h1>
        <p className="lead center" style={{ margin: "1rem auto 2rem" }}>Can&apos;t find what you&apos;re looking for? Message us on WhatsApp. Our team is available 24/7.</p>
        <FaqList items={FAQS} searchable />
        <div className="center" style={{ marginTop: "2rem" }}>
          <a className="btn" href={wa("Hi TeddyPups! I have a question:")} target="_blank" rel="noopener noreferrer">Ask your own question</a>
        </div>
      </div>
    </section>
  );
}