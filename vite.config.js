import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib:{
      entry: path.resolve(__dirname, 'src/index.js'),
      name: "HarmoniaTextEditor",
      fileName:"index",
      formats: ["es", "cjs"],
    },
    rollupOptions:{
      external: ["react", "react-dom", "slate", "slate-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          slate: "Slate",
          "slate-react": "SlateReact",
        },
      },
    },
    outDir: 'dist'
  }
})
