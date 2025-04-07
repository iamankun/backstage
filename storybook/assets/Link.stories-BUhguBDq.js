import{R as e}from"./index-CV65Cz2T.js";import{L as n,N as R}from"./Link-DO8PRcPs.js";import{R as u,a as d,u as k}from"./index-BuiljCIz.js";import{w as f,a as E}from"./appWrappers-Ppg29Vuh.js";import{u as h}from"./useRouteRef-DpQDGLPk.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-V23z6GDy.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./makeStyles-CkJZxfhX.js";import"./useAnalytics-BvU8z2Qw.js";import"./ApiRef-DSSgzaW4.js";import"./ConfigApi-BmcvyZGI.js";import"./Typography-DFGLiOLt.js";import"./MockTranslationApi-B8Zh48wh.js";import"./index-DWA0-5lI.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CkEHJ8Ip.js";import"./toArray-CoXhHPie.js";import"./TranslationApi-BZ5LsqDR.js";import"./WebStorage-DIH418uN.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-Ch1YzSDK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-BkbfiZHS.js";import"./index-BDlCPcVq.js";import"./CssBaseline-D5AXl3S9.js";import"./ThemeProvider-UKwvVYMA.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const i=E({id:"storybook.test-route"}),L=()=>{const t=k();return e.createElement("pre",null,"Current location: ",t.pathname)},ue={title:"Navigation/Link",component:n,decorators:[t=>f(e.createElement("div",null,e.createElement("div",null,e.createElement(L,null)),e.createElement(t,null)),{mountedRoutes:{"/hello":i}})]},r=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t()},"This link")," will utilize the react-router MemoryRouter's navigation",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))},o=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t(),component:R,color:"secondary"},"This link")," has props for both material-ui's component as well as for react-router-dom's",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};var a,m,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}
    /** react-router-dom related prop */ component={RouterNavLink}
    /** material-ui related prop */ color="secondary">
        This link
      </Link>
      &nbsp;has props for both material-ui's component as well as for
      react-router-dom's
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const de=["Default","PassProps"];export{r as Default,o as PassProps,de as __namedExportsOrder,ue as default};
