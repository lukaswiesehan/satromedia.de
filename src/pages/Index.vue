<template>
  <Layout>
    <Navbar :showBackButton="false" />
    <section id="header" class="container mx-auto">
      <Window>
        <img v-bind:src="$page.landing.header_media" alt="Satro Media Showreel">
        <div class="flex items-center absolute left-0 top-0 w-full h-full bg-dark-900 bg-opacity-25">
          <img src="../assets/img/satro_logo.png" alt="Satro Media Logo" class="w-2/3 mx-auto -mt-24">
        </div>
      </Window>
    </section>
  <section id="quote" class="container mx-auto pt-40">
    <div class="w-10/12 mx-auto">
      <p class="text-3xl font-display"><i class="fas fa-quote-right text-dark-100 pr-6"></i>{{$page.landing.cite}}</p>
    </div>
  </section>
  <section id=intro class="mt-12 bg-light-500">
    <div class="container mx-auto">
      <div class="w-10/12 mx-auto grid grid-cols-2 gap-24">
        <div class="grid grid-cols-2">
          <Window class="">
            <img v-bind:src="$page.landing.portraits[0].photo" alt="Satro Media Gründer">
          </Window>

        </div>
        <div class="py-12">
          <p class="text-black-500">{{$page.landing.intro}}</p>
        </div>
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
    }
  }
</script>
