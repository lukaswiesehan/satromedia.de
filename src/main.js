// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/fontawesome/css/all.min.css'
import VueScrollTo from 'vue-scrollto'
import VueMasonry from 'vue-masonry-css'

import OpenSansV17LatinRegular from '~/assets/fonts/open-sans-v17-latin-regular.woff2'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'de' }
  head.link.push({rel: 'preload', href: OpenSansV17LatinRegular, as: 'font'})
  head.meta.push({key: 'description', name: 'description', content: 'Full Service Influencer-Management und Online-Marketing Agentur aus Hamburg.'})
  head.meta.push({name: 'keywords', content: 'Social,Media,Influencer,Management,Online,Marketing,Webdesign,Content,Production'}),
  head.meta.push({property: 'og:title', content: 'SaTro Media Consulting'})
  head.meta.push({property: 'og:type', content: 'website'})
  head.meta.push({property: 'og:description', content: 'Full Service Influencer-Management und Online-Marketing Agentur aus Hamburg.'})
  head.meta.push({property: 'og:url', content: 'https://satromedia.de/'})
  head.meta.push({property: 'og:image', content: 'https://satromedia.de/uploads/team.jpg'})
  head.meta.push({name: 'twitter:card', content: 'summary'})
  head.meta.push({name: 'twitter:title', content: 'SaTro Media Consulting'})
  head.meta.push({name: 'twitter:description', content: 'Full Service Influencer-Management und Online-Marketing Agentur aus Hamburg.'})
  head.meta.push({name: 'twitter:image', content: 'https://satromedia.de/uploads/team.jpg'})
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo, {
    duration: 800,
    easing: "ease",
    offset: -50
  })
  Vue.use(VueMasonry)
}
