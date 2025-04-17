import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{d as N}from"./ExpandMore-BbHQRYUg.js";import{i as V}from"./interopRequireDefault-Y9pwbXtE.js";import{r as L,i as R}from"./createSvgIcon-C7DOmWEG.js";import{u as D}from"./useAsync-CXA3qup_.js";import{m as h}from"./makeStyles-CRB_T0k9.js";import{u as v}from"./SearchContext-NUeqQOQ4.js";import{s as P}from"./api-B335RvSG.js";import{B as z}from"./Box-DU2WS7ls.js";import{T as J}from"./Typography-D5Gm01bp.js";import{A as M,a as W,b as X}from"./AccordionDetails-wS4pnnON.js";import{L as B}from"./List-B21WyO9K.js";import{D as H}from"./Divider-BAm-5afo.js";import{L as O}from"./ListItem-DaYfLecw.js";import{L as $}from"./ListItemIcon-CM5i1NWL.js";import{L as j}from"./ListItemText-BQG6-PBZ.js";import{u as F}from"./ApiRef-CqkoWjZn.js";import{T as U,a as G}from"./Tabs-B9kxer8i.js";import{a as K}from"./FormLabel-D6jOsxCS.js";import{I as Q}from"./InputLabel-Rh6717bL.js";import{S as Y}from"./Select-ChjCOIHu.js";import{C as Z}from"./Chip-BxvSZ2ao.js";import{M as ee}from"./MenuItem-BtB6oDzb.js";import{C as re}from"./Checkbox-KDIOd_9l.js";var ae=function(r){p.useEffect(r,[])},b={},se=V,te=R;Object.defineProperty(b,"__esModule",{value:!0});var A=b.default=void 0,ne=te(p),ie=se(L()),oe=(0,ie.default)(ne.createElement("path",{d:"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"}),"FontDownload");A=b.default=oe;const le=h(r=>({icon:{color:r.palette.text.primary},list:{width:"100%"},listItemIcon:{width:"24px",height:"24px"},accordion:{backgroundColor:r.palette.background.paper},accordionSummary:{minHeight:"auto","&.Mui-expanded":{minHeight:"auto"}},accordionSummaryContent:{margin:r.spacing(2,0),"&.Mui-expanded":{margin:r.spacing(2,0)}},accordionDetails:{padding:r.spacing(0,0,1)}})),S=r=>{const t=le(),{filters:o,setPageCursor:d,setTypes:c,term:l,types:n}=v(),u=F(P),[y,s]=p.useState(!0),{defaultValue:i,name:C,showCounts:T,types:w}=r,I=()=>s(a=>!a),E=a=>()=>{c(a!==""?[a]:[]),d(void 0)};p.useEffect(()=>{i&&c([i])},[]);const f=[{value:"",name:"All",icon:e.jsx(A,{})},...w],_=n[0]||"",{value:q}=D(async()=>{if(!T)return{};const a=await Promise.all(f.map(m=>m.value).map(async m=>{const{numberOfResults:g}=await u.query({term:l,types:m?[m]:[],filters:n.includes(m)||!n.length&&!m?o:{},pageLimit:0});return[m,g!==void 0?`${g>=1e4?">10000":g} results`:" -- "]}));return Object.fromEntries(a)},[o,T,l,n]);return e.jsxs(z,{children:[e.jsx(J,{variant:"body2",component:"h2",children:C}),e.jsxs(M,{className:t.accordion,expanded:y,onChange:I,children:[e.jsx(W,{classes:{root:t.accordionSummary,content:t.accordionSummaryContent},expandIcon:e.jsx(N,{className:t.icon}),IconButtonProps:{size:"small"},children:y?"Collapse":f.filter(a=>a.value===_)[0].name}),e.jsx(X,{classes:{root:t.accordionDetails},children:e.jsx(B,{className:t.list,component:"nav","aria-label":"filter by type",disablePadding:!0,dense:!0,children:f.map(a=>e.jsxs(p.Fragment,{children:[e.jsx(H,{}),e.jsxs(O,{selected:n[0]===a.value||n.length===0&&a.value==="",onClick:E(a.value),button:!0,children:[e.jsx($,{children:p.cloneElement(a.icon,{className:t.listItemIcon})}),e.jsx(j,{primary:a.name,secondary:q&&q[a.value]})]})]},a.value))})})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"SearchTypeAccordion",props:{name:{required:!0,tsType:{name:"string"},description:""},types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},showCounts:{required:!1,tsType:{name:"boolean"},description:""}}};const ce=h(r=>({tabs:{borderBottom:`1px solid ${r.palette.textVerySubtle}`},tab:{height:"50px",fontWeight:r.typography.fontWeightBold,fontSize:r.typography.pxToRem(13),color:r.palette.text.primary,minWidth:"130px"}})),k=r=>{const t=ce(),{setPageCursor:o,setTypes:d,types:c}=v(),{defaultValue:l,types:n}=r,u=(s,i)=>{d(i!==""?[i]:[]),o(void 0)};p.useEffect(()=>{l&&d([l])},[]);const y=[{value:"",name:"All"},...n];return e.jsx(U,{"aria-label":"List of search types tabs",className:t.tabs,indicatorColor:"primary",value:c.length===0?"":c[0],onChange:u,children:y.map((s,i)=>e.jsx(G,{className:t.tab,label:s.name,value:s.value},i))})};k.__docgenInfo={description:"",methods:[],displayName:"SearchTypeTabs",props:{types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};const ue=h(r=>({label:{textTransform:"capitalize"},chips:{display:"flex",flexWrap:"wrap",marginTop:r.spacing(1)},chip:{margin:2}})),x=r=>{const{className:t,defaultValue:o,name:d,values:c=[]}=r,l=ue(),{types:n,setTypes:u}=v();ae(()=>{n.length||(o&&Array.isArray(o)?u(o):o&&u([o]))});const y=s=>{const i=s.target.value;u(i)};return e.jsxs(K,{className:t,variant:"filled",fullWidth:!0,"data-testid":"search-typefilter-next",children:[e.jsx(Q,{className:l.label,margin:"dense",children:d}),e.jsx(Y,{multiple:!0,variant:"outlined",value:n,onChange:y,placeholder:"All Results",renderValue:s=>e.jsx("div",{className:l.chips,children:s.map(i=>e.jsx(Z,{label:i,className:l.chip,size:"small"},i))}),children:c.map(s=>e.jsxs(ee,{value:s,children:[e.jsx(re,{checked:n.indexOf(s)>-1}),e.jsx(j,{primary:s})]},s))})]})};x.Accordion=r=>e.jsx(S,{...r});x.Tabs=r=>e.jsx(k,{...r});x.__docgenInfo={description:"@public",methods:[{name:"Accordion",docblock:`A control surface for the search query's "types" property, displayed as a
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
tabs suitable for use in faceted search UIs.`}],displayName:"SearchType",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""}}};export{x as S};
