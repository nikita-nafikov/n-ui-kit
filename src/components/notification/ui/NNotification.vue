<script setup lang="ts">
import type { ComputedRef, PropType, VNode } from 'vue';
import { computed, inject, onMounted } from 'vue';
import NButton from '../../button/ui/NButton.vue';
import CloseIcon from '../../../assets/icon/CloseIcon.vue';
import Done from '../../../assets/icon/Done.vue';
import Warning from '../../../assets/icon/Warning.vue';
import Danger from '../../../assets/icon/Danger.vue';
import Info from '../../../assets/icon/Info.vue';

const props = defineProps({
  id: { type: String, required: true },
  type: {
    type: String as PropType<'info' | 'warning' | 'error' | 'success'>,
    default: 'info',
    required: false,
  },
  title: { type: String, default: 'Title', required: false },
  message: {
    type: [String, Object] as PropType<string | VNode>,
    default: 'A message was not provided.',
    required: false,
  },
  autoClose: { type: Boolean, default: true, required: false },
  duration: { type: Number, default: 5, required: false },
});

const emit = defineEmits<{
  (e: 'close'): void
}>();

const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
const toastIcons = {
  info: Info,
  error: Danger,
  success: Done,
  warning: Warning,
};

const toastColor = computed(() => {
  switch (props.type) {
    case 'error':
      return isDarkTheme?.value ? '#e88080' : '#d03050';
    case 'warning':
      return isDarkTheme?.value ? '#f2c97d' : '#f0a020';
    case 'success':
      return isDarkTheme?.value ? '#63e2b7' : '#18a058';
    default:
      return isDarkTheme?.value ? '#191c30' : '#ffffff';
  }
});

function close() {
  emit('close');
}

function renderMessage() {
  return props.message;
}

onMounted(() => {
  if (props.autoClose) {
    const delay = props.duration * 1000;
    setTimeout(close, delay);
  }
});
</script>

<template>
  <li
    class="notification"
    :class="{ dark: isDarkTheme }"
    :style="`--toast-duration: ${duration}s; --toast-color: ${toastColor}`"
  >
    <NButton class="notification_close-btn" @click="close">
      <CloseIcon />
    </NButton>

    <div class="notification__body">
      <component :is="toastIcons[props.type]" />
      <div class="notification-separator" />
      <div class="content">
        <h2 class="content__title">
          {{ props.title }}
        </h2>

        <p class="content__message">
          <renderMessage />
        </p>
      </div>
    </div>
    <div v-if="autoClose" class="progress" />
  </li>
</template>

<style scoped>
.notification {
  width: 400px;
  position: relative;
  background: var(--black-color);
  color: var(--white-color);
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.08),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  min-height: 64px;
  padding: 16px;
  transition: all 0.3s ease-in-out;
}

.notification.dark {
  background: var(--white-color);
  color: var(--black-color);
}

.notification_close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}

.notification__body {
  display: flex;
  gap: 20px;
  place-items: center;

  i {
    color: var(--toast-color);
  }

  .notification-separator {
    background: var(--white-color);
    width: 0.12rem;
    height: 3rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .content__title {
    font-size: var(--l-font-size);
    font-weight: 500;
  }

  .content__message {
    font-size: var(--m-font-size);
  }
}

.notification.dark .notification-separator {
  background: var(--black-color);
}

.progress {
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 8px;
  width: 100%;
  background: var(--toast-color);
  animation: progress var(--toast-duration) ease-in-out forwards;
}

@keyframes progress {
  to {
    width: 0;
  }
}

@keyframes toast-fade-in {
  to {
    opacity: 1;
  }
}

@keyframes toast-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
