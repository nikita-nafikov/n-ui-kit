# UI Kit на Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Основные особенности, которые я внедрил:

- **Поддержка навигации с помощью Tab**: Я уделил особое внимание доступности, поэтому мой UI Kit полностью поддерживает навигацию по элементам интерфейса с использованием клавиши Tab. Это делает его удобным и доступным для всех пользователей, включая тех, кто полагается на клавиатурное управление.

- **Гибкая кастомизация через `<slot>` и рендер-функции**: В некоторых компонентах я предусмотрел возможность кастомизации с помощью `<slot>` или рендер-функций. Это позволяет разработчикам легко адаптировать интерфейс под конкретные нужды проекта, не ограничиваясь стандартными настройками.

- **Кастомизируемые Css стили**. UI Kit использует css-переменные из-за чего у пользователей UI Kit появляется возможность переопределять цвета/размеры/отступы.

- **Интернализация (i18n)**: Я реализовал поддержку интернализации, реализованную через компонент `NConfigProvider`, чтобы обеспечить возможность использования моего UI Kit в многоязычных проектах.

- **Темная тема**: В моем UI Kit есть встроенная поддержка темной темы, реализованная через компонент `NConfigProvider`.

- **Документация в Storybook**: Мой UI Kit имеет storybook, который задеплоин на [github-pages](https://nikita-nafikov.github.io/n-ui-kit/?path=/docs/configure-your-project--docs).

- **Unit Tests**: На компоненты UI Kit написаны тесты с помощью Vue-test-utils + vitest

## Установка UiKit

Для установки UiKit в проект требуется установить его в зависимости с помощью команды `npm i n-ui-kit`, после чего в файле `main.ts` подключить его. Сам npm пакет можно найти [по ссылке](https://www.npmjs.com/package/n-ui-kit)

```js
import { createApp } from 'vue';
import App from './App.vue';
// импортируем функцию-уставновщик, которая добавляет i18n и подключает директиву
import istall from 'n-ui-kit';
// подключаем стили Uikit
import 'n-ui-kit/dist/style.css';

const app = createApp(App);

// применяем функцию-уставновщик
app.use(istall);
app.mount('#app');
```

Далее Uikit можно использовать в ваших компонентах:

```vue
<script setup>
import { NButton } from 'n-ui-kit';
</script>

<template>
  <NButton>UiKit Button!</NButton>
</template>
```

## Пример использования NConfigProvider

Для обеспечения поддержки темной темы и интернализации в UI Kit, можно использовать компонент `<NConfigProvider>`, который будет использовать `provide` для всех вложенных компонентов и реактивно обновлять их тему/локализацию.

```vue
<script setup>
import { NConfigProvider } from 'n-ui-kit';

const isDarkTheme = ref(true);
const local = ref('en');
</script>

<template>
  <NConfigProvider :is-dark-theme="isDarkTheme" :locale="local">
    <App />
  </NConfigProvider>
</template>
```

## Пример переопределения стилей css-переменных

Для переопределения стилей css-переменных достаточно перезаписать css-переменную в вашем :root и указать больший приоритет.

```css
:root {
  /* Перезапишет красный цвет на синий */
  --danger-color: blue !important;
}
```

## Пример переопределения стилей css-переменных

Для переопределения стилей css-переменных достаточно перезаписать css-переменную в вашем :root и указать больший приоритет.

```css
:root {
  /* Перезапишет красный цвет на синий */
  --danger-color: blue !important;
}
```

## Для запуска проекта локально

Для запуска проекта локально достаточно склонировать

`git clone https://github.com/nikita-nafikov/n-ui-kit.git`

После чего установить зависимости

`npm i`

Тесты можно запустить с помощью команды

`npm run test`
