import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{V as n}from"./index-BPro2V4Z.js";import{S as d}from"./storybook-arg-types-DgGSsxVo.js";import"./index-DKc7Iixd.js";const p={component:n,title:"VSpacing",tags:["autodocs"]},s={args:{size:"10"},argTypes:{size:d},render:o=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center",children:"Before"}),e.jsx(n,{...o,className:"bg-brand-secondary-2-300/20 border-2 border-brand-secondary-2-300 transition-all rounded"}),e.jsx("span",{className:"bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center",children:"After"})]})};var r,a,t;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: '10'
  },
  argTypes: {
    size: SPACING_CONTROLS
  },
  render: args => <div className="flex flex-col">
      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        Before
      </span>

      <VSpacing {...args} className="bg-brand-secondary-2-300/20 border-2 border-brand-secondary-2-300 transition-all rounded" />

      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        After
      </span>
    </div>
}`,...(t=(a=s.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,p as default};
