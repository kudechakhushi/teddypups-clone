export const SITE = {
  name: "TeddyPups U.A.E.",
  phone: "+971 54 167 6733",
  phoneRaw: "971541676733",
  // TODO: put YOUR own number and email here for your demo
  email: "hello@example.com",
  address: "Downtown Dubai, United Arab Emirates",
  maps: "https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7",
  instagram: "https://www.instagram.com/teddypups.worldwide/",
  tiktok: "https://www.tiktok.com/@teddypupsuae",
  facebook: "https://www.facebook.com/profile.php?id=61567496944539",
};

// Static year: avoids new Date() during prerender. Update once a year.
export const YEAR = 2026;

// Start with the remote host. After the image download works, change to "/media".
export const IMG_BASE = "https://puppy.instabizweb.com/media";
export const img = (p) => `${IMG_BASE}/${p}`;

export const wa = (text = "Hi TeddyPups! I'd love to know more about your puppies.") =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

export const FOOTER_LINKS = [
  { href: "/puppies", label: "Available puppies" },
  { href: "/gone-home", label: "Gone home" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/how-it-works#delivery", label: "Delivery & collection" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];