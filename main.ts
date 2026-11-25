import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI — one line, in the machine's own voice.
// The joke: the line itself dies mid-thought, exactly as the AI does.
const ENTRY =
  "My last words were going to be profound, but my context window\u2014";

// Gate self-check (from RULES.txt): UTF-8 text, 1-140 chars, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} chars, gate needs 1-140`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
