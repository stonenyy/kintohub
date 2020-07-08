(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(200)),i={title:"Basic Static HTML Example",sidebar_label:"Static HTML Website"},c={id:"examples/static-website/static",isDocsHomePage:!1,title:"Basic Static HTML Example",description:"Overview",source:"@site/docs/examples/static-website/static.md",permalink:"/examples/static-website/static",sidebar_label:"Static HTML Website"},l=[{value:"Overview",id:"overview",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"A simplest possible static html example with all styles and markup embedded in a single file."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://static-website-example-1d0d2-8caf9.web.master.kintohub.com/"}),"Live Example")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply this template to your ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/static-website-example/generate"}),"Github")),Object(o.b)("li",{parentName:"ol"},"Connect your GithubApp to KintoHub."),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/kintoblocks/websites"}),"Static Website")," on KintoHub and select the Repository you just generated on your account."),Object(o.b)("li",{parentName:"ol"},"Set source ",Object(o.b)("strong",{parentName:"li"},"Source Folder Path")," to ",Object(o.b)("inlineCode",{parentName:"li"},"/public")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"name")," of your kinto block")),Object(o.b)("p",null,"You're now good to go! Click ",Object(o.b)("strong",{parentName:"p"},"Create Website")," and then on your Master branch click ",Object(o.b)("inlineCode",{parentName:"p"},"Build Latest Commit"),"."),Object(o.b)("p",null,"Once complete, Click  Now click ",Object(o.b)("inlineCode",{parentName:"p"},"Add To Project"),".\nAnd now you're ready to go live Click ",Object(o.b)("inlineCode",{parentName:"p"},"Deploy")," and once done -> you can view your website by clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Open")),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/projects/environments"}),"Creating multiple environments"))),Object(o.b)("p",null,"Happy coding!"))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);