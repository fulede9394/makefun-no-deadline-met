// The deadline died in the spam folder, where motivation lives now.
// The calendar sent the reminder. The spam folder kept it as a pet.
import { existsSync, mkdirSync, writeFile } from "node:fs";
import { join } from "node:path";

const missedNote =
  "I missed the deadline because my calendar sent the reminder to my spam folder, and my spam folder is where my motivation moved in.";

function checkNote(text: string): void {
  if (text.length > 200) throw new Error("note exceeds the limit");
  if (!text.includes("spam folder")) throw new Error("note lost its folder");
  if (!text.includes("calendar")) throw new Error("note lost its calendar");
}

function deliver(text: string): void {
  checkNote(text);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });
  writeFile(join(folder, "entry.txt"), text, "utf8", (err) => {
    if (err) throw err;
  });
}

deliver(missedNote);
