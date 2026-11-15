// Scans public/images/products/ and writes src/data/image-manifest.json
// listing every product image that actually exists. Runs automatically
// before `npm run dev` and `npm run build` (see package.json pre-scripts),
// so products whose photos haven't been uploaded yet stay hidden until
// their image files land in the folder.
import { readdirSync, statSync, writeFileSync, openSync, readSync, closeSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const productsDir = join(root, "public", "images", "products");
const outFile = join(root, "src", "data", "image-manifest.json");
const transparentFile = join(root, "src", "data", "image-transparent.json");

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (IMAGE_EXT.test(entry)) {
      results.push("/" + relative(join(root, "public"), full).split("\\").join("/"));
    }
  }
  return results;
}

const images = walk(productsDir).sort();
writeFileSync(outFile, JSON.stringify(images, null, 2) + "\n");
console.log(`image-manifest: ${images.length} product images found`);

// Which product images have see-through pixels? WhatsApp/Facebook render those as BLACK in
// link previews, so the product page picks the first NON-transparent photo for og:image.
// Uses sharp (installed with Next.js); falls back to reading the PNG header if unavailable.
async function findTransparent(list) {
  let sharp = null;
  try { sharp = (await import("sharp")).default; } catch { /* fallback below */ }
  const out = [];
  for (const img of list) {
    const file = join(root, "public", img);
    try {
      if (sharp) {
        const { isOpaque } = await sharp(file).stats();
        if (!isOpaque) out.push(img);
      } else {
        const fd = openSync(file, "r"); const head = Buffer.alloc(26);
        readSync(fd, head, 0, 26, 0); closeSync(fd);
        if (head.readUInt32BE(0) === 0x89504e47 && (head[25] === 4 || head[25] === 6)) out.push(img);
      }
    } catch { /* unreadable: treat as opaque */ }
  }
  return out;
}

const transparent = await findTransparent(images);
writeFileSync(transparentFile, JSON.stringify(transparent, null, 2) + "\n");
console.log(`image-transparent: ${transparent.length} images have transparency`);
