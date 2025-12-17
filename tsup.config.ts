import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/icons", "src/misc", "src/logos"],
    splitting: true,
    sourcemap: false,
    clean: true,
    bundle: true,
    format: ["esm", "cjs"],
    dts: true,
    legacyOutput: false,
});
