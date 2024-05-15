"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[16045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||s;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={id:"framework_config_props",title:"Framework configuration properties",sidebar_label:"System properties",slug:"framework-config-props.html"},a=void 0,i={unversionedId:"framework/framework_config_props",id:"framework/framework_config_props",title:"Framework configuration properties",description:"---",source:"@site/docs/framework/config_props.md",sourceDirName:"framework",slug:"/framework/framework-config-props.html",permalink:"/docs/next/framework/framework-config-props.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/config_props.md",tags:[],version:"current",frontMatter:{id:"framework_config_props",title:"Framework configuration properties",sidebar_label:"System properties",slug:"framework-config-props.html"},sidebar:"framework",previous:{title:"Project Level Config",permalink:"/docs/next/framework/project-config.html"},next:{title:"Test Factories",permalink:"/docs/next/framework/test-factories.html"}},l={},c=[{value:"KotestEngineProperties.kt",id:"kotestenginepropertieskt",level:4}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"kotestenginepropertieskt"},"KotestEngineProperties.kt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'package io.kotest.core.internal\n\nobject KotestEngineProperties {\n\n   const val scriptsEnabled = "kotest.framework.scripts.enabled"\n\n   const val dumpConfig = "kotest.framework.dump.config"\n\n   /**\n    * Sets the tag expression that determines included/excluded tags.\n    */\n   const val tagExpression = "kotest.tags"\n\n   const val excludeTags = "kotest.tags.exclude"\n\n   const val includeTags = "kotest.tags.include"\n\n   /**\n    * A regex expression that is used to match the test [io.kotest.core.descriptors.Descriptor]\'s path\n    * to determine if a test should be included in the test plan or not.\n    */\n   const val filterTests = "kotest.filter.tests"\n\n   /**\n    * A regex expression that is used to match the [io.kotest.mpp.bestName] of a class\n    * to determine if a spec should be included in the test plan or not.\n    */\n   const val filterSpecs = "kotest.filter.specs"\n\n   const val propertiesFilename = "kotest.properties.filename"\n\n   /**\n    * If set to true, then source ref\'s will not be created for test cases.\n    * This may speed up builds (as the engine will not need to create stack traces to\n    * generate line numbers) but will also reduce functionality in the intellij plugin\n    * (by limiting the ability to drill directly into the test inside a file).\n    */\n   const val disableSourceRef = "kotest.framework.sourceref.disable"\n\n   /**\n    * If set to true, disables the use of \'!\' as a prefix to disable tests.\n    */\n   const val disableBangPrefix = "kotest.bang.disable"\n\n   /**\n    * The default [io.kotest.core.spec.IsolationMode] for specs.\n    */\n   const val isolationMode = "kotest.framework.isolation.mode"\n\n   /**\n    * The default [io.kotest.core.test.AssertionMode] for tests.\n    */\n   const val assertionMode = "kotest.framework.assertion.mode"\n\n   /**\n    * The default parallelism for specs.\n    */\n   const val parallelism = "kotest.framework.parallelism"\n\n   /**\n    * The default timeout for test cases.\n    */\n   const val timeout = "kotest.framework.timeout"\n\n   /**\n    * The default timeout for the entire test suite.\n    */\n   const val projectTimeout = "kotest.framework.projecttimeout"\n\n   const val logLevel = "kotest.framework.loglevel"\n\n   /**\n    * The default timeout for each invocation of a test case.\n    */\n   const val invocationTimeout = "kotest.framework.invocation.timeout"\n\n   const val disableTestNestedJarScanning = "kotest.framework.disable.test.nested.jar.scanning"\n\n   const val concurrentSpecs = "kotest.framework.spec.concurrent"\n\n   const val concurrentTests = "kotest.framework.test.concurrent"\n\n   /**\n    * Disable scanning the classpath for configuration classes by setting this property to true\n    */\n   const val disableConfigurationClassPathScanning = "kotest.framework.classpath.scanning.config.disable"\n\n   /**\n    * Specify a fully qualified name to use for project config.\n    * This class will be instantiated via reflection.\n    */\n   const val configurationClassName = "kotest.framework.config.fqn"\n\n   /**\n    * Disable scanning the classpath for listeners with @AutoScan by setting this property to true\n    */\n   const val disableAutoScanClassPathScanning = "kotest.framework.classpath.scanning.autoscan.disable"\n\n   const val allowMultilineTestName = "kotest.framework.testname.multiline"\n\n   /**\n    *  If set -> filter testCases by this severity level and higher, else running all\n    */\n   const val testSeverity = "kotest.framework.test.severity"\n\n   /**\n    * Enable assert softly globally.\n    * */\n   const val globalAssertSoftly = "kotest.framework.assertion.globalassertsoftly"\n\n   /**\n    * Appends all tags associated with a test case to its display name.\n    * */\n   const val testNameAppendTags = "kotest.framework.testname.append.tags"\n\n   /**\n    * Controls whether classes will inherit tags from their supertypes. Default false\n    */\n   const val tagInheritance = "kotest.framework.tag.inheritance"\n\n   /**\n    * Controls the [io.kotest.core.names.DuplicateTestNameMode] mode.\n    */\n   const val duplicateTestNameMode = "kotest.framework.testname.duplicate.mode"\n\n   const val disableJarDiscovery = "kotest.framework.discovery.jar.scan.disable"\n}\n')))}f.isMDXComponent=!0}}]);