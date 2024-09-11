import{d as B,y as x,z as S,A as T,B as D,h as l,C as u,T as F,D as z,i as E,o as i,a as f,b as s,r as c,u as h,s as w,f as I,k as A,n as O,c as U,p as q,g as H}from"./vue.esm-bundler-CCdTkIiI.js";import{N as k}from"./NButton-CLu-ppVo.js";import{C as L}from"./CloseIcon-Qk3niEPq.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"modal-wrapper"},G={class:"modal-header"},J={class:"header__wrapper"},K={class:"modal-content"},Q={key:0,class:"modal-footer"},_=B({inheritAttrs:!1,__name:"NModalWindow",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const d=a,V=E("isDarkTheme"),b=x();function m(o){o.code==="Escape"&&r()}function r(){d("update:modelValue",!1)}return S(()=>{document.addEventListener("keyup",m)}),T(()=>{document.removeEventListener("keyup",m)}),(o,p)=>(i(),D(z,{to:"body"},[l(F,{name:"slide-fade"},{default:u(()=>[e.modelValue?(i(),f("div",{key:0,class:O(["modal-overlay",{dark:h(V)}]),onClick:r},[s("div",I({class:"modal"},o.$attrs,{onClick:p[0]||(p[0]=A(()=>{},["stop"]))}),[s("div",P,[s("header",G,[c(o.$slots,"header",{},()=>[s("div",J,[l(k,{class:"header__icon-button",onClick:r},{default:u(()=>[l(L)]),_:1})])],!0)]),s("div",K,[c(o.$slots,"default",{},void 0,!0)]),h(b).footer?(i(),f("footer",Q,[c(o.$slots,"footer",{},void 0,!0)])):w("",!0)])],16)],2)):w("",!0)]),_:3})]))}}),$=j(_,[["__scopeId","data-v-8ccf936f"]]);_.__docgenInfo={exportName:"default",displayName:"NModalWindow",description:"",tags:{},props:[{name:"modelValue",description:"show modal window",type:{name:"boolean"},required:!0}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/modal/ui/NModalWindow.vue"]};const ee={title:"UI/NModalWindow",component:$,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NModalWindow } from "n-ui-kit"

  const isModalWindowShow = ref(false)
<\/script>
    

<template>
  <button @click="isModalWindowShow = true"></button>
  <NModalWindow v-model="isModalWindowShow">NModalWindow Content...</NModalWindow>
</template>
        `},description:{component:"Informs users while preserving the current page state."}}},argTypes:{modelValue:{control:"boolean"},isDarkTheme:{control:"boolean"}},decorators:[(e,a)=>{const d=U(()=>a.args.isDarkTheme);return q("isDarkTheme",d),{components:{story:e},template:"<story />"}}]},y=e=>({components:{NModalWindow:$,NButton:k},setup(){const a=H(!0);return{args:e,isModalWindowShow:a}},template:`
    <div>
      <NButton @click="args.modelValue = true">Open Modal</NButton>
      <NModalWindow v-bind="args" v-model="args.modelValue">
        <template v-if="${"header"in e}" v-slot:header>
          ${e.header}
        </template>
        ${e.default}
        <template v-if="${"footer"in e}" v-slot:footer>
          ${e.footer}
        </template>
      </NModalWindow>
    </div>
  `}),n=y.bind({});n.args={modelValue:!1,default:"NModalWindow Content..."};const t=y.bind({});t.args={default:"Modal content",modelValue:!0,header:`
  <div style="display: flex; gap: 4px; align-items: center;">
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
    Custom header
  </div>
`,footer:`
<div style="display: flex; gap: 4px; align-items: center;">
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
Custom Footer
</div>
`};t.parameters={docs:{disable:!0}};var v,g,M;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    NModalWindow,
    NButton
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
    <div>
      <NButton @click="args.modelValue = true">Open Modal</NButton>
      <NModalWindow v-bind="args" v-model="args.modelValue">
        <template v-if="\${'header' in args}" v-slot:header>
          \${args.header}
        </template>
        \${args.default}
        <template v-if="\${'footer' in args}" v-slot:footer>
          \${args.footer}
        </template>
      </NModalWindow>
    </div>
  \`
})`,...(M=(g=n.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var N,C,W;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    NModalWindow,
    NButton
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
    <div>
      <NButton @click="args.modelValue = true">Open Modal</NButton>
      <NModalWindow v-bind="args" v-model="args.modelValue">
        <template v-if="\${'header' in args}" v-slot:header>
          \${args.header}
        </template>
        \${args.default}
        <template v-if="\${'footer' in args}" v-slot:footer>
          \${args.footer}
        </template>
      </NModalWindow>
    </div>
  \`
})`,...(W=(C=t.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const oe=["Default","WithCustomHeaderAndFooter"];export{n as Default,t as WithCustomHeaderAndFooter,oe as __namedExportsOrder,ee as default};
