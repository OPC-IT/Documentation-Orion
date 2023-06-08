"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[193],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5973:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(4137));const a={sidebar_position:1,description:"This file contains the logic flow for a Drupal module, providing a detailed overview of how the module works and how it interacts with the Drupal platform. The logic flow diagram breaks down the module's functionality into a series of steps and illustrates how data flows between these steps."},i="Installation",s={unversionedId:"orion monitor/dashboard/overview",id:"orion monitor/dashboard/overview",title:"Installation",description:"This file contains the logic flow for a Drupal module, providing a detailed overview of how the module works and how it interacts with the Drupal platform. The logic flow diagram breaks down the module's functionality into a series of steps and illustrates how data flows between these steps.",source:"@site/docs/3 - orion monitor/2 - dashboard/1 - overview.md",sourceDirName:"3 - orion monitor/2 - dashboard",slug:"/orion monitor/dashboard/overview",permalink:"/Documentation-Orion/orion monitor/dashboard/overview",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/3 - orion monitor/2 - dashboard/1 - overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"This file contains the logic flow for a Drupal module, providing a detailed overview of how the module works and how it interacts with the Drupal platform. The logic flow diagram breaks down the module's functionality into a series of steps and illustrates how data flows between these steps."},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/Documentation-Orion/category/dashboard"},next:{title:"Explaination",permalink:"/Documentation-Orion/orion monitor/dashboard/explainations"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,'The "Orion Dashboard" page is a in nature a ',(0,r.kt)("strong",{parentName:"p"},"drupal custom module"),' build plug in, the logic flow of the module is denoted in the "',(0,r.kt)("a",{target:"_blank",href:o(9332).Z},"logic-flow diagram"),'" (link to the draw.io file: ',(0,r.kt)("a",{target:"_blank",href:o(4966).Z},"2023.06.06 ConnectWise-Module-Page.drawio"),")."),(0,r.kt)("p",null," In order to make the orion dashboard work, you will need to install two module: ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectWise Manage - Page"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectWise Manage - Api"),", one acting as the main entry point of user when they access the drupal page, and the other acting as the API to handle the backend logic, retriving the required data (for instance the company's name/contact/address when given id)"),(0,r.kt)("p",null,"You can enable the modules via the drupal admin: ",(0,r.kt)("inlineCode",{parentName:"p"},"site > administration > extend"),", make sure you run ",(0,r.kt)("inlineCode",{parentName:"p"},"site_url/update.php")," and clear the cache throughly before proceeding."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2023.06.08 - 10_51_26 -  [Google Chrome-Extend  OPC] -",src:o(5397).Z,width:"959",height:"578"})),(0,r.kt)("p",null,"Next you will need to setup the user with a required field ",(0,r.kt)("inlineCode",{parentName:"p"},"comapny_identifier")," , this field is required for each user as a identifier for the user's organisation, the dashboard will show accordingly depending on this unique field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2023.06.08 - 10_56_49 -  [Google Chrome-CW Module - Dashboard  OPC] -",src:o(2603).Z,width:"875",height:"819"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'See "Setting up Orion User" for instrudction of setting up user')),(0,r.kt)("p",null,"Then you may proceed to the URL to view the module taking effect"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2023.06.08 - 10_54_45 -  [Google Chrome-CW Module - Dashboard  OPC] -",src:o(9727).Z,width:"1317",height:"676"})))}u.isMDXComponent=!0},9332:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/image-20230608105209780-4ad0891ccc0e648e9e6d558b238efe55.png"},4966:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/2023.06.06 ConnectWise-Module-Page-f56cf9e5a93af313b6b1a9ed700dda85.drawio"},5397:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023.06.08 - 10_51_26 -  [Google Chrome-Extend  OPC] --bb62876b04db1af07d13c6589fbfbbc6.jpg"},9727:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023.06.08 - 10_54_45 -  [Google Chrome-CW Module - Dashboard  OPC] --0ce5e4a801e8641810c90d6195719efa.jpg"},2603:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2023.06.08 - 10_56_49 -  [Google Chrome-CW Module - Dashboard  OPC] --e95e44426d187b63d9a077731f40158d.jpg"}}]);