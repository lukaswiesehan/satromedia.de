<template>
  <section id="navbar" class="max-w-screen-xl mx-auto px-4 sm:px-8">
    <div class="py-6 md:py-12 lg:py-20 text-xs sm:text-base">
      <a v-if="showBackButton" href="#" class="uppercase font-display text-dark-300 hover:text-dark-900 mr-8"><i class="fas fa-chevron-left"></i> Zurück</a>
      <a href="#" v-scroll-to="'#services'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Services</a>
      <a href="#" v-scroll-to="'#references'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Referenzen</a>
      <a href="#" v-scroll-to="'#about'" class="uppercase font-display text-dark-100 hover:text-dark-300 mr-4 sm:mr-8">Team</a>
      <a href="#" v-scroll-to="'#contact'" class="uppercase font-display text-dark-100 hover:text-dark-300">Kontakt</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      showBackButton: Boolean
    }
  }
</script>