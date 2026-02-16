#!/usr/bin/env node
/**
 * Generate public/sitemap.xml from the app/sitemap.ts source (Next.js Metadata API).
 * Usage:
 *   npm run sitemap:generate
 */

import fs from "fs";
import path from "path";

// Import the app/sitemap function. It returns an array of entries.
import buildSitemap from "../app/sitemap";

// Minimal type to avoid importing Next types in this script
interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

function toISO(d?: Date | string): string | undefined {
  if (!d) return undefined;
  const dt = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(dt.getTime())) return undefined;
  return dt.toISOString();
}

function escapeXml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const lastmod = toISO(e.lastModified);
      const changefreq = e.changeFrequency;
      const priority =
        typeof e.priority === "number"
          ? Math.max(0, Math.min(1, e.priority))
          : undefined;

      return [
        "  <url>",
        `    <loc>${escapeXml(e.url)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : undefined,
        changefreq ? `    <changefreq>${changefreq}</changefreq>` : undefined,
        typeof priority === "number"
          ? `    <priority>${priority.toFixed(1)}</priority>`
          : undefined,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

function toLlms(entries: SitemapEntry[]): string {
  const seen = new Set<string>();
  const urls = entries
    .map((e) => e.url)
    .filter((url) => {
      if (!url) return false;
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });

  return [
    "# Auto-generated list of canonical URLs for LLM ingestion.",
    "# Source: app/sitemap.ts",
    `# Generated: ${new Date().toISOString()}`,
    "",
    ...urls,
    "",
  ].join("\n");
}

async function main() {
  console.log("🚀 Building sitemap from app/sitemap.ts...");

  const entries = (await buildSitemap()) as unknown as SitemapEntry[];
  if (!Array.isArray(entries)) {
    console.error(
      "Expected app/sitemap to return an array. Received:",
      entries
    );
    process.exit(1);
  }

  // Ensure public dir exists
  const root = path.join(process.cwd());
  const outDir = path.join(root, "public");
  fs.mkdirSync(outDir, { recursive: true });

  // Deduplicate incoming entries by URL to avoid duplicates in output
  const seen = new Set<string>();
  const deduped = entries.filter((e) => {
    if (!e.url || seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });

  // Serialize directly to sitemap.xml, replacing any previous file
  const xml = toXml(deduped);
  const sitemapFile = path.join(outDir, "sitemap.xml");
  fs.writeFileSync(sitemapFile, xml, "utf8");

  // Generate llms.txt (plain-text URL list for LLM crawlers) and replace existing
  const llms = toLlms(deduped);
  const llmsFile = path.join(outDir, "llms.txt");
  fs.writeFileSync(llmsFile, llms, "utf8");

  const uniqueUrls = deduped.length;

  console.log(
    `✅ Wrote ${uniqueUrls} URLs to ${path.relative(root, sitemapFile)}`
  );
  console.log(`✅ Wrote ${uniqueUrls} URLs to ${path.relative(root, llmsFile)}`);
}

main().catch((err) => {
  console.error("❌ Failed to generate sitemap:", err);
  process.exit(1);
});
