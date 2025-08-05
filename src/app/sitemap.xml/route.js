const today = "2025-08-05";

const sitemapData = [
  {
    url: "https://mendora.qzz.io",
    lastMod: today,
    changefreq: "yearly",
    priority: 1,
  },
  {
    url: "https://mendora.qzz.io/showcase",
    lastMod: today,
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://mendora.qzz.io/about",
    lastMod: today,
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "https://mendora.qzz.io/faq",
    lastMod: today,
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "https://mendora.qzz.io/docs",
    lastMod: today,
    changefreq: "weekly",
    priority: 0.4,
  },
  {
    url: "https://mendora.qzz.io/download",
    lastMod: today,
    changefreq: "weekly",
    priority: 0.4,
  },
];

function generateSitemapXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .sort((a, b) => b.priority - a.priority)
  .map(
    ({ url, lastMod, changefreq, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;
}

export const dynamic = "force-static";

export function GET() {
  const sitemapXml = generateSitemapXml(sitemapData);
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
