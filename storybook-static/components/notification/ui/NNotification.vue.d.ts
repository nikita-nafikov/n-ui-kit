import type { PropType, VNode } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    /** unique notification key (create automaticity by UUID ) */
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    /** notification color */
    type: {
        type: PropType<"success" | "warning" | "error" | "info">;
        default: string;
        required: false;
    };
    /** notification title */
    title: {
        type: PropType<string | null>;
        default: null;
        required: false;
    };
    /** notification message (can be render function for customization) */
    message: {
        type: PropType<string | VNode<import('../../../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../../../vue/dist/vue.esm-bundler.js').RendererElement, {
            [key: string]: any;
        }> | null>;
        default: string;
        required: false;
    };
    /** whether the notification is autoClose */
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /** notification  duration */
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    close: () => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /** unique notification key (create automaticity by UUID ) */
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    /** notification color */
    type: {
        type: PropType<"success" | "warning" | "error" | "info">;
        default: string;
        required: false;
    };
    /** notification title */
    title: {
        type: PropType<string | null>;
        default: null;
        required: false;
    };
    /** notification message (can be render function for customization) */
    message: {
        type: PropType<string | VNode<import('../../../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../../../vue/dist/vue.esm-bundler.js').RendererElement, {
            [key: string]: any;
        }> | null>;
        default: string;
        required: false;
    };
    /** whether the notification is autoClose */
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /** notification  duration */
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>> & {
    onClose?: (() => any) | undefined;
}, {
    title: string | null;
    type: "success" | "warning" | "error" | "info";
    message: string | VNode<import('../../../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../../../vue/dist/vue.esm-bundler.js').RendererElement, {
        [key: string]: any;
    }> | null;
    autoClose: boolean;
    duration: number;
}, {}>;
export default _default;
