const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-cqy1qxfppbixe6qp.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-fnfk4lculspwhuhi.js","assets/2340486e-fjhppe5kgy0c0p77.js","assets/root-nhnbl08z.css","assets/conversation-small-bo0yi41ijtvngznk.js","assets/30901919-luczkcbn5snnor2x.js","assets/c470f5ab-llj5ptzb1wu9lr2e.js","assets/0e5afe53-ccgv8we222pplm9u.js","assets/conversation-small-ou5gr6jt.css","assets/8b34dbc2-nnhc5wlg7ltbtrbn.js","assets/82782bc9-o3tbi8s1qwjg1l2d.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{AP as r,CH as i,D8 as a,Dnt as o,EP as s,Ent as c,FM as l,Htt as u,JR as d,Ltt as f,Mtt as p,NM as m,O8 as h,OP as g,PM as _,RM as v,Rc as y,Rtt as b,SH as x,Sy as S,Tnt as ee,U1 as C,W1 as w,Wtt as te,YR as T,d8 as E,eN as ne,f8 as re,hT as D,hp as O,iJ as k,kc as A,m0 as ie,mT as j,p0 as M,pJ as ae,tN as oe,vp as N,xy as P}from"./4813494d-fnfk4lculspwhuhi.js";import{Bn as se,Dn as F,Hn as I,In as ce,Un as le,Vn as L,Wn as R,dn as ue,fn as de}from"./2340486e-fjhppe5kgy0c0p77.js";import{Bk as fe,CPt as pe,Cmn as z,Ctt as me,Dtt as he,Ett as B,Ott as ge,SC as _e,SPt as ve,Stt as V,Tmn as ye,Uk as be,_tt as H,aBn as U,cd as xe,dr as W,gtt as Se,htt as Ce,ld as we,mtt as Te,nHn as Ee,oBn as De,oT as Oe,rHn as ke,sT as Ae,ur as je,vtt as Me,wPt as G,xC as Ne,xtt as Pe}from"./conversation-small-bo0yi41ijtvngznk.js";import{ix as Fe,ow as Ie,rx as Le,sw as Re,vE as K,yE as ze}from"./30901919-luczkcbn5snnor2x.js";import{n as Be,r as Ve}from"./2ea88c7a-lxyla91xs6iv7odf.js";import{a as He,o as Ue,r as We,t as Ge}from"./8d846022-bvik3sltoydb2o43.js";import{i as Ke,n as qe,r as Je}from"./91969468-dto22pp1nqe5f13p.js";import{n as q,t as Ye}from"./4d271a7b-cwmx6wjdbpaxlfx6.js";import{n as Xe,r as Ze}from"./58bafdef-els4ykzxb8s49m4x.js";import{a as Qe,i as $e}from"./e01e2324-mqc8ezktd7wea6tg.js";import{i as et,t as tt}from"./5dc32f04-pd7ddj6glvnuwmfi.js";import{c as nt,i as rt,o as it,r as at,s as ot,t as st}from"./56dee4d8-egfalxohc7jgcp9y.js";import{n as ct,t as lt}from"./72bb039a-jhmoi38l0modn4w1.js";import{i as ut,n as dt,r as ft,t as pt}from"./9eb56efa-j6s5r4cpq62dovwu.js";import{i as mt,n as ht,r as J,t as gt}from"./cc79834b-er94vw51o7f60ekx.js";function _t(){return p(`2779568043`)}function Y(){return p(`3864712762`)}function vt(){return f(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var yt=e((()=>{b()}));function bt({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function xt(){return typeof performance<`u`?performance.now():Date.now()}function St(e){return new TextEncoder().encode(e).byteLength/1024}function Ct(e){return e instanceof Error?e.name:`unknown`}function wt(e,t,n=1){c.count(o.APP_BLOCKS,e,bt(t),n)}function Tt(e,t,n){c.hist(o.APP_BLOCKS,e,bt(n),t)}function Et({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Dt.useRef)(xt()),i=(0,Dt.useRef)(null),a=(0,Dt.useRef)(!1),o=(0,Dt.useRef)(!1),s=_(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=_((n=e)=>{o.current||(o.current=!0,Tt(At,St(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:_((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=xt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),wt(Nt,t);let _=(e,n)=>{f||(f=!0,wt(Mt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=xt();Tt(jt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Tt(Ot,s-r.current,t),n!=null&&Tt(Ft,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=xt(),g=n,Tt(Pt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),wt(kt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It=e((()=>{ee(),m(),Dt=n(R()),Ot=`app_block.first_render_time_ms`,kt=`app_block.load.failure`,At=`app_block.payload_size_kb`,jt=`app_block.ready_to_first_paint_ms`,Mt=`app_block.render.outcome`,Nt=`app_block.render.start`,Pt=`app_block.sandbox_eval_to_ready_ms`,Ft=`app_block.widget_ref_to_first_paint_ms`})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var X=e((()=>{}));function Jt(e){return String.raw(an||=qt([`<script>
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
<\/script>`]),e===`open`)}function Yt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Xt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Zt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Qt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function $t(e){try{return new URL(e).origin}catch{return null}}function en(e){return un.has(e)?e:`default`}function tn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function nn(e=[]){let t=Qt(Gt),n=Qt(Bt),r=[$t(sn),$t(cn),$t(t),$t(n),...ln,...e.map($t)];return Array.from(new Set(r.filter(e=>e!=null)))}function rn(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Jt(l):``;if(!s&&Yt(u))return{html:c?Xt(u,d):u,expectReadySignal:!1};let f=Zt(n),p=l===`open`?Lt:Ht,m=Qt(l===`open`?Bt:Gt),h=en(r),g=tn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${sn}" defer><\/script>
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
    ${s?dn:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?fn:``}
  </body>
</html>`}}var an,on,sn,cn,ln,un,dn,fn,pn=e((()=>{Rt(),Vt(),Ut(),Kt(),X(),sn=`https://cdn.tailwindcss.com`,cn=`https://images.openai.com`,ln=[`https://persistent.oaistatic.com`,`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],un=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),dn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,fn=String.raw(on||=qt([`<script>
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
<\/script>`]))}));function mn(){"use forget";let e=(0,hn.useContext)(gn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var hn,gn,_n=e((()=>{hn=n(R()),gn=(0,hn.createContext)(null)})),vn,yn=e((()=>{w(),de(),vn=C(()=>ue(()=>import(`./7aa2b76f-cqy1qxfppbixe6qp.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))}));function bn(e){"use forget";let t=(0,Cn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,d=`app-block:${c.appBlockId}:${(0,wn.useId)()}`,f=(0,wn.useRef)(null),[p,m]=(0,wn.useState)(null),h=c.appBlockId,g=c.libraryFileId,_=c.messageId,v=c.refIndex,y=o??null,b;t[0]!==y||t[1]!==h?(b={appBlockId:h,conversationId:y},t[0]=y,t[1]=h,t[2]=b):b=t[2];let x=b,S=re(Te),ee;t[3]!==S||t[4]!==x?(ee=Me(S,x),t[3]=S,t[4]=x,t[5]=ee):ee=t[5];let C=ee,w=S?.appBlockId===h&&S.conversationId===y&&(S.isOriginalVersion===!0||S.versionNumber!=null),te=C||w,T;t[6]!==S||t[7]!==d||t[8]!==x?(T=Pe(S,x,d),t[6]=S,t[7]=d,t[8]=x,t[9]=T):T=t[9];let E=T,ne;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(ne=()=>{f.current?.focus()},t[10]=ne):ne=t[10];let D=ne,O=p?.supportsAtomicMove?p:void 0,k;t[11]!==h||t[12]!==g||t[13]!==_||t[14]!==v?(k={appBlockId:h,libraryFileId:g,messageId:_,refIndex:v},t[11]=h,t[12]=g,t[13]=_,t[14]=v,t[15]=k):k=t[15];let A;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==O||t[22]!==k||t[23]!==u?(A={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:D,headerAction:s,sharedPreview:O,source:k,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=O,t[22]=k,t[23]=u,t[24]=A):A=t[24];let ie=A,j,M;t[25]!==ie||t[26]!==C||t[27]!==x?(j=()=>{C&&V(x,ie)},M=[ie,C,x],t[25]=ie,t[26]=C,t[27]=x,t[28]=j,t[29]=M):(j=t[28],M=t[29]),(0,wn.useEffect)(j,M);let ae;t[30]!==ie||t[31]!==E||t[32]!==x?(ae=()=>{Ce(x,E,ie)},t[30]=ie,t[31]=E,t[32]=x,t[33]=ae):ae=t[33];let oe=ae,N;t[34]!==te||t[35]!==w||t[36]!==oe||t[37]!==p?(N={isExpanded:te,isViewingHistoricalVersion:w,openExpandedView:oe,setSharedPreview:m,sharedPreview:p,triggerRef:f},t[34]=te,t[35]=w,t[36]=oe,t[37]=p,t[38]=N):N=t[38];let P=N,se;return t[39]!==i||t[40]!==P?(se=(0,Tn.jsx)(gn.Provider,{value:P,children:i}),t[39]=i,t[40]=P,t[41]=se):se=t[41],se}function xn(e){"use forget";let t=(0,Cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=J(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:xe(i).height$()??0,t[0]=i,t[1]=l);let u=re(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,Tn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,Tn.jsxs)(gt.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,Tn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,Tn.jsx)(gt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,Tn.jsxs)(Tn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function Sn(e){"use forget";let t=(0,Cn.c)(5),{conversation:n,paneId:r}=e,i=mt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,Tn.jsx)(vn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Cn,wn,Tn,En=e((()=>{Cn=F(),we(),ht(),E(),wn=n(R()),_n(),H(),yn(),Tn=le()}));function Dn(){"use forget";let e=(0,On.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,kn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,kn.jsx)(ce,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var On,kn,An=e((()=>{On=F(),L(),kn=le()}));function jn(e,t,n){"use forget";let r=(0,Nn.c)(11),i=t===void 0||t,a=I(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(Z.generatingApp,{title:e}):a.formatMessage(Z.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(Z.sketchingInterface),a.formatMessage(Z.shapingLayout),a.formatMessage(Z.arrangingPieces),a.formatMessage(Z.polishingVisuals),a.formatMessage(Z.tuningInputs),a.formatMessage(Z.addingInteractivity),a.formatMessage(Z.wiringControls),a.formatMessage(Z.composingInteractions),a.formatMessage(Z.calibratingPreview),a.formatMessage(Z.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Pn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},In);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Pn.useEffect)(f,p),l[u]??l[0]??``}function Mn(e){"use forget";let t=(0,Nn.c)(2),{loadingLabels:n,title:r}=e,i=jn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Fn.jsx)(tt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Nn,Pn,Fn,In,Z,Ln,Rn=e((()=>{Nn=F(),et(),h(),Pn=n(R()),L(),Fn=le(),In=2800,Z=se({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Ln=e=>{"use forget";let t=(0,Nn.c)(11),{isVisible:n,title:r}=e,i=jn(r,n),o=!n,s=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,c;t[0]===s?c=t[1]:(c=a(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,s),t[0]=s,t[1]=c);let l=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,u;t[2]===l?u=t[3]:(u=a(`text-token-text-secondary inline-block font-sans font-medium`,l),t[2]=l,t[3]=u);let d;t[4]!==i||t[5]!==u?(d=(0,Fn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Fn.jsx)(`div`,{className:`pb-3`,children:(0,Fn.jsx)(`span`,{className:u,children:i})})}),t[4]=i,t[5]=u,t[6]=d):d=t[6];let f;return t[7]!==o||t[8]!==c||t[9]!==d?(f=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":o,"aria-live":`polite`,className:c,role:`status`,children:d}),t[7]=o,t[8]=c,t[9]=d,t[10]=f):f=t[10],f}}));function zn({appBlockId:e,conversation:t}){return t==null?null:st(t).get(e)??null}function Bn(e){return e?.serverId$()??void 0}function Vn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:pe(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Hn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return ve({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:N(e)?`missing`:`failed`})}),()=>{a.abort()}}function Un({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Gn=e((()=>{O(),G(),at()})),Kn=t({AppBlock:()=>Yn,AppBlockCollapsedPreview:()=>rr,AppBlockPreviewLoadingState:()=>mr,AppBlockSandboxPreview:()=>dr});function qn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Jn(e){let t=qn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Yn(e){"use forget";let t=(0,gr.c)(153),{additionalResourceDomains:n,appBlockId:i,authoritativeCode:a,authoritativeSource:o,bind:c,code:l,collapseWhenSuperseded:u,currentContentFileId:d,displayMode:f,editingEnabled:p,expandedHeaderAction:m,expandedViewEnabled:h,id:g,captureConsoleMessages:_,clientThreadId:v,iconSvg:b,inlineHeight:x,isStreaming:S,isTurnStreaming:ee,libraryFileId:C,libraryFileVersionNumber:w,loadingLabels:te,messageId:T,onConsoleMessagesChange:E,onReadyChange:ne,previewLoadingLabel:D,progressiveStreaming:O,ref:k,refIndex:A,styleMode:ie,title:j,variant:M,wasStreamingWhenFirstSeen:oe,widgetName:N,widgetRefSeenAtMs:P}=e,se=u===void 0||u,F=_!==void 0&&_,I=S!==void 0&&S,ce=ee!==void 0&&ee,le=O!==void 0&&O,L=M===void 0?`inline`:M,R=r(),ue=(0,Q.useContext)(lt),de;t[0]===R?de=t[1]:(de=()=>R!=null&&De(R),t[0]=R,t[1]=de);let pe=re(de),z;t[2]!==v||t[3]!==R?(z=v==null?R:s(v),t[2]=v,t[3]=R,t[4]=z):z=t[4];let me=z,he=T!=null&&A!=null?ot({messageId:T,refIndex:A}):void 0,B=i??he??ot({messageId:T??g,refIndex:A??0}),ge=re(()=>fe({conversation:R??null,instanceId:B,messageId:T,refIndex:A}))??f,_e=re(()=>o!=null||ge!=null?null:zn({appBlockId:B,conversation:R??null})),V=o??_e,ye;t[5]===R?ye=t[6]:(ye=()=>Bn(R??null),t[5]=R,t[6]=ye);let be=re(ye),H=ae(R?.id),U=be??H,xe;t[7]!==d||t[8]!==C||t[9]!==w||t[10]!==U||t[11]!==V?(xe=Vn({currentContentFileId:d,libraryFileId:C,libraryFileVersionNumber:w,serverThreadId:U,source:V}),t[7]=d,t[8]=C,t[9]=w,t[10]=U,t[11]=V,t[12]=xe):xe=t[12];let W=xe,[we,Te]=(0,Q.useState)(null),[Ee,Oe]=(0,Q.useState)(0),ke;t[13]!==Ee||t[14]!==W.libraryContentKey?(ke=[W.libraryContentKey,Ee],t[13]=Ee,t[14]=W.libraryContentKey,t[15]=ke):ke=t[15];let Ae=ke.join(`\0`),je,Me;t[16]!==a||t[17]!==Ae||t[18]!==W.contentFileId||t[19]!==W.libraryFileId||t[20]!==ge||t[21]!==U?(je=()=>{if(!(a!=null||ge===`collapsed`))return Hn({contentFileId:W.contentFileId,libraryContentKey:Ae,libraryFileId:W.libraryFileId,onContentStateChange:Te,serverThreadId:U})},Me=[a,W.contentFileId,W.libraryFileId,Ae,ge,U],t[16]=a,t[17]=Ae,t[18]=W.contentFileId,t[19]=W.libraryFileId,t[20]=ge,t[21]=U,t[22]=je,t[23]=Me):(je=t[22],Me=t[23]),(0,Q.useEffect)(je,Me);let G=Un({appBlockId:B,contentFileId:W.contentFileId,currentContentFileId:d,libraryContent:we,libraryContentKey:Ae,libraryFileId:C,libraryFileVersionNumber:w,source:V}),Pe=we?.key===Ae?we:null,Fe;t[24]!==G?.libraryFileId||t[25]!==C?(Fe=()=>Se(G?.libraryFileId??C),t[24]=G?.libraryFileId,t[25]=C,t[26]=Fe):Fe=t[26];let Ie=re(Fe),Le=G?.libraryFileVersionNumber??w,Re=Ie!=null&&(Le==null||Ie.versionNumber>=Le)?Ie.code:void 0,K=Re??a??G?.content??l??null,ze=G?.iconSvg??b??null,Be=G?.libraryFileId??C,Ve=Be==null&&a==null&&Re==null&&d==null&&V?.currentContentFileId==null&&V?.latestPatchMessageId==null,He=oe===!1&&L===`inline`&&Ve,Ue;t[27]!==l||t[28]!==Ve||t[29]!==T||t[30]!==K||t[31]!==A||t[32]!==V?(Ue=Ve?V==null?T!=null&&A!=null&&l!=null&&K===l?{messageId:T,refIndex:A}:null:V.messageId.length>0&&V.content!=null&&K===V.content?{messageId:V.messageId,refIndex:V.refIndex}:null:null,t[27]=l,t[28]=Ve,t[29]=T,t[30]=K,t[31]=A,t[32]=V,t[33]=Ue):Ue=t[33];let We=Ue,Ge=L===`artifact`,Ke=G?.styleMode??ie??(Ge&&le?`open`:void 0),qe;t[34]!==Be||t[35]!==Ke?(qe=it({explicitStyleMode:Ke,libraryFileId:Be}),t[34]=Be,t[35]=Ke,t[36]=qe):qe=t[36];let Je=qe,q=G?.title??j,Ye;t[37]===R?Ye=t[38]:(Ye=()=>R!=null&&y(R)?`work`:`chat`,t[37]=R,t[38]=Ye);let Xe=re(Ye),Ze;t[39]===p?Ze=t[40]:(Ze=p??vt(),t[39]=p,t[40]=Ze);let Qe=Ze,$e=h??Qe,et=le,tt=Ge&&Je===`open`,nt=ge===`collapsed`||ge==null&&se&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==T,rt=l!=null||d!=null,at;t[41]!==Qe||t[42]!==v||t[43]!==l||t[44]!==R?.id||t[45]!==d||t[46]!==B||t[47]!==m||t[48]!==w||t[49]!==T||t[50]!==Be||t[51]!==Je||t[52]!==q||t[53]!==A||t[54]!==U||t[55]!==V?.messageId?(at=async e=>{let t=l;if(t==null&&d!=null)try{t=await ve({abortSignal:new AbortController().signal,fileId:d,serverThreadId:U})}catch{return}t!=null&&Ce({appBlockId:B,conversationId:R?.id??v??null,isOriginalVersion:!0,versionNumber:w??void 0},`app-block:${B}:original`,{canSubmitTurn:Qe,code:t,headerAction:m,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:B,libraryFileId:Be,messageId:V?.messageId??T,refIndex:A},styleMode:Je,title:q})},t[41]=Qe,t[42]=v,t[43]=l,t[44]=R?.id,t[45]=d,t[46]=B,t[47]=m,t[48]=w,t[49]=T,t[50]=Be,t[51]=Je,t[52]=q,t[53]=A,t[54]=U,t[55]=V?.messageId,t[56]=at):at=t[56],R?.id,V?.messageId;let st=at;if(I&&!et){let e;return t[57]!==te||t[58]!==q?(e=(0,$.jsx)(Mn,{loadingLabels:te,title:q}),t[57]=te,t[58]=q,t[59]=e):e=t[59],e}let ct=pe&&l!=null;if(Pe?.status===`missing`&&!ct)return null;if(nt){let e=rt?st:void 0,n;return t[60]!==q||t[61]!==e?(n=(0,$.jsx)(lr,{onView:e,title:q}),t[60]=q,t[61]=e,t[62]=n):n=t[62],n}let ut=K??(et&&I?``:null);if(ut==null){if(G?.latestPatchMessageId!=null){let e=R?.id??v,n=Pe?.status===`failed`,r;t[63]===Oe?r=t[64]:(r=()=>Oe(Xn),t[63]=Oe,t[64]=r);let i;return t[65]!==B||t[66]!==Ge||t[67]!==ze||t[68]!==D||t[69]!==q||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(er,{appBlockId:B,conversationId:e,hasFailed:n,iconSvg:ze,onRetry:r,previewLoadingLabel:D,showHeader:Ge,title:q}),t[65]=B,t[66]=Ge,t[67]=ze,t[68]=D,t[69]=q,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==te||t[75]!==q?(e=(0,$.jsx)(Mn,{loadingLabels:te,title:q}),t[74]=te,t[75]=q,t[76]=e):e=t[76],e}let dt;t[77]!==v||t[78]!==Xe||t[79]!==I||t[80]!==ce||t[81]!==T||t[82]!==A?(dt=!I&&!ce&&v!=null&&T!=null&&A!=null&&_t()?{reference:{clientThreadId:v,messageId:T,referenceIndex:A},target:{kind:`app_block`,metadata:{tab:Xe}}}:void 0,t[77]=v,t[78]=Xe,t[79]=I,t[80]=ce,t[81]=T,t[82]=A,t[83]=dt):dt=t[83];let ft=dt;if(ue){let e=R?.id??v,r;t[84]!==n||t[85]!==c||t[86]!==F||t[87]!==B||t[88]!==g||t[89]!==x||t[90]!==I||t[91]!==E||t[92]!==ne||t[93]!==D||t[94]!==Je||t[95]!==q||t[96]!==k||t[97]!==ut||t[98]!==et||t[99]!==e||t[100]!==L||t[101]!==P?(r=(0,$.jsx)(dr,{additionalResourceDomains:n,appBlockId:B,bind:c,captureConsoleMessages:F,clientThreadId:e,code:ut,id:g,inlineHeight:x,isStreaming:I,onConsoleMessagesChange:E,onReadyChange:ne,previewLoadingLabel:D,progressiveStreaming:et,ref:k,styleMode:Je,title:q,variant:L,widgetRefSeenAtMs:P}),t[84]=n,t[85]=c,t[86]=F,t[87]=B,t[88]=g,t[89]=x,t[90]=I,t[91]=E,t[92]=ne,t[93]=D,t[94]=Je,t[95]=q,t[96]=k,t[97]=ut,t[98]=et,t[99]=e,t[100]=L,t[101]=P,t[102]=r):r=t[102];let i;return t[103]!==I||t[104]!==ze||t[105]!==q||t[106]!==tt||t[107]!==r?(i=(0,$.jsx)($n,{canOpen:!1,iconSvg:ze,isShareReady:!1,isStreaming:I,showArtifactCard:tt,title:q,children:r}),t[103]=I,t[104]=ze,t[105]=q,t[106]=tt,t[107]=r,t[108]=i):i=t[108],i}let pt=R?.id??v,mt=V?.messageId??T,ht;t[109]!==B||t[110]!==Be||t[111]!==A||t[112]!==mt?(ht={appBlockId:B,libraryFileId:Be,messageId:mt,refIndex:A},t[109]=B,t[110]=Be,t[111]=A,t[112]=mt,t[113]=ht):ht=t[113];let J=tt&&$e&&!I,gt=R?.id??v,Y;t[114]!==We||t[115]!==N?(Y=We==null?void 0:{contentReferenceIndex:We.refIndex,messageId:We.messageId,widgetName:N??Ne.AppBlock,widgetType:Ne.AppBlock},t[114]=We,t[115]=N,t[116]=Y):Y=t[116];let yt;t[117]!==n||t[118]!==c||t[119]!==F||t[120]!==B||t[121]!==ft||t[122]!==g||t[123]!==x||t[124]!==He||t[125]!==I||t[126]!==E||t[127]!==ne||t[128]!==ze||t[129]!==D||t[130]!==Je||t[131]!==q||t[132]!==k||t[133]!==ut||t[134]!==me||t[135]!==et||t[136]!==tt||t[137]!==J||t[138]!==gt||t[139]!==Y||t[140]!==L||t[141]!==P?(yt=(0,$.jsx)(Zn,{additionalResourceDomains:n,appBlockId:B,bind:c,canOpen:J,captureConsoleMessages:F,clientThreadId:gt,code:ut,feedback:ft,iconSvg:ze,id:g,inlineHeight:x,isStreaming:I,onConsoleMessagesChange:E,onReadyChange:ne,previewLoadingLabel:D,progressiveStreaming:et,isSavedInlineLoad:He,ref:k,showArtifactCard:tt,shareConversation:me,shareTarget:Y,styleMode:Je,title:q,variant:L,widgetRefSeenAtMs:P}),t[117]=n,t[118]=c,t[119]=F,t[120]=B,t[121]=ft,t[122]=g,t[123]=x,t[124]=He,t[125]=I,t[126]=E,t[127]=ne,t[128]=ze,t[129]=D,t[130]=Je,t[131]=q,t[132]=k,t[133]=ut,t[134]=me,t[135]=et,t[136]=tt,t[137]=J,t[138]=gt,t[139]=Y,t[140]=L,t[141]=P,t[142]=yt):yt=t[142];let bt;return t[143]!==n||t[144]!==Qe||t[145]!==m||t[146]!==Je||t[147]!==q||t[148]!==ut||t[149]!==pt||t[150]!==ht||t[151]!==yt?(bt=(0,$.jsx)(bn,{additionalResourceDomains:n,canSubmitTurn:Qe,code:ut,conversationId:pt,headerAction:m,styleMode:Je,source:ht,title:q,children:yt}),t[143]=n,t[144]=Qe,t[145]=m,t[146]=Je,t[147]=q,t[148]=ut,t[149]=pt,t[150]=ht,t[151]=yt,t[152]=bt):bt=t[152],bt}function Xn(e){return e+1}function Zn(e){"use forget";let t=(0,gr.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,inlineHeight:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:h,previewLoadingLabel:g,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,shareConversation:x,shareTarget:S,showArtifactCard:ee,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}=e,{isExpanded:E,isViewingHistoricalVersion:ne,openExpandedView:re,setSharedPreview:D,sharedPreview:O,triggerRef:k}=mn(),A=(0,Q.useContext)(je),ie;t[0]===n?ie=t[1]:(ie=n??[],t[0]=n,t[1]=ie);let j;t[2]!==c||t[3]!==d||t[4]!==C||t[5]!==ie?(j=[d,C,c,...ie],t[2]=c,t[3]=d,t[4]=C,t[5]=ie,t[6]=j):j=t[6];let M=j.join(`\0`),[ae,N]=(0,Q.useState)(null),P=!p&&ae===M,se;t[7]===re?se=t[8]:(se=()=>{Ee(),re()},t[7]=re,t[8]=se);let F=se,I;t[9]!==h||t[10]!==M?(I=(e,t)=>{N(e?M:null),h?.(e,t)},t[9]=h,t[10]=M,t[11]=I):I=t[11];let ce=I,le;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==ce||t[19]!==d||t[20]!==f||t[21]!==y||t[22]!==p||t[23]!==m||t[24]!==g||t[25]!==v||t[26]!==b||t[27]!==C||t[28]!==w||t[29]!==te||t[30]!==T?(le=(0,$.jsx)(dr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,inlineHeight:f,isStreaming:p,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:m,onReadyChange:ce,presentationSurface:`inline`,previewLoadingLabel:g,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=ce,t[19]=d,t[20]=f,t[21]=y,t[22]=p,t[23]=m,t[24]=g,t[25]=v,t[26]=b,t[27]=C,t[28]=w,t[29]=te,t[30]=T,t[31]=le):le=t[31];let L;t[32]!==A||t[33]!==le?(L={element:le,sandboxPolicy:A},t[32]=A,t[33]=le,t[34]=L):L=t[34];let R=L,ue;t[35]===R?ue=t[36]:(ue=()=>R,t[35]=R,t[36]=ue);let de=_(ue),fe;t[37]!==r||t[38]!==s||t[39]!==de||t[40]!==D?(fe=e=>{if(e==null)return;let{preview:t,sourceToken:n}=me({appBlockId:r,content:de(),conversationId:s??null,inlineContainer:e});return D(t),()=>{let e=Te();he(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=s,t[39]=de,t[40]=D,t[41]=fe):fe=t[41];let pe=fe,z,B;t[42]!==R||t[43]!==O?(B=()=>{O!=null&&ge(O,R)},z=[R,O],t[42]=R,t[43]=O,t[44]=z,t[45]=B):(z=t[44],B=t[45]),oe(B,z);let _e=ne?F:void 0,ve;t[46]!==u||t[47]!==_e||t[48]!==w||t[49]!==k?(ve=(0,$.jsx)(rr,{iconSvg:u,onOpen:_e,openButtonRef:k,title:w}),t[46]=u,t[47]=_e,t[48]=w,t[49]=k,t[50]=ve):ve=t[50];let V=E?ve:null,ye;t[51]===pe?ye=t[52]:(ye=(0,$.jsx)(`div`,{ref:pe,className:`w-full`}),t[51]=pe,t[52]=ye);let be;t[53]!==a||t[54]!==l||t[55]!==F||t[56]!==u||t[57]!==P||t[58]!==p||t[59]!==x||t[60]!==S||t[61]!==ee||t[62]!==ye||t[63]!==w||t[64]!==k?(be=(0,$.jsx)($n,{canOpen:a,expandButtonRef:k,feedback:l,iconSvg:u,isShareReady:P,shareConversation:x,shareTarget:S,isStreaming:p,showArtifactCard:ee,title:w,onOpen:F,children:ye}),t[53]=a,t[54]=l,t[55]=F,t[56]=u,t[57]=P,t[58]=p,t[59]=x,t[60]=S,t[61]=ee,t[62]=ye,t[63]=w,t[64]=k,t[65]=be):be=t[65];let H;t[66]!==E||t[67]!==be?(H=(0,$.jsx)(`div`,{hidden:E,children:be}),t[66]=E,t[67]=be,t[68]=H):H=t[68];let U;return t[69]!==V||t[70]!==H?(U=(0,$.jsxs)($.Fragment,{children:[V,H]}),t[69]=V,t[70]=H,t[71]=U):U=t[71],U}function Qn(e){"use forget";let t=(0,gr.c)(14),{action:n,className:r,fallbackTitle:i,leading:o,title:s,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=a(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=a(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=s??i,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==o||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[o,p]}),t[7]=o,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function $n(e){"use forget";let t=(0,gr.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:o,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:f,shareTarget:p,showArtifactCard:m,title:h}=e,g=I(),_;t[0]===g?_=t[1]:(_=g.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=g,t[1]=_);let v=_,y;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==v||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==f||t[11]!==p||t[12]!==m||t[13]!==h?(y=m?(0,$.jsxs)(`div`,{className:a(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Qn,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:f,expandButtonRef:i,isReady:c,onOpen:u,target:p}),className:`min-h-13 px-4 py-2`,fallbackTitle:v,leading:l?(0,$.jsx)(d,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(ar,{iconSvg:s}),title:h}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:f,isReady:c,target:p,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=v,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=f,t[11]=p,t[12]=m,t[13]=h,t[14]=y):y=t[14];let b;t[15]===o?b=t[16]:(b=o==null?null:(0,$.jsx)(tr,{...o}),t[15]=o,t[16]=b);let x;return t[17]!==y||t[18]!==b?(x=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[y,b]}),t[17]=y,t[18]=b,t[19]=x):x=t[19],x}function er(e){"use forget";let t=(0,gr.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=re(Te),d=I(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(Me(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(rr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(Qn,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(ar,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:_r},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o||t[13]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(hr,{onRetry:o}):(0,$.jsx)(mr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=g):g=t[14];let _;return t[15]!==m||t[16]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[15]=m,t[16]=g,t[17]=_):_=t[17],_}function tr(e){"use forget";let t=(0,gr.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(re(nr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(Oe,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function nr(){return Ze()}function rr(e){"use forget";let t=(0,gr.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=I(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Qn,l=r==null?void 0:(0,$.jsx)(j,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(ir,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function ir(e){"use forget";let t=(0,gr.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(ar,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function ar(e){"use forget";let t=(0,gr.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,o;t[0]===r?o=t[1]:(o=or(r),t[0]=r,t[1]=o);let s=o,c;return t[2]!==i||t[3]!==s?(c=s==null?(0,$.jsx)(Ie,{"aria-hidden":`true`,className:a(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:a(`icon-md shrink-0`,i),children:(0,$.jsx)(z,{svgString:s,className:`h-full w-full`})}),t[2]=i,t[3]=s,t[4]=c):c=t[4],c}function or(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!sr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function sr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!cr(e,n))return!1}return!0}function cr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function lr(e){"use forget";let t=(0,gr.c)(9),{onView:n,title:r}=e,i=I(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function ur(e){"use forget";let t=(0,gr.c)(12),{className:n,onClick:r,ref:i}=e,a=I(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(j,{ref:i,type:`button`,icon:Le,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(P,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function dr(e){"use forget";let t=(0,gr.c)(190),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:o,code:s,id:c,captureConsoleMessages:l,inlineHeight:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,presentationSurface:m,previewLoadingLabel:h,progressiveStreaming:g,isSavedInlineLoad:y,ref:b,styleMode:S,surface:ee,title:C,variant:w,widgetRefSeenAtMs:T}=e,E=d!==void 0&&d,ne=g!==void 0&&g,D=y!==void 0&&y,O=S===void 0?`default`:S,k=ee===void 0?`inline`:ee,A=w===void 0?`inline`:w,j=I(),M=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),N=He(i),[P,se]=(0,Q.useState)(N.values),F=ie(P,N.values)?P:N.values;F!==P&&se(F);let le=[...N.callbacks.keys()],[L,R]=(0,Q.useState)(le),ue=ie(L,le)?L:le;ue!==L&&R(ue);let de=(0,Q.useRef)(F),fe=(0,Q.useRef)(ue),pe=(0,Q.useRef)(N.callbacks),z=i!=null,me=(0,Q.useRef)(!1),he=(0,Q.useRef)(!1),B=(0,Q.useRef)(null),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),V=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),H=(0,Q.useRef)(null),U=(0,Q.useRef)(0),xe=(0,Q.useRef)(null),W=(0,Q.useRef)(null),Se;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(Se=[],t[0]=Se):Se=t[0];let Ce=(0,Q.useRef)(Se),we=v(),Te=re(x),{isInternalPreview:Ee,networkPolicy:De}=(0,Q.useContext)(je),Oe=De===void 0?`none`:De,ke=Je()||Ee,Ae=Ke(o)&&!Ee,Me=Ae||Ee&&Oe===`deps-only`,G=we?`dark`:`light`,Ne=j.locale,Pe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Pe={status:`streaming`},t[1]=Pe):Pe=t[1];let[Fe,Ie]=(0,Q.useState)(Pe),Le=Fe.status===`finalized`&&Fe.html!==s,Re=ne&&!E&&(A===`artifact`||Fe.status===`failed`),K=ne&&k===`inline`&&Fe.status!==`static`&&!Re&&!Le,ze=K&&E&&A===`artifact`&&!Jn(s),Ge=ze?0:vr,qe=u??`intrinsic-height`,Ye=ke?`execution-enabled`:`execution-disabled`,Xe=Me?`network-enabled`:`network-disabled`,Ze=Ee?`internal-preview`:`workspace-preview`,Qe=z?`bindings-enabled`:`bindings-disabled`,$e=K?`progressive-app-block-stream`:s,et;t[2]===r?et=t[3]:(et=r??[],t[2]=r,t[3]=et);let tt;t[4]!==Te||t[5]!==Ne||t[6]!==O||t[7]!==k||t[8]!==qe||t[9]!==Ye||t[10]!==Xe||t[11]!==Ze||t[12]!==Qe||t[13]!==$e||t[14]!==et||t[15]!==G?(tt=[G,Te,k,qe,O,Ne,Ye,Xe,Ze,Qe,$e,...et],t[4]=Te,t[5]=Ne,t[6]=O,t[7]=k,t[8]=qe,t[9]=Ye,t[10]=Xe,t[11]=Ze,t[12]=Qe,t[13]=$e,t[14]=et,t[15]=G,t[16]=tt):tt=t[16];let nt=tt.join(`\0`),rt;t[17]===r?rt=t[18]:(rt=nn(r),t[17]=r,t[18]=rt);let it=rt,at=D?`saved_inline`:void 0,ot=Me?`deps_only`:`disabled`,st=k===`inline`?A:void 0,ct=K?`progressive`:`static`,lt;t[19]!==k||t[20]!==at||t[21]!==ot||t[22]!==st||t[23]!==ct?(lt={loadSource:at,networkPolicy:ot,surface:k,variant:st,renderMode:ct},t[19]=k,t[20]=at,t[21]=ot,t[22]=st,t[23]=ct,t[24]=lt):lt=t[24];let ut=lt,[dt,ft]=(0,Q.useState)(0),[pt,mt]=(0,Q.useState)(null),ht=pt?.signature===nt?pt.status:null,J=ht===`ready`,gt=J||ht===`failed_after_ready`,_t=K&&ht===`failed`,Y=!E&&!K&&ht===`failed`,vt=m??k,yt=vt===`stage`||u!=null,bt=u==null?k:`stage`,St=ne&&vt===`inline`&&A===`inline`,wt=K&&vt===`inline`&&E&&!Y,Tt;t[25]!==s||t[26]!==ut||t[27]!==T?(Tt={content:s,metricTags:ut,widgetRefSeenAtMs:T},t[25]=s,t[26]=ut,t[27]=T,t[28]=Tt):Tt=t[28];let{cancelFirstPaintFrame:Dt,startRunMetrics:Ot}=Et(Tt),kt,At;t[29]===J?(kt=t[30],At=t[31]):(kt=()=>{J&&ye.current?.markFirstPaint()},At=[J],t[29]=J,t[30]=kt,t[31]=At),oe(kt,At);let jt,Mt;t[32]!==J||t[33]!==p?(jt=()=>{p?.(J)},Mt=[J,p],t[32]=J,t[33]=p,t[34]=jt,t[35]=Mt):(jt=t[34],Mt=t[35]),(0,Q.useEffect)(jt,Mt);let Nt,Pt;t[36]!==ue||t[37]!==F||t[38]!==N.callbacks?(Nt=()=>{de.current=F,fe.current=ue,pe.current=N.callbacks},Pt=[ue,F,N.callbacks],t[36]=ue,t[37]=F,t[38]=N.callbacks,t[39]=Nt,t[40]=Pt):(Nt=t[39],Pt=t[40]),oe(Nt,Pt);let Ft;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(Ft=e=>{ae.current===e&&M.current?.updateAppBlockMessenger?.(We(e,de.current,fe.current))},t[41]=Ft):Ft=t[41];let It=_(Ft),Lt;t[42]===It?Lt=t[43]:(Lt=e=>{let t=ae.current;if(t==null)return;let n=Ue(e,t),r=n&&pe.current.get(n.name);if(n!=null&&r){let e=()=>{te.postTask(()=>It(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=It,t[43]=Lt);let Rt=_(Lt),zt;t[44]!==z||t[45]!==J||t[46]!==It?(zt=()=>{let e=ae.current;!J||!z||e==null||It(e)},t[44]=z,t[45]=J,t[46]=It,t[47]=zt):zt=t[47];let Bt;t[48]!==ue||t[49]!==F||t[50]!==z||t[51]!==J||t[52]!==It?(Bt=[ue,F,z,J,It],t[48]=ue,t[49]=F,t[50]=z,t[51]=J,t[52]=It,t[53]=Bt):Bt=t[53],(0,Q.useEffect)(zt,Bt);let Vt,Ht;t[54]!==u||t[55]!==J||t[56]!==m?(Vt=()=>{!J||m==null||M.current?.updateAppBlockSurface?.(u==null?m:`stage`)},Ht=[u,J,m],t[54]=u,t[55]=J,t[56]=m,t[57]=Vt,t[58]=Ht):(Vt=t[57],Ht=t[58]),(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Ut=()=>({clearCapturedConsoleMessages:()=>{Ce.current=[]},captureScreenshotDataUrl:async()=>(await M.current?.screenshot())?.imageBase64??null,focus:()=>{M.current?.focus()}}),Wt=[],t[59]=Ut,t[60]=Wt):(Ut=t[59],Wt=t[60]),(0,Q.useImperativeHandle)(b,Ut,Wt);let Gt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Gt=()=>{xe.current!=null&&(window.clearTimeout(xe.current),xe.current=null)},t[61]=Gt):Gt=t[61];let Kt=_(Gt),qt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(qt=()=>{W.current!=null&&(window.clearTimeout(W.current),W.current=null)},t[62]=qt):qt=t[62];let X=_(qt),Jt;t[63]!==J||t[64]!==K?(Jt=()=>{if(!K||!J||V.current==null)return;let e=ve.current,t=M.current;if(e==null||t?.updateAppBlockStream==null||he.current)return;let n=U.current;ve.current=null,ge.current=xt(),_e.current=e.html,e.isFinal&&(he.current=!0);let r=()=>U.current!==n||V.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=H.current,a=i==null?r():i.then(r);H.current=a,a.then(()=>{H.current===a&&(H.current=null);let t=V.current;U.current!==n||t==null||(Jn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Ie({status:`finalized`,html:e.html})))},e=>{H.current===a&&(H.current=null),U.current===n&&(e instanceof DOMException&&e.name===`AbortError`||be.current?.(`stream_update`,Ct(e)))})},t[63]=J,t[64]=K,t[65]=Jt):Jt=t[65];let Yt=_(Jt),Xt;t[66]!==Te||t[67]!==Me||t[68]!==l||t[69]!==Kt||t[70]!==X||t[71]!==s||t[72]!==bt||t[73]!==z||t[74]!==ke||t[75]!==Le||t[76]!==D||t[77]!==E||t[78]!==Ne||t[79]!==f||t[80]!==p||t[81]!==m||t[82]!==nt||t[83]!==Fe.status||t[84]!==Re||t[85]!==K||t[86]!==Ot||t[87]!==O||t[88]!==G?(Xt=()=>{if(!ke)return;if(Fe.status===`failed`){if(E)return;Ie({status:`static`}),ft(pr);return}(Le||Re&&Fe.status!==`static`)&&Ie({status:`static`});let e=K&&M.current?.updateAppBlockStream!=null;if(K&&!e){E||Ie({status:`static`});return}me.current=!0,he.current=!1,B.current=null,ge.current=null,_e.current=null,ve.current=null,V.current=null,ye.current=null,be.current=null,H.current=null,X(),U.current+=1;let t=U.current;Kt(),mt(null),ae.current=z?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=rn(s,G,Ne,Te,bt,{loadTailwind:Me,progressiveStreaming:e,syncPresentationSurface:m!=null,styleMode:O}),a=!1,o=!1,c=!1,u=!1,d=!1,h=()=>U.current===t,g=()=>e&&o,_=Ot(h,{deferFirstPaint:e||D,deferPayloadSize:e});D&&(ye.current=_),e&&(V.current=_);let v=e=>{!l||f==null||!h()||(Ce.current=e,!u&&(u=!0,te.postTask(()=>{u=!1,h()&&f(Ce.current)},{priority:`background`})))},y=e=>{if(!(!h()||a||c)){if(a=!0,Kt(),_.markReady(e),D){o=!0,mt({signature:nt,status:`ready`});return}d||(d=!0,te.postTask(()=>{d=!1,!(!h()||c)&&(o=!0,mt({signature:nt,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!h()||c||(c=!0,Kt(),X(),ve.current=null,V.current=null,e&&Ie({status:`failed`}),mt({signature:nt,status:g()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),_.reportFailure(t,n),te.postTask(()=>{h()&&(e?p?.(!1):p?.(!1,`failure`))},{priority:`background`}))};be.current=b,Ce.current=[],v([]),xe.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=M.current?.evalAsync({code:r,...ae.current==null?{}:{additionalGlobals:{__appBlockMessenger:We(ae.current,de.current,fe.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&g()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){h()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(v([...Ce.current,t.value]),t.value.type===Ve.ENVIRONMENT_STATUS&&t.value.status===Be.RUNNING_CODE&&y(`running_code`),t.value.type===Ve.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(y(`run_complete`),_.reportSuccess(`run_complete`))),await te.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,Ct(e)))})},t[66]=Te,t[67]=Me,t[68]=l,t[69]=Kt,t[70]=X,t[71]=s,t[72]=bt,t[73]=z,t[74]=ke,t[75]=Le,t[76]=D,t[77]=E,t[78]=Ne,t[79]=f,t[80]=p,t[81]=m,t[82]=nt,t[83]=Fe.status,t[84]=Re,t[85]=K,t[86]=Ot,t[87]=O,t[88]=G,t[89]=Xt):Xt=t[89];let Zt=_(Xt),Qt;t[90]!==Kt||t[91]!==X?(Qt=()=>{U.current+=1,me.current=!1,he.current=!1,B.current=null,_e.current=null,ve.current=null,V.current=null,be.current=null,H.current=null,Kt(),X(),mt(null),ft(fr)},t[90]=Kt,t[91]=X,t[92]=Qt):Qt=t[92];let $t=_(Qt),en;t[93]!==yt||t[94]!==vt?(en=vt===`inline`&&!yt?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[93]=yt,t[94]=vt,t[95]=en):en=t[95];let tn=en,an;t[96]!==Dt||t[97]!==Kt||t[98]!==X||t[99]!==Zt?(an=()=>{Zt();let e=M.current;return()=>{U.current+=1,ae.current=null,V.current=null,ye.current=null,be.current=null,H.current=null,Kt(),X(),Dt(),e?.stop()}},t[96]=Dt,t[97]=Kt,t[98]=X,t[99]=Zt,t[100]=an):an=t[100];let on;t[101]!==Dt||t[102]!==Kt||t[103]!==X||t[104]!==ke||t[105]!==nt||t[106]!==Zt||t[107]!==dt?(on=[Dt,Kt,X,ke,nt,Zt,dt],t[101]=Dt,t[102]=Kt,t[103]=X,t[104]=ke,t[105]=nt,t[106]=Zt,t[107]=dt,t[108]=on):on=t[108],(0,Q.useEffect)(an,on);let sn,cn;t[109]!==E||t[110]!==Zt||t[111]!==K?(sn=()=>{!K||E||me.current||M.current?.updateAppBlockStream!=null||Zt()},cn=[E,Zt,K],t[109]=E,t[110]=Zt,t[111]=K,t[112]=sn,t[113]=cn):(sn=t[112],cn=t[113]),(0,Q.useEffect)(sn,cn);let ln,un;if(t[114]!==X||t[115]!==s||t[116]!==Yt||t[117]!==Y||t[118]!==J||t[119]!==E||t[120]!==K||t[121]!==A?(ln=()=>{if(!K||!J||Y||he.current||M.current?.updateAppBlockStream==null)return;let e=E?qn(s):s;if(E&&(ve.current?.html??_e.current)===e)return;if(ve.current={html:e,isFinal:!E},!E){X(),Yt();return}let t=ge.current;if(t==null&&A===`artifact`&&(B.current??=xt(),t=B.current),t==null){Yt();return}let n=A===`artifact`?Sr:xr,r=xt()-t;if(r>=n){Yt();return}return W.current=window.setTimeout(()=>{W.current=null,Yt()},n-r),X},un=[X,s,Yt,Y,J,E,K,A],t[114]=X,t[115]=s,t[116]=Yt,t[117]=Y,t[118]=J,t[119]=E,t[120]=K,t[121]=A,t[122]=ln,t[123]=un):(ln=t[122],un=t[123]),(0,Q.useEffect)(ln,un),!ke){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Dn,{}),t[124]=e):e=t[124],e}let dn=St&&`flex-col`,fn=vt===`inline`&&(ze?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),pn=vt===`stage`&&`h-full min-h-0`,mn;t[125]!==dn||t[126]!==fn||t[127]!==pn?(mn=a(`flex w-full`,dn,fn,pn),t[125]=dn,t[126]=fn,t[127]=pn,t[128]=mn):mn=t[128];let hn;t[129]!==St||t[130]!==wt||t[131]!==C?(hn=St?(0,$.jsx)(Ln,{isVisible:wt,title:C}):null,t[129]=St,t[130]=wt,t[131]=C,t[132]=hn):hn=t[132];let gn=!E&&!K&&(ht===`failed`||ht===`failed_after_ready`)&&pt?.readyTimedOut||void 0,_n=vt===`inline`&&!yt?`flex-none`:`w-full`,vn=wt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,yn;t[133]!==_n||t[134]!==vn?(yn=a(`relative min-w-0`,_n,vn),t[133]=_n,t[134]=vn,t[135]=yn):yn=t[135];let bn;t[136]!==u||t[137]!==tn||t[138]!==vt?(bn=vt===`inline`&&u!=null?{height:u}:tn,t[136]=u,t[137]=tn,t[138]=vt,t[139]=bn):bn=t[139];let xn=`${dt}:${Me?`network-enabled`:`network-disabled`}:${Ee?`internal-preview`:`workspace-preview`}`,Sn;t[140]!==n||t[141]!==o||t[142]!==c?(Sn=JSON.stringify([o??null,n??c]),t[140]=n,t[141]=o,t[142]=c,t[143]=Sn):Sn=t[143];let Cn;t[144]===j?Cn=t[145]:(Cn=j.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=j,t[145]=Cn);let wn=Me?`deps-only`:`none`,Tn=Ae?Cr:wr,En=gt?0:-1,On=z?Rt:void 0,kn=vt===`inline`&&!yt&&O===`open`,An=!yt,jn=K?Ge:_r,Mn;t[146]!==c||t[147]!==Ee||t[148]!==Zt||t[149]!==it||t[150]!==xn||t[151]!==Sn||t[152]!==Cn||t[153]!==wn||t[154]!==Tn||t[155]!==En||t[156]!==On||t[157]!==kn||t[158]!==An||t[159]!==jn?(Mn=(0,$.jsx)(q,{id:c,sandboxOriginId:Sn,title:Cn,visuallyHidden:!1,networkPolicy:wn,disableExternalNavigation:Ee,additionalResourceDomains:it,sandboxPermissions:Tn,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:En,onRetryCodeRun:Zt,onAppBlockMessage:On,transparentBackground:kn,useIntrinsicHeight:An,intrinsicHeightFallback:jn,ref:M},xn),t[146]=c,t[147]=Ee,t[148]=Zt,t[149]=it,t[150]=xn,t[151]=Sn,t[152]=Cn,t[153]=wn,t[154]=Tn,t[155]=En,t[156]=On,t[157]=kn,t[158]=An,t[159]=jn,t[160]=Mn):Mn=t[160];let Nn;t[161]===wt?Nn=t[162]:(Nn=wt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=wt,t[162]=Nn);let Pn;t[163]!==_t||t[164]!==Y||t[165]!==gt||t[166]!==h||t[167]!==K?(Pn=!gt&&!Y&&(!K||_t)?(0,$.jsx)(mr,{label:h}):null,t[163]=_t,t[164]=Y,t[165]=gt,t[166]=h,t[167]=K,t[168]=Pn):Pn=t[168];let Fn;t[169]!==Y||t[170]!==$t?(Fn=Y?(0,$.jsx)(hr,{onRetry:$t}):null,t[169]=Y,t[170]=$t,t[171]=Fn):Fn=t[171];let In;t[172]!==wt||t[173]!==gn||t[174]!==yn||t[175]!==bn||t[176]!==Mn||t[177]!==Nn||t[178]!==Pn||t[179]!==Fn?(In=(0,$.jsxs)(`div`,{"aria-busy":wt,"data-app-block-ready-timeout":gn,className:yn,style:bn,children:[Mn,Nn,Pn,Fn]}),t[172]=wt,t[173]=gn,t[174]=yn,t[175]=bn,t[176]=Mn,t[177]=Nn,t[178]=Pn,t[179]=Fn,t[180]=In):In=t[180];let Z;t[181]!==h||t[182]!==wt||t[183]!==A?(Z=wt&&A===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:h??(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=h,t[182]=wt,t[183]=A,t[184]=Z):Z=t[184];let Rn;return t[185]!==mn||t[186]!==hn||t[187]!==In||t[188]!==Z?(Rn=(0,$.jsxs)(`div`,{className:mn,children:[hn,In,Z]}),t[185]=mn,t[186]=hn,t[187]=In,t[188]=Z,t[189]=Rn):Rn=t[189],Rn}function fr(e){return e+1}function pr(e){return e+1}function mr(e){"use forget";let t=(0,gr.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(d,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function hr(e){"use forget";let t=(0,gr.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(j,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var gr,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{gr=F(),D(),Xe(),W(),Ae(),T(),i(),Ye(),S(),Re(),Fe(),K(),ke(),qe(),g(),U(),ut(),ct(),_e(),u(),E(),k(),ye(),A(),l(),ne(),m(),Qe(),dt(),G(),Ge(),h(),M(),Q=n(R()),L(),pn(),It(),yt(),En(),H(),An(),_n(),Rn(),nt(),B(),be(),rt(),Gn(),$=le(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,gr.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(ur,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(P,{label:n,children:(0,$.jsx)(j,{type:`button`,icon:ze,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(ft,{category:Ne.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Pr=e=>{"use forget";let t=(0,gr.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(pt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(ft,{category:Ne.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{Kn as a,Gn as c,En as d,xt as f,Y as g,vt as h,dr as i,xn as l,yt as m,rr as n,Fr as o,It as p,mr as r,zn as s,Yn as t,Sn as u};
//# sourceMappingURL=e3b746a6-btqln8nbagof0sy7.js.map