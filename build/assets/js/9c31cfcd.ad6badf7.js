"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[195],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const o={sidebar_order:2,title:"File Hierarchy"},a=void 0,s={unversionedId:"docusaurus/file_hierachy",id:"docusaurus/file_hierachy",title:"File Hierarchy",description:"File Hierarchy",source:"@site/docs/4 - docusaurus/2 - file_hierachy.md",sourceDirName:"4 - docusaurus",slug:"/docusaurus/file_hierachy",permalink:"/Documentation-Orion/docusaurus/file_hierachy",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/4 - docusaurus/2 - file_hierachy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_order:2,title:"File Hierarchy"},sidebar:"tutorialSidebar",previous:{title:"Basic Commands",permalink:"/Documentation-Orion/docusaurus/npm_command"},next:{title:"Global CSS Style",permalink:"/Documentation-Orion/docusaurus/global_css"}},l={},c=[{value:"File Hierarchy",id:"file-hierarchy",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"file-hierarchy"},"File Hierarchy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1_file_name.md\n\u2502   \u251c\u2500\u2500 doc2_file_name.md\n\u2502   \u251c\u2500\u2500 doc3_file_name.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/blog/"),"\xa0- Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\xa0option. More details can be found in the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/blog"},"blog guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/docs/"),"\xa0- Contains the Markdown files for the docs. Customize the order of the docs sidebar in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"sidebars.js"),". You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\xa0option. More details can be found in the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"docs guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/"),"\xa0- Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/src/pages"),"\xa0- Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/creating-pages"},"pages guide")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/static/"),"\xa0- Static directory. Any contents inside here will be copied into the root of the final\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"build"),"\xa0directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js"),"\xa0- A config file containing the site configuration. This is the equivalent of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"siteConfig.js"),"\xa0in Docusaurus v1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/package.json"),"\xa0- A Docusaurus website is a React app. You can install and use any npm packages you like in them"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/sidebars.js"),"\xa0- Used by the documentation to specify the order of documents in the sidebar")))}p.isMDXComponent=!0}}]);