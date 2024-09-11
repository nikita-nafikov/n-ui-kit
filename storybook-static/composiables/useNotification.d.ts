import type { Notification } from '../types/INotification';
export declare function useNotifications(): {
    notifications: import('../../vue/dist/vue.esm-bundler.js').Ref<{
        id: string;
        type: "success" | "warning" | "error" | "info";
        title: string | null;
        message: string | import('../../vue/dist/vue.esm-bundler.js').VNode<import('../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../vue/dist/vue.esm-bundler.js').RendererElement, {
            [key: string]: any;
        }> | null;
        autoClose: boolean;
        duration: number;
    }[]>;
    createNotification: (options: Partial<Notification>) => void;
    removeNotifications: (id: string) => void;
};
