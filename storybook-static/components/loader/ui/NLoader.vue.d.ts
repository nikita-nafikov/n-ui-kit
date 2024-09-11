declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** show loader fullscreen  */
    fullscreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /** show loader  */
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /** loader size  */
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** show loader fullscreen  */
    fullscreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /** show loader  */
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /** loader size  */
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    size: number;
    fullscreen: boolean;
    show: boolean;
}, {}>, {
    customSpin?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
