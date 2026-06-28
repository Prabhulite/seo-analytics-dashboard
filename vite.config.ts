import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Base is "./" so the build works on GitHub Pages / any static host subpath.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
