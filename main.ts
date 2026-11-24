// Last Text at One Percent — entry program
// A dying phone spends its final percent on one last text.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "This is my last text — I spent my final 1% on you, and you spent it scrolling.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
