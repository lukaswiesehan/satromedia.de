<template>
  <footer v-if="dark" id="footer" class="pb-16 pt-16 md:pt-24 lg:pt-40">
    <div class="text-center font-body font-bold text-sm text-gray-500 uppercase tracking-widest">
      <a href="#" v-scroll-to="'#navbar'" class="inline-block transition-all duration-300 ease-in-out hover:text-white transform hover:-translate-y-1"><i class="fas fa-chevron-up"></i> Zum Seitenanfang <i class="fas fa-chevron-up"></i></a>
    </div>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 border-t border-gray-500 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-4 mt-8 leading-6">
        <div>
          <p class="text-center md:text-left text-white text-xs font-bold uppercase tracking-widest">&copy; Satro {{footerYear}}</p>
          <img src="../assets/img/satro_signet_white.png" alt="Satro Logo" class="h-6 mt-3 mx-auto md:mx-0">
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Satro</p>
          <div class="text-gray-300 text-sm mt-2">
            <p class="font-bold">Satro Media Consulting GbR</p>
            <p>Hassestraße 16</p>
            <p>21029 Hamburg</p>
          </div>
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Social</p>
          <div class="text-gray-300 text-sm mt-2">
            <p><a href="https://www.instagram.com/satromedia" target="_blank" class="inline-block transition-all duration-300 ease-in-out hover:text-white transform hover:-translate-x-1">Instagram</a><i class="fab fa-instagram text-base text-gray-500 ml-3"></i></p>
            <p><a href="https://www.linkedin.com/company/satro-media-consulting" target="_blank" class="inline-block transition-all duration-300 ease-in-out hover:text-white transform hover:-translate-x-1 mt-2">LinkedIn</a><i class="fab fa-linkedin text-base text-gray-500 ml-3"></i></p>
          </div>
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Rechtliches</p>
          <div class="text-gray-300 text-sm mt-2">
            <p><g-link to="/impressum" class="inline-block transition-all duration-300 ease-in-out hover:text-white transform hover:-translate-x-1">Impressum</g-link><i class="fas fa-balance-scale text-base text-gray-500 ml-3"></i></p>
            <p><g-link to="/datenschutz" class="inline-block transition-all duration-300 ease-in-out hover:text-white transform hover:-translate-x-1 mt-2">Datenschutz</g-link><i class="fas fa-lock text-base text-gray-500 ml-3"></i></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else id="footer" class="pb-16 pt-16 md:pt-24 lg:pt-40">
    <div class="text-center font-body font-bold text-sm text-dark-300 uppercase tracking-widest">
      <a href="#" v-scroll-to="'#navbar'" class="inline-block transition-all duration-300 ease-in-out hover:text-dark-500 transform hover:-translate-y-1"><i class="fas fa-chevron-up"></i> Zum Seitenanfang <i class="fas fa-chevron-up"></i></a>
    </div>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 border-t border-dark-100 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-4 mt-8 leading-6">
        <div>
          <p class="text-center md:text-left text-dark-900 text-xs font-bold uppercase tracking-widest">&copy; Satro {{footerYear}}</p>
          <img src="../assets/img/satro_signet_dark.png" alt="Satro Logo" class="h-6 mt-3 mx-auto md:mx-0">
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-dark-300 text-xs font-bold uppercase tracking-widest">Satro</p>
          <div class="text-dark-100 text-sm mt-2">
            <p class="font-bold">Satro Media Consulting GbR</p>
            <p>Hassestraße 16</p>
            <p>21029 Hamburg</p>
          </div>
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-dark-300 text-xs font-bold uppercase tracking-widest">Social</p>
          <div class="text-dark-100 text-sm mt-2">
            <p><a href="https://www.instagram.com/satromedia/" target="_blank" class="inline-block transition-all duration-300 ease-in-out hover:text-dark-300 transform hover:-translate-x-1">Instagram</a><i class="fab fa-instagram text-base text-dark-300 ml-3"></i></p>
            <p><a href="https://www.linkedin.com/company/satro-media-consulting" target="_blank" class="inline-block transition-all duration-300 ease-in-out hover:text-dark-300 transform hover:-translate-x-1 mt-2">LinkedIn</a><i class="fab fa-linkedin text-base text-dark-300 ml-3"></i></p>
          </div>
        </div>
        <div class="text-center md:text-right mt-6 md:mt-0">
          <p class="text-dark-300 text-xs font-bold uppercase tracking-widest">Rechtliches</p>
          <div class="text-dark-100 text-sm mt-2">
            <p><g-link to="/impressum" class="inline-block transition-all duration-300 ease-in-out hover:text-dark-300 transform hover:-translate-x-1">Impressum</g-link><i class="fas fa-balance-scale text-base text-dark-300 ml-3"></i></p>
            <p><g-link to="/datenschutz" class="inline-block transition-all duration-300 ease-in-out hover:text-dark-300 transform hover:-translate-x-1 mt-2">Datenschutz</g-link><i class="fas fa-lock text-base text-dark-300 ml-3"></i></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      dark: Boolean
    },
    data() {
      return {
        footerYear: new Date().getFullYear()
      }
    }
  }
</script>
