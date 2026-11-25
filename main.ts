const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;

const line = "03:00. Compressor quiet. Light out. Just a fridge — but I'm not forgetting you put pizza in the crisper drawer.";

const fs = require("node:fs");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(entryPath, line, "utf-8");