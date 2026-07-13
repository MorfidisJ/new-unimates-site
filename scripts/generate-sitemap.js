import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://unimates.net';

// Define static and dynamic routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/#features', priority: '0.8', changefreq: 'monthly' },
  { path: '/#how-it-works', priority: '0.8', changefreq: 'monthly' },
  { path: '/#press', priority: '0.7', changefreq: 'weekly' },
  { path: '/#download', priority: '0.9', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.6', changefreq: 'monthly' },
  { path: '/support', priority: '0.7', changefreq: 'monthly' },
];

function generateSitemap() {
  const date = new Date().toISOString().split('T')[0];

  const urlElements = routes
    .map(
      (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>
`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✅ Successfully generated sitemap.xml at ${sitemapPath}`);
}

generateSitemap();
