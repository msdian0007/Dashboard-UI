import{j as r}from"./react-DHBI0EtI.js";import{u as p}from"./index-Upp2BIJ_.js";import{t as o}from"./index-BjthYR4N.js";import"./classnames-C9FZUsQl.js";import"./react-dom-DvAqprxs.js";import"./scheduler-CzFDRTuY.js";import"./react-icons-DrVEPXwD.js";import"./antd-EIOPli7h.js";import"./rc-util-C_IKOujR.js";import"./@babel-nFbzLRrx.js";import"./@ant-design-DYbiGqra.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-DOFZgDuz.js";import"./rc-resize-observer-43YOlFZH.js";import"./rc-motion-CdxvAtL7.js";import"./rc-tooltip-D8OyY3y1.js";import"./@rc-component-B1fwFGqs.js";import"./rc-overflow-By3q3WiN.js";import"./rc-menu-D43zhOpz.js";import"./rc-select-BpSLrJFJ.js";import"./rc-virtual-list-DpTOiMKE.js";import"./rc-field-form-C1zy_LtQ.js";import"./rc-table-CfLN9-_6.js";import"./rc-tree-iADDq61d.js";import"./rc-checkbox-DMe14Veg.js";import"./rc-dropdown-BqNJmLnS.js";import"./rc-pagination-BDPleCrk.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-D42mlhnj.js";import"./rc-textarea-C25K72dI.js";import"./rc-picker-BKR3waf7.js";import"./react-router-dom-DiQ98RHp.js";import"./react-router-DHqhueuW.js";import"./@remix-run-Dj_uVd1O.js";const i=({info:t})=>{const{getProfitOrLoss:e,getTotalCount:s,getFormattedCurrency:m}=p();return r.jsxs("div",{className:"grid grid-cols-2 md:col-span-1 col-span-2 p-4 rounded-md dark:bg-[--bg] dark:text-[--title] sun w-full",children:[r.jsx("div",{className:"flex col-span-2",children:r.jsx("div",{className:`${t==null?void 0:t.css} p-2 text-3xl text-blue-500 rounded-md bg-blue-500/20`,children:t.icon})}),r.jsx("div",{className:"col-span-2 dark:text-[--desc] text-[12px] font-semibold mt-1  tracking-wide",children:t.title}),r.jsxs("div",{className:"flex justify-between col-span-2 mt-2",children:[r.jsx("span",{className:"flex items-end text-3xl font-bold",children:s(m(t==null?void 0:t.count),t==null?void 0:t.countInRupees)}),r.jsx("div",{className:"content-end text-[12px] font-semibold ",children:e(t==null?void 0:t.inProfit,t==null?void 0:t.profitPercentage)})]})]})},Q=()=>r.jsx("div",{className:"grid grid-cols-4 gap-4 ",children:o.map(t=>r.jsx(i,{info:t},t.id))});export{Q as default};