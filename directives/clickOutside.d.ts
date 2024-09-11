import type { DirectiveBinding } from '../../vue/dist/vue.esm-bundler.js';
interface HTMLElementWithClickOutsideEvent extends HTMLElement {
    clickOutsideEvent?: (e: MouseEvent) => void;
}
declare const _default: {
    mounted(el: HTMLElementWithClickOutsideEvent, binding: DirectiveBinding<any>): void;
    unmounted(el: HTMLElementWithClickOutsideEvent): void;
};
export default _default;
