import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, provide } from 'vue';
import NButton from '..//ui/NButton.vue';

export default {
  title: 'UI/NButton',
  component: NButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
  import NButton from '@/components'
</script>
    

<template>
  <NButton />
</template>
        `,
      },
      description: {
        component: 'Commonly used button.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'default'],
    },
    round: { control: 'boolean' },
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
} as Meta<typeof NButton>;

const Template: StoryFn<typeof NButton> = args => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: `
    <NButton v-bind="args">
      <template v-slot:leftIcon>
      </template>
      {{ args.default }}
      <template v-slot:rightIcon>
      </template>
    </NButton>
  `,
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  color: 'default',
  round: false,
  disabled: false,
  default: 'Default NButton',
  isDarkTheme: false,
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  color: 'primary',
  round: false,
  disabled: false,
  default: 'Primary NButton',
  isDarkTheme: false,
};
Primary.parameters = {
  docs: {
    disable: true,
  },
};

export const Success = Template.bind({});
Success.args = {
  size: 'medium',
  color: 'success',
  round: false,
  disabled: false,
  default: 'Success NButton',
  isDarkTheme: false,
};
Success.parameters = {
  docs: {
    disable: true,
  },
};

export const Warning = Template.bind({});
Warning.args = {
  size: 'medium',
  color: 'warning',
  round: false,
  disabled: false,
  default: 'Warning NButton',
  isDarkTheme: false,
};
Warning.parameters = {
  docs: {
    disable: true,
  },
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'medium',
  color: 'danger',
  round: false,
  disabled: false,
  default: 'Danger NButton',
  isDarkTheme: false,
};
Danger.parameters = {
  docs: {
    disable: true,
  },
};

export const LargeRound = Template.bind({});
LargeRound.args = {
  size: 'large',
  color: 'primary',
  round: true,
  disabled: false,
  default: 'Large Round NButton',
  isDarkTheme: false,
};
LargeRound.parameters = {
  docs: {
    disable: true,
  },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  size: 'medium',
  color: 'default',
  round: false,
  disabled: false,
  default: 'Dark Theme NButton',
  isDarkTheme: true,
};
DarkTheme.parameters = {
  docs: {
    disable: true,
  },
};
