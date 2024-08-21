import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import NNotification from '../ui/NNotification.vue';

describe('nNotification', () => {
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
});
