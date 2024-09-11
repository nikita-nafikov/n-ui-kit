import{ag as m,al as h}from"./index-Dgduq0qf.js";import{u as a}from"./index-CyG0ByC0.js";import"./iframe-B4yn9HN_.js";import"../sb-preview/runtime.js";import"./index-CIiUH8pY.js";import"./index-J1TP6alb.js";import"./index-DrFu-skq.js";var c={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=m,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,b=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(r,e,d){var i,t={},s=null,p=null;d!==void 0&&(s=""+d),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(p=e.ref);for(i in e)j.call(e,i)&&!v.hasOwnProperty(i)&&(t[i]=e[i]);if(r&&r.defaultProps)for(i in e=r.defaultProps,e)t[i]===void 0&&(t[i]=e[i]);return{$$typeof:f,type:r,key:s,ref:p,props:t,_owner:b.current}}o.Fragment=u;o.jsx=x;o.jsxs=x;c.exports=o;var n=c.exports;function l(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Configure your project"}),`
`,n.jsx(e.h1,{id:"ui-kit-на-vue-3",children:"UI Kit на Vue 3"}),`
`,n.jsxs(e.p,{children:["UI Kit на Vue 3 с использованием Composition API, который подходит для разработки пользовательских интерфейсов. Он обладает высокой гибкостью и предоставляет множество возможностей для кастомизации, путем использования ",n.jsx(e.code,{children:"<slot>"})," и ",n.jsx(e.code,{children:"h"}),". Кроме того UI Kit поддерживает использование темной темы и интернализации благодаря компоненту ",n.jsx(e.code,{children:"<NConfigProvider>"})]}),`
`,n.jsx(e.h2,{id:"основные-особенности-которые-я-внедрил",children:"Основные особенности, которые я внедрил:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Поддержка навигации с помощью Tab"}),": Я уделил особое внимание доступности, поэтому мой UI Kit полностью поддерживает навигацию по элементам интерфейса с использованием клавиши Tab. Это делает его удобным и доступным для всех пользователей, включая тех, кто полагается на клавиатурное управление."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["Гибкая кастомизация через ",n.jsx(e.code,{children:"<slot>"})," и рендер-функции"]}),": В некоторых компонентах я предусмотрел возможность кастомизации с помощью ",n.jsx(e.code,{children:"<slot>"})," или рендер-функций. Это позволяет разработчикам легко адаптировать интерфейс под конкретные нужды проекта, не ограничиваясь стандартными настройками."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Кастомизируемые Css стили"}),". UI Kit использует css-переменные из-за  чего у пользователей UI Kit появляется возможность переопределять цвета/размеры/отступы."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Интернализация (i18n)"}),": Я реализовал поддержку интернализации, реализованную через компонент ",n.jsx(e.code,{children:"NConfigProvider"}),", чтобы обеспечить возможность использования моего UI Kit в многоязычных проектах."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Темная тема"}),": В моем UI Kit есть встроенная поддержка темной темы, реализованная через компонент ",n.jsx(e.code,{children:"NConfigProvider"}),"."]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"установка-uikit",children:"Установка UiKit"}),`
`,n.jsxs(e.p,{children:["Для установки UiKit в проект требуется установить его в зависимости с помощью команды ",n.jsx(e.code,{children:"npm i n-ui-kit"}),", после чего в файле ",n.jsx(e.code,{children:"main.ts"})," подключить его"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { createApp } from "vue";\r
import App from "./App.vue";\r
// импортируем функцию-уставновщик, которая добавляет i18n и подключает директиву \r
import istall from "n-ui-kit";\r
// подключаем стили Uikit\r
import "n-ui-kit/dist/style.css";\r
\r
const app = createApp(App);\r
\r
// применяем функцию-уставновщик\r
app.use(istall);\r
app.mount("#app");
`})}),`
`,n.jsx(e.p,{children:"Далее Uikit можно использовать в ваших компонентах:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>\r
  <NButton>UiKit Button!</NButton>\r
</template>\r
\r
<script setup>\r
import { NButton } from "n-ui-kit"\r
<\/script>
`})}),`
`,n.jsx(e.h2,{id:"пример-использования-nconfigprovider",children:"Пример использования NConfigProvider"}),`
`,n.jsxs(e.p,{children:["Для обеспечения поддержки темной темы и интернализации в UI Kit, можно использовать компонент ",n.jsx(e.code,{children:"<NConfigProvider>"}),", который будет использовать ",n.jsx(e.code,{children:"provide"})," для всех вложенных компонентов и реактивно обновлять их тему/локализацию."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>\r
  <NConfigProvider :is-dark-theme="isDarkTheme" :locale="local">\r
    <App />\r
  </NConfigProvider>\r
</template>\r
\r
<script setup>\r
import { NConfigProvider } from "n-ui-kit"\r
\r
const isDarkTheme = ref(true)\r
const local = ref('en')\r
<\/script>
`})}),`
`,n.jsx(e.h2,{id:"пример-переопределения-стилей-css-переменных",children:"Пример переопределения стилей css-переменных"}),`
`,n.jsx(e.p,{children:"Для переопределения стилей css-переменных достаточно перезаписать css-переменную в вашем :root и указать больший приоритет."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {\r
  /* Перезапишет красный цвет на синий */\r
  --danger-color: blue !important;\r
}
`})}),`
`,n.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function I(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{I as default};
