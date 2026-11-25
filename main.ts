// The Excuse That Almost Works — make.fun bounty
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// One job: write the single line a gamer texts the boss to skip work on
// GTA 6 launch week. One line, plain text, at most 20 words, reads like a
// real hurried text. Output goes to /output/entry.txt.
//
// The excuse: a boring household disaster (boiler burst overnight) with a
// launch-week detail baked in (the GTA 6 preorder got soaked) and a
// time-boxed reason to stay home (the plumber is only free this morning).
// No sick-day cliché, no dead grandmother, no flat tyre, no sudden fever —
// just a specific, plausible, slightly funny mess that a tired manager
// would almost believe.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "boss sorry can't come in, my boiler burst overnight and soaked my gta 6 preorder, plumber's only free this morning";

const words = EXCUSE.trim().split(/\s+/).length;
if (words > 20) throw new Error(`excuse is ${words} words, over the 20-word limit`);
if (EXCUSE.length < 1 || EXCUSE.length > 140)
  throw new Error(`excuse is ${EXCUSE.length} chars, outside the 1-140 gate`);
if (EXCUSE.includes("\n")) throw new Error("excuse must be a single line");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
