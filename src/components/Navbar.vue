<template>
  <section v-if="dark" id="navbar" class="bg-gradient-to-tr from-gray-600 to-gray-700 pb-20 xs:pb-32 md:pb-64">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="py-6 md:py-12 lg:py-20 text-xs sm:text-base">
        <a id="nav-item-1" v-if="showBackButton" href="#" class="inline-block uppercase font-display mr-8"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white"><i class="fas fa-chevron-left"></i> Zurück</span></a>
        <a id="nav-item-2" href="#" v-scroll-to="'#services'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Services</span></a>
        <a id="nav-item-3" href="#" v-scroll-to="'#references'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Referenzen</span></a>
        <a id="nav-item-4" href="#" v-scroll-to="'#about'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Team</span></a>
        <a id="nav-item-5" href="#" v-scroll-to="'#contact'" class="inline-block uppercase font-display"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Kontakt</span></a>
      </div>
    </div>
  </section>
  <section v-else id="navbar">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="py-6 md:py-12 lg:py-20 text-xs sm:text-base">
        <a v-if="showBackButton" href="#" class="uppercase font-display text-dark-300 hover:text-dark-900 mr-8"><i class="fas fa-chevron-left"></i> Zurück</a>
        <a href="#" v-scroll-to="'#services'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Services</a>
        <a href="#" v-scroll-to="'#references'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Referenzen</a>
        <a href="#" v-scroll-to="'#about'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Team</a>
        <a href="#" v-scroll-to="'#contact'" class="uppercase font-display text-dark-100 hover:text-dark-300">Kontakt</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      showBackButton: Boolean,
      dark: Boolean
    }
  }
</script>