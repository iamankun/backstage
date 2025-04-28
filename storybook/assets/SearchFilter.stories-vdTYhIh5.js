import{j as a}from"./jsx-runtime-CvpxdxdE.js";import{s as ve,M as fe}from"./api-mJEpP5Oi.js";import{r as C}from"./index-DSHF18-l.js";import{l as ye}from"./lodash-D8aMxhkM.js";import{a as be}from"./useAsync-W0CErRou.js";import{u as he}from"./useDebounce-CkQMSXNU.js";import{u as _,S as we}from"./SearchContext-BYBNj33Q.js";import{A as ke}from"./Autocomplete-T2vDvY6x.js";import{T as Fe}from"./TextField-DsOem37k.js";import{C as qe}from"./Chip-CwX7WA8s.js";import{m as Ve}from"./makeStyles-BpM_75FT.js";import{a as me,F as Se}from"./FormLabel-Pj29aFfQ.js";import{F as Ae}from"./FormControlLabel-CMBJfOYF.js";import{C as De}from"./Checkbox-HLxPq-m9.js";import{S as xe}from"./Select-Buismc61.js";import{S as B}from"./Grid-K4_8CcNR.js";import{P as F}from"./Paper-D1gKpVrP.js";import{T as je}from"./TestApiProvider-CaP8DdS9.js";import"./ApiRef-DDVPwL0h.js";import"./useMountedState-BK0Y35lN.js";import"./useAnalytics-BqSe3k6a.js";import"./ConfigApi-1QFqvuIK.js";import"./defaultTheme-BC4DFfCk.js";import"./clsx.m-CH7BE6MN.js";import"./Close-DbB2uToY.js";import"./createSvgIcon-D_YgPIMQ.js";import"./capitalize-90DKmOiu.js";import"./withStyles-eF3Zax-M.js";import"./hoist-non-react-statics.cjs-DlMN-SZi.js";import"./unstable_useId-BAMTp7ON.js";import"./useControlled-i6Pam0ca.js";import"./ownerWindow-BCxlYCSn.js";import"./useIsFocusVisible-Sgmp0f7s.js";import"./index-DBvFAGNd.js";import"./IconButton-_7WOHkM7.js";import"./ButtonBase-BdTaz18x.js";import"./TransitionGroupContext-BUwkeBv7.js";import"./Popper-BU497lOo.js";import"./createChainedFunction-Da-WpsAN.js";import"./Portal-Dl07bpo2.js";import"./ListSubheader-zKb61K0D.js";import"./InputLabel-DeYOrXqF.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Dtv1idVa.js";import"./Select-CTBPi-Gg.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-D_a2aLgU.js";import"./Popover-DFgV4fgX.js";import"./debounce-DtXjJkxj.js";import"./Modal-CwuOZwNt.js";import"./classCallCheck-BNzALLS0.js";import"./Grow-DbwKXL8U.js";import"./utils-DlGjxGZ7.js";import"./List-CDGHPTWa.js";import"./ListContext-u-bsdFbB.js";import"./isMuiElement-fiJl_Gvd.js";import"./Typography-D-X-TuAe.js";import"./SwitchBase-DQzc38Qu.js";import"./Cancel-WTqtvwEx.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-CgciPynk.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./Box-Cw3NqR-I.js";import"./typography-CebPpObz.js";import"./MenuItem-Bykh32x4.js";import"./ListItem-C5E1Ptk7.js";import"./ApiProvider-B3DrBnW0.js";import"./index-B0bGgVUV.js";const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function Te(e,n=0){return(s[e[n+0]]+s[e[n+1]]+s[e[n+2]]+s[e[n+3]]+"-"+s[e[n+4]]+s[e[n+5]]+"-"+s[e[n+6]]+s[e[n+7]]+"-"+s[e[n+8]]+s[e[n+9]]+"-"+s[e[n+10]]+s[e[n+11]]+s[e[n+12]]+s[e[n+13]]+s[e[n+14]]+s[e[n+15]]).toLowerCase()}let R;const Pe=new Uint8Array(16);function Ce(){if(!R){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");R=crypto.getRandomValues.bind(crypto)}return R(Pe)}const Ie=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),z={randomUUID:Ie};function Ee(e,n,l){var t;if(z.randomUUID&&!n&&!e)return z.randomUUID();e=e||{};const r=e.random??((t=e.rng)==null?void 0:t.call(e))??Ce();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Te(r)}function k(e){if(e!==void 0)return Array.isArray(e)?e.map(n=>k(n)):typeof e=="string"?{value:e,label:e}:e}const L=(e,n,l=[],r=250)=>{const t=C.useRef({}),i=C.useCallback(async o=>{var f;return((f=await(e==null?void 0:e(o)))==null?void 0:f.map(g=>k(g)))||[]},[e]),[h,p]=be(i,[n],{loading:!0});if(he(()=>{t.current[n]===void 0&&(t.current[n]=p(n).then(o=>(t.current[n]=o,o)))},r,[p,n]),l.length)return{loading:!1,value:l};const v=t.current[n];return Array.isArray(v)?{loading:!1,value:v}:h},O=(e,n)=>{const{setFilters:l}=_();C.useEffect(()=>{n&&[n].flat().length>0&&l(r=>({...r,[e]:n}))},[])},ce=e=>{const{className:n,defaultValue:l,name:r,values:t,valuesDebounceMs:i,label:h,filterSelectedOptions:p,limitTags:v,multiple:o}=e,[f,g]=C.useState("");O(r,l);const q=typeof t=="function"?t:void 0,V=typeof t=="function"||t==null?void 0:t.map(c=>k(c)),{value:S,loading:m}=L(q,f,V,i),{filters:d,setFilters:y}=_(),E=k(d[r])||(o?[]:null),w=(c,b)=>{y(W=>{const{[r]:U,...$}=W;return b?{...$,[r]:Array.isArray(b)?b.map(ge=>ge.value):b.value}:{...$}})},M=c=>a.jsx(Fe,{...c,name:"search",variant:"outlined",label:h,fullWidth:!0}),N=(c,b)=>c.map((W,U)=>a.jsx(qe,{label:W.label,color:"primary",...b({index:U})}));return a.jsx(ke,{filterSelectedOptions:p,limitTags:v,multiple:o,className:n,id:`${o?"multi-":""}select-filter-${r}--select`,options:S||[],loading:m,value:E,onChange:w,onInputChange:(c,b)=>g(b),getOptionLabel:c=>c.label,renderInput:M,renderTags:N})};ce.__docgenInfo={description:"@public",methods:[],displayName:"AutocompleteFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},filterSelectedOptions:{required:!1,tsType:{name:"boolean"},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""}}};const Me=Ve({label:{textTransform:"capitalize"},checkboxWrapper:{display:"flex",alignItems:"center",width:"100%"},textWrapper:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),pe=e=>{const{className:n,defaultValue:l,label:r,name:t,values:i=[],valuesDebounceMs:h}=e,p=Me(),{filters:v,setFilters:o}=_();O(t,l);const f=typeof i=="function"?i:void 0,g=typeof i=="function"?void 0:i.map(m=>k(m)),{value:q=[],loading:V}=L(f,"",g,h),S=m=>{const{target:{value:d,checked:y}}=m;o(I=>{const{[t]:E,...w}=I,M=(E||[]).filter(c=>c!==d),N=y?[...M,d]:M;return N.length?{...w,[t]:N}:w})};return a.jsxs(me,{className:n,disabled:V,fullWidth:!0,"data-testid":"search-checkboxfilter-next",children:[!!r&&a.jsx(Se,{className:p.label,children:r}),q.map(({value:m,label:d})=>a.jsx(Ae,{classes:{root:p.checkboxWrapper,label:p.textWrapper},label:d,control:a.jsx(De,{color:"primary",inputProps:{"aria-labelledby":d},value:m,name:d,onChange:S,checked:(v[t]??[]).includes(m)})},m))]})},de=e=>{const{className:n,defaultValue:l,label:r,name:t,values:i,valuesDebounceMs:h}=e;O(t,l);const p=typeof i=="function"?i:void 0,v=typeof i=="function"||i==null?void 0:i.map(y=>k(y)),{value:o=[],loading:f}=L(p,"",v,h),g=C.useRef(Ee()),q={value:g.current,label:"All"},{filters:V,setFilters:S}=_(),m=y=>{S(I=>{const{[t]:E,...w}=I;return y!==g.current?{...w,[t]:y}:w})},d=[q,...o];return a.jsx(me,{disabled:f,className:n,variant:"filled",fullWidth:!0,"data-testid":"search-selectfilter-next",children:a.jsx(xe,{label:r??ye.capitalize(t),selected:V[t]||g.current,onChange:m,items:d})})},u=e=>{const{component:n,...l}=e;return a.jsx(n,{...l})};u.Checkbox=e=>a.jsx(u,{...e,component:pe});u.Select=e=>a.jsx(u,{...e,component:de});u.Autocomplete=e=>a.jsx(u,{...e,component:ce});pe.__docgenInfo={description:"@public",methods:[],displayName:"CheckboxFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};de.__docgenInfo={description:"@public",methods:[],displayName:"SelectFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};u.__docgenInfo={description:"@public",methods:[{name:"Checkbox",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Select",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Autocomplete",docblock:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.

@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`SearchFilterComponentProps & {
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,signature:{properties:[{key:"filterSelectedOptions",value:{name:"boolean",required:!1}},{key:"limitTags",value:{name:"number",required:!1}},{key:"multiple",value:{name:"boolean",required:!1}}]}}],alias:"SearchAutocompleteFilterProps"}}],returns:null,description:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.`}],displayName:"SearchFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},component:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"FilterValue[] | ((partial: string) => Promise<FilterValue[]>)",elements:[{name:"Array",elements:[{name:"union",raw:"string | FilterValueWithLabel",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterValue[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},debug:{required:!1,tsType:{name:"boolean"},description:""}}};const Yn={title:"Plugins/Search/SearchFilter",component:u,decorators:[e=>a.jsx(je,{apis:[[ve,new fe]],children:a.jsx(we,{children:a.jsx(B,{container:!0,direction:"row",children:a.jsx(B,{item:!0,xs:4,children:a.jsx(e,{})})})})})]},A=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Checkbox,{name:"Search Checkbox Filter",values:["value1","value2"]})}),D=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Select,{label:"Search Select Filter",name:"select_filter",values:["value1","value2"]})}),x=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Select,{label:"Asynchronous Values",name:"async_values",values:async()=>(await(await fetch("https://swapi.dev/api/planets")).json()).results.map(l=>l.name)})}),j=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Autocomplete,{name:"autocomplete",label:"Single-Select Autocomplete Filter",values:["value1","value2"]})}),T=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Autocomplete,{multiple:!0,name:"autocomplete",label:"Multi-Select Autocomplete Filter",values:["value1","value2"]})}),P=()=>a.jsx(F,{style:{padding:10},children:a.jsx(u.Autocomplete,{multiple:!0,name:"starwarsPerson",label:"Starwars Character",values:async e=>e===""?[]:(await(await fetch(`https://swapi.dev/api/people?search=${encodeURIComponent(e)}`)).json()).results.map(r=>r.name)})});A.__docgenInfo={description:"",methods:[],displayName:"CheckBoxFilter"};D.__docgenInfo={description:"",methods:[],displayName:"SelectFilter"};x.__docgenInfo={description:"",methods:[],displayName:"AsyncSelectFilter"};j.__docgenInfo={description:"",methods:[],displayName:"Autocomplete"};T.__docgenInfo={description:"",methods:[],displayName:"MultiSelectAutocomplete"};P.__docgenInfo={description:"",methods:[],displayName:"AsyncMultiSelectAutocomplete"};var G,H,J;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Checkbox name="Search Checkbox Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(J=(H=A.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Search Select Filter" name="select_filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Asynchronous Values" name="async_values" values={async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete name="autocomplete" label="Single-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(te=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="autocomplete" label="Multi-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ue,oe;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="starwarsPerson" label="Starwars Character" values={async partial => {
      if (partial === '') return [];
      const response = await fetch(\`https://swapi.dev/api/people?search=\${encodeURIComponent(partial)}\`);
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(oe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};const Zn=["CheckBoxFilter","SelectFilter","AsyncSelectFilter","Autocomplete","MultiSelectAutocomplete","AsyncMultiSelectAutocomplete"];export{P as AsyncMultiSelectAutocomplete,x as AsyncSelectFilter,j as Autocomplete,A as CheckBoxFilter,T as MultiSelectAutocomplete,D as SelectFilter,Zn as __namedExportsOrder,Yn as default};
