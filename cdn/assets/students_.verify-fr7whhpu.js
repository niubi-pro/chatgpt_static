import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{FL as n,Iat as r,NL as i,T$ as a,U$ as o,W$ as s,X$ as c,Z$ as l,ant as u,eN as d,int as f,j$ as p,l2 as m,o as h,s as g,tN as ee,u2 as te}from"./4813494d-fnfk4lculspwhuhi.js";import{$ as _,Bn as ne,Dn as re,Gt as ie,Hn as ae,In as v,Kt as oe,Lt as se,Nt as y,Un as ce,Vn as b,Wn as x,qt as le}from"./2340486e-fjhppe5kgy0c0p77.js";import{$jt as ue,Ln as de,Rn as fe,X2t as pe,Y2t as me,eMt as S,jn as he,kn as ge,zn as _e}from"./conversation-small-bo0yi41ijtvngznk.js";import{by as ve,yy as ye}from"./30901919-luczkcbn5snnor2x.js";import{Dh as be,Th as xe,_h as Se,bh as Ce,gh as we,vh as Te,xh as Ee}from"./c2675c8c-m74u2gi1obdr1inj.js";import{n as De,t as Oe}from"./6105d6cc-cub63ovvzmne6do9.js";import{a as ke,d as C,f as Ae,l as w,n as je,o as Me,r as Ne,t as T,u as Pe}from"./d4df9516-obrtxnussgfseess.js";import{n as Fe,t as Ie}from"./759cd6d0-n8fp42r6rbwbem0k.js";function E(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function D(e,t){try{let n=new URL(e);return n.origin!==N||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function O(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,xe),e}function Le(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${I}${L}`}},N)}function Re(e){"use forget";let t=(0,A.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ae(),s=te(),c=(0,j.useRef)(null),l=(0,j.useRef)(null),[u]=(0,j.useState)(k),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=D(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,O().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==N||e.source!==t.contentWindow||!E(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(E(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(F,Math.max(P,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>F?`auto`:`no`;return}if(!E(n)||n.type!==`hook`||!E(n.hook)||!E(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,j.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(R.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,M.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(R.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==f||t[19]!==h?(g=(0,M.jsx)(`iframe`,{ref:c,allow:`camera ${N}`,className:`block min-h-[100px] w-full border-0`,onLoad:ze,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=g):g=t[20],g}function ze(e){Le(e.currentTarget)}function k(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var A,j,M,N,P,F,I,L,R,Be=e((()=>{A=re(),be(),m(),j=t(x()),b(),M=ce(),N=`https://services.sheerid.com`,P=100,F=2e3,I=`
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
`,L=`
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
`,R=ne({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ve(e){"use forget";let t=(0,Ue.c)(8),{sheerIdProgramId:n}=e,r=s(),i=r?.id??null,a=(0,V.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(T.clearModalError(),T.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),ee(o,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,V.useEffect)(He,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,H.jsx)(B,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function He(){let e=z;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function z(e){e.persisted&&window.location.reload()}function B(e){"use forget";let t=(0,Ue.c)(102),{currentAccount:i,sheerIdProgramId:s}=e,c=ae(),d=se(),f=o(),p=n(),[m]=ie(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=u(),t[0]=h):h=t[0];let g=h,te;t[1]===m?te=t[2]:(te=()=>{Te(m)},t[1]=m,t[2]=te);let _;t[3]!==i||t[4]!==m?(_=[m,i,g],t[3]=i,t[4]=m,t[5]=_):_=t[5],ee(te,_);let ne=(0,V.useRef)(!1),re=(0,V.useRef)(!1),oe=(0,V.useRef)(!0),y;t[6]===m?y=t[7]:(y=m.get(Ge),t[6]=m,t[7]=y);let ce=y,b;t[8]===m?b=t[9]:(b=fe(m),t[8]=m,t[9]=b);let x=b,le;if(t[10]!==x||t[11]!==ce){let e=new URLSearchParams({campaign:xe});x!=null&&e.set(he,x),le=e.toString(),t[10]=x,t[11]=ce,t[12]=le}else le=t[12];let pe=le,S=`/students/claim?${pe}`,_e;if(t[13]!==pe){let e=new URLSearchParams(pe);e.delete(`campaign`),_e=e.toString(),t[13]=pe,t[14]=_e}else _e=t[14];let ve=_e,be=`/students/2026${ve?`?${ve}`:``}#trigger_students-2026-faq-verification`,Se;t[15]===p?.email?Se=t[16]:(Se=g&&(p?.email?.trim()||r()?.user?.email?.trim())||null,t[15]=p?.email,t[16]=Se);let De=Se,C;t[17]!==S||t[18]!==s?(C={...Ee,landingPath:S,sheerIdProgramId:s},t[17]=S,t[18]=s,t[19]=C):C=t[19];let w=C,Ne;t[20]!==i||t[21]!==w?(Ne=i!=null&&(Pe(i)||!i.isPersonalAccount()||w.blocksMobileStoreSubscribers&&me(i)),t[20]=i,t[21]=w,t[22]=Ne):Ne=t[22];let T=Ne,Fe=g&&i!=null&&!T,Ie;t[23]===Fe?Ie=t[24]:(Ie={enabled:Fe,reportRefreshErrors:!0},t[23]=Fe,t[24]=Ie);let E=Ae(w,Ie),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Le=Me(D,O,w,x),ze,k;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(ze=()=>(oe.current=!0,()=>{oe.current=!1}),k=[],t[25]=ze,t[26]=k):(ze=t[25],k=t[26]),(0,V.useEffect)(ze,k);let A,j;t[27]===S?(A=t[28],j=t[29]):(A=()=>{g||ne.current||(ne.current=!0,l({callbackUrl:we(S),fallbackScreenHint:`login`}))},j=[S,g],t[27]=S,t[28]=A,t[29]=j),(0,V.useEffect)(A,j);let M;t[30]!==f.isError||t[31]!==f.isFetching||t[32]!==f.isSuccess||t[33]!==S||t[34]!==i||t[35]!==E.name||t[36]!==T||t[37]!==d?(M=()=>{if(!g)return;let e=i==null&&!f.isFetching&&(f.isError||f.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&d(S,{replace:!0})},t[30]=f.isError,t[31]=f.isFetching,t[32]=f.isSuccess,t[33]=S,t[34]=i,t[35]=E.name,t[36]=T,t[37]=d,t[38]=M):M=t[38];let N;t[39]!==f.isError||t[40]!==f.isFetching||t[41]!==f.isSuccess||t[42]!==S||t[43]!==i||t[44]!==E||t[45]!==T||t[46]!==d?(N=[f.isError,f.isFetching,f.isSuccess,S,i,E,T,g,d],t[39]=f.isError,t[40]=f.isFetching,t[41]=f.isSuccess,t[42]=S,t[43]=i,t[44]=E,t[45]=T,t[46]=d,t[47]=N):N=t[47],(0,V.useEffect)(M,N);let P,F;t[48]!==O||t[49]!==S||t[50]!==i||t[51]!==E.name||t[52]!==T||t[53]!==d||t[54]!==D||t[55]!==Le?(P=()=>{!g||i==null||T||E.name!==`needs-verification`||D!=null&&O!=null||re.current||(re.current=!0,Le().then(()=>{!oe.current||a()?.id!==i.id||ke.getState().modalErrorMessage==null||d(S,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[O,S,i,E.name,T,g,d,D,Le],t[48]=O,t[49]=S,t[50]=i,t[51]=E.name,t[52]=T,t[53]=d,t[54]=D,t[55]=Le,t[56]=P,t[57]=F):(P=t[56],F=t[57]),(0,V.useEffect)(P,F);let I;t[58]===i?I=t[59]:(I=()=>{let e=i?.normalizedAccountUserId;i==null||typeof e!=`string`||Ce(`verification_submitted`,{identity:{accountId:i.id,accountUserId:e}})},t[58]=i,t[59]=I);let L=I,R;t[60]!==S||t[61]!==d?(R=()=>{d(de(S,ge),{replace:!0})},t[60]=S,t[61]=d,t[62]=R):R=t[62];let Be=R,Ve;t[63]!==O||t[64]!==S||t[65]!==i||t[66]!==T||t[67]!==s||t[68]!==D?(Ve=g&&i!=null&&D&&O&&!T?je(s,`${window.location.origin}${de(S,ge)}`,D,O):null,t[63]=O,t[64]=S,t[65]=i,t[66]=T,t[67]=s,t[68]=D,t[69]=Ve):Ve=t[69];let He=Ve,z;t[70]===c?z=t[71]:(z=c.formatMessage(U.artworkAlt),t[70]=c,t[71]=z);let B;t[72]===z?B=t[73]:(B=(0,H.jsx)(Oe,{altText:z,assetUrl:We,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[72]=z,t[73]=B);let Ke;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(v,{...U.title})}),t[74]=Ke):Ke=t[74];let W;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,H.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ke,(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(v,{...U.desktopTitle})})]}),t[75]=W):W=t[75];let G;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(v,{...U.description})}),t[76]=G):G=t[76];let K;t[77]===Symbol.for(`react.memo_cache_sentinel`)?(K=(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(v,{...U.desktopDescription})}),t[77]=K):K=t[77];let q;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,H.jsx)(v,{...U.verificationHelp}),t[78]=q):q=t[78];let J;t[79]===be?J=t[80]:(J=(0,H.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[W,(0,H.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[G,K,(0,H.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:be,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[79]=be,t[80]=J);let Y;t[81]!==B||t[82]!==J?(Y=(0,H.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,J]}),t[81]=B,t[82]=J,t[83]=Y):Y=t[83];let X;t[84]===c?X=t[85]:(X=c.formatMessage(U.verificationFormLabel),t[84]=c,t[85]=X);let Z;t[86]!==De||t[87]!==c?(Z=De?(0,H.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,H.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,H.jsx)(v,{...U.accountLabel}),(0,H.jsx)(ue,{content:c.formatMessage(U.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,H.jsx)(`button`,{...e,"aria-label":c.formatMessage(U.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,H.jsx)(ye,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,H.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:De})]}):null,t[86]=De,t[87]=c,t[88]=Z):Z=t[88];let Q;t[89]!==L||t[90]!==Be||t[91]!==c||t[92]!==D||t[93]!==He?(Q=He&&D?(0,H.jsx)(Re,{onSubmitted:L,onSuccess:Be,verificationId:D,verificationUrl:He}):(0,H.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(U.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[89]=L,t[90]=Be,t[91]=c,t[92]=D,t[93]=He,t[94]=Q):Q=t[94];let $;t[95]!==X||t[96]!==Z||t[97]!==Q?($=(0,H.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[95]=X,t[96]=Z,t[97]=Q,t[98]=$):$=t[98];let qe;return t[99]!==Y||t[100]!==$?(qe=(0,H.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,H.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[99]=Y,t[100]=$,t[101]=qe):qe=t[101],qe}var Ue,V,H,We,Ge,U,Ke=e((()=>{Ue=re(),ve(),S(),De(),Be(),be(),w(),C(),Se(),Ne(),_e(),p(),c(),i(),f(),pe(),d(),V=t(x()),b(),_(),H=ce(),We=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Ge=`students_2026_preview`,U=ne({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),W,G,K,q,J,Y,X=e((()=>{_(),W=re(),Fe(),Ke(),g(),G=ce(),K={hasRouteMeta:!0},q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],J=oe(function(){"use forget";let e=(0,W.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=y(),i;e[0]===r?i=e[1]:(i=(0,G.jsx)(Ve,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,G.jsx)(Ie,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Y=le(h)}));e((()=>{X()}))();export{Y as ErrorBoundary,J as default,K as handle,q as meta};
//# sourceMappingURL=students_.verify-fr7whhpu.js.map