<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { h, inject, ref } from 'vue';

const emit = defineEmits<{
  (e: 'changeTab', index: number): void
}>();
const $slots = defineSlots<{
  default: () => any
}>();
const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
const slotChildrenList = $slots.default?.();
const selectedIndex = ref<number>(0);

function handleSelectTab(index: number) {
  selectedIndex.value = index;
  emit('changeTab', index);
}

function renderTitle() {
  if (!Array.isArray(slotChildrenList))
    return;
  return slotChildrenList?.map((slotChildren, index) => {
    return h(
      'li',
      {
        class: ['tabs__header-item', { active: index === selectedIndex.value }],
        tabIndex: 0,
        onClick: () => {
          handleSelectTab(index);
        },
        onkeydown: (event: KeyboardEvent) => {
          if (event.code === 'Enter' || event.code === 'Space') {
            event.preventDefault();
            handleSelectTab(index);
          }
        },
      },
      {
        default: () =>
          slotChildren.props?.title || slotChildren.children?.title(),
      },
    );
  });
}

// const slotChildrenList = $slots.default?.();
function renderContent() {
  if (!Array.isArray(slotChildrenList))
    return;
  return slotChildrenList?.map((slotChildren, index) => {
    if (selectedIndex.value !== index)
      return null;

    const children = slotChildren.children?.default?.();
    const vnodeArray = Array.isArray(children) ? children : [children];

    return h('div', { class: 'tab__content' }, vnodeArray.map((vnode) => {
      if (selectedIndex.value !== index)
        return null;

      return vnode;
    }));
  });
}
</script>

<template>
  <div class="tabs" :class="{ dark: isDarkTheme }">
    <ul class="tabs__header-list">
      <renderTitle />
    </ul>
    <renderContent />
  </div>
</template>

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
