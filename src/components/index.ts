import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import clickOutside from '../directives/clickOutside';
import { DEFAULT_LOCALE, LANGUAGES } from '../i18n';
import NButton from './button/ui/NButton.vue';
import NCheckbox from './checkbox/ui/NCheckbox.vue';
import NCollapse from './collapse/ui/NCollapse.vue';
import NConfigProvider from './config-provider/ui/NConfigProvider.vue';
import NInput from './input/ui/NInput.vue';
import NLoader from './loader/ui/NLoader.vue';
import NModalWindow from './modal/ui/NModalWindow.vue';
import NNotification from './notification/ui/NNotification.vue';
import NNotificationContainer from './notification/ui/NNotificationContainer.vue';
import NRadio from './radio/ui/NRadio.vue';
import NSelect from './select/ui/NSelect.vue';
import NOption from './select/ui/NOption.vue';
import NTab from './tabs/ui/NTab.vue';
import NTabs from './tabs/ui/NTabs.vue';
import NTooltip from './tooltip/ui/NTooltip.vue';
import '../style.css';

function install(app: App) {
  const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: 'ru',
    messages: LANGUAGES,
  });
  app.use(i18n);

  app.directive('clickOutside', clickOutside);
}

export default install;

export { NButton, NCheckbox, NCollapse, NConfigProvider, NInput, NModalWindow, NLoader, NNotification, NNotificationContainer, NRadio, NSelect, NOption, NTab, NTabs, NTooltip };
