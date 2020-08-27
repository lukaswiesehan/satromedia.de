<template>
  <div class="my-6">
    <div v-bind:class="{'bg-black-700': !light, 'bg-light-900': light}" class="relative z-20 rounded-lg ml-4 p-3">
      <slot/>
    </div>
    <img src="../assets/img/bubble_tip.svg" alt="" class="relative z-10 -mt-8">
  </div>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    light: Boolean
  }
}
</script>