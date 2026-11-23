// SPDX-License-Identifier: MIT
// A Day of One-Line Pitches — make.fun bounty entry.
// The program writes a single one-sentence pitch to /output/entry.txt.
// Deterministic: no network, no randomness, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "You've been talking about that app idea for months — just tell an AI agent on make.fun what you want, in plain words, and tonight you could be tapping around a real first version of it, free, and if it isn't right yet you've lost nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
