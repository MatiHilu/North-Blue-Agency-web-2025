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

function parseExistingSitemap(xml: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
  let match: RegExpExecArray | null;
  while ((match = urlBlockRegex.exec(xml)) !== null) {
    const block = match[1];
    const get = (tag: string) => {
      const m = new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`).exec(block);
      return m ? m[1].trim() : undefined;
    };
    const url = get("loc");
    if (!url) continue;
    const lastmod = get("lastmod");
    const changefreq = get("changefreq") as SitemapEntry["changeFrequency"];
    const priorityStr = get("priority");
    const entry: SitemapEntry = { url };
    if (lastmod) entry.lastModified = lastmod;
    if (changefreq) entry.changeFrequency = changefreq;
    if (priorityStr && !isNaN(Number(priorityStr)))
      entry.priority = Number(priorityStr);
    entries.push(entry);
  }
  return entries;
}

function formatDateForFilename(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${yyyy}${mm}${dd}-${hh}${min}`;
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

  // Try to load existing sitemap.xml to preserve current URLs
  const originalFile = path.join(outDir, "sitemap.xml");
  let previous: SitemapEntry[] = [];
  if (fs.existsSync(originalFile)) {
    try {
      const existingXml = fs.readFileSync(originalFile, "utf8");
      previous = parseExistingSitemap(existingXml);
      console.log(
        `ℹ️  Loaded ${previous.length} existing URLs from public/sitemap.xml`
      );
    } catch (e) {
      console.warn(
        "⚠️  Could not read/parse existing sitemap.xml, continuing with fresh entries."
      );
    }
  }

  // Merge: keep previous entries as-is; add only new URLs
  const seen = new Set<string>(previous.map((e) => e.url));
  const additions: SitemapEntry[] = [];
  for (const e of entries) {
    if (!seen.has(e.url)) {
      additions.push(e);
      seen.add(e.url);
    }
  }
  const merged: SitemapEntry[] = [...previous, ...additions];

  // Serialize merged to a new timestamped file
  const xml = toXml(merged);
  const stamp = formatDateForFilename(new Date());
  const outFile = path.join(outDir, `new-sitemap-${stamp}.xml`);
  fs.writeFileSync(outFile, xml, "utf8");

  console.log(
    `✅ Wrote ${merged.length} URLs to ${path.relative(root, outFile)}`
  );
  if (additions.length > 0) {
    console.log(`➕ Added ${additions.length} new URLs (existing preserved)`);
  } else {
    console.log("ℹ️  No new URLs to add compared to existing sitemap.xml");
  }
}

main().catch((err) => {
  console.error("❌ Failed to generate sitemap:", err);
  process.exit(1);
});
