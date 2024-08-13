import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import NLoader from '../ui/NLoader.vue';

describe('nLoader tests', () => {
  it('component render when "show" is true', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
      },
    });
    const loader = wrapper.find('.loader');

    expect(loader.exists()).toBeTruthy();
  });

  it('component not render when "show" is false', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: false,
      },
    });
    const loader = wrapper.find('.loader');

    expect(loader.exists()).not.toBeTruthy();
  });

  it('should render correctly with default size', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
      },
    });
    const loaderSpin = wrapper.find('.loader-spin');
    const computedStyle = getComputedStyle(loaderSpin.element);

    expect(computedStyle.getPropertyValue('--spin-width-size')).toBe(`32px`);
    expect(computedStyle.getPropertyValue('--spin-height-size')).toBe(`32px`);
  });

  it('should render correctly with prop size', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
        size: 50,
      },
    });
    const loaderSpin = wrapper.find('.loader-spin');
    const computedStyle = getComputedStyle(loaderSpin.element);

    expect(computedStyle.getPropertyValue('--spin-width-size')).toBe(`50px`);
    expect(computedStyle.getPropertyValue('--spin-height-size')).toBe(`50px`);
  });

  it('should be fullscreen attr when the "fullscreen" prop is true', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
        fullscreen: true,
      },
    });

    const loaderOverlay = wrapper.find('.loader-overlay');

    expect(loaderOverlay.exists()).toBeTruthy();
  });

  it('should not be fullscreen attr when the "fullscreen" prop is false', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
        fullscreen: false,
      },
    });

    const loaderOverlay = wrapper.find('.loader-overlay');

    expect(loaderOverlay.exists()).not.toBeTruthy();
  });

  it('should render slots', () => {
    const wrapper = mount(NLoader, {
      props: {
        show: true,
      },
      slots: {
        customSpin: '<div>customSpin</div>',
        default: 'Loader text',
      },
    });

    expect(wrapper.html()).toContain('<div>customSpin</div>');
    expect(wrapper.html()).toContain('Loader text');
  });
});
