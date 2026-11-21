// The Hour No One Owns
// Writes the entry text to /output/entry.txt (UTF-8, LF, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const lines: string[] = [
  "He winds the clock every Sunday.",
  "It loses a minute a week.",
  "",
  "He stopped correcting it.",
  "",
  "Somewhere in the house there is an hour",
  "that belongs to no one,",
  "and it is growing.",
];

const text: string = lines.join("\n");

// Gate guard: the entry must be 1-280 code points and not only whitespace.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`entry text out of gate: ${codePoints} code points`);
}

const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, text, "utf8");
