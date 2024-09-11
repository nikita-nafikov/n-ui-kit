import{d as C,m as D,g as V,e as T,a as x,r as i,w,l as z,b as $,n as p,u as l,i as B,o as M,c as S,p as F}from"./vue.esm-bundler-CCdTkIiI.js";import{u as H}from"./vue-i18n-CqFn0tlZ.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=["disabled","placeholder"],b=C({__name:"NInput",props:D({disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},placeHolder:{type:String,default:null},size:{type:String,default:"medium"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const{t:o}=H({useScope:"global"}),s=V(null),r=B("isDarkTheme"),u=T(e,"modelValue");function N(){var n;(n=s.value)==null||n.focus()}return(n,c)=>(M(),x("div",{class:p(["input-wrapper",[e.size,{dark:l(r)},{round:e.round},{disabled:e.disabled}]]),onClick:N},[i(n.$slots,"leftIcon",{},void 0,!0),w($("input",{ref_key:"input",ref:s,"onUpdate:modelValue":c[0]||(c[0]=y=>u.value=y),class:p(["input",[e.size,{dark:l(r)}]]),disabled:e.disabled,placeholder:e.placeHolder||l(o)("placeHolders.input")},null,10,_),[[z,u.value]]),i(n.$slots,"rightIcon",{},void 0,!0)],2))}}),h=U(b,[["__scopeId","data-v-595ec7ca"]]);b.__docgenInfo={exportName:"default",displayName:"NInput",description:"",tags:{},props:[{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"round",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeHolder",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"size",values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"leftIcon"},{name:"rightIcon"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/input/ui/NInput.vue"]};const j={title:"UI/NInput",component:h,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NInput } from "n-ui-kit"

  const inputValue = ref('')
<\/script>
    

<template>
  <NInput v-model="inputValue" />
</template>
        `},description:{component:"Input data using keyboard."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},round:{control:"boolean"},disabled:{control:"boolean"},placeHolder:{control:"text"},isDarkTheme:{control:"boolean"}},decorators:[(e,o)=>{const s=S(()=>o.args.isDarkTheme);return F("isDarkTheme",s),{components:{story:e},template:"<story />"}}]},k=e=>({components:{NInput:h},setup(){return{args:e}},template:`
    <NInput v-bind="args">
      <template v-if="${"leftIcon"in e}" v-slot:leftIcon>
        ${e.leftIcon}
      </template>
    </NInput>
  `}),a=k.bind({});a.args={size:"medium",isDarkTheme:!1};const t=k.bind({});t.args={leftIcon:`
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
`,isDarkTheme:!1};t.parameters={docs:{disable:!0}};var d,m,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    NInput
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NInput v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
        \${args.leftIcon}
      </template>
    </NInput>
  \`
})`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var I,g,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    NInput
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NInput v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
        \${args.leftIcon}
      </template>
    </NInput>
  \`
})`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const O=["Default","WithCustomLeftIcon"];export{a as Default,t as WithCustomLeftIcon,O as __namedExportsOrder,j as default};
