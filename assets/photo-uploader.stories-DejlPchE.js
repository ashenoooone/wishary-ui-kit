import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as z}from"./index-D2h_BBsb.js";import{T as u}from"./index-C9XdyxwA.js";import{a as j}from"./index-DKc7Iixd.js";const n=({files:r=[],error:s,maxFiles:x=8,maxSizeMb:b=5,onChange:e,subtitle:v="не более 8 шт"})=>{const F=l=>{if(!l.target.files)return;const o=Array.from(l.target.files);if(o.find(T=>T.size>b*1024*1024)){e==null||e({type:"error",errorType:"size"});return}if(r.length+o.length>x){e==null||e({type:"error",errorType:"maxFiles"});return}const g=[...r,...o];e==null||e({type:"success",files:g})};return a.jsxs(z,{align:"center",justify:"center",direction:"column",gap:"2",textAlign:"center",className:j("w-[144px] h-[144px] rounded-size-l","cursor-pointer","bg-base-200","border-2 border-dashed border-base-300","transition-all relative","active:border-transparent",{"border-brand-secondary-1-500 hover:border-brand-secondary-1-700":s,"hover:border-base-400":!s}),children:[a.jsx("input",{type:"file",className:"opacity-0 cursor-pointer absolute inset-0",onChange:F,accept:"image/*",multiple:!0}),a.jsx(u,{variant:"caption-l-1",children:"Добавить фото"}),a.jsx(u,{variant:"caption-m-2",color:s?"error":"muted",children:s||v})]})};n.__docgenInfo={description:"",methods:[],displayName:"PhotoUploader",props:{files:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"",defaultValue:{value:"[]",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxSizeMb:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: UploadFileOnChangePayload) => void",signature:{arguments:[{type:{name:"union",raw:`| {
    type: 'success';
    files: File[];
  }
| {
    type: 'error';
    errorType: ErrorType;
  }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'success';
  files: File[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'success'",required:!0}},{key:"files",value:{name:"Array",elements:[{name:"File"}],raw:"File[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'error';
  errorType: ErrorType;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'error'",required:!0}},{key:"errorType",value:{name:"union",raw:"'size' | 'maxFiles'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'maxFiles'"}],required:!0}}]}}]},name:"payload"}],return:{name:"void"}}},description:""},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'не более 8 шт'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}}};const P={component:n,title:"PhotoUploader",tags:["autodocs"]},t={render:r=>a.jsx(n,{...r}),args:{maxFiles:8,maxSizeMb:5}},i={render:r=>a.jsx(n,{...r}),args:{maxFiles:8,maxSizeMb:5,error:"файл не может весить более 5 мб"}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,y,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5,
    error: 'файл не может весить более 5 мб'
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const U=["Default","Error"];export{t as Default,i as Error,U as __namedExportsOrder,P as default};
