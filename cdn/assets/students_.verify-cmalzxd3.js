import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{A$ as n,Cat as r,I$ as i,J$ as a,ML as o,PL as s,Y$ as c,ant as l,eN as u,h2 as d,int as f,m2 as p,n1 as m,o as h,s as g,t1 as _,tN as ee}from"./4813494d-3e5w5vsfb6ckbdn1.js";import{$ as v,Bn as te,En as ne,Fn as y,Gt as re,Hn as b,It as ie,Kt as ae,Mt as oe,Un as x,Vn as se,Wt as ce,zn as S}from"./2340486e-hoctnyuhtrgq7c13.js";import{Dn as le,Fn as ue,In as de,Ln as fe,Njt as pe,Pjt as C,T2t as me,kn as he,w2t as ge}from"./conversation-small-eywdk73oppu00oh3.js";import{by as _e,yy as ve}from"./30901919-nu7o70mp3yq7r509.js";import{Sh as ye,_h as be,hh as xe,mh as Se,ph as Ce,vh as we,wh as w}from"./c2675c8c-eaavchmeyrna5gql.js";import{n as Te,t as Ee}from"./6105d6cc-lk4rr2gv721dnyyh.js";import{a as De,d as Oe,f as ke,l as T,n as Ae,o as je,r as Me,t as E,u as Ne}from"./d4df9516-h2yh41dh0b8uqulw.js";import{n as Pe,t as Fe}from"./759cd6d0-kae2mjx5icu3zadq.js";function D(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function O(e,t){try{let n=new URL(e);return n.origin!==N||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function k(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ye),e}function Ie(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${I}${Be}`}},N)}function Le(e){"use forget";let t=(0,A.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=d(),c=(0,j.useRef)(null),l=(0,j.useRef)(null),[u]=(0,j.useState)(ze),f;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){f=null;break bb0}let e=O(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,k().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,m,h;if(t[5]!==u||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(m=()=>{if(u==null||p==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==N||e.source!==t.contentWindow||!D(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(D(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(F,Math.max(P,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>F?`auto`:`no`;return}if(!D(n)||n.type!==`hook`||!D(n.hook)||!D(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},h=[u,p,i,a,r],t[5]=u,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=m,t[11]=h):(m=t[10],h=t[11]),(0,j.useEffect)(m,h),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(L.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,M.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let g;t[16]===o?g=t[17]:(g=o.formatMessage(L.verificationTitle),t[16]=o,t[17]=g);let _;return t[18]!==p||t[19]!==g?(_=(0,M.jsx)(`iframe`,{ref:c,allow:`camera ${N}`,className:`block min-h-[100px] w-full border-0`,onLoad:Re,referrerPolicy:`no-referrer`,src:p,title:g}),t[18]=p,t[19]=g,t[20]=_):_=t[20],_}function Re(e){Ie(e.currentTarget)}function ze(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var A,j,M,N,P,F,I,Be,L,Ve=e((()=>{A=ne(),w(),p(),j=t(x()),te(),M=b(),N=`https://services.sheerid.com`,P=100,F=2e3,I=`
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
`,L=S({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function He(e){"use forget";let t=(0,Ue.c)(8),{sheerIdProgramId:n}=e,r=c(),i=r?.id??null,a=(0,V.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),ee(o,s);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,V.useEffect)(R,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,H.jsx)(B,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function R(){let e=z;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function z(e){e.persisted&&window.location.reload()}function B(e){"use forget";let t=(0,Ue.c)(102),{currentAccount:i,sheerIdProgramId:o}=e,c=se(),u=ie(),d=a(),f=s(),[p]=ce(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=l(),t[0]=h):h=t[0];let g=h,_;t[1]===p?_=t[2]:(_=()=>{xe(p)},t[1]=p,t[2]=_);let v;t[3]!==i||t[4]!==p?(v=[p,i,g],t[3]=i,t[4]=p,t[5]=v):v=t[5],ee(_,v);let te=(0,V.useRef)(!1),ne=(0,V.useRef)(!1),re=(0,V.useRef)(!0),b;t[6]===p?b=t[7]:(b=p.get(Ge),t[6]=p,t[7]=b);let ae=b,oe;t[8]===p?oe=t[9]:(oe=de(p),t[8]=p,t[9]=oe);let x=oe,S;if(t[10]!==x||t[11]!==ae){let e=new URLSearchParams({campaign:ye});x!=null&&e.set(he,x),S=e.toString(),t[10]=x,t[11]=ae,t[12]=S}else S=t[12];let fe=S,C=`/students/claim?${fe}`,me;if(t[13]!==fe){let e=new URLSearchParams(fe);e.delete(`campaign`),me=e.toString(),t[13]=fe,t[14]=me}else me=t[14];let _e=me,Se=`/students/2026${_e?`?${_e}`:``}#trigger_students-2026-faq-verification`,w;t[15]===f?.email?w=t[16]:(w=g&&(f?.email?.trim()||r()?.user?.email?.trim())||null,t[15]=f?.email,t[16]=w);let Te=w,Oe;t[17]!==C||t[18]!==o?(Oe={...we,landingPath:C,sheerIdProgramId:o},t[17]=C,t[18]=o,t[19]=Oe):Oe=t[19];let T=Oe,Me;t[20]!==i||t[21]!==T?(Me=i!=null&&(Ne(i)||!i.isPersonalAccount()||T.blocksMobileStoreSubscribers&&ge(i)),t[20]=i,t[21]=T,t[22]=Me):Me=t[22];let E=Me,Pe=g&&i!=null&&!E,Fe;t[23]===Pe?Fe=t[24]:(Fe={enabled:Pe,reportRefreshErrors:!0},t[23]=Pe,t[24]=Fe);let D=ke(T,Fe),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,Ie=je(O,k,T,x),Re,ze;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(Re=()=>(re.current=!0,()=>{re.current=!1}),ze=[],t[25]=Re,t[26]=ze):(Re=t[25],ze=t[26]),(0,V.useEffect)(Re,ze);let A,j;t[27]===C?(A=t[28],j=t[29]):(A=()=>{g||te.current||(te.current=!0,m({callbackUrl:Ce(C),fallbackScreenHint:`login`}))},j=[C,g],t[27]=C,t[28]=A,t[29]=j),(0,V.useEffect)(A,j);let M;t[30]!==d.isError||t[31]!==d.isFetching||t[32]!==d.isSuccess||t[33]!==C||t[34]!==i||t[35]!==D.name||t[36]!==E||t[37]!==u?(M=()=>{if(!g)return;let e=i==null&&!d.isFetching&&(d.isError||d.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||E||t)&&u(C,{replace:!0})},t[30]=d.isError,t[31]=d.isFetching,t[32]=d.isSuccess,t[33]=C,t[34]=i,t[35]=D.name,t[36]=E,t[37]=u,t[38]=M):M=t[38];let N;t[39]!==d.isError||t[40]!==d.isFetching||t[41]!==d.isSuccess||t[42]!==C||t[43]!==i||t[44]!==D||t[45]!==E||t[46]!==u?(N=[d.isError,d.isFetching,d.isSuccess,C,i,D,E,g,u],t[39]=d.isError,t[40]=d.isFetching,t[41]=d.isSuccess,t[42]=C,t[43]=i,t[44]=D,t[45]=E,t[46]=u,t[47]=N):N=t[47],(0,V.useEffect)(M,N);let P,F;t[48]!==k||t[49]!==C||t[50]!==i||t[51]!==D.name||t[52]!==E||t[53]!==u||t[54]!==O||t[55]!==Ie?(P=()=>{!g||i==null||E||D.name!==`needs-verification`||O!=null&&k!=null||ne.current||(ne.current=!0,Ie().then(()=>{!re.current||n()?.id!==i.id||De.getState().modalErrorMessage==null||u(C,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[k,C,i,D.name,E,g,u,O,Ie],t[48]=k,t[49]=C,t[50]=i,t[51]=D.name,t[52]=E,t[53]=u,t[54]=O,t[55]=Ie,t[56]=P,t[57]=F):(P=t[56],F=t[57]),(0,V.useEffect)(P,F);let I;t[58]===i?I=t[59]:(I=()=>{let e=i?.normalizedAccountUserId;i==null||typeof e!=`string`||be(`verification_submitted`,{identity:{accountId:i.id,accountUserId:e}})},t[58]=i,t[59]=I);let Be=I,L;t[60]!==C||t[61]!==u?(L=()=>{u(ue(C,le),{replace:!0})},t[60]=C,t[61]=u,t[62]=L):L=t[62];let Ve=L,He;t[63]!==k||t[64]!==C||t[65]!==i||t[66]!==E||t[67]!==o||t[68]!==O?(He=g&&i!=null&&O&&k&&!E?Ae(o,`${window.location.origin}${ue(C,le)}`,O,k):null,t[63]=k,t[64]=C,t[65]=i,t[66]=E,t[67]=o,t[68]=O,t[69]=He):He=t[69];let R=He,z;t[70]===c?z=t[71]:(z=c.formatMessage(U.artworkAlt),t[70]=c,t[71]=z);let B;t[72]===z?B=t[73]:(B=(0,H.jsx)(Ee,{altText:z,assetUrl:We,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[72]=z,t[73]=B);let Ke;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.title})}),t[74]=Ke):Ke=t[74];let W;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,H.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ke,(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopTitle})})]}),t[75]=W):W=t[75];let G;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,H.jsx)(`span`,{className:`lg:hidden`,children:(0,H.jsx)(y,{...U.description})}),t[76]=G):G=t[76];let K;t[77]===Symbol.for(`react.memo_cache_sentinel`)?(K=(0,H.jsx)(`span`,{className:`hidden lg:inline`,children:(0,H.jsx)(y,{...U.desktopDescription})}),t[77]=K):K=t[77];let q;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,H.jsx)(y,{...U.verificationHelp}),t[78]=q):q=t[78];let J;t[79]===Se?J=t[80]:(J=(0,H.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[W,(0,H.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[G,K,(0,H.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:Se,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[79]=Se,t[80]=J);let Y;t[81]!==B||t[82]!==J?(Y=(0,H.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,J]}),t[81]=B,t[82]=J,t[83]=Y):Y=t[83];let X;t[84]===c?X=t[85]:(X=c.formatMessage(U.verificationFormLabel),t[84]=c,t[85]=X);let Z;t[86]!==Te||t[87]!==c?(Z=Te?(0,H.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,H.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,H.jsx)(y,{...U.accountLabel}),(0,H.jsx)(pe,{content:c.formatMessage(U.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,H.jsx)(`button`,{...e,"aria-label":c.formatMessage(U.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,H.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,H.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:Te})]}):null,t[86]=Te,t[87]=c,t[88]=Z):Z=t[88];let Q;t[89]!==Be||t[90]!==Ve||t[91]!==c||t[92]!==O||t[93]!==R?(Q=R&&O?(0,H.jsx)(Le,{onSubmitted:Be,onSuccess:Ve,verificationId:O,verificationUrl:R}):(0,H.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(U.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[89]=Be,t[90]=Ve,t[91]=c,t[92]=O,t[93]=R,t[94]=Q):Q=t[94];let $;t[95]!==X||t[96]!==Z||t[97]!==Q?($=(0,H.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[95]=X,t[96]=Z,t[97]=Q,t[98]=$):$=t[98];let qe;return t[99]!==Y||t[100]!==$?(qe=(0,H.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,H.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[99]=Y,t[100]=$,t[101]=qe):qe=t[101],qe}var Ue,V,H,We,Ge,U,Ke=e((()=>{Ue=ne(),_e(),C(),Te(),Ve(),w(),T(),Oe(),Se(),Me(),fe(),i(),_(),o(),f(),me(),u(),V=t(x()),te(),v(),H=b(),We=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Ge=`students_2026_preview`,U=S({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),W,G,K,q,J,Y,X=e((()=>{v(),W=ne(),Pe(),Ke(),g(),G=b(),K={hasRouteMeta:!0},q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],J=re(function(){"use forget";let e=(0,W.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=oe(),i;e[0]===r?i=e[1]:(i=(0,G.jsx)(He,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,G.jsx)(Fe,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Y=ae(h)}));e((()=>{X()}))();export{Y as ErrorBoundary,J as default,K as handle,q as meta};
//# sourceMappingURL=students_.verify-cmalzxd3.js.map