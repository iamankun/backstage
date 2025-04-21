import{j as e}from"./jsx-runtime-B1AhRb-V.js";import{C as t}from"./CodeSnippet-DVj_GxzT.js";import{I as o}from"./InfoCard-BQMYAmUc.js";import"./index-CV65Cz2T.js";import"./iframe-DAgMbO02.js";import"./createSvgIcon-B8CqyWGr.js";import"./capitalize-BKQXumqD.js";import"./defaultTheme-dorO8Ycy.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./objectWithoutProperties-Et-85jJS.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CeNoR6ST.js";import"./toConsumableArray-BEwiObev.js";import"./useTheme-Dmunefpm.js";import"./Box-D_ilMR00.js";import"./typography-Cs1aOEfH.js";import"./CopyTextButton-DX_Ni1_Y.js";import"./useCopyToClipboard-CYpdtXo0.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./useMountedState-BG_s6PIB.js";import"./translation-CdQDl-HS.js";import"./TranslationApi-AbvAvMM-.js";import"./ApiRef-DQ_p_ST9.js";import"./Tooltip-CvCyiOW0.js";import"./Popper-B0nlBGvk.js";import"./Portal-nleYRD7c.js";import"./Grow-jzu4TrlJ.js";import"./utils-BzL8OB8Z.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./IconButton-C1StEALi.js";import"./ButtonBase-BmmJ3DqQ.js";import"./index-DSEhRz7_.js";import"./makeStyles-B2ffWluB.js";import"./CardActions-BQPFvyux.js";import"./CardContent-B5iYBdc5.js";import"./Paper-BZMBdJdO.js";import"./ErrorBoundary-Xuy4zvF1.js";import"./ErrorPanel-6_aQLhTC.js";import"./WarningPanel-BfmYNARB.js";import"./ExpandMore-BrK1WZVt.js";import"./AccordionDetails-Dgmh1IWb.js";import"./toArray-COxZ3wB-.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-DTvmz7EI.js";import"./Typography-ClGfHewG.js";import"./MarkdownContent-fcnyQd3U.js";import"./index-BDlCPcVq.js";import"./Grid-BB-GYNIy.js";import"./List-D3T44CW6.js";import"./ListContext-DDd8B5Hf.js";import"./ListItem-D7qWqnZh.js";import"./ListItemText-Db7RxVPo.js";import"./LinkButton-uFGHIRX6.js";import"./Link-CPC3fqtu.js";import"./lodash-D2SO6J9k.js";import"./index-CMym2nmu.js";import"./useAnalytics-y3ZaQqe-.js";import"./ConfigApi-fH7dLXu8.js";import"./Button-BXP3PAcX.js";import"./CardHeader-DAExE-wZ.js";import"./Divider-BTD3oVXJ.js";import"./BottomLink-DnGqOcPO.js";import"./ArrowForward-DyDxQ18k.js";const Ue={title:"Data Display/CodeSnippet",component:t},l={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,A=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,P=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,i=()=>e.jsx(o,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),s=()=>e.jsx(o,{title:"JavaScript multi-line example",children:e.jsx(t,{text:r,language:"javascript"})}),p=()=>e.jsx(o,{title:"Show line numbers",children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})}),a=()=>e.jsxs(o,{title:"Overflow",children:[e.jsx("div",{style:l,children:e.jsx(t,{text:r,language:"javascript"})}),e.jsx("div",{style:l,children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})})]}),n=()=>e.jsxs(o,{title:"Multiple languages",children:[e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:A,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:P,language:"python",showLineNumbers:!0})]}),m=()=>e.jsx(o,{title:"Copy Code",children:e.jsx(t,{text:r,language:"javascript",showCopyCodeButton:!0})});i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};p.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};a.__docgenInfo={description:"",methods:[],displayName:"Overflow"};n.__docgenInfo={description:"",methods:[],displayName:"Languages"};m.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};var d,c,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,C,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var S,f,h;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,v,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var w,y,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var L,b,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...(_=(b=m.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const Xe=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{m as CopyCode,i as Default,n as Languages,p as LineNumbers,s as MultipleLines,a as Overflow,Xe as __namedExportsOrder,Ue as default};
