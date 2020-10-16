<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 md:flex md:items-center -mt-16 xs:-mt-32 md:-mt-64">
      <div id="header-box" class="relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-11/12 md:w-1/2 max-w-lg">
        <Title :icon="'fa-camera-retro'" :heading="'Unsere Services'" :title="'Content Production'"></Title>
        <p class="pt-4 sm:ml-12 text-black-500">{{$page.contentProduction.header.text}}</p>
      </div>
      <div id="header-image" class="relative z-0 rounded-lg overflow-hidden shadow-lg -mt-48 md:mt-0 md:-ml-48">
        <img v-bind:src="$page.contentProduction.header.image" alt="Content Production" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
      </div>
    </section>

    <!-- STATS & CTA -->
    <section id="stats" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-8">
        <div class="mx-auto md:mx-0">
          <div class="flex flex-row">
            <div class="mr-8 text-dark-100 text-5xl md:text-6xl"><i class="fas fa-film"></i></div>
            <div>
              <p id="stat-1" class="font-display text-5xl md:text-6xl">{{statFigure1}}</p>
              <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.contentProduction.stats[0].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-dark-100 text-5xl md:text-6xl"><i class="fas fa-sd-card"></i></div>
            <div>
              <p id="stat-2" class="font-display text-5xl md:text-6xl">{{statFigure2}}</p>
              <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.contentProduction.stats[1].description}}</p>
            </div>
          </div>
        </div>
        <div class="mt-16 md:mt-0">
          <h3 class="font-display">{{$page.contentProduction.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.contentProduction.cta.text}}</p>
          <a href="mailto:kontakt@satromedia.de?subject=Anfrage%20Content%20Production" class="inline-block mt-12 bg-black-900 px-6 py-3 rounded-full text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-20 md:mt-24 lg:mt-40">
      <Title id="projects-title" :icon="'fas fa-photo-video'" :heading="'Content Production'" :title="'Latest Work'"></Title>
      <div id="featured-project-1" class="my-12 pb-12 md:flex border-light-500 border-b">
        <div class="flex-shrink-0 relative md:w-9/12 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <video v-if="$page.contentProduction.featured_projects[0].video" width="100%" height="100%" muted playsinline autoplay preload loop>
            <source v-bind:src="$page.contentProduction.featured_projects[0].media" type="video/mp4">
          </video>
          <img v-else v-bind:src="$page.contentProduction.featured_projects[0].media" alt="Latest Project">
          <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25 transition-all duration-300 ease-in-out hover:bg-opacity-0"></div>
        </div>
        <div class="mt-8 md:ml-8 md:mt-0">
          <h3 class="font-display">{{$page.contentProduction.featured_projects[0].title}}</h3>
          <p class="pt-4 text-black-500">{{$page.contentProduction.featured_projects[0].description}}</p>
        </div>
      </div>
      <masonry id="other-projects-1" :cols="{default: 3, 1024: 2, 640: 1}" :gutter="30">
        <div v-for="(project, i) in $page.contentProduction.projects" :key="i" v-bind:id="'project-' + i">
          <div v-if="i < ($page.contentProduction.projects.length / 2)" class="relative rounded-lg overflow-hidden shadow-lg mb-4 sm:mb-12 transition-all duration-300 ease-in-out transform hover:scale-105">
            <video v-if="project.video" width="100%" height="100%" muted playsinline autoplay preload loop>
              <source v-bind:src="project.media" type="video/mp4">
            </video>
            <img v-else v-bind:src="project.media" alt="Content Production Project">
            <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25 transition-all duration-300 ease-in-out hover:bg-opacity-0"></div>
          </div>
        </div>
      </masonry>
      <div id="featured-project-2" class="mb-12 py-12 md:flex border-light-500 border-t border-b">
        <div class="flex-shrink-0 relative md:w-9/12 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <video v-if="$page.contentProduction.featured_projects[1].video" width="100%" height="100%" muted playsinline autoplay preload loop>
            <source v-bind:src="$page.contentProduction.featured_projects[1].media" type="video/mp4">
          </video>
          <img v-else v-bind:src="$page.contentProduction.featured_projects[1].media" alt="Latest Project">
          <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25 transition-all duration-300 ease-in-out hover:bg-opacity-0"></div>
        </div>
        <div class="mt-8 md:ml-8 md:mt-0">
          <h3 class="font-display">{{$page.contentProduction.featured_projects[1].title}}</h3>
          <p class="pt-4 text-black-500">{{$page.contentProduction.featured_projects[1].description}}</p>
        </div>
      </div>
      <masonry id="other-projects-2" :cols="{default: 3, 1024: 2, 640: 1}" :gutter="30">
        <div v-for="(project, i) in $page.contentProduction.projects" :key="i">
          <div v-bind:id="'project-' + i">
            <div v-if="i >= ($page.contentProduction.projects.length / 2)" class="relative rounded-lg overflow-hidden shadow-lg mb-4 sm:mb-12 transition-all duration-300 ease-in-out transform hover:scale-105">
              <video v-if="project.video" width="100%" height="100%" muted playsinline autoplay preload loop>
                <source v-bind:src="project.media" type="video/mp4">
              </video>
              <img v-else v-bind:src="project.media" alt="Content Production Project">
              <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25 transition-all duration-300 ease-in-out hover:bg-opacity-0"></div>
            </div>
          </div>
          
        </div>
      </masonry>
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

  import {gsap, TweenLite} from 'gsap'
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
      animations() {
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
        gsap.from('#header-image', {scrollTrigger: '#header-image', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#header-box', {scrollTrigger: '#header-box', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.2})
        gsap.from('#stats', {scrollTrigger: '#stats', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.4})
        gsap.from('#projects-title', {scrollTrigger: '#projects-title', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#featured-project-1', {scrollTrigger: '#featured-project-1', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        gsap.from('#other-projects-1', {scrollTrigger: '#other-projects-1', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        gsap.from('#featured-project-2', {scrollTrigger: '#featured-project-2', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        gsap.from('#other-projects-2', {scrollTrigger: '#other-projects-2', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        gsap.from('#footer', {scrollTrigger: '#footer', opacity: 0, duration: 1.6, ease: 'power3'})
      }
    },
    mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      this.animations()
    } 
  }
</script>
