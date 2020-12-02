<template>
  <Layout>
    <h1 class="hidden">Digitale Konzepte</h1>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl px-4 -mt-16 md:mx-auto sm:px-8 md:flex md:items-center xs:-mt-32 md:-mt-64">
      <div class="scroll-reveal relative z-0 overflow-hidden rounded-lg shadow-lg">
        <img v-bind:src="$page.digitalConcepts.header.image" alt="Digitale Konzepte" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-dark-900"></div>
      </div>
      <div class="scroll-reveal relative z-10 flex-shrink-0 w-11/12 max-w-lg p-6 mx-auto -mt-24 bg-white rounded-lg shadow-md md:p-10 md:mx-0 md:w-1/2 md:-ml-48 md:mt-0">
        <Title :icon="'fa-clipboard'" :heading="'Unsere Services'" :title="'Digitale Konzepte'"></Title>
        <div class="pt-4 sm:ml-12 text-black-500 html-content" v-html="$page.digitalConcepts.header.text"></div>
      </div>
    </section>

    <!-- STATS & CTA -->
    <section id="stats" class="scroll-reveal relative mt-16 md:mt-24 lg:mt-40">
      <div class="relative z-10 grid max-w-screen-lg grid-cols-1 px-4 py-12 mx-auto sm:px-8 md:py-16 md:grid-cols-2 md:space-x-8">
        <div class="mx-auto md:mx-0 md:pr-16">
          <div class="flex flex-row">
            <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[0].icon"></i></div>
            <div>
              <p id="stat-1" class="text-5xl font-display md:text-6xl">{{statFigure1}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[0].unit}}</span></p>
              <p class="text-xs font-bold tracking-widest uppercase md:text-sm text-dark-100">{{$page.digitalConcepts.stats[0].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[1].icon"></i></div>
            <div>
              <p id="stat-2" class="text-5xl font-display md:text-6xl">{{statFigure2}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[1].unit}}</span></p>
              <p class="text-xs font-bold tracking-widest uppercase md:text-sm text-dark-100">{{$page.digitalConcepts.stats[1].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[2].icon"></i></div>
            <div>
              <p id="stat-3" class="text-5xl font-display md:text-6xl">{{statFigure3}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[2].unit}}</span></p>
              <p class="text-xs font-bold tracking-widest uppercase md:text-sm text-dark-100">{{$page.digitalConcepts.stats[2].description}}</p>
            </div>
          </div>
        </div>
        <div class="mt-16 md:mt-0">
          <h3 class="font-display">{{$page.digitalConcepts.cta.heading}}</h3>
          <div class="pt-4 text-black-500 html-content" v-html="$page.digitalConcepts.cta.text"></div>
          <a href="javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', 'Anfrage Digitale Konzepte')" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
      <div class="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-br from-light-900 to-dark-100"></div>
    </section>

    <!-- QUOTES -->
    <section id="quotes" class="grid max-w-screen-xl grid-cols-1 px-4 mt-16 md:mx-auto sm:px-8 md:mt-24 lg:mt-40 md:grid-cols-2">
      <div class="scroll-reveal flex text-black-500 md:pr-8 lg:md:pr-16">
        <div class="flex-shrink-0 text-3xl text-dark-100"><i class="pr-6 fas fa-quote-right"></i></div>
        <div class="ml-4">
          <p>{{$page.digitalConcepts.quotes[0].quote_text}}</p>
          <p class="mt-4 text-dark-100">{{$page.digitalConcepts.quotes[0].quoted_person}}</p>
        </div>
      </div>
      <div class="scroll-reveal flex mt-8 text-black-500 md:pl-8 lg:pl-16 md:mt-0">
        <div class="flex-shrink-0 text-3xl text-dark-100"><i class="pr-6 fas fa-quote-right"></i></div>
        <div class="ml-4">
          <p>{{$page.digitalConcepts.quotes[1].quote_text}}</p>
          <p class="mt-4 text-dark-100">{{$page.digitalConcepts.quotes[1].quoted_person}}</p>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="max-w-screen-lg px-4 mt-16 md:mx-auto sm:px-8 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-8">
        <div class="scroll-reveal max-w-md">
          <Title :icon="'fa-clipboard'" :heading="'Digitale Konzepte'" :title="'Full Service'"></Title>
          <div class="pt-4 text-black-500 html-content" v-html="$page.digitalConcepts.service.description"></div>
          <a href="javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', 'Anfrage Digitale Konzepte')" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Ihr Projekt starten <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="mt-16 md:mt-0">
          <Window>
            <div class="p-8">
              <div v-for="(service, i) in $page.digitalConcepts.service.services" :key="i" class="flex mb-8">
                <div class="flex-shrink-0 w-6 h-6 border-2 border-gray-500 rounded-md"><i class="ml-1 -mt-1 text-2xl fas fa-check text-light-900" v-bind:id="'service-tick-' + i"></i></div>
                <div class="ml-8 text-white" v-bind:id="'service-description-' + i">
                  <p>{{service.short_description}}</p>
                </div>
              </div>
            </div>
          </Window>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    digitalConcepts(id: "4") {
      id
      header {
        image
        text
      }
      stats {
        icon
        figure
        decimal
        unit
        description
      }
      cta {
        heading
        text
      }
      quotes {
        quote_text
        quoted_person
      }
      service {
        description
        services {
          short_description
        }
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
    name: 'DigitalConcepts',
    metaInfo: {
      title: 'Digitale Konzepte'
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
        statFigure2: 0,
        statFigure3: 0
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
        TweenLite.to(counter1, 1.4, {
          var: this.$page.digitalConcepts.stats[0].figure,
          ease: 'power3',
          scrollTrigger: '#stat-1',
          onUpdate: () => {
            if(this.$page.digitalConcepts.stats[0].decimal) {
              this.statFigure1 = Math.round(counter1.var * 100) / 100
            } else {
              this.statFigure1 = Math.ceil(counter1.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        var counter2 = {var: 0}
        TweenLite.to(counter2, 1.6, {
          var: this.$page.digitalConcepts.stats[1].figure,
          ease: 'power3',
          scrollTrigger: '#stat-2',
          onUpdate: () => {
            if(this.$page.digitalConcepts.stats[1].decimal) {
              this.statFigure2 = Math.round(counter2.var * 100) / 100
            } else {
              this.statFigure2 = Math.ceil(counter2.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        var counter3 = {var: 0}
        TweenLite.to(counter3, 1.8, {
          var: this.$page.digitalConcepts.stats[2].figure,
          ease: 'power3',
          scrollTrigger: '#stat-2',
          onUpdate: () => {
            if(this.$page.digitalConcepts.stats[2].decimal) {
              this.statFigure3 = Math.round(counter3.var * 100) / 100
            } else {
              this.statFigure3 = Math.ceil(counter3.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        //Scroll reveal animations:
        const elements = gsap.utils.toArray('.scroll-reveal')
        elements.forEach(element => {
          gsap.from(element, {scrollTrigger: {trigger: element}, y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        })
        for(var i = 0; i < this.$page.digitalConcepts.service.services.length; i++) {
          gsap.from('#service-tick-' + i, {scrollTrigger: '#service-tick-' + i, scale: 0, duration: 0.8, ease: 'back.out(3)', delay: 0 + i * 0.4})
          gsap.from('#service-description-' + i, {scrollTrigger: '#service-tick-' + i, x: 50, opacity: 0, duration: 1.4, ease: 'power3', delay: 0 + i * 0.4})
        }
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      await this.sleep(50)
      this.animations()
    } 
  }
</script>

<style>
  .html-content p {
    margin-bottom: 1rem;
  }
</style>