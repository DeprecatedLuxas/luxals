import { defineConfig } from "tsup";

export default defineConfig({
  name: "number",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  splitting: false,
  dts: true
});
