import{j as e}from"./jsx-runtime-B1AhRb-V.js";import{r as i}from"./index-CV65Cz2T.js";import{m as _}from"./makeStyles-B2ffWluB.js";import{w as M}from"./capitalize-BKQXumqD.js";import{C as P}from"./CardHeader-DAExE-wZ.js";import{C as D,a as R}from"./CardContent-B5iYBdc5.js";import{E as V}from"./ErrorBoundary-Xuy4zvF1.js";import{T as N,a as A}from"./Tabs-ByMp62KU.js";import{D as F}from"./Divider-BTD3oVXJ.js";import{B as G}from"./BottomLink-DnGqOcPO.js";import{S}from"./Grid-BB-GYNIy.js";import{T as U}from"./Typography-ClGfHewG.js";import{M as X}from"./index-CMym2nmu.js";import"./defaultTheme-dorO8Ycy.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./Paper-BZMBdJdO.js";import"./translation-CdQDl-HS.js";import"./TranslationApi-AbvAvMM-.js";import"./ApiRef-DQ_p_ST9.js";import"./ErrorPanel-6_aQLhTC.js";import"./WarningPanel-BfmYNARB.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B8CqyWGr.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./ExpandMore-BrK1WZVt.js";import"./AccordionDetails-Dgmh1IWb.js";import"./toArray-COxZ3wB-.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-DTvmz7EI.js";import"./utils-BzL8OB8Z.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./useTheme-Dmunefpm.js";import"./ButtonBase-BmmJ3DqQ.js";import"./IconButton-C1StEALi.js";import"./MarkdownContent-fcnyQd3U.js";import"./index-BDlCPcVq.js";import"./CodeSnippet-DVj_GxzT.js";import"./iframe-DAgMbO02.js";import"./objectWithoutProperties-Et-85jJS.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CeNoR6ST.js";import"./toConsumableArray-BEwiObev.js";import"./Box-D_ilMR00.js";import"./typography-Cs1aOEfH.js";import"./CopyTextButton-DX_Ni1_Y.js";import"./useCopyToClipboard-CYpdtXo0.js";import"./useMountedState-BG_s6PIB.js";import"./Tooltip-CvCyiOW0.js";import"./Popper-B0nlBGvk.js";import"./Portal-nleYRD7c.js";import"./Grow-jzu4TrlJ.js";import"./List-D3T44CW6.js";import"./ListContext-DDd8B5Hf.js";import"./ListItem-D7qWqnZh.js";import"./ListItemText-Db7RxVPo.js";import"./LinkButton-uFGHIRX6.js";import"./Link-CPC3fqtu.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./useAnalytics-y3ZaQqe-.js";import"./ConfigApi-fH7dLXu8.js";import"./Button-BXP3PAcX.js";import"./KeyboardArrowRight-DUUcGvVE.js";import"./ArrowForward-DyDxQ18k.js";const Y=_(n=>({root:{padding:n.spacing(0,2,0,2.5),minHeight:n.spacing(3)},indicator:{backgroundColor:n.palette.info.main,height:n.spacing(.3)}}),{name:"BackstageTabbedCard"}),Z=M(n=>({root:{padding:n.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:n.spacing(1)}}),{name:"BackstageTabbedCardBoldHeader"})(P);function c(n){const{slackChannel:s,errorBoundaryProps:l,children:o,title:u,deepLink:h,value:b,onChange:v}=n,q=Y(),[T,H]=i.useState(0),I=v||((r,g)=>H(g));let C;b?i.Children.map(o,r=>{i.isValidElement(r)&&(r==null?void 0:r.props.value)===b&&(C=r==null?void 0:r.props.children)}):i.Children.map(o,(r,g)=>{i.isValidElement(r)&&g===T&&(C=r==null?void 0:r.props.children)});const B=l||(s?{slackChannel:s}:{});return e.jsx(D,{children:e.jsxs(V,{...B,children:[u&&e.jsx(Z,{title:u}),e.jsx(N,{classes:q,value:b||T,onChange:I,children:o}),e.jsx(F,{}),e.jsx(R,{children:C}),h&&e.jsx(G,{...h})]})})}const z=_(n=>({root:{minWidth:n.spacing(6),minHeight:n.spacing(3),margin:n.spacing(0,2,0,0),padding:n.spacing(.5,0,.5,0),textTransform:"none","&:hover":{opacity:1,backgroundColor:"transparent",color:n.palette.text.primary}},selected:{fontWeight:n.typography.fontWeightBold}}),{name:"BackstageCardTab"});function t(n){const{children:s,...l}=n,o=z();return e.jsx(A,{disableRipple:!0,classes:o,...l})}c.__docgenInfo={description:"",methods:[],displayName:"TabbedCard",props:{slackChannel:{required:!1,tsType:{name:"string"},description:"@deprecated Use errorBoundaryProps instead"},errorBoundaryProps:{required:!1,tsType:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}`,signature:{properties:[{key:"slackChannel",value:{name:"union",raw:"string | SlackChannel",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  name: string;
  href?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],required:!1}},{key:"onError",value:{name:"signature",type:"function",raw:"(error: Error, errorInfo: string) => null",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"string"},name:"errorInfo"}],return:{name:"null"}},required:!1}}]}}],raw:`PropsWithChildren<{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}>`},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<{}>, value: number | string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"ChangeEvent<{}>"},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},deepLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  link: string;
  title: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}`,signature:{properties:[{key:"link",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEvent<HTMLAnchorElement>"},name:"event"}],return:{name:"void"}},required:!1}}]}},description:""}}};t.__docgenInfo={description:`Card tab component used in {@link TabbedCard}

@public`,methods:[],displayName:"CardTab",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const a={height:200,width:500},y=({children:n})=>e.jsx(X,{children:n}),yn={title:"Layout/Tabbed Card",component:c,decorators:[n=>e.jsx(S,{container:!0,spacing:4,children:e.jsx(S,{item:!0,children:n()})})]},d=()=>e.jsx(y,{children:e.jsxs(c,{title:"Default Example Header",children:[e.jsx(t,{label:"Option 1",children:e.jsx("div",{style:a,children:"Some content"})}),e.jsx(t,{label:"Option 2",children:e.jsx("div",{style:a,children:"Some content 2"})}),e.jsx(t,{label:"Option 3",children:e.jsx("div",{style:a,children:"Some content 3"})}),e.jsx(t,{label:"Option 4",children:e.jsx("div",{style:a,children:"Some content 4"})})]})}),J={title:"Go to XYZ Location",link:"#"},p=()=>e.jsx(y,{children:e.jsxs(c,{title:"Footer Link Example Header",deepLink:J,children:[e.jsx(t,{label:"Option 1",children:e.jsx("div",{style:a,children:"Some content"})}),e.jsx(t,{label:"Option 2",children:e.jsx("div",{style:a,children:"Some content 2"})}),e.jsx(t,{label:"Option 3",children:e.jsx("div",{style:a,children:"Some content 3"})}),e.jsx(t,{label:"Option 4",children:e.jsx("div",{style:a,children:"Some content 4"})})]})}),m=()=>{const[n,s]=i.useState("one"),l=(o,u)=>s(u);return e.jsxs(y,{children:[e.jsxs(U,{component:"span",children:["Selected tab is ",n]}),e.jsxs(c,{value:n,onChange:l,title:"Controlled Value Example",children:[e.jsx(t,{value:"one",label:"Option 1",children:e.jsx("div",{style:a,children:"Some content"})}),e.jsx(t,{value:"two",label:"Option 2",children:e.jsx("div",{style:a,children:"Some content 2"})}),e.jsx(t,{value:"three",label:"Option 3",children:e.jsx("div",{style:a,children:"Some content 3"})}),e.jsx(t,{value:"four",label:"Option 4",children:e.jsx("div",{style:a,children:"Some content 4"})})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"WithFooterLink"};m.__docgenInfo={description:"",methods:[],displayName:"WithControlledTabValue"};var f,x,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,E,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,W,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const hn=["Default","WithFooterLink","WithControlledTabValue"];export{d as Default,m as WithControlledTabValue,p as WithFooterLink,hn as __namedExportsOrder,yn as default};
