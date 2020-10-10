<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 md:flex md:items-center -mt-16 xs:-mt-32 md:-mt-64">
      <div id="header-image" class="relative z-0 rounded-lg overflow-hidden shadow-lg">
        <img v-bind:src="$page.digitalConcepts.header.image" alt="Digitale Konzepte" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
      </div>
      <div id="header-box" class="flex-shrink-0 relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-11/12 md:w-1/2 max-w-lg md:-ml-48 -mt-24 md:mt-0">
        <Title :icon="'fa-clipboard'" :heading="'Unsere Services'" :title="'Digitale Konzepte'"></Title>
        <p class="pt-4 sm:ml-12 text-black-500">{{$page.digitalConcepts.header.text}}</p>
      </div>
    </section>

    <!-- STATS & CTA -->
    <section id="stats" class="relative mt-16 md:mt-24 lg:mt-40">
      <div class="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 md:space-x-8">
        <div class="mx-auto md:mx-0 md:pr-16">
          <div class="flex flex-row">
            <div class="mr-8 text-dark-100 text-5xl md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[0].icon"></i></div>
            <div>
              <p id="stat-1" class="font-display text-5xl md:text-6xl">{{statFigure1}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[0].unit}}</span></p>
              <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.digitalConcepts.stats[0].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-dark-100 text-5xl md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[1].icon"></i></div>
            <div>
              <p id="stat-2" class="font-display text-5xl md:text-6xl">{{statFigure2}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[1].unit}}</span></p>
              <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.digitalConcepts.stats[1].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-dark-100 text-5xl md:text-6xl"><i class="fas" v-bind:class="'fa-' + $page.digitalConcepts.stats[2].icon"></i></div>
            <div>
              <p id="stat-3" class="font-display text-5xl md:text-6xl">{{statFigure3}}<span class="text-4xl lg:text-5xl"> {{$page.digitalConcepts.stats[2].unit}}</span></p>
              <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.digitalConcepts.stats[2].description}}</p>
            </div>
          </div>
        </div>
        <div class="mt-16 md:mt-0">
          <h3 class="font-display">{{$page.digitalConcepts.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.digitalConcepts.cta.text}}</p>
          <g-link to="/#contact" class="inline-block mt-12 bg-black-900 px-6 py-3 rounded-full text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></g-link>
        </div>
      </div>
      <div class="absolute w-full h-full left-0 top-0 bg-gradient-to-br from-light-900 to-dark-100 opacity-50"></div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="max-w-screen-lg md:mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-8">
        <div class="mt-16 md:mt-0 max-w-md">
          <Title :icon="'fa-clipboard'" :heading="'Digitale Konzepte'" :title="'Full Service'"></Title>
          <p class="pt-4 text-black-500">{{$page.digitalConcepts.service.description}}</p>
          <g-link to="/#contact" class="inline-block mt-12 bg-black-900 px-6 py-3 rounded-full text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-md hover:text-light-900">Ihr Projekt starten <i class="fas fa-chevron-right"></i></g-link>
        </div>
        <div>
          <Window>
            <div class="p-8">
              <div v-for="(service, i) in $page.digitalConcepts.service.services" :key="i" class="flex mb-8">
                <div class="flex-shrink-0 w-6 h-6 border-2 border-gray-500 rounded-md"><i class="fas fa-check text-light-900 text-2xl -mt-1 ml-1" v-bind:id="'service-tick-' + i"></i></div>
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

  import {gsap, TweenLite} from 'gsap'
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
      animations() {
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
        gsap.from('#header-image', {scrollTrigger: '#header-image', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#header-box', {scrollTrigger: '#header-box', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.2})
        gsap.from('#stats', {scrollTrigger: '#stats', y: 100, opacity: 0, duration: 1.6, ease: 'power3', delay: 0.4})
        gsap.from('#services', {scrollTrigger: '#services', y: 100, opacity: 0, duration: 1.6, ease: 'power3', delay: 0.4})
        for(var i = 0; i < this.$page.digitalConcepts.service.services.length; i++) {
          gsap.from('#service-tick-' + i, {scrollTrigger: '#service-tick-' + i, scale: 0, duration: 0.8, ease: 'back.out(3)', delay: 0 + i * 0.4})
          gsap.from('#service-description-' + i, {scrollTrigger: '#service-tick-' + i, x: 50, opacity: 0, duration: 1.4, ease: 'power3', delay: 0 + i * 0.4})
        }
        gsap.from('#footer', {scrollTrigger: '#footer', opacity: 0, duration: 1.6, ease: 'power3'})
      }
    },
    mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      this.animations()
    } 
  }
</script>
