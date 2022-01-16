"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[821],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return t?a.createElement(f,d(d({ref:n},u),{},{components:t})):a.createElement(f,d({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,d=new Array(o);d[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var i=2;i<o;i++)d[i]=t[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},176:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var a=t(5773),r=t(808),o=(t(7378),t(5318)),d=["components"],l={},c="Date",i={unversionedId:"date",id:"date",title:"Date",description:"`randMonth`",source:"@site/docs/date.md",sourceDirName:".",slug:"/date",permalink:"/falso/docs/date",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/date.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"Database",permalink:"/falso/docs/database"},next:{title:"Entities",permalink:"/falso/docs/entities"}},u=[{value:"<code>randMonth</code>",id:"randmonth",children:[],level:3},{value:"<code>randBetweenDate</code>",id:"randbetweendate",children:[],level:3},{value:"<code>randFutureDate</code>",id:"randfuturedate",children:[],level:3},{value:"<code>randPastDate</code>",id:"randpastdate",children:[],level:3},{value:"<code>randRecentDate</code>",id:"randrecentdate",children:[],level:3},{value:"<code>randSoonDate</code>",id:"randsoondate",children:[],level:3},{value:"<code>randWeekday</code>",id:"randweekday",children:[],level:3}],p={toc:u};function s(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"date"},"Date"),(0,o.kt)("h3",{id:"randmonth"},(0,o.kt)("inlineCode",{parentName:"h3"},"randMonth")),(0,o.kt)("p",null,"Generate a random month."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randMonth } from '@ngneat/falso';\n\nmonth()\nmonth({ length: 10 })\n")),(0,o.kt)("h3",{id:"randbetweendate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randBetweenDate")),(0,o.kt)("p",null,"Generate a random date between ranges."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBetweenDate } from '@ngneat/falso';\n\nrandBetweenDate()\nrandBetweenDate({ from: Date, to: Date })\nrandBetweenDate({ length: 10 })\n")),(0,o.kt)("h3",{id:"randfuturedate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randFutureDate")),(0,o.kt)("p",null,"Generate a random future."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFutureDate } from '@ngneat/falso';\n\nrandFutureDate()\nrandFutureDate({ length: 10 })\nrandFutureDate({ years: 10 })\n")),(0,o.kt)("h3",{id:"randpastdate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randPastDate")),(0,o.kt)("p",null,"Generate a random past date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPastDate } from '@ngneat/falso';\n\nrandPastDate()\nrandPastDate({ years: 2 })\nrandPastDate({ length: 10 })\n")),(0,o.kt)("h3",{id:"randrecentdate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randRecentDate")),(0,o.kt)("p",null,"Generate a random recent date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randRecentDate } from '@ngneat/falso';\n\nrandRecentDate()\nrandRecentDate({ days: 10 })\nrandRecentDate({ length: 10 })\n")),(0,o.kt)("h3",{id:"randsoondate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSoonDate")),(0,o.kt)("p",null,"Generate a random soon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSoonDate } from '@ngneat/falso';\n\nrandSoonDate()\nrandSoonDate({ days: 5 })\nrandSoonDate({ length: 10 })\n")),(0,o.kt)("h3",{id:"randweekday"},(0,o.kt)("inlineCode",{parentName:"h3"},"randWeekday")),(0,o.kt)("p",null,"Generate a random weekday."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randWeekday } from '@ngneat/falso';\n\nrandWeekday()\nrandWeekday({ length: 10 })\n")))}s.isMDXComponent=!0}}]);