import{c as F,p as L}from"./vue.esm-bundler-CCdTkIiI.js";import{N as x}from"./NButton-CLu-ppVo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={title:"UI/NButton",component:x,tags:["autodocs"],parameters:{docs:{source:{code:`
<script setup>
  import { NButton } from "n-ui-kit"
<\/script>
    

<template>
  <NButton />
</template>
        `},description:{component:"Commonly used button."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},color:{control:{type:"select"},options:["primary","success","warning","danger","default"]},round:{control:"boolean"},disabled:{control:"boolean"},isDarkTheme:{control:"boolean"}},decorators:[(e,C)=>{const W=F(()=>C.args.isDarkTheme);return L("isDarkTheme",W),{components:{story:e},template:"<story />"}}]},t=e=>({components:{NButton:x},setup(){return{args:e}},template:`
    <NButton v-bind="args">
      <template v-if="${"leftIcon"in e}" v-slot:leftIcon>
          ${e.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="${"rightIcon"in e}" v-slot:rightIcon>
          ${e.rightIcon}
      </template>
    </NButton>
  `}),c=t.bind({});c.args={size:"medium",color:"default",round:!1,disabled:!1,default:"Default NButton",isDarkTheme:!1};const n=t.bind({});n.args={size:"medium",color:"primary",round:!1,disabled:!1,default:"Primary NButton",isDarkTheme:!1};n.parameters={docs:{disable:!0}};const r=t.bind({});r.args={size:"medium",color:"success",round:!1,disabled:!1,default:"Success NButton",isDarkTheme:!1};r.parameters={docs:{disable:!0}};const a=t.bind({});a.args={size:"medium",color:"warning",round:!1,disabled:!1,default:"Warning NButton",isDarkTheme:!1};a.parameters={docs:{disable:!0}};const s=t.bind({});s.args={size:"medium",color:"danger",round:!1,disabled:!1,default:"Danger NButton",isDarkTheme:!1};s.parameters={docs:{disable:!0}};const o=t.bind({});o.args={size:"large",color:"primary",round:!0,disabled:!1,default:"Large Round NButton with Icon",leftIcon:`
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
  `,isDarkTheme:!1};o.parameters={docs:{disable:!0}};const l=t.bind({});l.args={size:"medium",color:"default",round:!1,disabled:!1,default:"Dark Theme NButton",isDarkTheme:!0};l.parameters={docs:{disable:!0}};var i,m,u;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(u=(m=c.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,I,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(h=(I=r.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var v,B,N;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(N=(B=a.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var b,$,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(D=($=s.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var T,k,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var z,S,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    NButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NButton v-bind="args">
      <template v-if="\${'leftIcon' in args}" v-slot:leftIcon>
          \${args.leftIcon}
      </template>
      {{ args.default }}
            <template v-if="\${'rightIcon' in args}" v-slot:rightIcon>
          \${args.rightIcon}
      </template>
    </NButton>
  \`
})`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const E=["Default","Primary","Success","Warning","Danger","LargeRoundWithIcon","DarkTheme"];export{s as Danger,l as DarkTheme,c as Default,o as LargeRoundWithIcon,n as Primary,r as Success,a as Warning,E as __namedExportsOrder,M as default};
