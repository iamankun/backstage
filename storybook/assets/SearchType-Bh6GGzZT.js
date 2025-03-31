import{r as y,a as V,R as e}from"./index-CV65Cz2T.js";import{d as L}from"./ExpandMore-BrK1WZVt.js";import{i as R}from"./interopRequireDefault-Y9pwbXtE.js";import{r as D,i as j}from"./createSvgIcon-B8CqyWGr.js";import{u as P}from"./useAsync-cwiHyrW_.js";import{m as v}from"./makeStyles-B2ffWluB.js";import{u as h}from"./SearchContext-Bg2fsBHP.js";import{s as z}from"./api-DaAaT8k3.js";import{B as J}from"./Box-D_ilMR00.js";import{T as M}from"./Typography-ClGfHewG.js";import{A as W,a as X,b as $}from"./AccordionDetails-Dgmh1IWb.js";import{L as B}from"./List-D3T44CW6.js";import{D as H}from"./Divider-YBHdkOJo.js";import{L as O}from"./ListItem-D7qWqnZh.js";import{L as F}from"./ListItemIcon-CXXFlTRn.js";import{L as A}from"./ListItemText-Db7RxVPo.js";import{u as U}from"./ApiRef-DSSgzaW4.js";import{T as G,a as K}from"./Tabs-ByMp62KU.js";import{a as Q}from"./FormLabel-ZM__TfMd.js";import{I as Y}from"./InputLabel-TJ3WLnKL.js";import{S as Z}from"./Select-DgzZcFF3.js";import{C as ee}from"./Chip-Bf2ntM-b.js";import{M as ae}from"./MenuItem-ChWKH140.js";import{C as re}from"./Checkbox-N3VC8DLU.js";var te=function(a){y.useEffect(a,[])},b={},ne=R,se=j;Object.defineProperty(b,"__esModule",{value:!0});var S=b.default=void 0,ie=se(V()),oe=ne(D()),le=(0,oe.default)(ie.createElement("path",{d:"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"}),"FontDownload");S=b.default=le;const ce=v(a=>({icon:{color:a.palette.text.primary},list:{width:"100%"},listItemIcon:{width:"24px",height:"24px"},accordion:{backgroundColor:a.palette.background.paper},accordionSummary:{minHeight:"auto","&.Mui-expanded":{minHeight:"auto"}},accordionSummaryContent:{margin:a.spacing(2,0),"&.Mui-expanded":{margin:a.spacing(2,0)}},accordionDetails:{padding:a.spacing(0,0,1)}})),k=a=>{const n=ce(),{filters:o,setPageCursor:p,setTypes:c,term:l,types:s}=h(),u=U(z),[d,t]=y.useState(!0),{defaultValue:i,name:C,showCounts:T,types:w}=a,I=()=>t(r=>!r),_=r=>()=>{c(r!==""?[r]:[]),p(void 0)};y.useEffect(()=>{i&&c([i])},[]);const f=[{value:"",name:"All",icon:e.createElement(S,null)},...w],N=s[0]||"",{value:q}=P(async()=>{if(!T)return{};const r=await Promise.all(f.map(m=>m.value).map(async m=>{const{numberOfResults:g}=await u.query({term:l,types:m?[m]:[],filters:s.includes(m)||!s.length&&!m?o:{},pageLimit:0});return[m,g!==void 0?`${g>=1e4?">10000":g} results`:" -- "]}));return Object.fromEntries(r)},[o,T,l,s]);return e.createElement(J,null,e.createElement(M,{variant:"body2",component:"h2"},C),e.createElement(W,{className:n.accordion,expanded:d,onChange:I},e.createElement(X,{classes:{root:n.accordionSummary,content:n.accordionSummaryContent},expandIcon:e.createElement(L,{className:n.icon}),IconButtonProps:{size:"small"}},d?"Collapse":f.filter(r=>r.value===N)[0].name),e.createElement($,{classes:{root:n.accordionDetails}},e.createElement(B,{className:n.list,component:"nav","aria-label":"filter by type",disablePadding:!0,dense:!0},f.map(r=>e.createElement(y.Fragment,{key:r.value},e.createElement(H,null),e.createElement(O,{selected:s[0]===r.value||s.length===0&&r.value==="",onClick:_(r.value),button:!0},e.createElement(F,null,y.cloneElement(r.icon,{className:n.listItemIcon})),e.createElement(A,{primary:r.name,secondary:q&&q[r.value]}))))))))};k.__docgenInfo={description:"",methods:[],displayName:"SearchTypeAccordion",props:{name:{required:!0,tsType:{name:"string"},description:""},types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},showCounts:{required:!1,tsType:{name:"boolean"},description:""}}};const ue=v(a=>({tabs:{borderBottom:`1px solid ${a.palette.textVerySubtle}`},tab:{height:"50px",fontWeight:a.typography.fontWeightBold,fontSize:a.typography.pxToRem(13),color:a.palette.text.primary,minWidth:"130px"}})),x=a=>{const n=ue(),{setPageCursor:o,setTypes:p,types:c}=h(),{defaultValue:l,types:s}=a,u=(t,i)=>{p(i!==""?[i]:[]),o(void 0)};y.useEffect(()=>{l&&p([l])},[]);const d=[{value:"",name:"All"},...s];return e.createElement(G,{"aria-label":"List of search types tabs",className:n.tabs,indicatorColor:"primary",value:c.length===0?"":c[0],onChange:u},d.map((t,i)=>e.createElement(K,{key:i,className:n.tab,label:t.name,value:t.value})))};x.__docgenInfo={description:"",methods:[],displayName:"SearchTypeTabs",props:{types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};const me=v(a=>({label:{textTransform:"capitalize"},chips:{display:"flex",flexWrap:"wrap",marginTop:a.spacing(1)},chip:{margin:2}})),E=a=>{const{className:n,defaultValue:o,name:p,values:c=[]}=a,l=me(),{types:s,setTypes:u}=h();te(()=>{s.length||(o&&Array.isArray(o)?u(o):o&&u([o]))});const d=t=>{const i=t.target.value;u(i)};return e.createElement(Q,{className:n,variant:"filled",fullWidth:!0,"data-testid":"search-typefilter-next"},e.createElement(Y,{className:l.label,margin:"dense"},p),e.createElement(Z,{multiple:!0,variant:"outlined",value:s,onChange:d,placeholder:"All Results",renderValue:t=>e.createElement("div",{className:l.chips},t.map(i=>e.createElement(ee,{key:i,label:i,className:l.chip,size:"small"})))},c.map(t=>e.createElement(ae,{key:t,value:t},e.createElement(re,{checked:s.indexOf(t)>-1}),e.createElement(A,{primary:t})))))};E.Accordion=a=>e.createElement(k,{...a});E.Tabs=a=>e.createElement(x,{...a});E.__docgenInfo={description:"@public",methods:[{name:"Accordion",docblock:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  name: string;
  types: Array<{
    value: string;
    name: string;
    icon: JSX.Element;
  }>;
  defaultValue?: string;
  showCounts?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"showCounts",value:{name:"boolean",required:!1}}]},alias:"SearchTypeAccordionProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.`},{name:"Tabs",docblock:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  types: Array<{
    value: string;
    name: string;
  }>;
  defaultValue?: string;
}`,signature:{properties:[{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}}]},alias:"SearchTypeTabsProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.`}],displayName:"SearchType",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""}}};export{E as S};
