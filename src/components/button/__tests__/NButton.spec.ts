import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NButton from '../ui/NButton.vue';

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'success' | 'warning' | 'danger' | 'default';

describe('nButton tests', () => {
  const sizes: Array<Size> = ['small', 'medium', 'large'];
  const colors: Array<Color> = ['primary', 'success', 'warning', 'danger', 'default'];

  it('component render', () => {
    const wrapper = mount(NButton);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(NButton);
    const button = wrapper.find('.button');

    expect(button.classes()).toContain('medium');
    expect(button.classes()).toContain('default');
    expect(button.classes()).not.toContain('disabled');
    expect(button.classes()).not.toContain('round');
  });

  sizes.forEach((size) => {
    it(`should render with the correct size class "${size}"`, () => {
      const wrapper = mount(NButton, {
        props: {
          size,
        },
      });

      const button = wrapper.find('.button');
      expect(button.classes()).toContain(size);
    });
  });

  colors.forEach((color) => {
    it(`should render with the correct color class "${color}"`, () => {
      const wrapper = mount(NButton, {
        props: {
          color,
        },
      });

      const button = wrapper.find('.button');
      expect(button.classes()).toContain(color);
    });
  });

  it('should apply "disabled" attr when the "disabled" prop is true', () => {
    const wrapper = mount(NButton, {
      props: {
        disabled: true,
      },
    });

    const button = wrapper.find('.button');

    expect(button.attributes('disabled')).toBe('');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NButton, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const button = wrapper.find('.button');
    expect(button.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NButton, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const button = wrapper.find('.button');
    expect(button.classes()).not.toContain('dark');
  });

  it('should render slots', () => {
    const wrapper = mount(NButton, {
      slots: {
        leftIcon: '<div>leftIcon</div>',
        default: 'Button text',
        rightIcon: '<div>rightIcon</div>',
      },
    });

    expect(wrapper.html()).toContain('<div>leftIcon</div>');
    expect(wrapper.html()).toContain('Button text');
    expect(wrapper.html()).toContain('<div>rightIcon</div>');
  });
});
