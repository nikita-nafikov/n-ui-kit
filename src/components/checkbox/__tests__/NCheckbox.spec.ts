import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NCheckbox from '../ui/NCheckbox.vue';

type Size = 'small' | 'medium' | 'large';

describe('nCheckbox tests', () => {
  const sizes: Array<Size> = ['small', 'medium', 'large'];

  it('component render', () => {
    const wrapper = mount(NCheckbox);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(NCheckbox);
    const customCheckbox = wrapper.find('.custom-checkbox');
    const checkboxWrapper = wrapper.find('.checkbox-wrapper');

    expect(customCheckbox.classes()).toContain('medium');
    expect(checkboxWrapper.classes()).not.toContain('disabled');
  });

  sizes.forEach((size) => {
    it(`should render with the correct size class "${size}"`, () => {
      const wrapper = mount(NCheckbox, {
        props: {
          size,
        },
      });

      const customCheckbox = wrapper.find('.custom-checkbox');
      expect(customCheckbox.classes()).toContain(size);
    });
  });

  it('should apply "disabled" class & apply disabled attr when the "disabled" prop is true', () => {
    const wrapper = mount(NCheckbox, {
      props: {
        disabled: true,
      },
    });

    const checkboxWrapper = wrapper.find('.checkbox-wrapper');
    const checkbox = wrapper.find('.checkbox');

    expect(checkbox.attributes('disabled')).toBe('');
    expect(checkboxWrapper.classes()).toContain('disabled');
  });

  it('should display default label when no label prop is provided', () => {
    const wrapper = mount(NCheckbox);

    expect(wrapper.html()).toContain('labels.checkbox');
  });

  it('should display custom label when label prop is provided', () => {
    const wrapper = mount(NCheckbox, {
      props: {
        label: 'Checkbox label',
      },
    });

    expect(wrapper.html()).toContain('Checkbox label');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NCheckbox, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const checkboxWrapper = wrapper.find('.checkbox-wrapper');
    expect(checkboxWrapper.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NCheckbox, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const checkboxWrapper = wrapper.find('.checkbox-wrapper');
    expect(checkboxWrapper.classes()).not.toContain('dark');
  });

  it('should pass fallthought attrs to custom input', () => {
    const wrapper = mount(NCheckbox, {
      props: {
        class: 'custom-class',
      },
    });

    const customCheckbox = wrapper.find('.custom-checkbox');
    const checkboxWrapper = wrapper.find('.checkbox-wrapper');

    expect(checkboxWrapper.classes()).not.toContain('custom-class');
    expect(customCheckbox.classes()).toContain('custom-class');
  });
});
