(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){"use strict";r.d(e,"j",(function(){return c})),r.d(e,"l",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"h",(function(){return d})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return _})),r.d(e,"i",(function(){return h})),r.d(e,"m",(function(){return O})),r.d(e,"k",(function(){return C})),r.d(e,"a",(function(){return E})),r.d(e,"f",(function(){return j}));var n=r(66),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},m=function(data){return console.log(data),Object(n.b)({method:"POST",url:"/api/articles",data:data})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},O=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},C=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},E=function(t,body){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:{body:body}}})},j=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})}},200:function(t,e,r){var n=r(3),c=r(32),o=r(9),l=r(201),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},201:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},210:function(t,e,r){var n=r(3),c=r(211);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},211:function(t,e,r){var n=r(5).parseInt,c=r(200).trim,o=r(201),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},212:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(130),f=r(67),v=r(9),d=r(51).f,m=r(52).f,_=r(11).f,h=r(200).trim,O="Number",C=n.Number,E=C,j=C.prototype,y=o(r(86)(j))==O,k="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(y?v((function(){j.valueOf.call(r)})):o(r)!=O)?l(new E(x(e)),r,C):x(e)};for(var w,I=r(7)?d(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)c(E,w=I[N])&&!c(C,w)&&_(C,w,m(E,w));C.prototype=j,j.constructor=C,r(14)(n,O,C)}},270:function(t,e,r){"use strict";r.r(e);var n=r(19),c=r(10),o=r(4),l=(r(36),r(210),r(212),r(38),r(13),r(39),r(37),r(24),r(23),r(49),r(50),r(40)),f=r(194),v=r(66);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"HomeIndex",watchQuery:["page","tag","tab"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m,_,h,O,C,E,j,y,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.prev=1,n=Number.parseInt(r.page||1),o=10,l=r.tab||"global_feed",d=r.tag,m="your_feed"!==l?f.j:f.l,e.next=9,Promise.all([m({limit:o,offset:(n-1)*o,tag:d}),v.b.get("/api/tags")]);case 9:return _=e.sent,h=Object(c.a)(_,2),O=h[0],C=h[1],E=O.data,j=E.articles,y=E.articlesCount,k=C.data.tags,j.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{limit:o,page:n,articles:j,articlesCount:y,tags:k,tab:l,tag:d});case 19:e.prev=19,e.t0=e.catch(1),console.dir(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}},Object(l.b)(["user"])),methods:{onFavorite:function(article){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=2;break}return e.abrupt("return",t.$router.push("/login"));case 2:if(article.favoriteDisabled=!0,!article.favorited){e.next=10;break}return e.next=6,Object(f.g)(article.slug);case 6:article.favorited=!1,article.favoritesCount-=1,e.next=14;break;case 10:return e.next=12,Object(f.b)(article.slug);case 12:article.favorited=!0,article.favoritesCount+=1;case 14:article.favoriteDisabled=!1;case 15:case"end":return e.stop()}}),e)})))()}},components:{}},_=m,h=r(30),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{class:["nav-link",{active:"you_feed"===t.tab}],attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{class:["nav-link",{active:"global_feed"===t.tab}],attrs:{to:{name:"home"},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("a",{class:["nav-link",{active:"tag"===t.tab}],attrs:{href:"#"}},[t._v("#"+t._s(t.tag))])]):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n              "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,class:["page-item",{active:e===t.page}]},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e,i){return r("nuxt-link",{key:i,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,"1546a070",null);e.default=component.exports}}]);