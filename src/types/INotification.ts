import { VNode } from 'vue';

export interface Notification {
  id: string;
  type: "info" | "warning" | "error" | "success";
  title: string;
  message: string | VNode;
  autoClose: boolean;
  duration: number;
}
