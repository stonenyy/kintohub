(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(200)),i={title:"Vue Example",sidebar_label:"Vue"},c={id:"examples/static-website/vue",isDocsHomePage:!1,title:"Vue Example",description:"Overview",source:"@site/docs/examples/static-website/vue.md",permalink:"/examples/static-website/vue",sidebar_label:"Vue"},l=[{value:"Overview",id:"overview",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Vue (pronounced /vju\u02d0/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://vue-example-1d0d2-8caf9.web.master.kintohub.com"}),"Live Example")),Object(a.b)("h2",{id:"deployment"},"Deployment"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Apply this template to your ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/vue-example/generate"}),"Github")),Object(a.b)("li",{parentName:"ol"},"Connect your GithubApp to KintoHub."),Object(a.b)("li",{parentName:"ol"},"Create a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/kintoblocks/websites"}),"Static Website from Build")," on KintoHub and select the Repository you just generated on your account."),Object(a.b)("li",{parentName:"ol"},"Set the ",Object(a.b)("strong",{parentName:"li"},"name")," of your kinto block"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Node.js")," as the ",Object(a.b)("strong",{parentName:"li"},"language")," and ",Object(a.b)("inlineCode",{parentName:"li"},"13.1-alpine")," as the ",Object(a.b)("strong",{parentName:"li"},"version")),Object(a.b)("li",{parentName:"ol"},"Set the ",Object(a.b)("strong",{parentName:"li"},"Build Command")," as ",Object(a.b)("inlineCode",{parentName:"li"},"npm install && npm run build")),Object(a.b)("li",{parentName:"ol"},"Set the ",Object(a.b)("strong",{parentName:"li"},"Build Folder")," as ",Object(a.b)("inlineCode",{parentName:"li"},"/dist"))),Object(a.b)("p",null,"You're now good to go! Click ",Object(a.b)("strong",{parentName:"p"},"Create Website")," and then on your Master branch click ",Object(a.b)("inlineCode",{parentName:"p"},"Build Latest Commit"),"."),Object(a.b)("p",null,"Once complete, Click  Now click ",Object(a.b)("inlineCode",{parentName:"p"},"Add To Project"),".\nAnd now you're ready to go live Click ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," and once done -> you can view your website by clicking ",Object(a.b)("inlineCode",{parentName:"p"},"Open")),Object(a.b)("p",null,"For a detailed explanation on how things work, check out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://vuejs-templates.github.io/webpack/"}),"guide")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://vuejs.github.io/vue-loader"}),"docs for vue-loader"),"."),Object(a.b)("h2",{id:"whats-next"},"What's Next?"),Object(a.b)("p",null,"You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/projects/environments"}),"Creating multiple environments"))),Object(a.b)("p",null,"Happy coding!"))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?o.a.createElement(d,c(c({ref:t},b),{},{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);