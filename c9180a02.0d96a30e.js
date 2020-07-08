(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(200)),i={title:"React Example",sidebar_label:"React"},c={id:"examples/static-website/react",isDocsHomePage:!1,title:"React Example",description:"Overview",source:"@site/docs/examples/static-website/react.md",permalink:"/kintohub/examples/static-website/react",sidebar_label:"React"},l=[{value:"Overview",id:"overview",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"React is a JavaScript ",Object(o.b)("strong",{parentName:"p"},"library")," for building user interfaces. It is the view layer for web applications."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-example-1d0d2-8caf9.web.master.kintohub.com/"}),"Live Example")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply this template to your ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/react-example/generate"}),"Github")),Object(o.b)("li",{parentName:"ol"},"Connect your GithubApp to KintoHub."),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/kintoblocks/websites"}),"Static Website from Build")," on KintoHub and select the Repository you just generated on your account."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"name")," of your kinto block"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Node.js")," as the ",Object(o.b)("strong",{parentName:"li"},"language")," and ",Object(o.b)("inlineCode",{parentName:"li"},"13.1-alpine")," as the ",Object(o.b)("strong",{parentName:"li"},"version")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Build Command")," as ",Object(o.b)("inlineCode",{parentName:"li"},"npm install && npm run build")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Build Folder")," as ",Object(o.b)("inlineCode",{parentName:"li"},"/build"))),Object(o.b)("p",null,"You're now good to go! Click ",Object(o.b)("strong",{parentName:"p"},"Create Website")," and then on your Master branch click ",Object(o.b)("inlineCode",{parentName:"p"},"Build Latest Commit"),"."),Object(o.b)("p",null,"Once complete, Click  Now click ",Object(o.b)("inlineCode",{parentName:"p"},"Add To Project"),".\nAnd now you're ready to go live Click ",Object(o.b)("inlineCode",{parentName:"p"},"Deploy")," and once done -> you can view your website by clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Open")),Object(o.b)("p",null,"For a detailed explanation on how things work, check out the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/"}),"guide"),"."),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/projects/environments"}),"Creating multiple environments"))),Object(o.b)("p",null,"Happy coding!"))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);