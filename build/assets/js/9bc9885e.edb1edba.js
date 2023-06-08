"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[136],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:2,title:"Package Manager"},i=void 0,l={unversionedId:"introduction/package management",id:"introduction/package management",title:"Package Manager",description:"What composer handles?",source:"@site/docs/introduction/3 - package management.md",sourceDirName:"introduction",slug:"/introduction/package management",permalink:"/Documentation-Orion/introduction/package management",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/introduction/3 - package management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Package Manager"},sidebar:"tutorialSidebar",previous:{title:"Local Environment",permalink:"/Documentation-Orion/introduction/ahoy_pygmy"},next:{title:"Content Management",permalink:"/Documentation-Orion/category/content-management"}},p={},c=[{value:"What composer handles?",id:"what-composer-handles",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-composer-handles"},"What composer handles?"),(0,a.kt)("p",null,"When installing the given ",(0,a.kt)("inlineCode",{parentName:"p"},"composer.json")," some tasks are taken care of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drupal will be installed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"web"),"-directory."),(0,a.kt)("li",{parentName:"ul"},"Autoloader is implemented to use the generated composer autoloader in ",(0,a.kt)("inlineCode",{parentName:"li"},"vendor/autoload.php"),",\ninstead of the one provided by Drupal (",(0,a.kt)("inlineCode",{parentName:"li"},"web/vendor/autoload.php"),")."),(0,a.kt)("li",{parentName:"ul"},"Modules (packages of type ",(0,a.kt)("inlineCode",{parentName:"li"},"drupal-module"),") will be placed in ",(0,a.kt)("inlineCode",{parentName:"li"},"web/modules/contrib/")),(0,a.kt)("li",{parentName:"ul"},"Themes (packages of type ",(0,a.kt)("inlineCode",{parentName:"li"},"drupal-theme"),") will be placed in ",(0,a.kt)("inlineCode",{parentName:"li"},"web/themes/contrib/")),(0,a.kt)("li",{parentName:"ul"},"Profiles (packages of type ",(0,a.kt)("inlineCode",{parentName:"li"},"drupal-profile"),") will be placed in ",(0,a.kt)("inlineCode",{parentName:"li"},"web/profiles/contrib/")),(0,a.kt)("li",{parentName:"ul"},"Creates the ",(0,a.kt)("inlineCode",{parentName:"li"},"web/sites/default/files"),"-directory."),(0,a.kt)("li",{parentName:"ul"},"Latest version of ",(0,a.kt)("a",{parentName:"li",href:"https://www.drush.org/latest/"},"Drush")," is installed locally for use at ",(0,a.kt)("inlineCode",{parentName:"li"},"vendor/bin/drush"),"."),(0,a.kt)("li",{parentName:"ul"},"Latest version of ",(0,a.kt)("a",{parentName:"li",href:"http://www.drupalconsole.com"},"Drupal Console")," is installed locally for use at ",(0,a.kt)("inlineCode",{parentName:"li"},"vendor/bin/drupal"),"."),(0,a.kt)("li",{parentName:"ul"},"The correct scaffolding for your Drupal core version is installed, along with Lagoon-specific scaffolding from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/amazeeio/drupal-integrations"},"amazeeio/drupal-integrations")," project and the ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/")," directory in this repo.  For more information see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/drupal/core-composer-scaffold"},"drupal/core-composer-scaffold"))))}u.isMDXComponent=!0}}]);