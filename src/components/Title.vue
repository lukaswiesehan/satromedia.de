<template>
  <div class="flex flex-row">
    <div class="mr-4"><i class="text-3xl fas text-dark-100" v-bind:class="icon"></i></div>
    <div class="font-display">
      <p class="text-xs tracking-widest uppercase text-dark-100">{{heading}} -</p>
      <h2 class="text-xl md:text-3xl">{{title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    icon: String,
    heading: String,
    title: String
  }
}
</script>
