export default {
  mode: 'spa',
  generate: {
    dir: 'docs',
    fallback: true
  },
  head: {
    title: 'NippoHub',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1'},
      {description: '日報管理サービス'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'NippoHub'},
      {property: 'og:description', content: '日報管理サービス'},
      {property: 'og:site_name', content: 'NippoHub'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:creator', content: '@sasurai_usagi3'},
      {name: 'twitter:title', content: 'NippoHub'},
      {name: 'twitter:description', content: '日報管理サービス'}
    ],
    link: [
      {rel: 'icon', href: '/favicon.png'},
      {rel: 'apple-touch-icon', size: '180x180', href: '/favicon_180x180.png'}
    ]
  },
  css: [
    '@/assets/stylesheets/layout.css'
  ]
}
