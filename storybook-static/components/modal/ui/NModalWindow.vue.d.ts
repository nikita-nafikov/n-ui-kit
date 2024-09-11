declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** show modal window  */
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** show modal window  */
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
