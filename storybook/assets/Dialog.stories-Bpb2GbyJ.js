import{R as e}from"./index-CV65Cz2T.js";import{d as c}from"./Close-BNjnwptf.js";import{D as s,a as p,b as u,c as y}from"./DialogTitle-BPtKoO99.js";import{m as g}from"./makeStyles-Cxuk34qr.js";import{I as d}from"./IconButton-FJ1gklER.js";import{T as t}from"./Typography-NDkBZbmD.js";import{B as r}from"./Button-BZk-RrCv.js";import{c as h}from"./createStyles-Bp4GwXob.js";import"./typeof-s7CsguQe.js";import"./createSvgIcon-BnHyPT29.js";import"./capitalize-CBqTVJSe.js";import"./defaultTheme-CHv1ECbj.js";import"./withStyles-CGUOUe_W.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-DNlIgCa0.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./Modal-D86EtI67.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-nleYRD7c.js";import"./Backdrop-vg8UMxxT.js";import"./useTheme-BNI3AlVl.js";import"./utils-D85ModYb.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Paper-BpD1EZ8f.js";import"./ButtonBase-Bg8i6G9P.js";import"./createStyles-yD3y8ldD.js";const Y={title:"Layout/Dialog",component:s},T=g(o=>h({closeButton:{position:"absolute",right:o.spacing(1),top:o.spacing(1),color:o.palette.grey[500]}})),n={args:{open:!0},render:({open:o})=>{const m=T();return e.createElement(s,{"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",open:o},e.createElement(p,{id:"dialog-title"},"Dialog Box Title",e.createElement(d,{"aria-label":"close",className:m.closeButton},e.createElement(c,null))),e.createElement(u,null,e.createElement(t,null,"This component is used whenever confirmation of some sort is needed, such as:"),e.createElement("ul",null,e.createElement("li",null,e.createElement(t,null,"Consent to sensitive matters like GDPR, access, etc;")),e.createElement("li",null,e.createElement(t,null,"Save, submit, cancel after a form is completed;")),e.createElement("li",null,e.createElement(t,null,"Alert message;")),e.createElement("li",null,e.createElement(t,null,"Buttons are optional."))),e.createElement(t,null,"The color for the secondary button is the same as the primary.")),e.createElement(y,null,e.createElement(r,{color:"primary"},"Secondary action"),e.createElement(r,{color:"primary"},"Primary action")))}};var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: ({
    open
  }: {
    open: boolean;
  }) => {
    const classes = styles();
    return <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open}>
        <DialogTitle id="dialog-title">
          Dialog Box Title
          <IconButton aria-label="close" className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            This component is used whenever confirmation of some sort is needed,
            such as:
          </Typography>
          <ul>
            <li>
              <Typography>
                Consent to sensitive matters like GDPR, access, etc;
              </Typography>
            </li>
            <li>
              <Typography>
                Save, submit, cancel after a form is completed;
              </Typography>
            </li>
            <li>
              <Typography>Alert message;</Typography>
            </li>
            <li>
              <Typography>Buttons are optional.</Typography>
            </li>
          </ul>
          <Typography>
            The color for the secondary button is the same as the primary.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Secondary action</Button>
          <Button color="primary">Primary action</Button>
        </DialogActions>
      </Dialog>;
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
