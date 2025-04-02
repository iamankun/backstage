import{R as t}from"./index-CV65Cz2T.js";import{L as o}from"./LinkButton-DPLapdeb.js";import{T as i}from"./Typography-ClGfHewG.js";import{L as E}from"./Link-cF2f6PTF.js";import{D as v}from"./Divider-YBHdkOJo.js";import{u as y}from"./index-BuiljCIz.js";import{L}from"./List-D3T44CW6.js";import{L as n}from"./ListItem-D7qWqnZh.js";import{L as l}from"./ListItemText-Db7RxVPo.js";import{B as m}from"./Button-BXP3PAcX.js";import{w as B,a as I}from"./appWrappers-Bpr7p6n0.js";import{u as g}from"./useRouteRef-DpQDGLPk.js";import"./defaultTheme-dorO8Ycy.js";import"./capitalize-BKQXumqD.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-V23z6GDy.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B8CqyWGr.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./makeStyles-B2ffWluB.js";import"./useAnalytics-BvU8z2Qw.js";import"./ApiRef-DSSgzaW4.js";import"./ConfigApi-BmcvyZGI.js";import"./ListContext-DDd8B5Hf.js";import"./ButtonBase-BmmJ3DqQ.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./MockTranslationApi-cJ1q0vu7.js";import"./index-DWA0-5lI.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CeNoR6ST.js";import"./toArray-COxZ3wB-.js";import"./TranslationApi-BZ5LsqDR.js";import"./WebStorage-DIH418uN.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-Ch1YzSDK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-BkbfiZHS.js";import"./index-BDlCPcVq.js";import"./CssBaseline-Lx8PNlwq.js";import"./ThemeProvider-Cal7rCVq.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const s=I({id:"storybook.test-route"}),b=()=>{const e=y();return t.createElement("pre",null,"Current location: ",e.pathname)},Tt={title:"Inputs/Button",component:o,decorators:[e=>B(t.createElement(t.Fragment,null,t.createElement(i,null,"A collection of buttons that should be used in the Backstage interface. These leverage the properties inherited from"," ",t.createElement(E,{to:"https://material-ui.com/components/buttons/"},"Material UI Button"),", but include an opinionated set that align to the Backstage design."),t.createElement(v,null),t.createElement("div",null,t.createElement("div",null,t.createElement(b,null)),t.createElement(e,null))),{mountedRoutes:{"/hello":s}})]},r=()=>{const e=g(s);return t.createElement(L,null,t.createElement(n,null,t.createElement(l,null,t.createElement(i,{variant:"h6"},"Default Button:"),"This is the default button design which should be used in most cases.",t.createElement("br",null),t.createElement("pre",null,'color="primary" variant="contained"')),t.createElement(o,{to:e(),color:"primary",variant:"contained"},"Register Component")),t.createElement(n,null,t.createElement(l,null,t.createElement(i,{variant:"h6"},"Secondary Button:"),"Used for actions that cancel, skip, and in general perform negative functions, etc.",t.createElement("br",null),t.createElement("pre",null,'color="secondary" variant="contained"')),t.createElement(o,{to:e(),color:"secondary",variant:"contained"},"Cancel")),t.createElement(n,null,t.createElement(l,null,t.createElement(i,{variant:"h6"},"Tertiary Button:"),"Used commonly in a ButtonGroup and when the button function itself is not a primary function on a page.",t.createElement("br",null),t.createElement("pre",null,'color="default" variant="outlined"')),t.createElement(o,{to:e(),color:"default",variant:"outlined"},"View Details")))},a=()=>{const e=g(s),k=()=>"Your click worked!";return t.createElement(t.Fragment,null,t.createElement(L,null,t.createElement(n,null,t.createElement(o,{to:e(),color:"default",variant:"outlined"},"Route Ref"),"  has props for both Material UI's component as well as for react-router-dom's Route object."),t.createElement(n,null,t.createElement(o,{to:"/staticpath",color:"default",variant:"outlined"},"Static Path"),"  links to a statically defined route. In general, this should be avoided."),t.createElement(n,null,t.createElement(m,{href:"https://backstage.io",color:"default",variant:"outlined"},"View URL"),"  links to a defined URL using Material UI's Button."),t.createElement(n,null,t.createElement(m,{onClick:k,color:"default",variant:"outlined"},"Trigger Event"),"  triggers an onClick event using Material UI's Button.")))};r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"ButtonLinks"};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  // Design Permutations:
  // color   = default | primary | secondary
  // variant = contained | outlined | text
  return <List>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Default Button:</Typography>
          This is the default button design which should be used in most cases.
          <br />
          <pre>color="primary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="primary" variant="contained">
          Register Component
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Secondary Button:</Typography>
          Used for actions that cancel, skip, and in general perform negative
          functions, etc.
          <br />
          <pre>color="secondary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="secondary" variant="contained">
          Cancel
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Tertiary Button:</Typography>
          Used commonly in a ButtonGroup and when the button function itself is
          not a primary function on a page.
          <br />
          <pre>color="default" variant="outlined"</pre>
        </ListItemText>

        <LinkButton to={link()} color="default" variant="outlined">
          View Details
        </LinkButton>
      </ListItem>
    </List>;
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  const handleClick = () => {
    return 'Your click worked!';
  };
  return <>
      <List>
        {
        // TODO: Refactor to use new routing mechanisms
      }
        <ListItem>
          <LinkButton to={link()} color="default" variant="outlined">
            Route Ref
          </LinkButton>
          &nbsp; has props for both Material UI's component as well as for
          react-router-dom's Route object.
        </ListItem>

        <ListItem>
          <LinkButton to="/staticpath" color="default" variant="outlined">
            Static Path
          </LinkButton>
          &nbsp; links to a statically defined route. In general, this should be
          avoided.
        </ListItem>

        <ListItem>
          <MaterialButton href="https://backstage.io" color="default" variant="outlined">
            View URL
          </MaterialButton>
          &nbsp; links to a defined URL using Material UI's Button.
        </ListItem>

        <ListItem>
          <MaterialButton onClick={handleClick} color="default" variant="outlined">
            Trigger Event
          </MaterialButton>
          &nbsp; triggers an onClick event using Material UI's Button.
        </ListItem>
      </List>
    </>;
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const wt=["Default","ButtonLinks"];export{a as ButtonLinks,r as Default,wt as __namedExportsOrder,Tt as default};
