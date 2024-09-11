import{d as I,m as X,e as Y,g as c,y as Z,c as w,z as ee,p as b,w as x,a as B,b as m,t as W,h as T,n as O,C as te,T as le,u as H,j as ae,k as j,i as N,N as se,o as F,r as q,O as ie,P as oe}from"./vue.esm-bundler-CCdTkIiI.js";import{u as ne}from"./vue-i18n-CqFn0tlZ.js";import{A as re}from"./Arrow-D5HaIXxH.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ue=["tabindex","onKeyup"],de={class:"select-placeholder"},ce={class:"select__arrow"},L=I({__name:"NSelect",props:X({placeHolder:{type:String,default:null},disabled:{type:Boolean,default:!1},multiply:{type:Boolean,default:!1},size:{type:String,default:"medium"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const{placeHolder:n,disabled:r,size:_,multiply:s}=e,t=Y(e,"modelValue"),{t:y}=ne({useScope:"global"}),f=N("isDarkTheme"),i=c(!1),v=c(null),u=c([]),S=c(null),V=c(!1),h=Z(),R=w(()=>!s&&v.value?v.value:s&&u.value.length?u.value.join(", "):n||y("placeHolders.select"));function k(){if(!r&&(i.value=!i.value,i.value&&S.value)){const l=S.value.getBoundingClientRect(),o=window.innerHeight-(l==null?void 0:l.bottom);V.value=o<220}}function C(){i.value=!1}function G(l,o){if(s&&Array.isArray(t.value)){const a=t.value.findIndex(d=>JSON.stringify(d)===JSON.stringify(l));a===-1?(t.value=[...t.value,l],u.value.push(o)):(t.value=t.value.filter((d,Q)=>Q!==a),u.value=u.value.filter(d=>d!==o))}else t.value=l,v.value=o,C()}return ee(()=>{var l,o;t.value&&((o=(l=h.default)==null?void 0:l.call(h)[0].children)==null||o.forEach(a=>{if(a.props){if(s&&Array.isArray(t.value))t.value.forEach(d=>{a.props&&JSON.stringify(a.props.value)===JSON.stringify(d)&&u.value.push(a.props.label)});else if(JSON.stringify(a.props.value)===JSON.stringify(t.value))return v.value=a.props.label}}))}),b("updateSelectValue",G),b("selectedValue",t),b("isMultiply",s),(l,o)=>{const a=se("click-outside");return x((F(),B("div",{ref_key:"select",ref:S,class:O(["select",{dark:H(f),open:i.value,disabled:e.disabled}]),tabindex:e.disabled?-1:0,onClick:k,onKeyup:ae(j(k,["stop"]),["enter"])},[m("div",{class:O(["select-placeholder-wrapper",e.size])},[m("span",de,W(R.value),1),m("div",ce,[T(re)])],2),T(le,{name:"fade"},{default:te(()=>[x(m("ul",{class:O(["select__option",[V.value?"select__option_open-down":"select__option_open-up"]])},[q(l.$slots,"default",{},void 0,!0)],2),[[ie,i.value]])]),_:3})],42,ue)),[[a,C]])}}}),U=E(L,[["__scopeId","data-v-42ec0543"]]);L.__docgenInfo={exportName:"default",displayName:"NSelect",description:"",tags:{},props:[{name:"placeHolder",description:"Select placeholder",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"whether Select is disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiply",description:"whether multiple-select is activated",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of Select",values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/select/ui/NSelect.vue"]};const K=I({__name:"NOption",props:{label:{type:[String,Number],required:!0},value:{type:[String,Number,Object,Array],required:!0}},setup(e){const{label:n,value:r}=e,_=N("updateSelectValue"),s=N("selectedValue"),t=N("isMultiply"),y=w(()=>t&&Array.isArray(s.value)?s.value.find(f=>JSON.stringify(f)===JSON.stringify(r)):JSON.stringify(s.value)===JSON.stringify(r));return(f,i)=>(F(),B("li",{class:O(["option",{checked:y.value}]),tabindex:"0",onClick:i[0]||(i[0]=j(v=>H(_)(e.value,e.label),["stop"]))},[q(f.$slots,"default",{},()=>[oe(W(e.label),1)],!0)],2))}}),pe=E(K,[["__scopeId","data-v-a8680c1b"]]);K.__docgenInfo={exportName:"default",displayName:"NOption",description:"",tags:{},props:[{name:"label",description:"label of Option",type:{name:"string|number"},required:!0},{name:"value",description:"value of Option",type:{name:"string|number|object|Array<unknown>"},required:!0}],slots:[{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/select/ui/NOption.vue"]};const be={title:"UI/NSelect",component:U,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NSelect, NOption } from "n-ui-kit"

  const selectValue = ref(null)
  const optionList = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
  ] 
<\/script>
    

<template>
  <NSelect v-model="selectValue">
    <NOption 
       v-for="item in optionList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </NOption>
  </NSelect>
  <div>{{ selectValue }}</div>
</template>
        `},description:{component:"When there are plenty of options, use a drop-down menu to display and select desired ones."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},multiply:{control:"boolean"},disabled:{control:"boolean"},isDarkTheme:{control:"boolean"},placeHolder:{control:"text"}},decorators:[(e,n)=>{const r=w(()=>n.args.isDarkTheme);return b("isDarkTheme",r),{components:{story:e},template:"<story />"}}]},P=e=>({components:{NSelect:U,NOption:pe},setup(){const n=c(!0);return{args:e,isModalWindowShow:n}},template:`
      <NSelect v-bind="args" v-model="args.modelValue">
        <NOption :label="'label' in args ? args.label : 'Option 1'" value="Option 1">
          <div v-if="args.default">${e.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 2'" value="Option 2">
          <div v-if="args.default">${e.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 3'" value="Option 3">
          <div v-if="args.default">${e.default}</div>
        </NOption>
        

      </NSelect>
      <div>{{ args.modelValue }}</div>
  `}),g=P.bind({}),p=P.bind({});p.args={default:`
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
    <span style="color: red">Custom Option content</span>
  </div>
`};p.parameters={docs:{disable:!0}};var M,D,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    NSelect,
    NOption
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
      <NSelect v-bind="args" v-model="args.modelValue">
        <NOption :label="'label' in args ? args.label : 'Option 1'" value="Option 1">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 2'" value="Option 2">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 3'" value="Option 3">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        

      </NSelect>
      <div>{{ args.modelValue }}</div>
  \`
})`,...($=(D=g.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var z,A,J;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    NSelect,
    NOption
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
      <NSelect v-bind="args" v-model="args.modelValue">
        <NOption :label="'label' in args ? args.label : 'Option 1'" value="Option 1">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 2'" value="Option 2">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        <NOption :label="'label' in args ? args.label : 'Option 3'" value="Option 3">
          <div v-if="args.default">\${args.default}</div>
        </NOption>
        

      </NSelect>
      <div>{{ args.modelValue }}</div>
  \`
})`,...(J=(A=p.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const Oe=["Default","WithCustomTabsContent"];export{g as Default,p as WithCustomTabsContent,Oe as __namedExportsOrder,be as default};
