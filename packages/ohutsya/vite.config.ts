import { resolve } from "path";
import { defineConfig } from "vite";
import * as packageJson from './package.json'

export default defineConfig(({ mode }) => {
  return {
    build: {
      cssCodeSplit: true,
      lib: {
        entry: [resolve('src/main.ts'), resolve('src/ohutsya.css')],
        fileName: '[name]',
        formats: ['es'],
        name: packageJson.name,
      },
      outDir: './lib',
      sourcemap: true,
      target: ['es2015'],
    },
    publicDir: false,
  }
})
