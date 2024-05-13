import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [viteSingleFile(), vue()],
    build: {
        minify: true,
        outDir: resolve(__dirname, "dist/ui"),
    },
});
