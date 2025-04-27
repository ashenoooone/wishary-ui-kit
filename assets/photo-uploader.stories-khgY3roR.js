import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as z}from"./index-Bbxa4lUY.js";import{T as u}from"./index-CbpAacGB.js";import{a as j}from"./index-DKc7Iixd.js";const i=({files:r=[],error:n,maxFiles:x=8,maxSizeMb:b=5,onChange:e,subtitle:F="не более 8 шт"})=>{const g=l=>{if(!l.target.files)return;const o=Array.from(l.target.files);if(o.find(T=>T.size>b*1024*1024)){e==null||e({type:"error",errorType:"size"});return}if(r.length+o.length>x){e==null||e({type:"error",errorType:"maxFiles"});return}const v=[...r,...o];e==null||e({type:"success",files:v})};return a.jsxs(z,{align:"center",justify:"center",direction:"column",gap:"2",textAlign:"center",className:j("w-[144px] h-[144px] rounded-size-l","cursor-pointer","bg-base-200","border-2 border-dashed border-base-300","transition-all relative","hover:border-base-400 active:border-transparent",{"border-brand-secondary-1-500":n}),children:[a.jsx("input",{type:"file",className:"opacity-0 cursor-pointer absolute inset-0",onChange:g,accept:"image/*",multiple:!0}),a.jsx(u,{variant:"caption-l-1",children:"Добавить фото"}),a.jsx(u,{variant:"caption-m-2",color:n?"error":"muted",children:n||F})]})};i.__docgenInfo={description:"",methods:[],displayName:"PhotoUploader",props:{files:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"",defaultValue:{value:"[]",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxSizeMb:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: UploadFileOnChangePayload) => void",signature:{arguments:[{type:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'error'",required:!0}},{key:"errorType",value:{name:"union",raw:"'size' | 'maxFiles'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'maxFiles'"}],required:!0}}]}}]},name:"payload"}],return:{name:"void"}}},description:""},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'не более 8 шт'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}}};const P={component:i,title:"PhotoUploader",tags:["autodocs"]},s={render:r=>a.jsx(i,{...r}),args:{maxFiles:8,maxSizeMb:5}},t={render:r=>a.jsx(i,{...r}),args:{maxFiles:8,maxSizeMb:5,error:"файл не может весить более 5 мб"}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,y,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5,
    error: 'файл не может весить более 5 мб'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const U=["Default","Error"];export{s as Default,t as Error,U as __namedExportsOrder,P as default};
