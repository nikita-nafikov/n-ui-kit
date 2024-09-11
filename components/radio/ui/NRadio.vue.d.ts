import type { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: PropType<any>;
    /** value of the Radio */
    value: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** label of the Radio */
    label: {
        type: StringConstructor;
        default: null;
    };
    /** whether the Radio is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** size of the Radio */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: PropType<any>;
    /** value of the Radio */
    value: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** label of the Radio */
    label: {
        type: StringConstructor;
        default: null;
    };
    /** whether the Radio is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** size of the Radio */
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
}>>, {
    label: string;
    disabled: boolean;
    size: "small" | "medium" | "large";
    value: string | number | boolean | Record<string, any>;
}, {}>;
export default _default;
