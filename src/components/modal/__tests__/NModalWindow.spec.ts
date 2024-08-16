import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NModalWindow from '../ui/NModalWindow.vue';

describe('nModalWindow tests', () => {
  it('component render', () => {
    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        provide: {
          isDarkTheme,
        },
        stubs: {
          teleport: true,
        },
      },
    });

    const modalOverlay = wrapper.find('.modal-overlay');
    expect(modalOverlay.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        provide: {
          isDarkTheme,
        },
        stubs: {
          teleport: true,
        },
      },
    });

    const modalOverlay = wrapper.find('.modal-overlay');
    expect(modalOverlay.classes()).not.toContain('dark');
  });

  it('should close when "modal-overlay" is click', async () => {
    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    const modalOverlay = wrapper.find('.modal-overlay');

    expect(wrapper.exists()).toBeTruthy();

    await modalOverlay.trigger('click');

    const modalValueEvent = wrapper.emitted('update:modelValue');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(modalValueEvent?.[0]).toEqual([false]);
  });

  it('should render slots', () => {
    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
      slots: {
        header: '<header>Header</header>',
        default: 'Content text',
        footer: '<footer>Footer</footer>',
      },
    });

    expect(wrapper.html()).toContain('<header>Header</header>');
    expect(wrapper.html()).toContain('Content text');
    expect(wrapper.html()).toContain('<footer>Footer</footer>');
  });

  it('should not render footer tag slot when slot not pass', () => {
    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
      slots: {
        header: '<header>Header</header>',
        default: 'Content text',
      },
    });
    const modalFooter = wrapper.find('.modal-footer');

    expect(wrapper.html()).toContain('<header>Header</header>');
    expect(wrapper.html()).toContain('Content text');
    expect(modalFooter.exists()).not.toBeTruthy();
  });

  it.only('should close when "Esc" is click', async () => {
    const wrapper = mount(NModalWindow, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    expect(wrapper.exists()).toBeTruthy();

    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(event);

    await wrapper.vm.$nextTick();

    const modalValueEvent = wrapper.emitted('update:modelValue');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(modalValueEvent?.[0]).toEqual([false]);
  });
});
