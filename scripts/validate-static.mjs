import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "AGENTS.md",
  "index.html",
  "styles.css",
  "script.js",
  "README.md",
  ".nojekyll",
  "assets/treelearn-dialog-state.png",
  "assets/treelearn-preview-state.png",
];

const failures = [];

for (const file of requiredFiles) {
  try {
    await access(path.join(root, file));
  } catch {
    failures.push(`Missing required file: ${file}`);
  }
}

const html = await readFile(path.join(root, "index.html"), "utf8");
const css = await readFile(path.join(root, "styles.css"), "utf8");
const js = await readFile(path.join(root, "script.js"), "utf8");

const externalRefs = [...html.matchAll(/(?:src|href)=["'](https?:\/\/|\/\/)/g)];
if (externalRefs.length > 0) {
  failures.push("External network references are not allowed.");
}

if (!html.includes('data-action="open-dialog"')) {
  failures.push("The open dialog action is missing.");
}

if ((js.match(/addEventListener/g) ?? []).length !== 1) {
  failures.push("Only one scripted interaction should be registered.");
}

if (!css.includes(".is-dialog-open")) {
  failures.push("Dialog open state styles are missing.");
}

if (!html.includes("LLM 的整体结构") || !html.includes("Attention Head")) {
  failures.push("Core reconstructed text is missing.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Static validation passed.");
