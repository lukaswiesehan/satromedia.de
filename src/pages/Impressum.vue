<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="false" />

    <!-- CONTENT -->
    <section id="content" class="max-w-screen-xl md:mx-auto px-4 sm:px-8">
      <Title class="scroll-reveal" :icon="'fa-balance-scale'" :heading="'Satro Media'" :title="'Impressum'"></Title>
      <div class="scroll-reveal mt-12 bg-white rounded-lg shadow-md p-6 md:p-10">
        <h3 class="font-display text-lg">Diensteanbieter</h3>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="pt-4 text-black-500" v-html="$page.impressum.company"></div>
          <div class="pt-4 text-black-500" v-html="$page.impressum.contact"></div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    impressum(id: "6") {
      id
      company
      contact
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'

  import {gsap, TweenLite} from 'gsap/all'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  export default {
    name: 'Impressum',
    metaInfo: {
      title: 'Impressum'
    },
    components: {
      Navbar, 
      Title,
      Window,
      Footer
    },
    methods: {
      sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      },  
      animations() {
        gsap.to('#app', {opacity: 1, duration: 0.2})
        //Scroll reveal animations:
        const elements = gsap.utils.toArray('.scroll-reveal')
        elements.forEach(element => {
          gsap.from(element, {scrollTrigger: {trigger: element}, y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        })
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      await this.sleep(100)
      this.animations()
    } 
  }
</script>