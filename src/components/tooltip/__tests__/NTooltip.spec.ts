import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NTooltip from '../ui/NTooltip.vue';

type Position = 'top' | 'bottom' | 'right' | 'left';

describe('nTooltip tests', () => {
  const positions: Array<Position> = ['top', 'bottom', 'right', 'left'];

  it('component render', () => {
    const wrapper = mount(NTooltip, { slots: {
      default: 'Content text',
    } });

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(NTooltip);
    const tooltip = wrapper.find('.tooltip');

    expect(tooltip.classes()).toContain('tooltip_top');
  });

  positions.forEach((position) => {
    it(`should render with the correct size class "${position}"`, () => {
      const wrapper = mount(NTooltip, {
        props: {
          position,
        },
      });

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.classes()).toContain(`tooltip_${position}`);
    });
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NTooltip, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const tooltip = wrapper.find('.tooltip');
    expect(tooltip.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NTooltip, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const tooltip = wrapper.find('.tooltip');
    expect(tooltip.classes()).not.toContain('dark');
  });

  it('should render slots', () => {
    const wrapper = mount(NTooltip, {
      slots: {
        default: 'Tooltip text',
      },
    });

    expect(wrapper.html()).toContain('Tooltip text');
  });

  it('should render props content', () => {
    const wrapper = mount(NTooltip, {
      props: {
        content: 'Tooltip text',
      },
    });

    expect(wrapper.html()).toContain('Tooltip text');
  });

  it('should pass fallthought attrs to custom input', () => {
    const wrapper = mount(NTooltip, {
      props: {
        class: 'custom-class',
      },
    });

    const tooltip = wrapper.find('.tooltip');
    const tooltipWrapper = wrapper.find('.tooltip-wrapper');

    expect(tooltipWrapper.classes()).not.toContain('custom-class');
    expect(tooltip.classes()).toContain('custom-class');
  });
});
