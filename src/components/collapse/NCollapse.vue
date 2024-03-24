<template>
  <div class="collapse" :class="{ dark: isDarkTheme }">
    <div class="collapse-title-wrapper" @click="handleToggleCollapse">
      <span>
        {{ title }}
      </span>
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
    </div>
    <div class="content" :class="{ open: isExpanded }">
      <div class="text-wrapper"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const { isDarkTheme } = inject<boolean>("isDarkTheme");

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
  color: var(--white-color);
  background-color: var(--black-color);
}

.collapse-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.content {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s ease-in-out;
}

.content.open {
  grid-template-rows: 1fr;
}

.text-wrapper {
  min-height: 0;
}
</style>
