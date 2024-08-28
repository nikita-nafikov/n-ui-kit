import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, provide } from 'vue';
import NCheckbox from '../ui/NCheckbox.vue';

export default {
  title: 'UI/NCheckbox',
  component: NCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
  import NCheckbox from '@/components'

  const checkboxValues = ref([])
</script>
    

<template>
  <NCheckbox v-model="checkboxValues" value="1" label="Option 1" />
  <NCheckbox v-model="checkboxValues" value="2" label="Option 2" />
  <NCheckbox v-model="checkboxValues" value="3" label="Option 3" />
</template>
        `,
      },
      description: {
        component: 'A group of options for multiple choices.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    isDarkTheme: { control: 'boolean' },
  },
  decorators: [
    (story, context) => {
      const isDarkTheme = computed(() => context.args.isDarkTheme);
      provide('isDarkTheme', isDarkTheme);

      return {
        components: { story },
        template: '<story />',
      };
    },
  ],
} as Meta<typeof NCheckbox>;

const Template: StoryFn<typeof NCheckbox> = args => ({
  components: { NCheckbox },
  setup() {
    return { args };
  },
  template: `
    <NCheckbox v-bind="args"></NCheckbox>
    <NCheckbox v-bind="args"></NCheckbox>
    <NCheckbox v-bind="args"></NCheckbox>
  `,
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  isDarkTheme: false,
};
