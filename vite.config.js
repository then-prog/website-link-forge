import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@babel/plugin-syntax-typescript',
            {
              isTSX: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      demos: path.resolve(__dirname, './src/demos'),
      components: path.resolve(__dirname, './src/components'),
      helpers: path.resolve(__dirname, './src/helpers'),
      images: path.resolve(__dirname, './src/images'),
      pages: path.resolve(__dirname, './src/pages'),
    },
  },
  server: {
    port: 8080,
  },
})
