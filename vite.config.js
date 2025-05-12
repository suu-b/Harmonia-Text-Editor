import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
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
      external: ['react', 'react-dom', 'slate', 'slate-react', 'react/jsx-runtime'],
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