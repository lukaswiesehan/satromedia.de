<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 -mt-16 xs:-mt-32 md:-mt-64">
      <div id="header-image" class="relative w-full rounded-lg overflow-hidden shadow-lg">
        <img v-bind:src="$page.influencerManagement.header.image" alt="Content Production" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
      </div>
      <div class="flex flex-row-reverse">
        <div id="header-box" class="relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 md:mr-24 -mt-32 md:-mt-48 w-11/12 max-w-lg">
          <Title :icon="'fa-people-arrows'" :heading="'Unsere Services'" :title="'Influencer Management'"></Title>
          <p class="pt-4 sm:ml-12 text-black-500">{{$page.influencerManagement.header.text}}</p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section id="stats" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40 md:flex md:items-center md:justify-between">
      <div id="stats-icon" class="w-40 sm:w-32 lg:w-40 mb-12 md:mb-0 md:order-2 mx-auto">
        <svg viewBox="0 0 170 170" class="w-full mx-auto">
          <g fill="none">
            <g fill="#282850" transform="translate(38 11)">
              <polygon points="0 62.92 5.985 62.92 5.985 73.973 0 73.973"/>
              <polygon points="42.748 141.995 48.733 141.995 48.733 147.947 42.748 147.947"/>
              <polygon points="46.168 119.037 52.153 119.037 52.153 124.989 46.168 124.989"/>
              <path d="M11.9694656,68.5882353 L34.540458,68.5882353 L34.540458,79.9251337 L40.1832061,79.9251337 L40.1832061,65.7540107 C40.1832061,64.1951872 38.9135878,62.9197861 37.3618321,62.9197861 L14.7908397,62.9197861 C13.239084,62.9197861 11.9694656,64.1951872 11.9694656,65.7540107 L11.9694656,68.5882353 Z"/>
              <polygon points="46.168 73.973 60.702 73.973 60.702 79.925 46.168 79.925"/>
              <path d="M14.7908397 56.9679144L37.3618321 56.9679144C38.9135878 56.9679144 40.1832061 55.6925134 40.1832061 54.1336898L40.1832061 48.4652406 34.540458 48.4652406 34.540458 51.2994652 11.9694656 51.2994652 11.9694656 54.1336898C11.9694656 55.6925134 13.239084 56.9679144 14.7908397 56.9679144zM112 159L112 102.28669C112 94.7533425 109.321985 87.4332035 104.3888 81.7476586L100.089881 76.5240642 95.7557252 80.1485991 100.089881 85.4432627C104.14214 90.0983026 106.362074 96.1036594 106.362074 102.28669L106.362074 159 112 159zM74.5364351 159L77.4032211 159 77.4032211 153.334174C77.4032211 152.696768 77.1882121 152.059363 76.7581942 151.563603 70.5229347 143.950149 69.6987338 133.326725 74.6439396 124.827986L77.009038 120.755674C77.6540648 119.65792 77.4390559 118.241463 76.5431853 117.356178L59.3424695 100.3587C56.583188 97.5257865 56.6190228 93.0639484 59.4141391 90.2664468 62.2092554 87.5043565 66.7602782 87.4689451 69.6270641 90.1956239L92.5613518 112.858928 96.610687 108.857439 91.7371509 104.006075 91.7371509 82.5113472 86.003579 82.5113472 86.003579 98.340249 78.5857703 91.0100864 80.270007 91.0100864 80.270007 85.3442603 72.6730242 85.3442603C67.9069925 81.5198277 61.0983759 81.5198277 56.3323442 85.3442603L45.8685754 85.3442603 45.8685754 91.0100864 52.283009 91.0100864C51.6379822 92.8160685 51.4229732 94.7636962 51.6379822 96.6759126L45.8685754 96.6759126 45.8685754 102.341739 53.6447324 102.341739C54.1105851 103.049967 54.6839423 103.722784 55.2931343 104.360189L58.9841212 108.007565 45.8685754 108.007565 45.8685754 113.673391 64.753528 113.673391 70.4870999 119.339217 57.3357193 119.339217 57.3357193 125.005043 68.229506 125.005043C67.4411398 126.811025 66.796113 128.723242 66.3660951 130.670869L45.8685754 130.670869 45.8685754 136.336695 65.7927379 136.336695C65.7210682 142.392047 67.5486443 148.341165 71.0246223 153.334174L14.3339298 153.334174C9.56789816 153.334174 5.73357193 149.545153 5.73357193 144.835435L5.73357193 142.002522 0 142.002522 0 144.835435C0 152.661357 6.4144336 159 14.3339298 159L74.5364351 159zM91.480916 22.9572193L46.1679389 22.9572193 46.1679389 17.2231205 85.8073176 17.2231205C85.8073176 16.1726796 85.8073176 15.2191127 85.8073176 14.3624196 85.8073176 10.0716768 82.4670142 5.74098408 77.2880932 5.74098408 73.8354792 5.74098408 63.4620945 5.74098408 46.1679389 5.74098408L46.1679389 0C61.6006517 0 71.9740365 0 77.2880932 0 85.2591783 0 91.480916 6.46008411 91.480916 14.3624196 91.480916 19.6306432 91.480916 22.4955764 91.480916 22.9572193z"/>
              <polygon points="65.832 73.973 71.817 73.973 71.817 79.925 65.832 79.925"/>
            </g>
            <g fill="#8CA0C3">
              <g transform="translate(11.05 84.971)">
                <path d="M11.3333333,11.2884258 C5.06458333,11.2884258 0,16.3272369 0,22.5640871 L0,50.7532404 C0,56.9900906 5.06458333,62.0289017 11.3333333,62.0289017 L56.6666667,62.0289017 C62.9354167,62.0289017 68,56.9900906 68,50.7532404 L68,22.5640871 C68,16.3272369 62.9354167,11.2884258 56.6666667,11.2884258 L45.3333333,11.2884258 L45.3333333,2.83167978 C45.3333333,1.80982297 44.7666667,0.823202602 43.8458333,0.32989242 C42.925,-0.163417763 41.7916667,-0.0929448802 40.9416667,0.470838186 L24.65,11.2884258 L11.3333333,11.2884258 Z M27.0583333,16.4681827 L39.6666667,8.11714602 L39.6666667,14.1073411 C39.6666667,15.6577445 40.9416667,16.9262564 42.5,16.9262564 L56.6666667,16.9262564 C59.7833333,16.9262564 62.3333333,19.4632802 62.3333333,22.5640871 L62.3333333,50.7532404 C62.3333333,53.8540473 59.7833333,56.3910711 56.6666667,56.3910711 L11.3333333,56.3910711 C8.21666667,56.3910711 5.66666667,53.8540473 5.66666667,50.7532404 L5.66666667,22.5640871 C5.66666667,19.4632802 8.21666667,16.9262564 11.3333333,16.9262564 L25.5,16.9262564 C26.0666667,16.9262564 26.5979167,16.7500742 27.0583333,16.4681827 Z"/>
                <path d="M24.3666667,50.6141673 C25.2520833,51.1054895 26.3145833,51.1054895 27.2,50.6141673 L47.0333333,39.3839445 C47.91875,38.8926223 48.45,37.9450722 48.45,36.9624277 C48.45,35.9446888 47.91875,35.0322332 47.0333333,34.540911 L27.2,23.3106882 C26.3145833,22.819366 25.2520833,22.819366 24.3666667,23.3106882 C23.48125,23.8020105 22.95,24.7495605 22.95,25.7672994 L22.95,48.2277449 C22.95,49.2103894 23.48125,50.122845 24.3666667,50.6141673 Z M28.6166667,30.5752386 L39.9145833,36.9624277 L28.6166667,43.3496169 L28.6166667,30.5752386 Z"/>
              </g>
              <g>
                <path d="M11.2928571,56.6367131 L24.5619643,56.6367131 L40.7954464,67.5038824 C41.6777009,68.0702495 42.7716964,68.1410454 43.6892411,67.6454742 C44.6067857,67.1499029 45.1714286,66.1941584 45.1714286,65.167618 L45.1714286,56.672111 L67.7571429,56.672111 C74.0035045,56.672111 79.05,51.6102048 79.05,45.3447684 L79.05,11.3273426 C79.05,5.06190623 74.0035045,1.0658141e-13 67.7571429,1.0658141e-13 L11.2928571,1.0658141e-13 C5.04649554,1.0658141e-13 9.23705556e-14,5.06190623 9.23705556e-14,11.3273426 L9.23705556e-14,45.3093704 C9.23705556e-14,51.5748068 5.04649554,56.6367131 11.2928571,56.6367131 Z M67.7571429,50.9730417 L42.3482143,50.9730417 C40.7954464,50.9730417 39.525,52.2473678 39.525,53.8048774 L39.525,59.8225282 L26.9616964,51.433215 C26.5029241,51.1146335 25.9382813,50.9730417 25.4089286,50.9730417 L11.2928571,50.9730417 C8.57551339,50.9730417 6.24636161,49.0261547 5.75229911,46.3713088 L28.0909821,23.9644092 L45.8772321,44.3536259 C46.8653571,45.4863602 48.5945759,45.627952 49.7591518,44.7076054 L61.8989732,34.9731703 L73.2977009,46.4067068 C72.8036384,49.0615527 70.4744866,50.9730417 67.7571429,50.9730417 Z M5.64642857,11.3273426 C5.64642857,8.21232339 8.18732143,5.66367131 11.2928571,5.66367131 L67.7571429,5.66367131 C70.8626786,5.66367131 73.4035714,8.21232339 73.4035714,11.3273426 L73.4035714,38.4775669 L64.1222545,29.1679072 C63.0988393,28.1413668 61.4754911,28.0705709 60.3462054,28.9555195 L48.3475446,38.5837608 L30.3495536,17.9467584 C29.8202009,17.3449934 29.1143973,16.9910139 28.3027232,16.9910139 C27.5263393,16.955616 26.7499554,17.2741975 26.2206027,17.8051667 L5.64642857,38.4775669 L5.64642857,11.3273426 Z"/>
                <path d="M51,28.0404624 C55.7104167,28.0404624 59.5,24.2521676 59.5,19.5433526 C59.5,14.8345376 55.7104167,11.0462428 51,11.0462428 C46.2895833,11.0462428 42.5,14.8345376 42.5,19.5433526 C42.5,24.2521676 46.2895833,28.0404624 51,28.0404624 Z M51,16.7109827 C52.5583333,16.7109827 53.8333333,17.9855491 53.8333333,19.5433526 C53.8333333,21.1011561 52.5583333,22.3757225 51,22.3757225 C49.4416667,22.3757225 48.1666667,21.1011561 48.1666667,19.5433526 C48.1666667,17.9855491 49.4416667,16.7109827 51,16.7109827 Z"/>
              </g>
              <g transform="translate(90.95 39.936)">
                <path d="M79.05,8.49688819 C79.05,3.78819599 75.2739509,1.42108547e-14 70.5803571,1.42108547e-14 L39.525,1.42108547e-14 L33.8785714,1.42108547e-14 L8.46964286,1.42108547e-14 C3.77604911,1.42108547e-14 9.23705556e-14,3.78819599 9.23705556e-14,8.49688819 L9.23705556e-14,31.1552567 C9.23705556e-14,35.8639489 3.77604911,39.6521449 8.46964286,39.6521449 L25.4089286,39.6521449 L25.4089286,48.1490331 C25.4089286,49.2819515 26.079442,50.3440625 27.1381473,50.768907 C28.1968527,51.1937514 29.3967188,50.9813292 30.2083929,50.167044 L40.6895759,39.6521449 L70.5803571,39.6521449 C75.2739509,39.6521449 79.05,35.8639489 79.05,31.1552567 C79.05,19.8260724 79.05,19.8260724 79.05,8.49688819 Z M73.4035714,31.1552567 C73.4035714,32.7130195 72.133125,33.9875528 70.5803571,33.9875528 L39.525,33.9875528 C38.7839063,33.9875528 38.0428125,34.2707824 37.5134598,34.8018379 L31.0553571,41.3161188 L31.0553571,36.8198488 C31.0553571,35.262086 29.7849107,33.9875528 28.2321429,33.9875528 L8.46964286,33.9875528 C6.916875,33.9875528 5.64642857,32.7130195 5.64642857,31.1552567 L5.64642857,8.49688819 C5.64642857,6.93912536 6.916875,5.66459213 8.46964286,5.66459213 L70.5803571,5.66459213 C72.133125,5.66459213 73.4035714,6.93912536 73.4035714,8.49688819 L73.4035714,31.1552567 Z"/>
                <polygon points="11.05 11.046 22.1 11.046 22.1 16.994 11.05 16.994"/>
                <polygon points="28.05 11.046 68 11.046 68 16.994 28.05 16.994"/>
                <polygon points="11.05 22.092 39.1 22.092 39.1 28.04 11.05 28.04"/>
                <polygon points="45.05 22.092 51 22.092 51 28.04 45.05 28.04"/>
                <polygon points="56.1 22.092 67.15 22.092 67.15 28.04 56.1 28.04"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="text-center mb-12 md:mb-0 md:order-1">
        <p id="stat-1" class="font-display text-5xl lg:text-6xl">{{statFigure1}}<span class="text-4xl lg:text-5xl"> {{$page.influencerManagement.stats[0].unit}}</span></p>
        <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.influencerManagement.stats[0].description}}</p>
      </div>
      <div class="text-center md:order-3">
        <p id="stat-1" class="font-display text-5xl lg:text-6xl">{{statFigure2}}<span class="text-4xl lg:text-5xl"> {{$page.influencerManagement.stats[1].unit}}</span></p>
        <p class="text-xs md:text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.influencerManagement.stats[1].description}}</p>
      </div>
    </section>

    <!-- CTA & STATS -->
    <section id="cta" class="relative mt-16 md:mt-24 lg:mt-48">
      <div class="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3 class="font-display">{{$page.influencerManagement.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.influencerManagement.cta.text}}</p>
          <g-link to="/#contact" class="inline-block mt-12 bg-black-900 px-6 py-3 rounded-full text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></g-link>
        </div>
        <div class="px-4 sm:px-0 mt-16 md:mt-12 ml-0 md:ml-16">
          <div class="h-4 w-full rounded-full bg-light-500"></div>
          <div id="cta-stat-1" class="h-2 rounded-full bg-dark-100 -mt-3 mx-1"></div>
          <p class="text-black-500 mt-2 mb-8 ml-1"><span class="font-display text-black-900">{{$page.influencerManagement.cta.stats[0].figure}} %</span> {{$page.influencerManagement.cta.stats[0].description}}</p>
          <div class="h-4 w-full rounded-full bg-light-500"></div>
          <div id="cta-stat-2" class="h-2 rounded-full bg-dark-100 -mt-3 mx-1"></div>
          <p class="text-black-500 mt-2 mb-8 ml-1"><span class="font-display text-black-900">{{$page.influencerManagement.cta.stats[1].figure}} %</span> {{$page.influencerManagement.cta.stats[1].description}}</p>
          <div class="h-4 rounded-full bg-light-500"></div>
          <div id="cta-stat-3" class="h-2 rounded-full bg-dark-100 -mt-3 mx-1"></div>
          <p class="text-black-500 mt-2 mb-8 ml-1"><span class="font-display text-black-900">{{$page.influencerManagement.cta.stats[2].figure}} %</span> {{$page.influencerManagement.cta.stats[2].description}}</p>
        </div>
      </div>
      <div class="absolute w-full h-full left-0 top-0 bg-gradient-to-br from-light-900 to-dark-100 opacity-50"></div>
    </section>

    <!-- INFLUENCERS -->
    <section id="influencers" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <Title :icon="'fa-user-friends'" :heading="'Influencer Management'" :title="'Unsere Partner'" class="md:mb-12 lg:mb-24"></Title>
      <div class="text-center">
        <div v-for="(influencer, i) in $page.influencerManagement.influencers" :key="i" class="mt-12 inline-block">
          <Window class="w-11/12 xs:w-96 lg:w-128 mx-auto md:mx-0 relative z-10" v-bind:class="{'': influencer.landscape, 'md:ml-72 md:mt-32 lg:ml-112 lg:mt-64': !influencer.landscape}">
            <div class="p-4 sm:p-6 pt-0">
              <div class="w-full text-center text-lg sm:-mt-2"><a v-bind:href="influencer.profileLink" target="_blank" class="font-display text-light-900">{{influencer.username}}</a></div>
              <div class="flex items-center justify-between mt-4">
                <div>
                  <img v-bind:src="influencer.profilePicture" alt="Avatar" class="object-cover object-center w-16 h-16 sm:w-24 sm:h-24 rounded-full">
                </div>
                <div class="flex">
                  <div class="text-center mr-3 lg:mr-8">
                    <p class="text-white font-display text-sm xs:text-base lg:text-2xl">{{influencer.timeline}}</p>
                    <p class="text-light-900 lg:-mt-2 text-2xs xs:text-xs lg:text-base">Beiträge</p>
                  </div>
                  <div class="text-center mr-3 lg:mr-8">
                    <p class="text-white font-display text-sm xs:text-base lg:text-2xl">{{influencer.followers}}</p>
                    <p class="text-light-900 lg:-mt-2 text-2xs xs:text-xs lg:text-base">Abonnenten</p>
                  </div>
                  <div class="text-center">
                    <p class="text-white font-display text-sm xs:text-base lg:text-2xl">{{influencer.follows}}</p>
                    <p class="text-light-900 lg:-mt-2 text-2xs xs:text-xs lg:text-base">Abonniert</p>
                  </div>
                </div>
              </div>
              <div class="my-6 text-left">
                <p class="font-bold text-white text-xs sm:text-sm lg:text-base">{{influencer.fullName}}</p>
                <p class="text-white text-xs sm:text-sm lg:text-base" v-html="influencer.biography"></p>
              </div>
            </div>
          </Window>
          <img v-bind:src="influencer.image" alt="Influencer Featured Image" class="w-full rounded-lg shadow-lg" v-bind:class="{'-mt-32 md:max-w-xl md:ml-32 md:-mt-72 lg:ml-96 lg:-mt-128': influencer.landscape, '-mt-32 md:max-w-lg md:-mt-96 lg:-mt-112': !influencer.landscape}">
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    influencerManagement(id: "2") {
      id
      header {
        image
        text
      }
      stats {
        figure
        decimal
        unit
        description
      }
      cta {
        heading
        text
        stats {
          figure
          description
        }
      }
      influencers {
        username
        image
        landscape
      }
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'
  import axios from 'axios'

  import {gsap, TweenLite} from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  export default {
    name: 'InfluencerManagement',
    metaInfo: {
      title: 'Influencer Management'
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
        influencerProfiles: []
      }
    },
    methods: {
      animations() {
        //Stat upcount animation:
        var counter1 = {var: 0}
        TweenLite.to(counter1, 1.8, {
          var: this.$page.influencerManagement.stats[0].figure,
          ease: 'power3',
          scrollTrigger: '#stat-1',
          onUpdate: () => {
            if(this.$page.influencerManagement.stats[0].decimal) {
              this.statFigure1 = Math.round(counter1.var * 100) / 100
            } else {
              this.statFigure1 = Math.ceil(counter1.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        var counter2 = {var: 0}
        TweenLite.to(counter2, 1.6, {
          var: this.$page.influencerManagement.stats[1].figure,
          ease: 'power3',
          scrollTrigger: '#stat-2',
          onUpdate: () => {
            console.log(this.$page.influencerManagement.stats[1].decimal)
            if(this.$page.influencerManagement.stats[1].decimal) {
              this.statFigure2 = Math.round(counter2.var * 100) / 100
            } else {
              this.statFigure2 = Math.ceil(counter2.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }
        })
        //CTA stat diagram animation:
        TweenLite.fromTo('#cta-stat-1', 2.0, {width: '0%'}, {scrollTrigger: '#cta-stat-1', width: this.$page.influencerManagement.cta.stats[0].figure + '%'})
        TweenLite.fromTo('#cta-stat-2', 2.0, {width: '0%'}, {scrollTrigger: '#cta-stat-2', width: this.$page.influencerManagement.cta.stats[1].figure + '%', delay: 0.4})
        TweenLite.fromTo('#cta-stat-3', 2.0, {width: '0%'}, {scrollTrigger: '#cta-stat-3', width: this.$page.influencerManagement.cta.stats[2].figure + '%', delay: 0.8})
        //Scroll reveal animations:
        gsap.from('#header-image', {scrollTrigger: '#header-image', y: 100, opacity: 0, duration: 1.6, ease: 'power3'})
        gsap.from('#header-box', {scrollTrigger: '#header-box', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.2})
        gsap.from('#stats', {scrollTrigger: '#stats', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.4})
        gsap.from('#stats-icon', {scrollTrigger: '#stats-icon', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3', delay: 0.4})
        gsap.from('#cta', {scrollTrigger: '#cta', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        gsap.from('#influencers', {scrollTrigger: '#influencers', y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      this.animations()
      for(var influencer of this.$page.influencerManagement.influencers) {
        try {
          const request = await axios.get(
            'https://www.instagram.com/' + influencer.username +'/?__a=1'
          )
          var userData = request.data.graphql.user
          influencer.profileLink = 'https://instagram.com/' + influencer.username
          influencer.fullName = userData.full_name,
          influencer.biography = userData.biography.replace(/\n/g, '<br/>'),
          influencer.profilePicture = userData.profile_pic_url,
          influencer.timeline = userData.edge_owner_to_timeline_media.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          influencer.followers= userData.edge_followed_by.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          influencer.follows = userData.edge_follow.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        } catch (error) {
          console.log(error)
        }
      }
    } 
  }
</script>
