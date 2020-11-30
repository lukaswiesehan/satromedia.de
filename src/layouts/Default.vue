<template>
  <div id="app" class="overflow-hidden">
    <slot/>
  </div>
</template>

<script>
export default {}
</script>

<style>
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('../assets/fonts/open-sans-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/open-sans-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/open-sans-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/open-sans-v17-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url('../assets/fonts/open-sans-v17-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('../assets/fonts/open-sans-v17-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/open-sans-v17-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/open-sans-v17-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/open-sans-v17-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/open-sans-v17-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('../assets/fonts/montserrat-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('../assets/fonts/montserrat-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/montserrat-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/montserrat-v14-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/montserrat-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/montserrat-v14-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
  }

  body {
    margin: 0;
    padding: 0;
    background-color: theme(colors.light.100);
    font-family: theme(fontFamily.body);
    color: theme(colors.black.900);
  }

  @media (max-width: 768px) { 
    #app {
      hyphens: auto;
      -ms-hyphens: auto;
      -webkit-hyphens: auto;
    }
  }

  #app {
    opacity: 0;
  }
</style>
