import type { VNode } from 'vue';

export interface Notification {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  title: null | string
  message: null | string | VNode
  autoClose: boolean
  duration: number
}
