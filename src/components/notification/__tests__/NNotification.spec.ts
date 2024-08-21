import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import NNotification from '../ui/NNotification.vue';

type NotificationType = 'info' | 'warning' | 'error' | 'success';

const toastIcons = {
  info: 'Info',
  error: 'Danger',
  success: 'Done',
  warning: 'Warning',
};

const toastColors = {
  info: '#ffffff',
  error: '#d03050',
  success: '#18a058',
  warning: '#f0a020',
};

describe('nNotification', () => {
  const notificationTypes: Array<NotificationType> = ['info', 'warning', 'error', 'success'];

  it('renders correctly with default props', () => {
    const wrapper = mount(NNotification, {
      props: {
        id: '1',
      },
    });

    expect(wrapper.text()).toContain('Title');
    expect(wrapper.text()).toContain('A message was not provided.');
  });

  it('renders with custom props', () => {
    const wrapper = mount(NNotification, {
      props: {
        id: '1',
        type: 'success',
        title: 'Custom Title',
        message: 'Custom message',
      },
    });

    expect(wrapper.text()).toContain('Custom Title');
    expect(wrapper.text()).toContain('Custom message');
  });

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(NNotification, {
      props: {
        id: '1',
      },
    });

    const closeButton = wrapper.find('.notification_close-btn');
    await closeButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('close');
  });

  notificationTypes.forEach((type) => {
    it(`should render with the correct ${type} icon and ${type} color`, () => {
      const wrapper = mount(NNotification, {
        props: {
          id: '1',
          type,
        },
      });

      const notificationIcon = wrapper.findComponent({ name: toastIcons[type] });
      const notification = wrapper.find('.notification');
      const computedStyle = getComputedStyle(notification.element);

      expect(notificationIcon.exists()).toBeTruthy();
      expect(computedStyle.getPropertyValue('--toast-color')).toBe(toastColors[type]);
    });
  });

  it('auto-closes after the specified duration', async () => {
    vi.useFakeTimers();

    const wrapper = mount(NNotification, {
      props: {
        id: '1',
        autoClose: true,
        duration: 1,
      },
    });

    vi.advanceTimersByTime(1000);

    expect(wrapper.emitted()).toHaveProperty('close');

    vi.useRealTimers();
  });

  it('no auto-closes when props "auto-close" is false', async () => {
    vi.useFakeTimers();

    const wrapper = mount(NNotification, {
      props: {
        id: '1',
        autoClose: false,
      },
    });

    vi.advanceTimersByTime(1000);

    expect(wrapper.emitted()).not.toHaveProperty('close');

    vi.useRealTimers();
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NNotification, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const notification = wrapper.find('.notification');
    expect(notification.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NNotification, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const notification = wrapper.find('.notification');
    expect(notification.classes()).not.toContain('dark');
  });
});
