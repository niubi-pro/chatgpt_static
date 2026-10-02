const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-hmkcm8o47mhciohg.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-ic2h7apqyjss21lb.js","assets/2340486e-hoctnyuhtrgq7c13.js","assets/root-nhnbl08z.css","assets/conversation-small-fuddpd13ftkqzol7.js","assets/30901919-h610h3solnl3rj48.js","assets/c470f5ab-h2k1aaqa2tt47wcd.js","assets/0e5afe53-peaikj7zvlo9l52b.js","assets/conversation-small-hgnwopo2.css","assets/8b34dbc2-kpj7jhnl5yg5ubi0.js","assets/82782bc9-jbf27v7v4m42rck2.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{AP as r,CH as i,D8 as a,EP as o,Ent as s,FM as c,Itt as l,JR as u,Ltt as d,NM as f,O8 as p,OP as m,PM as h,RM as g,Rc as _,SH as v,Sy as y,Tnt as b,U1 as x,Utt as S,Vtt as ee,W1 as C,YR as w,d8 as te,eN as T,f8 as ne,hT as E,hp as D,iJ as O,jtt as k,kc as A,m0 as j,mT as M,p0 as re,pJ as N,tN as ie,vp as ae,wnt as P,xy as oe}from"./4813494d-ic2h7apqyjss21lb.js";import{Bn as se,En as F,Fn as I,Hn as ce,Un as le,Vn as L,dn as R,un as ue,zn as de}from"./2340486e-hoctnyuhtrgq7c13.js";import{Ak as fe,BVn as pe,Dk as me,Hzn as he,Uzn as ge,Xw as _e,Zw as z,att as B,ctt as ve,dC as V,dPt as H,dr as ye,ed as be,fC as xe,fmn as Se,htt as Ce,itt as U,lPt as we,ltt as Te,mtt as Ee,ntt as De,ptt as Oe,rtt as ke,td as Ae,ttt as je,uPt as Me,umn as Ne,ur as Pe,utt as W,zVn as Fe}from"./conversation-small-fuddpd13ftkqzol7.js";import{ix as Ie,ow as Le,rx as Re,sw as ze,vE as G,yE as Be}from"./30901919-h610h3solnl3rj48.js";import{n as Ve,r as He}from"./2ea88c7a-lxyla91xs6iv7odf.js";import{a as Ue,o as We,r as Ge,t as Ke}from"./8d846022-bvik3sltoydb2o43.js";import{i as qe,n as Je,r as Ye}from"./91969468-kjb6svdngqbt7nsp.js";import{n as K,t as Xe}from"./4d271a7b-ogbueicrd98t18w4.js";import{n as Ze,r as Qe}from"./58bafdef-n76yizcaaqzj7gap.js";import{a as $e,i as et}from"./e01e2324-gj8tavbgvy8il36l.js";import{i as tt,t as nt}from"./5dc32f04-hd3zpphrwn9b3w1d.js";import{c as rt,i as it,o as at,r as ot,s as st,t as ct}from"./56dee4d8-fa85r1dnf4z65pox.js";import{n as lt,t as ut}from"./72bb039a-in86njhuau6ney8w.js";import{i as dt,n as ft,r as pt,t as mt}from"./9eb56efa-fvw1llogl47dvg1v.js";import{i as ht,n as gt,r as q,t as _t}from"./cc79834b-hf3mcip1s6ky95ze.js";function vt(){return k(`2779568043`)}function J(){return k(`3864712762`)}function yt(){return l(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var bt=e((()=>{d()}));function xt({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function St(){return typeof performance<`u`?performance.now():Date.now()}function Ct(e){return new TextEncoder().encode(e).byteLength/1024}function wt(e){return e instanceof Error?e.name:`unknown`}function Tt(e,t,n=1){b.count(s.APP_BLOCKS,e,xt(t),n)}function Et(e,t,n){b.hist(s.APP_BLOCKS,e,xt(n),t)}function Dt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Ot.useRef)(St()),i=(0,Ot.useRef)(null),a=(0,Ot.useRef)(!1),o=(0,Ot.useRef)(!1),s=h(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=h((n=e)=>{o.current||(o.current=!0,Et(jt,Ct(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:h((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=St(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Tt(Pt,t);let _=(e,n)=>{f||(f=!0,Tt(Nt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=St();Et(Mt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Et(kt,s-r.current,t),n!=null&&Et(It,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=St(),g=n,Et(Ft,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Tt(At,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt=e((()=>{P(),f(),Ot=n(le()),kt=`app_block.first_render_time_ms`,At=`app_block.load.failure`,jt=`app_block.payload_size_kb`,Mt=`app_block.ready_to_first_paint_ms`,Nt=`app_block.render.outcome`,Pt=`app_block.render.start`,Ft=`app_block.sandbox_eval_to_ready_ms`,It=`app_block.widget_ref_to_first_paint_ms`})),Rt,zt=e((()=>{Rt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Bt=e((()=>{})),Vt,Ht=e((()=>{Bt(),Vt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ut,Wt=e((()=>{Ut=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Gt=e((()=>{})),Kt,qt=e((()=>{Gt(),Kt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function Jt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=e((()=>{}));function Yt(e){return String.raw(on||=Jt([`<script>
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
<\/script>`]),e===`open`)}function Xt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Zt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Qt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function $t(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function en(e){try{return new URL(e).origin}catch{return null}}function tn(e){return dn.has(e)?e:`default`}function nn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function rn(e=[]){let t=$t(Kt),n=$t(Vt),r=[en(cn),en(ln),en(t),en(n),...un,...e.map(en)];return Array.from(new Set(r.filter(e=>e!=null)))}function an(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Yt(l):``;if(!s&&Xt(u))return{html:c?Zt(u,d):u,expectReadySignal:!1};let f=Qt(n),p=l===`open`?Rt:Ut,m=$t(l===`open`?Vt:Kt),h=tn(r),g=nn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${cn}" defer><\/script>
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
    ${s?fn:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?pn:``}
  </body>
</html>`}}var on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{zt(),Ht(),Wt(),qt(),Y(),cn=`https://cdn.tailwindcss.com`,ln=`https://images.openai.com`,un=[`https://persistent.oaistatic.com`,`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],dn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),fn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,pn=String.raw(sn||=Jt([`<script>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(le()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{C(),R(),yn=x(()=>ue(()=>import(`./7aa2b76f-hmkcm8o47mhciohg.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))}));function xn(e){"use forget";let t=(0,wn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,d=`app-block:${c.appBlockId}:${(0,Tn.useId)()}`,f=(0,Tn.useRef)(null),[p,m]=(0,Tn.useState)(null),h=c.appBlockId,g=c.libraryFileId,_=c.messageId,v=c.refIndex,y=o??null,b;t[0]!==y||t[1]!==h?(b={appBlockId:h,conversationId:y},t[0]=y,t[1]=h,t[2]=b):b=t[2];let x=b,S=ne(je),ee;t[3]!==S||t[4]!==x?(ee=B(S,x),t[3]=S,t[4]=x,t[5]=ee):ee=t[5];let C=ee,w=S?.appBlockId===h&&S.conversationId===y&&(S.isOriginalVersion===!0||S.versionNumber!=null),te=C||w,T;t[6]!==S||t[7]!==d||t[8]!==x?(T=ve(S,x,d),t[6]=S,t[7]=d,t[8]=x,t[9]=T):T=t[9];let E=T,D;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>{f.current?.focus()},t[10]=D):D=t[10];let O=D,k=p?.supportsAtomicMove?p:void 0,A;t[11]!==h||t[12]!==g||t[13]!==_||t[14]!==v?(A={appBlockId:h,libraryFileId:g,messageId:_,refIndex:v},t[11]=h,t[12]=g,t[13]=_,t[14]=v,t[15]=A):A=t[15];let j;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==k||t[22]!==A||t[23]!==u?(j={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:O,headerAction:s,sharedPreview:k,source:A,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=k,t[22]=A,t[23]=u,t[24]=j):j=t[24];let M=j,re,N;t[25]!==M||t[26]!==C||t[27]!==x?(re=()=>{C&&Te(x,M)},N=[M,C,x],t[25]=M,t[26]=C,t[27]=x,t[28]=re,t[29]=N):(re=t[28],N=t[29]),(0,Tn.useEffect)(re,N);let ie;t[30]!==M||t[31]!==E||t[32]!==x?(ie=()=>{De(x,E,M)},t[30]=M,t[31]=E,t[32]=x,t[33]=ie):ie=t[33];let ae=ie,P;t[34]!==te||t[35]!==w||t[36]!==ae||t[37]!==p?(P={isExpanded:te,isViewingHistoricalVersion:w,openExpandedView:ae,setSharedPreview:m,sharedPreview:p,triggerRef:f},t[34]=te,t[35]=w,t[36]=ae,t[37]=p,t[38]=P):P=t[38];let oe=P,se;return t[39]!==i||t[40]!==oe?(se=(0,En.jsx)(_n.Provider,{value:oe,children:i}),t[39]=i,t[40]=oe,t[41]=se):se=t[41],se}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=q(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:be(i).height$()??0,t[0]=i,t[1]=l);let u=ne(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,En.jsxs)(_t.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,En.jsx)(_t.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,En.jsxs)(En.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=ht(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=F(),Ae(),gt(),te(),Tn=n(le()),vn(),U(),bn(),En=ce()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(I,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=F(),se(),An=ce()}));function Mn(e,t,n){"use forget";let r=(0,Pn.c)(11),i=t===void 0||t,a=L(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(X.generatingApp,{title:e}):a.formatMessage(X.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(X.sketchingInterface),a.formatMessage(X.shapingLayout),a.formatMessage(X.arrangingPieces),a.formatMessage(X.polishingVisuals),a.formatMessage(X.tuningInputs),a.formatMessage(X.addingInteractivity),a.formatMessage(X.wiringControls),a.formatMessage(X.composingInteractions),a.formatMessage(X.calibratingPreview),a.formatMessage(X.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Fn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},Ln);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Fn.useEffect)(f,p),l[u]??l[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{loadingLabels:n,title:r}=e,i=Mn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(nt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Pn,Fn,In,Ln,X,Rn,zn=e((()=>{Pn=F(),tt(),p(),Fn=n(le()),se(),In=ce(),Ln=2800,X=de({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Rn=e=>{"use forget";let t=(0,Pn.c)(11),{isVisible:n,title:r}=e,i=Mn(r,n),o=!n,s=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,c;t[0]===s?c=t[1]:(c=a(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,s),t[0]=s,t[1]=c);let l=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,u;t[2]===l?u=t[3]:(u=a(`text-token-text-secondary inline-block font-sans font-medium`,l),t[2]=l,t[3]=u);let d;t[4]!==i||t[5]!==u?(d=(0,In.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,In.jsx)(`div`,{className:`pb-3`,children:(0,In.jsx)(`span`,{className:u,children:i})})}),t[4]=i,t[5]=u,t[6]=d):d=t[6];let f;return t[7]!==o||t[8]!==c||t[9]!==d?(f=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":o,"aria-live":`polite`,className:c,role:`status`,children:d}),t[7]=o,t[8]=c,t[9]=d,t[10]=f):f=t[10],f}}));function Bn({appBlockId:e,conversation:t}){return t==null?null:ct(t).get(e)??null}function Vn(e){return e?.serverId$()??void 0}function Hn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Me(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Un({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return we({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:ae(e)?`missing`:`failed`})}),()=>{a.abort()}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Kn=e((()=>{D(),H(),ot()})),qn=t({AppBlock:()=>Xn,AppBlockCollapsedPreview:()=>ir,AppBlockPreviewLoadingState:()=>hr,AppBlockSandboxPreview:()=>fr});function Jn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Yn(e){let t=Jn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Xn(e){"use forget";let t=(0,Z.c)(153),{additionalResourceDomains:n,appBlockId:i,authoritativeCode:a,authoritativeSource:s,bind:c,code:l,collapseWhenSuperseded:u,currentContentFileId:d,displayMode:f,editingEnabled:p,expandedHeaderAction:m,expandedViewEnabled:h,id:g,captureConsoleMessages:v,clientThreadId:y,iconSvg:b,inlineHeight:x,isStreaming:S,isTurnStreaming:ee,libraryFileId:C,libraryFileVersionNumber:w,loadingLabels:te,messageId:T,onConsoleMessagesChange:E,onReadyChange:D,previewLoadingLabel:O,progressiveStreaming:k,ref:A,refIndex:j,styleMode:M,title:re,variant:ie,wasStreamingWhenFirstSeen:ae,widgetName:P,widgetRefSeenAtMs:oe}=e,se=u===void 0||u,F=v!==void 0&&v,I=S!==void 0&&S,ce=ee!==void 0&&ee,le=k!==void 0&&k,L=ie===void 0?`inline`:ie,R=r(),ue=(0,Q.useContext)(ut),de;t[0]===R?de=t[1]:(de=()=>R!=null&&ge(R),t[0]=R,t[1]=de);let fe=ne(de),pe;t[2]!==y||t[3]!==R?(pe=y==null?R:o(y),t[2]=y,t[3]=R,t[4]=pe):pe=t[4];let he=pe,_e=T!=null&&j!=null?st({messageId:T,refIndex:j}):void 0,z=i??_e??st({messageId:T??g,refIndex:j??0}),B=ne(()=>me({conversation:R??null,instanceId:z,messageId:T,refIndex:j}))??f,ve=ne(()=>s!=null||B!=null?null:Bn({appBlockId:z,conversation:R??null})),H=s??ve,ye;t[5]===R?ye=t[6]:(ye=()=>Vn(R??null),t[5]=R,t[6]=ye);let be=ne(ye),xe=N(R?.id),Se=be??xe,Ce;t[7]!==d||t[8]!==C||t[9]!==w||t[10]!==Se||t[11]!==H?(Ce=Hn({currentContentFileId:d,libraryFileId:C,libraryFileVersionNumber:w,serverThreadId:Se,source:H}),t[7]=d,t[8]=C,t[9]=w,t[10]=Se,t[11]=H,t[12]=Ce):Ce=t[12];let U=Ce,[Te,Ee]=(0,Q.useState)(null),[Oe,Ae]=(0,Q.useState)(0),je;t[13]!==Oe||t[14]!==U.libraryContentKey?(je=[U.libraryContentKey,Oe],t[13]=Oe,t[14]=U.libraryContentKey,t[15]=je):je=t[15];let Me=je.join(`\0`),Ne,Pe;t[16]!==a||t[17]!==Me||t[18]!==U.contentFileId||t[19]!==U.libraryFileId||t[20]!==B||t[21]!==Se?(Ne=()=>{if(!(a!=null||B===`collapsed`))return Un({contentFileId:U.contentFileId,libraryContentKey:Me,libraryFileId:U.libraryFileId,onContentStateChange:Ee,serverThreadId:Se})},Pe=[a,U.contentFileId,U.libraryFileId,Me,B,Se],t[16]=a,t[17]=Me,t[18]=U.contentFileId,t[19]=U.libraryFileId,t[20]=B,t[21]=Se,t[22]=Ne,t[23]=Pe):(Ne=t[22],Pe=t[23]),(0,Q.useEffect)(Ne,Pe);let W=Wn({appBlockId:z,contentFileId:U.contentFileId,currentContentFileId:d,libraryContent:Te,libraryContentKey:Me,libraryFileId:C,libraryFileVersionNumber:w,source:H}),Fe=Te?.key===Me?Te:null,Ie;t[24]!==W?.libraryFileId||t[25]!==C?(Ie=()=>ke(W?.libraryFileId??C),t[24]=W?.libraryFileId,t[25]=C,t[26]=Ie):Ie=t[26];let Le=ne(Ie),Re=W?.libraryFileVersionNumber??w,ze=Le!=null&&(Re==null||Le.versionNumber>=Re)?Le.code:void 0,G=ze??a??W?.content??l??null,Be=W?.iconSvg??b??null,Ve=W?.libraryFileId??C,He=Ve==null&&a==null&&ze==null&&d==null&&H?.currentContentFileId==null&&H?.latestPatchMessageId==null,Ue=ae===!1&&L===`inline`&&He,We;t[27]!==l||t[28]!==He||t[29]!==T||t[30]!==G||t[31]!==j||t[32]!==H?(We=He?H==null?T!=null&&j!=null&&l!=null&&G===l?{messageId:T,refIndex:j}:null:H.messageId.length>0&&H.content!=null&&G===H.content?{messageId:H.messageId,refIndex:H.refIndex}:null:null,t[27]=l,t[28]=He,t[29]=T,t[30]=G,t[31]=j,t[32]=H,t[33]=We):We=t[33];let Ge=We,Ke=L===`artifact`,qe=W?.styleMode??M??(Ke&&le?`open`:void 0),Je;t[34]!==Ve||t[35]!==qe?(Je=at({explicitStyleMode:qe,libraryFileId:Ve}),t[34]=Ve,t[35]=qe,t[36]=Je):Je=t[36];let Ye=Je,K=W?.title??re,Xe;t[37]===R?Xe=t[38]:(Xe=()=>R!=null&&_(R)?`work`:`chat`,t[37]=R,t[38]=Xe);let Ze=ne(Xe),Qe;t[39]===p?Qe=t[40]:(Qe=p??yt(),t[39]=p,t[40]=Qe);let $e=Qe,et=h??$e,tt=le,nt=Ke&&Ye===`open`,rt=B===`collapsed`||B==null&&se&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==T,it=l!=null||d!=null,ot;t[41]!==$e||t[42]!==y||t[43]!==l||t[44]!==R?.id||t[45]!==d||t[46]!==z||t[47]!==m||t[48]!==w||t[49]!==T||t[50]!==Ve||t[51]!==Ye||t[52]!==K||t[53]!==j||t[54]!==Se||t[55]!==H?.messageId?(ot=async e=>{let t=l;if(t==null&&d!=null)try{t=await we({abortSignal:new AbortController().signal,fileId:d,serverThreadId:Se})}catch{return}t!=null&&De({appBlockId:z,conversationId:R?.id??y??null,isOriginalVersion:!0,versionNumber:w??void 0},`app-block:${z}:original`,{canSubmitTurn:$e,code:t,headerAction:m,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:z,libraryFileId:Ve,messageId:H?.messageId??T,refIndex:j},styleMode:Ye,title:K})},t[41]=$e,t[42]=y,t[43]=l,t[44]=R?.id,t[45]=d,t[46]=z,t[47]=m,t[48]=w,t[49]=T,t[50]=Ve,t[51]=Ye,t[52]=K,t[53]=j,t[54]=Se,t[55]=H?.messageId,t[56]=ot):ot=t[56],R?.id,H?.messageId;let ct=ot;if(I&&!tt){let e;return t[57]!==te||t[58]!==K?(e=(0,$.jsx)(Nn,{loadingLabels:te,title:K}),t[57]=te,t[58]=K,t[59]=e):e=t[59],e}let lt=fe&&l!=null;if(Fe?.status===`missing`&&!lt)return null;if(rt){let e=it?ct:void 0,n;return t[60]!==K||t[61]!==e?(n=(0,$.jsx)(ur,{onView:e,title:K}),t[60]=K,t[61]=e,t[62]=n):n=t[62],n}let dt=G??(tt&&I?``:null);if(dt==null){if(W?.latestPatchMessageId!=null){let e=R?.id??y,n=Fe?.status===`failed`,r;t[63]===Ae?r=t[64]:(r=()=>Ae(Zn),t[63]=Ae,t[64]=r);let i;return t[65]!==z||t[66]!==Ke||t[67]!==Be||t[68]!==O||t[69]!==K||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(tr,{appBlockId:z,conversationId:e,hasFailed:n,iconSvg:Be,onRetry:r,previewLoadingLabel:O,showHeader:Ke,title:K}),t[65]=z,t[66]=Ke,t[67]=Be,t[68]=O,t[69]=K,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==te||t[75]!==K?(e=(0,$.jsx)(Nn,{loadingLabels:te,title:K}),t[74]=te,t[75]=K,t[76]=e):e=t[76],e}let ft;t[77]!==y||t[78]!==Ze||t[79]!==I||t[80]!==ce||t[81]!==T||t[82]!==j?(ft=!I&&!ce&&y!=null&&T!=null&&j!=null&&vt()?{reference:{clientThreadId:y,messageId:T,referenceIndex:j},target:{kind:`app_block`,metadata:{tab:Ze}}}:void 0,t[77]=y,t[78]=Ze,t[79]=I,t[80]=ce,t[81]=T,t[82]=j,t[83]=ft):ft=t[83];let pt=ft;if(ue){let e=R?.id??y,r;t[84]!==n||t[85]!==c||t[86]!==F||t[87]!==z||t[88]!==g||t[89]!==x||t[90]!==I||t[91]!==E||t[92]!==D||t[93]!==O||t[94]!==Ye||t[95]!==K||t[96]!==A||t[97]!==dt||t[98]!==tt||t[99]!==e||t[100]!==L||t[101]!==oe?(r=(0,$.jsx)(fr,{additionalResourceDomains:n,appBlockId:z,bind:c,captureConsoleMessages:F,clientThreadId:e,code:dt,id:g,inlineHeight:x,isStreaming:I,onConsoleMessagesChange:E,onReadyChange:D,previewLoadingLabel:O,progressiveStreaming:tt,ref:A,styleMode:Ye,title:K,variant:L,widgetRefSeenAtMs:oe}),t[84]=n,t[85]=c,t[86]=F,t[87]=z,t[88]=g,t[89]=x,t[90]=I,t[91]=E,t[92]=D,t[93]=O,t[94]=Ye,t[95]=K,t[96]=A,t[97]=dt,t[98]=tt,t[99]=e,t[100]=L,t[101]=oe,t[102]=r):r=t[102];let i;return t[103]!==I||t[104]!==Be||t[105]!==K||t[106]!==nt||t[107]!==r?(i=(0,$.jsx)(er,{canOpen:!1,iconSvg:Be,isShareReady:!1,isStreaming:I,showArtifactCard:nt,title:K,children:r}),t[103]=I,t[104]=Be,t[105]=K,t[106]=nt,t[107]=r,t[108]=i):i=t[108],i}let mt=R?.id??y,ht=H?.messageId??T,gt;t[109]!==z||t[110]!==Ve||t[111]!==j||t[112]!==ht?(gt={appBlockId:z,libraryFileId:Ve,messageId:ht,refIndex:j},t[109]=z,t[110]=Ve,t[111]=j,t[112]=ht,t[113]=gt):gt=t[113];let q=nt&&et&&!I,_t=R?.id??y,J;t[114]!==Ge||t[115]!==P?(J=Ge==null?void 0:{contentReferenceIndex:Ge.refIndex,messageId:Ge.messageId,widgetName:P??V.AppBlock,widgetType:V.AppBlock},t[114]=Ge,t[115]=P,t[116]=J):J=t[116];let bt;t[117]!==n||t[118]!==c||t[119]!==F||t[120]!==z||t[121]!==pt||t[122]!==g||t[123]!==x||t[124]!==Ue||t[125]!==I||t[126]!==E||t[127]!==D||t[128]!==Be||t[129]!==O||t[130]!==Ye||t[131]!==K||t[132]!==A||t[133]!==dt||t[134]!==he||t[135]!==tt||t[136]!==nt||t[137]!==q||t[138]!==_t||t[139]!==J||t[140]!==L||t[141]!==oe?(bt=(0,$.jsx)(Qn,{additionalResourceDomains:n,appBlockId:z,bind:c,canOpen:q,captureConsoleMessages:F,clientThreadId:_t,code:dt,feedback:pt,iconSvg:Be,id:g,inlineHeight:x,isStreaming:I,onConsoleMessagesChange:E,onReadyChange:D,previewLoadingLabel:O,progressiveStreaming:tt,isSavedInlineLoad:Ue,ref:A,showArtifactCard:nt,shareConversation:he,shareTarget:J,styleMode:Ye,title:K,variant:L,widgetRefSeenAtMs:oe}),t[117]=n,t[118]=c,t[119]=F,t[120]=z,t[121]=pt,t[122]=g,t[123]=x,t[124]=Ue,t[125]=I,t[126]=E,t[127]=D,t[128]=Be,t[129]=O,t[130]=Ye,t[131]=K,t[132]=A,t[133]=dt,t[134]=he,t[135]=tt,t[136]=nt,t[137]=q,t[138]=_t,t[139]=J,t[140]=L,t[141]=oe,t[142]=bt):bt=t[142];let xt;return t[143]!==n||t[144]!==$e||t[145]!==m||t[146]!==Ye||t[147]!==K||t[148]!==dt||t[149]!==mt||t[150]!==gt||t[151]!==bt?(xt=(0,$.jsx)(xn,{additionalResourceDomains:n,canSubmitTurn:$e,code:dt,conversationId:mt,headerAction:m,styleMode:Ye,source:gt,title:K,children:bt}),t[143]=n,t[144]=$e,t[145]=m,t[146]=Ye,t[147]=K,t[148]=dt,t[149]=mt,t[150]=gt,t[151]=bt,t[152]=xt):xt=t[152],xt}function Zn(e){return e+1}function Qn(e){"use forget";let t=(0,Z.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,inlineHeight:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,shareConversation:x,shareTarget:S,showArtifactCard:ee,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}=e,{isExpanded:ne,isViewingHistoricalVersion:E,openExpandedView:D,setSharedPreview:O,sharedPreview:k,triggerRef:A}=hn(),j=(0,Q.useContext)(Pe),M;t[0]===n?M=t[1]:(M=n??[],t[0]=n,t[1]=M);let re;t[2]!==c||t[3]!==d||t[4]!==C||t[5]!==M?(re=[d,C,c,...M],t[2]=c,t[3]=d,t[4]=C,t[5]=M,t[6]=re):re=t[6];let N=re.join(`\0`),[ae,P]=(0,Q.useState)(null),oe=!p&&ae===N,se;t[7]===D?se=t[8]:(se=()=>{Fe(),D()},t[7]=D,t[8]=se);let F=se,I;t[9]!==g||t[10]!==N?(I=(e,t)=>{P(e?N:null),g?.(e,t)},t[9]=g,t[10]=N,t[11]=I):I=t[11];let ce=I,le;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==ce||t[19]!==d||t[20]!==f||t[21]!==y||t[22]!==p||t[23]!==m||t[24]!==_||t[25]!==v||t[26]!==b||t[27]!==C||t[28]!==w||t[29]!==te||t[30]!==T?(le=(0,$.jsx)(fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,inlineHeight:f,isStreaming:p,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:m,onReadyChange:ce,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:C,title:w,variant:te,widgetRefSeenAtMs:T}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=ce,t[19]=d,t[20]=f,t[21]=y,t[22]=p,t[23]=m,t[24]=_,t[25]=v,t[26]=b,t[27]=C,t[28]=w,t[29]=te,t[30]=T,t[31]=le):le=t[31];let L;t[32]!==j||t[33]!==le?(L={element:le,sandboxPolicy:j},t[32]=j,t[33]=le,t[34]=L):L=t[34];let R=L,ue;t[35]===R?ue=t[36]:(ue=()=>R,t[35]=R,t[36]=ue);let de=h(ue),fe;t[37]!==r||t[38]!==s||t[39]!==de||t[40]!==O?(fe=e=>{if(e==null)return;let{preview:t,sourceToken:n}=W({appBlockId:r,content:de(),conversationId:s??null,inlineContainer:e});return O(t),()=>{let e=je();Ee(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=s,t[39]=de,t[40]=O,t[41]=fe):fe=t[41];let pe=fe,me,he;t[42]!==R||t[43]!==k?(he=()=>{k!=null&&Ce(k,R)},me=[R,k],t[42]=R,t[43]=k,t[44]=me,t[45]=he):(me=t[44],he=t[45]),ie(he,me);let ge=E?F:void 0,_e;t[46]!==u||t[47]!==ge||t[48]!==w||t[49]!==A?(_e=(0,$.jsx)(ir,{iconSvg:u,onOpen:ge,openButtonRef:A,title:w}),t[46]=u,t[47]=ge,t[48]=w,t[49]=A,t[50]=_e):_e=t[50];let z=ne?_e:null,B;t[51]===pe?B=t[52]:(B=(0,$.jsx)(`div`,{ref:pe,className:`w-full`}),t[51]=pe,t[52]=B);let ve;t[53]!==a||t[54]!==l||t[55]!==F||t[56]!==u||t[57]!==oe||t[58]!==p||t[59]!==x||t[60]!==S||t[61]!==ee||t[62]!==B||t[63]!==w||t[64]!==A?(ve=(0,$.jsx)(er,{canOpen:a,expandButtonRef:A,feedback:l,iconSvg:u,isShareReady:oe,shareConversation:x,shareTarget:S,isStreaming:p,showArtifactCard:ee,title:w,onOpen:F,children:B}),t[53]=a,t[54]=l,t[55]=F,t[56]=u,t[57]=oe,t[58]=p,t[59]=x,t[60]=S,t[61]=ee,t[62]=B,t[63]=w,t[64]=A,t[65]=ve):ve=t[65];let V;t[66]!==ne||t[67]!==ve?(V=(0,$.jsx)(`div`,{hidden:ne,children:ve}),t[66]=ne,t[67]=ve,t[68]=V):V=t[68];let H;return t[69]!==z||t[70]!==V?(H=(0,$.jsxs)($.Fragment,{children:[z,V]}),t[69]=z,t[70]=V,t[71]=H):H=t[71],H}function $n(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:o,title:s,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=a(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=a(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=s??i,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==o||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[o,p]}),t[7]=o,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function er(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:o,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:d,shareConversation:f,shareTarget:p,showArtifactCard:m,title:h}=e,g=L(),_;t[0]===g?_=t[1]:(_=g.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=g,t[1]=_);let v=_,y;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==v||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==d||t[10]!==f||t[11]!==p||t[12]!==m||t[13]!==h?(y=m?(0,$.jsxs)(`div`,{className:a(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)($n,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:f,expandButtonRef:i,isReady:c,onOpen:d,target:p}),className:`min-h-13 px-4 py-2`,fallbackTitle:v,leading:l?(0,$.jsx)(u,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(or,{iconSvg:s}),title:h}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:f,isReady:c,target:p,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=v,t[6]=s,t[7]=c,t[8]=l,t[9]=d,t[10]=f,t[11]=p,t[12]=m,t[13]=h,t[14]=y):y=t[14];let b;t[15]===o?b=t[16]:(b=o==null?null:(0,$.jsx)(nr,{...o}),t[15]=o,t[16]=b);let x;return t[17]!==y||t[18]!==b?(x=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[y,b]}),t[17]=y,t[18]=b,t[19]=x):x=t[19],x}function tr(e){"use forget";let t=(0,Z.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=ne(je),d=L(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(B(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(ir,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)($n,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(or,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:_r},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o||t[13]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(gr,{onRetry:o}):(0,$.jsx)(hr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=g):g=t[14];let _;return t[15]!==m||t[16]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[15]=m,t[16]=g,t[17]=_):_=t[17],_}function nr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(ne(rr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(_e,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(et,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function rr(){return Qe()}function ir(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=L(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=$n,l=r==null?void 0:(0,$.jsx)(M,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(ar,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function ar(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(or,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function or(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,o;t[0]===r?o=t[1]:(o=sr(r),t[0]=r,t[1]=o);let s=o,c;return t[2]!==i||t[3]!==s?(c=s==null?(0,$.jsx)(Le,{"aria-hidden":`true`,className:a(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:a(`icon-md shrink-0`,i),children:(0,$.jsx)(Ne,{svgString:s,className:`h-full w-full`})}),t[2]=i,t[3]=s,t[4]=c):c=t[4],c}function sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function cr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!lr(e,n))return!1}return!0}function lr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function ur(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=L(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function dr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=L(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(M,{ref:i,type:`button`,icon:Re,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(oe,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function fr(e){"use forget";let t=(0,Z.c)(190),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:o,code:s,id:c,captureConsoleMessages:l,inlineHeight:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,presentationSurface:m,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:b,ref:x,styleMode:ee,surface:C,title:w,variant:te,widgetRefSeenAtMs:T}=e,E=d!==void 0&&d,D=y!==void 0&&y,O=b!==void 0&&b,k=ee===void 0?`default`:ee,A=C===void 0?`inline`:C,M=te===void 0?`inline`:te,re=L(),N=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),P=Ue(i),[oe,se]=(0,Q.useState)(P.values),F=j(oe,P.values)?oe:P.values;F!==oe&&se(F);let ce=[...P.callbacks.keys()],[le,R]=(0,Q.useState)(ce),ue=j(le,ce)?le:ce;ue!==le&&R(ue);let de=(0,Q.useRef)(F),fe=(0,Q.useRef)(ue),pe=(0,Q.useRef)(P.callbacks),me=i!=null,he=(0,Q.useRef)(!1),ge=(0,Q.useRef)(!1),_e=(0,Q.useRef)(null),z=(0,Q.useRef)(null),B=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),V=(0,Q.useRef)(null),H=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),xe=(0,Q.useRef)(0),Se=(0,Q.useRef)(null),Ce=(0,Q.useRef)(null),U;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(U=[],t[0]=U):U=t[0];let we=(0,Q.useRef)(U),Te=g(),Ee=ne(v),{isInternalPreview:De,networkPolicy:Oe}=(0,Q.useContext)(Pe),ke=Oe===void 0?`none`:Oe,Ae=Ye()||De,je=qe(o)&&!De,Me=je||De&&ke===`deps-only`,Ne=Te?`dark`:`light`,W=re.locale,Fe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Fe={status:`streaming`},t[1]=Fe):Fe=t[1];let[Ie,Le]=(0,Q.useState)(Fe),Re=Ie.status===`finalized`&&Ie.html!==s,ze=D&&!E&&(M===`artifact`||Ie.status===`failed`),G=D&&A===`inline`&&Ie.status!==`static`&&!ze&&!Re,Be=G&&E&&M===`artifact`&&!Yn(s),Ke=Be?0:vr,Je=u??`intrinsic-height`,Xe=Ae?`execution-enabled`:`execution-disabled`,Ze=Me?`network-enabled`:`network-disabled`,Qe=De?`internal-preview`:`workspace-preview`,$e=me?`bindings-enabled`:`bindings-disabled`,et=G?`progressive-app-block-stream`:s,tt;t[2]===r?tt=t[3]:(tt=r??[],t[2]=r,t[3]=tt);let nt;t[4]!==Ee||t[5]!==W||t[6]!==k||t[7]!==A||t[8]!==Je||t[9]!==Xe||t[10]!==Ze||t[11]!==Qe||t[12]!==$e||t[13]!==et||t[14]!==tt||t[15]!==Ne?(nt=[Ne,Ee,A,Je,k,W,Xe,Ze,Qe,$e,et,...tt],t[4]=Ee,t[5]=W,t[6]=k,t[7]=A,t[8]=Je,t[9]=Xe,t[10]=Ze,t[11]=Qe,t[12]=$e,t[13]=et,t[14]=tt,t[15]=Ne,t[16]=nt):nt=t[16];let rt=nt.join(`\0`),it;t[17]===r?it=t[18]:(it=rn(r),t[17]=r,t[18]=it);let at=it,ot=O?`saved_inline`:void 0,st=Me?`deps_only`:`disabled`,ct=A===`inline`?M:void 0,lt=G?`progressive`:`static`,ut;t[19]!==A||t[20]!==ot||t[21]!==st||t[22]!==ct||t[23]!==lt?(ut={loadSource:ot,networkPolicy:st,surface:A,variant:ct,renderMode:lt},t[19]=A,t[20]=ot,t[21]=st,t[22]=ct,t[23]=lt,t[24]=ut):ut=t[24];let dt=ut,[ft,pt]=(0,Q.useState)(0),[mt,ht]=(0,Q.useState)(null),gt=mt?.signature===rt?mt.status:null,q=gt===`ready`,_t=q||gt===`failed_after_ready`,vt=G&&gt===`failed`,J=!E&&!G&&gt===`failed`,yt=m??A,bt=yt===`stage`||u!=null,xt=u==null?A:`stage`,Ct=D&&yt===`inline`&&M===`inline`,Tt=G&&yt===`inline`&&E&&!J,Et;t[25]!==s||t[26]!==dt||t[27]!==T?(Et={content:s,metricTags:dt,widgetRefSeenAtMs:T},t[25]=s,t[26]=dt,t[27]=T,t[28]=Et):Et=t[28];let{cancelFirstPaintFrame:Ot,startRunMetrics:kt}=Dt(Et),At,jt;t[29]===q?(At=t[30],jt=t[31]):(At=()=>{q&&H.current?.markFirstPaint()},jt=[q],t[29]=q,t[30]=At,t[31]=jt),ie(At,jt);let Mt,Nt;t[32]!==q||t[33]!==p?(Mt=()=>{p?.(q)},Nt=[q,p],t[32]=q,t[33]=p,t[34]=Mt,t[35]=Nt):(Mt=t[34],Nt=t[35]),(0,Q.useEffect)(Mt,Nt);let Pt,Ft;t[36]!==ue||t[37]!==F||t[38]!==P.callbacks?(Pt=()=>{de.current=F,fe.current=ue,pe.current=P.callbacks},Ft=[ue,F,P.callbacks],t[36]=ue,t[37]=F,t[38]=P.callbacks,t[39]=Pt,t[40]=Ft):(Pt=t[39],Ft=t[40]),ie(Pt,Ft);let It;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(It=e=>{ae.current===e&&N.current?.updateAppBlockMessenger?.(Ge(e,de.current,fe.current))},t[41]=It):It=t[41];let Lt=h(It),Rt;t[42]===Lt?Rt=t[43]:(Rt=e=>{let t=ae.current;if(t==null)return;let n=We(e,t),r=n&&pe.current.get(n.name);if(n!=null&&r){let e=()=>{S.postTask(()=>Lt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=Lt,t[43]=Rt);let zt=h(Rt),Bt;t[44]!==me||t[45]!==q||t[46]!==Lt?(Bt=()=>{let e=ae.current;!q||!me||e==null||Lt(e)},t[44]=me,t[45]=q,t[46]=Lt,t[47]=Bt):Bt=t[47];let Vt;t[48]!==ue||t[49]!==F||t[50]!==me||t[51]!==q||t[52]!==Lt?(Vt=[ue,F,me,q,Lt],t[48]=ue,t[49]=F,t[50]=me,t[51]=q,t[52]=Lt,t[53]=Vt):Vt=t[53],(0,Q.useEffect)(Bt,Vt);let Ht,Ut;t[54]!==u||t[55]!==q||t[56]!==m?(Ht=()=>{!q||m==null||N.current?.updateAppBlockSurface?.(u==null?m:`stage`)},Ut=[u,q,m],t[54]=u,t[55]=q,t[56]=m,t[57]=Ht,t[58]=Ut):(Ht=t[57],Ut=t[58]),(0,Q.useEffect)(Ht,Ut);let Wt,Gt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Wt=()=>({clearCapturedConsoleMessages:()=>{we.current=[]},captureScreenshotDataUrl:async()=>(await N.current?.screenshot())?.imageBase64??null,focus:()=>{N.current?.focus()}}),Gt=[],t[59]=Wt,t[60]=Gt):(Wt=t[59],Gt=t[60]),(0,Q.useImperativeHandle)(x,Wt,Gt);let Kt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Kt=()=>{Se.current!=null&&(window.clearTimeout(Se.current),Se.current=null)},t[61]=Kt):Kt=t[61];let qt=h(Kt),Jt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(Jt=()=>{Ce.current!=null&&(window.clearTimeout(Ce.current),Ce.current=null)},t[62]=Jt):Jt=t[62];let Y=h(Jt),Yt;t[63]!==q||t[64]!==G?(Yt=()=>{if(!G||!q||V.current==null)return;let e=ve.current,t=N.current;if(e==null||t?.updateAppBlockStream==null||ge.current)return;let n=xe.current;ve.current=null,z.current=St(),B.current=e.html,e.isFinal&&(ge.current=!0);let r=()=>xe.current!==n||V.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=be.current,a=i==null?r():i.then(r);be.current=a,a.then(()=>{be.current===a&&(be.current=null);let t=V.current;xe.current!==n||t==null||(Yn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Le({status:`finalized`,html:e.html})))},e=>{be.current===a&&(be.current=null),xe.current===n&&(e instanceof DOMException&&e.name===`AbortError`||ye.current?.(`stream_update`,wt(e)))})},t[63]=q,t[64]=G,t[65]=Yt):Yt=t[65];let Xt=h(Yt),Zt;t[66]!==Ee||t[67]!==Me||t[68]!==l||t[69]!==qt||t[70]!==Y||t[71]!==s||t[72]!==xt||t[73]!==me||t[74]!==Ae||t[75]!==Re||t[76]!==O||t[77]!==E||t[78]!==W||t[79]!==f||t[80]!==p||t[81]!==m||t[82]!==rt||t[83]!==Ie.status||t[84]!==ze||t[85]!==G||t[86]!==kt||t[87]!==k||t[88]!==Ne?(Zt=()=>{if(!Ae)return;if(Ie.status===`failed`){if(E)return;Le({status:`static`}),pt(mr);return}(Re||ze&&Ie.status!==`static`)&&Le({status:`static`});let e=G&&N.current?.updateAppBlockStream!=null;if(G&&!e){E||Le({status:`static`});return}he.current=!0,ge.current=!1,_e.current=null,z.current=null,B.current=null,ve.current=null,V.current=null,H.current=null,ye.current=null,be.current=null,Y(),xe.current+=1;let t=xe.current;qt(),ht(null),ae.current=me?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=an(s,Ne,W,Ee,xt,{loadTailwind:Me,progressiveStreaming:e,syncPresentationSurface:m!=null,styleMode:k}),a=!1,o=!1,c=!1,u=!1,d=!1,h=()=>xe.current===t,g=()=>e&&o,_=kt(h,{deferFirstPaint:e||O,deferPayloadSize:e});O&&(H.current=_),e&&(V.current=_);let v=e=>{!l||f==null||!h()||(we.current=e,!u&&(u=!0,S.postTask(()=>{u=!1,h()&&f(we.current)},{priority:`background`})))},y=e=>{if(!(!h()||a||c)){if(a=!0,qt(),_.markReady(e),O){o=!0,ht({signature:rt,status:`ready`});return}d||(d=!0,S.postTask(()=>{d=!1,!(!h()||c)&&(o=!0,ht({signature:rt,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!h()||c||(c=!0,qt(),Y(),ve.current=null,V.current=null,e&&Le({status:`failed`}),ht({signature:rt,status:g()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),_.reportFailure(t,n),S.postTask(()=>{h()&&(e?p?.(!1):p?.(!1,`failure`))},{priority:`background`}))};ye.current=b,we.current=[],v([]),Se.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=N.current?.evalAsync({code:r,...ae.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ge(ae.current,de.current,fe.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&g()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){h()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(v([...we.current,t.value]),t.value.type===He.ENVIRONMENT_STATUS&&t.value.status===Ve.RUNNING_CODE&&y(`running_code`),t.value.type===He.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(y(`run_complete`),_.reportSuccess(`run_complete`))),await S.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,wt(e)))})},t[66]=Ee,t[67]=Me,t[68]=l,t[69]=qt,t[70]=Y,t[71]=s,t[72]=xt,t[73]=me,t[74]=Ae,t[75]=Re,t[76]=O,t[77]=E,t[78]=W,t[79]=f,t[80]=p,t[81]=m,t[82]=rt,t[83]=Ie.status,t[84]=ze,t[85]=G,t[86]=kt,t[87]=k,t[88]=Ne,t[89]=Zt):Zt=t[89];let Qt=h(Zt),$t;t[90]!==qt||t[91]!==Y?($t=()=>{xe.current+=1,he.current=!1,ge.current=!1,_e.current=null,B.current=null,ve.current=null,V.current=null,ye.current=null,be.current=null,qt(),Y(),ht(null),pt(pr)},t[90]=qt,t[91]=Y,t[92]=$t):$t=t[92];let en=h($t),tn;t[93]!==bt||t[94]!==yt?(tn=yt===`inline`&&!bt?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[93]=bt,t[94]=yt,t[95]=tn):tn=t[95];let nn=tn,on;t[96]!==Ot||t[97]!==qt||t[98]!==Y||t[99]!==Qt?(on=()=>{Qt();let e=N.current;return()=>{xe.current+=1,ae.current=null,V.current=null,H.current=null,ye.current=null,be.current=null,qt(),Y(),Ot(),e?.stop()}},t[96]=Ot,t[97]=qt,t[98]=Y,t[99]=Qt,t[100]=on):on=t[100];let sn;t[101]!==Ot||t[102]!==qt||t[103]!==Y||t[104]!==Ae||t[105]!==rt||t[106]!==Qt||t[107]!==ft?(sn=[Ot,qt,Y,Ae,rt,Qt,ft],t[101]=Ot,t[102]=qt,t[103]=Y,t[104]=Ae,t[105]=rt,t[106]=Qt,t[107]=ft,t[108]=sn):sn=t[108],(0,Q.useEffect)(on,sn);let cn,ln;t[109]!==E||t[110]!==Qt||t[111]!==G?(cn=()=>{!G||E||he.current||N.current?.updateAppBlockStream!=null||Qt()},ln=[E,Qt,G],t[109]=E,t[110]=Qt,t[111]=G,t[112]=cn,t[113]=ln):(cn=t[112],ln=t[113]),(0,Q.useEffect)(cn,ln);let un,dn;if(t[114]!==Y||t[115]!==s||t[116]!==Xt||t[117]!==J||t[118]!==q||t[119]!==E||t[120]!==G||t[121]!==M?(un=()=>{if(!G||!q||J||ge.current||N.current?.updateAppBlockStream==null)return;let e=E?Jn(s):s;if(E&&(ve.current?.html??B.current)===e)return;if(ve.current={html:e,isFinal:!E},!E){Y(),Xt();return}let t=z.current;if(t==null&&M===`artifact`&&(_e.current??=St(),t=_e.current),t==null){Xt();return}let n=M===`artifact`?Sr:xr,r=St()-t;if(r>=n){Xt();return}return Ce.current=window.setTimeout(()=>{Ce.current=null,Xt()},n-r),Y},dn=[Y,s,Xt,J,q,E,G,M],t[114]=Y,t[115]=s,t[116]=Xt,t[117]=J,t[118]=q,t[119]=E,t[120]=G,t[121]=M,t[122]=un,t[123]=dn):(un=t[122],dn=t[123]),(0,Q.useEffect)(un,dn),!Ae){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[124]=e):e=t[124],e}let fn=Ct&&`flex-col`,pn=yt===`inline`&&(Be?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),mn=yt===`stage`&&`h-full min-h-0`,hn;t[125]!==fn||t[126]!==pn||t[127]!==mn?(hn=a(`flex w-full`,fn,pn,mn),t[125]=fn,t[126]=pn,t[127]=mn,t[128]=hn):hn=t[128];let gn;t[129]!==Ct||t[130]!==Tt||t[131]!==w?(gn=Ct?(0,$.jsx)(Rn,{isVisible:Tt,title:w}):null,t[129]=Ct,t[130]=Tt,t[131]=w,t[132]=gn):gn=t[132];let _n=!E&&!G&&(gt===`failed`||gt===`failed_after_ready`)&&mt?.readyTimedOut||void 0,vn=yt===`inline`&&!bt?`flex-none`:`w-full`,yn=Tt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,bn;t[133]!==vn||t[134]!==yn?(bn=a(`relative min-w-0`,vn,yn),t[133]=vn,t[134]=yn,t[135]=bn):bn=t[135];let xn;t[136]!==u||t[137]!==nn||t[138]!==yt?(xn=yt===`inline`&&u!=null?{height:u}:nn,t[136]=u,t[137]=nn,t[138]=yt,t[139]=xn):xn=t[139];let Sn=`${ft}:${Me?`network-enabled`:`network-disabled`}:${De?`internal-preview`:`workspace-preview`}`,Cn;t[140]!==n||t[141]!==o||t[142]!==c?(Cn=JSON.stringify([o??null,n??c]),t[140]=n,t[141]=o,t[142]=c,t[143]=Cn):Cn=t[143];let wn;t[144]===re?wn=t[145]:(wn=re.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=re,t[145]=wn);let Tn=Me?`deps-only`:`none`,En=je?Cr:wr,Dn=_t?0:-1,kn=me?zt:void 0,An=yt===`inline`&&!bt&&k===`open`,jn=!bt,Mn=G?Ke:_r,Nn;t[146]!==c||t[147]!==De||t[148]!==Qt||t[149]!==at||t[150]!==Sn||t[151]!==Cn||t[152]!==wn||t[153]!==Tn||t[154]!==En||t[155]!==Dn||t[156]!==kn||t[157]!==An||t[158]!==jn||t[159]!==Mn?(Nn=(0,$.jsx)(K,{id:c,sandboxOriginId:Cn,title:wn,visuallyHidden:!1,networkPolicy:Tn,disableExternalNavigation:De,additionalResourceDomains:at,sandboxPermissions:En,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Dn,onRetryCodeRun:Qt,onAppBlockMessage:kn,transparentBackground:An,useIntrinsicHeight:jn,intrinsicHeightFallback:Mn,ref:N},Sn),t[146]=c,t[147]=De,t[148]=Qt,t[149]=at,t[150]=Sn,t[151]=Cn,t[152]=wn,t[153]=Tn,t[154]=En,t[155]=Dn,t[156]=kn,t[157]=An,t[158]=jn,t[159]=Mn,t[160]=Nn):Nn=t[160];let Pn;t[161]===Tt?Pn=t[162]:(Pn=Tt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=Tt,t[162]=Pn);let Fn;t[163]!==vt||t[164]!==J||t[165]!==_t||t[166]!==_||t[167]!==G?(Fn=!_t&&!J&&(!G||vt)?(0,$.jsx)(hr,{label:_}):null,t[163]=vt,t[164]=J,t[165]=_t,t[166]=_,t[167]=G,t[168]=Fn):Fn=t[168];let In;t[169]!==J||t[170]!==en?(In=J?(0,$.jsx)(gr,{onRetry:en}):null,t[169]=J,t[170]=en,t[171]=In):In=t[171];let Ln;t[172]!==Tt||t[173]!==_n||t[174]!==bn||t[175]!==xn||t[176]!==Nn||t[177]!==Pn||t[178]!==Fn||t[179]!==In?(Ln=(0,$.jsxs)(`div`,{"aria-busy":Tt,"data-app-block-ready-timeout":_n,className:bn,style:xn,children:[Nn,Pn,Fn,In]}),t[172]=Tt,t[173]=_n,t[174]=bn,t[175]=xn,t[176]=Nn,t[177]=Pn,t[178]=Fn,t[179]=In,t[180]=Ln):Ln=t[180];let X;t[181]!==_||t[182]!==Tt||t[183]!==M?(X=Tt&&M===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:_??(0,$.jsx)(I,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=_,t[182]=Tt,t[183]=M,t[184]=X):X=t[184];let zn;return t[185]!==hn||t[186]!==gn||t[187]!==Ln||t[188]!==X?(zn=(0,$.jsxs)(`div`,{className:hn,children:[gn,Ln,X]}),t[185]=hn,t[186]=gn,t[187]=Ln,t[188]=X,t[189]=zn):zn=t[189],zn}function pr(e){return e+1}function mr(e){return e+1}function hr(e){"use forget";let t=(0,Z.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(u,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(I,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function gr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(I,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(M,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{Z=F(),E(),Ze(),ye(),z(),w(),i(),Xe(),y(),ze(),Ie(),G(),pe(),Je(),m(),he(),dt(),lt(),xe(),ee(),te(),O(),Se(),A(),c(),T(),f(),$e(),ft(),H(),Ke(),p(),re(),Q=n(le()),se(),mn(),Lt(),bt(),Dn(),U(),jn(),vn(),zn(),rt(),Oe(),fe(),it(),Kn(),$=ce(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(dr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(oe,{label:n,children:(0,$.jsx)(M,{type:`button`,icon:Be,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(pt,{category:V.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Pr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(mt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(pt,{category:V.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{qn as a,Kn as c,Dn as d,St as f,J as g,yt as h,fr as i,Sn as l,bt as m,ir as n,Fr as o,Lt as p,hr as r,Bn as s,Xn as t,Cn as u};
//# sourceMappingURL=e3b746a6-i9vyl35mifakcy9v.js.map