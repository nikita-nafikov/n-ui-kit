import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import NInput from '../ui/NInput.vue';

type Size = 'small' | 'medium' | 'large';

describe('nInput tests', () => {
  const sizes: Array<Size> = ['small', 'medium', 'large'];

  it('component render', () => {
    const wrapper = mount(NInput);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(NInput);
    const inputWrapper = wrapper.find('.input-wrapper');

    expect(inputWrapper.classes()).toContain('medium');
    expect(inputWrapper.classes()).not.toContain('disabled');
    expect(inputWrapper.classes()).not.toContain('round');
  });

  sizes.forEach((size) => {
    it(`should render with the correct size class "${size}"`, () => {
      const wrapper = mount(NInput, {
        props: {
          size,
        },
      });

      const inputWrapper = wrapper.find('.input-wrapper');
      expect(inputWrapper.classes()).toContain(size);
    });
  });

  it('should apply "disabled" class & apply disabled attr when the "disabled" prop is true', () => {
    const wrapper = mount(NInput, {
      props: {
        disabled: true,
      },
    });

    const inputWrapper = wrapper.find('.input-wrapper');
    const input = wrapper.find('.input');

    expect(input.attributes('disabled')).toBe('');
    expect(inputWrapper.classes()).toContain('disabled');
  });

  it('should display default placeholder when no placeholder prop is provided', () => {
    const wrapper = mount(NInput);

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('placeHolders.input');
  });

  it('should display custom placeholder when placeholder prop is provided', () => {
    const wrapper = mount(NInput, {
      props: {
        placeHolder: 'Enter your name',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Enter your name');
  });

  it('should apply "dark" class when "isDarkTheme" is true', () => {
    const isDarkTheme = ref(true);

    const wrapper = mount(NInput, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const inputWrapper = wrapper.find('.input-wrapper');
    expect(inputWrapper.classes()).toContain('dark');
  });

  it('should not apply "dark" class when "isDarkTheme" is false', () => {
    const isDarkTheme = ref(false);

    const wrapper = mount(NInput, {
      global: {
        provide: {
          isDarkTheme,
        },
      },
    });

    const inputWrapper = wrapper.find('.input-wrapper');
    expect(inputWrapper.classes()).not.toContain('dark');
  });

  it('should focus input when wrapper is clicked', async () => {
    const wrapper = mount(NInput, { attachTo: document.body });

    const input = wrapper.find('input');
    const inputWrapper = wrapper.find('.input-wrapper');

    await inputWrapper.trigger('click');
    expect(document.activeElement).toBe(input.element);
  });

  it('should update modelValue', async () => {
    const wrapper = mount(NInput);
    const input = wrapper.find('input');

    await input.setValue('Input text');

    const updateModelValueEvent = wrapper.emitted('update:modelValue');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(updateModelValueEvent).toHaveLength(1);
    expect(updateModelValueEvent?.[0]).toEqual(['Input text']);
  });
});
