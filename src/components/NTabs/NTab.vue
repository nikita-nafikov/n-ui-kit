<template>
  <div class="tab__content">
    fsdfsd
    <slot>title</slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  x: {
    type: Number,
  },
});

setInterval(() => {
  console.log(props);
}, 200);
</script>

<style scoped>

</style>
