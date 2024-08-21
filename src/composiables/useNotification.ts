import { ref } from 'vue';
import { createUUID } from '../utils/createUUID';
import type { Notification } from '../types/INotification';

const notifications = ref<Notification[]>([]);

export function useNotifications() {
  const createNotification = (options: Partial<Notification>): void => {
    const defaultNotificationOptions = {
      type: 'info',
      title: 'Info Notification',
      message: 'Ooops! A message was not provided.',
      autoClose: true,
      duration: 5,
    };

    const defaultOptions = Object.assign(
      { ...defaultNotificationOptions },
      options,
    );

    notifications.value.push(
      ...[
        {
          id: createUUID(),
          ...defaultOptions,
        },
      ],
    );
  };

  const removeNotifications = (id: string) => {
    notifications.value = notifications.value.filter(
      notification => notification.id !== id,
    );
  };

  return {
    notifications,
    createNotification,
    removeNotifications,
  };
}
