import{d as g,q as w,a as N,b as n,r,n as L,s as y,o as S,x as _}from"./vue.esm-bundler-CCdTkIiI.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"loader"},x={class:"loader-spin-wrapper"},m=g({__name:"NLoader",props:{fullscreen:{type:Boolean,required:!1,default:!1},show:{type:Boolean,required:!1,default:!1},size:{type:Number,required:!1,default:32}},setup(e){const s=e,v=document.body.style.overflow;return w(()=>s.show,t=>{t&&s.fullscreen?document.body.style.overflow="hidden":document.body.style.overflow=v}),(t,$)=>s.show?(S(),N("div",{key:0,class:L({"loader-overlay":s.fullscreen})},[n("div",C,[n("div",x,[r(t.$slots,"customSpin",{},()=>[n("div",{class:"loader-spin",style:_(`--spin-width-size: ${s.size}px; --spin-height-size: ${s.size}px`)},null,4)],!0)]),r(t.$slots,"default",{},void 0,!0)])],2)):y("",!0)}}),f=b(m,[["__scopeId","data-v-3bcce6d9"]]);m.__docgenInfo={exportName:"default",displayName:"NLoader",description:"",tags:{},props:[{name:"fullscreen",description:"show loader fullscreen",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"show",description:"show loader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"size",description:"loader size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"32"}}],slots:[{name:"customSpin"},{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/loader/ui/NLoader.vue"]};const q={title:"UI/NLoader",component:f,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NLoader } from "n-ui-kit"

  const isLoaderShow = ref(true)
<\/script>
    

<template>
  <NLoader show="isLoaderShow">NLoader Content...</NLoader>
</template>
        `},description:{component:"Show animation while loading data."}}},argTypes:{show:{control:"boolean"},size:{control:"number"},fullscreen:{control:"boolean"}}},h=e=>({components:{NLoader:f},setup(){return{args:e}},template:`
    <NLoader v-bind="args">
    <template v-if="${"customSpin"in e}" v-slot:customSpin>
      ${e.customSpin}
    </template>
      ${e.default}
    </NLoader>
  `}),a=h.bind({});a.args={show:!0,default:"NLoader Content..."};const o=h.bind({});o.args={default:"Custom spin",show:!0,customSpin:`
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
  </div>
`};o.parameters={docs:{disable:!0}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    NLoader
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NLoader v-bind="args">
    <template v-if="\${'customSpin' in args}" v-slot:customSpin>
      \${args.customSpin}
    </template>
      \${args.default}
    </NLoader>
  \`
})`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    NLoader
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NLoader v-bind="args">
    <template v-if="\${'customSpin' in args}" v-slot:customSpin>
      \${args.customSpin}
    </template>
      \${args.default}
    </NLoader>
  \`
})`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const B=["Default","WithCustomSpin"];export{a as Default,o as WithCustomSpin,B as __namedExportsOrder,q as default};
