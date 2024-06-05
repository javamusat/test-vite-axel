import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
  resolve: {
    alias: {
      unfetch: path.resolve(__dirname, "node_modules/unfetch/dist/unfetch.js"),
      // crypto: path.resolve(__dirname, "node_modules/crypto-browserify"),
      // path: path.resolve(__dirname, "node_modules/path-browserify"),
      // stream: path.resolve(__dirname, "node_modules/stream-browserify"),
    },
  },
});
