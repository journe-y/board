(function(e){function t(t){for(var n,s,l=t[0],u=t[1],i=t[2],c=0,p=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"268120d0"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/board/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";r("85ec")},5371:function(e,t,r){},"71be":function(e,t,r){"use strict";r("ff11")},"85ec":function(e,t,r){},"89a9":function(e,t,r){"use strict";r("d20b")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar"),r("section",{staticClass:"main-container"},[r("aside",{staticClass:"side"},[r("sidebar")],1),r("article",{staticClass:"main"},[e._v("post")])])],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark",variant:""}},[r("b-container",[r("b-navbar-brand",{staticClass:"logo",attrs:{href:"#"}},[e._v(e._s(e.test))]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{staticClass:"align__right",attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.modalOnOff}},[e._v("Login")])],1)],1)],1)],1),r("modal",{attrs:{show:e.loginShow},on:{"@off":e.modalOnOff}},[e._v("slot")])],1)},l=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"backdrop",on:{click:function(t){return t.stopPropagation(),e.offModal.apply(null,arguments)}}},[r("div",{staticClass:"custom-modal"},[e._t("default")],2)]):e._e()},i=[],c=n["default"].extend({props:{show:{type:Boolean,default:!1}},data:function(){return{}},methods:{offModal:function(e){e.target.classList.contains("backdrop")&&this.$emit("@off")}}}),f=c,p=(r("89a9"),r("2877")),v=Object(p["a"])(f,u,i,!1,null,"436d5a32",null),d=v.exports,h=n["default"].extend({components:{modal:d},data:function(){return{test:"board",loginShow:!1}},methods:{modalOnOff:function(){this.loginShow=!this.loginShow}}}),b=h,g=(r("e4ec"),Object(p["a"])(b,s,l,!1,null,"397c902b",null)),m=g.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"sidebar-contaier"},[r("b-list-group",e._l(e.list,(function(t){return r("b-list-group-item",{key:t,attrs:{button:""}},[e._v(e._s(t))])})),1)],1)},j=[],k=n["default"].extend({data:function(){return{list:["HTTP","SpringBoot","Node.js","Vue.js","React.js","ect"]}},methods:{}}),y=k,w=(r("db0c"),Object(p["a"])(y,_,j,!1,null,"98503eec",null)),O=w.exports,x={components:{navbar:m,sidebar:O}},C=x,E=(r("034f"),Object(p["a"])(C,a,o,!1,null,null,null)),S=E.exports,P=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},T=[],H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],M=n["default"].extend({name:"HelloWorld",props:{msg:String}}),W=M,A=(r("71be"),Object(p["a"])(W,H,L,!1,null,"634a41c8",null)),V=A.exports,B=n["default"].extend({name:"Home",components:{HelloWorld:V}}),F=B,I=Object(p["a"])(F,$,T,!1,null,null,null),J=I.exports;n["default"].use(P["a"]);var N=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],q=new P["a"]({mode:"history",base:"/board/",routes:N}),z=q,D=r("2f62");n["default"].use(D["a"]);var R=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=r("5f5b"),G=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(Y["a"]),n["default"].use(G["a"]),n["default"].config.productionTip=!1,new n["default"]({router:z,store:R,render:function(e){return e(S)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d20b:function(e,t,r){},db0c:function(e,t,r){"use strict";r("5371")},e4ec:function(e,t,r){"use strict";r("f3ae")},f3ae:function(e,t,r){},ff11:function(e,t,r){}});
//# sourceMappingURL=app.906c645a.js.map