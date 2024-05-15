"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={id:"composed_matchers",title:"Composed Matchers",slug:"composed-matchers.html",sidebar_label:"Composed Matchers"},s=void 0,l={unversionedId:"assertions/composed_matchers",id:"version-5.9/assertions/composed_matchers",title:"Composed Matchers",description:"Composed matchers can be created for any type by composing one or more matchers. This allows to",source:"@site/versioned_docs/version-5.9/assertions/composed_matchers.md",sourceDirName:"assertions",slug:"/assertions/composed-matchers.html",permalink:"/docs/assertions/composed-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.9/assertions/composed_matchers.md",tags:[],version:"5.9",frontMatter:{id:"composed_matchers",title:"Composed Matchers",slug:"composed-matchers.html",sidebar_label:"Composed Matchers"},sidebar:"assertions",previous:{title:"Custom Matchers",permalink:"/docs/assertions/custom-matchers.html"},next:{title:"Exceptions",permalink:"/docs/assertions/exceptions.html"}},c={},i=[],p={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Composed matchers can be created for any type by composing one or more matchers. This allows to\nbuild up complex matchers from simpler ones. There are two logical operations, using which we can compose matchers:\nlogical sum (",(0,r.kt)("inlineCode",{parentName:"p"},"Matcher.any"),") and logical product (",(0,r.kt)("inlineCode",{parentName:"p"},"Matcher.all"),")."),(0,r.kt)("p",null,"Let's say we'd like to define a password ",(0,r.kt)("inlineCode",{parentName:"p"},"Matcher"),", which will ",(0,r.kt)("inlineCode",{parentName:"p"},"containADigit()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'contain(Regex("[a-z]"))')," and\n",(0,r.kt)("inlineCode",{parentName:"p"},'contain(Regex("[A-Z]"))'),". We can compose these matchers this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val passwordMatcher = Matcher.all(\n   containADigit(), contain(Regex("[a-z]")), contain(Regex("[A-Z]"))\n)\n')),(0,r.kt)("p",null,"We can add extension function then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun String.shouldBeStrongPassword() = this shouldBe passwordMatcher\n")),(0,r.kt)("p",null,"So it can be invoked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'"StrongPassword123".shouldBeStrongPassword()\n"WeakPassword".shouldBeStrongPassword() // would fail\n')),(0,r.kt)("p",null,"By analogy, we can build a composed matcher using ",(0,r.kt)("inlineCode",{parentName:"p"},"Matcher.any"),".\nIn this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"passwordMatcher")," will fail only if all matchers fail, otherwise it will pass."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val passwordMatcher = Matcher.any(\n   containADigit(), contain(Regex("[a-z]")), contain(Regex("[A-Z]"))\n)\n')),(0,r.kt)("p",null,"Composed matchers can also be created for any ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," by composing one or more other matchers along with\nthe property to extract to test against."),(0,r.kt)("p",null,"For example, say we had the following structures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Person(\n  val name: String,\n  val age: Int,\n  val address: Address,\n)\n\ndata class Address(\n  val city: String,\n  val street: String,\n  val buildingNumber: String,\n)\n")),(0,r.kt)("p",null,"And our goal is to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," matcher that checks for people in Warsaw. We can define matchers for each of those\ncomponents like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun nameMatcher(name: String) = Matcher<String> {\n  MatcherResult(\n    value == name,\n    { "Name $value should be $name" },\n    { "Name $value should not be $name" }\n  )\n}\n\nfun ageMatcher(age: Int) = Matcher<Int> {\n  MatcherResult(\n    value == age,\n    { "Age $value should be $age" },\n    { "Age $value should not be $age" }\n  )\n}\n\nval addressMatcher = Matcher<Address> {\n  MatcherResult(\n    value == Address("Warsaw", "Test", "1/1"),\n    { "Address $value should be Test 1/1 Warsaw" },\n    { "Address $value should not be Test 1/1 Warsaw" }\n  )\n}\n')),(0,r.kt)("p",null,"Now we can simply combine these together to make a ",(0,r.kt)("em",{parentName:"p"},"John in Warsaw matcher"),". Notice that we specify the property to\nextract to pass to each matcher in turn."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun personMatcher(name: String, age: Int) = Matcher.all(\n  havingProperty(nameMatcher(name) to Person::name),\n  havingProperty(ageMatcher(age) to Person::age),\n  havingProperty(addressMatcher to Person::address)\n)\n")),(0,r.kt)("p",null,"And we can add the extension variant too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Person.shouldBePerson(name: String, age: Int) = this shouldBe personMatcher(name, age)\n")),(0,r.kt)("p",null,"Then we invoke it this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'Person("John", 21, Address("Warsaw", "Test", "1/1")).shouldBePerson("John", 21)\nPerson("Sam", 22, Address("Chicago", "Test", "1/1")).shouldBePerson("John", 21) // would fail\n')))}m.isMDXComponent=!0}}]);