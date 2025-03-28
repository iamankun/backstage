import{i as P}from"./interopRequireDefault-Y9pwbXtE.js";import{r as x,i as v}from"./createSvgIcon-rCELOQ8q.js";import{r as E,R as e}from"./index-CTjT7uj6.js";import{d as I}from"./ExpandMore-DJEUZydb.js";import{B as a,H as C}from"./Header-CjMMpFaC.js";import{M as b}from"./index-CNMBxS8v.js";import{T as r}from"./Typography-CUBppVl0.js";import{P as B}from"./Page-B2bQoyFc.js";import{L as t}from"./Link-Cc6AWI2O.js";import{B as S}from"./Box-BZcLdGyY.js";import{P as _}from"./Popover-BpMibsVW.js";import{L as w}from"./List-BslH4zsa.js";import{L as l}from"./ListItem-CyYoKKrc.js";import"./capitalize-CjHL08xv.js";import"./defaultTheme-U8IXQtr7.js";import"./withStyles-Dj_puyu8.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-CAWH9WqG.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-B_4ddUuK.js";import"./ownerWindow-C3iVrxHF.js";import"./useIsFocusVisible-BQk2_Vhe.js";import"./index-DwHHXP4W.js";import"./useControlled-B47E2WMp.js";import"./unstable_useId-B3Hiq1YI.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./makeStyles-3WuthtJ7.js";import"./Grid-Cd4CaOSn.js";import"./Breadcrumbs-IJkrpWqF.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DlC9xQ0T.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Page-DAFenuIC.js";import"./ApiRef-DUoQ5WvO.js";import"./ConfigApi-BZwRYjFH.js";import"./useMediaQuery-DtB-IR2v.js";import"./Tooltip-D1xsFmJ6.js";import"./useTheme-hfNS2WFw.js";import"./Popper-CRCF8N5R.js";import"./Portal-BcgI5KAA.js";import"./Grow-Bw-3CPgf.js";import"./utils-ClB-4IsE.js";import"./index-Cqve-NHl.js";import"./ThemeProvider-HGIy1WSf.js";import"./lodash-CoGan1YB.js";import"./useAnalytics-Dmj0Ntiu.js";import"./typography-hVTC7Hfk.js";import"./Modal-CkYXz1UB.js";import"./classCallCheck-BNzALLS0.js";import"./Paper-BZKq1osr.js";import"./ListContext-DydK1sOh.js";var i={},R=P,H=v;Object.defineProperty(i,"__esModule",{value:!0});var L=i.default=void 0,M=H(E),O=R(x()),A=(0,O.default)(M.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");L=i.default=A;const Ae={title:"Layout/Breadcrumbs",component:a},o=()=>e.createElement(b,null,e.createElement("h2",null,"Standard breadcrumbs"),e.createElement(r,{paragraph:!0},"Underlined pages are links. This should show a hierarchical relationship."),e.createElement(B,{themeId:"other"},e.createElement(C,{title:"Current Page",type:"General Page",typeLink:"/"}))),n=()=>{const[p,s]=e.useState(null),f=k=>{s(k.currentTarget)},T=()=>{s(null)},m=!!p;return e.createElement(b,null,e.createElement(r,{paragraph:!0},"It might be the case that you want to keep your breadcrumbs outside of the header. In that case, they should be positioned above the title of the page."),e.createElement("h2",null,"Standard breadcrumbs"),e.createElement(r,{paragraph:!0},"Underlined pages are links. This should show a hierarchical relationship."),e.createElement(a,{color:"primaryText"}),e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/"},"Second Page"),e.createElement(r,null,"Current page")),e.createElement("h2",null,"Hidden breadcrumbs"),e.createElement(r,{paragraph:!0},"Use this when you have more than three breadcrumbs. When user clicks on ellipses, expand the breadcrumbs out."),e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/"},"Second Page"),e.createElement(t,{to:"/"},"Third Page"),e.createElement(t,{to:"/"},"Fourth Page"),e.createElement(r,null,"Current page")),e.createElement("h2",null,"Layered breadcrumbs"),e.createElement(r,{paragraph:!0},"Use this when you want to show alternative breadcrumbs on the same hierarchical level."),e.createElement(E.Fragment,null,e.createElement(a,{color:"primaryText"},e.createElement(t,{to:"/"},"General Page"),e.createElement(t,{to:"/",onClick:f},e.createElement(S,{display:"flex",alignItems:"center"},e.createElement(r,{component:"span"},"Second Page"),m?e.createElement(L,null):e.createElement(I,null))),e.createElement(r,null,"Current page")),e.createElement(_,{open:m,onClose:T,anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.createElement(w,null,e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Parallel second page"),e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Another parallel second page"),e.createElement(l,{button:!0,style:{textDecoration:"underline"}},"Yet another, parallel second page")))))};o.__docgenInfo={description:"",methods:[],displayName:"InHeader"};n.__docgenInfo={description:"",methods:[],displayName:"OutsideOfHeader"};var c,h,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <MemoryRouter>
    <h2>Standard breadcrumbs</h2>
    <Typography paragraph>
      Underlined pages are links. This should show a hierarchical relationship.
    </Typography>

    <Page themeId="other">
      <Header title="Current Page" type="General Page" typeLink="/" />
    </Page>
  </MemoryRouter>`,...(d=(h=o.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return <MemoryRouter>
      <Typography paragraph>
        It might be the case that you want to keep your breadcrumbs outside of
        the header. In that case, they should be positioned above the title of
        the page.
      </Typography>

      <h2>Standard breadcrumbs</h2>
      <Typography paragraph>
        Underlined pages are links. This should show a hierarchical
        relationship.
      </Typography>

      <Breadcrumbs color="primaryText" />

      <Breadcrumbs color="primaryText">
        <Link to="/">General Page</Link>
        <Link to="/">Second Page</Link>
        <Typography>Current page</Typography>
      </Breadcrumbs>

      <h2>Hidden breadcrumbs</h2>
      <Typography paragraph>
        Use this when you have more than three breadcrumbs. When user clicks on
        ellipses, expand the breadcrumbs out.
      </Typography>

      <Breadcrumbs color="primaryText">
        <Link to="/">General Page</Link>
        <Link to="/">Second Page</Link>
        <Link to="/">Third Page</Link>
        <Link to="/">Fourth Page</Link>
        <Typography>Current page</Typography>
      </Breadcrumbs>

      <h2>Layered breadcrumbs</h2>
      <Typography paragraph>
        Use this when you want to show alternative breadcrumbs on the same
        hierarchical level.
      </Typography>

      <Fragment>
        <Breadcrumbs color="primaryText">
          <Link to="/">General Page</Link>
          <Link to="/" onClick={handleClick}>
            <Box display="flex" alignItems="center">
              <Typography component="span">Second Page</Typography>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
          </Link>
          <Typography>Current page</Typography>
        </Breadcrumbs>
        <Popover open={open} onClose={handleClose} anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
          <List>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Parallel second page
            </ListItem>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Another parallel second page
            </ListItem>
            <ListItem button style={{
            textDecoration: 'underline'
          }}>
              Yet another, parallel second page
            </ListItem>
          </List>
        </Popover>
      </Fragment>
    </MemoryRouter>;
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const De=["InHeader","OutsideOfHeader"];export{o as InHeader,n as OutsideOfHeader,De as __namedExportsOrder,Ae as default};
