import{d as b,m as g,e as R,a as N,w as V,E as y,b as i,f as h,t as x,u as t,n as k,i as D,o as O,c as _,p as T,g as z}from"./vue.esm-bundler-CCdTkIiI.js";import{u as S}from"./vue-i18n-CqFn0tlZ.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=["value","disabled"],I={class:"radio-label"},m=b({inheritAttrs:!1,__name:"NRadio",props:g({value:{type:[Boolean,String,Number,Object],default:!1},label:{type:String,default:null},disabled:{type:Boolean,default:!1},size:{type:String,default:"medium"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,{t:l}=S({useScope:"global"}),c=D("isDarkTheme"),s=R(e,"modelValue");return(v,d)=>(O(),N("label",{class:k(["radio-wrapper",{disabled:a.disabled,dark:t(c)}])},[V(i("input",{"onUpdate:modelValue":d[0]||(d[0]=f=>s.value=f),type:"radio",value:e.value,disabled:a.disabled,class:"radio"},null,8,w),[[y,s.value]]),i("span",h(v.$attrs,{class:["custom-radio",a.size]}),null,16),i("span",I,x(e.label||t(l)("labels.radio")),1)],2))}}),p=B(m,[["__scopeId","data-v-767cb337"]]);m.__docgenInfo={exportName:"default",displayName:"NRadio",description:"",tags:{},props:[{name:"value",description:"value of the Radio",type:{name:"boolean|string|number|object"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"label of the Radio",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"whether the Radio is disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the Radio",values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/radio/ui/NRadio.vue"]};const U={title:"UI/NRadio",component:p,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NRadio } from "n-ui-kit"

  const radioValue = ref(1)
<\/script>
    

<template>
   <div style="display: flex; flex-direction: column; gap: 4px;">
      <NRadio v-model="radioValue" value="1" label="Option 1"></NRadio>
      <NRadio v-model="radioValue" value="2" label="Option 2"></NRadio>
      <NRadio v-model="radioValue" value="3" label="Option 3"></NRadio>
    </div>
    <div>modelValue: {{x}}</div>
</template>
        `},description:{component:"Single selection among multiple options."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},label:{control:"text"},disabled:{control:"boolean"},isDarkTheme:{control:"boolean"}},decorators:[(e,a)=>{const l=_(()=>a.args.isDarkTheme);return T("isDarkTheme",l),{components:{story:e},template:"<story />"}}]},M=e=>({components:{NRadio:p},setup(){const a=z(1);return{args:e,radioValue:a}},template:`
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NRadio v-bind="args" v-model="radioValue" value="1" label="Option 1"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="2" label="Option 2"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="3" label="Option 3"></NRadio>
    </div>
    <div>modelValue: {{ radioValue }}</div>
  `}),o=M.bind({});o.args={size:"medium",isDarkTheme:!1};var n,r,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    NRadio
  },
  setup() {
    const radioValue = ref(1);
    return {
      args,
      radioValue
    };
  },
  template: \`
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NRadio v-bind="args" v-model="radioValue" value="1" label="Option 1"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="2" label="Option 2"></NRadio>
      <NRadio v-bind="args" v-model="radioValue" value="3" label="Option 3"></NRadio>
    </div>
    <div>modelValue: {{ radioValue }}</div>
  \`
})`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,U as default};
