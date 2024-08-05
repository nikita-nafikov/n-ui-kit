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

const isDarkTheme = inject<boolean>("isDarkTheme");
const $slots = useSlots();
const slotChildrenList = $slots.default?.();
const selectedIndex = ref<number>(0);

const handleSelectTab = (index: number) => {
  selectedIndex.value = index;
  emit("change-tab", index);
};

const renderTitle = () => {
  console.log(slotChildrenList[0].children?.title());
  return slotChildrenList?.map((slotChildren, index) => {
    return h(
      "li",
      {
        class: ["tabs__header-item", { active: index === selectedIndex.value }],
        tabIndex: 0,
        onClick: () => {
          handleSelectTab(index);
        },
        onkeydown: (event: KeyboardEvent) => {
          if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            handleSelectTab(index);
          }
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
  return slotChildrenList?.map((slotChildren, index) => {
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

const emit = defineEmits<{
  (e: "change-tab", index: number): void;
}>();
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
  overflow: auto;
}

.tabs__header-item {
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
}

.tabs__header-item:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.tabs__header-item.active {
  color: var(--primary-color);
}

.tab__content {
  padding: var(--m-padding);
}
</style>
