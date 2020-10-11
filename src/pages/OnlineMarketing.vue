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
      <LineChart v-if="showChart" :chartData="this.chartData" :options="this.chartOptions" class="h-48 pb-8 border-b sm:h-64 border-light-500"/>
      <div class="flex flex-row-reverse max-w-screen-lg mx-auto mt-8">
        <div class="max-w-sm">
          <h3 class="mt-2 font-display">{{$page.onlineMarketing.graph.title}}</h3>
          <p class="pt-4 mb-2 text-black-500">{{$page.onlineMarketing.graph.description}}</p>
          <a v-bind:href="$page.onlineMarketing.graph.source" class="text-xs font-bold tracking-widest uppercase text-dark-100 hover:text-dark-300">Quelle <i class="fas fa-external-link-alt"></i></a>
        </div>
        <div class="mr-8 text-5xl text-dark-100 md:text-6xl"><i class="fas fa-hand-holding-usd"></i></div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="relative mt-16 md:mt-24 lg:mt-40">
      <div class="relative z-10 grid max-w-screen-lg grid-cols-1 px-4 py-12 mx-auto sm:px-8 md:py-24 md:grid-cols-2">
        <div class="order-2 md:order-1">
          <h3 class="font-display">{{$page.onlineMarketing.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.onlineMarketing.cta.text}}</p>
          <g-link to="/#contact" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></g-link>
        </div>
        <div class="order-1 px-4 mb-12 md:mb-0 sm:px-0 md:ml-16 md:order-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 159" class="w-24 md:w-48 md:mx-auto">
            <g fill="none">
              <g fill="#282850">
                <path d="M145.254371 21.0199701C145.254371 19.6410601 144.13255 18.4975737 142.779766 18.4975737L16.6739173 18.4975737C13.4734287 18.4975737 13.4734287 23.5423666 16.6739173 23.5423666L142.779766 23.5423666C144.13255 23.5423666 145.254371 22.3988802 145.254371 21.0199701zM79.0478138 31.9503546L17.5085598 31.9503546C14.3147088 31.9503546 14.3147088 36.9951474 17.5085598 36.9951474L79.0478138 36.9951474C82.2416649 36.9951474 82.2416649 31.9503546 79.0478138 31.9503546zM79.0478138 46.2439343L17.5085598 46.2439343C14.3147088 46.2439343 14.3147088 51.2887271 17.5085598 51.2887271L79.0478138 51.2887271C82.2416649 51.2887271 82.2416649 46.2439343 79.0478138 46.2439343zM79.0478138 59.6967152L17.5085598 59.6967152C14.3147088 59.6967152 14.3147088 64.741508 17.5085598 64.741508L79.0478138 64.741508C82.2416649 64.741508 82.2416649 59.6967152 79.0478138 59.6967152zM79.0478138 73.1494961L17.5085598 73.1494961C14.3147088 73.1494961 14.3147088 78.1942889 17.5085598 78.1942889L79.0478138 78.1942889C82.2416649 78.1942889 82.2416649 73.1494961 79.0478138 73.1494961z"/>
                <path d="M22.0846745,0 C25.282008,0 25.282008,4.94793955 22.0846745,4.94793955 L22.0846745,4.94793955 L13.7452377,4.94793955 C8.89979421,4.94793955 4.94433012,8.90629119 4.94433012,13.7552719 L4.94433012,13.7552719 L4.94433012,90.7781976 L133.264,90.778 L133.264,95.726 L4.94433012,95.7261371 L4.94433012,109.283491 C4.94433012,114.132472 8.89979421,118.090824 13.7452377,118.090824 L13.7452377,118.090824 L148.033244,118.090824 C152.878687,118.090824 156.834151,114.132472 156.834151,109.283491 L156.834151,109.283491 L156.808,97.883 L161.745,97.883 L161.745519,109.283491 C161.745519,116.766403 155.749306,122.869499 148.311032,123.035303 L148.000282,123.038763 L97.6010765,123.038763 L97.6010765,141.478085 L110.950768,141.478085 C121.663483,141.478085 121.630521,158.070175 110.950768,158.070175 L110.950768,158.070175 L109.104885,158.070175 C105.907551,158.070175 105.907551,153.122236 109.104885,153.122236 L109.104885,153.122236 L110.950768,153.122236 C115.268816,153.122236 115.268816,146.426024 110.950768,146.426024 L110.950768,146.426024 L50.8277136,146.426024 C46.5096653,146.426024 46.5096653,153.122236 50.8277136,153.122236 L50.8277136,153.122236 L94.6015163,153.122236 C97.7988497,153.122236 97.7988497,158.070175 94.6015163,158.070175 L94.6015163,158.070175 L50.7947514,158.070175 C40.0820362,158.070175 40.1149984,141.478085 50.7947514,141.478085 L50.7947514,141.478085 L64.5070269,141.478085 L64.5070269,123.038763 L13.7452377,123.038763 C6.16393155,123.038763 1.41277503e-14,116.870332 1.41277503e-14,109.283491 L1.41277503e-14,109.283491 L1.41277503e-14,13.7552719 C1.41277503e-14,6.1684313 6.16393155,0 13.7452377,0 L13.7452377,0 Z M92.6567464,123.038763 L69.4513571,123.038763 L69.4513571,141.478085 L92.6567464,141.478085 L92.6567464,123.038763 Z M148.033244,0 C155.61455,0 161.778481,6.1684313 161.778481,13.7552719 L161.778481,13.7552719 L161.778,79.885 L156.834,76.276 L156.834151,13.7552719 C156.834151,8.99288013 153.018693,5.08959325 148.291952,4.95170877 L148.033244,4.94793955 L35.9287989,4.94793955 C32.7314654,4.94793955 32.7314654,0 35.9287989,0 L35.9287989,0 Z"/>
              </g>
              <g fill="#8CA0C3" transform="translate(89.474 31.813)">
                <path d="M20.3026869 15.7311714C19.9018427 14.8355283 18.9999435 14.2716049 18.0312369 14.2716049 17.0625302 14.2716049 16.160631 14.8355283 15.7597869 15.7311714L9.47989567 29.1989892C8.11034494 32.1181222 12.6866486 34.207956 14.0227957 31.288823L14.2232177 30.8575875 21.839256 30.8575875 22.039678 31.288823C22.6075405 32.5493577 24.110706 33.0801091 25.3800457 32.5161857 26.6493854 31.9522623 27.1838442 30.4595239 26.6159817 29.1989892L20.3026869 15.7311714zM16.5280714 25.9149647L17.9978332 22.730456 19.4675949 25.9149647 16.5280714 25.9149647zM37.9263357 14.2716049L33.4509569 14.2716049C32.1308812 14.2716049 31.0361842 15.3889548 31.0361842 16.7363473L31.0361842 30.2759984C31.0361842 31.6233909 32.1308812 32.7407407 33.4509569 32.7407407L37.9263357 32.7407407C42.916866 32.7407407 46.9736842 28.5999736 46.9736842 23.5061728 46.9736842 18.412372 42.916866 14.2716049 37.9263357 14.2716049zM37.9263357 27.8112561L35.8657297 27.8112561 35.8657297 19.2010896 37.9263357 19.2010896C40.2445175 19.2010896 42.1441388 21.1400202 42.1441388 23.5061728 42.1441388 25.8723255 40.2445175 27.8112561 37.9263357 27.8112561z"/>
                <path d="M54.0394737,-6.93423227e-13 C55.6963279,-6.89312839e-13 57.0394737,1.34314575 57.0394737,3 L57.0389145,40.3613573 C59.3137398,42.0464761 62.3265407,44.278279 65.3690493,46.5321332 L66.1259444,47.092833 C66.4249631,47.3143432 66.7237017,47.5356464 67.0214877,47.7562445 L67.6155907,48.196353 C67.7143297,48.2694985 67.8129132,48.3425288 67.9113161,48.4154254 L68.499368,48.8510535 C73.7687513,52.7546129 78.3664749,56.1607995 78.3716006,56.1652694 C79.3867367,57.0505244 79.9799104,58.3895762 79.5629194,59.9487683 C79.1459285,61.5079603 77.7923519,62.6326523 76.3296297,62.6326523 L76.2934917,62.63297 L76.2804419,62.6330847 L76.1850777,62.6339231 C75.333827,62.6414072 70.7228857,62.6819458 62.3522539,62.7555391 C57.0504267,70.1331025 54.3995131,73.8218842 54.3995131,73.8218842 C53.3790156,75.1554237 51.677896,75.6776949 50.0904182,75.0297418 C48.5029405,74.3817886 47.7195452,73.2199158 47.7195452,71.4175106 L47.7191671,71.3359253 C47.719084,71.3179803 47.7189874,71.2971369 47.7188776,71.2734568 L47.7180638,71.0978295 C47.7113688,69.6531171 47.682978,63.5266849 47.6533736,57.1383383 L47.645959,55.5383529 L47.6416799,54.6149532 C47.6275565,51.5672709 47.6137706,48.5924105 47.6025539,46.1719691 L3,46.1728395 C1.34314575,46.1728395 -6.26244369e-13,44.8296938 -6.29682141e-13,43.1728395 L-6.29682141e-13,3 C-6.30329137e-13,1.34314575 1.34314575,-6.93118867e-13 3,-6.93423227e-13 L54.0394737,-6.93423227e-13 Z M52.5224687,43.1588862 L52.5224687,67.7617428 L58.7134222,59.3631773 C59.4049649,58.4409819 60.4916748,57.7163998 61.6442459,57.7163998 L61.6442459,57.7163998 L72.1820391,57.7163998 L52.5224687,43.1588862 Z M51.6004118,5.21713143 L5.06946895,5.21713143 L5.06946895,41.2486243 L47.5828782,41.2815598 L47.5828782,40.6887199 C47.5828782,39.2724912 48.3402821,38.0209403 49.591645,37.3951648 C50.1770779,37.1024043 50.7885301,36.9657828 51.3797452,36.9853001 L51.6004118,36.9999382 L51.6004118,5.21713143 Z"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-br from-light-900 to-dark-100"></div>
    </section>

    <!-- FEATURED ADS -->
    <section id="ads" class="max-w-screen-xl px-4 mt-16 md:mx-auto sm:px-8 md:mt-24 lg:mt-40">
      <Title :icon="'fa-ad'" :heading="'Online Marketing'" :title="'Erfolgreiche Anzeigen'"/>
      <div class="pt-12 -mt-16 md:mt-24 lg:mt-72">
        <div v-for="(ad, i) in $page.onlineMarketing.ads" :key="i" class="">
          <div v-if="i % 2 == 0" class="mt-16 md:-mt-24 lg:-mt-72 sm:flex" v-bind:id="'ad-' + i">
            <Window class="relative z-0 w-11/12 mx-auto sm:flex-shrink-0 xs:w-96 md:mx-0">
              <img v-bind:src="ad.screenshot" alt="Content Production" class="object-cover object-center">
              <div class="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-25 bg-dark-900 hover:bg-opacity-0"></div>
            </Window>
            <div>
              <div class="relative z-10 max-w-md p-10 mx-auto -mt-12 bg-white rounded-lg shadow-md md:mx-0 md:mt-32 md:-ml-32">
                <h3 class="font-display">{{ad.title}}</h3>
                <p class="pt-4 text-black-500">{{ad.description}}</p>
              </div>
            </div>
          </div>
          <div v-else class="mt-16 md:-mt-24 lg:-mt-72 sm:flex sm:flex-row-reverse">
            <Window class="relative z-0 w-11/12 mx-auto sm:flex-shrink-0 xs:w-96 md:mx-0">
              <img v-bind:src="ad.screenshot" alt="Content Production" class="object-cover object-center">
              <div class="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-25 bg-dark-900 hover:bg-opacity-0"></div>
            </Window>
            <div>
              <div class="relative z-10 max-w-md p-10 mx-auto -mt-12 bg-white rounded-lg shadow-md md:mx-0 md:mt-32 md:-mr-32">
                <h3 class="font-display">{{ad.title}}</h3>
                <p class="pt-4 text-black-500">{{ad.description}}</p>
              </div>
            </div>
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
      ads {
        title
        description
        screenshot
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
          },
          animation: {duration: 2600, easing: 'easeOutCubic'}
        }
      }
    },
    methods: {
      animations() {
        //Scroll reveal animations:
        gsap.from('#header-image', {scrollTrigger: '#header-image', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#header-box', {scrollTrigger: '#header-box', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.2})
        gsap.from('#chart', {scrollTrigger: '#chart', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
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
