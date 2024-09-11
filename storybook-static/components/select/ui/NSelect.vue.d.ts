import type { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: PropType<string | number | object | unknown[]>;
    /** Select placeholder */
    placeHolder: {
        type: StringConstructor;
        default: null;
    };
    /** whether Select is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** whether multiple-select is activated */
    multiply: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** size of Select */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: PropType<string | number | object | unknown[]>;
    /** Select placeholder */
    placeHolder: {
        type: StringConstructor;
        default: null;
    };
    /** whether Select is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** whether multiple-select is activated */
    multiply: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** size of Select */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}>>, {
    disabled: boolean;
    size: "small" | "medium" | "large";
    placeHolder: string;
    multiply: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
