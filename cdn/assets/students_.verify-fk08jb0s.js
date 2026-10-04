import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$tt as n,G$ as r,L$ as i,QM as a,R$ as o,T$ as s,W$ as c,ZM as l,ent as u,i2 as d,jL as f,jat as p,kL as m,o as h,r2 as g,s as _,y$ as ee}from"./4813494d-okcxqld7kfttimw4.js";import{$ as v,Bn as te,Dn as ne,Gt as re,Hn as ie,In as y,Kt as ae,Lt as oe,Nt as se,Un as ce,Vn as b,Wn as x,qt as le}from"./2340486e-fjhppe5kgy0c0p77.js";import{Ln as ue,Rn as de,i4t as fe,jn as pe,kn as me,oMt as he,r4t as ge,sMt as S,zn as _e}from"./conversation-small-ig1392ugx3eo129o.js";import{Sy as ve,xy as ye}from"./30901919-kpk05dwg1t9vr523.js";import{Eh as be,Oh as xe,Sh as Se,_h as Ce,vh as we,xh as Te,yh as Ee}from"./c2675c8c-e9jem96hiycgq5i8.js";import{n as C,t as De}from"./6105d6cc-o2i2eb6vdk15xmbh.js";import{a as Oe,d as ke,f as Ae,l as w,n as je,o as Me,r as T,t as E,u as Ne}from"./d4df9516-df1bqb30wtl6lwag.js";import{n as Pe,t as Fe}from"./759cd6d0-e1xffp6mpo2maob1.js";function D(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function O(e,t){try{let n=new URL(e);return n.origin!==N||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function k(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,be),e}function Ie(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${I}${Be}`}},N)}function Le(e){"use forget";let t=(0,A.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ie(),s=d(),c=(0,j.useRef)(null),l=(0,j.useRef)(null),[u]=(0,j.useState)(ze),f;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){f=null;break bb0}let e=O(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,k().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,m,h;if(t[5]!==u||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(m=()=>{if(u==null||p==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==N||e.source!==t.contentWindow||!D(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(D(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(F,Math.max(P,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>F?`auto`:`no`;return}if(!D(n)||n.type!==`hook`||!D(n.hook)||!D(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},h=[u,p,i,a,r],t[5]=u,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=m,t[11]=h):(m=t[10],h=t[11]),(0,j.useEffect)(m,h),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(L.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,M.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let g;t[16]===o?g=t[17]:(g=o.formatMessage(L.verificationTitle),t[16]=o,t[17]=g);let _;return t[18]!==p||t[19]!==g?(_=(0,M.jsx)(`iframe`,{ref:c,allow:`camera ${N}`,className:`block min-h-[100px] w-full border-0`,onLoad:Re,referrerPolicy:`no-referrer`,src:p,title:g}),t[18]=p,t[19]=g,t[20]=_):_=t[20],_}function Re(e){Ie(e.currentTarget)}function ze(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var A,j,M,N,P,F,I,Be,L,Ve=e((()=>{A=ne(),xe(),g(),j=t(x()),b(),M=ce(),N=`https://services.sheerid.com`,P=100,F=2e3,I=`
[data-in-iframe="true"] .sid-personal-info-header .sid-logo-container,
[data-in-iframe="true"] .sid-personal-info-header .sid-header__title,
[data-in-iframe="true"] .sid-personal-info-header .sid-header__subtitle:not(.sid-header__subtitle--error),
[data-in-iframe="true"] .sid-personal-info-header .sid-header__how-verifying-works,
[data-in-iframe="true"] .sid-personal-info-header .sid-h-medium-text {
  display: none;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-form-wrapper,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-layout__form,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-layout__form-container {
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  color: #0d0d0d;
  font-family: "OpenAI Sans", "Open Sans", ui-sans-serif, system-ui, sans-serif;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-personal-info-header {
  margin: 0;
  padding: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-l-container {
  max-width: none;
  padding-inline: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field {
  margin: 0 0 23px !important;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field > .sid-l-space-top-md {
  margin-top: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label-name {
  color: #0d0d0d;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label-explanation,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-names-explanation,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field-helper {
  color: #737373;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input {
  box-sizing: border-box;
  min-width: 0;
  height: 38px;
  min-height: 38px;
  padding: 8px 12px;
  border-radius: 8px;
  color: #0d0d0d;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-organization-list .sid-text-input {
  padding-inline-end: 40px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-search-overlay__close {
  margin-bottom: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input:not(.sid-text-input--error):not(.sid-text-input--warning),
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input:not(.sid-select-input--error) {
  border: 1px solid #e5e5e5;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input:not(.sid-text-input--error):not(.sid-text-input--warning):focus,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input:not(.sid-select-input--error):focus {
  border-color: #0d0d0d;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input__wrapper,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-display {
  min-width: 0;
  font-family: inherit;
  font-size: 14px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__inputs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__month,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__day,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__year {
  width: auto;
  min-width: 0 !important;
  max-width: none !important;
  margin: 0 !important;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit__continue,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit button,
[data-in-iframe="true"]:has(.sid-personal-info-header) button[type="submit"],
[data-in-iframe="true"]:has(.sid-personal-info-header) input[type="submit"] {
  box-sizing: border-box;
  width: fit-content !important;
  min-width: 171px !important;
  max-inline-size: 100% !important;
  min-height: 42px !important;
  padding: 0 18px !important;
  border: 0 !important;
  border-radius: 9999px !important;
  background: #0d0d0d !important;
  color: #fff !important;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  white-space: normal;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn[aria-disabled="true"],
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-student-submit-btn[aria-disabled="true"],
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn--disabled-like,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit__continue:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit button:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) button[type="submit"]:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) input[type="submit"]:disabled {
  background: #8f8f8f !important;
  color: #fff !important;
  cursor: not-allowed;
  opacity: 1;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-footer__text {
  color: #737373;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
`,Be=`
@media (max-width: 639px) {
  [data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn,
  [data-in-iframe="true"] button.sid-btn,
  [data-in-iframe="true"] a.sid-btn,
  [data-in-iframe="true"] [role="button"].sid-btn,
  [data-in-iframe="true"] .sid-submit__continue,
  [data-in-iframe="true"] .sid-student-submit-btn,
  [data-in-iframe="true"] .sid-submit button,
  [data-in-iframe="true"] button[type="submit"],
  [data-in-iframe="true"] input[type="submit"] {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 48px !important;
  }
}
`,L=te({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function R(e){"use forget";let t=(0,Ue.c)(8),{sheerIdProgramId:n}=e,r=o(),i=r?.id??null,s=(0,V.useRef)(i),c,l;t[0]===i?(c=t[1],l=t[2]):(c=()=>{if(i==null)return;let e=s.current;s.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},l=[i],t[0]=i,t[1]=c,t[2]=l),a(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,V.useEffect)(He,u);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,H.jsx)(B,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function He(){let e=z;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function z(e){e.persisted&&window.location.reload()}function B(e){"use forget";let t=(0,Ue.c)(102),{currentAccount:n,sheerIdProgramId:o}=e,s=ie(),c=oe(),l=i(),d=f(),[m]=re(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=u(),t[0]=h):h=t[0];let g=h,_;t[1]===m?_=t[2]:(_=()=>{Ee(m)},t[1]=m,t[2]=_);let v;t[3]!==n||t[4]!==m?(v=[m,n,g],t[3]=n,t[4]=m,t[5]=v):v=t[5],a(_,v);let te=(0,V.useRef)(!1),ne=(0,V.useRef)(!1),ae=(0,V.useRef)(!0),se;t[6]===m?se=t[7]:(se=m.get(Ge),t[6]=m,t[7]=se);let ce=se,b;t[8]===m?b=t[9]:(b=de(m),t[8]=m,t[9]=b);let x=b,le;if(t[10]!==x||t[11]!==ce){let e=new URLSearchParams({campaign:be});x!=null&&e.set(pe,x),le=e.toString(),t[10]=x,t[11]=ce,t[12]=le}else le=t[12];let fe=le,S=`/students/claim?${fe}`,_e;if(t[13]!==fe){let e=new URLSearchParams(fe);e.delete(`campaign`),_e=e.toString(),t[13]=fe,t[14]=_e}else _e=t[14];let ve=_e,xe=`/students/2026${ve?`?${ve}`:``}#trigger_students-2026-faq-verification`,we;t[15]===d?.email?we=t[16]:(we=g&&(d?.email?.trim()||p()?.user?.email?.trim())||null,t[15]=d?.email,t[16]=we);let C=we,ke;t[17]!==S||t[18]!==o?(ke={...Se,landingPath:S,sheerIdProgramId:o},t[17]=S,t[18]=o,t[19]=ke):ke=t[19];let w=ke,T;t[20]!==n||t[21]!==w?(T=n!=null&&(Ne(n)||!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ge(n)),t[20]=n,t[21]=w,t[22]=T):T=t[22];let E=T,Pe=g&&n!=null&&!E,Fe;t[23]===Pe?Fe=t[24]:(Fe={enabled:Pe,reportRefreshErrors:!0},t[23]=Pe,t[24]=Fe);let D=Ae(w,Fe),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,Ie=Me(O,k,w,x),Re,ze;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(Re=()=>(ae.current=!0,()=>{ae.current=!1}),ze=[],t[25]=Re,t[26]=ze):(Re=t[25],ze=t[26]),(0,V.useEffect)(Re,ze);let A,j;t[27]===S?(A=t[28],j=t[29]):(A=()=>{g||te.current||(te.current=!0,r({callbackUrl:Ce(S),fallbackScreenHint:`login`}))},j=[S,g],t[27]=S,t[28]=A,t[29]=j),(0,V.useEffect)(A,j);let M;t[30]!==l.isError||t[31]!==l.isFetching||t[32]!==l.isSuccess||t[33]!==S||t[34]!==n||t[35]!==D.name||t[36]!==E||t[37]!==c?(M=()=>{if(!g)return;let e=n==null&&!l.isFetching&&(l.isError||l.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||E||t)&&c(S,{replace:!0})},t[30]=l.isError,t[31]=l.isFetching,t[32]=l.isSuccess,t[33]=S,t[34]=n,t[35]=D.name,t[36]=E,t[37]=c,t[38]=M):M=t[38];let N;t[39]!==l.isError||t[40]!==l.isFetching||t[41]!==l.isSuccess||t[42]!==S||t[43]!==n||t[44]!==D||t[45]!==E||t[46]!==c?(N=[l.isError,l.isFetching,l.isSuccess,S,n,D,E,g,c],t[39]=l.isError,t[40]=l.isFetching,t[41]=l.isSuccess,t[42]=S,t[43]=n,t[44]=D,t[45]=E,t[46]=c,t[47]=N):N=t[47],(0,V.useEffect)(M,N);let P,F;t[48]!==k||t[49]!==S||t[50]!==n||t[51]!==D.name||t[52]!==E||t[53]!==c||t[54]!==O||t[55]!==Ie?(P=()=>{!g||n==null||E||D.name!==`needs-verification`||O!=null&&k!=null||ne.current||(ne.current=!0,Ie().then(()=>{!ae.current||ee()?.id!==n.id||Oe.getState().modalErrorMessage==null||c(S,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[k,S,n,D.name,E,g,c,O,Ie],t[48]=k,t[49]=S,t[50]=n,t[51]=D.name,t[52]=E,t[53]=c,t[54]=O,t[55]=Ie,t[56]=P,t[57]=F):(P=t[56],F=t[57]),(0,V.useEffect)(P,F);let I;t[58]===n?I=t[59]:(I=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||Te(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[58]=n,t[59]=I);let Be=I,L;t[60]!==S||t[61]!==c?(L=()=>{c(ue(S,me),{replace:!0})},t[60]=S,t[61]=c,t[62]=L):L=t[62];let Ve=L,R;t[63]!==k||t[64]!==S||t[65]!==n||t[66]!==E||t[67]!==o||t[68]!==O?(R=g&&n!=null&&O&&k&&!E?je(o,`${window.location.origin}${ue(S,me)}`,O,k):null,t[63]=k,t[64]=S,t[65]=n,t[66]=E,t[67]=o,t[68]=O,t[69]=R):R=t[69];let He=R,z;t[70]===s?z=t[71]:(z=s.formatMessage(U.artworkAlt),t[70]=s,t[71]=z);let B;t[72]===z?B=t[73]:(B=(0,H.jsx)(De,{altText:z,assetUrl:We,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[72]=z,t[73]=B);let Ke;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.title})}),t[74]=Ke):Ke=t[74];let W;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,H.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ke,(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopTitle})})]}),t[75]=W):W=t[75];let G;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.description})}),t[76]=G):G=t[76];let K;t[77]===Symbol.for(`react.memo_cache_sentinel`)?(K=(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopDescription})}),t[77]=K):K=t[77];let q;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,H.jsx)(y,{...U.verificationHelp}),t[78]=q):q=t[78];let J;t[79]===xe?J=t[80]:(J=(0,H.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[W,(0,H.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[G,K,(0,H.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:xe,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[79]=xe,t[80]=J);let Y;t[81]!==B||t[82]!==J?(Y=(0,H.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,J]}),t[81]=B,t[82]=J,t[83]=Y):Y=t[83];let X;t[84]===s?X=t[85]:(X=s.formatMessage(U.verificationFormLabel),t[84]=s,t[85]=X);let Z;t[86]!==C||t[87]!==s?(Z=C?(0,H.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,H.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,H.jsx)(y,{...U.accountLabel}),(0,H.jsx)(he,{content:s.formatMessage(U.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,H.jsx)(`button`,{...e,"aria-label":s.formatMessage(U.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,H.jsx)(ye,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,H.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:C})]}):null,t[86]=C,t[87]=s,t[88]=Z):Z=t[88];let Q;t[89]!==Be||t[90]!==Ve||t[91]!==s||t[92]!==O||t[93]!==He?(Q=He&&O?(0,H.jsx)(Le,{onSubmitted:Be,onSuccess:Ve,verificationId:O,verificationUrl:He}):(0,H.jsx)(`div`,{"aria-busy":`true`,"aria-label":s.formatMessage(U.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[89]=Be,t[90]=Ve,t[91]=s,t[92]=O,t[93]=He,t[94]=Q):Q=t[94];let $;t[95]!==X||t[96]!==Z||t[97]!==Q?($=(0,H.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[95]=X,t[96]=Z,t[97]=Q,t[98]=$):$=t[98];let qe;return t[99]!==Y||t[100]!==$?(qe=(0,H.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,H.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[99]=Y,t[100]=$,t[101]=qe):qe=t[101],qe}var Ue,V,H,We,Ge,U,Ke=e((()=>{Ue=ne(),ve(),S(),C(),Ve(),xe(),w(),ke(),we(),T(),_e(),s(),c(),m(),n(),fe(),l(),V=t(x()),b(),v(),H=ce(),We=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Ge=`students_2026_preview`,U=te({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),W,G,K,q,J,Y,X=e((()=>{v(),W=ne(),Pe(),Ke(),_(),G=ce(),K={hasRouteMeta:!0},q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],J=ae(function(){"use forget";let e=(0,W.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=se(),i;e[0]===r?i=e[1]:(i=(0,G.jsx)(R,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,G.jsx)(Fe,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Y=le(h)}));e((()=>{X()}))();export{Y as ErrorBoundary,J as default,K as handle,q as meta};
//# sourceMappingURL=students_.verify-fk08jb0s.js.map