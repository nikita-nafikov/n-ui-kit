import{d as x,m as k,e as v,a as f,w as g,v as C,b as s,f as N,t as V,u as n,n as y,i as D,o as O,c as _,p as T,g as z}from"./vue.esm-bundler-CCdTkIiI.js";import{u as S}from"./vue-i18n-CqFn0tlZ.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=["value","disabled"],I={class:"checkbox-label"},u=x({inheritAttrs:!1,__name:"NCheckbox",props:k({value:{type:[Boolean,String,Object,Number],default:!1},label:{type:String,default:null},disabled:{type:Boolean,default:!1},size:{type:String,default:"medium"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,{t:l}=S({useScope:"global"}),m=D("isDarkTheme"),t=v(e,"modelValue");return(p,c)=>(O(),f("label",{class:y(["checkbox-wrapper",{disabled:a.disabled,dark:n(m)}])},[g(s("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>t.value=h),type:"checkbox",value:e.value,disabled:a.disabled,class:"checkbox"},null,8,w),[[C,t.value]]),s("span",N(p.$attrs,{class:["custom-checkbox",a.size]}),null,16),s("span",I,V(e.label||n(l)("labels.checkbox")),1)],2))}}),b=B(u,[["__scopeId","data-v-600fd511"]]);u.__docgenInfo={exportName:"default",displayName:"NCheckbox",description:"",tags:{},props:[{name:"value",description:"value of the Checkbox",type:{name:"boolean|string|object|number"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"label of the Checkbox",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"whether the Checkbox is disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the Checkbox",values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/checkbox/ui/NCheckbox.vue"]};const E={title:"UI/NCheckbox",component:b,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NCheckbox } from "n-ui-kit"

  const checkboxValues = ref([])
<\/script>
    

<template>
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NCheckbox v-bind="args" v-model="checkboxValues" value="1" label="Option 1"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="2" label="Option 2"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="3" label="Option 3"></NCheckbox>
    </div>
    <div>modelValue: {{ checkboxValues }}</div>
</template>
        `},description:{component:"A group of options for multiple choices."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},label:{control:"text"},disabled:{control:"boolean"},isDarkTheme:{control:"boolean"}},decorators:[(e,a)=>{const l=_(()=>a.args.isDarkTheme);return T("isDarkTheme",l),{components:{story:e},template:"<story />"}}]},M=e=>({components:{NCheckbox:b},setup(){const a=z(["1"]);return{args:e,checkboxValues:a}},template:`
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NCheckbox v-bind="args" v-model="checkboxValues" value="1" label="Option 1"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="2" label="Option 2"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="3" label="Option 3"></NCheckbox>
    </div>
    <div>modelValue: {{ checkboxValues }}</div>
  `}),o=M.bind({});o.args={size:"medium",isDarkTheme:!1};var i,r,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    NCheckbox
  },
  setup() {
    const checkboxValues = ref(['1']);
    return {
      args,
      checkboxValues
    };
  },
  template: \`
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <NCheckbox v-bind="args" v-model="checkboxValues" value="1" label="Option 1"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="2" label="Option 2"></NCheckbox>
      <NCheckbox v-bind="args" v-model="checkboxValues" value="3" label="Option 3"></NCheckbox>
    </div>
    <div>modelValue: {{ checkboxValues }}</div>
  \`
})`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,E as default};
