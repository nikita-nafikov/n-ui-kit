<template>
  <div>
    <ul class="tabs__header-list">
      <!-- <li v-for="tab in tabs" :key="tab.props.title">{{ tab.props.title }}</li> -->
      <renderTitle />
    </ul>
    <slot>Нет данных</slot>
  </div>
</template>

<script setup lang="ts">
import { PropType, useSlots, h } from "vue";

const $slot = useSlots();

const renderTitle = () => {
  const slotChildrenList = $slot.default();

  return slotChildrenList.map((slotChildren) => {
    if (slotChildren.props?.title) {
      return h(
        "li",
        { class: "tabs__header-item" },
        { default: () => slotChildren.props.title }
      );
    }
    return h(
      "li",
      { class: "tabs__header-item" },
      { default: () => slotChildren.children.title() }
    );
  });
};
</script>

<style scoped></style>
