import type { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: PropType<any>;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeHolder: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: PropType<any>;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeHolder: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}>>, {
    disabled: boolean;
    round: boolean;
    size: "small" | "medium" | "large";
    placeHolder: string;
}, {}>, {
    leftIcon?(_: {}): any;
    rightIcon?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
