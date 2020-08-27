<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="false" />
    <section id="header" class="container mx-auto">
      <Window>
        <img v-bind:src="$page.landing.header_media" alt="Satro Media Showreel">
        <div class="flex items-center absolute left-0 top-0 w-full h-full bg-dark-900 bg-opacity-25">
          <img src="../assets/img/satro_logo.png" alt="Satro Media Logo" class="w-2/3 mx-auto -mt-24">
        </div>
      </Window>
    </section>
    <section id="quote" class="container mx-auto mt-40">
      <div class="w-10/12 mx-auto">
        <p class="text-3xl font-display"><i class="fas fa-quote-right text-dark-100 pr-6"></i>{{$page.landing.cite}}</p>
      </div>
    </section>
    <section id=intro>
      <div class="mt-12 bg-light-500">
        <div class="container mx-auto">
          <div class="w-10/12 mx-auto grid grid-cols-2">
            <div></div>
            <div class="py-12">
              <p class="text-black-500">{{$page.landing.intro}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="w-10/12 mx-auto grid grid-cols-2">
          <div>
            <Window class="relative z-10 w-1/2 -mt-32">
              <img v-bind:src="$page.landing.portraits[0].photo" alt="Satro Media Gründer">
            </Window>
            <Window class="relative z-20 w-1/2 ml-40 -mt-48">
              <img v-bind:src="$page.landing.portraits[1].photo" alt="Satro Media Gründer">
            </Window>
          </div>
          <div class="pt-8">
            <p class="text-dark-100">Mika Sannmann & Henning Trogisch</p>
            <p class="text-dark-100 italic">Gründer SaTro Media</p>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="container mx-auto mt-40">
      <div class="w-10/12 mx-auto grid grid-cols-3 gap-x-8 gap-y-12">
        <div v-for="(service, i) in $page.landing.services" :key="i" class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div class="p-6">
            <img v-bind:src="icons[i]" v-bind:alt="service.title" class="mx-auto">
          </div>
          <div class="mt-4 text-center">
            <h3 class="font-display">{{service.title}}</h3>
            <p class="my-4 text-sm">{{service.description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section id="references" class="container mx-auto mt-40">
      <div class="w-10/12 mx-auto flex flex-row">
        <div class="mr-4"><i class="fas fa-user-friends text-3xl text-dark-100"></i></div>
        <div class="font-display">
          <p class="text-xs text-dark-100 uppercase tracking-widest">Kundenstimmen -</p>
          <h2 class="text-3xl">Über unsere Arbeit</h2>
        </div>
      </div>
      <div class="flex flex-row">
        
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    landing(id: "4ca93ae2a3ed8c67e4accebd4623f499") {
      id
      header_media
      cite
      portraits { 
        photo
      }
      intro
      services {
        title
        description
      }
      references {
        name
        company
        reference_text
      }
      about_header
      about_description
      contact_description 
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Window from '../components/Window.vue'
  export default {
    name: 'Index',
    metaInfo: {
      title: 'Satro Media Consulting'
    },
    components: {
      Navbar,
      Window
    },
    data() {
      return {
        icons: [
          '../assets/img/influencer_management.svg',
          '../assets/img/digitale_konzepte.svg',
          '../assets/img/online_marketing.svg',
          '../assets/img/media_consulting.svg',
          '../assets/img/webdesign.svg',
          '../assets/img/content_production.svg',
        ]
      }
    }
  }
</script>
