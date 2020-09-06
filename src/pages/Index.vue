<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="false" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <Window>
        <img v-bind:src="$page.landing.header_media" alt="Satro Media Showreel">
        <div class="flex items-center absolute left-0 top-0 w-full h-full bg-dark-900 bg-opacity-25">
          <img src="../assets/img/satro_logo.png" alt="Satro Media Logo" class="w-2/3 mx-auto -mt-24">
        </div>
      </Window>
    </section>

    <!-- QUOTE -->
    <section id="quote" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <p class="text-xl md:text-3xl font-display"><i class="fas fa-quote-right text-dark-100 pr-6"></i>{{$page.landing.cite}}</p>
    </section>

    <!-- INTRO -->
    <section id=intro>
      <div class="mt-12 pb-32 md:pb-0 bg-light-500">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div class="py-12">
              <p class="text-black-500">{{$page.landing.intro}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Window class="relative z-10 w-1/2 sm:w-1/3 md:w-1/2 -mt-32">
              <img v-bind:src="$page.landing.portraits[0].photo" alt="Satro Media Gründer">
            </Window>
            <Window class="relative z-20 w-1/2 sm:w-1/3 md:w-1/2 ml-32 xs:ml-48 sm:ml-40 -mt-40 xs:-mt-56 sm:-mt-48">
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

    <!-- SERVICES -->
    <section id="services" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-2 gap-x-8 mb-12">


        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div class="">
            <div class="relative rounded-lg overflow-hidden shadow-lg">
              <img src="../assets/img/influencer_management.svg" v-bind:alt="$page.landing.services[0].title" class="mx-auto">
              <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
            </div>
          
          </div>
          <div class="mt-4 px-16 text-center">
            <h3 class="font-display">{{$page.landing.services[0].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.services[0].description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>



      </div>
      <div class="grid grid-cols-3 gap-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div class="p-6">
            <img src="../assets/img/digitale_konzepte.svg" v-bind:alt="$page.landing.services[2].title" class="mx-auto">
          </div>
          <div class="mt-4 text-center">
            <h3 class="font-display">{{$page.landing.services[2].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.services[2].description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>



    </section>





    <!-- REFERENCES -->
    <section id="references" class="mt-16 md:mt-24 lg:mt-40">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
        <Title :icon="'fa-user-friends'" :heading="'Kundenstimmen'" :title="'Über unsere Arbeit'"></Title>
      </div>
      <div class="relative mt-8">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
          <div class="md:flex">
            <div class="md:w-1/2 lg:w-2/3 py-8 md:py-12 md:pr-8 lg:pr-24 flex flex-wrap items-center">
              <div v-for="(client, i) in $page.landing.clients" :key="i" class="w-1/2 p-4 md:p-2 lg:px-4 lg:py-8" v-bind:class="{'w-1/3': i > 1}">
                <img v-bind:src="client.logo" alt="Logo Client" class="w-full" style="filter: grayscale(100%) opacity(80%); -webkit-filter: grayscale(100%) opacity(80%);">
              </div>
            </div>
            <div class="relative z-10 max-w-xl mx-auto pb-12 lg:pb-0 md:w-1/2 lg:w-1/3 md:-mt-20">
              <Window>
                <div class="ml-2 mr-6 mb-8">
                  <div v-for="(reference, i) in $page.landing.references" :key="i">
                    <Bubble :light="false">
                      <p class="text-black-300 font-bold">{{reference.name}}, {{reference.company}}</p>
                      <p class="text-white">{{reference.reference_text}}</p>
                    </Bubble>
                  </div>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <div class="absolute w-full h-full left-0 top-0 bg-light-900 bg-opacity-50"></div>
      </div>
    </section>
    
    <!-- ABOUT -->
    <section id="about" class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <Title :icon="'fa-users'" :heading="'Satro Media'" :title="'Über die Agentur'"></Title>
      <div class="mt-8 lg:flex">
        <div class="px-4 py-8 pb-32 md:px-8 md:py-12 md:pb-32 lg:w-1/2 md:pr-32 lg:pb-0 bg-white shadow-md rounded-lg">
          <h3 class="font-display">{{$page.landing.about_header}}</h3>
          <p class="pt-4">{{$page.landing.about_description}}</p>
        </div>
        <div class="mx-8 -mt-24 lg:mx-0 lg:my-8 lg:-ml-24 lg:w-4/5 relative rounded-lg overflow-hidden shadow-lg">
          <img v-bind:src="$page.landing.about_image" alt="Satro Media Team" class="w-full h-full">
          <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
        </div>
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
      clients {
        logo
      }
      references {
        name
        company
        reference_text
      }
      about_header
      about_description
      about_image
      contact_description 
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Window from '../components/Window.vue'
  import Bubble from '../components/Bubble.vue'
  import Title from '../components/Title.vue'
  export default {
    name: 'Index',
    metaInfo: {
      title: 'Satro Media Consulting'
    },
    components: {
      Navbar,
      Window,
      Bubble,
      Title
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