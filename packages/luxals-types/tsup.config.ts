import { defineConfig } from "tsup";

export default defineConfig({
  name: "types",
  entry: ["src/index.ts"],
  clean: true,
  dts: {
    only: true
  }
});
