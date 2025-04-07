import{r as D,R as e}from"./index-CV65Cz2T.js";import{d as E}from"./Close-CfG8T0j8.js";import{D as i}from"./Drawer-l5OeuT3U.js";import{m as w}from"./makeStyles-CkJZxfhX.js";import{B as o}from"./Button-MxgjmgAV.js";import{c as g}from"./createStyles-Bp4GwXob.js";import{T as h}from"./Typography-DFGLiOLt.js";import{I as C}from"./IconButton-C69Lr5le.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./useTheme-CyYT1vdA.js";import"./Paper-Ra1TVF2W.js";import"./Modal-Cy1ULzPm.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Backdrop-B3l4JWfv.js";import"./utils-vtCpIZas.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./ButtonBase-ndPFvxP-.js";import"./createStyles-yD3y8ldD.js";const te={title:"Layout/Drawer",component:i},f=w(t=>g({paper:{width:"50%",justifyContent:"space-between",padding:t.spacing(2.5)}})),S=w(t=>g({header:{display:"flex",flexDirection:"row",justifyContent:"space-between"},icon:{fontSize:20},content:{height:"80%",backgroundColor:"#EEEEEE"},secondaryAction:{marginLeft:t.spacing(2.5)}})),y=({toggleDrawer:t})=>{const r=S();return e.createElement(e.Fragment,null,e.createElement("div",{className:r.header},e.createElement(h,{variant:"h5"},"Side Panel Title"),e.createElement(C,{key:"dismiss",title:"Close the drawer",onClick:()=>t(!1),color:"inherit"},e.createElement(E,{className:r.icon}))),e.createElement("div",{className:r.content}),e.createElement("div",null,e.createElement(o,{variant:"contained",color:"primary",onClick:()=>t(!1)},"Primary Action"),e.createElement(o,{className:r.secondaryAction,variant:"outlined",color:"primary",onClick:()=>t(!1)},"Secondary Action")))},a=()=>{const[t,r]=D.useState(!1),s=f();return e.createElement(e.Fragment,null,e.createElement(o,{variant:"contained",color:"primary",onClick:()=>r(!0)},"Open Default Drawer"),e.createElement(i,{classes:{paper:s.paper},anchor:"right",open:t,onClose:()=>r(!1)},e.createElement(y,{toggleDrawer:r})))},n=()=>{const[t,r]=D.useState(!1),s=f();return e.createElement(e.Fragment,null,e.createElement(o,{variant:"contained",color:"primary",onClick:()=>r(!0)},"Open Persistent Drawer"),e.createElement(i,{classes:{paper:s.paper},variant:"persistent",anchor:"right",open:t,onClose:()=>r(!1)},e.createElement(y,{toggleDrawer:r})))};a.__docgenInfo={description:"",methods:[],displayName:"DefaultDrawer"};n.__docgenInfo={description:"",methods:[],displayName:"PersistentDrawer"};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, toggleDrawer] = useState(false);
  const classes = useDrawerStyles();
  return <>
      <Button variant="contained" color="primary" onClick={() => toggleDrawer(true)}>
        Open Default Drawer
      </Button>
      <Drawer classes={{
      paper: classes.paper
    }} anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </>;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, toggleDrawer] = useState(false);
  const classes = useDrawerStyles();
  return <>
      <Button variant="contained" color="primary" onClick={() => toggleDrawer(true)}>
        Open Persistent Drawer
      </Button>
      <Drawer classes={{
      paper: classes.paper
    }} variant="persistent" anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </>;
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ae=["DefaultDrawer","PersistentDrawer"];export{a as DefaultDrawer,n as PersistentDrawer,ae as __namedExportsOrder,te as default};
