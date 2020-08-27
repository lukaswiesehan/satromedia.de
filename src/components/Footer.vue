<template>
  <footer class="container mx-auto pt-32 pb-16">
    <div class="text-center font-body font-bold text-sm text-dark-100 uppercase tracking-widest">
      <a href="#" class="hover:text-dark-500"><i class="fas fa-chevron-up"></i> Zum Seitenanfang <i class="fas fa-chevron-up"></i></a>
    </div>
    <div class="flex items-stretch mt-10 text-sm text-black-500 leading-8">
      <div class="flex-1 text-left">
        <p><i class="fas fa-copyright"></i> Satro Media {{footerYear}}</p>
        <p class="text-2xl text-dark-100">
          <a href="#" class="hover:text-dark-500"><i class="fab fa-instagram mr-2 "></i></a>
          <a href="#" class="hover:text-dark-500"><i class="fab fa-linkedin"></i></a>
        </p>
      </div>
      <div class="flex-1">
        <img src="../assets/img/satro_signet.png" alt="Satro Media Signet" class="w-12 md:w-24 mx-auto">
      </div>
      <div class="flex-1 text-right text-sm">
        <p>
          <a href="#" class="hover:text-black-700">Impressum</a>
        </p>
        <p>
          <a href="#" class="hover:text-black-700">Datenschutz</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        footerYear: new Date().getFullYear()
      }
    }
  }
</script>
