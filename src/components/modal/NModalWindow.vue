<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div
        v-if="modelValue"
        class="modal-overlay"
        @click.stop="handleClose"
        :class="{ dark: isDarkTheme }"
      >
        <div class="modal" @click.stop v-bind="$attrs">
          <div class="modal-wrapper">
            <header class="modal-header">
              <slot name="header">
                <div class="header__wrapper">
                  <span
                    class="header__icon-wrapper"
                    @click.stop="handleClose"
                    tabindex="0"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
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

<script setup lang="ts">
import { inject, onMounted, onUnmounted, useSlots } from "vue";

defineOptions({
  inheritAttrs: false,
});

const isDarkTheme = inject<boolean>("isDarkTheme");

const { modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const $slots = useSlots();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const closeModal = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    handleClose();
  }
};

const handleClose = () => {
  emit("update:modelValue", false);
};

onMounted(() => {
  document.addEventListener("keyup", closeModal);
});

onUnmounted(() => {
  document.removeEventListener("keyup", closeModal);
});
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.45);
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

.header__icon-wrapper {
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
  transition: 0.3s opacity, 0.5s top;
}

.slide-fade-enter-from .modal,
.slide-fade-leave-to .modal {
  opacity: 0;
  top: 40%;
}
</style>
