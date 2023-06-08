"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[162],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),_=o,d=u["".concat(p,".").concat(_)]||u[_]||m[_]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=_;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},4446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={sidebar_position:2,title:"API"},a=void 0,l={unversionedId:"orion monitor/dashboard/file_hierachy/file hierachy api",id:"orion monitor/dashboard/file_hierachy/file hierachy api",title:"API",description:"Module: ConnectWise-Manage-API",source:"@site/docs/3 - orion monitor/2 - dashboard/4 - file_hierachy/2 - file hierachy api.md",sourceDirName:"3 - orion monitor/2 - dashboard/4 - file_hierachy",slug:"/orion monitor/dashboard/file_hierachy/file hierachy api",permalink:"/Documentation-Orion/orion monitor/dashboard/file_hierachy/file hierachy api",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/3 - orion monitor/2 - dashboard/4 - file_hierachy/2 - file hierachy api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"API"},sidebar:"tutorialSidebar",previous:{title:"Page",permalink:"/Documentation-Orion/orion monitor/dashboard/file_hierachy/file hierachy page"},next:{title:"Api Reference",permalink:"/Documentation-Orion/category/api-reference"}},p={},c=[{value:"Module: ConnectWise-Manage-API",id:"module-connectwise-manage-api",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"module-connectwise-manage-api"},"Module: ConnectWise-Manage-API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-file",metastring:'title="\\public_html\\modules\\custom\\ConnectWise_Module_API"',title:'"\\public_html\\modules\\custom\\ConnectWise_Module_API"'},"*\n|______ConnectWise_Module_api.info.yml\n|\n|______ConnectWise_Module_api.routing.yml\n|\n|______\\src\n    |\n    |_______\\Controller\n                    |_______JsonApi_Company.php\n                    |_______JsonApi_RequestProxy.php\n                    |_______JsonApi_Tickets.php\n                    |_______JsonApi_TimeEntries_currentMonth.php\n                    |_______JsonApi_TimeEntries_withCalc.php\n                    |_______JsonApi_TimeEntries.php\n                    |_______JsonApi_getCompanyIdentifier_\n                                        \\fromUserField.php\n")),(0,o.kt)("p",null,"For the above file/directories"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\ ConnectWise_Module_API\xa0")," :",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Directory containing the custom module."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConnectWise_Module_api.info.yml"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'The file of which lets drupal know of this custom module, the drupal PHP will get the fields "machine name", "description", "package", "compatible drupal version"  from this file.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/develop/creating-modules/let-drupal-know-about-your-module-with-an-infoyml-file"},"More information.\xa0")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConnectWise_Module_api.routing.yml"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'The router of the drupal module, mapping a path like "/page/hello',"_",'world" to some callback of controller say "/Drupal/example/ControllerExample::page',"_","hello","_","world","_",'controller"; This file also defines the type of output (json/html), the permission, and library to load (e.g. javascript, CSS) for this page.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller"},"\xa0More information.\xa0")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\src\\Controller"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The handler / callback for the router, it is the processing logic of the page; This file takes the parameter from the router, adds a header and returns the page body."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/develop/creating-modules/create-a-custom-page-using-a-controller"},"\xa0More information.\xa0"))))))}m.isMDXComponent=!0}}]);