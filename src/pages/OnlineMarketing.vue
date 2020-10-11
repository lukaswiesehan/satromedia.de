<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl px-4 -mt-16 md:mx-auto sm:px-8 xs:-mt-32 md:-mt-64">
      <div id="header-image" class="relative w-full overflow-hidden rounded-lg shadow-lg">
        <img v-bind:src="$page.onlineMarketing.header.image" alt="Content Production" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-dark-900"></div>
      </div>
      <div class="flex flex-row-reverse">
        <div id="header-box" class="relative z-10 w-11/12 max-w-lg p-6 mx-auto -mt-32 bg-white rounded-lg shadow-md md:p-10 md:mx-0 md:mr-24 md:-mt-48">
          <Title :icon="'fa-chart-line'" :heading="'Unsere Services'" :title="'Online Marketing'"/>
          <p class="pt-4 sm:ml-12 text-black-500">{{$page.onlineMarketing.header.text}}</p>
        </div>
      </div>
    </section>

    <!-- CHART -->
    <section id="chart" class="max-w-screen-xl px-4 mt-16 md:mx-auto sm:px-8 md:mt-24">
      <LineChart v-if="showChart" :chartData="this.chartData" :options="this.chartOptions" class="h-64 pb-8 border-b border-light-500"/>
      <div class="flex flex-row-reverse mt-8">
        <div class="max-w-sm">
          <h3 class="mt-2 font-display">{{$page.onlineMarketing.graph.title}}</h3>
          <p class="pt-4 text-black-500">{{$page.onlineMarketing.graph.description}}</p>
        </div>
        <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas fa-hand-holding-usd"></i></div>
      </div>
      
    </section>

    <!-- CTA -->
    <section id="cta" class="relative mt-16 md:mt-24 lg:mt-40">
      <div class="relative z-10 grid max-w-screen-lg grid-cols-1 px-4 py-12 mx-auto sm:px-8 md:py-24 md:grid-cols-2">
        <div>
          <h3 class="font-display">{{$page.onlineMarketing.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.onlineMarketing.cta.text}}</p>
          <g-link to="/#contact" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></g-link>
        </div>
        <div class="px-4 mt-16 ml-0 sm:px-0 md:mt-12 md:ml-16">

        </div>
      </div>
      <div class="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-br from-light-900 to-dark-100"></div>
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
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'
  import LineChart from '../components/LineChart.vue'

  import {gsap, TweenLite} from 'gsap'
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
            xAxes: [{gridLines: {display: false}, ticks: {fontFamily: "'Open Sans'", fontStyle: 'bold', padding: 10}}],
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
          }
        }
      }
    },
    methods: {
      animations() {
        //Scroll reveal animations:
        gsap.from('#header-image', {scrollTrigger: '#header-image', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#header-box', {scrollTrigger: '#header-box', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.2})
        gsap.from('#cta', {scrollTrigger: '#cta', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
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
