import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    base: '/azerdoum-personal/' // replace with your GitHub repository name
})

