import{R as e,r as l}from"./index-CV65Cz2T.js";import{M as G,a as J,S as K,b as Q}from"./StepLabel-Httx70Uu.js";import{u as k,c as T}from"./translation-CnlFI5r0.js";import{m as j}from"./makeStyles-B2ffWluB.js";import{B as A}from"./Box-D_ilMR00.js";import{B as q}from"./Button-BXP3PAcX.js";import{T as N}from"./Typography-ClGfHewG.js";import{T as U}from"./TextField-DASPyH1c.js";import"./defaultTheme-dorO8Ycy.js";import"./capitalize-BKQXumqD.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./Paper-BZMBdJdO.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-DTvmz7EI.js";import"./utils-BzL8OB8Z.js";import"./index-V23z6GDy.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./useTheme-Dmunefpm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./createSvgIcon-BE9FbSc8.js";import"./TranslationApi-BZ5LsqDR.js";import"./ApiRef-DSSgzaW4.js";import"./typography-Cs1aOEfH.js";import"./ButtonBase-BmmJ3DqQ.js";import"./ownerWindow-D1FXuRdm.js";import"./FormLabel-ZM__TfMd.js";import"./formControlState-ByiNFc8I.js";import"./isMuiElement-DG475NJP.js";import"./useFormControl-Cf2zJBza.js";import"./InputLabel-TJ3WLnKL.js";import"./Select-DgzZcFF3.js";import"./Popover-CBgFdLcm.js";import"./debounce-DtXjJkxj.js";import"./createChainedFunction-Da-WpsAN.js";import"./Modal-oVOw44lR.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Grow-jzu4TrlJ.js";import"./List-D3T44CW6.js";import"./ListContext-DDd8B5Hf.js";import"./useControlled-ltvK4nzt.js";const w=()=>{},Y=e.createContext({stepperLength:0,stepIndex:0,setStepIndex:w,stepHistory:[],setStepHistory:w,onStepChange:w});function g(t){const{children:r,elevated:i,onStepChange:a,activeStep:n=0}=t,[p,o]=l.useState(n),v=Array.from({length:n+1},(m,u)=>u),[x,f]=l.useState(v);l.useEffect(()=>{o(n)},[n]);const y=[];let b;return l.Children.forEach(r,m=>{l.isValidElement(m)&&(m.props.end?b=m:y.push(m))}),e.createElement(e.Fragment,null,e.createElement(Y.Provider,{value:{stepIndex:p,setStepIndex:o,stepHistory:x,setStepHistory:f,onStepChange:a,stepperLength:l.Children.count(r)}},e.createElement(G,{activeStep:p,orientation:"vertical",elevation:i?2:0},y)),p>=l.Children.count(r)-1&&b)}g.__docgenInfo={description:"",methods:[],displayName:"SimpleStepper",props:{elevated:{required:!1,tsType:{name:"boolean"},description:""},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(prevIndex: number, nextIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"prevIndex"},{type:{name:"number"},name:"nextIndex"}],return:{name:"void"}}},description:""},activeStep:{required:!1,tsType:{name:"number"},description:""}}};const W=j(t=>({root:{marginTop:t.spacing(3),"& button":{marginRight:t.spacing(1)}}}),{name:"BackstageSimpleStepperFooter"}),z=({text:t,handleClick:r})=>{const{t:i}=k(T);return e.createElement(q,{onClick:r},t||i("simpleStepper.reset"))},X=({text:t,handleClick:r,disabled:i,last:a,stepIndex:n})=>{const{t:p}=k(T);return e.createElement(q,{variant:"contained",color:"primary",disabled:i,"data-testid":`nextButton-${n}`,onClick:r},t||p(a?"simpleStepper.finish":"simpleStepper.next"))},Z=({text:t,handleClick:r,disabled:i,stepIndex:a})=>{const{t:n}=k(T);return e.createElement(q,{variant:"outlined",color:"primary",disabled:i,"data-testid":`skipButton-${a}`,onClick:r},t||n("simpleStepper.skip"))},ee=({text:t,handleClick:r,disabled:i,stepIndex:a})=>{const{t:n}=k(T);return e.createElement(q,{onClick:r,"data-testid":`backButton-${a}`,disabled:i},t||n("simpleStepper.back"))},I=({actions:t={},children:r})=>{const i=W(),{stepperLength:a,stepIndex:n,setStepIndex:p,stepHistory:o,setStepHistory:v,onStepChange:x}=l.useContext(Y),f=(u,C)=>{C&&C(),x&&x(n,u),p(u)},y=()=>{const u=t.nextStep?t.nextStep(n,a-1):n+1;f(u,t.onNext),v([...o,u])},b=()=>{o.pop(),f(o[o.length-1],t.onBack),v([...o])},m=()=>{f(0,t.onRestart),v([0])};return e.createElement(A,{className:i.root},[void 0,!0].includes(t.showBack)&&n!==0&&e.createElement(ee,{text:t.backText,handleClick:b,disabled:n===0,stepIndex:n}),t.showSkip&&e.createElement(Z,{text:t.skipText,handleClick:y,disabled:!!a&&n>=a||!!t.canSkip&&!t.canSkip(),stepIndex:n}),[void 0,!0].includes(t.showNext)&&e.createElement(X,{text:t.nextText,handleClick:y,disabled:!!a&&n>=a||!!t.canNext&&!t.canNext(),stepIndex:n}),t.showRestart&&n!==0&&e.createElement(z,{text:t.restartText,handleClick:m,stepIndex:n}),r)};z.__docgenInfo={description:"",methods:[],displayName:"RestartBtn",props:{text:{required:!1,tsType:{name:"string"},description:""},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},stepIndex:{required:!0,tsType:{name:"number"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"SimpleStepperFooter",props:{actions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  showNext?: boolean;
  canNext?: () => boolean;
  onNext?: () => void;
  nextStep?: (current: number, last: number) => number;
  nextText?: string;

  showBack?: boolean;
  backText?: string;
  onBack?: () => void;

  showRestart?: boolean;
  canRestart?: () => boolean;
  onRestart?: () => void;
  restartText?: string;

  showSkip?: boolean;
  canSkip?: () => boolean;
  onSkip?: () => void;
  skipText?: string;
}`,signature:{properties:[{key:"showNext",value:{name:"boolean",required:!1}},{key:"canNext",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onNext",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"nextStep",value:{name:"signature",type:"function",raw:"(current: number, last: number) => number",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"last"}],return:{name:"number"}},required:!1}},{key:"nextText",value:{name:"string",required:!1}},{key:"showBack",value:{name:"boolean",required:!1}},{key:"backText",value:{name:"string",required:!1}},{key:"onBack",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"showRestart",value:{name:"boolean",required:!1}},{key:"canRestart",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onRestart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"restartText",value:{name:"string",required:!1}},{key:"showSkip",value:{name:"boolean",required:!1}},{key:"canSkip",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onSkip",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"skipText",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const te=j(t=>({end:{padding:t.spacing(3)}}),{name:"SimpleStepperStep"});function s(t){const{title:r,children:i,end:a,actions:n,...p}=t,o=te();return a?e.createElement(A,{className:o.end},e.createElement(N,{variant:"h6"},r),i,e.createElement(I,{actions:{...n||{},showNext:!1}})):e.createElement(J,{...p},e.createElement(K,null,e.createElement(N,{variant:"h6"},r)),e.createElement(Q,null,i,e.createElement(I,{actions:n})))}s.__docgenInfo={description:"",methods:[],displayName:"SimpleStepperStep",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},end:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  showNext?: boolean;
  canNext?: () => boolean;
  onNext?: () => void;
  nextStep?: (current: number, last: number) => number;
  nextText?: string;

  showBack?: boolean;
  backText?: string;
  onBack?: () => void;

  showRestart?: boolean;
  canRestart?: () => boolean;
  onRestart?: () => void;
  restartText?: string;

  showSkip?: boolean;
  canSkip?: () => boolean;
  onSkip?: () => void;
  skipText?: string;
}`,signature:{properties:[{key:"showNext",value:{name:"boolean",required:!1}},{key:"canNext",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onNext",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"nextStep",value:{name:"signature",type:"function",raw:"(current: number, last: number) => number",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"last"}],return:{name:"number"}},required:!1}},{key:"nextText",value:{name:"string",required:!1}},{key:"showBack",value:{name:"boolean",required:!1}},{key:"backText",value:{name:"string",required:!1}},{key:"onBack",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"showRestart",value:{name:"boolean",required:!1}},{key:"canRestart",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onRestart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"restartText",value:{name:"string",required:!1}},{key:"showSkip",value:{name:"boolean",required:!1}},{key:"canSkip",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"onSkip",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"skipText",value:{name:"string",required:!1}}]}},description:""}}};const Ye={title:"Navigation/SimpleStepper",component:g},E={elevated:!1,activeStep:0},c=t=>e.createElement(g,{...t},e.createElement(s,{title:"Step 1"},e.createElement("div",null,"This is the content for step 1")),e.createElement(s,{title:"Step 2"},e.createElement("div",null,"This is the content for step 2")),e.createElement(s,{title:"Step 3"},e.createElement("div",null,"This is the content for step 3")));c.args=E;const d=t=>{const[r,i]=l.useState(!1);return e.createElement(g,{...t},e.createElement(s,{title:"Step 1 with required field",actions:{canNext:()=>r}},e.createElement(U,{variant:"outlined",placeholder:"Required*",onChange:a=>i(!!a.target.value)})),e.createElement(s,{title:"Step 2"},e.createElement("div",null,"This is the content for step 2")),e.createElement(s,{title:"Step 3"},e.createElement("div",null,"This is the content for step 3")))};d.args=E;const S=t=>e.createElement(g,{...t},e.createElement(s,{title:"Step 1"},e.createElement("div",null,"This is the content for step 1")),e.createElement(s,{title:"Step 2"},e.createElement("div",null,"This is the content for step 2")),e.createElement(s,{title:"Success!",end:!0},e.createElement("div",null,"You've completed the Stepper")));S.args=E;const h=t=>e.createElement(g,{...t},e.createElement(s,{title:"Step 1 (Optional)",actions:{showSkip:!0}},e.createElement("div",null,"This is the content for step 1")),e.createElement(s,{title:"Step 2"},e.createElement("div",null,"This is the content for step 2")));d.args=E;c.__docgenInfo={description:"",methods:[],displayName:"Default",props:{elevated:{required:!1,tsType:{name:"boolean"},description:""},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(prevIndex: number, nextIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"prevIndex"},{type:{name:"number"},name:"nextIndex"}],return:{name:"void"}}},description:""},activeStep:{required:!1,tsType:{name:"number"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"ConditionalButtons",props:{elevated:{required:!1,tsType:{name:"boolean"},description:""},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(prevIndex: number, nextIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"prevIndex"},{type:{name:"number"},name:"nextIndex"}],return:{name:"void"}}},description:""},activeStep:{required:!1,tsType:{name:"number"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"CompletionStep",props:{elevated:{required:!1,tsType:{name:"boolean"},description:""},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(prevIndex: number, nextIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"prevIndex"},{type:{name:"number"},name:"nextIndex"}],return:{name:"void"}}},description:""},activeStep:{required:!1,tsType:{name:"number"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"OptionalStep",props:{elevated:{required:!1,tsType:{name:"boolean"},description:""},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(prevIndex: number, nextIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"prevIndex"},{type:{name:"number"},name:"nextIndex"}],return:{name:"void"}}},description:""},activeStep:{required:!1,tsType:{name:"number"},description:""}}};var R,B,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`(args: StepperProps) => <SimpleStepper {...args}>
    <SimpleStepperStep title="Step 1">
      <div>This is the content for step 1</div>
    </SimpleStepperStep>
    <SimpleStepperStep title="Step 2">
      <div>This is the content for step 2</div>
    </SimpleStepperStep>
    <SimpleStepperStep title="Step 3">
      <div>This is the content for step 3</div>
    </SimpleStepperStep>
  </SimpleStepper>`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var H,O,F;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`(args: StepperProps) => {
  const [required, setRequired] = useState(false);
  return <SimpleStepper {...args}>
      <SimpleStepperStep title="Step 1 with required field" actions={{
      canNext: () => required
    }}>
        <TextField variant="outlined" placeholder="Required*" onChange={e => setRequired(!!e.target.value)} />
      </SimpleStepperStep>
      <SimpleStepperStep title="Step 2">
        <div>This is the content for step 2</div>
      </SimpleStepperStep>
      <SimpleStepperStep title="Step 3">
        <div>This is the content for step 3</div>
      </SimpleStepperStep>
    </SimpleStepper>;
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var P,L,$;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`(args: StepperProps) => {
  return <SimpleStepper {...args}>
      <SimpleStepperStep title="Step 1">
        <div>This is the content for step 1</div>
      </SimpleStepperStep>
      <SimpleStepperStep title="Step 2">
        <div>This is the content for step 2</div>
      </SimpleStepperStep>
      <SimpleStepperStep title="Success!" end>
        <div>You've completed the Stepper</div>
      </SimpleStepperStep>
    </SimpleStepper>;
}`,...($=(L=S.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var D,M,V;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`(args: StepperProps) => {
  return <SimpleStepper {...args}>
      <SimpleStepperStep title="Step 1 (Optional)" actions={{
      showSkip: true
    }}>
        <div>This is the content for step 1</div>
      </SimpleStepperStep>
      <SimpleStepperStep title="Step 2">
        <div>This is the content for step 2</div>
      </SimpleStepperStep>
    </SimpleStepper>;
}`,...(V=(M=h.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const ze=["Default","ConditionalButtons","CompletionStep","OptionalStep"];export{S as CompletionStep,d as ConditionalButtons,c as Default,h as OptionalStep,ze as __namedExportsOrder,Ye as default};
