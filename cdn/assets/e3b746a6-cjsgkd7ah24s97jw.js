const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-djh6wxv1coljjld0.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-fgzk5uadh2hlkw93.js","assets/2340486e-dyt4epctwx2pn2sj.js","assets/conversation-small-cudd01juo7e4yskq.js","assets/30901919-nsytgrna6cqg57ax.js","assets/c470f5ab-od3wlt7ksm2ly75i.js","assets/0e5afe53-db7ekc0mjsrzz9jj.js","assets/conversation-small-b6m9gklo.css","assets/8b34dbc2-g959q8r0i61e6rlk.js","assets/82782bc9-nwd2ftzke6bispa2.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$B as r,Ap as i,Aw as a,B5 as o,Cy as s,Cz as c,E6 as l,G8 as u,JK as d,L5 as f,Lu as p,MJ as m,Op as h,Q0 as g,QB as _,S6 as v,Sz as y,V5 as b,VJ as x,W1 as S,X8 as ee,YK as C,Z0 as w,Z8 as T,_q as te,aP as E,bs as D,cb as O,dP as k,hM as ne,hP as A,i5 as re,ks as ie,kw as j,lb as ae,m2 as M,mM as N,o5 as P,p2 as F,pM as oe,pP as se,vM as ce,vq as le,wy as ue,yQ as I,z1 as L,zu as de}from"./4813494d-fgzk5uadh2hlkw93.js";import{Fn as R,In as fe,Ln as pe,Rn as me,Sn as z,hn as B,jn as V,mn as H,zn as U}from"./2340486e-dyt4epctwx2pn2sj.js";import{B6 as he,BTt as ge,CD as _e,Fwn as ve,Fx as ye,G6 as be,H6 as xe,Iwn as Se,Ix as Ce,K6 as we,Ln as Te,MEn as Ee,Mu as De,NC as Oe,NEn as ke,Nu as Ae,PC as je,Q6 as W,R6 as Me,RTt as Ne,Rn as Pe,UDn as G,V6 as Fe,VDn as Ie,X6 as Le,Z6 as Re,bD as ze,pD as K,q6 as Be,z6 as Ve,zTt as He}from"./conversation-small-cudd01juo7e4yskq.js";import{AE as Ue,bx as We,fw as Ge,kE as Ke,pw as qe,yx as Je}from"./30901919-nsytgrna6cqg57ax.js";import{a as Ye,d as Xe,o as Ze,r as Qe,t as $e,u as et}from"./8d846022-meglr123wki13zk0.js";import{i as tt,n as nt,r as rt}from"./91969468-fgrlgki881gurj1z.js";import{n as it,t as at}from"./4d271a7b-k1w5y55nr2ndo1un.js";import{n as ot,r as st}from"./58bafdef-ok4825my7d6m4ypv.js";import{a as ct,i as lt}from"./e01e2324-hmjx6slgzsb3kyln.js";import{i as q,t as ut}from"./5dc32f04-nwx6owk6i3vvvf26.js";import{i as dt,n as ft,r as pt,t as mt}from"./9eb56efa-bb1xcvb8j0f2ueca.js";import{i as ht,n as gt,r as _t,t as vt}from"./cc79834b-kho457jr01f5oe8y.js";function yt(){return u(`2779568043`)}function bt(){return u(`3864712762`)}function xt(){return ee(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var St=e((()=>{T()}));function Ct({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var wt=e((()=>{}));function Tt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function Et(){return typeof performance<`u`?performance.now():Date.now()}function Dt(e){return new TextEncoder().encode(e).byteLength/1024}function Ot(e){return e instanceof Error?e.name:`unknown`}function kt(e,t,n=1){b.count(f.APP_BLOCKS,e,Tt(t),n)}function At(e,t,n){b.hist(f.APP_BLOCKS,e,Tt(n),t)}function jt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Mt.useRef)(Et()),i=(0,Mt.useRef)(null),a=(0,Mt.useRef)(!1),o=(0,Mt.useRef)(!1),s=N(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=N((n=e)=>{o.current||(o.current=!0,At(Ft,Dt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:N((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Et(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),kt(Lt,t);let _=(e,n)=>{f||(f=!0,kt(J,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Et();At(It,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,At(Nt,s-r.current,t),n!=null&&At(Rt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Et(),g=n,At(Y,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),kt(Pt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Mt,Nt,Pt,Ft,It,J,Lt,Y,Rt,zt=e((()=>{o(),oe(),Mt=n(U()),Nt=`app_block.first_render_time_ms`,Pt=`app_block.load.failure`,Ft=`app_block.payload_size_kb`,It=`app_block.ready_to_first_paint_ms`,J=`app_block.render.outcome`,Lt=`app_block.render.start`,Y=`app_block.sandbox_eval_to_ready_ms`,Rt=`app_block.widget_ref_to_first_paint_ms`}));function Bt(e){return e==="default"||e===`open`?e:null}function X({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Vt=e((()=>{})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),qt,Jt=e((()=>{qt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Yt=e((()=>{})),Xt,Zt=e((()=>{Yt(),Xt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function Qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var $t=e((()=>{}));function en(e){return String.raw(dn||=Qt([`<script>
  (() => {
    const isOpenStyleMode = `,`;

    function updateSurface(surface) {
      if (surface !== "inline" && surface !== "stage") {
        return;
      }

      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");
      const surfaceBackgrounds = isDarkMode
        ? { inline: "#000000", stage: "#212121" }
        : { inline: "#fcfcfc", stage: "#ffffff" };
      root.setAttribute("data-app-block-surface", surface);
      root.style.backgroundColor =
        surface === "inline" && isOpenStyleMode
          ? "transparent"
          : "var(--main-surface-primary, " + surfaceBackgrounds[surface] + ")";
    }

    window.addEventListener("openai:set_globals", (event) => {
      const surface = event.detail?.globals?.__appBlockSurface;
      if (surface != null) {
        updateSurface(surface);
      }
    });

    const initialSurface =
      window.openai?.__appBlockSurface ??
      document.documentElement.getAttribute("data-app-block-surface") ??
      "inline";
    updateSurface(initialSurface);
  })();
<\/script>`]),e===`open`)}function tn(e){return/<!doctype\b|<html[\s>]/i.test(e)}function nn(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function rn(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function an(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function on(e){try{return new URL(e).origin}catch{return null}}function sn(e){return gn.has(e)?e:`default`}function cn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function ln(e=[]){let t=an(Xt),n=an(Gt),r=[on(pn),on(mn),on(t),on(n),...hn,...e.map(on)];return Array.from(new Set(r.filter(e=>e!=null)))}function un(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?en(l):``;if(!s&&tn(u))return{html:c?nn(u,d):u,expectReadySignal:!1};let f=rn(n),p=l===`open`?Ht:qt,m=an(l===`open`?Gt:Xt),h=sn(r),g=cn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${pn}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${m}" />`:`<style>${p}</style>`}
    ${s?_n:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?vn:``}
  </body>
</html>`}}var dn,fn,pn,mn,hn,gn,_n,vn,yn=e((()=>{Ut(),Kt(),Jt(),Zt(),$t(),pn=`https://cdn.tailwindcss.com`,mn=`https://images.openai.com`,hn=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],gn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),_n=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,vn=String.raw(fn||=Qt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`],[`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))}));function bn(){"use forget";let e=(0,xn.useContext)(Sn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var xn,Sn,Cn=e((()=>{xn=n(U()),Sn=(0,xn.createContext)(null)})),wn,Tn=e((()=>{C(),B(),wn=d(()=>H(()=>import(`./7aa2b76f-djh6wxv1coljjld0.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function En(e){"use forget";let t=(0,kn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,An.useId)()}`,u=(0,An.useRef)(null),[d,f]=(0,An.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,_=o.refIndex,v=a??null,y;t[0]!==v||t[1]!==p?(y={appBlockId:p,conversationId:v},t[0]=v,t[1]=p,t[2]=y):y=t[2];let b=y,x=g(Me),S;t[3]!==x||t[4]!==b?(S=xe(x,b),t[3]=x,t[4]=b,t[5]=S):S=t[5];let ee=S,C=x?.appBlockId===p&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),w=ee||C,T;t[6]!==x||t[7]!==l||t[8]!==b?(T=be(x,b,l),t[6]=x,t[7]=l,t[8]=b,t[9]=T):T=t[9];let te=T,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{u.current?.focus()},t[10]=E):E=t[10];let D=E,O=d?.supportsAtomicMove?d:void 0,k;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==_?(k={appBlockId:p,libraryFileId:m,messageId:h,refIndex:_},t[11]=p,t[12]=m,t[13]=h,t[14]=_,t[15]=k):k=t[15];let ne;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==O||t[20]!==k||t[21]!==c?(ne={additionalResourceDomains:n,code:i,focusOnClose:D,sharedPreview:O,source:k,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=O,t[20]=k,t[21]=c,t[22]=ne):ne=t[22];let A=ne,re,ie;t[23]!==A||t[24]!==ee||t[25]!==b?(re=()=>{ee&&we(b,A)},ie=[A,ee,b],t[23]=A,t[24]=ee,t[25]=b,t[26]=re,t[27]=ie):(re=t[26],ie=t[27]),(0,An.useEffect)(re,ie);let j;t[28]!==A||t[29]!==te||t[30]!==b?(j=()=>{Ve(b,te,A)},t[28]=A,t[29]=te,t[30]=b,t[31]=j):j=t[31];let ae=j,M;t[32]!==w||t[33]!==C||t[34]!==ae||t[35]!==d?(M={isExpanded:w,isViewingHistoricalVersion:C,openExpandedView:ae,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=w,t[33]=C,t[34]=ae,t[35]=d,t[36]=M):M=t[36];let N=M,P;return t[37]!==r||t[38]!==N?(P=(0,jn.jsx)(Sn.Provider,{value:N,children:r}),t[37]=r,t[38]=N,t[39]=P):P=t[39],P}function Dn(e){"use forget";let t=(0,kn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=_t(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:De(i).height$()??0,t[0]=i,t[1]=l);let u=g(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,jn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,jn.jsxs)(vt.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let _;t[9]===r?_=t[10]:(_=(0,jn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==h||t[12]!==_?(v=(0,jn.jsx)(vt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:_}),t[11]=h,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==m||t[15]!==v?(y=(0,jn.jsxs)(jn.Fragment,{children:[m,v]}),t[14]=m,t[15]=v,t[16]=y):y=t[16],y}function On(e){"use forget";let t=(0,kn.c)(5),{conversation:n,paneId:r}=e,i=ht(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,jn.jsx)(wn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var kn,An,jn,Mn=e((()=>{kn=z(),Ae(),gt(),w(),An=n(U()),Cn(),Fe(),Tn(),jn=me()}));function Nn(){"use forget";let e=(0,Pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Fn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,Fn.jsx)(V,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Pn,Fn,In=e((()=>{Pn=z(),fe(),Fn=me()}));function Ln(e,t){"use forget";let n=(0,zn.c)(39),r=t===void 0||t,i=pe(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Un.generatingApp,{title:e}):i.formatMessage(Un.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Un.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Un.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Un.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Un.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Un.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Un.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Un.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Un.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Un.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Un.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Bn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Hn);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Bn.useEffect)(x,S),v[y]??v[0]??``}function Rn(e){"use forget";let t=(0,zn.c)(2),{title:n}=e,r=Ln(n),i;return t[0]===r?i=t[1]:(i=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Vn.jsx)(ut,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{zn=z(),q(),M(),Bn=n(U()),fe(),Vn=me(),Hn=2800,Un=R({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Wn=e=>{"use forget";let t=(0,zn.c)(11),{isVisible:n,title:r}=e,i=Ln(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=F(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=F(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Vn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Vn.jsx)(`div`,{className:`pb-3`,children:(0,Vn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Kn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Jn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===v.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=qn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===ar?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=I(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&nr(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function qn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==ar||e.library_file_id==null?null:{appBlockId:Ct({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Jn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==or||e.category!==ar||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Yn(r,`content`),a=Yn(r,`entrypoint`)??`index.html`,o=er(r,a),s=Zn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Yn(r,`app_block_id`)??Ct({messageId:t,refIndex:n}),bundleVersion:Xn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Zn(o,`current_content_file_id`),entrypoint:a,iconSvg:Yn(r,`icon_svg`),language:tr(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Zn(o,`library_file_name`),libraryFileVersionNumber:$n(Qn(o,`library_file_version_number`)),mimeType:Zn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Bt(Yn(r,`style_mode`)),title:Yn(r,`display_name`)??Yn(r,`title`)}}function Yn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Xn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Zn(e,t){return typeof e!=`object`||!e?null:Yn(e,t)}function Qn(e,t){return typeof e!=`object`||!e?null:Xn(e,t)}function $n(...e){for(let t of e)if(t!=null)return t;return null}function er(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Yn(r,`library_file_id`)!=null&&(n??=r,Yn(r,`path`)===t))return r;return n}function tr(){return`html`}function nr(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function rr(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function ir(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!rr(r,e))return!1}return!0}var ar,or,sr,cr=e((()=>{l(),se(),de(),K(),L(),wt(),Vt(),ar=`app_block`,or=`client_defined_widget`,sr=E(e=>S(()=>Kn(p(e).flatMap(e=>e.messages)),{equals:ir}))}));function lr({appBlockId:e,conversation:t}){return t==null?null:sr(t).get(e)??null}function ur(e){return e?.serverId$()??void 0}function dr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:He(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function fr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:a}){if(n==null||e==null){r(null);return}let o=new AbortController;return Ne({abortSignal:o.signal,fileId:e,serverThreadId:a}).then(e=>{o.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{o.signal.aborted||r({content:null,key:t,status:i(e)?`missing`:`failed`})}),()=>{o.abort()}}function pr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var hr=e((()=>{h(),ge(),cr()})),gr=t({AppBlock:()=>yr,AppBlockPreviewLoadingState:()=>Rr,AppBlockSandboxPreview:()=>Fr});function _r(e){let t=e.search($r),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function vr(e){let t=_r(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(ei))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(ti)!=null}function yr(e){"use forget";let t=(0,Z.c)(118),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:_,libraryFileId:v,libraryFileVersionNumber:y,messageId:b,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:C,ref:w,refIndex:T,styleMode:te,title:E,variant:D,widgetName:O,widgetRefSeenAtMs:ne}=e,re=c===void 0||c,j=f!==void 0&&f,ae=h!==void 0&&h,M=_!==void 0&&_,N=C!==void 0&&C,P=D===void 0?`inline`:D,F=A(),oe;t[0]===F?oe=t[1]:(oe=()=>F!=null&&Se(F),t[0]=F,t[1]=oe);let se=g(oe),ce;t[2]!==p||t[3]!==F?(ce=p==null?F:k(p),t[2]=p,t[3]=F,t[4]=ce):ce=t[4];let le=ce,ue=b!=null&&T!=null?Ct({messageId:b,refIndex:T}):void 0,I=r??ue??Ct({messageId:b??d,refIndex:T??0}),L=g(()=>ze({conversation:F??null,instanceId:I,messageId:b,refIndex:T}))??u,de=g(()=>a!=null||L!=null?null:lr({appBlockId:I,conversation:F??null})),R=a??de,fe;t[5]===F?fe=t[6]:(fe=()=>ur(F??null),t[5]=F,t[6]=fe);let pe=g(fe),me=x(F?.id),z=pe??me,B;t[7]!==l||t[8]!==v||t[9]!==y||t[10]!==z||t[11]!==R?(B=dr({currentContentFileId:l,libraryFileId:v,libraryFileVersionNumber:y,serverThreadId:z,source:R}),t[7]=l,t[8]=v,t[9]=y,t[10]=z,t[11]=R,t[12]=B):B=t[12];let V=B,[H,U]=(0,Q.useState)(null),[ge,_e]=(0,Q.useState)(0),ve;t[13]!==ge||t[14]!==V.libraryContentKey?(ve=[V.libraryContentKey,ge],t[13]=ge,t[14]=V.libraryContentKey,t[15]=ve):ve=t[15];let be=ve.join(`\0`),xe,Ce;t[16]!==i||t[17]!==be||t[18]!==V.contentFileId||t[19]!==V.libraryFileId||t[20]!==L||t[21]!==z?(xe=()=>{if(!(i!=null||L===`collapsed`))return fr({contentFileId:V.contentFileId,libraryContentKey:be,libraryFileId:V.libraryFileId,onContentStateChange:U,serverThreadId:z})},Ce=[i,V.contentFileId,V.libraryFileId,be,L,z],t[16]=i,t[17]=be,t[18]=V.contentFileId,t[19]=V.libraryFileId,t[20]=L,t[21]=z,t[22]=xe,t[23]=Ce):(xe=t[22],Ce=t[23]),(0,Q.useEffect)(xe,Ce);let we=pr({appBlockId:I,contentFileId:V.contentFileId,currentContentFileId:l,libraryContent:H,libraryContentKey:be,libraryFileId:v,libraryFileVersionNumber:y,source:R}),Te=H?.key===be?H:null,Ee;t[24]!==we?.libraryFileId||t[25]!==v?(Ee=()=>he(we?.libraryFileId??v),t[24]=we?.libraryFileId,t[25]=v,t[26]=Ee):Ee=t[26];let De=g(Ee),Oe=we?.libraryFileVersionNumber??y,ke=De!=null&&(Oe==null||De.versionNumber>=Oe)?De.code:void 0,Ae=ke??i??we?.content??s??null,je=we?.iconSvg??m??null,W=we?.libraryFileId??v,Me=W==null&&i==null&&ke==null&&l==null&&R?.currentContentFileId==null&&R?.latestPatchMessageId==null,Pe;t[27]!==Me||t[28]!==s||t[29]!==b||t[30]!==Ae||t[31]!==T||t[32]!==R?(Pe=Me?R==null?b!=null&&T!=null&&s!=null&&Ae===s?{messageId:b,refIndex:T}:null:R.messageId.length>0&&R.content!=null&&Ae===R.content?{messageId:R.messageId,refIndex:R.refIndex}:null:null,t[27]=Me,t[28]=s,t[29]=b,t[30]=Ae,t[31]=T,t[32]=R,t[33]=Pe):Pe=t[33];let G=Pe,Fe=P===`artifact`,Ie=we?.styleMode??te??(Fe&&N?`open`:void 0),Le;t[34]!==W||t[35]!==Ie?(Le=X({explicitStyleMode:Ie,libraryFileId:W}),t[34]=W,t[35]=Ie,t[36]=Le):Le=t[36];let Re=Le,K=we?.title??E,Be;t[37]===F?Be=t[38]:(Be=()=>F!=null&&ie(F)?`work`:`chat`,t[37]=F,t[38]=Be);let He=g(Be),Ue;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=xt(),t[39]=Ue):Ue=t[39];let We=Ue,Ge=N,Ke=Fe&&Re===`open`,qe=L===`collapsed`||L==null&&re&&we?.latestPatchMessageId!=null&&we.latestPatchMessageId!==b,Je=s!=null||l!=null,Ye;t[40]!==p||t[41]!==s||t[42]!==F?.id||t[43]!==l||t[44]!==I||t[45]!==y||t[46]!==b||t[47]!==W||t[48]!==Re||t[49]!==K||t[50]!==T||t[51]!==z||t[52]!==R?.messageId?(Ye=async e=>{let t=s;if(t==null&&l!=null)try{t=await Ne({abortSignal:new AbortController().signal,fileId:l,serverThreadId:z})}catch{return}t!=null&&Ve({appBlockId:I,conversationId:F?.id??p??null,isOriginalVersion:!0,versionNumber:y??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:W,messageId:R?.messageId??b,refIndex:T},styleMode:Re,title:K})},t[40]=p,t[41]=s,t[42]=F?.id,t[43]=l,t[44]=I,t[45]=y,t[46]=b,t[47]=W,t[48]=Re,t[49]=K,t[50]=T,t[51]=z,t[52]=R?.messageId,t[53]=Ye):Ye=t[53],F?.id,R?.messageId;let Xe=Ye;if(ae&&!Ge){let e;return t[54]===K?e=t[55]:(e=(0,$.jsx)(Rn,{title:K}),t[54]=K,t[55]=e),e}let Ze=se&&s!=null;if(Te?.status===`missing`&&!Ze)return null;if(qe){let e=Je?Xe:void 0,n;return t[56]!==K||t[57]!==e?(n=(0,$.jsx)(Nr,{onView:e,title:K}),t[56]=K,t[57]=e,t[58]=n):n=t[58],n}let Qe=Ae??(Ge&&ae?``:null);if(Qe==null){if(we?.latestPatchMessageId!=null){let e=F?.id??p,n=Te?.status===`failed`,r;t[59]===_e?r=t[60]:(r=()=>_e(br),t[59]=_e,t[60]=r);let i;return t[61]!==I||t[62]!==Fe||t[63]!==je||t[64]!==K||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(wr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:je,onRetry:r,showHeader:Fe,title:K}),t[61]=I,t[62]=Fe,t[63]=je,t[64]=K,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===K?e=t[70]:(e=(0,$.jsx)(Rn,{title:K}),t[69]=K,t[70]=e),e}let $e;t[71]!==p||t[72]!==He||t[73]!==ae||t[74]!==M||t[75]!==b||t[76]!==K||t[77]!==T?($e=!ae&&!M&&p!=null&&b!=null&&T!=null&&yt()?{reference:{clientThreadId:p,messageId:b,referenceIndex:T},target:{kind:`app_block`,metadata:{...K==null?{}:{title:K},tab:He}}}:void 0,t[71]=p,t[72]=He,t[73]=ae,t[74]=M,t[75]=b,t[76]=K,t[77]=T,t[78]=$e):$e=t[78];let et=$e,tt=F?.id??p,nt=R?.messageId??b,rt;t[79]!==I||t[80]!==W||t[81]!==T||t[82]!==nt?(rt={appBlockId:I,libraryFileId:W,messageId:nt,refIndex:T},t[79]=I,t[80]=W,t[81]=T,t[82]=nt,t[83]=rt):rt=t[83];let it=Ke&&We&&!ae,at=F?.id??p,ot;t[84]!==G||t[85]!==O?(ot=G==null?void 0:{contentReferenceIndex:G.refIndex,messageId:G.messageId,widgetName:O??ye.AppBlock,widgetType:ye.AppBlock},t[84]=G,t[85]=O,t[86]=ot):ot=t[86];let st;t[87]!==n||t[88]!==o||t[89]!==j||t[90]!==I||t[91]!==et||t[92]!==d||t[93]!==ae||t[94]!==S||t[95]!==ee||t[96]!==je||t[97]!==Re||t[98]!==K||t[99]!==w||t[100]!==Qe||t[101]!==le||t[102]!==Ge||t[103]!==Ke||t[104]!==it||t[105]!==at||t[106]!==ot||t[107]!==P||t[108]!==ne?(st=(0,$.jsx)(xr,{additionalResourceDomains:n,appBlockId:I,bind:o,canOpen:it,captureConsoleMessages:j,clientThreadId:at,code:Qe,feedback:et,iconSvg:je,id:d,isStreaming:ae,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:Ge,ref:w,showArtifactCard:Ke,shareConversation:le,shareTarget:ot,styleMode:Re,title:K,variant:P,widgetRefSeenAtMs:ne}),t[87]=n,t[88]=o,t[89]=j,t[90]=I,t[91]=et,t[92]=d,t[93]=ae,t[94]=S,t[95]=ee,t[96]=je,t[97]=Re,t[98]=K,t[99]=w,t[100]=Qe,t[101]=le,t[102]=Ge,t[103]=Ke,t[104]=it,t[105]=at,t[106]=ot,t[107]=P,t[108]=ne,t[109]=st):st=t[109];let ct;return t[110]!==n||t[111]!==Re||t[112]!==K||t[113]!==Qe||t[114]!==tt||t[115]!==rt||t[116]!==st?(ct=(0,$.jsx)(En,{additionalResourceDomains:n,code:Qe,conversationId:tt,styleMode:Re,source:rt,title:K,children:st}),t[110]=n,t[111]=Re,t[112]=K,t[113]=Qe,t[114]=tt,t[115]=rt,t[116]=st,t[117]=ct):ct=t[117],ct}function br(e){return e+1}function xr(e){"use forget";let t=(0,Z.c)(69),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,progressiveStreaming:h,ref:g,shareConversation:_,shareTarget:v,showArtifactCard:y,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}=e,{isExpanded:C,isViewingHistoricalVersion:w,openExpandedView:T,setSharedPreview:te,sharedPreview:E,triggerRef:D}=bn(),O=(0,Q.useContext)(Te),k;t[0]===n?k=t[1]:(k=n??[],t[0]=n,t[1]=k);let ne;t[2]!==c||t[3]!==d||t[4]!==b||t[5]!==k?(ne=[d,b,c,...k],t[2]=c,t[3]=d,t[4]=b,t[5]=k,t[6]=ne):ne=t[6];let A=ne.join(`\0`),[re,ie]=(0,Q.useState)(null),j=!f&&re===A,M;t[7]===T?M=t[8]:(M=()=>{Ee(),T()},t[7]=T,t[8]=M);let P=M,F;t[9]!==m||t[10]!==A?(F=(e,t)=>{ie(e?A:null),m?.(e,t)},t[9]=m,t[10]=A,t[11]=F):F=t[11];let oe=F,se;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==oe||t[19]!==d||t[20]!==f||t[21]!==p||t[22]!==h||t[23]!==g||t[24]!==b||t[25]!==x||t[26]!==S||t[27]!==ee?(se=(0,$.jsx)(Fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,isStreaming:f,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:p,onReadyChange:oe,presentationSurface:`inline`,progressiveStreaming:h,ref:g,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=oe,t[19]=d,t[20]=f,t[21]=p,t[22]=h,t[23]=g,t[24]=b,t[25]=x,t[26]=S,t[27]=ee,t[28]=se):se=t[28];let ce;t[29]!==O||t[30]!==se?(ce={element:se,sandboxPolicy:O},t[29]=O,t[30]=se,t[31]=ce):ce=t[31];let le=ce,ue;t[32]===le?ue=t[33]:(ue=()=>le,t[32]=le,t[33]=ue);let I=N(ue),L;t[34]!==r||t[35]!==s||t[36]!==I||t[37]!==te?(L=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Be({appBlockId:r,content:I(),conversationId:s??null,inlineContainer:e});return te(t),()=>{let e=Me();Re(t,n,e?.sharedPreview===t)}},t[34]=r,t[35]=s,t[36]=I,t[37]=te,t[38]=L):L=t[38];let de=L,R,fe;t[39]!==le||t[40]!==E?(fe=()=>{E!=null&&W(E,le)},R=[le,E],t[39]=le,t[40]=E,t[41]=R,t[42]=fe):(R=t[41],fe=t[42]),ae(fe,R);let pe=w?P:void 0,me;t[43]!==u||t[44]!==pe||t[45]!==x||t[46]!==D?(me=(0,$.jsx)(Dr,{iconSvg:u,onOpen:pe,openButtonRef:D,title:x}),t[43]=u,t[44]=pe,t[45]=x,t[46]=D,t[47]=me):me=t[47];let z=C?me:null,B;t[48]===de?B=t[49]:(B=(0,$.jsx)(`div`,{ref:de,className:`w-full`}),t[48]=de,t[49]=B);let V;t[50]!==a||t[51]!==l||t[52]!==P||t[53]!==u||t[54]!==j||t[55]!==f||t[56]!==_||t[57]!==v||t[58]!==y||t[59]!==B||t[60]!==x||t[61]!==D?(V=(0,$.jsx)(Cr,{canOpen:a,expandButtonRef:D,feedback:l,iconSvg:u,isShareReady:j,shareConversation:_,shareTarget:v,isStreaming:f,showArtifactCard:y,title:x,onOpen:P,children:B}),t[50]=a,t[51]=l,t[52]=P,t[53]=u,t[54]=j,t[55]=f,t[56]=_,t[57]=v,t[58]=y,t[59]=B,t[60]=x,t[61]=D,t[62]=V):V=t[62];let H;t[63]!==C||t[64]!==V?(H=(0,$.jsx)(`div`,{hidden:C,children:V}),t[63]=C,t[64]=V,t[65]=H):H=t[65];let U;return t[66]!==z||t[67]!==H?(U=(0,$.jsxs)($.Fragment,{children:[z,H]}),t[66]=z,t[67]=H,t[68]=U):U=t[68],U}function Sr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=F(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=F(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function Cr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=pe(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:F(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Sr,{action:(0,$.jsx)(ni,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(y,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(kr,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(ri,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(Tr,{...a}),t[15]=a,t[16]=v);let b;return t[17]!==_||t[18]!==v?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=b):b=t[19],b}function wr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=g(Me),u=pe(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(xe(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Dr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(Sr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(kr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Br},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(zr,{onRetry:o}):(0,$.jsx)(Rr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let _;return t[14]!==p||t[15]!==h?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=_):_=t[16],_}function Tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(g(Er))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(Oe,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(lt,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function Er(){return st()}function Dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=pe(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Sr,l=r==null?void 0:(0,$.jsx)(j,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Or,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Or(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(kr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function kr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Ar(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Ge,{"aria-hidden":`true`,className:F(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:F(`icon-md shrink-0`,i),children:(0,$.jsx)(Ie,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Ar(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Yr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Zr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!jr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function jr(e){let t=e.replace(Xr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Xr)){let e=t[1],n=t[2];if(!Qr.has(e)||!Mr(e,n))return!1}return!0}function Mr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Nr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=pe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=pe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let c=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(j,{ref:i,type:`button`,icon:Je,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(s,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function Fr(e){"use forget";let t=(0,Z.c)(176),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:a,code:o,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,presentationSurface:f,progressiveStreaming:p,ref:m,styleMode:h,surface:v,title:y,variant:b,widgetRefSeenAtMs:x}=e,S=l!==void 0&&l,ee=p!==void 0&&p,C=h===void 0?`default`:h,w=v===void 0?`inline`:v,T=b===void 0?`inline`:b,te=pe(),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),O=Ye(i),[k,ne]=(0,Q.useState)(O.values),A=le(k,O.values)?k:O.values;A!==k&&ne(A);let re=[...O.callbacks.keys()],[ie,j]=(0,Q.useState)(re),M=le(ie,re)?ie:re;M!==ie&&j(M);let oe=(0,Q.useRef)(A),se=(0,Q.useRef)(M),ue=(0,Q.useRef)(O.callbacks),I=i!=null,L=(0,Q.useRef)(!1),de=(0,Q.useRef)(!1),R=(0,Q.useRef)(null),fe=(0,Q.useRef)(null),me=(0,Q.useRef)(null),z=(0,Q.useRef)(null),B=(0,Q.useRef)(null),H=(0,Q.useRef)(null),U=(0,Q.useRef)(null),he=(0,Q.useRef)(0),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ve=[],t[0]=ve):ve=t[0];let ye=(0,Q.useRef)(ve),be=ce(),xe=g(_),{isInternalPreview:Se,networkPolicy:Ce}=(0,Q.useContext)(Te),we=Ce===void 0?`none`:Ce,Ee=rt()||Se,De=tt(a)&&!Se,Oe=De||Se&&we===`deps-only`,ke=be?`dark`:`light`,Ae=te.locale,je;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(je={status:`streaming`},t[1]=je):je=t[1];let[W,Me]=(0,Q.useState)(je),Ne=W.status===`finalized`&&W.html!==o,Pe=ee&&!S&&(T===`artifact`||W.status===`failed`),G=ee&&w===`inline`&&W.status!==`static`&&!Pe&&!Ne,Fe=G&&S&&T===`artifact`&&!vr(o),Ie=Fe?0:Vr,Le=Ee?`execution-enabled`:`execution-disabled`,Re=Oe?`network-enabled`:`network-disabled`,ze=Se?`internal-preview`:`workspace-preview`,K=I?`bindings-enabled`:`bindings-disabled`,Be=G?`progressive-app-block-stream`:o,Ve;t[2]===r?Ve=t[3]:(Ve=r??[],t[2]=r,t[3]=Ve);let He;t[4]!==xe||t[5]!==Ae||t[6]!==C||t[7]!==w||t[8]!==Re||t[9]!==ze||t[10]!==K||t[11]!==Be||t[12]!==Ve||t[13]!==Le||t[14]!==ke?(He=[ke,xe,w,C,Ae,Le,Re,ze,K,Be,...Ve],t[4]=xe,t[5]=Ae,t[6]=C,t[7]=w,t[8]=Re,t[9]=ze,t[10]=K,t[11]=Be,t[12]=Ve,t[13]=Le,t[14]=ke,t[15]=He):He=t[15];let Ue=He.join(`\0`),We;t[16]===r?We=t[17]:(We=ln(r),t[16]=r,t[17]=We);let Ge=We,Ke=Oe?`deps_only`:`disabled`,qe=w===`inline`?T:void 0,Je=G?`progressive`:`static`,$e;t[18]!==w||t[19]!==Ke||t[20]!==qe||t[21]!==Je?($e={networkPolicy:Ke,surface:w,variant:qe,renderMode:Je},t[18]=w,t[19]=Ke,t[20]=qe,t[21]=Je,t[22]=$e):$e=t[22];let nt=$e,[at,ot]=(0,Q.useState)(0),[st,ct]=(0,Q.useState)(null),lt=st?.signature===Ue?st.status:null,q=lt===`ready`,ut=q||lt===`failed_after_ready`,dt=G&&lt===`failed`,ft=!S&&!G&&lt===`failed`,pt=f??w,mt=ee&&pt===`inline`&&T===`inline`,ht=G&&pt===`inline`&&S&&!ft,gt;t[23]!==o||t[24]!==nt||t[25]!==x?(gt={content:o,metricTags:nt,widgetRefSeenAtMs:x},t[23]=o,t[24]=nt,t[25]=x,t[26]=gt):gt=t[26];let{cancelFirstPaintFrame:_t,startRunMetrics:vt}=jt(gt),yt,bt;t[27]!==q||t[28]!==d?(yt=()=>{d?.(q)},bt=[q,d],t[27]=q,t[28]=d,t[29]=yt,t[30]=bt):(yt=t[29],bt=t[30]),(0,Q.useEffect)(yt,bt);let xt,St;t[31]!==M||t[32]!==A||t[33]!==O.callbacks?(xt=()=>{oe.current=A,se.current=M,ue.current=O.callbacks},St=[M,A,O.callbacks],t[31]=M,t[32]=A,t[33]=O.callbacks,t[34]=xt,t[35]=St):(xt=t[34],St=t[35]),ae(xt,St);let Ct;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(Ct=e=>{D.current===e&&E.current?.updateAppBlockMessenger?.(Qe(e,oe.current,se.current))},t[36]=Ct):Ct=t[36];let wt=N(Ct),Tt;t[37]===wt?Tt=t[38]:(Tt=e=>{let t=D.current;if(t==null)return;let n=Ze(e,t),r=n&&ue.current.get(n.name);if(n!=null&&r){let e=()=>{P.postTask(()=>wt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[37]=wt,t[38]=Tt);let Dt=N(Tt),kt;t[39]!==I||t[40]!==q||t[41]!==wt?(kt=()=>{let e=D.current;!q||!I||e==null||wt(e)},t[39]=I,t[40]=q,t[41]=wt,t[42]=kt):kt=t[42];let At;t[43]!==M||t[44]!==A||t[45]!==I||t[46]!==q||t[47]!==wt?(At=[M,A,I,q,wt],t[43]=M,t[44]=A,t[45]=I,t[46]=q,t[47]=wt,t[48]=At):At=t[48],(0,Q.useEffect)(kt,At);let Mt,Nt;t[49]!==q||t[50]!==f?(Mt=()=>{!q||f==null||E.current?.updateAppBlockSurface?.(f)},Nt=[q,f],t[49]=q,t[50]=f,t[51]=Mt,t[52]=Nt):(Mt=t[51],Nt=t[52]),(0,Q.useEffect)(Mt,Nt);let Pt,Ft;t[53]===Symbol.for(`react.memo_cache_sentinel`)?(Pt=()=>({clearCapturedConsoleMessages:()=>{ye.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),Ft=[],t[53]=Pt,t[54]=Ft):(Pt=t[53],Ft=t[54]),(0,Q.useImperativeHandle)(m,Pt,Ft);let It;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(It=()=>{ge.current!=null&&(window.clearTimeout(ge.current),ge.current=null)},t[55]=It):It=t[55];let J=N(It),Lt;t[56]===Symbol.for(`react.memo_cache_sentinel`)?(Lt=()=>{_e.current!=null&&(window.clearTimeout(_e.current),_e.current=null)},t[56]=Lt):Lt=t[56];let Y=N(Lt),Rt;t[57]!==q||t[58]!==G?(Rt=()=>{if(!G||!q||B.current==null)return;let e=z.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||de.current)return;let n=he.current;z.current=null,fe.current=Et(),me.current=e.html,e.isFinal&&(de.current=!0);let r=()=>he.current!==n||B.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=U.current,a=i==null?r():i.then(r);U.current=a,a.then(()=>{U.current===a&&(U.current=null);let t=B.current;he.current!==n||t==null||(vr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Me({status:`finalized`,html:e.html})))},e=>{U.current===a&&(U.current=null),he.current===n&&(e instanceof DOMException&&e.name===`AbortError`||H.current?.(`stream_update`,Ot(e)))})},t[57]=q,t[58]=G,t[59]=Rt):Rt=t[59];let zt=N(Rt),Bt;t[60]!==xe||t[61]!==Oe||t[62]!==c||t[63]!==J||t[64]!==Y||t[65]!==o||t[66]!==I||t[67]!==Ee||t[68]!==Ne||t[69]!==S||t[70]!==Ae||t[71]!==u||t[72]!==d||t[73]!==f||t[74]!==Ue||t[75]!==W.status||t[76]!==Pe||t[77]!==G||t[78]!==vt||t[79]!==C||t[80]!==w||t[81]!==ke?(Bt=()=>{if(!Ee)return;if(W.status===`failed`){if(S)return;Me({status:`static`}),ot(Lr);return}(Ne||Pe&&W.status!==`static`)&&Me({status:`static`});let e=G&&E.current?.updateAppBlockStream!=null;if(G&&!e){S||Me({status:`static`});return}L.current=!0,de.current=!1,R.current=null,fe.current=null,me.current=null,z.current=null,B.current=null,H.current=null,U.current=null,Y(),he.current+=1;let t=he.current;J(),ct(null),D.current=I?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=un(o,ke,Ae,xe,w,{loadTailwind:Oe,progressiveStreaming:e,syncPresentationSurface:f!=null,styleMode:C}),a=!1,s=!1,l=!1,p=!1,m=!1,h=()=>he.current===t,g=vt(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(B.current=g);let _=e=>{!c||u==null||!h()||(ye.current=e,!p&&(p=!0,P.postTask(()=>{p=!1,h()&&u(ye.current)},{priority:`background`})))},v=e=>{!h()||a||l||(a=!0,J(),g.markReady(e),!m&&(m=!0,P.postTask(()=>{m=!1,!(!h()||l)&&(s=!0,ct({signature:Ue,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!h()||l||(l=!0,J(),Y(),z.current=null,B.current=null,e&&Me({status:`failed`}),ct({signature:Ue,status:s?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),g.reportFailure(t,n),P.postTask(()=>{h()&&(e?d?.(!1):d?.(!1,`failure`))},{priority:`background`}))};H.current=y,ye.current=[],_([]),ge.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Ur),(async()=>{let t=E.current?.evalAsync({code:r,...D.current==null?{}:{additionalGlobals:{__appBlockMessenger:Qe(D.current,oe.current,se.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&e&&s});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){h()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...ye.current,e.value]),e.value.type===Xe.ENVIRONMENT_STATUS&&e.value.status===et.RUNNING_CODE&&v(`running_code`),e.value.type===Xe.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await P.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,Ot(e)))})},t[60]=xe,t[61]=Oe,t[62]=c,t[63]=J,t[64]=Y,t[65]=o,t[66]=I,t[67]=Ee,t[68]=Ne,t[69]=S,t[70]=Ae,t[71]=u,t[72]=d,t[73]=f,t[74]=Ue,t[75]=W.status,t[76]=Pe,t[77]=G,t[78]=vt,t[79]=C,t[80]=w,t[81]=ke,t[82]=Bt):Bt=t[82];let X=N(Bt),Vt;t[83]!==J||t[84]!==Y?(Vt=()=>{he.current+=1,L.current=!1,de.current=!1,R.current=null,me.current=null,z.current=null,B.current=null,H.current=null,U.current=null,J(),Y(),ct(null),ot(Ir)},t[83]=J,t[84]=Y,t[85]=Vt):Vt=t[85];let Ht=N(Vt),Ut;t[86]===pt?Ut=t[87]:(Ut=pt===`inline`?{margin:-4,width:`calc(100% + ${Hr*2}px)`}:void 0,t[86]=pt,t[87]=Ut);let Wt=Ut,Gt;t[88]!==_t||t[89]!==J||t[90]!==Y||t[91]!==X?(Gt=()=>{X();let e=E.current;return()=>{he.current+=1,D.current=null,B.current=null,H.current=null,U.current=null,J(),Y(),_t(),e?.stop()}},t[88]=_t,t[89]=J,t[90]=Y,t[91]=X,t[92]=Gt):Gt=t[92];let Kt;t[93]!==_t||t[94]!==J||t[95]!==Y||t[96]!==Ee||t[97]!==Ue||t[98]!==X||t[99]!==at?(Kt=[_t,J,Y,Ee,Ue,X,at],t[93]=_t,t[94]=J,t[95]=Y,t[96]=Ee,t[97]=Ue,t[98]=X,t[99]=at,t[100]=Kt):Kt=t[100],(0,Q.useEffect)(Gt,Kt);let qt,Jt;t[101]!==S||t[102]!==X||t[103]!==G?(qt=()=>{!G||S||L.current||E.current?.updateAppBlockStream!=null||X()},Jt=[S,X,G],t[101]=S,t[102]=X,t[103]=G,t[104]=qt,t[105]=Jt):(qt=t[104],Jt=t[105]),(0,Q.useEffect)(qt,Jt);let Yt,Xt;if(t[106]!==Y||t[107]!==o||t[108]!==zt||t[109]!==ft||t[110]!==q||t[111]!==S||t[112]!==G||t[113]!==T?(Yt=()=>{if(!G||!q||ft||de.current||E.current?.updateAppBlockStream==null)return;let e=S?_r(o):o;if(S&&(z.current?.html??me.current)===e)return;if(z.current={html:e,isFinal:!S},!S){Y(),zt();return}let t=fe.current;if(t==null&&T===`artifact`&&(R.current??=Et(),t=R.current),t==null){zt();return}let n=T===`artifact`?Gr:Wr,r=Et()-t;if(r>=n){zt();return}return _e.current=window.setTimeout(()=>{_e.current=null,zt()},n-r),Y},Xt=[Y,o,zt,ft,q,S,G,T],t[106]=Y,t[107]=o,t[108]=zt,t[109]=ft,t[110]=q,t[111]=S,t[112]=G,t[113]=T,t[114]=Yt,t[115]=Xt):(Yt=t[114],Xt=t[115]),(0,Q.useEffect)(Yt,Xt),!Ee){let e;return t[116]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Nn,{}),t[116]=e):e=t[116],e}let Zt=mt&&`flex-col`,Qt=pt===`inline`&&(Fe?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),$t=pt===`stage`&&`h-full min-h-0`,en;t[117]!==Zt||t[118]!==Qt||t[119]!==$t?(en=F(`flex w-full`,Zt,Qt,$t),t[117]=Zt,t[118]=Qt,t[119]=$t,t[120]=en):en=t[120];let tn;t[121]!==mt||t[122]!==ht||t[123]!==y?(tn=mt?(0,$.jsx)(Wn,{isVisible:ht,title:y}):null,t[121]=mt,t[122]=ht,t[123]=y,t[124]=tn):tn=t[124];let nn=!S&&!G&&(lt===`failed`||lt===`failed_after_ready`)&&st?.readyTimedOut||void 0,rn=pt===`inline`?`flex-none`:`w-full`,an=ht&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,on;t[125]!==rn||t[126]!==an?(on=F(`relative min-w-0`,rn,an),t[125]=rn,t[126]=an,t[127]=on):on=t[127];let sn=`${at}:${Oe?`network-enabled`:`network-disabled`}:${Se?`internal-preview`:`workspace-preview`}`,cn;t[128]!==n||t[129]!==a||t[130]!==s?(cn=JSON.stringify([a??null,n??s]),t[128]=n,t[129]=a,t[130]=s,t[131]=cn):cn=t[131];let dn;t[132]===te?dn=t[133]:(dn=te.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[132]=te,t[133]=dn);let fn=Oe?`deps-only`:`none`,pn=De?Kr:qr,mn=ut?0:-1,hn=I?Dt:void 0,gn=pt===`inline`&&C===`open`,_n=pt!==`stage`,vn=G?Ie:Br,yn;t[134]!==s||t[135]!==Se||t[136]!==X||t[137]!==Ge||t[138]!==sn||t[139]!==cn||t[140]!==dn||t[141]!==fn||t[142]!==pn||t[143]!==mn||t[144]!==hn||t[145]!==gn||t[146]!==_n||t[147]!==vn?(yn=(0,$.jsx)(it,{id:s,sandboxOriginId:cn,title:dn,visuallyHidden:!1,networkPolicy:fn,disableExternalNavigation:Se,additionalResourceDomains:Ge,sandboxPermissions:pn,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:mn,onRetryCodeRun:X,onAppBlockMessage:hn,transparentBackground:gn,useIntrinsicHeight:_n,intrinsicHeightFallback:vn,ref:E},sn),t[134]=s,t[135]=Se,t[136]=X,t[137]=Ge,t[138]=sn,t[139]=cn,t[140]=dn,t[141]=fn,t[142]=pn,t[143]=mn,t[144]=hn,t[145]=gn,t[146]=_n,t[147]=vn,t[148]=yn):yn=t[148];let bn;t[149]===ht?bn=t[150]:(bn=ht?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[149]=ht,t[150]=bn);let xn;t[151]!==dt||t[152]!==ft||t[153]!==ut||t[154]!==G?(xn=!ut&&!ft&&(!G||dt)?(0,$.jsx)(Rr,{}):null,t[151]=dt,t[152]=ft,t[153]=ut,t[154]=G,t[155]=xn):xn=t[155];let Sn;t[156]!==ft||t[157]!==Ht?(Sn=ft?(0,$.jsx)(zr,{onRetry:Ht}):null,t[156]=ft,t[157]=Ht,t[158]=Sn):Sn=t[158];let Cn;t[159]!==Wt||t[160]!==ht||t[161]!==nn||t[162]!==on||t[163]!==yn||t[164]!==bn||t[165]!==xn||t[166]!==Sn?(Cn=(0,$.jsxs)(`div`,{"aria-busy":ht,"data-app-block-ready-timeout":nn,className:on,style:Wt,children:[yn,bn,xn,Sn]}),t[159]=Wt,t[160]=ht,t[161]=nn,t[162]=on,t[163]=yn,t[164]=bn,t[165]=xn,t[166]=Sn,t[167]=Cn):Cn=t[167];let wn;t[168]!==ht||t[169]!==T?(wn=ht&&T===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[168]=ht,t[169]=T,t[170]=wn):wn=t[170];let Tn;return t[171]!==en||t[172]!==tn||t[173]!==Cn||t[174]!==wn?(Tn=(0,$.jsxs)(`div`,{className:en,children:[tn,Cn,wn]}),t[171]=en,t[172]=tn,t[173]=Cn,t[174]=wn,t[175]=Tn):Tn=t[175],Tn}function Ir(e){return e+1}function Lr(e){return e+1}function Rr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(y,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function zr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(V,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(j,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii=e((()=>{Z=z(),a(),ot(),Pe(),je(),c(),r(),at(),ue(),qe(),We(),Ke(),ke(),nt(),se(),ve(),dt(),Ce(),re(),w(),m(),G(),D(),ne(),O(),oe(),ct(),ft(),ge(),$e(),M(),te(),Q=n(U()),fe(),yn(),zt(),St(),Mn(),Fe(),In(),Cn(),Gn(),wt(),Le(),_e(),Vt(),hr(),$=me(),Br=432,Vr=120,Hr=4,Ur=15e3,Wr=100,Gr=350,Kr=`allow-scripts allow-same-origin allow-forms`,qr=`allow-scripts allow-same-origin`,Jr=12e3,Yr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Xr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Zr=new Set([`svg`,`path`]),Qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),$r=/<script(?:\s|>)/i,ei=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,ti=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,ni=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:c}=e,l;t[0]!==n||t[1]!==i||t[2]!==o?(l=n&&o!=null?(0,$.jsx)(Pr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===c?d=t[5]:(d=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=d);let f=d,p=a&&c!=null,m;t[6]===u?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(s,{label:n,children:(0,$.jsx)(j,{type:`button`,icon:Ue,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(pt,{category:ye.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},ri=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(mt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(pt,{category:ye.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{bt as S,zt as _,ii as a,St as b,sr as c,On as d,Mn as f,Et as g,X as h,gr as i,cr as l,Bt as m,Rr as n,lr as o,Vt as p,Fr as r,hr as s,yr as t,Dn as u,Ct as v,xt as x,wt as y};
//# sourceMappingURL=e3b746a6-cjsgkd7ah24s97jw.js.map