<template>
  <section v-if="dark" id="navbar" class="bg-gradient-to-tr from-gray-600 to-gray-700 pb-20 xs:pb-32 md:pb-64">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="py-6 md:py-12 lg:py-20 text-xs sm:text-base">
        <g-link id="nav-item-1" v-if="showBackButton" to="/#services" class="inline-block uppercase font-display mr-8 mb-4 sm:mb-0"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white"><i class="fas fa-chevron-left"></i> Zurück</span></g-link>
        <br v-if="showBackButton" class="sm:hidden">
        <g-link v-if="showBackButton" id="nav-item-2" to="/#services" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Services</span></g-link>
        <g-link v-if="showBackButton" id="nav-item-3" to="/#references" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Referenzen</span></g-link>
        <g-link v-if="showBackButton" id="nav-item-4" to="/#about" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Team</span></g-link>
        <g-link v-if="showBackButton" id="nav-item-5" to="/#contact" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Kontakt</span></g-link>
        <a v-if="!showBackButton" id="nav-item-2" href="#" v-scroll-to="'#services'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Services</span></a>
        <a v-if="!showBackButton" id="nav-item-3" href="#" v-scroll-to="'#references'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Referenzen</span></a>
        <a v-if="!showBackButton" id="nav-item-4" href="#" v-scroll-to="'#about'" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Team</span></a>
        <a v-if="!showBackButton" id="nav-item-5" href="#" v-scroll-to="'#contact'" class="inline-block uppercase font-display"><span class="inline-block text-light-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-white">Kontakt</span></a>
      </div>
    </div>
  </section>
  <section v-else id="navbar">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="py-6 md:py-12 lg:py-20 text-xs sm:text-base">
        <g-link id="nav-item-1" v-if="showBackButton" to="/#services" class="inline-block uppercase font-display mr-8 mb-4 sm:mb-0"><span class="inline-block text-dark-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-dark-900"><i class="fas fa-chevron-left"></i> Zurück</span></g-link>
        <br v-if="showBackButton" class="sm:hidden">
        <g-link id="nav-item-2" to="/#services" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-dark-300">Services</span></g-link>
        <g-link id="nav-item-3" to="/#references" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-dark-300">Referenzen</span></g-link>
        <g-link id="nav-item-4" to="/#about" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-dark-300">Team</span></g-link>
        <g-link id="nav-item-5" to="/#contact" class="inline-block uppercase font-display mr-4 sm:mr-8"><span class="inline-block text-dark-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-dark-300">Kontakt</span></g-link>
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