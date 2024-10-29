import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //base: "/npm-experiment/",
  base: "https://github.com/Hoangphuvan/npm-experiment.git",
});
