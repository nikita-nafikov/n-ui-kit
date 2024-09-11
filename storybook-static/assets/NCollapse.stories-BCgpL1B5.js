import{d as h,g as N,a as _,b as t,r as c,h as x,j as k,k as w,n as y,u as H,i as T,o as b,t as D,c as $,p as F}from"./vue.esm-bundler-CCdTkIiI.js";import{A as z}from"./Arrow-D5HaIXxH.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const M=["onKeyup"],S={class:"collapse-title"},A={class:"collapse-icon"},E={class:"content"},I={class:"content-wrapper"},f=h({__name:"NCollapse",props:{title:{type:String,default:""}},setup(e){const o=T("isDarkTheme"),a=N(!1);function n(){a.value=!a.value}return(r,K)=>(b(),_("div",{class:y(["collapse",{dark:H(o),open:a.value}])},[t("div",{class:"collapse-title-wrapper",tabindex:"0",onKeyup:k(w(n,["stop"]),["enter"]),onClick:n},[c(r.$slots,"collapseHeader",{},()=>[t("span",S,D(e.title),1)],!0),t("span",A,[x(z)])],40,M),t("div",E,[t("div",I,[c(r.$slots,"default",{},void 0,!0)])])],2))}}),g=B(f,[["__scopeId","data-v-4b6e4c7c"]]);f.__docgenInfo={exportName:"default",displayName:"NCollapse",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"collapseHeader"},{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/collapse/ui/NCollapse.vue"]};const W={title:"UI/NCollapse",component:g,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NCollapse } from "n-ui-kit"
<\/script>
    

<template>
  <NCollapse title="NCollapse Title">
    NCollapse Content
  </NCollapse>
</template>
        `},description:{component:"Use Collapse to store contents."}}},argTypes:{title:{control:"text"},isDarkTheme:{control:"boolean"}},decorators:[(e,o)=>{const a=$(()=>o.args.isDarkTheme);return F("isDarkTheme",a),{components:{story:e},template:"<story />"}}]},v=e=>({components:{NCollapse:g},setup(){return{args:e}},template:`
    <NCollapse v-bind="args">
    <template v-if="${"collapseHeader"in e}" v-slot:collapseHeader>
      ${e.collapseHeader}
    </template>
      ${e.default}
    </NCollapse>
  `}),l=v.bind({});l.args={title:"NCollapse Title",default:"NCollapse Content",isDarkTheme:!1};const s=v.bind({});s.args={default:`
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

  Content
  </div>
`,isDarkTheme:!1,collapseHeader:`
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

  Header
  </div>
`};s.parameters={docs:{disable:!0}};var p,i,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    NCollapse
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NCollapse v-bind="args">
    <template v-if="\${'collapseHeader' in args}" v-slot:collapseHeader>
      \${args.collapseHeader}
    </template>
      \${args.default}
    </NCollapse>
  \`
})`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    NCollapse
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NCollapse v-bind="args">
    <template v-if="\${'collapseHeader' in args}" v-slot:collapseHeader>
      \${args.collapseHeader}
    </template>
      \${args.default}
    </NCollapse>
  \`
})`,...(C=(u=s.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const O=["Default","WithCustomHeaderAndContent"];export{l as Default,s as WithCustomHeaderAndContent,O as __namedExportsOrder,W as default};
