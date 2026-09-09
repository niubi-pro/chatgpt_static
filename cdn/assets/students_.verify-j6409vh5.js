import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{KG as n,L8 as r,R8 as i,VG as a,cK as o,cb as s,dq as c,j9 as l,lK as u,nK as d,rR as f,sb as p,tK as ee,tR as m,uq as h}from"./4813494d-bgyv5408fxme7xxv.js";import{Bt as te,Fn as g,Ht as ne,In as _,Ln as re,Mt as ie,Ot as ae,Q as oe,Rn as v,Sn as y,Vt as se,jn as b,zn as ce}from"./2340486e-dyt4epctwx2pn2sj.js";import{Gf as le,J4t as ue,Vf as de,dCt as x,dqt as S,n3t as fe,qf as C,r3t as w,uCt as pe,uqt as me}from"./conversation-small-hg48c5uox88r7a00.js";import{vy as he,yy as T}from"./30901919-l4xzix13bwjuaahj.js";import{Jd as ge,Kd as _e,Yd as ve,qd as E}from"./c2675c8c-lz0unwv5yke95cwv.js";import{n as D,t as ye}from"./6105d6cc-pmskyeuo41u0ryxw.js";import{n as O,t as be}from"./9bfdcf20-jg6zxc8o9jubyp9t.js";import{a as xe,d as k,f as Se,l as A,n as Ce,o as we,r as j,t as M,u as Te}from"./d4df9516-l4ckbmrwhb9zzlqg.js";import{n as Ee,t as De}from"./759cd6d0-m91km0itlap2rino.js";function N(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Oe(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function ke(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,le),e}function Ae(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function je(e){"use forget";let t=(0,F.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=re(),s=c(),l=(0,I.useRef)(null),u=(0,I.useRef)(null),[d]=(0,I.useState)(P),f;if(t[0]!==d||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||d==null){f=null;break bb0}let e=Oe(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,ke().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=s,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,ee,m;if(t[5]!==d||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!N(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(N(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!N(n)||n.type!==`hook`||!N(n.hook)||!N(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{i?.()}catch{}}c&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[d,p,i,a,r],t[5]=d,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=m):(ee=t[10],m=t[11]),(0,I.useEffect)(ee,m),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=h);let te;return t[18]!==p||t[19]!==h?(te=(0,L.jsx)(`iframe`,{ref:l,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Me,referrerPolicy:`no-referrer`,src:p,title:h}),t[18]=p,t[19]=h,t[20]=te):te=t[20],te}function Me(e){Ae(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,Ne=e((()=>{F=y(),C(),h(),I=t(ce()),_(),L=v(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,H=`
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
`,U=g({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=d(),i=r?.id??null,a=(0,W.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(M.clearModalError(),M.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),s(o,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let u=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==u?(f=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=f):f=t[7],f}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:n,sheerIdProgramId:r}=e,o=re(),c=ie(),d=ee(),p=f(),[m]=te(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=i(),t[0]=h):h=t[0];let g=h,ne;t[1]===m?ne=t[2]:(ne=()=>{ge(m)},t[1]=m,t[2]=ne);let _;t[3]!==n||t[4]!==m?(_=[m,n,g],t[3]=n,t[4]=m,t[5]=_):_=t[5],s(ne,_);let ae=(0,W.useRef)(!1),oe=(0,W.useRef)(!1),v=(0,W.useRef)(!0),y;t[6]===m?y=t[7]:(y=m.get(Be),t[6]=m,t[7]=y);let se=y,ce=`/students/2026#trigger_students-2026-faq-verification`,x;t[8]===se?x=t[9]:(x=new URLSearchParams({campaign:le}).toString(),t[8]=se,t[9]=x);let S=`/students/claim?${x}`,C;t[10]===p?.email?C=t[11]:(C=g&&(p?.email?.trim()||l()?.user?.email?.trim())||null,t[10]=p?.email,t[11]=C);let w=C,T;t[12]!==S||t[13]!==r?(T={...de,landingPath:S,sheerIdProgramId:r},t[12]=S,t[13]=r,t[14]=T):T=t[14];let E=T,D;t[15]!==n||t[16]!==E?(D=n!=null&&(Te(n)||!n.isPersonalAccount()||E.blocksMobileStoreSubscribers&&me(n)),t[15]=n,t[16]=E,t[17]=D):D=t[17];let O=D,be=g&&n!=null&&!O,k;t[18]===be?k=t[19]:(k={enabled:be,reportRefreshErrors:!0},t[18]=be,t[19]=k);let A=Se(E,k),j=A.name===`needs-verification`?A.verificationId??null:null,M=A.name===`needs-verification`?A.accountVerificationId??null:null,Ee=we(j,M,E),De,N;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(De=()=>(v.current=!0,()=>{v.current=!1}),N=[],t[20]=De,t[21]=N):(De=t[20],N=t[21]),(0,W.useEffect)(De,N);let Oe,ke;t[22]===S?(Oe=t[23],ke=t[24]):(Oe=()=>{g||ae.current||(ae.current=!0,u({callbackUrl:_e(S),fallbackScreenHint:`login`}))},ke=[S,g],t[22]=S,t[23]=Oe,t[24]=ke),(0,W.useEffect)(Oe,ke);let Ae;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==S||t[29]!==n||t[30]!==A.name||t[31]!==O||t[32]!==c?(Ae=()=>{if(!g)return;let e=n==null&&!d.isFetching&&(d.isError||d.isSuccess),t=A.name===`coming-soon`||A.name===`error`||A.name===`verified`||A.name===`enrolled`;(e||O||t)&&c(S,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=S,t[29]=n,t[30]=A.name,t[31]=O,t[32]=c,t[33]=Ae):Ae=t[33];let Me;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==S||t[38]!==n||t[39]!==A||t[40]!==O||t[41]!==c?(Me=[d.isError,d.isFetching,d.isSuccess,S,n,A,O,g,c],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=S,t[38]=n,t[39]=A,t[40]=O,t[41]=c,t[42]=Me):Me=t[42],(0,W.useEffect)(Ae,Me);let P,F;t[43]!==M||t[44]!==S||t[45]!==n||t[46]!==A.name||t[47]!==O||t[48]!==c||t[49]!==j||t[50]!==Ee?(P=()=>{!g||n==null||O||A.name!==`needs-verification`||j!=null&&M!=null||oe.current||(oe.current=!0,Ee().then(()=>{!v.current||a()?.id!==n.id||xe.getState().modalErrorMessage==null||c(S,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[M,S,n,A.name,O,g,c,j,Ee],t[43]=M,t[44]=S,t[45]=n,t[46]=A.name,t[47]=O,t[48]=c,t[49]=j,t[50]=Ee,t[51]=P,t[52]=F):(P=t[51],F=t[52]),(0,W.useEffect)(P,F);let I;t[53]===n?I=t[54]:(I=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[53]=n,t[54]=I);let L=I,R;t[55]!==S||t[56]!==c?(R=()=>{c(fe(S,ue),{replace:!0})},t[55]=S,t[56]=c,t[57]=R):R=t[57];let z=R,B;t[58]!==M||t[59]!==S||t[60]!==n||t[61]!==O||t[62]!==r||t[63]!==j?(B=g&&n!=null&&j&&M&&!O?Ce(r,`${window.location.origin}${fe(S,ue)}`,j,M):null,t[58]=M,t[59]=S,t[60]=n,t[61]=O,t[62]=r,t[63]=j,t[64]=B):B=t[64];let V=B,H;t[65]===o?H=t[66]:(H=o.formatMessage(K.artworkAlt),t[65]=o,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(ye,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(b,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(b,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(b,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(b,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(b,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===ce?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ce,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=ce,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===o?Y=t[80]:(Y=o.formatMessage(K.verificationFormLabel),t[79]=o,t[80]=Y);let X;t[81]!==w||t[82]!==o?(X=w?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(b,{...K.accountLabel}),(0,G.jsx)(pe,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:w})]}):null,t[81]=w,t[82]=o,t[83]=X):X=t[83];let Z;t[84]!==L||t[85]!==z||t[86]!==o||t[87]!==j||t[88]!==V?(Z=V&&j?(0,G.jsx)(je,{onSubmitted:L,onSuccess:z,verificationId:j,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=L,t[85]=z,t[86]=o,t[87]=j,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=y(),T(),x(),D(),Ne(),C(),A(),k(),E(),j(),w(),n(),o(),m(),r(),S(),p(),W=t(ce()),_(),oe(),G=v(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=g({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{oe(),J=y(),Ee(),q(),O(),Y=v(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=se(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ae(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(De,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ne(be)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-j6409vh5.js.map