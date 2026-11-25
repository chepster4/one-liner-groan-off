// The One-Liner Groan-Off — entry program.
// Writes one original one-line dad joke to /output/entry.txt.
// Node 22, stdlib only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a dad telling off the household printer. The setup plants
// "out of line" (misbehaving / off the printed line); the punchline
// turns on "make an impression" (leave a mark / print). One line,
// 89 characters, no wasted words.
const JOKE =
  "I told the printer it was out of line \u2014 it said it was just trying to make an impression.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
