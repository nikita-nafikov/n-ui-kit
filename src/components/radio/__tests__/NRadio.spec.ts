import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NRadio from '../ui/NRadio.vue';

type Size = 'small' | 'medium' | 'large';

describe('nRadio tests', () => {
  const sizes: Array<Size> = ['small', 'medium', 'large'];

  it('component render', () => {
    const wrapper = mount(NRadio);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(NRadio);
    const customRadio = wrapper.find('.custom-radio');
    const RadioWrapper = wrapper.find('.radio-wrapper');

    expect(customRadio.classes()).toContain('medium');
    expect(RadioWrapper.classes()).not.toContain('disabled');
  });

  sizes.forEach((size) => {
    it(`should render with the correct size class "${size}"`, () => {
      const wrapper = mount(NRadio, {
        props: {
          size,
        },
      });

      const customRadio = wrapper.find('.custom-radio');
      expect(customRadio.classes()).toContain(size);
    });
  });

  it('should apply "disabled" class & apply disabled attr when the "disabled" prop is true', () => {
    const wrapper = mount(NRadio, {
      props: {
        disabled: true,
      },
    });

    const RadioWrapper = wrapper.find('.radio-wrapper');
    const radio = wrapper.find('.radio');

    expect(radio.attributes('disabled')).toBe('');
    expect(RadioWrapper.classes()).toContain('disabled');
  });

  it('should display default label when no label prop is provided', () => {
    const wrapper = mount(NRadio);

    expect(wrapper.html()).toContain('labels.radio');
  });

  it('should display custom label when label prop is provided', () => {
    const wrapper = mount(NRadio, {
      props: {
        label: 'Radio label',
      },
    });

    expect(wrapper.html()).toContain('Radio label');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NRadio, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const RadioWrapper = wrapper.find('.radio-wrapper');
    expect(RadioWrapper.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NRadio, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const RadioWrapper = wrapper.find('.radio-wrapper');
    expect(RadioWrapper.classes()).not.toContain('dark');
  });

  it('should pass fallthought attrs to custom input', () => {
    const wrapper = mount(NRadio, {
      props: {
        class: 'custom-class',
      },
    });

    const customRadio = wrapper.find('.custom-radio');
    const RadioWrapper = wrapper.find('.radio-wrapper');

    expect(RadioWrapper.classes()).not.toContain('custom-class');
    expect(customRadio.classes()).toContain('custom-class');
  });

  it('should update modelValue', async () => {
    const wrapper = mount(NRadio);
    const radio = wrapper.find('.radio');

    await radio.setValue(true);

    const updateModelValueEvent = wrapper.emitted('update:modelValue');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(updateModelValueEvent).toHaveLength(1);
  });
});
