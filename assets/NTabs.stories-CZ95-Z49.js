import{d as B,y as I,g as D,a as E,b as U,h as N,n as j,u as O,i as q,o as G,F as h,r as H,c as J,p as K}from"./vue.esm-bundler-CCdTkIiI.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"tabs__header-list"},T=B({__name:"NTabs",emits:["changeTab"],setup(t,{emit:l}){var f;const u=l,b=I(),W=q("isDarkTheme"),a=(f=b.default)==null?void 0:f.call(b),d=D(0);function m(s){d.value=s,u("changeTab",s)}function A(){if(Array.isArray(a))return a==null?void 0:a.map((s,i)=>h("li",{class:["tabs__header-item",{active:i===d.value}],tabIndex:0,onClick:()=>{m(i)},onkeydown:e=>{(e.code==="Enter"||e.code==="Space")&&(e.preventDefault(),m(i))}},{default:()=>{var e,c;return((e=s.props)==null?void 0:e.title)||((c=s.children)==null?void 0:c.title())}}))}function V(){if(Array.isArray(a))return a==null?void 0:a.map((s,i)=>{var v,g;if(d.value!==i)return null;const e=(g=(v=s.children)==null?void 0:v.default)==null?void 0:g.call(v),c=Array.isArray(e)?e:[e];return h("div",{class:"tab__content"},c.map(z=>d.value!==i?null:z))})}return(s,i)=>(G(),E("div",{class:j(["tabs",{dark:O(W)}])},[U("ul",Q,[N(A)]),N(V)],2))}});T.__docgenInfo={exportName:"default",displayName:"NTabs",description:"",tags:{},events:[{name:"changeTab",type:{names:["number"]}}],slots:[{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/tabs/ui/NTabs.vue"]};const M={};function R(t,l){return H(t.$slots,"default")}const X=P(M,[["render",R]]);M.__docgenInfo={displayName:"NTab",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["C:/Users/nafik/Desktop/ui-kit/src/components/tabs/ui/NTab.vue"]};const L={title:"UI/NTabs",component:T,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NTabs, NTab } from "n-ui-kit"
<\/script>
    

<template>
  <NTabs>
    <NTab title="First Tab">
      First Tab Content
    </NTab>
    <NTab title="Second Tab">
      Second Tab Content
    </NTab>
    <NTab title="Third Tab">
      Third Tab Content
    </NTab>
  </NTabs>
</template>
        `},description:{component:"Divide data collections which are related yet belong to different types."}}},argTypes:{isDarkTheme:{control:"boolean"}},decorators:[(t,l)=>{const u=J(()=>l.args.isDarkTheme);return K("isDarkTheme",u),{components:{story:t},template:"<story />"}}]},p=t=>({components:{NTabs:T,NTab:X},setup(){const l=D(!0);return{args:t,isModalWindowShow:l}},template:`
      <NTabs v-bind="args" v-model="args.modelValue">
        <NTab :title="'title' in args ? null : 'First Tab'">
          <template v-if="${"title"in t}" v-slot:title>
            ${t.title}
          </template>
          <div v-if="!args.default">First Tab Content</div>
          <div v-else>${t.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Second Tab'">
        <template v-if="${"title"in t}" v-slot:title>
            ${t.title}
          </template>
        <div v-if="!args.default">Second Tab Content</div>
          <div v-else>${t.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Third Tab'">
        <template v-if="${"title"in t}" v-slot:title>
            ${t.title}
          </template>
         <div v-if="!args.default">Third Tab Content</div>
          <div v-else>${t.default}</div>
        </NTab>
      </NTabs>
  `}),o=p.bind({});o.args={content:"NTabs Content..."};const r=p.bind({});r.args={default:`
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
    Custom Tabs content
  </div>
`};r.parameters={docs:{disable:!0}};const n=p.bind({});n.args={title:`
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
    Custom Tabs Title
  </div>
`};n.parameters={docs:{disable:!0}};var C,$,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    NTabs,
    NTab
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
      <NTabs v-bind="args" v-model="args.modelValue">
        <NTab :title="'title' in args ? null : 'First Tab'">
          <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
          <div v-if="!args.default">First Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Second Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
        <div v-if="!args.default">Second Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Third Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
         <div v-if="!args.default">Third Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
      </NTabs>
  \`
})`,...(_=($=o.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var w,S,y;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    NTabs,
    NTab
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
      <NTabs v-bind="args" v-model="args.modelValue">
        <NTab :title="'title' in args ? null : 'First Tab'">
          <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
          <div v-if="!args.default">First Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Second Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
        <div v-if="!args.default">Second Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Third Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
         <div v-if="!args.default">Third Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
      </NTabs>
  \`
})`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var F,k,x;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    NTabs,
    NTab
  },
  setup() {
    const isModalWindowShow = ref(true);
    return {
      args,
      isModalWindowShow
    };
  },
  template: \`
      <NTabs v-bind="args" v-model="args.modelValue">
        <NTab :title="'title' in args ? null : 'First Tab'">
          <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
          <div v-if="!args.default">First Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Second Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
        <div v-if="!args.default">Second Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
        <NTab :title="'title' in args ? null : 'Third Tab'">
        <template v-if="\${'title' in args}" v-slot:title>
            \${args.title}
          </template>
         <div v-if="!args.default">Third Tab Content</div>
          <div v-else>\${args.default}</div>
        </NTab>
      </NTabs>
  \`
})`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const tt=["Default","WithCustomTabsContent","WithCustomTabsTitle"];export{o as Default,r as WithCustomTabsContent,n as WithCustomTabsTitle,tt as __namedExportsOrder,L as default};
