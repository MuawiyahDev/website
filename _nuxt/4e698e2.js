(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,6,10],{385:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},387:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},390:function(t,e,n){"use strict";var r=n(385),o=n.n(r);e.default=o.a},391:function(t,e,n){"use strict";n.r(e);var r={props:{error:{type:Object,default:function(){}}}},o=n(20),c=n(390),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$props.error?n("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[n("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),n("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.$props.error.resettingIn)+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},394:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return k}));n(15),n(10),n(16),n(18),n(19);var r=n(23),o=n(7),c=(n(49),n(395),n(5),n(17),n(30),n(31),n(51),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(14),n(246),n(40),n(386));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d="latest",m=function(t){var e=Number(t.headers.get("x-ratelimit-used"));if(!t.ok&&60===e){var n=c.DateTime.fromSeconds(Number(t.headers.get("x-ratelimit-reset"))).toRelative({locale:"en-US"});return{error:!0,resettingIn:n,message:"You've exceeded the request count for the Github API, please retry ".concat(n,".")}}return{error:!1}},h=function(t){return t===d?d:"tags/v".concat(t)},v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,f,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v.length>1&&void 0!==v[1]?v[1]:d,r=null,o="https://github.com/lostdesign/linked/releases/".concat(h(n)),c="https://api.github.com/repos/lostdesign/linked/releases/".concat(h(n)),t.prev=4,t.next=7,fetch(c,{headers:{Authorization:"Bearer "+e}});case 7:if(l=t.sent,!(f=m(l)).error){t.next=12;break}throw r=f,new Error(f.message);case 12:return t.next=14,l.json();case 14:return t.t0=t.sent,t.t1=r,t.t2=o,t.abrupt("return",{release:t.t0,error:t.t1,fallbackUrl:t.t2});case 20:return t.prev=20,t.t3=t.catch(4),t.abrupt("return",{release:null,error:r,fallbackUrl:o});case 23:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(e){return t.apply(this,arguments)}}();function x(t,e,n){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://api.github.com/repos/".concat(e,"/").concat(n,"/contributors"),r));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=[{orgName:"lostdesign",repoName:"linked"},{orgName:"uselinked",repoName:"website"},{orgName:"uselinked",repoName:"discord"}];function k(t){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?{headers:{Authorization:"Bearer ".concat(e)}}:{},t.next=3,Promise.all(y.map((function(t){return x(t.orgName,t.repoName,n)})));case 3:if(r=t.sent,!(o=r.reduceRight((function(t,e){return t.error?t:m(e)}),{error:!1})).error){t.next=7;break}return t.abrupt("return",{isRateLimited:o,contributors:[]});case 7:return t.next=9,Promise.all(r.map((function(t){return t.json()})));case 9:return c=t.sent,l=new Map,c.forEach((function(t){t.forEach((function(t){if("User"===t.type){var e=l.get(t.login);e?l.set(t.login,f(f({},t),{},{contributions:e.contributions+t.contributions})):l.set(t.login,t)}}))})),d=Array.from(l.values()).sort((function(t,e){return e.contributions-t.contributions})),t.abrupt("return",{isRateLimited:o,contributors:d});case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},395:function(t,e,n){"use strict";var r=n(21),o=n(2),c=n(4),l=n(96),f=n(36),d=n(27),m=n(170),h=n(63),v=n(130),x=n(245),_=n(6),y=n(83).f,k=n(57).f,w=n(32).f,C=n(387),j=n(261).trim,O="Number",N=o.Number,I=N.prototype,E=o.TypeError,A=c("".slice),P=c("".charCodeAt),$=function(t){var e=x(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,o,c,l,f,code,d=x(t,"number");if(v(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=j(d),43===(e=P(d,0))||45===e){if(88===(n=P(d,2))||120===n)return NaN}else if(48===e){switch(P(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=A(d,2)).length,f=0;f<l;f++)if((code=P(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var M,S=function(t){var e=arguments.length<1?0:N($(t)),n=this;return h(I,n)&&_((function(){C(n)}))?m(Object(e),n,S):e},R=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;R.length>T;T++)d(N,M=R[T])&&!d(S,M)&&w(S,M,k(N,M));S.prototype=I,I.constructor=S,f(o,O,S)}},396:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Want latest news and updates?","description":"Join over a hundred other users in our discord community talking about linked. Let us know what you think about the project and share your ideas with everyone.","say_hello":"Say hello on discord!"},"de":{"title":"Möchtest Du die neuesten Nachrichten und Updates?","description":"Schließe dich über hundert anderen Nutzern in unserer Discord-Community an, die über linked sprechen. Lass uns wissen, was Du über das Projekt denkst und teile Deine Ideen mit allen.","say_hello":"Sag Hallo auf Discord!"}}'),delete t.options._Ctor}},397:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"maintainer":{"title":"Maintainer","subline":"The head behind the project."},"lovely_contributors":"Contributors","thanks":"Thanks to the awesome people that have contributed to linked."},"de":{"maintainer":{"title":"Maintainer","subline":"Der Kopf hinter dem Projekt."},"lovely_contributors":"Mitwirkende","thanks":"Vielen Dank an alle, die zu linked beigetragen haben."}}'),delete t.options._Ctor}},408:function(t,e,n){"use strict";var r=n(396),o=n.n(r);e.default=o.a},409:function(t,e,n){"use strict";var r=n(397),o=n.n(r);e.default=o.a},423:function(t,e,n){"use strict";n.r(e);var r=n(173),o={components:{IconDiscord:n.n(r).a},methods:{trackClick:function(t){var e;null===(e=this.$fathom)||void 0===e||e.trackGoal(t,0)}}},c=n(20),l=n(408),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-6 bg-linked-700 rounded-lg md:p-12 lg:flex xl:items-center mb-12 justify-between items-center space-x-0 lg:space-x-6"},[n("div",{staticClass:"xl:w-0 xl:flex-1"},[n("h2",{staticClass:"text-2xl font-extrabold tracking-tight text-white sm:text-3xl"},[t._v("\n      "+t._s(t.$t("title"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-3 w-full lg:max-w-2xl text-lg leading-6 text-linked-100"},[t._v("\n      "+t._s(t.$t("description"))+"\n    ")])]),t._v(" "),n("div",[n("a",{staticClass:"text-lg w-full flex items-center justify-center px-5 py-3 border border-transparent shadow font-medium rounded-md text-white bg-linked-500 hover:bg-linked-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-linked-700 focus:ring-white mt-6 lg:mt-0 sm:flex-shrink-0",attrs:{href:"https://discord.gg/uNjJzZvccr"},on:{click:function(e){return t.trackClick("M6KCBDQG",0)}}},[n("icon-discord",{staticClass:"w-6 h-6 mr-4"}),t._v("\n      "+t._s(t.$t("say_hello"))+"\n    ")],1)])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);n(16),n(5);var r={props:{contributors:{type:Array,default:null},error:{type:Object,default:null}},computed:{getMaintainer:function(){return this.$props.contributors.filter((function(t){return"lostdesign"===t.login}))[0]}}},o=n(20),c=n(409),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.contributors?n("div",{staticClass:"space-y-4 sm:space-y-8 mt-12"},[n("div",{staticClass:"space-y-4 sm:space-y-8"},[n("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n          "+t._s(t.$t("maintainer.title"))+"\n        ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("maintainer.subline")))])]),t._v(" "),n("a",{ref:"norel noopener",staticClass:"\n          inline-flex\n          flex-col\n          m-0\n          mb-6\n          sm:mb-0 sm:m-4\n          md:m-6\n          lg:m-8\n          space-y-4\n        ",attrs:{target:"_blank",href:t.getMaintainer.html_url}},[n("img",{staticClass:"\n            mx-auto\n            h-24\n            w-24\n            md:h-20 md:w-20\n            rounded-full\n            lg:w-24 lg:h-24\n          ",attrs:{src:t.getMaintainer.avatar_url,alt:t.getMaintainer.login+" profile image"}}),t._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"text-center font-medium lg:text-sm"},[n("h3",{staticClass:"text-base font-bold"},[t._v(t._s(t.getMaintainer.login))]),t._v(" "),n("p",{staticClass:"text-xs text-linked"},[t._v("\n              "+t._s(t.getMaintainer.contributions)+" commits\n            ")])])])])]),t._v(" "),n("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n        "+t._s(t.$t("lovely_contributors"))+"\n      ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("thanks")))])]),t._v(" "),n("ul",{staticClass:"flex flex-wrap",attrs:{role:"list"}},[t._l(t.$props.contributors,(function(e){return["lostdesign"!==e.login?n("a",{key:e.login,ref:"norel noopener",refInFor:!0,staticClass:"\n            basis-1/2\n            sm:basis-1/3\n            md:basis-1/5\n            lg:basis-1/6\n            xl:basis-1/12\n            flex flex-col\n            justify-center\n            grow\n            shrink-0\n            self-center\n            items-center\n            m-0\n            mb-6\n            sm:mb-0 sm:m-4\n            md:m-6\n            lg:m-8\n            space-y-4\n          ",attrs:{target:"_blank",href:e.html_url}},[n("li",[n("img",{staticClass:"\n                mx-auto\n                h-24\n                w-24\n                md:h-20 md:w-20\n                rounded-full\n                lg:w-24 lg:h-24\n              ",attrs:{src:e.avatar_url,alt:e.login+" profile image"}}),t._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"text-center font-medium lg:text-sm"},[n("h3",{staticClass:"text-base font-bold"},[t._v(t._s(e.login))]),t._v(" "),n("p",{staticClass:"text-xs text-linked"},[t._v("\n                  "+t._s(e.contributions)+" commit"+t._s(1===e.contributions?"":"s")+"\n                ")])])])])]):t._e()]}))],2)]):t._e(),t._v(" "),t.error?n("github-error",{attrs:{error:t.error}}):t._e()],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;installComponents(component,{GithubError:n(391).default})},465:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(49),n(394)),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config.githubToken,r=null,e.prev=2,e.next=5,Object(o.c)(n);case 5:if(c=e.sent,l=c.isRateLimited,f=c.contributors,!l.error){e.next=11;break}throw r=l,new Error(l.message);case 11:return e.abrupt("return",{contributors:f,error:null});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",{contributors:null,error:r});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))()}},l=n(20),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-wrapper",{staticClass:"pt-16"},[n("community-discord"),t._v(" "),n("community-contributors",{attrs:{contributors:t.contributors,error:t.error}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommunityDiscord:n(423).default,CommunityContributors:n(424).default,ContentWrapper:n(244).default})}}]);