<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="false" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 md:flex md:items-center">
      <div class="flex-1 relative z-10 bg-white rounded-lg shadow-md p-6 md:p-10 mx-auto md:mx-0 w-10/12 md:w-1/2 max-w-lg">
        <Title :icon="'fa-camera-retro'" :heading="'Unsere Services'" :title="'Content Production'"></Title>
        <p class="pt-4 sm:ml-12 text-black-500">{{$page.contentProduction.header.text}}</p>
      </div>
      <div class="flex-1 relative z-0 rounded-lg overflow-hidden shadow-lg -mt-48 md:mt-0 md:-ml-48">
        <img v-bind:src="$page.contentProduction.header.image" alt="Content Production" class="object-cover object-center w-full h-96 lg:h-112">
        <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
      </div>
    </section>

    <!-- STATS & CTA -->
    <section id="about" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 space-x-8">
        <div>
          <div class="flex flex-row">
            <div class="mr-8 text-dark-100 text-6xl"><i class="fas fa-film"></i></div>
            <div>
              <p class="font-display text-6xl">{{$page.contentProduction.stats[0].figure}}</p>
              <p class="text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.contentProduction.stats[0].description}}</p>
            </div>
          </div>
          <div class="flex flex-row mt-12">
            <div class="mr-8 text-dark-100 text-6xl"><i class="fas fa-sd-card"></i></div>
            <div>
              <p class="font-display text-6xl">{{$page.contentProduction.stats[1].figure}}</p>
              <p class="text-sm uppercase font-bold tracking-widest text-dark-100">{{$page.contentProduction.stats[1].description}}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="font-display">{{$page.contentProduction.cta.heading}}</h3>
          <p class="pt-4 text-black-500">{{$page.contentProduction.cta.text}}</p>
          <g-link to="/#contact" class="inline-block mt-12 bg-black-900 px-6 py-3 rounded-full text-white text-xs uppercase font-bold tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-md hover:text-light-900">Gespräch vereinbaren <i class="fas fa-chevron-right"></i></g-link>
        </div>
      </div>
    </section>

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
      featured_project {
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
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'Content Production',
    metaInfo: {
      title: 'Content Production'
    },
    components: {
      Navbar, 
      Title,
      Footer
    }
  }
</script>
