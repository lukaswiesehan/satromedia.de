<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- CONTENT -->
    <section id="content" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 -mt-16 xs:-mt-32 md:-mt-64">
      <Title class="scroll-reveal text-light-900" :icon="'fa-balance-scale'" :heading="'Satro Media'" :title="'Impressum'"></Title>
      <div class="scroll-reveal content mt-8 bg-white rounded-lg shadow-md p-6 md:p-10">
        <h3 class="font-display text-lg">Diensteanbieter</h3>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="pt-4 text-black-500" v-html="$page.impressum.company"></div>
          <div class="pt-4 text-black-500">
            <p><i class="fas fa-phone mr-2"></i> {{$page.impressum.phone}}</p>
            <p><i class="fas fa-envelope mr-2"></i> <a href="javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', '')"><Email :email="$page.impressum.email"></Email></a></p>
          </div>
        </div>
      </div>
      <div class="scroll-reveal content mt-8 bg-white rounded-lg shadow-md p-6 md:p-10">
        <h3 class="font-display text-lg">Bildnachweise</h3>
        <ul class="text-black-500 ml-6">
          <li v-for="(service, i) in $page.onlineMarketing.services" :key="i" style="list-style-type:disc;" class="mb-2">Icon Online Marketing / {{service.title}}: <a v-bind:href="service.icon_author" class="underline">flaticon.com</a></li>
        </ul>
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
      phone
      email
    }
    onlineMarketing(id: "5") {
      id
      services {
        title
        icon_author
      }
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'
  import Email from '../components/Email.vue'

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
      Footer,
      Email
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

<style>
  .content h3, .content h4, .content h5 {
    font-weight: bold;
  }
  .content h3, .content h4, .content h5, .content p {
    margin-bottom: 1rem;
  }
  .content h3 {
    font-size: 1.5rem;
    color: theme(colors.black.900);
    font-family: 'Montserrat';
  }
  .content h4 {
    font-size: 1.25rem;
  }
  .content h5 {
    font-size: 1rem;
  }
</style>