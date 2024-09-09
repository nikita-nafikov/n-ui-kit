import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { describe, expect, it } from 'vitest';
import NSelect from '../ui/NSelect.vue';
import NOption from '../ui/NOption.vue';

describe('nSelect', () => {
  it('renders options correctly', async () => {
    const wrapper = mount(NSelect, {
      props: {
        placeHolder: 'Select an option',
      },
      slots: {
        default: [
          h(NOption, { label: 'Option 1', value: 1 }, {}),
          h(NOption, { label: 'Option 2', value: 2 }, {}),
        ],
      },
      global: {
        components: { NOption },
      },
    });

    expect(wrapper.findAll('.option').length).toBe(2);
  });

  it('select open when wrapper click', async () => {
    const wrapper = mount(NSelect, {
      slots: {
        default: [
          h(NOption, { label: 'Option 1', value: 1 }, {}),
          h(NOption, { label: 'Option 2', value: 2 }, {}),
        ],
      },
      global: {
        components: { NOption },
      },
    });
    const select = wrapper.find('.select');
    const selectOptionElement = wrapper.find('.select__option').element as HTMLElement;

    expect(selectOptionElement.style.display).toBe('none');

    await select.trigger('click');

    expect(selectOptionElement.style.display).not.toBe('none');
  });
});
