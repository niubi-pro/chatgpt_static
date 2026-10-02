import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{FL as n,Fat as r,NL as i,T$ as a,U$ as o,W$ as s,X$ as c,Z$ as l,eN as u,int as d,j$ as f,l2 as p,o as m,rnt as h,s as g,tN as ee,u2 as _}from"./4813494d-ic2h7apqyjss21lb.js";import{$ as v,Bn as te,En as ne,Fn as y,Gt as re,Hn as b,It as ie,Kt as ae,Mt as oe,Un as x,Vn as se,Wt as ce,zn as S}from"./2340486e-hoctnyuhtrgq7c13.js";import{Bjt as le,I2t as ue,L2t as de,Ln as fe,Rn as pe,Vjt as C,jn as me,kn as he,zn as ge}from"./conversation-small-fuddpd13ftkqzol7.js";import{by as _e,yy as ve}from"./30901919-h610h3solnl3rj48.js";import{Ah as ye,Ch as be,Oh as xe,bh as Se,wh as Ce,xh as we,yh as Te}from"./c2675c8c-nq5j1hge33460mpu.js";import{n as Ee,t as De}from"./6105d6cc-my5cbpx3yg8ksmku.js";import{a as Oe,d as ke,f as Ae,l as w,n as je,o as Me,r as Ne,t as T,u as Pe}from"./d4df9516-fuidec4x53z88m17.js";import{n as Fe,t as Ie}from"./759cd6d0-jrkqd16lpynfuygz.js";function E(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function D(e,t){try{let n=new URL(e);return n.origin!==M||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function O(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,xe),e}function Le(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${F}${Ve}`}},M)}function Re(e){"use forget";let t=(0,k.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=_(),c=(0,A.useRef)(null),l=(0,A.useRef)(null),[u]=(0,A.useState)(Be),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=D(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,O().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==M||e.source!==t.contentWindow||!E(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(E(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(P,Math.max(N,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>P?`auto`:`no`;return}if(!E(n)||n.type!==`hook`||!E(n.hook)||!E(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,A.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(I.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,j.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(I.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==f||t[19]!==h?(g=(0,j.jsx)(`iframe`,{ref:c,allow:`camera ${M}`,className:`block min-h-[100px] w-full border-0`,onLoad:ze,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=g):g=t[20],g}function ze(e){Le(e.currentTarget)}function Be(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var k,A,j,M,N,P,F,Ve,I,He=e((()=>{k=ne(),ye(),p(),A=t(x()),te(),j=b(),M=`https://services.sheerid.com`,N=100,P=2e3,F=`
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
`,Ve=`
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
`,I=S({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function L(e){"use forget";let t=(0,Ue.c)(8),{sheerIdProgramId:n}=e,r=s(),i=r?.id??null,a=(0,V.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(T.clearModalError(),T.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),ee(o,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,V.useEffect)(R,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,H.jsx)(B,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function R(){let e=z;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function z(e){e.persisted&&window.location.reload()}function B(e){"use forget";let t=(0,Ue.c)(102),{currentAccount:i,sheerIdProgramId:s}=e,c=se(),u=ie(),f=o(),p=n(),[m]=ce(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=d(),t[0]=h):h=t[0];let g=h,_;t[1]===m?_=t[2]:(_=()=>{we(m)},t[1]=m,t[2]=_);let v;t[3]!==i||t[4]!==m?(v=[m,i,g],t[3]=i,t[4]=m,t[5]=v):v=t[5],ee(_,v);let te=(0,V.useRef)(!1),ne=(0,V.useRef)(!1),re=(0,V.useRef)(!0),b;t[6]===m?b=t[7]:(b=m.get(Ge),t[6]=m,t[7]=b);let ae=b,oe;t[8]===m?oe=t[9]:(oe=pe(m),t[8]=m,t[9]=oe);let x=oe,S;if(t[10]!==x||t[11]!==ae){let e=new URLSearchParams({campaign:xe});x!=null&&e.set(me,x),S=e.toString(),t[10]=x,t[11]=ae,t[12]=S}else S=t[12];let de=S,C=`/students/claim?${de}`,ge;if(t[13]!==de){let e=new URLSearchParams(de);e.delete(`campaign`),ge=e.toString(),t[13]=de,t[14]=ge}else ge=t[14];let _e=ge,ye=`/students/2026${_e?`?${_e}`:``}#trigger_students-2026-faq-verification`,Se;t[15]===p?.email?Se=t[16]:(Se=g&&(p?.email?.trim()||r()?.user?.email?.trim())||null,t[15]=p?.email,t[16]=Se);let Ee=Se,ke;t[17]!==C||t[18]!==s?(ke={...Ce,landingPath:C,sheerIdProgramId:s},t[17]=C,t[18]=s,t[19]=ke):ke=t[19];let w=ke,Ne;t[20]!==i||t[21]!==w?(Ne=i!=null&&(Pe(i)||!i.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ue(i)),t[20]=i,t[21]=w,t[22]=Ne):Ne=t[22];let T=Ne,Fe=g&&i!=null&&!T,Ie;t[23]===Fe?Ie=t[24]:(Ie={enabled:Fe,reportRefreshErrors:!0},t[23]=Fe,t[24]=Ie);let E=Ae(w,Ie),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Le=Me(D,O,w,x),ze,Be;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(ze=()=>(re.current=!0,()=>{re.current=!1}),Be=[],t[25]=ze,t[26]=Be):(ze=t[25],Be=t[26]),(0,V.useEffect)(ze,Be);let k,A;t[27]===C?(k=t[28],A=t[29]):(k=()=>{g||te.current||(te.current=!0,l({callbackUrl:Te(C),fallbackScreenHint:`login`}))},A=[C,g],t[27]=C,t[28]=k,t[29]=A),(0,V.useEffect)(k,A);let j;t[30]!==f.isError||t[31]!==f.isFetching||t[32]!==f.isSuccess||t[33]!==C||t[34]!==i||t[35]!==E.name||t[36]!==T||t[37]!==u?(j=()=>{if(!g)return;let e=i==null&&!f.isFetching&&(f.isError||f.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&u(C,{replace:!0})},t[30]=f.isError,t[31]=f.isFetching,t[32]=f.isSuccess,t[33]=C,t[34]=i,t[35]=E.name,t[36]=T,t[37]=u,t[38]=j):j=t[38];let M;t[39]!==f.isError||t[40]!==f.isFetching||t[41]!==f.isSuccess||t[42]!==C||t[43]!==i||t[44]!==E||t[45]!==T||t[46]!==u?(M=[f.isError,f.isFetching,f.isSuccess,C,i,E,T,g,u],t[39]=f.isError,t[40]=f.isFetching,t[41]=f.isSuccess,t[42]=C,t[43]=i,t[44]=E,t[45]=T,t[46]=u,t[47]=M):M=t[47],(0,V.useEffect)(j,M);let N,P;t[48]!==O||t[49]!==C||t[50]!==i||t[51]!==E.name||t[52]!==T||t[53]!==u||t[54]!==D||t[55]!==Le?(N=()=>{!g||i==null||T||E.name!==`needs-verification`||D!=null&&O!=null||ne.current||(ne.current=!0,Le().then(()=>{!re.current||a()?.id!==i.id||Oe.getState().modalErrorMessage==null||u(C,{replace:!0,state:{students2026VerificationError:!0}})}))},P=[O,C,i,E.name,T,g,u,D,Le],t[48]=O,t[49]=C,t[50]=i,t[51]=E.name,t[52]=T,t[53]=u,t[54]=D,t[55]=Le,t[56]=N,t[57]=P):(N=t[56],P=t[57]),(0,V.useEffect)(N,P);let F;t[58]===i?F=t[59]:(F=()=>{let e=i?.normalizedAccountUserId;i==null||typeof e!=`string`||be(`verification_submitted`,{identity:{accountId:i.id,accountUserId:e}})},t[58]=i,t[59]=F);let Ve=F,I;t[60]!==C||t[61]!==u?(I=()=>{u(fe(C,he),{replace:!0})},t[60]=C,t[61]=u,t[62]=I):I=t[62];let He=I,L;t[63]!==O||t[64]!==C||t[65]!==i||t[66]!==T||t[67]!==s||t[68]!==D?(L=g&&i!=null&&D&&O&&!T?je(s,`${window.location.origin}${fe(C,he)}`,D,O):null,t[63]=O,t[64]=C,t[65]=i,t[66]=T,t[67]=s,t[68]=D,t[69]=L):L=t[69];let R=L,z;t[70]===c?z=t[71]:(z=c.formatMessage(U.artworkAlt),t[70]=c,t[71]=z);let B;t[72]===z?B=t[73]:(B=(0,H.jsx)(De,{altText:z,assetUrl:We,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[72]=z,t[73]=B);let Ke;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.title})}),t[74]=Ke):Ke=t[74];let W;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,H.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ke,(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopTitle})})]}),t[75]=W):W=t[75];let G;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.description})}),t[76]=G):G=t[76];let K;t[77]===Symbol.for(`react.memo_cache_sentinel`)?(K=(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopDescription})}),t[77]=K):K=t[77];let q;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,H.jsx)(y,{...U.verificationHelp}),t[78]=q):q=t[78];let J;t[79]===ye?J=t[80]:(J=(0,H.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[W,(0,H.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[G,K,(0,H.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ye,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[79]=ye,t[80]=J);let Y;t[81]!==B||t[82]!==J?(Y=(0,H.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,J]}),t[81]=B,t[82]=J,t[83]=Y):Y=t[83];let X;t[84]===c?X=t[85]:(X=c.formatMessage(U.verificationFormLabel),t[84]=c,t[85]=X);let Z;t[86]!==Ee||t[87]!==c?(Z=Ee?(0,H.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,H.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,H.jsx)(y,{...U.accountLabel}),(0,H.jsx)(le,{content:c.formatMessage(U.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,H.jsx)(`button`,{...e,"aria-label":c.formatMessage(U.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,H.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,H.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:Ee})]}):null,t[86]=Ee,t[87]=c,t[88]=Z):Z=t[88];let Q;t[89]!==Ve||t[90]!==He||t[91]!==c||t[92]!==D||t[93]!==R?(Q=R&&D?(0,H.jsx)(Re,{onSubmitted:Ve,onSuccess:He,verificationId:D,verificationUrl:R}):(0,H.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(U.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[89]=Ve,t[90]=He,t[91]=c,t[92]=D,t[93]=R,t[94]=Q):Q=t[94];let $;t[95]!==X||t[96]!==Z||t[97]!==Q?($=(0,H.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[95]=X,t[96]=Z,t[97]=Q,t[98]=$):$=t[98];let qe;return t[99]!==Y||t[100]!==$?(qe=(0,H.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,H.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[99]=Y,t[100]=$,t[101]=qe):qe=t[101],qe}var Ue,V,H,We,Ge,U,Ke=e((()=>{Ue=ne(),_e(),C(),Ee(),He(),ye(),w(),ke(),Se(),Ne(),ge(),f(),c(),i(),h(),de(),u(),V=t(x()),te(),v(),H=b(),We=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Ge=`students_2026_preview`,U=S({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),W,G,K,q,J,Y,X=e((()=>{v(),W=ne(),Fe(),Ke(),g(),G=b(),K={hasRouteMeta:!0},q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],J=re(function(){"use forget";let e=(0,W.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=oe(),i;e[0]===r?i=e[1]:(i=(0,G.jsx)(L,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,G.jsx)(Ie,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Y=ae(m)}));e((()=>{X()}))();export{Y as ErrorBoundary,J as default,K as handle,q as meta};
//# sourceMappingURL=students_.verify-mpo6zgt8.js.map