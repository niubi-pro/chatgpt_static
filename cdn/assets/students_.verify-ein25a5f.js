import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{G9 as n,XG as r,_K as i,bq as a,cb as o,dK as s,dR as c,lR as l,lb as ee,tK as u,uK as d,v5 as f,vK as te,y5 as ne,yq as p}from"./4813494d-fgzk5uadh2hlkw93.js";import{Bt as re,Fn as m,Ht as ie,In as h,Ln as ae,Mt as oe,Ot as se,Q as ce,Rn as g,Sn as _,Vt as le,jn as v,zn as y}from"./2340486e-dyt4epctwx2pn2sj.js";import{Gqt as ue,JCt as de,Kqt as b,V3t as fe,X3t as pe,Y3t as me,dp as he,pp as x,qCt as ge,sp as _e}from"./conversation-small-cudd01juo7e4yskq.js";import{by as ve,xy as S}from"./30901919-nsytgrna6cqg57ax.js";import{$d as ye,Qd as C,Zd as be,ef as xe}from"./c2675c8c-k523hcgvefxht2ry.js";import{n as Se,t as Ce}from"./6105d6cc-mew2ck1jny47mv5m.js";import{n as w,t as we}from"./9bfdcf20-7c17y9xc09ybf81y.js";import{a as Te,d as Ee,f as De,l as T,n as Oe,o as ke,r as E,t as D,u as Ae}from"./d4df9516-bgyknddx4gne7q5s.js";import{n as O,t as k}from"./759cd6d0-kz218x6bb24dxv1r.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function j(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function M(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,he),e}function N(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function je(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:o}=e,s=ae(),c=a(),l=(0,L.useRef)(null),ee=(0,L.useRef)(null),[u]=(0,L.useState)(F),d;if(t[0]!==u||t[1]!==c||t[2]!==r||t[3]!==n){bb0:{if(!c||u==null){d=null;break bb0}let e=j(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,M().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=c,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,te,ne;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==o||t[9]!==r?(te=()=>{if(u==null||f==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!A(n)||n.type!==`hook`||!A(n.hook)||!A(n.hook.data)||n.hook.data.verificationId!==r)return;let a=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof a==`string`&&a!==`collectStudentPersonalInfo`&&a!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&a===`success`;if(!(!s&&!c)){if(ee.current!==r){ee.current=r;try{i?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},ne=[u,f,i,o,r],t[5]=u,t[6]=f,t[7]=i,t[8]=o,t[9]=r,t[10]=te,t[11]=ne):(te=t[10],ne=t[11]),(0,L.useEffect)(te,ne),f==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let p;t[16]===s?p=t[17]:(p=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=p);let re;return t[18]!==f||t[19]!==p?(re=(0,R.jsx)(`iframe`,{ref:l,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:P,referrerPolicy:`no-referrer`,src:f,title:p}),t[18]=f,t[19]=p,t[20]=re):re=t[20],re}function P(e){N(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=_(),x(),p(),L=t(y()),h(),R=g(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=m({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=s(),i=r?.id??null,a=(0,W.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(D.clearModalError(),D.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),ee(o,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:i,sheerIdProgramId:a}=e,o=ae(),s=oe(),l=d(),u=c(),[f]=re(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=ne(),t[0]=p):p=t[0];let m=p,ie;t[1]===f?ie=t[2]:(ie=()=>{ye(f)},t[1]=f,t[2]=ie);let h;t[3]!==i||t[4]!==f?(h=[f,i,m],t[3]=i,t[4]=f,t[5]=h):h=t[5],ee(ie,h);let se=(0,W.useRef)(!1),ce=(0,W.useRef)(!1),g=(0,W.useRef)(!0),_;t[6]===f?_=t[7]:(_=f.get(Be),t[6]=f,t[7]=_);let le=_,y=`/students/2026#trigger_students-2026-faq-verification`,de;t[8]===le?de=t[9]:(de=new URLSearchParams({campaign:he}).toString(),t[8]=le,t[9]=de);let b=`/students/claim?${de}`,pe;t[10]===u?.email?pe=t[11]:(pe=m&&(u?.email?.trim()||n()?.user?.email?.trim())||null,t[10]=u?.email,t[11]=pe);let x=pe,S;t[12]!==b||t[13]!==a?(S={..._e,landingPath:b,sheerIdProgramId:a},t[12]=b,t[13]=a,t[14]=S):S=t[14];let C=S,Se;t[15]!==i||t[16]!==C?(Se=i!=null&&(Ae(i)||!i.isPersonalAccount()||C.blocksMobileStoreSubscribers&&ue(i)),t[15]=i,t[16]=C,t[17]=Se):Se=t[17];let w=Se,we=m&&i!=null&&!w,Ee;t[18]===we?Ee=t[19]:(Ee={enabled:we,reportRefreshErrors:!0},t[18]=we,t[19]=Ee);let T=De(C,Ee),E=T.name===`needs-verification`?T.verificationId??null:null,D=T.name===`needs-verification`?T.accountVerificationId??null:null,O=ke(E,D,C),k,A;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(g.current=!0,()=>{g.current=!1}),A=[],t[20]=k,t[21]=A):(k=t[20],A=t[21]),(0,W.useEffect)(k,A);let j,M;t[22]===b?(j=t[23],M=t[24]):(j=()=>{m||se.current||(se.current=!0,te({callbackUrl:be(b),fallbackScreenHint:`login`}))},M=[b,m],t[22]=b,t[23]=j,t[24]=M),(0,W.useEffect)(j,M);let N;t[25]!==l.isError||t[26]!==l.isFetching||t[27]!==l.isSuccess||t[28]!==b||t[29]!==i||t[30]!==T.name||t[31]!==w||t[32]!==s?(N=()=>{if(!m)return;let e=i==null&&!l.isFetching&&(l.isError||l.isSuccess),t=T.name===`coming-soon`||T.name===`error`||T.name===`verified`||T.name===`enrolled`;(e||w||t)&&s(b,{replace:!0})},t[25]=l.isError,t[26]=l.isFetching,t[27]=l.isSuccess,t[28]=b,t[29]=i,t[30]=T.name,t[31]=w,t[32]=s,t[33]=N):N=t[33];let P;t[34]!==l.isError||t[35]!==l.isFetching||t[36]!==l.isSuccess||t[37]!==b||t[38]!==i||t[39]!==T||t[40]!==w||t[41]!==s?(P=[l.isError,l.isFetching,l.isSuccess,b,i,T,w,m,s],t[34]=l.isError,t[35]=l.isFetching,t[36]=l.isSuccess,t[37]=b,t[38]=i,t[39]=T,t[40]=w,t[41]=s,t[42]=P):P=t[42],(0,W.useEffect)(N,P);let F,I;t[43]!==D||t[44]!==b||t[45]!==i||t[46]!==T.name||t[47]!==w||t[48]!==s||t[49]!==E||t[50]!==O?(F=()=>{!m||i==null||w||T.name!==`needs-verification`||E!=null&&D!=null||ce.current||(ce.current=!0,O().then(()=>{!g.current||r()?.id!==i.id||Te.getState().modalErrorMessage==null||s(b,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[D,b,i,T.name,w,m,s,E,O],t[43]=D,t[44]=b,t[45]=i,t[46]=T.name,t[47]=w,t[48]=s,t[49]=E,t[50]=O,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===i?L=t[54]:(L=()=>{let e=i?.normalizedAccountUserId;i==null||typeof e!=`string`||xe(`verification_submitted`,{identity:{accountId:i.id,accountUserId:e}})},t[53]=i,t[54]=L);let R=L,z;t[55]!==b||t[56]!==s?(z=()=>{s(me(b,fe),{replace:!0})},t[55]=b,t[56]=s,t[57]=z):z=t[57];let Me=z,B;t[58]!==D||t[59]!==b||t[60]!==i||t[61]!==w||t[62]!==a||t[63]!==E?(B=m&&i!=null&&E&&D&&!w?Oe(a,`${window.location.origin}${me(b,fe)}`,E,D):null,t[58]=D,t[59]=b,t[60]=i,t[61]=w,t[62]=a,t[63]=E,t[64]=B):B=t[64];let V=B,H;t[65]===o?H=t[66]:(H=o.formatMessage(K.artworkAlt),t[65]=o,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Ce,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(v,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===y?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:y,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=y,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===o?Y=t[80]:(Y=o.formatMessage(K.verificationFormLabel),t[79]=o,t[80]=Y);let X;t[81]!==x||t[82]!==o?(X=x?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(v,{...K.accountLabel}),(0,G.jsx)(ge,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:x})]}):null,t[81]=x,t[82]=o,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==o||t[87]!==E||t[88]!==V?(Z=V&&E?(0,G.jsx)(je,{onSubmitted:R,onSuccess:Me,verificationId:E,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=o,t[87]=E,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=_(),S(),de(),Se(),Ne(),x(),T(),Ee(),C(),E(),pe(),u(),i(),l(),f(),b(),o(),W=t(y()),h(),ce(),G=g(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=m({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{ce(),J=_(),O(),q(),w(),Y=g(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=le(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=se(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(k,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ie(we)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-ein25a5f.js.map