<template>
  <div class="p-2 sm:p-3 bg-gray-900 rounded-lg shadow-lg">
    <div class="flex flex-row pb-2 sm:pb-3">
      <div class="w-3 h-3 mr-2 rounded-full bg-gray-300"></div>
      <div class="w-3 h-3 mr-2 rounded-full bg-gray-300"></div>
      <div class="w-3 h-3 mr-2 rounded-full bg-gray-300"></div>
    </div>
    <div class="relative">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Window'
  }
</script>