// Submits all sitemap URLs to IndexNow (Bing/Yandex instant indexing).
// Run after deploying new products: npm run indexnow
const HOST = "www.rupmilanjewellers.com";
const KEY = "42389465e58eff2a226bf6a412c19056";

const sitemapXml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urls.length === 0) {
  console.error("No URLs found in sitemap — aborting.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Submitted ${urls.length} URLs to IndexNow — HTTP ${res.status} ${res.statusText}`);
if (!res.ok && res.status !== 202) process.exit(1);
