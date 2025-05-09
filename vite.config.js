import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'HarmoniaTextEditor',
      formats: ['es', 'cjs'],
      fileName: (format) => `harmonia-text-editor.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'slate', 'slate-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          slate: 'Slate',
          'slate-react': 'SlateReact',
        },
      },
    },
  },
})