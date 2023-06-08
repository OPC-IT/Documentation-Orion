"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const a={title:"Deploy - Github Pages"},i="Github Pages",s={unversionedId:"docusaurus/github pages",id:"docusaurus/github pages",title:"Deploy - Github Pages",description:"In order to deploy the docusaurus reposiroty onto a Github Pages that is accessible by anyone on the internet, you will need to perform the following steps in order.",source:"@site/docs/4 - docusaurus/5 - github pages.md",sourceDirName:"4 - docusaurus",slug:"/docusaurus/github pages",permalink:"/Documentation-Orion/docusaurus/github pages",draft:!1,editUrl:"https://github.com/OPC-IT/Documentation-Orion/tree/main/docs/4 - docusaurus/5 - github pages.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Deploy - Github Pages"},sidebar:"tutorialSidebar",previous:{title:"Docs-only-mode",permalink:"/Documentation-Orion/docusaurus/doc_only_mode"}},u={},p=[],l={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-pages"},"Github Pages"),(0,r.kt)("p",null,"In order to deploy the docusaurus reposiroty onto a Github Pages that is accessible by anyone on the internet, you will need to perform the following steps in order."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Turn on Github Pages in setting")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2023.06.08 - 13_56_37 -  [Google Chrome-Pages] -",src:n(2814).Z,width:"950",height:"945"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Changing the field ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl"),"following in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"2023.06.08 - 13_59_03 -  [Code-\u2588 \u0e05^\u2022\ufecc\u2022^\u0e05 \u2588 \u2588 \u304b\u3099\u3093\u306f\u3099\u308c! \u2588] -",src:n(7350).Z,width:"1062",height:"574"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adding Github Workflow / Action"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'name: \n    Deploy to Github Pages\non:\n    push:\n        branches: ["main", "gh-pages"]\npermissions:\n    contents: read\n    pages: write\n    id-token: write\njobs:\n    deploy:\n        environment:\n            name: github-pages\n            url: ${{ steps.deployment.outputs.page_url }}\n        runs-on: ubuntu-latest\n        steps:\n            - name: Checkout\n              uses: actions/checkout@v3\n            # \ud83d\udc47 Build steps\n            - name: Set up Node.js\n              uses: actions/setup-node@v3\n              with:\n                  node-version: 18.x\n                  cache: npm\n            - name: Install dependencies\n              run: npm clean-install\n            - name: Build\n              run: npm run build\n            # \ud83d\udc46 Build steps\n            - name: Setup Pages\n              uses: actions/configure-pages@v1\n            - name: Upload artifact\n              uses: actions/upload-pages-artifact@v1\n              with:\n                  # \ud83d\udc47 Specify build output path\n                  path: build\n            - name: Deploy to GitHub Pages\n              id: deployment\n              uses: actions/deploy-pages@v1\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Trigger the GitHub Action we just created"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2023.06.08 - 14_01_08 -  [Google Chrome-Actions \xb7 SuoweiHuOPC-Orion-Documentation] -",src:n(6685).Z,width:"951",height:"595"})),(0,r.kt)("p",null,"Wait for the above compilation finish, and then you could proceed to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<organisation_name>.github.io/<project_name>")," to see your document live !"))}d.isMDXComponent=!0},2814:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023.06.08 - 13_56_37 -  [Google Chrome-Pages] --9ee70c8847e50051d65d5f9773aac715.jpg"},6685:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023.06.08 - 14_01_08 -  [Google Chrome-Actions \xb7 SuoweiHuOPC-Orion-Documentation] --815a675899d07e59d49a0746eb739630.jpg"},7350:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/3213213-38c3a619983d8d443cd0db068bc97b2a.jpg"}}]);