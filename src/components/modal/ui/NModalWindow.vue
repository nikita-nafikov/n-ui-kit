<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { inject, onMounted, onUnmounted, useSlots } from 'vue';
import NButton from '../../button/ui/NButton.vue';
import CloseIcon from '../../../assets/icon/CloseIcon.vue';

defineOptions({
  inheritAttrs: false,
});

const { modelValue } = defineProps({
  /** show modal window  */
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');

const $slots = useSlots();

function closeModal(event: KeyboardEvent) {
  if (event.code === 'Escape') {
    handleClose();
  }
}

function handleClose() {
  emit('update:modelValue', false);
}

onMounted(() => {
  document.addEventListener('keyup', closeModal);
});

onUnmounted(() => {
  document.removeEventListener('keyup', closeModal);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div
        v-if="modelValue"
        class="modal-overlay"
        :class="{ dark: isDarkTheme }"
        @click="handleClose"
      >
        <div class="modal" v-bind="$attrs" @click.stop>
          <div class="modal-wrapper">
            <header class="modal-header">
              <slot name="header">
                <div class="header__wrapper">
                  <NButton class="header__icon-button" @click="handleClose">
                    <CloseIcon />
                  </NButton>
                </div>
              </slot>
            </header>
            <div class="modal-content">
              <slot />
            </div>
            <footer v-if="$slots.footer" class="modal-footer">
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  background-color: var(--overlay-bg);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease;
  z-index: var(--modal-window-z-index);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 290px;
  background: var(--black-color);
  color: var(--white-color);
  border-radius: var(--default-border-radius);
  padding: var(--l-padding);
}

.modal-footer,
.modal-content {
  margin-top: 24px;
}

.dark.modal-overlay .modal {
  background: var(--white-color);
  color: var(--black-color);
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__icon-button {
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  padding: 4px;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.4s opacity ease-out;
}

.slide-fade-enter-active .modal,
.slide-fade-leave-active .modal {
  transition:
    0.3s opacity,
    0.5s top;
}

.slide-fade-enter-from .modal,
.slide-fade-leave-to .modal {
  opacity: 0;
  top: 40%;
}
</style>
