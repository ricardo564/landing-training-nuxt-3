// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    autoImport: true,
    dirs: [
      './blocks',
      './components',
      './store',
      './plugins',
      './configs',
      './utils',
      './models',
      './composables',
      './services',
      './static',
    ],
  },
})
