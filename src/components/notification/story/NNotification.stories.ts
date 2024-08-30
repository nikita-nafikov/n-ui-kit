import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, h, provide } from 'vue';
import NNotificationContainer from '../ui/NNotificationContainer.vue';
import NNotification from '../ui/NNotification.vue';
import { useNotifications } from '../../../composiables/useNotification';
import NButton from '../../button/ui/NButton.vue';

export default {
  title: 'UI/NNotificationContainer',
  component: NNotificationContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
  import NNotificationContainer from '@/components'
  import { useNotifications } from '@/composiables/useNotification';
  import { h } from 'vue'

  const { createNotification } = useNotifications();
</script>
    

<template>
      <NNotificationContainer />
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message: 'Notification content'})">Show info notification</NButton>
      <NButton @click="createNotification({type: 'warning', title: 'Notification Title', message: 'Notification content'})">Show warning notification</NButton>
      <NButton @click="createNotification({type: 'error', title: 'Notification Title', message: 'Notification content'})">Show error notification</NButton>
      <NButton @click="createNotification({type: 'success', title: 'Notification Title', message: 'Notification content'})">Show success notification</NButton>
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message: 'Notification content', autoClose: false})">Show notification without autoclose</NButton>
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message:  h('img', {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU',
          })})">Show notification with custom content</NButton>
    </div>
</template>
        `,
      },
      description: {
        component: 'Displays a global notification message at a corner of the page.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    autoClose: { control: 'boolean' },
    duration: { control: 'number' },
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
} as Meta<typeof NNotificationContainer>;

const Template: StoryFn<typeof NNotificationContainer> = args => ({
  components: { NNotificationContainer, NNotification, NButton },
  setup() {
    const { createNotification } = useNotifications();
    return { args, createNotification, h };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message: 'Notification content'})">Show info notification</NButton>
      <NButton @click="createNotification({type: 'warning', title: 'Notification Title', message: 'Notification content'})">Show warning notification</NButton>
      <NButton @click="createNotification({type: 'error', title: 'Notification Title', message: 'Notification content'})">Show error notification</NButton>
      <NButton @click="createNotification({type: 'success', title: 'Notification Title', message: 'Notification content'})">Show success notification</NButton>
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message: 'Notification content', autoClose: false})">Show notification without autoclose</NButton>
      <NButton @click="createNotification({type: 'info', title: 'Notification Title', message:  h('img', {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU',
          })})">Show notification with custom content</NButton>
    </div>
    <NNotificationContainer v-bind="args"></NNotificationContainer>
  `,
});

export const Default = Template.bind({});
Default.args = {
  isDarkTheme: false,
};
