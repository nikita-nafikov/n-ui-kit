import type { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** disable the button */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** determine whether it's a circle button */
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** button size */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    /** button color */
    color: {
        type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** disable the button */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** determine whether it's a circle button */
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** button size */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    /** button color */
    color: {
        type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
        default: string;
    };
}>>, {
    disabled: boolean;
    round: boolean;
    size: "small" | "medium" | "large";
    color: "default" | "primary" | "success" | "warning" | "danger";
}, {}>, {
    leftIcon?(_: {}): any;
    default?(_: {}): any;
    rightIcon?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
