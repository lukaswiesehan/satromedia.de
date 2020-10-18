<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="content" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 md:flex md:items-center -mt-16 xs:-mt-32 md:-mt-64">
      <div class="scroll-reveal relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-11/12 md:w-1/2 max-w-lg">
        <Title :icon="'fa-balance-scale'" :heading="'Satro Media'" :title="'Impressum'"></Title>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-16">
          <div>
            <h3 class="font-display">Diensteanbieter</h3>
            <p class="pt-4 text-black-500">{{$page.impressum.company}}</p>
          </div>
          <div>
            <h3 class="font-display"></h3>
            <p class="pt-4 text-black-500"></p>
          </div>
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
