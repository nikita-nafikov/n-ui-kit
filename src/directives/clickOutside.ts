import { DirectiveBinding } from "vue";

interface HTMLElementWithClickOutsideEvent extends HTMLElement {
  clickOutsideEvent?: (e: MouseEvent) => void;
}

export default {
  mounted(
    el: HTMLElementWithClickOutsideEvent,
    binding: DirectiveBinding<any>
  ) {
    el.clickOutsideEvent = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) {
        binding.value();
      }
      console.log("fdfs");
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el: HTMLElementWithClickOutsideEvent) {
    if (el.clickOutsideEvent) {
      document.removeEventListener("click", el.clickOutsideEvent);
    }
  },
};
