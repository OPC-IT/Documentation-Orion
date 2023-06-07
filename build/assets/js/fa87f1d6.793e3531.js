"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[578],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:2,title:"Local Environment"},i=void 0,p={unversionedId:"introduction/ahoy_pygmy",id:"introduction/ahoy_pygmy",title:"Local Environment",description:"pygmy / ahoy",source:"@site/docs/introduction/ahoy_pygmy.md",sourceDirName:"introduction",slug:"/introduction/ahoy_pygmy",permalink:"/introduction/ahoy_pygmy",draft:!1,editUrl:"https://github.com/SuoweiHu/OPC-Orion-Documentation/tree/main/docs/introduction/ahoy_pygmy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Local Environment"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Package Manager",permalink:"/introduction/composer"}},c={},l=[{value:"pygmy / ahoy",id:"pygmy--ahoy",level:2},{value:"drush import-config",id:"drush-import-config",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pygmy--ahoy"},"pygmy / ahoy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Checkout this project repo and confirm the path is in Docker's file sharing config - ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/#file-sharing"},"https://docs.docker.com/docker-for-mac/#file-sharing"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you don't have anything running on port 80 on the host machine (like a web server) then run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"pygmy up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build and start the build images:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"ahoy up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the new site @ ",(0,o.kt)("inlineCode",{parentName:"p"},"http://opc.docker.amazee.io")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If any steps fail, you're safe to rerun from any point.\nStarting again from the beginning will just reconfirm the changes.")),(0,o.kt)("h2",{id:"drush-import-config"},"drush import-config"),(0,o.kt)("p",null,"To import the site config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"ahoy cim\nahoy drush cr\n")))}u.isMDXComponent=!0}}]);