export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: [
    'vue-toastification/dist/index.css',
  ],
  app: {
    head: {
      title: 'ConnectVerse',
      meta: [
        { name: 'description', content: 'Социальная сеть' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com/'
    }
  }
})