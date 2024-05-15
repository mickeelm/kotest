"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[50388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={id:"test_containers",title:"Testcontainers",sidebar_label:"Testcontainers",slug:"test_containers.html"},s=void 0,r={unversionedId:"extensions/test_containers",id:"extensions/test_containers",title:"Testcontainers",description:"Testcontainers",source:"@site/docs/extensions/test_containers.md",sourceDirName:"extensions",slug:"/extensions/test_containers.html",permalink:"/docs/next/extensions/test_containers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/test_containers.md",tags:[],version:"current",frontMatter:{id:"test_containers",title:"Testcontainers",sidebar_label:"Testcontainers",slug:"test_containers.html"},sidebar:"extensions",previous:{title:"System Extensions",permalink:"/docs/next/extensions/system_extensions.html"},next:{title:"Kafka",permalink:"/docs/next/extensions/embedded-kafka.html"}},l={},c=[{value:"Testcontainers",id:"testcontainers",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Databases",id:"databases",level:3},{value:"Initializing the Database Container",id:"initializing-the-database-container",level:4},{value:"General Containers",id:"general-containers",level:3},{value:"Kafka Containers",id:"kafka-containers",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"Startables",id:"startables",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testcontainers"},"Testcontainers"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is for the latest release of the Testcontainers module and is compatible with Kotest 5.0+.\nFor earlier versions see docs ",(0,o.kt)("a",{parentName:"p",href:"https://kotest.io/docs/extensions/test_containers_46.html"},"here"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java"},"Testcontainers")," project provides lightweight, ephemeral instances of common databases,\nelasticsearch, kafka, Selenium web browsers, or anything else that can run in a Docker container - ideal for use inside tests."),(0,o.kt)("p",null,"Kotest provides integration with Testcontainers through an additional module which provides several extensions - specialized extensions for\ndatabases and kafka and general containers support for any supported docker image."),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"To begin, add the following dependency to your Gradle build file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"io.kotest.extensions:kotest-extensions-testcontainers:${kotest.version}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-testcontainers"},(0,o.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-testcontainers.svg?label=latest%20release"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-testcontainers/"},(0,o.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-testcontainers.svg?label=latest%20snapshot"}))),(0,o.kt)("p",null,"Note: The group id is different (",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions"),") from the main kotest dependencies (",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest"),")."),(0,o.kt)("p",null,"For Maven, you will need these dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.kotest.extensions</groupId>\n    <artifactId>kotest-extensions-testcontainers</artifactId>\n    <version>${kotest.version}</version>\n    <scope>test</scope>\n</dependency>\n")),(0,o.kt)("h3",{id:"databases"},"Databases"),(0,o.kt)("p",null,"For JDBC compatible databases, Kotest provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"JdbcTestContainerExtension"),". This provides a pooled ",(0,o.kt)("inlineCode",{parentName:"p"},"javax.sql.DataSource"),", backed by\nan instance of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},"HikariCP"),", which can be configured during setup."),(0,o.kt)("p",null,"Firstly, create the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mysql = MySQLContainer<Nothing>("mysql:8.0.26").apply {\n  startupAttempts = 1\n  withUrlParam("connectionTimeZone", "Z")\n  withUrlParam("zeroDateTimeBehavior", "convertToNull")\n}\n')),(0,o.kt)("p",null,"Secondly, install the container inside an extension wrapper, providing an optional configuration lambda."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ds = install(JdbcDatabaseContainerExtension(mysql)) {\n  poolName = "myconnectionpool"\n  maximumPoolSize = 8\n  idleTimeout = 10000\n}\n')),(0,o.kt)("p",null,"If you don't wish to configure the pool, then you can omit the trailing lambda."),(0,o.kt)("p",null,"Then the datasource can be used in a test. For example, here is a full example of inserting some\nobjects and then retrieving them to test that the insert was successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class QueryDatastoreTest : FunSpec({\n\n  val mysql = MySQLContainer<Nothing>("mysql:8.0.26").apply {\n    startupAttempts = 1\n    withUrlParam("connectionTimeZone", "Z")\n    withUrlParam("zeroDateTimeBehavior", "convertToNull")\n  }\n\n  val ds = install(JdbcDatabaseContainerExtension(mysql)) {\n    poolName = "myconnectionpool"\n    maximumPoolSize = 8\n    idleTimeout = 10000\n  }\n\n  val datastore = PersonDatastore(ds)\n\n  test("insert happy path") {\n\n    datastore.insert(Person("sam", "Chicago"))\n    datastore.insert(Person("jim", "Seattle"))\n\n    datastore.findAll().shouldBe(listOf(\n      Person("sam", "Chicago"),\n      Person("jim", "Seattle"),\n    ))\n  }\n})\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This extension also supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLifecycleMode")," flag to control when the container is started and stopped.\nSee #lifecycle")),(0,o.kt)("h4",{id:"initializing-the-database-container"},"Initializing the Database Container"),(0,o.kt)("p",null,"There are two ways to initialize the database container: via a ",(0,o.kt)("em",{parentName:"p"},"single")," init script added to the TestContainer config,\nor via a list of scripts added to the JdbcTestContainerExtension config lambda."),(0,o.kt)("p",null,"If adding a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"single"))," script, via the TestContainer config, simply add the script to the TestContainer's ",(0,o.kt)("inlineCode",{parentName:"p"},"withInitScript")," config option, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mysql = MySQLContainer<Nothing>("mysql:8.0.26").apply {\n         withInitScript("init.sql")\n         startupAttempts = 1\n         withUrlParam("connectionTimeZone", "Z")\n         withUrlParam("zeroDateTimeBehavior", "convertToNull")\n      }\n')),(0,o.kt)("p",null,"If you have multiple init scripts or sets of changesets, you can add them as a list to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbInitScripts")," extension config lambda, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ds: DataSource = install(JdbcDatabaseContainerExtension(mysql)) {\n      maximumPoolSize = 8\n      minimumIdle = 4\n      dbInitScripts = listOf("/init.sql", "/sql-changesets")\n   }\n')),(0,o.kt)("p",null,"The list can contain absolute or relative paths, for files and folders on the filesystem or on the classpath."),(0,o.kt)("p",null,"The extension will process the list provided in order. If the list item is a folder, it will process all ",(0,o.kt)("inlineCode",{parentName:"p"},".sql")," scripts in the folder,\nsorted lexicographically. These scripts run every time the container is started, so it supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLifecycleMode")," flag."),(0,o.kt)("h3",{id:"general-containers"},"General Containers"),(0,o.kt)("p",null,"Similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"JdbcDatabaseContainerExtension"),", this module also provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerExtension")," extension which can\nwrap any container, not just databases."),(0,o.kt)("p",null,"We can create the extension using either a docker image name, or a strongly typed container."),(0,o.kt)("p",null,"For example, using a docker image directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val container = install(ContainerExtension("redis:5.0.3-alpine")) {\n  startupAttempts = 1\n  withExposedPorts(6379)\n}\n')),(0,o.kt)("p",null,"And then using a strongly typed container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val elasticsearch = install(ContainerExtension(ElasticsearchContainer(ELASTICSEARCH_IMAGE) )) {\n  withPassword(ELASTICSEARCH_PASSWORD)\n}\n")),(0,o.kt)("p",null,"The strongly typed container is preferred when one is provided by the Testcontainers project, because it gives us\naccess to specific settings - such as the password option in the elasticsearch example above."),(0,o.kt)("p",null,"However, when a strongly typed container is not available, the former method allows us to spool up any docker image\nas a general container."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This extension also supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLifecycleMode")," flag to control when the container is started and stopped.\nSee #lifecycle")),(0,o.kt)("h3",{id:"kafka-containers"},"Kafka Containers"),(0,o.kt)("p",null,"For Kafka, this module provides convenient extension methods to create a consumer, producer or admin client from the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val kafka = install(ContainerExtension(KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:6.2.1")))) {\n  withEmbeddedZookeeper()\n}\n')),(0,o.kt)("p",null,"Inside the configuration lambda, we can specify options for the Kafka container, such as embedded/external zookeeper,\nor kafka broker properties through env vars. For example, to enable dynamic topic creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val kafka = install(ContainerExtension(KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:6.2.1")))) {\n  withEnv("KAFKA_AUTO_CREATE_TOPICS_ENABLE", "true")\n}\n')),(0,o.kt)("admonition",{title:"Note for Apple Silicon/ARM Users",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Kafka only publishes a ",(0,o.kt)("inlineCode",{parentName:"p"},"linux/amd64")," version of the container. If you're on an Apple Silicon/ARM architecture computer,\nyou'll need to explicitly specify the platform with the following added to the configuration lambda outlined above:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'withCreateContainerCmdModifier { it.withPlatform("linux/amd64") }\n'))),(0,o.kt)("p",null,"Once we have the container installed, we can create a client using the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"container.createProducer()"),(0,o.kt)("li",{parentName:"ul"},"container.createStringStringProducer()"),(0,o.kt)("li",{parentName:"ul"},"container.createConsumer()"),(0,o.kt)("li",{parentName:"ul"},"container.createStringStringConsumer()"),(0,o.kt)("li",{parentName:"ul"},"container.createAdminClient()")),(0,o.kt)("p",null,"Each of these accepts an optional configuration lambda to enable setting values on the properties object that is\nused to create the clients."),(0,o.kt)("p",null,"For example, in this test, we produce and consume a message from the same topic, and we use the configuration\nlambda to set max poll to 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KafkaTestContainerExtensionTest : FunSpec() {\n  init {\n\n    val kafka = install(ContainerExtension(KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:6.2.1")))) {\n      withEmbeddedZookeeper()\n    }\n\n    test("should send/receive message") {\n\n      val producer = kafka.createStringStringProducer()\n      producer.send(ProducerRecord("foo", null, "bubble bobble"))\n      producer.close()\n\n      val consumer = kafka.createStringStringConsumer {\n        this[ConsumerConfig.MAX_POLL_RECORDS_CONFIG] = 1\n      }\n\n      consumer.subscribe(listOf("foo"))\n      val records = consumer.poll(Duration.ofSeconds(100))\n      records.shouldHaveSize(1)\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When creating a consumer, the consumer group is set to a random uuid. To change this, provide\na configuration lambda and specify your own group consumer group id.")),(0,o.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("p",null,"By default, the lifecycle of a container is per spec - so it will be started at the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command, and shutdown as\nthe spec is completed. This can be changed to start/stop per test, per leaf test, or per root test."),(0,o.kt)("p",null,"To do this, pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLifecycleMode")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerExtension")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"JdbcDatabaseContainerExtension"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ds = install(JdbcDatabaseContainerExtension(mysql, ContainerLifecycleMode.Spec)) {\n  poolName = "myconnectionpool"\n  maximumPoolSize = 8\n  idleTimeout = 10000\n}\n')),(0,o.kt)("h3",{id:"startables"},"Startables"),(0,o.kt)("p",null,"This module also provides extension methodsscope which let you convert\nany ",(0,o.kt)("inlineCode",{parentName:"p"},"Startable")," such as a ",(0,o.kt)("inlineCode",{parentName:"p"},"DockerContainer")," into a kotest ",(0,o.kt)("inlineCode",{parentName:"p"},"TestListener"),", which you can register with Kotest\nand then Kotest will manage the lifecycle of that container for you."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.kotest.core.spec.style.FunSpec\nimport io.kotest.extensions.testcontainers.perTest\nimport org.testcontainers.containers.GenericContainer\n\nclass DatabaseRepositoryTest : FunSpec({\n   val redisContainer = GenericContainer<Nothing>("redis:5.0.3-alpine")\n   listener(redisContainer.perTest()) //converts container to listener and registering it with Kotest.\n\n   test("some test which assume to have redis container running") {\n      //\n   }\n})\n')),(0,o.kt)("p",null,"In above example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"perTest()")," extension method converts the container into a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestListener"),", which starts the\nredis container before each test and stops it after test. Similarly if you want to reuse the container for all tests\nin a single spec class you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"perSpec()")," extension method, which converts the container into a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestListener"),"\nwhich starts the container before running any test in the spec, and stops it after all tests, thus a single container is\nused by all tests in spec class."))}d.isMDXComponent=!0}}]);