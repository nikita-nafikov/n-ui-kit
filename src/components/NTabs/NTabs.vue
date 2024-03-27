<template>
  <div>
    <ul class="tabs__header">
      <li v-for="tab in tabs" :key="tab.props.title">{{ tab.props.title }}</li>
      <renderTitle />
    </ul>
    <slot>Нет данных</slot>
  </div>
</template>

<script setup lang="ts">
import { PropType, useSlots, h } from "vue";

const $slot = useSlots();
const tabs = $slot.default();
</script>

<style scoped></style>
