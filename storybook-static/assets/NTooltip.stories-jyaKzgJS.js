import{d as N,a as T,r as a,b as r,f as v,u as h,i as y,o as _,t as D,c as B,p as C}from"./vue.esm-bundler-CCdTkIiI.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as k}from"./NButton-CLu-ppVo.js";const x={class:"tooltip-wrapper"},$={class:"tooltip__text"},d=N({inheritAttrs:!1,__name:"NTooltip",props:{content:{type:String},position:{type:String,default:"top"}},setup(t){const s=y("isDarkTheme");return(e,w)=>(_(),T("div",x,[a(e.$slots,"default",{},void 0,!0),r("div",v({class:["tooltip",[{dark:h(s)},`tooltip_${t.position}`]]},e.$attrs),[a(e.$slots,"content",{},()=>[r("span",$,D(t.content),1)],!0)],16)]))}}),f=b(d,[["__scopeId","data-v-9e9c7809"]]);d.__docgenInfo={exportName:"default",displayName:"NTooltip",description:"",tags:{},props:[{name:"content",description:"display content, can be overridden by slot#content",type:{name:"string"}},{name:"position",description:"position of Tooltip",values:["top","bottom","right","left"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/tooltip/ui/NTooltip.vue"]};const z={title:"UI/NTooltip",component:f,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NTooltip, NButton } from "n-ui-kit"
<\/script>
    

<template>
  <NTooltip position="bottom">
    <template #content>
      Default NTooltip Content
    </template>
    <NButton color="primary">Default NTooltip Trigger</NButton>
  </NTooltip>
</template>
        `},description:{component:"Display prompt information for mouse hover."}}},argTypes:{position:{control:{type:"select"},options:["top","bottom","right","left"]},content:{control:{type:"text"}}},decorators:[(t,s)=>{const e=B(()=>s.args.isDarkTheme);return C("isDarkTheme",e),{components:{story:t},template:"<story />"}}]},g=t=>({components:{NTooltip:f,NButton:k},setup(){return{args:t}},template:`
    <NTooltip v-bind="args">
        <template v-if="${"content"in t}" v-slot:content>
          ${t.content}
        </template>
      <NButton color="primary">{{ args.default }}</NButton>
    </NTooltip>
  `}),n=g.bind({});n.args={content:"Default NTooltip Content",default:"Default NTooltip Trigger",position:"bottom",isDarkTheme:!1};const o=g.bind({});o.args={content:` <div style="display: flex; gap: 4px; align-items: center;">
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
    Custom Content
  </div>`,default:"Default NTooltip Trigger",position:"bottom",isDarkTheme:!1};o.parameters={docs:{disable:!0}};var i,p,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    NTooltip,
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NTooltip v-bind="args">
        <template v-if="\${'content' in args}" v-slot:content>
          \${args.content}
        </template>
      <NButton color="primary">{{ args.default }}</NButton>
    </NTooltip>
  \`
})`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    NTooltip,
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NTooltip v-bind="args">
        <template v-if="\${'content' in args}" v-slot:content>
          \${args.content}
        </template>
      <NButton color="primary">{{ args.default }}</NButton>
    </NTooltip>
  \`
})`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["Default","WithCustomContent"];export{n as Default,o as WithCustomContent,E as __namedExportsOrder,z as default};
