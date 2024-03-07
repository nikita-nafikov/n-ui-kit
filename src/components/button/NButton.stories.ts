import { StoryFn, Meta } from "@storybook/vue3";
import NButton from "./NButton.vue";

export default {
  title: "NButton",
  component: NButton,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    plain: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
  },
} as Meta<typeof NButton>;

// const Template: StoryFn<typeof NButton> = (args) => ({
//   components: { NButton },
//   setup() {
//     return { args };
//   },
//   template: `
//       <NButton v-bind="args" size="large">Bu1tton</NButton>
//   `,
// });

export const DefaultNButton: StoryFn<typeof NButton> = (args) => ({
  components: { NButton },
  setup() {
    return { args };
  },
  template: '<NButton v-bind="args">NButton</NButton>',
});

// export const PrimaryNButton = Template.bind({});
// PrimaryNButton.args = { default: "primary" };

// export const SecondaryNButton = Template.bind({});
// SecondaryNButton.args = { default: "primary" };
