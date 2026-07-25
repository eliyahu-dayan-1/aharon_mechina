#!/usr/bin/env node
// Builds all 8 site variants as static exports and merges them into one
// combined output so they can be browsed side by side under one deployment:
//   /            -> site      (home, links out to each variant)
//   /site-2/     -> site-2
//   /site-3/     -> site-3
//   /site-4/     -> site-4
//   /site-5/     -> site-5
//   /site-6/     -> site-6
//   /site-7/     -> site-7 (site-6, split into multiple pages)
//   /site-8/     -> site-8 (site-7, redesigned: warm, alive, mission-driven)
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(rootDir, "outputs", "compare");

const variants = [
  { dir: "site", target: "." },
  { dir: "site-2", target: "site-2" },
  { dir: "site-3", target: "site-3" },
  { dir: "site-4", target: "site-4" },
  { dir: "site-5", target: "site-5" },
  { dir: "site-6", target: "site-6" },
  { dir: "site-7", target: "site-7" },
  { dir: "site-8", target: "site-8" },
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const variant of variants) {
  const cwd = path.join(rootDir, variant.dir);
  console.log(`\n> building ${variant.dir} (npm run build:compare)`);
  execSync("npm run build:compare", { cwd, stdio: "inherit" });

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
