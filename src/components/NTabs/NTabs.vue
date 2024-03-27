<template>
  <div class="tabs" :class="{ dark: isDarkTheme }">
    <ul class="tabs__header-list">
      <renderTitle />
    </ul>
    <slot>Нет данных</slot>
  </div>
</template>

<script setup lang="ts">
import { inject, useSlots, h } from "vue";

const { isDarkTheme } = inject<boolean>("isDarkTheme");
const $slot = useSlots();

const renderTitle = () => {
  const slotChildrenList = $slot.default();

  return slotChildrenList.map((slotChildren) => {
    if (slotChildren.props?.title) {
      return h(
        "li",
        { class: "tabs__header-item", onClick: () => {} },
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

<style>
.tabs {
  background: var(--black-color);
  color: var(--white-color);
}

.dark.tabs {
  background: var(--white-color);
  color: var(--black-color);
}

.tabs__header-list {
  display: flex;
  gap: 16px;
  padding: var(--m-padding);
  border-bottom: 2px solid var(--primary-color);
}

.tabs__header-item {
  border: 1px solid red;
  cursor: pointer;
}
</style>
