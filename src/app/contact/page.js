import ContactLetter from "@/components/ContactLetter";
import { SITE, wa, img } from "@/lib/site";
import { SHOWROOM } from "@/lib/data";

export const metadata = {
  title: "Visit & contact",
  description: "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
};

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1>Get in touch with us</h1>
        <p className="lead">Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we&apos;d love to hear from you!</p>

        <div className="contact-grid">
          <ContactLetter />
          <div className="contact-cards">
            <div><small>WhatsApp</small><a href={wa()} target="_blank" rel="noopener noreferrer"><strong>{SITE.phone}</strong></a></div>
            <div><small>call us</small><a href={`tel:+${SITE.phoneRaw}`}><strong>{SITE.phone}</strong></a></div>
            <div><small>email</small><a href={`mailto:${SITE.email}`}><strong>{SITE.email}</strong></a></div>
          </div>
        </div>

        <div className="two-col" style={{ marginTop: "4rem", alignItems: "center" }}>
          <div>
            <h2>Visit us in Downtown Dubai</h2>
            <p className="lead">Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
            <p><strong>{SITE.address}</strong></p>
            <p style={{ marginTop: "1rem" }}><a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
          </div>
          <img style={{ borderRadius: 22 }} src={img(SHOWROOM[3])} alt="The apricot teddy bear puppy from our showroom, held up to say hello" />
        </div>
      </div>
    </section>
  );
}