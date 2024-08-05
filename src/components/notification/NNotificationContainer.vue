<template>
  <transition-group name="fade" tag="ul" class="toast-notifications">
    <NNotification
      v-for="item in notifications"
      :key="item.id"
      :id="item.id"
      :type="item.type"
      :title="item.title"
      :message="item.message"
      :auto-close="item.autoClose"
      :duration="item.duration"
      @close="
        () => {
          removeNotifications(item.id);
        }
      "
    ></NNotification>
  </transition-group>
</template>

<script setup lang="ts">
import NNotification from "./NNotification.vue";
import useNotifications from "../../composiables/useNotification";

const { notifications, removeNotifications } = useNotifications();
</script>

<style scoped>
.toast-notifications {
  z-index: var(--notification-z-index);
  position: fixed;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
}

/* .toast-notification-enter-active {
  animation: toast-fade-in 0.5s ease-in-out;
}
.toast-notification-leave-active {
  animation: toast-fade-in 0.5s ease-in-out reverse;
}

@keyframes toast-fade-in {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
} */

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
