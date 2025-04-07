import{R as r}from"./index-CV65Cz2T.js";import{HeaderWorldClock as s}from"./index-D-y2gxla.js";import{H as d}from"./Header-j8-U8c_Z.js";import{w as u}from"./appWrappers-DEQOKQwT.js";import"./HeaderLabel-DpK3_O-o.js";import"./makeStyles-Cxuk34qr.js";import"./defaultTheme-CHv1ECbj.js";import"./Grid-HvgAhNFe.js";import"./capitalize-CBqTVJSe.js";import"./withStyles-CGUOUe_W.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./Typography-NDkBZbmD.js";import"./Link-BfNBbUmG.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-V23z6GDy.js";import"./index-BuiljCIz.js";import"./ApiRef-DSSgzaW4.js";import"./typeof-s7CsguQe.js";import"./createSvgIcon-BnHyPT29.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-DNlIgCa0.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./useAnalytics-BvU8z2Qw.js";import"./ConfigApi-BmcvyZGI.js";import"./Helmet-BCx2os5_.js";import"./index-BDlCPcVq.js";import"./Box-D23Jvq3w.js";import"./typography-D7w3JxAw.js";import"./Breadcrumbs-D9zPuW2_.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-Bg8i6G9P.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Popover-B8KTqqKU.js";import"./Modal-D86EtI67.js";import"./classCallCheck-MFKM5G8b.js";import"./Portal-nleYRD7c.js";import"./Paper-BpD1EZ8f.js";import"./Grow-CnZ8nfMO.js";import"./useTheme-BNI3AlVl.js";import"./utils-D85ModYb.js";import"./List-BvPWcVXJ.js";import"./ListContext-DDd8B5Hf.js";import"./ListItem-NLsTpdBy.js";import"./Page-BSv8zjiW.js";import"./useMediaQuery-mmyuBIV8.js";import"./Tooltip-hEEQslY0.js";import"./Popper-DF_8SDXS.js";import"./MockTranslationApi-BJAR8M5M.js";import"./index-DWA0-5lI.js";import"./getPrototypeOf-DN1TrA4w.js";import"./toArray-DPQL1Jn9.js";import"./TranslationApi-BZ5LsqDR.js";import"./WebStorage-DIH418uN.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-Ch1YzSDK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-BkbfiZHS.js";import"./CssBaseline-m8bouuK_.js";import"./ThemeProvider-iIHV8-9e.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const yo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,p,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var l,c,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const Ao=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,Ao as __namedExportsOrder,yo as default};
