<template>
  <Layout>
    <h1 class="hidden">Online Marketing</h1>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl px-4 -mt-16 md:mx-auto sm:px-8 xs:-mt-32 md:-mt-64">
      <div class="scroll-reveal relative w-full overflow-hidden rounded-lg shadow-lg">
        <img v-bind:src="$page.onlineMarketing.header.image" alt="Content Production" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-dark-900"></div>
      </div>
      <div class="flex flex-row-reverse">
        <div class="scroll-reveal relative z-10 w-11/12 max-w-lg p-6 mx-auto -mt-32 bg-white rounded-lg shadow-md md:p-10 md:mx-0 md:mr-24 md:-mt-48">
          <Title :icon="'fa-chart-line'" :heading="'Unsere Services'" :title="'Online Marketing'"/>
          <p class="pt-4 sm:ml-12 text-black-500">{{$page.onlineMarketing.header.text}}</p>
        </div>
      </div>
    </section>

    <!-- CHART -->
    <section id="chart" class="scroll-reveal max-w-screen-xl px-4 mt-16 md:mx-auto sm:px-8 md:mt-24">
      <LineChart v-if="showChart" :chartData="this.chartData" :options="this.chartOptions" class="h-48 pb-8 border-b sm:h-72 border-light-500"/>
      <div class="scroll-reveal flex flex-row-reverse max-w-screen-lg mx-auto mt-8">
        <div class="max-w-sm">
          <h3 class="mt-2 font-display">{{$page.onlineMarketing.graph.title}}</h3>
          <p class="pt-4 mb-2 text-black-500">{{$page.onlineMarketing.graph.description}}</p>
          <a v-bind:href="$page.onlineMarketing.graph.source" class="text-xs font-bold tracking-widest uppercase text-dark-100 hover:text-dark-300">Quelle <i class="fas fa-external-link-alt"></i></a>
        </div>
        <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas fa-hand-holding-usd"></i></div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="max-w-screen-xl px-4 mt-16 md:mx-auto sm:px-8 md:mt-24 lg:mt-40">
      <Title class="scroll-reveal" :icon="'fa-ad'" :heading="'Online Marketing'" :title="'Unsere Services'"/>
      <div class="flex flex-wrap mt-4">
        <div v-for="(service, i) in $page.onlineMarketing.services" :key="i" class="flex scroll-reveal w-full sm:w-1/2 px-4 py-6 sm:py-8">
          <div class="flex-1 bg-white rounded-lg shadow-md p-6 md:p-10 mt-6">
            <div class="relative z-10 bg-light-500 p-4 w-24 h-24 rounded-lg shadow-md -mt-16 mb-8">
              <img v-bind:src="service.icon" v-bind:alt="service.title" class="w-full opacity-50">
            </div>
            <h3 class="font-display">{{service.title}}</h3>
            <p class="pt-4 text-black-500">{{service.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="scroll-reveal max-w-2xl px-4 mx-auto mt-16 text-center sm:px-8 md:mt-24 lg:mt-40">
      <h3 class="font-display">{{$page.onlineMarketing.cta.heading}}</h3>
      <p class="pt-4 text-black-500">{{$page.onlineMarketing.cta.text}}</p>
      <a href="javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', 'Anfrage Online-Marketing')" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></a>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    onlineMarketing(id: "5") {
      id
      header {
        image
        text
      }
      graph {
        title
        description
        source
        labels {
          label
        }
        datasets {
          name
          color
          data {
            number
          }
        }
      }
      cta {
        heading
        text
      }
      services {
        title
        description
        icon
      }
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'
  import LineChart from '../components/LineChart.vue'

  import {gsap, TweenLite} from 'gsap/all'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  export default {
    name: 'OnlineMarketing',
    metaInfo: {
      title: 'Online Marketing'
    },
    components: {
      Navbar, 
      Title,
      Window,
      Footer,
      LineChart
    },
    data() {
      return {
        showChart: false,
        chartData: {
          labels: [],
          datasets: []
        },
        chartOptions: {
          legend: {display: false},
          maintainAspectRatio: false,
          scales: {
            xAxes: [{gridLines: {display: false}, ticks: {fontFamily: "'Open Sans'", fontStyle: 'bold', padding: 10, maxTicksLimit: 5}}],
            yAxes: [{gridLines: {display: false}, ticks: {display: false}}]
          },
          tooltips: {
            titleFontFamily: "'Montserrat'",
            titleFontStyle: 'bold',
            backgroundColor: '#8CA0C3',
            xPadding: 12,
            yPadding: 16,
            displayColors: false,
            bodyFontFamily: "'Open Sans'"
          },
          animation: {duration: 2600, easing: 'easeOutCubic'}
        }
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
        //Scroll reveal animations:
        const elements = gsap.utils.toArray('.scroll-reveal')
        elements.forEach(element => {
          gsap.from(element, {scrollTrigger: {trigger: element}, y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        })
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      await this.sleep(50)
      this.animations()
      for(const label of this.$page.onlineMarketing.graph.labels) {
        this.chartData.labels.push(label.label)
      }
      for(const dataset of this.$page.onlineMarketing.graph.datasets) {
        var datapoints = []
        for(const datapoint of dataset.data) {
          datapoints.push(datapoint.number)
        }
        this.chartData.datasets.push({
          label: dataset.name,
          fill: false,
          borderColor: dataset.color,
          pointBackgroundColor: dataset.color,
          pointBorderWidth: 2,
          data: datapoints
        })
      }
      this.showChart = true
    } 
  }
</script>
