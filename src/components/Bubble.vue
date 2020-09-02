<template>
  <div class="my-6">
    <div v-bind:class="{'bg-black-700': !light, 'bg-light-900': light}" class="relative z-20 rounded-lg ml-4 p-3">
      <slot/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" class="-mt-8">
      <path v-if="!light" fill="#3C3C3C" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
      <path v-if="light" fill="#FFFFFF" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
    </svg>
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