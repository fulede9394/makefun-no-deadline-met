// The deadline died in the spam folder, where motivation lives now.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I missed the deadline because my calendar sent the reminder to my spam folder, and my spam folder is where my motivation moved in.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
