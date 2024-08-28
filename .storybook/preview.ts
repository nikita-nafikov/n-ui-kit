import type { Preview } from '@storybook/vue3';
import '../src/style.css';
import { setup } from '@storybook/vue3';

import i18n, { config } from '../src/i18n';

setup((app) => {
  app.use(i18n);
});

const preview: Preview = {
  parameters: {
    locale: config.locale,
    locales: config.messages,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
