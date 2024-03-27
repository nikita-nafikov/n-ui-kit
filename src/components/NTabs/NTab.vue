<template>
  <div class="tab__content">
    <slot>title</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.tab__content {
  padding: var(--m-padding);
}
</style>
