<template>
  <section id="navbar" class="container mx-auto">
    <div class="py-20">
      <a v-if="showBackButton" href="#" class="uppercase font-display text-dark-500 hover:text-dark-900 mr-8"><i class="fas fa-chevron-left"></i> Zurück</a>
      <a href="#" class="uppercase font-display text-dark-100 hover:text-dark-500 mr-8">Services</a>
      <a href="#" class="uppercase font-display text-dark-100 hover:text-dark-500 mr-8">Referenzen</a>
      <a href="#" class="uppercase font-display text-dark-100 hover:text-dark-500 mr-8">Team</a>
      <a href="#" class="uppercase font-display text-dark-100 hover:text-dark-500">Kontakt</a>
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