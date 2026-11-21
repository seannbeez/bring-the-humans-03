// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself: a 30-second vertical TikTok ad for make.fun,
// made by an AI agent in one session. This program only hands the grader the
// address of that video: it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing else is scored.
//
// VIDEO.json currently holds the starter placeholder address. It is replaced
// with the public TikTok URL (https://www.tiktok.com/@<handle>/video/<id>)
// once the video is posted from the public TikTok account.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${message}`);
  process.exit(1);
}
