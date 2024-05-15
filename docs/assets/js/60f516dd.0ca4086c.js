"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"exceptions",title:"Exceptions",slug:"exceptions.html"},s=void 0,i={unversionedId:"assertions/exceptions",id:"version-5.8/assertions/exceptions",title:"Exceptions",description:"To assert that a given block of code throws an exception, one can use the shouldThrow function. Eg,",source:"@site/versioned_docs/version-5.8/assertions/exceptions.md",sourceDirName:"assertions",slug:"/assertions/exceptions.html",permalink:"/docs/5.8/assertions/exceptions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/assertions/exceptions.md",tags:[],version:"5.8",frontMatter:{id:"exceptions",title:"Exceptions",slug:"exceptions.html"},sidebar:"assertions",previous:{title:"Composed Matchers",permalink:"/docs/5.8/assertions/composed-matchers.html"},next:{title:"Clues",permalink:"/docs/5.8/assertions/clues.html"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To assert that a given block of code throws an exception, one can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldThrow")," function. Eg,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\n")),(0,r.kt)("p",null,"You can also check the caught exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val exception = shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\nexception.message should startWith("Something went wrong")\n')),(0,r.kt)("p",null,"If you want to test that a specific type of exception is thrown, then use ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldThrowExactly<E>"),". For example, the\nfollowing block would catch a ",(0,r.kt)("inlineCode",{parentName:"p"},"FileNotFoundException")," but not a ",(0,r.kt)("inlineCode",{parentName:"p"},"IOException")," even though ",(0,r.kt)("inlineCode",{parentName:"p"},"FileNotFoundException"),"\nextends from ",(0,r.kt)("inlineCode",{parentName:"p"},"IOException"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val exception = shouldThrowExactly<FileNotFoundException> {\n  // test here\n}\n")),(0,r.kt)("p",null,"If you simply want to test that ",(0,r.kt)("em",{parentName:"p"},"any")," exception is thrown, regardles of type, then use ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldThrowAny"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val exception = shouldThrowAny {\n  // test here can throw any type of Throwable!\n}\n")))}u.isMDXComponent=!0}}]);