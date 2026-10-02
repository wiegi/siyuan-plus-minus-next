// Copies dist/ into the plugin folder of a local SiYuan workspace.
// Usage: npm run build && npm run deploy:local [-- <workspace>]
// The workspace defaults to $SIYUAN_WORKSPACE or ~/SiYuan.
import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const { name } = JSON.parse(readFileSync("plugin.json", "utf8"));
const workspace = resolve(
  process.argv[2] ?? process.env.SIYUAN_WORKSPACE ?? join(homedir(), "SiYuan"),
);
if (!existsSync(join(workspace, "data"))) {
  console.error(`No SiYuan workspace found at ${workspace}`);
  process.exit(1);
}
if (!existsSync("dist/index.js")) {
  console.error("dist/index.js is missing. Run `npm run build` first.");
  process.exit(1);
}

const target = join(workspace, "data", "plugins", name);
mkdirSync(target, { recursive: true });
cpSync("dist", target, { recursive: true });
console.log(`Copied dist/ to ${target}\nReload SiYuan (Ctrl+R) and enable the plugin.`);
