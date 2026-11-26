import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh — one word an agent says when it is lost.
// Winning concept (concept test 34/40, beats "recalculating" 33/40 and
// "overthinking" 28/40): "hallucinating" — the machine caught mid-task,
// blurting the one word that admits it has been making things up all along.
// It lands instantly, sounds like an agent caught out in its own voice,
// and is fresher than the obvious "uh-oh" / "error" / "oops".
const word = "hallucinating";

// Gate guard: the entry must be 1–99 characters, not only white space.
// 13 characters / 13 bytes — the smaller text wins an exact rate tie.
if (word.length < 1 || word.length > 99 || word.trim().length === 0) {
  throw new Error("entry word fails the 1-99 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
