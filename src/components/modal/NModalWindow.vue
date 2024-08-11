<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div
        v-if="modelValue"
        class="modal-overlay"
        @click="handleClose"
        :class="{ dark: isDarkTheme }"
      >
        <div class="modal" @click.stop v-bind="$attrs">
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

<script setup lang="ts">
import { inject, onMounted, onUnmounted, useSlots, ComputedRef } from "vue";
import NButton from "../button/NButton.vue";
import CloseIcon from "../../assets/icon/CloseIcon.vue";

defineOptions({
  inheritAttrs: false,
});

const isDarkTheme = inject<ComputedRef<boolean>>("isDarkTheme");

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
  transition: 0.3s opacity, 0.5s top;
}

.slide-fade-enter-from .modal,
.slide-fade-leave-to .modal {
  opacity: 0;
  top: 40%;
}
</style>
