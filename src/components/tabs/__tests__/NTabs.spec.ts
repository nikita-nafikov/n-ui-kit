import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h, ref } from 'vue';
import NTabs from '../ui/NTabs.vue';
import NTab from '../ui/NTab.vue';

describe('nTabs tests', () => {
  it('component render with tabs child', () => {
    const wrapper = mount(NTabs, {
      slots: {
        default: [
          h(NTab, { title: 'Tab 1' }, { default: () => h('div', 'Content 1') }),
          h(NTab, { title: 'Tab 2' }, { default: () => h('div', 'Content 2') }),
        ],
      },
      global: {
        components: { NTab },
      },
    });

    expect(wrapper.findAll('.tabs__header-item').length).toBe(2);
    expect(wrapper.findAll('.tabs__header-item.active').length).toBe(1);
    expect(wrapper.find('.tab__content').text()).toBe('Content 1');
  });

  it('should change content when clicking on a tab', async () => {
    const wrapper = mount(NTabs, {
      slots: {
        default: [
          h(NTab, { title: 'Tab 1' }, { default: () => h('div', 'Content 1') }),
          h(NTab, { title: 'Tab 2' }, { default: () => h('div', 'Content 2') }),
        ],
      },
      global: {
        components: { NTab },
      },
    });

    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).not.toContain('Content 2');

    const secondTab = wrapper.findAll('.tabs__header-item')[1];
    await secondTab.trigger('click');

    const changeTabEvent = wrapper.emitted('changeTab');

    expect(changeTabEvent?.[0]).toEqual([1]);

    expect(secondTab.classes()).toContain('active');
    expect(wrapper.text()).toContain('Content 2');
    expect(wrapper.text()).not.toContain('Content 1');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NTabs, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const tabs = wrapper.find('.tabs');
    expect(tabs.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NTabs, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const tabs = wrapper.find('.tabs');
    expect(tabs.classes()).not.toContain('dark');
  });
});
