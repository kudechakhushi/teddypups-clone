import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = "https://puppy.instabizweb.com";
const src = await readFile("src/lib/data.js", "utf8");
const files = [...new Set([...src.matchAll(/"([\w-]{12}\/[a-f0-9]{10}\/[^"/]+)"/g)].map((m) => m[1]))];

const jobs = [
  { url: `${BASE}/brand/logo.png`, out: "public/brand/logo.png" },
  ...files.map((f) => ({ url: `${BASE}/media/${f}`, out: `public/media/${f}` })),
];

let ok = 0, failed = 0;
for (const j of jobs) {
  try {
    const res = await fetch(j.url);
    if (!res.ok) throw new Error(res.status);
    await mkdir(path.dirname(j.out), { recursive: true });
    await writeFile(j.out, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    failed++;
    console.log("FAILED:", j.url, e.message);
  }
}
console.log(`Done. ${ok} downloaded, ${failed} failed.`);