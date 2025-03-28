import{r as _,R as e}from"./index-CTjT7uj6.js";import{m as q}from"./makeStyles-3WuthtJ7.js";import{w as M}from"./capitalize-CjHL08xv.js";import{C as P}from"./CardHeader-BfI3cg9q.js";import{C as D,a as V}from"./CardContent-7S1EI-5r.js";import{E as N}from"./ErrorBoundary-CoHTQBt4.js";import{T as A,a as F}from"./Tabs-BFcBDPe4.js";import{D as j}from"./Divider-BhISGdDt.js";import{B as G}from"./BottomLink-BArv9v2b.js";import{S as E}from"./Grid-Cd4CaOSn.js";import{T as U}from"./Typography-CUBppVl0.js";import{M as X}from"./index-CNMBxS8v.js";import"./defaultTheme-U8IXQtr7.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./Paper-BZKq1osr.js";import"./translation-b4xNyudL.js";import"./TranslationApi-TmuXcaNh.js";import"./ApiRef-DUoQ5WvO.js";import"./ErrorPanel-CydvOqvF.js";import"./WarningPanel-Tyk0IjzU.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-rCELOQ8q.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAWH9WqG.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-BQk2_Vhe.js";import"./index-DwHHXP4W.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./ExpandMore-DJEUZydb.js";import"./AccordionDetails-jznWWPWX.js";import"./toArray-QeYAVC82.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-DeBi3gal.js";import"./utils-ClB-4IsE.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./useTheme-hfNS2WFw.js";import"./ButtonBase-DlC9xQ0T.js";import"./IconButton-BVD_HF4h.js";import"./MarkdownContent-Cn2K6T0-.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-Dz4fdXYx.js";import"./iframe-3XZdYrCn.js";import"./objectWithoutProperties-Et-85jJS.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-Cm41Z5uw.js";import"./toConsumableArray-BEwiObev.js";import"./Box-BZcLdGyY.js";import"./typography-hVTC7Hfk.js";import"./CopyTextButton-oE6JRQdb.js";import"./useCopyToClipboard-BkLYi_DT.js";import"./useMountedState-DkESzBh4.js";import"./Tooltip-D1xsFmJ6.js";import"./Popper-CRCF8N5R.js";import"./Portal-BcgI5KAA.js";import"./Grow-Bw-3CPgf.js";import"./List-BslH4zsa.js";import"./ListContext-DydK1sOh.js";import"./ListItem-CyYoKKrc.js";import"./ListItemText-CjIJj2RO.js";import"./LinkButton-ChsUCSJ9.js";import"./Link-Cc6AWI2O.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./useAnalytics-Dmj0Ntiu.js";import"./ConfigApi-BZwRYjFH.js";import"./Button-DR3GtRZd.js";import"./KeyboardArrowRight-B8I4OV05.js";import"./ArrowForward-KwKdGpo_.js";const Y=q(t=>({root:{padding:t.spacing(0,2,0,2.5),minHeight:t.spacing(3)},indicator:{backgroundColor:t.palette.info.main,height:t.spacing(.3)}}),{name:"BackstageTabbedCard"}),Z=M(t=>({root:{padding:t.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:t.spacing(1)}}),{name:"BackstageTabbedCardBoldHeader"})(P);function d(t){const{slackChannel:i,errorBoundaryProps:l,children:o,title:c,deepLink:y,value:u,onChange:v}=t,x=Y(),[T,H]=_.useState(0),I=v||((n,C)=>H(C));let b;u?e.Children.map(o,n=>{e.isValidElement(n)&&(n==null?void 0:n.props.value)===u&&(b=n==null?void 0:n.props.children)}):e.Children.map(o,(n,C)=>{e.isValidElement(n)&&C===T&&(b=n==null?void 0:n.props.children)});const B=l||(i?{slackChannel:i}:{});return e.createElement(D,null,e.createElement(N,{...B},c&&e.createElement(Z,{title:c}),e.createElement(A,{classes:x,value:u||T,onChange:I},o),e.createElement(j,null),e.createElement(V,null,b),y&&e.createElement(G,{...y})))}const z=q(t=>({root:{minWidth:t.spacing(6),minHeight:t.spacing(3),margin:t.spacing(0,2,0,0),padding:t.spacing(.5,0,.5,0),textTransform:"none","&:hover":{opacity:1,backgroundColor:"transparent",color:t.palette.text.primary}},selected:{fontWeight:t.typography.fontWeightBold}}),{name:"BackstageCardTab"});function r(t){const{children:i,...l}=t,o=z();return e.createElement(F,{disableRipple:!0,classes:o,...l})}d.__docgenInfo={description:"",methods:[],displayName:"TabbedCard",props:{slackChannel:{required:!1,tsType:{name:"string"},description:"@deprecated Use errorBoundaryProps instead"},errorBoundaryProps:{required:!1,tsType:{name:"ReactPropsWithChildren",raw:`React.PropsWithChildren<{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}>`,elements:[{name:"signature",type:"object",raw:`{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}`,signature:{properties:[{key:"slackChannel",value:{name:"union",raw:"string | SlackChannel",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  name: string;
  href?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],required:!1}},{key:"onError",value:{name:"signature",type:"function",raw:"(error: Error, errorInfo: string) => null",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"string"},name:"errorInfo"}],return:{name:"null"}},required:!1}}]}}]},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<{}>, value: number | string) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<{}>",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}]},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},deepLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  link: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}`,signature:{properties:[{key:"link",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"event"}],return:{name:"void"}},required:!1}}]}},description:""}}};r.__docgenInfo={description:`Card tab component used in {@link TabbedCard}

@public`,methods:[],displayName:"CardTab",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const a={height:200,width:500},g=({children:t})=>e.createElement(X,null,t),Ct={title:"Layout/Tabbed Card",component:d,decorators:[t=>e.createElement(E,{container:!0,spacing:4},e.createElement(E,{item:!0},t()))]},s=()=>e.createElement(g,null,e.createElement(d,{title:"Default Example Header"},e.createElement(r,{label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{label:"Option 4"},e.createElement("div",{style:a},"Some content 4")))),J={title:"Go to XYZ Location",link:"#"},m=()=>e.createElement(g,null,e.createElement(d,{title:"Footer Link Example Header",deepLink:J},e.createElement(r,{label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{label:"Option 4"},e.createElement("div",{style:a},"Some content 4")))),p=()=>{const[t,i]=_.useState("one"),l=(o,c)=>i(c);return e.createElement(g,null,e.createElement(U,{component:"span"},"Selected tab is ",t),e.createElement(d,{value:t,onChange:l,title:"Controlled Value Example"},e.createElement(r,{value:"one",label:"Option 1"},e.createElement("div",{style:a},"Some content")),e.createElement(r,{value:"two",label:"Option 2"},e.createElement("div",{style:a},"Some content 2")),e.createElement(r,{value:"three",label:"Option 3"},e.createElement("div",{style:a},"Some content 3")),e.createElement(r,{value:"four",label:"Option 4"},e.createElement("div",{style:a},"Some content 4"))))};s.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithFooterLink"};p.__docgenInfo={description:"",methods:[],displayName:"WithControlledTabValue"};var S,f,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Default Example Header">
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,O,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Footer Link Example Header" deepLink={linkInfo}>
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var W,R,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [selectedTab, setSelectedTab] = useState<string | number>('one');
  const handleChange = (_ev: any, newSelectedTab: string | number) => setSelectedTab(newSelectedTab);
  return <Wrapper>
      <Typography component="span">Selected tab is {selectedTab}</Typography>

      <TabbedCard value={selectedTab} onChange={handleChange} title="Controlled Value Example">
        <CardTab value="one" label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab value="two" label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab value="three" label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab value="four" label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const gt=["Default","WithFooterLink","WithControlledTabValue"];export{s as Default,p as WithControlledTabValue,m as WithFooterLink,gt as __namedExportsOrder,Ct as default};
