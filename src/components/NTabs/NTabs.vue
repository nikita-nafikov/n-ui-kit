<template>
  <div class="tabs" :class="{ dark: isDarkTheme }">
    <ul class="tabs__header-list">
      <renderTitle />
    </ul>
    <renderContent />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, useSlots, h } from "vue";

const { isDarkTheme } = inject<boolean>("isDarkTheme");
const $slot = useSlots();
const selectedIndex = ref<number>(0);

const handleSelectTab = (index: number) => {
  selectedIndex.value = index;
};

const renderTitle = () => {
  const slotChildrenList = $slot.default();

  return slotChildrenList.map((slotChildren, index) => {
    return h(
      "li",
      {
        class: "tabs__header-item",
        tabIndex: 0,
        onClick: (event: MouseEvent) => {
          event.stopPropagation();
          handleSelectTab(index);
        },
      },
      {
        default: () =>
          slotChildren.props?.title || slotChildren.children?.title(),
      }
    );
  });
};

const renderContent = () => {
  const slotChildrenList = $slot.default();

  return slotChildrenList.map((slotChildren, index) => {
    if (selectedIndex.value === index) {
      return h("div", { class: "tab__content" }, [
        slotChildren.children?.default().map((vnode) => {
          if (selectedIndex.value === index) {
            return vnode;
          }
        }),
      ]);
    }
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
  outline: none;
}

.tabs__header-item:focus-visible {
  box-shadow: 0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.tab__content {
  padding: var(--m-padding);
}
</style>
