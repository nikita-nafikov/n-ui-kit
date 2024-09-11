import type { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** display content, can be overridden by slot#content */
    content: {
        type: StringConstructor;
    };
    /** position of Tooltip */
    position: {
        type: PropType<"top" | "bottom" | "right" | "left">;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** display content, can be overridden by slot#content */
    content: {
        type: StringConstructor;
    };
    /** position of Tooltip */
    position: {
        type: PropType<"top" | "bottom" | "right" | "left">;
        default: string;
    };
}>>, {
    position: "top" | "bottom" | "right" | "left";
}, {}>, {
    default?(_: {}): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
