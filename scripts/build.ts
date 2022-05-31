import { buildSync } from "esbuild";

console.log("Building...");

buildSync({
  entryPoints: [
    "./src/index.ts",
  ],
  outdir: "./dist",
  bundle: true,
  sourcemap: false,
  minify: true,
  splitting: true,
  format: "esm",
  target: "node14",
  outExtension: { ".js": ".mjs" },
});
