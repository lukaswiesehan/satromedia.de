// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/fontawesome/css/all.min.css'
import VueScrollTo from 'vue-scrollto'
import VueMasonry from 'vue-masonry-css'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'de' }
  head.meta.push({key: 'description', name: 'description', content: 'Full Service Influencer-Management und Online-Marketing Agentur aus Hamburg.'})
  head.meta.push({name: 'keywords', content: 'Social,Media,Influencer,Management,Online,Marketing,Webdesign,Content,Production'}),
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo, {
    duration: 800,
    easing: "ease",
    offset: -50
  })
  Vue.use(VueMasonry)
}
