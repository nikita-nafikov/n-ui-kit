import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import NNotificationContainer from '../ui/NNotificationContainer.vue';
import type { Notification } from '../../../types/INotification';

const mockNotifications = ref<Notification[]>([]);
const mockRemoveNotifications = vi.fn();

vi.mock('../../../composiables/useNotification', () => ({
  useNotifications: () => ({
    notifications: mockNotifications.value,
    removeNotifications: mockRemoveNotifications,
  }),
}));

describe('nNotificationContainer tests', () => {
  it('renders the notifications correctly', async () => {
    const wrapper = mount(NNotificationContainer);

    expect(wrapper.findAllComponents({ name: 'NNotification' })).toHaveLength(0);

    mockNotifications.value.push(
      {
        id: '1',
        type: 'success',
        title: 'Success',
        message: 'This is a success message',
        autoClose: true,
        duration: 5,
      },
    );
    await nextTick();

    expect(wrapper.findAllComponents({ name: 'NNotification' })).toHaveLength(1);
    expect(wrapper.text()).toContain('Success');
    expect(wrapper.text()).toContain('This is a success message');
  });

  it('removes the notification when the close event is emitted', async () => {
    mockNotifications.value.push(
      {
        id: '1',
        type: 'success',
        title: 'Success',
        message: 'This is a success message',
        autoClose: true,
        duration: 5,
      },
    );

    const wrapper = mount(NNotificationContainer);

    const notificationComponent = wrapper.findComponent({ name: 'NNotification' });
    await notificationComponent.vm.$emit('close');

    expect(mockRemoveNotifications).toHaveBeenCalledWith('1');
  });
});
