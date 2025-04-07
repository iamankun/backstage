const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealLogViewer-BIT0mECe.js","./useCopyToClipboard-o4EDidou.js","./typeof-s7CsguQe.js","./index-CV65Cz2T.js","./createSvgIcon-BnHyPT29.js","./capitalize-CBqTVJSe.js","./defaultTheme-CHv1ECbj.js","./withStyles-CGUOUe_W.js","./hoist-non-react-statics.cjs-DscmM33_.js","./createChainedFunction-Da-WpsAN.js","./createSvgIcon-DNlIgCa0.js","./debounce-DtXjJkxj.js","./isMuiElement-DG475NJP.js","./ownerWindow-D1FXuRdm.js","./useIsFocusVisible-B2Dvw-Ws.js","./index-V23z6GDy.js","./useControlled-ltvK4nzt.js","./unstable_useId-DsWtIzNz.js","./useMountedState-BG_s6PIB.js","./index-DSEhRz7_.js","./FilterList-D3o9BclW.js","./startCase-Cqbej6tY.js","./_arrayReduce-B24CUDp3.js","./toString-C4GbLIMt.js","./isSymbol-B6IIivl5.js","./upperFirst-Ct_CXT4D.js","./_baseSlice-z0Zd1-Ev.js","./Link-BfNBbUmG.js","./lodash-D2SO6J9k.js","./index-BuiljCIz.js","./ApiRef-DSSgzaW4.js","./makeStyles-Cxuk34qr.js","./useAnalytics-BvU8z2Qw.js","./ConfigApi-BmcvyZGI.js","./Typography-NDkBZbmD.js","./ChevronRight-Bc171oJJ.js","./IconButton-FJ1gklER.js","./ButtonBase-Bg8i6G9P.js","./TransitionGroupContext-C1n1zRT4.js","./TextField--GQNUvo0.js","./FormLabel-DpDotjN3.js","./formControlState-ByiNFc8I.js","./useFormControl-Cf2zJBza.js","./InputLabel-ggNbjBhV.js","./Select-CRgGzp7h.js","./react-is.production.min-D0tnNtx9.js","./useTheme-BNI3AlVl.js","./Popover-B8KTqqKU.js","./Modal-D86EtI67.js","./classCallCheck-MFKM5G8b.js","./Portal-nleYRD7c.js","./Paper-BpD1EZ8f.js","./Grow-CnZ8nfMO.js","./utils-D85ModYb.js","./List-BvPWcVXJ.js","./ListContext-DDd8B5Hf.js","./TranslationApi-BZ5LsqDR.js","./Box-D23Jvq3w.js","./typography-D7w3JxAw.js"])))=>i.map(i=>d[i]);
import{r as s,R as t}from"./index-CV65Cz2T.js";import{_ as n}from"./iframe-BbABe0Cm.js";import{b as l}from"./index-BuiljCIz.js";import{w as c}from"./appWrappers-DEQOKQwT.js";import"./ApiRef-DSSgzaW4.js";import"./typeof-s7CsguQe.js";import"./createSvgIcon-BnHyPT29.js";import"./capitalize-CBqTVJSe.js";import"./defaultTheme-CHv1ECbj.js";import"./withStyles-CGUOUe_W.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-DNlIgCa0.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./MockTranslationApi-BJAR8M5M.js";import"./index-DWA0-5lI.js";import"./classCallCheck-MFKM5G8b.js";import"./getPrototypeOf-DN1TrA4w.js";import"./toArray-DPQL1Jn9.js";import"./TranslationApi-BZ5LsqDR.js";import"./ConfigApi-BmcvyZGI.js";import"./useAnalytics-BvU8z2Qw.js";import"./WebStorage-DIH418uN.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./componentData-Ch1YzSDK.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-BkbfiZHS.js";import"./index-BDlCPcVq.js";import"./CssBaseline-m8bouuK_.js";import"./ThemeProvider-iIHV8-9e.js";import"./jsx-runtime-B1AhRb-V.js";import"./palettes-C1DVN5xY.js";const d=s.lazy(()=>n(()=>import("./RealLogViewer-BIT0mECe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]),import.meta.url).then(e=>({default:e.RealLogViewer})));function o(e){const{Progress:p}=l().getComponents();return t.createElement(s.Suspense,{fallback:t.createElement(p,null)},t.createElement(d,{...e}))}o.__docgenInfo={description:`A component that displays logs in a scrollable text area.

@remarks
The LogViewer has support for search and filtering, as well as displaying
text content with ANSI color escape codes.

Since the LogViewer uses windowing to avoid rendering all contents at once, the
log is sized automatically to fill the available vertical space. This means
it may often be needed to wrap the LogViewer in a container that provides it
with a fixed amount of space.

@public`,methods:[],displayName:"LogViewer",props:{text:{required:!0,tsType:{name:"string"},description:`The text of the logs to display.

The LogViewer component is optimized for appending content at the end of the text.`},classes:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  root?: string;
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}}]}},description:"Styling overrides for classes within the LogViewer component."}}};const et={title:"Data Display/LogViewer",component:o,decorators:[e=>c(t.createElement(e,null))]},u=`Starting up task with 3 steps
Beginning step Fetch Skeleton + Template
\x1B[32minfo\x1B[39m: Fetching template content from remote URL: https://github.com/backstage/software-templates/tree/main/scaffolder-templates/react-ssr-template/skeleton {"timestamp":"2021-12-03T15:47:11.625Z"}
\x1B[32minfo\x1B[39m: Listing files and directories in template {"timestamp":"2021-12-03T15:47:12.797Z"}
\x1B[32minfo\x1B[39m: Processing 33 template files/directories with input values {"component_id":"srnthsrthntrhsn","description":"rnthsrtnhssrthnrsthn","destination":{"host":"github.com","owner":"rtshnsrtmhrstmh","repo":"srtmhsrtmhrsthms"},"owner":"rstnhrstnhsrthn","timestamp":"2021-12-03T15:47:12.801Z"}
\x1B[32minfo\x1B[39m: Writing file .editorconfig to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.816Z"}
\x1B[32minfo\x1B[39m: Writing file .eslintignore to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.818Z"}
\x1B[32minfo\x1B[39m: Writing file .eslintrc.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.820Z"}
\x1B[32minfo\x1B[39m: Writing directory .github/ to template output path. {"timestamp":"2021-12-03T15:47:12.823Z"}
\x1B[32minfo\x1B[39m: Writing file .gitignore to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.824Z"}
\x1B[32minfo\x1B[39m: Writing file README.md to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.827Z"}
\x1B[32minfo\x1B[39m: Writing file babel.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.829Z"}
\x1B[32minfo\x1B[39m: Writing file catalog-info.yaml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.831Z"}
\x1B[32minfo\x1B[39m: Writing directory docs/ to template output path. {"timestamp":"2021-12-03T15:47:12.834Z"}
\x1B[32minfo\x1B[39m: Writing file jest.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.836Z"}
\x1B[32minfo\x1B[39m: Writing file mkdocs.yml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.838Z"}
\x1B[32minfo\x1B[39m: Writing file next-env.d.ts to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.841Z"}
\x1B[32minfo\x1B[39m: Writing file next.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.844Z"}
\x1B[32minfo\x1B[39m: Writing file package.json to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.845Z"}
\x1B[32minfo\x1B[39m: Writing file prettier.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.848Z"}
\x1B[32minfo\x1B[39m: Writing directory public/ to template output path. {"timestamp":"2021-12-03T15:47:12.849Z"}
\x1B[32minfo\x1B[39m: Writing directory src/ to template output path. {"timestamp":"2021-12-03T15:47:12.850Z"}
\x1B[32minfo\x1B[39m: Writing file tsconfig.json to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.851Z"}
\x1B[32minfo\x1B[39m: Writing directory .github/workflows/ to template output path. {"timestamp":"2021-12-03T15:47:12.853Z"}
\x1B[32minfo\x1B[39m: Writing file docs/index.md to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.854Z"}
\x1B[32minfo\x1B[39m: Writing directory public/static/ to template output path. {"timestamp":"2021-12-03T15:47:12.857Z"}
\x1B[32minfo\x1B[39m: Writing directory src/__tests__/ to template output path. {"timestamp":"2021-12-03T15:47:12.858Z"}
\x1B[32minfo\x1B[39m: Writing directory src/components/ to template output path. {"timestamp":"2021-12-03T15:47:12.858Z"}
\x1B[32minfo\x1B[39m: Writing directory src/pages/ to template output path. {"timestamp":"2021-12-03T15:47:12.859Z"}
\x1B[32minfo\x1B[39m: Copying file/directory .github/workflows/build.yml without processing. {"timestamp":"2021-12-03T15:47:12.859Z"}
\x1B[32minfo\x1B[39m: Writing file .github/workflows/build.yml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.860Z"}
\x1B[32minfo\x1B[39m: Writing file public/static/fonts.css to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.861Z"}
\x1B[32minfo\x1B[39m: Writing file src/components/Header.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.863Z"}
\x1B[32minfo\x1B[39m: Writing file src/__tests__/index.test.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.865Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/_app.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.868Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/_document.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.871Z"}
\x1B[32minfo\x1B[39m: Writing directory src/pages/api/ to template output path. {"timestamp":"2021-12-03T15:47:12.873Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/index.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.874Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/api/ping.ts to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.877Z"}
\x1B[32minfo\x1B[39m: Template result written to /var/folders/k6/9s7hd6w17115xlgwnsp0wsbr0000gn/T/5c9f8584-fded-4741-b6ef-46d94ff2cbdb {"timestamp":"2021-12-03T15:47:12.878Z"}
Finished step Fetch Skeleton + Template
Beginning step Publish
HttpError: Not Found
    at /Users/patriko/dev/backstage/node_modules/@octokit/request/dist-node/index.js:86:21
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async Object.handler (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/actions/builtin/publish/github.ts:156:20)
    at async HandlebarsWorkflowRunner.execute (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/HandlebarsWorkflowRunner.ts:254:11)
    at async TaskWorker.runOneTask (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:110:13)
    at async eval (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:100:9)
Run completed with status: failed`,i=()=>t.createElement("div",{style:{height:240}},t.createElement(o,{text:u}));i.__docgenInfo={description:"",methods:[],displayName:"ExampleLogViewer"};var m,r,a;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  height: 240
}}>
    <LogViewer text={exampleLog} />
  </div>`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const it=["ExampleLogViewer"];export{i as ExampleLogViewer,it as __namedExportsOrder,et as default};
