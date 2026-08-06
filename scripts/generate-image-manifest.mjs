// Scans public/images/products/ and writes src/data/image-manifest.json
// listing every product image that actually exists. Runs automatically
// before `npm run dev` and `npm run build` (see package.json pre-scripts),
// so products whose photos haven't been uploaded yet stay hidden until
// their image files land in the folder.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const productsDir = join(root, "public", "images", "products");
const outFile = join(root, "src", "data", "image-manifest.json");

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
