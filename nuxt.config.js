export default {
  // mode: 'spa',
  target: 'static',
  router: {
    base: '/action_tracker/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'action_tracker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate', ssr: true },
    { src: '~/plugins/fontawesome' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  devServerHandlers: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build를 설정안하면 ssr이 안되므로 반드시 해야한다.
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  // server setup
  server: {
    host: '0.0.0.0', // 외부 IP에서 접근 가능하도록 설정
    port: 4000
  }
}
