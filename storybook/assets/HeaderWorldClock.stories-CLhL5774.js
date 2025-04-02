import{R as r}from"./index-CV65Cz2T.js";import{HeaderWorldClock as s}from"./index-Bss9M2gW.js";import{H as d}from"./Header-DyH5Q84X.js";import{w as u}from"./appWrappers-Bpr7p6n0.js";import"./HeaderLabel-BdtO38sh.js";import"./makeStyles-B2ffWluB.js";import"./defaultTheme-dorO8Ycy.js";import"./Grid-BB-GYNIy.js";import"./capitalize-BKQXumqD.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./Typography-ClGfHewG.js";import"./Link-cF2f6PTF.js";import"./index-DSEhRz7_.js";import"./lodash-D2SO6J9k.js";import"./index-V23z6GDy.js";import"./index-BuiljCIz.js";import"./ApiRef-DSSgzaW4.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B8CqyWGr.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./useAnalytics-BvU8z2Qw.js";import"./ConfigApi-BmcvyZGI.js";import"./Helmet-BCx2os5_.js";import"./index-BDlCPcVq.js";import"./Box-D_ilMR00.js";import"./typography-Cs1aOEfH.js";import"./Breadcrumbs-K4wPtR5f.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-BmmJ3DqQ.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Popover-CBgFdLcm.js";import"./Modal-oVOw44lR.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Paper-BZMBdJdO.js";import"./Grow-jzu4TrlJ.js";import"./useTheme-Dmunefpm.js";import"./utils-BzL8OB8Z.js";import"./List-D3T44CW6.js";import"./ListContext-DDd8B5Hf.js";import"./ListItem-D7qWqnZh.js";import"./Page-Bm9nZm5s.js";import"./useMediaQuery-BW3FoXen.js";import"./Tooltip-CvCyiOW0.js";import"./Popper-B0nlBGvk.js";import"./MockTranslationApi-cJ1q0vu7.js";import"./index-DWA0-5lI.js";import"./inherits-CeNoR6ST.js";import"./toArray-COxZ3wB-.js";import"./TranslationApi-BZ5LsqDR.js";import"./WebStorage-DIH418uN.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-Ch1YzSDK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-BkbfiZHS.js";import"./CssBaseline-Lx8PNlwq.js";import"./ThemeProvider-Cal7rCVq.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const yo={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,p,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
