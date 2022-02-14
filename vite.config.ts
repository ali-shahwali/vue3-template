import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue(),
    Pages(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
    }),
    Components(),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
});
