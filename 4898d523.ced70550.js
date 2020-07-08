(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(200)),c={title:"FastHttp Example",sidebar_label:"FastHttp"},i={id:"examples/go/fasthttp",isDocsHomePage:!1,title:"FastHttp Example",description:"Overview",source:"@site/docs/examples/go/fasthttp.md",permalink:"/kintohub/examples/go/fasthttp",sidebar_label:"FastHttp"},l=[{value:"Overview",id:"overview",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Usage",id:"usage",children:[{value:"Optional Environment Variables",id:"optional-environment-variables",children:[]},{value:"API Call",id:"api-call",children:[]},{value:"Response",id:"response",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"FastHttp is a HTTP server that is up to 10 times faster than net/http in Go. It can be built easily for microservice on KintoHub!"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://8caf94bb-c2e5-45cf-898d-ca5b19954cda.api.master.kintohub.com/fasthttp-example/hello/world"}),"Live Example")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply this template to your ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/fasthttp-example/generate"}),"Github")),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/kintoblocks/microservices"}),"Microservice Block")," on KintoHub"),Object(o.b)("li",{parentName:"ol"},"Connect your GithubApp to KintoHub and select the Repository you just generated on your account."),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"name")," of your kinto block"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Go")," as the ",Object(o.b)("strong",{parentName:"li"},"language")," and ",Object(o.b)("inlineCode",{parentName:"li"},"1.11.4")," as the ",Object(o.b)("strong",{parentName:"li"},"version")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Build Command")," as ",Object(o.b)("inlineCode",{parentName:"li"},"go build -o main .")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Start Command")," as ",Object(o.b)("inlineCode",{parentName:"li"},"./main")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Port")," as ",Object(o.b)("inlineCode",{parentName:"li"},"80"))),Object(o.b)("p",null,"You're now good to go! Click ",Object(o.b)("strong",{parentName:"p"},"Create Microservice"),". Now click ",Object(o.b)("strong",{parentName:"p"},"Build Latest Commit")),Object(o.b)("p",null,"Once complete, Click ",Object(o.b)("strong",{parentName:"p"},"Add to Project")),Object(o.b)("p",null,"Follow the instruction to create a new project. Once created, you should be able to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.kintohub.com/docs/features/operating/accessing-endpoints"}),"access your API endpoints"),"."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"optional-environment-variables"},"Optional Environment Variables"),Object(o.b)("p",null,"Default value  = ",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),", please refer to the ",Object(o.b)("inlineCode",{parentName:"p"},".env-example")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"GREETING=Hi\n")),Object(o.b)("h3",{id:"api-call"},"API Call"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -X GET http://<EnvironmentHostName>/<KintoBlockName>/hello/world\n")),Object(o.b)("p",null,"Please refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.kintohub.com/docs/features/operating/accessing-endpoints"}),"Accessing API Endpoints")," for the setup instruction"),Object(o.b)("p",null,"Try this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://8caf94bb-c2e5-45cf-898d-ca5b19954cda.api.master.kintohub.com/fasthttp-example/hello/world"}),"Live Example")," !"),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "Hello world"\n}\n')),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/projects/environments"}),"Creating multiple environments"))))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);