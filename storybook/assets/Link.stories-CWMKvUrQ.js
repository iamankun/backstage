import{R as e}from"./index-CTjT7uj6.js";import{L as n,N as R}from"./Link-Cc6AWI2O.js";import{R as u,a as d,u as k}from"./index-CNMBxS8v.js";import{w as f,a as E}from"./appWrappers-WNR3qPM7.js";import{u as h}from"./useRouteRef-CVI83Ox1.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-DwHHXP4W.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-rCELOQ8q.js";import"./capitalize-CjHL08xv.js";import"./defaultTheme-U8IXQtr7.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAWH9WqG.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-BQk2_Vhe.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./makeStyles-3WuthtJ7.js";import"./useAnalytics-Dmj0Ntiu.js";import"./ApiRef-DUoQ5WvO.js";import"./ConfigApi-BZwRYjFH.js";import"./Typography-CUBppVl0.js";import"./MockTranslationApi-1jo2KCqo.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-Cm41Z5uw.js";import"./toArray-QeYAVC82.js";import"./TranslationApi-TmuXcaNh.js";import"./WebStorage-D9doizkM.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-BzTcs2ef.js";import"./isSymbol-C_KZXW2d.js";import"./isObject-DlTwUI3n.js";import"./toString-B79bsZRM.js";import"./ApiProvider-D8NVuZ3M.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-B78aEvSr.js";import"./ThemeProvider-HGIy1WSf.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-C1DVN5xY.js";const i=E({id:"storybook.test-route"}),L=()=>{const t=k();return e.createElement("pre",null,"Current location: ",t.pathname)},ue={title:"Navigation/Link",component:n,decorators:[t=>f(e.createElement("div",null,e.createElement("div",null,e.createElement(L,null)),e.createElement(t,null)),{mountedRoutes:{"/hello":i}})]},r=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t()},"This link")," will utilize the react-router MemoryRouter's navigation",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))},o=()=>{const t=h(i);return e.createElement(e.Fragment,null,e.createElement(n,{to:t(),component:R,color:"secondary"},"This link")," has props for both material-ui's component as well as for react-router-dom's",e.createElement(u,null,e.createElement(d,{path:t(),element:e.createElement("h1",null,"Hi there!")})))};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};var a,m,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
