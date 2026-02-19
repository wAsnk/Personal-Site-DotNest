import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());

const partPaths = [
  "partials/layout.open.html",
  "partials/section.hero.html",
  "partials/section.rsvp.html",
  "partials/section.divider.html",
  "partials/section.details.html",
  "partials/section.gifts.html",
  "partials/section.divider.html",
  "partials/section.story.html",
  "partials/section.gallery.html",
  "partials/section.traditions.html",
  "partials/section.further.html",
  "partials/layout.close.html",
];

const parts = await Promise.all(
  partPaths.map(async (partPath) => {
    const fullPath = resolve(root, partPath);
    return readFile(fullPath, "utf8");
  }),
);

await writeFile(resolve(root, "home.html"), parts.join("\n"), "utf8");
console.log(`Built home.html from ${partPaths.length} partials.`);
