import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        skill_list: resolve(__dirname, 'skill-list.html'),
        todo_list: resolve(__dirname, 'todo-list.html'),
        skill_expand: resolve(__dirname, 'skill-expand.html'),
        log: resolve(__dirname, 'log.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})