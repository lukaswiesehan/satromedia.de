<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- CONTENT -->
    <section id="content" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 -mt-16 xs:-mt-32 md:-mt-64">
      <Title class="scroll-reveal text-light-900" :icon="'fa-lock'" :heading="'Satro Media'" :title="'Datenschutz'"></Title>
      <div class="scroll-reveal mt-8 bg-white rounded-lg shadow-md p-6 md:p-10">
        <div class="text-black-500" v-html="$page.datenschutz.content"></div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    datenschutz(id: "7") {
      id
      content
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
    name: 'Datenschutz',
    metaInfo: {
      title: 'Datenschutz'
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

<style scoped>
  h3, h4, h5 {
    font-weight: bold;
  }
  h3, h4, h5, p {
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    color: theme(colors.black.900);
    font-family: 'Montserrat';
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
</style>