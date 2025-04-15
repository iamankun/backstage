import{j as o}from"./jsx-runtime-B1AhRb-V.js";import{L as i,N as R}from"./Link-CPC3fqtu.js";import{R as u,a as d,u as k}from"./index-CMym2nmu.js";import{w as f,a as x}from"./appWrappers-CA1Pmrx5.js";import{u as h}from"./useRouteRef-DZfF4Gng.js";import"./index-CV65Cz2T.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-V23z6GDy.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B8CqyWGr.js";import"./capitalize-BKQXumqD.js";import"./defaultTheme-dorO8Ycy.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./makeStyles-B2ffWluB.js";import"./useAnalytics-y3ZaQqe-.js";import"./ApiRef-DQ_p_ST9.js";import"./ConfigApi-fH7dLXu8.js";import"./Typography-ClGfHewG.js";import"./MockTranslationApi-CfW29P82.js";import"./index-DWA0-5lI.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CeNoR6ST.js";import"./toArray-COxZ3wB-.js";import"./TranslationApi-AbvAvMM-.js";import"./WebStorage-DWjvmso0.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData--aKu5_T4.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-P-n6Z6bh.js";import"./index-BDlCPcVq.js";import"./ThemeProvider-Cal7rCVq.js";import"./CssBaseline-Lx8PNlwq.js";import"./palettes-C1DVN5xY.js";const s=x({id:"storybook.test-route"}),j=()=>{const t=k();return o.jsxs("pre",{children:["Current location: ",t.pathname]})},uo={title:"Navigation/Link",component:i,decorators:[t=>f(o.jsxs("div",{children:[o.jsx("div",{children:o.jsx(j,{})}),o.jsx(t,{})]}),{mountedRoutes:{"/hello":s}})]},e=()=>{const t=h(s);return o.jsxs(o.Fragment,{children:[o.jsx(i,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",o.jsx(u,{children:o.jsx(d,{path:t(),element:o.jsx("h1",{children:"Hi there!"})})})]})},r=()=>{const t=h(s);return o.jsxs(o.Fragment,{children:[o.jsx(i,{to:t(),component:R,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",o.jsx(u,{children:o.jsx(d,{path:t(),element:o.jsx("h1",{children:"Hi there!"})})})]})};r.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"PassProps"};var n,a,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const ho=["Default","PassProps"];export{e as Default,r as PassProps,ho as __namedExportsOrder,uo as default};
