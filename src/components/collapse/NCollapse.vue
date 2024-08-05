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
        <Arrow />
      </span>
    </div>
    <div class="content">
      <div class="content-wrapper"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import Arrow from "../../assets/icon/Arrow.vue";

const { title } = defineProps({
  title: { type: String, required: true },
});

const isDarkTheme = inject<boolean>("isDarkTheme");
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
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
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
