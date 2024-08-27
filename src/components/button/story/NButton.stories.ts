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
      <template v-if="${'leftIcon' in args}" v-slot:leftIcon>
          ${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="${'rightIcon' in args}" v-slot:rightIcon>
          ${args.rightIcon}
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

export const LargeRoundWithIcon = Template.bind({});
LargeRoundWithIcon.args = {
  size: 'large',
  color: 'primary',
  round: true,
  disabled: false,
  default: 'Large Round NButton with Icon',
  leftIcon: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 512 512"
      >
      <path
        fill="'#63e2b7'"
        d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
      />
      <path
        fill="#FFF"
        d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z"
      />
    </svg>
  `,
  isDarkTheme: false,
};
LargeRoundWithIcon.parameters = {
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
