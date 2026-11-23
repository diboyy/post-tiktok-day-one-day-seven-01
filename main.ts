// Star Catcher entry — main.ts
// The whole job of this program is to hand VIDEO.json over to the grader:
// read it out of the repository and write the exact same bytes to /output.
//
// The repository root is where the bot checked the code out (MAKEFUN_BOT_DIR,
// default /bot). The grader reads its outputs from MAKEFUN_OUTPUT_DIR
// (default /output). Only the standard library is used, and no network.
//
// Before copying, VIDEO.json is read and validated: it must parse as JSON,
// be an object, and carry a `url` string shaped like a TikTok video address
// (https://www.tiktok.com/@<handle>/video/<digits>). The pre-posting
// placeholder form (@<handle>/video/<id>) is accepted too, since the real
// URL is filled in only after Teddy posts the video. On any failure the
// program prints a clear error to stderr and exits non-zero WITHOUT writing
// a partial output file. On success the copy is byte-identical.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Accepts a real TikTok video URL and the pre-posting placeholder form.
const TIKTOK_URL = /^https:\/\/www\.tiktok\.com\/@[^/\s]+\/video\/(\d+|<id>)$/;

function fail(message: string): never {
  console.error(`error: VIDEO.json is not usable: ${message}`);
  process.exit(1);
}

const sourcePath = join(botDir, "VIDEO.json");

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch (err) {
  fail(`invalid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("top level must be a JSON object");
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string") {
  fail("missing or non-string `url` field");
}
if (!TIKTOK_URL.test(url)) {
  fail(`\`url\` does not look like a TikTok video address: ${url}`);
}

// Validation passed: only now write the output, byte-identical to the input.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), raw);
