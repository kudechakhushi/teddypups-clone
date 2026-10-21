import { img } from "./site";
export { img };

export const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const sub = (p) => [p.name !== p.breed && p.breed, p.sex, p.age].filter(Boolean).join(" · ");

export const BREEDS = [
  { key: "maltipoo", label: "Maltipoo" },
  { key: "pomeranian", label: "Pomeranian" },
  { key: "poodle", label: "Poodle" },
  { key: "cavapoo", label: "Cavapoo" },
  { key: "shih-tzu", label: "Shih Tzu" },
];

// origin: "local" (Dubai showroom) or "imported". I inferred this: edit freely.
export const PUPPIES = [
  { slug: "maltipoo-max-male", name: "Max", breed: "Maltipoo", breedKey: "maltipoo", sex: "boy", age: "3 months", origin: "imported", video: true,
    images: ["Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp", "RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg"] },
  { slug: "korean-teacup-maltipoo-female", name: "Korean Teacup Maltipoo", breed: "Korean Teacup Maltipoo", breedKey: "maltipoo", sex: "girl", age: "2 months", origin: "imported", video: true,
    images: ["gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg"] },
  { slug: "korean-teacup-poodle-female", name: "Korean Teacup Poodle", breed: "Korean Teacup Poodle", breedKey: "poodle", sex: "girl", age: "2 months", origin: "imported",
    images: ["xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg"] },
  { slug: "maltipoo-cavapoo-male", name: "Maltipoo & Cavapoo", breed: "Maltipoo & Cavapoo", breedKey: "cavapoo", sex: "boy", age: "3 months Maltipoo & 2 months Cavapoo", origin: "local", video: true,
    images: ["YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg"] },
  { slug: "toy-poodle-male-female", name: "Toy Poodle", breed: "Toy Poodle", breedKey: "poodle", sex: "boy & girl", age: "2 months", origin: "local",
    images: ["vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg"] },
  { slug: "maltipoo-female-2", name: "Maltipoo", breed: "Maltipoo", breedKey: "maltipoo", sex: "girl", age: "3 months", origin: "local", video: true,
    images: ["3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg"] },
  { slug: "pomeranian-female", name: "Pomeranian", breed: "Pomeranian", breedKey: "pomeranian", sex: "girl", age: "3 months", origin: "local",
    images: ["3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg"] },
  { slug: "copper-male", name: "Copper", breed: "Cavapoo", breedKey: "cavapoo", sex: "boy", age: "2 months", origin: "local",
    images: ["O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg"] },
  { slug: "shitzu-female", name: "Shih Tzu", breed: "Shih Tzu", breedKey: "shih-tzu", sex: "girl", age: "2 months", origin: "local",
    images: ["qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg"] },
  { slug: "shitzu-male", name: "Shih Tzu", breed: "Shih Tzu", breedKey: "shih-tzu", sex: "boy", age: "2 months", origin: "local",
    images: ["crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg"] },
  { slug: "maltipoo-female-1", name: "Maltipoo", breed: "Maltipoo", breedKey: "maltipoo", sex: "girl", age: "2.5 months", origin: "local",
    images: ["wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg"] },
  { slug: "maltipoo-female", name: "Maltipoo", breed: "Maltipoo", breedKey: "maltipoo", sex: "girl", age: "2 months", origin: "local",
    images: ["lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg"] },
  { slug: "korean-teacup-pomeranian-1", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", breedKey: "pomeranian", sex: "girl", age: "2 months", origin: "imported",
    images: ["EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg"] },
  { slug: "korean-teacup-pomeranian", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", breedKey: "pomeranian", sex: "girl", age: "2 months", origin: "imported",
    images: ["vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg"] },
  { slug: "korean-teacup-pomeranian-male", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", breedKey: "pomeranian", sex: "boy", age: "2 months", origin: "imported",
    images: ["nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg"] },
];

export const GONE_HOME = [
  { name: "Ace", src: "mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif" },
  { name: "Leo", src: "QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif" },
  { name: "Mia", src: "4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif" },
  { name: "Sadie", src: "159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif" },
  { name: "Pomeranian", src: "bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif" },
];

export const SHOWROOM = [
  "FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg",
  "Vi-kzyvemRl4/e740ed8a24/27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg",
  "g_e4ebbc7fyG/8276289ae7/27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg",
  "skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg",
];

export const FAMILIES = [
  { src: "dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg", caption: "Lulu 🧸 with her new mummy ❤️" },
  { src: "TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg", caption: "Adorable Maltipoo baby 🧸❤️" },
  { src: "j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg", caption: "My new teddy puppy 🥰🧸" },
  { src: "HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg", caption: "Our new puppies 🧸🥰🤗" },
  { src: "uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg", caption: "New puppy 🧸😍" },
  { src: "pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg", caption: "Gang of 3 😍🧸" },
  { src: "4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg", caption: "So happy 😍😍" },
  { src: "3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg", caption: "New pup 🤗💫" },
];

export const QUOTE = {
  text: "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
  by: "Sarah M., Dubai, UAE",
};

export const JOURNEY = [
  { t: "Choose your breed", d: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle." },
  { t: "Get photos & details", d: "Our team will share real photos, health details, and all necessary information directly on WhatsApp." },
  { t: "Secure & safe delivery", d: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free." },
];

export const TRUST = [
  { t: "Vet-checked & healthy", d: "Every puppy comes vaccinated, dewormed, and with a verified health certificate." },
  { t: "Korea to Dubai, safely", d: "Trusted breeders, safe travel, and premium care from start to finish." },
  { t: "Support 24/7", d: "Always here to help, from choosing your puppy to post-delivery support." },
  { t: "Trusted by families worldwide", d: "Puppies delivered to loving homes all around the world." },
];

export const INCLUDED = ["Vaccinated", "Dewormed", "Verified health certificate from licensed vets", "Thoroughly checked before joining your family"];

export const IMPORT_STEPS = [
  { t: "Reserve your puppy", d: "Tell us which puppy has captured your heart." },
  { t: "Personalized consultation", d: "We finalize details with you and share updates on your puppy's journey." },
  { t: "Import and arrival", d: "We manage health checks, travel arrangements, and documentation." },
  { t: "Welcome home", d: "We help your new puppy settle in and ensure a smooth transition into your home." },
];

export const LOCAL_STEPS = [
  { t: "Explore our puppies", d: "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information." },
  { t: "Choose your puppy", d: "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly." },
  { t: "Meet before you choose", d: "Spend time bonding before making your decision." },
  { t: "Pick-up or delivery", d: "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable." },
];

export const IMPORT_STEPS_LONG = [
  { t: "Reserve your puppy", d: "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences." },
  { t: "Personalized consultation", d: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey." },
  { t: "Import and arrival", d: "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family." },
  { t: "Welcome home", d: "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home." },
];

export const PROMISE = [
  { t: "Hand-selected breeders", d: "We work only with breeders who uphold the highest ethical and health standards." },
  { t: "Full transparency", d: "Photos, videos, and health certificates are shared before your puppy travels." },
  { t: "Safe, stress-free delivery", d: "We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you." },
];

export const DELIVERY = [
  { t: "Take your puppy home the same day", d: "Local puppies are available immediately: visit, fall in love, and go home together." },
  { t: "Delivery within Dubai", d: "Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably." },
  { t: "Safe international cargo", d: "We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free." },
  { t: "Worldwide delivery", d: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
];

export const WHY = [
  { t: "International cargo", d: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
  { t: "Support 24/7", d: "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support, we're just a message away." },
  { t: "Health guarantee", d: "All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
];

export const FAQS = [
  { q: "Are your puppies vaccinated and health-checked?", a: "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
  { q: "Can I meet a puppy before I decide?", a: "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision." },
  { q: "Can I take my puppy home the same day?", a: "Local puppies are available immediately, so you can take your puppy home the same day." },
  { q: "Do you import puppies from abroad?", a: "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond, and we handle the import for you." },
  { q: "How does an imported puppy travel to Dubai?", a: "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free." },
  { q: "Will I see photos and health details first?", a: "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp." },
  { q: "Do you deliver?", a: "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world." },
  { q: "Which breeds do you usually have?", a: "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie." },
  { q: "Is there help after my puppy comes home?", a: "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend." },
];