"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[416],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const i={sidebar_position:1,slug:"/",title:"Site Overview"},a="OPC Website",l={unversionedId:"introduction/intro",id:"introduction/intro",title:"Site Overview",description:"This template includes everything necessary to run on Lagoon (in both the local development environments or on hosted Lagoon clusters.) This project manages website dependencies with Composer. It is based on the original Drupal Composer Template,",source:"@site/docs/introduction/intro.md",sourceDirName:"introduction",slug:"/",permalink:"/Documentation-Orion/",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/introduction/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Site Overview"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Documentation-Orion/category/introduction"},next:{title:"Local Environment",permalink:"/Documentation-Orion/introduction/ahoy_pygmy"}},s={},p=[{value:"Included Services",id:"included-services",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Updating Drupal Core",id:"updating-drupal-core",level:2},{value:"FAQ",id:"faq",level:2},{value:"What are the &quot;TESTING&quot; files in this repo?",id:"what-are-the-testing-files-in-this-repo",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opc-website"},"OPC Website"),(0,o.kt)("p",null,"This template includes everything necessary to run on ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com/uselagoon/lagoon"},"Lagoon")," (in both the local development environments or on hosted Lagoon clusters.) This project manages website dependencies with ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org/"},"Composer"),". It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drupal-composer/drupal-project"},"original Drupal Composer Template"),","),(0,o.kt)("h2",{id:"included-services"},"Included Services"),(0,o.kt)("p",null,"This project contains the following services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drupal 10 (prerelease versions)"),(0,o.kt)("li",{parentName:"ul"},"PHP 8.1"),(0,o.kt)("li",{parentName:"ul"},"NGINX"),(0,o.kt)("li",{parentName:"ul"},"MariaDB 10.6")),(0,o.kt)("p",null,"To find out more about the services, please visit the documentation at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.lagoon.sh/lagoon"},"https://docs.lagoon.sh/lagoon")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/pygmystack/pygmy"},"pygmy"))),(0,o.kt)("h2",{id:"updating-drupal-core"},"Updating Drupal Core"),(0,o.kt)("p",null,"Follow the steps below to update your core files. Scaffolding is managed by Drupal core. See the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/")," directory for more information."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"composer update drupal/core-recommended drupal/core-dev-pinned --with-dependencies"))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-are-the-testing-files-in-this-repo"},'What are the "TESTING" files in this repo?'),(0,o.kt)("p",null,"These files are used by Github actions to run a basic suite of tests specific to this template.  They utilise the excellent ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lando/leia"},"Leia")," tool to generate a set of mocha-compatible tests. These tests can also be generated and run locally."))}d.isMDXComponent=!0}}]);