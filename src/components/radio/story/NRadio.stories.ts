import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, provide, ref } from 'vue';
import NRadio from '../ui/NRadio.vue';

export default {
  title: 'UI/NRadio',
  component: NRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
  import NRadio from '@/components'

  const radioValue = ref(1)
</script>
    

<template>
   <div style="display: flex; flex-direction: column; gap: 4px;">
      <NRadio v-model="radioValue" value="1" label="Option 1"></NRadio>
      <NRadio v-model="radioValue" value="2" label="Option 2"></NRadio>
      <NRadio v-model="radioValue" value="3" label="Option 3"></NRadio>
    </div>
    <div>modelValue: {{x}}</div>
</template>
        `,
      },
      description: {
        component: 'Single selection among multiple options.',
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
} as Meta<typeof NRadio>;

const Template: StoryFn<typeof NRadio> = args => ({
  components: { NRadio },
  setup() {
    const radioValue = ref(1);
    return { args, radioValue };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NRadio v-bind="args" v-model="radioValue" value="1" label="Option 1"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="2" label="Option 2"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="3" label="Option 3"></NRadio>
    </div>
    <div>modelValue: {{ radioValue }}</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  isDarkTheme: false,
};
