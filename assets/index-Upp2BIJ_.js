const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TotalList-CNFt40g1.js","assets/react-DHBI0EtI.js","assets/classnames-C9FZUsQl.js","assets/index-BjthYR4N.js","assets/react-icons-DrVEPXwD.js","assets/react-dom-DvAqprxs.js","assets/scheduler-CzFDRTuY.js","assets/antd-EIOPli7h.js","assets/rc-util-C_IKOujR.js","assets/@babel-nFbzLRrx.js","assets/@ant-design-DYbiGqra.js","assets/@emotion-CW87jbl0.js","assets/stylis-DsJDcYJc.js","assets/resize-observer-polyfill-B1PUzC5B.js","assets/@ctrl-DOFZgDuz.js","assets/rc-resize-observer-43YOlFZH.js","assets/rc-motion-CdxvAtL7.js","assets/rc-tooltip-D8OyY3y1.js","assets/@rc-component-B1fwFGqs.js","assets/rc-overflow-By3q3WiN.js","assets/rc-menu-D43zhOpz.js","assets/rc-select-BpSLrJFJ.js","assets/rc-virtual-list-DpTOiMKE.js","assets/rc-field-form-C1zy_LtQ.js","assets/rc-table-CfLN9-_6.js","assets/rc-tree-iADDq61d.js","assets/rc-checkbox-DMe14Veg.js","assets/rc-dropdown-BqNJmLnS.js","assets/rc-pagination-BDPleCrk.js","assets/throttle-debounce-CUWDS_la.js","assets/rc-input-D42mlhnj.js","assets/rc-textarea-C25K72dI.js","assets/rc-picker-BKR3waf7.js","assets/react-router-dom-DiQ98RHp.js","assets/react-router-DHqhueuW.js","assets/@remix-run-Dj_uVd1O.js","assets/NetProfit-DXaCOcRM.js","assets/react-circular-progressbar-DIR04OZg.js","assets/react-circular-progressbar-BvJi-8uu.css","assets/RecentOrders-p8wTObQg.js","assets/CustomersFeedback-B8GWQR5m.js","assets/Popular-D-VmWJp6.js","assets/Activity-Dcaw-IEb.js","assets/react-chartjs-2-Dd3OmOiI.js","assets/chart.js-B_1yO8w8.js","assets/@kurkle-BZxJdD1U.js"])))=>i.map(i=>d[i]);
import{j as e,r as x,a as d}from"./react-DHBI0EtI.js";import{c as L}from"./react-dom-DvAqprxs.js";import{F as M,a as P,b as h,I,M as w,c as f,d as g,e as b,G as F,C,f as R,g as A,R as z,h as D,i as T,j as N,k as v,L as y,l as k}from"./react-icons-DrVEPXwD.js";import{A as B,I as U,S as $}from"./antd-EIOPli7h.js";import{L as V,B as W}from"./react-router-dom-DiQ98RHp.js";import{d as q,e as p}from"./react-router-DHqhueuW.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./rc-util-C_IKOujR.js";import"./@babel-nFbzLRrx.js";import"./@ant-design-DYbiGqra.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-DOFZgDuz.js";import"./rc-resize-observer-43YOlFZH.js";import"./rc-motion-CdxvAtL7.js";import"./rc-tooltip-D8OyY3y1.js";import"./@rc-component-B1fwFGqs.js";import"./rc-overflow-By3q3WiN.js";import"./rc-menu-D43zhOpz.js";import"./rc-select-BpSLrJFJ.js";import"./rc-virtual-list-DpTOiMKE.js";import"./rc-field-form-C1zy_LtQ.js";import"./rc-table-CfLN9-_6.js";import"./rc-tree-iADDq61d.js";import"./rc-checkbox-DMe14Veg.js";import"./rc-dropdown-BqNJmLnS.js";import"./rc-pagination-BDPleCrk.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-D42mlhnj.js";import"./rc-textarea-C25K72dI.js";import"./rc-picker-BKR3waf7.js";import"./@remix-run-Dj_uVd1O.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const G=()=>({getProfitOrLoss:(t,a)=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-end gap-1",children:[t?e.jsx(M,{className:"text-green-600"}):e.jsx(P,{className:"text-red-600"}),e.jsxs("span",{children:[a,"%"]})]})}),getProfileInitials:t=>{var l,n,s;let a,r=t==null?void 0:t.split(" ");return a=(r==null?void 0:r.length)>1?((l=r[0])==null?void 0:l.charAt(0))+((n=r[1])==null?void 0:n.charAt(0)):(s=r[0])==null?void 0:s.charAt(0),a},getFormattedCurrency:t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":t.toString(),getTotalCount:(t,a)=>a?"₹ "+t:t,getUserRatings:t=>[1,2,3,4,5].map((r,l)=>l<t?e.jsx("span",{className:"text-yellow-400",children:e.jsx(h,{})},l):e.jsx("span",{className:"text-white",children:e.jsx(h,{})},l))}),H=()=>{const{getProfileInitials:t}=G();return e.jsx(e.Fragment,{children:e.jsx(B,{className:"bg-blue-500",size:"default",gap:"1",children:t("Mohasin Attar")})})},K=()=>{const[t,a]=x.useState(localStorage.getItem("theme")||"dark");return x.useEffect(()=>{document.documentElement.classList.toggle("dark",t==="dark"),localStorage.setItem("theme",t)},[t]),e.jsxs("div",{className:"cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"checkbox",id:"checkbox",onChange:()=>a(r=>r==="light"?"dark":"light")}),e.jsxs("label",{for:"checkbox",class:"checkbox-label bg-[--bg-l] ",children:[e.jsx(I,{className:"fa-moon"}),e.jsx(w,{className:"fa-sun"}),e.jsx("span",{className:"ball !bg-[--desc]"})]})]})},J=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"hidden gap-2 my-auto md:flex",children:[e.jsx("span",{className:" bg-[--bg-l] text-[--desc] rounded-full h-6 p-1 cursor-pointer",children:e.jsx(f,{})}),e.jsx("span",{className:"bg-[--bg-l] rounded-full text-[--desc] h-6 p-1 cursor-pointer",children:e.jsx(g,{})}),e.jsx("span",{className:" bg-[--bg-l] rounded-full text-[--desc] h-6 p-1 cursor-pointer",children:e.jsx(b,{})})]})}),Q=()=>e.jsx("div",{className:"my-auto",children:e.jsx(U,{className:"dark:bg-[--bg-l] dark:text-[--title] bg-[--desc] border-0 h-6 py-1",placeholder:"",prefix:e.jsx(F,{})})}),X=[{label:"Mail",key:"0",icon:e.jsx("div",{className:"flex justify-center text-green-500",children:e.jsx(f,{className:"text-xl"})})},{label:"Notification",key:"1",icon:e.jsx("div",{className:"flex justify-center text-orange-500",children:e.jsx(b,{className:"text-xl"})})},{label:"Setting",key:"2",icon:e.jsx("div",{className:"flex justify-center text-slate-500",children:e.jsx(g,{className:"text-xl"})})},{label:"Profile",key:"3",icon:e.jsx("div",{className:"flex justify-center text-blue-500",children:e.jsx(C,{className:"text-xl"})})},{label:"SignOut",key:"4",icon:e.jsx("div",{className:"flex justify-center text-red-500",children:e.jsx(R,{className:"text-xl"})})}],Y=({setOpenMenus:t,openMenus:a})=>e.jsxs("div",{className:`${a?"md:hidden flex":"hidden "} fixed z-30 text-lg top-0 gap-3 items-center bottom-0 text-center right-0 mt-[60px] flex-col dark:bg-[--bg] dark:text-[--title] sun min-w-[60px] px-2`,children:[e.jsx("span",{className:"py-2 border-b-[1px] border-[--bg-l]",children:e.jsx(K,{})}),X.map(r=>e.jsx(e.Fragment,{children:e.jsxs("span",{className:"dark:text-[--desc] cursor-pointer grid text-center text-lg pb-1 border-b-[1px]  border-[--bg-l]",children:[r.icon,e.jsx("span",{className:"text-xs",children:r.label})]},r.id)}))]}),_=({isOn:t})=>e.jsx("div",{className:`${t?"block lg:hidden ":"hidden"} fixed inset-0 top-[60px] z-20 h-[calc(100vh-60px)] bg-black/70`}),Z=({setIsOpenSideModal:t,isOpenSideModal:a})=>{const[r,l]=x.useState(!1);let n={openMenus:r,setOpenMenus:l};return e.jsxs("div",{className:"fixed inset-0 top-0 flex max-h-[60px] dark:bg-[--bg] dark:text-[--title] sun z-50",children:[e.jsx("div",{className:"flex min-w-[60px] justify-center",children:e.jsx("span",{className:"content-center cursor-pointer",children:e.jsx(A,{className:"text-2xl italic text-orange-500",onClick:()=>t(!a)})})}),e.jsxs("div",{className:"flex justify-between w-full px-4 my-auto",children:[e.jsx(Q,{}),e.jsxs("div",{className:"justify-between hidden gap-4 md:flex",children:[e.jsx(J,{}),e.jsx(H,{})]}),e.jsx("div",{className:"flex md:hidden",children:e.jsx("span",{className:"content-center text-3xl cursor-pointer",children:r?e.jsx(z,{onClick:()=>l(!r)}):e.jsx(D,{onClick:()=>l(!r)})})}),e.jsx(Y,{...n}),e.jsx(_,{isOn:r})]})]})},ee=[{id:1,icon:e.jsx(T,{}),path:"/"},{id:2,icon:e.jsx(N,{}),path:"/stats"},{id:3,icon:e.jsx(v,{}),path:"/orders"},{id:4,icon:e.jsx(y,{}),path:"/wallet"},{id:5,icon:e.jsx(k,{}),path:"/store"}],te=({isOpenSideModal:t,setIsOpenSideModal:a})=>{var n;const[r,l]=x.useState((n=window.location)==null?void 0:n.pathname);return e.jsx("div",{onClick:()=>a(!1),className:`${t?"flex":"lg:flex hidden"} fixed z-30 text-lg top-0 gap-4 bottom-0 text-center left-0 mt-[60px] flex-col dark:bg-[--bg] dark:text-[--title] sun min-w-[60px]`,children:ee.map(s=>e.jsx(V,{to:s.path,onClick:i=>l(s.path),className:`${s.path===r?" border-l-[3px] border-blue-500 !text-blue-500 ":""}dark:text-[--desc]  cursor-pointer flex justify-center py-2 text-xl`,children:s.icon},s.id))})},se=({children:t})=>{const[a,r]=x.useState(!1);let l={setIsOpenSideModal:r,isOpenSideModal:a};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"dark:bg-[--bg-d]",children:[e.jsx(Z,{...l}),e.jsx(te,{...l}),e.jsx(_,{isOn:a}),e.jsx("div",{className:"mt-[60px] lg:ml-[60px] transition-all ",children:t})]})})},re="modulepreload",ne=function(t){return"/Dashboard_UI/"+t},j={},m=function(a,r,l){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(r.map(c=>{if(c=ne(c),c in j)return;j[c]=!0;const u=c.endsWith(".css"),S=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${S}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":re,u||(o.as="script",o.crossOrigin=""),o.href=c,i&&o.setAttribute("nonce",i),document.head.appendChild(o),u)return new Promise((O,E)=>{o.addEventListener("load",O),o.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>a()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},ae=()=>e.jsx("div",{className:"fixed inset-0 z-50 h-screen",children:e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx($,{size:"large"})})}),le=d.lazy(()=>m(()=>import("./TotalList-CNFt40g1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]))),ie=d.lazy(()=>m(()=>import("./NetProfit-DXaCOcRM.js"),__vite__mapDeps([36,1,2,37,38,5,6,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]))),ce=d.lazy(()=>m(()=>import("./RecentOrders-p8wTObQg.js"),__vite__mapDeps([39,1,2,3,4,7,8,9,5,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))),oe=d.lazy(()=>m(()=>import("./CustomersFeedback-B8GWQR5m.js"),__vite__mapDeps([40,1,2,7,8,9,5,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,3,4,33,34,35]))),de=d.lazy(()=>m(()=>import("./Popular-D-VmWJp6.js"),__vite__mapDeps([41,1,2,4,3]))),xe=d.lazy(()=>m(()=>import("./Activity-Dcaw-IEb.js"),__vite__mapDeps([42,1,2,43,44,45,4,3,7,8,9,5,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))),me=()=>e.jsxs("div",{className:"grid grid-cols-10 gap-4 px-[16px] py-4 ",children:[e.jsx("div",{className:"col-span-10 bg-transparent dark:text-[--title] sun",children:"Dashboard"}),e.jsxs(x.Suspense,{fallback:e.jsx(ae,{}),children:[e.jsx("div",{className:"col-span-10 lg:col-span-6",children:e.jsx(le,{})}),e.jsx("div",{className:"col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4",children:e.jsx(ie,{})}),e.jsx("div",{className:"col-span-10 lg:col-span-6 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4",children:e.jsx(xe,{})}),e.jsx("div",{className:"col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4",children:e.jsx(de,{})}),e.jsx("div",{className:"col-span-10 lg:col-span-6 dark:bg-[--bg] dark:text-[--title] sun rounded-md px-4",children:e.jsx(ce,{})}),e.jsx("div",{className:"col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md px-4",children:e.jsx(oe,{})})]})]}),pe=()=>e.jsx("div",{className:"flex justify-center h-[calc(100vh-60px)] items-center ",children:e.jsx("span",{className:"text-[--desc] text-blue-500 text-5xl",children:e.jsx(v,{})})}),ue=()=>e.jsx("div",{className:"flex justify-center h-[calc(100vh-60px)] items-center ",children:e.jsx("span",{className:"text-[--desc] text-blue-500 text-5xl",children:e.jsx(N,{})})}),he=()=>e.jsx("div",{className:"flex justify-center h-[calc(100vh-60px)] items-center ",children:e.jsx("span",{className:"text-[--desc] text-blue-500 text-5xl",children:e.jsx(k,{})})}),je=()=>e.jsx("div",{className:"flex justify-center h-[calc(100vh-60px)] items-center ",children:e.jsx("span",{className:"text-[--desc] text-blue-500 text-5xl",children:e.jsx(y,{})})});function fe(){return e.jsx(e.Fragment,{children:e.jsx(se,{children:e.jsxs(q,{children:[e.jsx(p,{path:"/",element:e.jsx(me,{})}),e.jsx(p,{path:"/orders",element:e.jsx(pe,{})}),e.jsx(p,{path:"/stats",element:e.jsx(ue,{})}),e.jsx(p,{path:"/store",element:e.jsx(he,{})}),e.jsx(p,{path:"/wallet",element:e.jsx(je,{})})]})})})}L.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(W,{basename:"/Dashboard_UI",children:e.jsx(fe,{})})}));export{G as u};