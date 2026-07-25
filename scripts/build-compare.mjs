#!/usr/bin/env node
// Builds all 9 site variants as static exports and merges them into one
// combined output so they can be browsed side by side under one deployment:
//   /            -> site      (home, links out to each variant)
//   /site-2/     -> site-2
//   /site-3/     -> site-3
//   /site-4/     -> site-4
//   /site-5/     -> site-5
//   /site-6/     -> site-6
//   /site-7/     -> site-7 (site-6, split into multiple pages)
//   /site-8/     -> site-8 (site-7, redesigned: warm, alive, mission-driven)
//   /site-9/     -> site-9 (site-7, refined: clearer, richer, action-oriented)
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(rootDir, "outputs", "compare");

// When deploying under a subpath (e.g. GitHub Pages project sites), set
// PAGES_BASE_PATH=/repo-name so every variant's asset paths are prefixed
// correctly. Defaults to "" for root-domain deployments.
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const variants = [
  { dir: "site", target: ".", siteKey: "home" },
  { dir: "site-2", target: "site-2", siteKey: "site-2" },
  { dir: "site-3", target: "site-3", siteKey: "site-3" },
  { dir: "site-4", target: "site-4", siteKey: "site-4" },
  { dir: "site-5", target: "site-5", siteKey: "site-5" },
  { dir: "site-6", target: "site-6", siteKey: "site-6" },
  { dir: "site-7", target: "site-7", siteKey: "site-7" },
  { dir: "site-8", target: "site-8", siteKey: "site-8" },
  { dir: "site-9", target: "site-9", siteKey: "site-9" },
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const variant of variants) {
  const cwd = path.join(rootDir, variant.dir);
  const basePath =
    variant.target === "."
      ? pagesBasePath
      : `${pagesBasePath}/${variant.target}`;
  console.log(`\n> building ${variant.dir} (basePath="${basePath}")`);
  execSync("npx next build", {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_COMPARE_NAV: "true",
      NEXT_PUBLIC_SITE_KEY: variant.siteKey,
    },
  });

  const exported = path.join(cwd, "out");
  if (!existsSync(exported)) {
    throw new Error(`expected static export at ${exported}, but it was not created`);
  }

  const destination = path.join(outDir, variant.target);
  mkdirSync(destination, { recursive: true });
  cpSync(exported, destination, { recursive: true });
  console.log(`  copied ${variant.dir}/out -> outputs/compare/${variant.target}`);
}

console.log(`\nCombined comparison site ready at ${outDir}`);
console.log("Serve it locally with: npx serve outputs/compare");
