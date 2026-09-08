import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{A9 as n,I8 as r,KG as i,L8 as a,VG as o,cK as s,cb as ee,dq as c,lK as l,nK as u,rR as d,sb as f,tK as te,tR as p,uq as m}from"./4813494d-e0hjx102gn5zjvdh.js";import{Bt as ne,Fn as h,Ht as re,In as g,Ln as ie,Mt as ae,Ot as oe,Q as se,Rn as _,Sn as v,Vt as ce,jn as y,zn as b}from"./2340486e-dyt4epctwx2pn2sj.js";import{Gf as le,Vf as ue,dCt as de,dqt as x,n3t as fe,q4t as pe,qf as S,t3t as me,uCt as he,uqt as ge}from"./conversation-small-fka464yvjn19vebr.js";import{vy as _e,yy as C}from"./30901919-pbovv5myy7vmg58s.js";import{Jd as ve,Kd as ye,Yd as be,qd as w}from"./c2675c8c-k2kd9yafbfvx5mjw.js";import{n as xe,t as Se}from"./6105d6cc-np644szxhwxkvjjn.js";import{n as T,t as Ce}from"./9bfdcf20-f7gmf7zec6wg8g7f.js";import{a as we,d as Te,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-n8u46d2w53vtmmuu.js";import{n as Ae,t as k}from"./759cd6d0-mbtpv0edabepom7e.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function j(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function M(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,le),e}function N(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${B}${V}`}},R)}function je(e){"use forget";let t=(0,F.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ie(),s=c(),ee=(0,I.useRef)(null),l=(0,I.useRef)(null),[u]=(0,I.useState)(Me),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=j(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,M().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,te,p;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(te=()=>{if(u==null||f==null)return;let e=e=>{let t=ee.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(Ne,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!A(n)||n.type!==`hook`||!A(n.hook)||!A(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!c)){if(l.current!==r){l.current=r;try{i?.()}catch{}}c&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=te,t[11]=p):(te=t[10],p=t[11]),(0,I.useEffect)(te,p),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(H.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===o?m=t[17]:(m=o.formatMessage(H.verificationTitle),t[16]=o,t[17]=m);let ne;return t[18]!==f||t[19]!==m?(ne=(0,L.jsx)(`iframe`,{ref:ee,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:P,referrerPolicy:`no-referrer`,src:f,title:m}),t[18]=f,t[19]=m,t[20]=ne):ne=t[20],ne}function P(e){N(e.currentTarget)}function Me(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,Ne,z,B,V,H,Pe=e((()=>{F=v(),S(),m(),I=t(b()),g(),L=_(),R=`https://services.sheerid.com`,Ne=100,z=2e3,B=`
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
`,V=`
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
`,H=h({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Fe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=u(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(O.clearModalError(),O.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),ee(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,W.useEffect)(Ie,c);let l=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==l?(d=(0,G.jsx)(U,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=d):d=t[7],d}function Ie(){let e=Le;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Le(e){e.persisted&&window.location.reload()}function U(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:i}=e,s=ie(),c=ae(),u=te(),f=d(),[p]=ne(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=a(),t[0]=m):m=t[0];let h=m,re;t[1]===p?re=t[2]:(re=()=>{ve(p)},t[1]=p,t[2]=re);let g;t[3]!==r||t[4]!==p?(g=[p,r,h],t[3]=r,t[4]=p,t[5]=g):g=t[5],ee(re,g);let oe=(0,W.useRef)(!1),se=(0,W.useRef)(!1),_=(0,W.useRef)(!0),v;t[6]===p?v=t[7]:(v=p.get(Be),t[6]=p,t[7]=v);let ce=v,b=`/students/2026#trigger_students-2026-faq-verification`,de;t[8]===ce?de=t[9]:(de=new URLSearchParams({campaign:le}).toString(),t[8]=ce,t[9]=de);let x=`/students/claim?${de}`,fe;t[10]===f?.email?fe=t[11]:(fe=h&&(f?.email?.trim()||n()?.user?.email?.trim())||null,t[10]=f?.email,t[11]=fe);let S=fe,C;t[12]!==x||t[13]!==i?(C={...ue,landingPath:x,sheerIdProgramId:i},t[12]=x,t[13]=i,t[14]=C):C=t[14];let w=C,xe;t[15]!==r||t[16]!==w?(xe=r!=null&&(ke(r)||!r.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ge(r)),t[15]=r,t[16]=w,t[17]=xe):xe=t[17];let T=xe,Ce=h&&r!=null&&!T,Te;t[18]===Ce?Te=t[19]:(Te={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=Te);let E=Ee(w,Te),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Ae=Oe(D,O,w),k,A;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(_.current=!0,()=>{_.current=!1}),A=[],t[20]=k,t[21]=A):(k=t[20],A=t[21]),(0,W.useEffect)(k,A);let j,M;t[22]===x?(j=t[23],M=t[24]):(j=()=>{h||oe.current||(oe.current=!0,l({callbackUrl:ye(x),fallbackScreenHint:`login`}))},M=[x,h],t[22]=x,t[23]=j,t[24]=M),(0,W.useEffect)(j,M);let N;t[25]!==u.isError||t[26]!==u.isFetching||t[27]!==u.isSuccess||t[28]!==x||t[29]!==r||t[30]!==E.name||t[31]!==T||t[32]!==c?(N=()=>{if(!h)return;let e=r==null&&!u.isFetching&&(u.isError||u.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&c(x,{replace:!0})},t[25]=u.isError,t[26]=u.isFetching,t[27]=u.isSuccess,t[28]=x,t[29]=r,t[30]=E.name,t[31]=T,t[32]=c,t[33]=N):N=t[33];let P;t[34]!==u.isError||t[35]!==u.isFetching||t[36]!==u.isSuccess||t[37]!==x||t[38]!==r||t[39]!==E||t[40]!==T||t[41]!==c?(P=[u.isError,u.isFetching,u.isSuccess,x,r,E,T,h,c],t[34]=u.isError,t[35]=u.isFetching,t[36]=u.isSuccess,t[37]=x,t[38]=r,t[39]=E,t[40]=T,t[41]=c,t[42]=P):P=t[42],(0,W.useEffect)(N,P);let Me,F;t[43]!==O||t[44]!==x||t[45]!==r||t[46]!==E.name||t[47]!==T||t[48]!==c||t[49]!==D||t[50]!==Ae?(Me=()=>{!h||r==null||T||E.name!==`needs-verification`||D!=null&&O!=null||se.current||(se.current=!0,Ae().then(()=>{!_.current||o()?.id!==r.id||we.getState().modalErrorMessage==null||c(x,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[O,x,r,E.name,T,h,c,D,Ae],t[43]=O,t[44]=x,t[45]=r,t[46]=E.name,t[47]=T,t[48]=c,t[49]=D,t[50]=Ae,t[51]=Me,t[52]=F):(Me=t[51],F=t[52]),(0,W.useEffect)(Me,F);let I;t[53]===r?I=t[54]:(I=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||be(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=I);let L=I,R;t[55]!==x||t[56]!==c?(R=()=>{c(me(x,pe),{replace:!0})},t[55]=x,t[56]=c,t[57]=R):R=t[57];let Ne=R,z;t[58]!==O||t[59]!==x||t[60]!==r||t[61]!==T||t[62]!==i||t[63]!==D?(z=h&&r!=null&&D&&O&&!T?De(i,`${window.location.origin}${me(x,pe)}`,D,O):null,t[58]=O,t[59]=x,t[60]=r,t[61]=T,t[62]=i,t[63]=D,t[64]=z):z=t[64];let B=z,V;t[65]===s?V=t[66]:(V=s.formatMessage(K.artworkAlt),t[65]=s,t[66]=V);let H;t[67]===V?H=t[68]:(H=(0,G.jsx)(Se,{altText:V,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=V,t[68]=H);let Pe;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[69]=Pe):Pe=t[69];let Fe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Pe,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[70]=Fe):Fe=t[70];let Ie;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[71]=Ie):Ie=t[71];let Le;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[72]=Le):Le=t[72];let U;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,G.jsx)(y,{...K.verificationHelp}),t[73]=U):U=t[73];let q;t[74]===b?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Fe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Ie,Le,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:b,rel:`noopener noreferrer`,target:`_blank`,children:U})]})]}),t[74]=b,t[75]=q);let J;t[76]!==H||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[H,q]}),t[76]=H,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===s?Y=t[80]:(Y=s.formatMessage(K.verificationFormLabel),t[79]=s,t[80]=Y);let X;t[81]!==S||t[82]!==s?(X=S?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(he,{content:s.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":s.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(_e,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:S})]}):null,t[81]=S,t[82]=s,t[83]=X):X=t[83];let Z;t[84]!==L||t[85]!==Ne||t[86]!==s||t[87]!==D||t[88]!==B?(Z=B&&D?(0,G.jsx)(je,{onSubmitted:L,onSuccess:Ne,verificationId:D,verificationUrl:B}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":s.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=L,t[85]=Ne,t[86]=s,t[87]=D,t[88]=B,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=v(),C(),de(),xe(),Pe(),S(),E(),Te(),w(),D(),fe(),i(),s(),p(),r(),x(),f(),W=t(b()),g(),se(),G=_(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=h({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{se(),J=v(),Ae(),q(),T(),Y=_(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ce(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=oe(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Fe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(k,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=re(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-ohwjswya.js.map