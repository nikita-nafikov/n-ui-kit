<template>
  <div class="collapse" :class="{ dark: isDarkTheme, open: isExpanded }">
    <div
      class="collapse-title-wrapper"
      tabindex="0"
      @keyup.enter.stop="handleToggleCollapse"
      @click="handleToggleCollapse"
    >
      <slot name="collapse-header">
        <span class="collapse-title">
          {{ title }}
        </span>
      </slot>
      <span class="collapse-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="14"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
      </span>
    </div>
    <div class="content">
      <div class="content-wrapper"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const isDarkTheme = inject<boolean>("isDarkTheme");

const { title } = defineProps({
  title: { type: String, required: true },
});

const isExpanded = ref(false);

const handleToggleCollapse = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.collapse {
  border-bottom: 1px solid var(--primary-color);
  color: var(--white-color);
  background-color: var(--black-color);
  padding: var(--s-padding);
}

.dark.collapse {
  color: var(--black-color);
  background: var(--white-color);
}

.collapse-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: var(--s-padding);
  outline: none;
}

.collapse-title-wrapper:focus-visible {
  box-shadow: 0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.content {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s ease-in-out;
}

.collapse.open .content {
  grid-template-rows: 1fr;
}

.collapse-icon {
  transition: transform 0.3s ease-in-out;
}

.collapse.open .collapse-icon {
  transform: rotate(180deg);
}

.content-wrapper {
  min-height: 0;
  padding-right: 8px;
  padding-left: 8px;
}
</style>
