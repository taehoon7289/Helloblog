/* eslint-disable */
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtjstest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],
  axios: {
    proxy: true     // proxy 사용
  },
  proxy: {
    '/prefix-url': 'proxy-url'    // proxy url
  },
  css: [
    'assets/css/main.css'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ],
  },
  router: {
    middleware: ['beforeEach']
  }
}

