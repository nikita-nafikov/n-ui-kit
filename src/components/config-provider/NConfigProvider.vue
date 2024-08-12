<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, onMounted, provide, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  isDarkTheme: {
    type: Boolean,
    default: false,
  },
  locale: {
    type: String as PropType<'en' | 'ru'>,
    default: 'ru',
  },
});

const { locale } = useI18n({ useScope: 'global' });

watch(() => props.locale, (newLocal) => {
  locale.value = newLocal;
});

provide(
  'isDarkTheme',
  computed(() => props.isDarkTheme),
);

onMounted(() => {
  locale.value = props.locale;
});
</script>

<template>
  <slot />
</template>
