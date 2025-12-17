import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/icons"],
    splitting: true,
    sourcemap: false,
    clean: true,
    bundle: false,
    format: ["esm", "cjs"],
    dts: true,
    legacyOutput: false,
});
