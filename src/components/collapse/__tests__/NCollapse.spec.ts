import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NCollapse from '../ui/NCollapse.vue';

describe('nCollapse tests', () => {
  it('component render', () => {
    const wrapper = mount(NCollapse);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render title when props pass', () => {
    const wrapper = mount(NCollapse, {
      props: {
        title: 'Collapse title',
      },
    });

    expect(wrapper.html()).toContain('Collapse title');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NCollapse, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const collapse = wrapper.find('.collapse');
    expect(collapse.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NCollapse, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const collapse = wrapper.find('.collapse');
    expect(collapse.classes()).not.toContain('dark');
  });

  it('should render slots', () => {
    const wrapper = mount(NCollapse, {
      slots: {
        collapseHeader: '<div>collapseHeader</div>',
        default: 'Collapse Title',
      },
    });

    expect(wrapper.html()).toContain('<div>collapseHeader</div>');
    expect(wrapper.html()).toContain('Collapse Title');
  });

  it('should open when wrapper is clicked & close when wrapper is second click', async () => {
    const wrapper = mount(NCollapse);

    const collapseWrapper = wrapper.find('.collapse-title-wrapper');
    const collapse = wrapper.find('.collapse');

    await collapseWrapper.trigger('click');

    expect(collapse.classes()).toContain('open');

    await collapseWrapper.trigger('click');

    expect(collapse.classes()).not.toContain('open');
  });
});
