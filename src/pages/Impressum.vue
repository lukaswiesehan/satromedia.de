<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 md:flex md:items-center -mt-16 xs:-mt-32 md:-mt-64">
      <div class="scroll-reveal relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-11/12 md:w-1/2 max-w-lg">
        <Title :icon="'fa-balance-scale'" :heading="'Satro Media'" :title="'Impressum'"></Title>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="scroll-reveal relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-11/12 md:w-full">
        <h3 class="font-display">Bla bla bla</h3>
        <p class="pt-4 text-black-500">Four loko flexitarian small batch direct trade austin chillwave. Beard direct trade unicorn, forage austin PBR&B fashion axe vegan. IPhone banh mi YOLO kombucha kinfolk, succulents actually. Whatever taiyaki iceland, vaporware actually chia man braid portland listicle cronut hella microdosing tilde.</p>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    contentProduction(id: "3") {
      id
      header {
        image
        text
      }
      stats {
        figure
        description
      }
      cta {
        heading
        text
      }
      featured_projects {
        title
        description
        video
        media
      }
      projects {
        title
        video
        media
      }
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
    name: 'ContentProduction',
    metaInfo: {
      title: 'Content Production'
    },
    components: {
      Navbar, 
      Title,
      Window,
      Footer
    },
    data() {
      return {
        statFigure1: 0,
        statFigure2: 0
      }
    },
    methods: {
      sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      },  
      animations() {
        gsap.to('#app', {opacity: 1, duration: 0.2})
        //Stat upcount animation:
        var counter1 = {var: 0}
        TweenLite.to(counter1, 1.8, {
          var: this.$page.contentProduction.stats[0].figure,
          ease: 'power3',
          scrollTrigger: '#stat-1',
          onUpdate: () => {
            if(this.$page.contentProduction.stats[0].decimal) {
              this.statFigure1 = Math.round(counter1.var * 100) / 100
            } else {
              this.statFigure1 = Math.ceil(counter1.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        var counter2 = {var: 0}
        TweenLite.to(counter2, 1.6, {
          var: this.$page.contentProduction.stats[1].figure,
          ease: 'power3',
          scrollTrigger: '#stat-2',
          onUpdate: () => {
            if(this.$page.contentProduction.stats[1].decimal) {
              this.statFigure2 = Math.round(counter2.var * 100) / 100
            } else {
              this.statFigure2 = Math.ceil(counter2.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
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
