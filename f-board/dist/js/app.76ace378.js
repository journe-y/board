(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-4d5bfcd6":"40d1436f"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-4d5bfcd6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-4d5bfcd6":"e46418f6"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/board/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"0613":function(t,e,n){"use strict";var r,a=n("2b0e"),o=n("2f62");a["default"].use(o["a"]),e["a"]=new o["a"].Store({state:{userid:null!==(r=localStorage.getItem("userid"))&&void 0!==r?r:null,onModal:!1},mutations:{SET_AUTH:function(t,e){t.userid=e},SET_ON_MODAL:function(t,e){t.onModal=e}},actions:{},modules:{}})},"11a5":function(t,e,n){"use strict";n("57fd")},"12aa":function(t,e,n){"use strict";n("c977")},"1ba4":function(t,e,n){"use strict";n("e599")},"37f6":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("bc3a"),a=n.n(r),o=n("98f8");function i(t,e,n,r){Object(o["a"])(t,(function(){n()}),(function(){r()}),e)}function s(t,e){a.a.get(t).then((function(t){e(t)}))}function u(t,e){a.a.get(t).then((function(t){e(t.data.post)})).catch((function(t){console.log(t.msg)}))}},4041:function(t,e,n){"use strict";n("6271")},"46b5":function(t,e,n){},4713:function(t,e,n){"use strict";n("5b21")},"57fd":function(t,e,n){},"5b21":function(t,e,n){},6271:function(t,e,n){},"71be":function(t,e,n){"use strict";n("ff11")},"85ec":function(t,e,n){},"98f8":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("bc3a"),a=n.n(r),o=n("9bac"),i=n("0613");function s(t,e,n,r){a.a.post(t,r||{},{headers:{Authorization:"".concat(localStorage.getItem("accessToken"))}}).then((function(t){e(t)})).catch((function(c){"토큰만료"===Object(o["a"])(c)?a.a.post("/refresh",r||{},{headers:{"Content-Type":"application/json",refreshtoken:"".concat(localStorage.getItem("refreshToken"))}}).then((function(a){var o=a.data;localStorage.setItem("accessToken",o.token),localStorage.setItem("refreshToken",o.refreshToken),s(t,e,n,r)})).catch((function(){u(),n(),i["a"].commit("SET_ON_MODAL",!0)})):"유효하지않은토큰"===Object(o["a"])(c)?(u(),i["a"].commit("SET_ON_MODAL",!0),n()):n(Object(o["a"])(c))}))}function u(){i["a"].commit("SET_AUTH",null),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userid")}},"9bac":function(t,e,n){"use strict";function r(t){var e=t.response;if(n(e.status))alert("죄송합니다. 서버에서 잠시 에러가 발생했습니다. 잠시후 다시 시도해주세요.");else if(r(e.status))return e.data.msg;function n(t){return t>=500}function r(t){return 400<=t&&t<500}}n.d(e,"a",(function(){return r}))},"9c1f":function(t,e,n){"use strict";n("46b5")},bc26:function(t,e,n){"use strict";n("c373")},c373:function(t,e,n){},c977:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-container"},[n("navbar"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark",variant:""}},[n("b-container",[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v(t._s(t.test))]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{staticClass:"align__right",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.state.userid?t._e():n("b-button-group",[n("b-button",{staticClass:"login-btn",attrs:{variant:"outline-primary"},on:{click:t.modalOnOff}},[t._v("Login")]),n("b-button",{staticClass:"join-btn",attrs:{variant:"outline-primary"},on:{click:t.modalOnOff}},[t._v("Join")])],1),this.$store.state.userid?n("b-button",{staticClass:"login-btn",attrs:{variant:"outline-primary"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1)],1),n("modal",{attrs:{show:this.$store.state.onModal},on:{"@off":t.modalOnOff}},["login"===t.userEvent?n("login",{on:{"@goRegister":t.changeUserEvent}}):"join"===t.userEvent?n("register",{on:{"@goLogin":t.changeUserEvent}}):n("login")],1)],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"backdrop",on:{click:function(e){return e.stopPropagation(),t.offModal.apply(null,arguments)}}},[n("div",{staticClass:"custom-modal"},[t._t("default")],2)]):t._e()},c=[],l=r["default"].extend({props:{show:{type:Boolean,default:!1}},data:function(){return{}},methods:{offModal:function(t){t.target.classList.contains("backdrop")&&this.$emit("@off",t)}}}),d=l,f=(n("12aa"),n("2877")),p=Object(f["a"])(d,u,c,!1,null,"6fa6ca84",null),h=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form"},[n("h4",[t._v("로그인")]),n("br"),n("div",{staticClass:"fullwidth",attrs:{role:"group"}},[n("b-form-input",{ref:"id",attrs:{type:"text",placeholder:"아이디",trim:""},model:{value:t.inputId,callback:function(e){t.inputId=e},expression:"inputId"}}),n("br"),n("b-form-input",{ref:"PW",attrs:{type:"password",placeholder:"비밀번호",trim:""},on:{keyup:t.pwKeyup},model:{value:t.inputPw,callback:function(e){t.inputPw=e},expression:"inputPw"}})],1),n("br"),n("b-button",{staticClass:"fullwidth",attrs:{pill:"",variant:"primary"},on:{click:t.onlogin}},[t._v("Login")]),n("button",{staticClass:"user-link-btn",on:{click:t.goRegister}},[t._v("회원가입 하기")])],1)},b=[],m=n("bc3a"),g=n.n(m),_=n("9bac");function k(t,e,n,r){g.a.post(t,e).then((function(t){n()})).catch((function(t){r&&r(Object(_["a"])(t))}))}function y(t,e,n,r){g.a.post(t,e).then((function(t){n(t)})).catch((function(t){r&&r(Object(_["a"])(t))}))}var w=r["default"].extend({mounted:function(){var t=this.$refs.id;t.focus()},data:function(){return{inputId:"",inputPw:""}},methods:{onlogin:function(){var t=this;if(this.inputId.length)if(this.inputId.length){var e="/auth/login";y(e,{userid:this.inputId,userpw:this.inputPw},(function(e){var n=e.data;alert(n.msg),localStorage.setItem("accessToken",n.token),localStorage.setItem("refreshToken",n.refreshToken),localStorage.setItem("userid",t.inputId),t.$store.commit("SET_AUTH",t.inputId),t.$store.commit("SET_ON_MODAL",!1)}),(function(t){alert(t)}))}else{alert("비밀번호 입력을 확인해주세요");var n=this.$refs.pw;n.focus()}else{alert("아이디 입력을 확인해주세요");var r=this.$refs.id;r.focus()}},pwKeyup:function(t){13===t.keyCode&&this.onlogin()},goRegister:function(){this.$emit("@goRegister","join")}}}),j=w,O=(n("11a5"),Object(f["a"])(j,v,b,!1,null,"578e8413",null)),E=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"join-form"},[n("h4",[t._v("회원가입")]),n("br"),n("pattern-input",{ref:"id",staticClass:"fullwidth",attrs:{pattern:t.aboutId.idRegExp,placeHolder:t.aboutId.placeHolder,describedby:t.aboutId.description,title:t.aboutId.title},on:{"@keyup":t.changeId},model:{value:t.inputId,callback:function(e){t.inputId=e},expression:"inputId"}}),n("br"),n("pattern-input",{ref:"pw",staticClass:"fullwidth",attrs:{type:"password",pattern:t.aboutPw.idRegExp,placeHolder:t.aboutPw.placeHolder,describedby:t.aboutPw.description,title:t.aboutPw.title,enterSeubmit:t.aboutPw.onEnter},on:{"@keyup":t.changePw,"@submit":t.onJoin},model:{value:t.inputPw,callback:function(e){t.inputPw=e},expression:"inputPw"}}),n("br"),n("b-button",{staticClass:"fullwidth",attrs:{pill:"",variant:"primary"},on:{click:t.onJoin}},[t._v("Register")]),n("button",{staticClass:"user-link-btn",on:{click:t.goLogin}},[t._v("로그인 하기")])],1)},x=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{role:"group"}},[n("label",{attrs:{for:"input-live"}},[t._v(t._s(t.title))]),n("b-form-input",{ref:"input",attrs:{state:t.state,type:t.type,"aria-describedby":"input-live-help input-live-feedback",placeholder:t.placeHolder,trim:""},on:{keyup:t.onKeyup},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" "+t._s(t.describedby)+" ")])],1)},C=[],I=(n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("466d"),r["default"].extend({props:{pattern:{type:RegExp},placeHolder:{type:String,default:""},describedby:{type:String,default:""},title:{type:String,default:""},type:{type:String,default:"text"},enterSeubmit:{type:Boolean,default:!1}},computed:{state:function(){return 0===this.value.length?null:!!this.value.match(new RegExp(this.pattern))}},data:function(){return{value:""}},methods:{onKeyup:function(t){this.enterSeubmit&&13===t.keyCode&&this.$emit("@submit"),this.$emit("@keyup",this.value,this.state)},focusInput:function(){var t=this.$refs.input;t.focus()}}})),P=I,T=Object(f["a"])(P,$,C,!1,null,null,null),L=T.exports,A=r["default"].extend({components:{"pattern-input":L},data:function(){return{inputId:"",inputPw:"",inputIdState:null,inputPwState:null,aboutId:{idRegExp:/^[a-z0-9]{8,10}$/g,description:"영어또는 숫자 8~10자",placeHolder:"아이디 입력",title:"아이디 : "},aboutPw:{idRegExp:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g,description:"영문 대소문자, 숫자, 특수문자 포함 8자이상",placeHolder:"비밀번호 입력",title:"비밀번호 : ",onEnter:!0}}},methods:{changeId:function(t,e){this.inputIdState=e,this.inputId=t},changePw:function(t,e){this.inputPwState=e,this.inputPw=t},onJoin:function(){var t=this;if(this.inputIdState)if(this.inputPwState){var e="/auth/register";k(e,{userid:this.inputId,userpw:this.inputPw},(function(){alert("회원가입 성공! 로그인해주세요"),t.$store.commit("SET_ON_MODAL",!1)}),(function(e){alert(e);var n=t.$refs.id;n.focusInput()}))}else{alert("비밀번호 입력을 확인해주세요");var n=this.$refs.pw;n.focusInput()}else{alert("아이디 입력을 확인해주세요");var r=this.$refs.id;r.focusInput()}},goLogin:function(){this.$emit("@goLogin","login")}}}),M=A,N=(n("bc26"),Object(f["a"])(M,S,x,!1,null,"1a53c601",null)),H=N.exports,R=n("98f8"),D=r["default"].extend({components:{modal:h,login:E,register:H},data:function(){return{test:"BOARD",userEvent:""}},methods:{modalOnOff:function(t){var e=!t.target.classList.contains("backdrop");return e&&t.target.classList.contains("login-btn")?(this.userEvent="login",void this.$store.commit("SET_ON_MODAL",!0)):e&&t.target.classList.contains("join-btn")?(this.userEvent="join",void this.$store.commit("SET_ON_MODAL",!0)):(this.$store.commit("SET_ON_MODAL",!1),void(this.userEvent="login"))},modalOff:function(){this.$store.commit("SET_ON_MODAL",!1),this.userEvent="login"},logout:function(){Object(R["b"])(),"/"!==this.$route.path&&this.$router.push({name:"Main"})},changeUserEvent:function(t){this.userEvent=t}}}),B=D,U=(n("9c1f"),Object(f["a"])(B,i,s,!1,null,"49c2bdbd",null)),J=U.exports,W={components:{navbar:J}},z=W,K=(n("034f"),Object(f["a"])(z,a,o,!1,null,null,null)),F=K.exports,V=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},Z=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],Q=r["default"].extend({name:"HelloWorld",props:{msg:String}}),X=Q,tt=(n("71be"),Object(f["a"])(X,Y,G,!1,null,"634a41c8",null)),et=tt.exports,nt=r["default"].extend({name:"Home",components:{HelloWorld:et}}),rt=nt,at=Object(f["a"])(rt,q,Z,!1,null,null,null),ot=at.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-container"},[n("router-link",{staticClass:"add-post",attrs:{to:"/write"}},[t._v("글쓰기")]),n("aside",{staticClass:"side"},[n("sidebar")],1),n("article",{staticClass:"main"},t._l(t.posts,(function(t){return n("card",{key:t.id,attrs:{id:t.id,imgPath:t.imgpath,title:t.title,date:t.date,writer:t.userid}})})),1)],1)},st=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"sidebar-contaier"},[n("b-list-group",{staticClass:"test"},t._l(t.list,(function(e){return n("b-list-group-item",{key:e,class:{active:e===t.selected},attrs:{button:""},on:{click:function(n){return t.listClick(e)}}},[t._v(t._s(e))])})),1)],1)},ct=[],lt=r["default"].extend({data:function(){return{selected:"ALL",list:["ALL","HTTP","SpringBoot","Node.js","Vue.js","React.js","ect"]}},methods:{listClick:function(t){this.selected=t}}}),dt=lt,ft=(n("4713"),Object(f["a"])(dt,ut,ct,!1,null,"e55ed484",null)),pt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"m-3 card",staticStyle:{"max-width":"16rem","box-shadow":"0 0.25rem 0.25rem rgb(0 0 0 / 10%)"},attrs:{"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"},on:{click:t.getPost}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("h6",{staticClass:"mb-1"},[t._v(t._s(t.title))])]),n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("small",[t._v(t._s(t.date))]),n("small",[t._v(t._s(t.writer))])])])],1)},vt=[],bt=(n("a9e3"),r["default"].extend({props:{id:{type:Number},title:{type:String},date:{type:String,default:"00-00-00"},writer:{type:String,default:""}},data:function(){return{data:"data"}},methods:{getPost:function(){this.$router.push({name:"Read",params:{id:this.id.toString()}})}}})),mt=bt,gt=(n("1ba4"),Object(f["a"])(mt,ht,vt,!1,null,"421c1d22",null)),_t=gt.exports,kt=n("37f6"),yt={components:{sidebar:pt,card:_t},data:function(){return{posts:[]}},beforeCreate:function(){var t=this;Object(kt["b"])("/post/list",(function(e){var n=e.data;t.posts=n.posts}))}},wt=yt,jt=Object(f["a"])(wt,it,st,!1,null,null,null),Ot=jt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"write-container read-page"},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"8"}},[n("h1",[n("b",[t._v(t._s(t.data.title))])])]),n("b-col",{attrs:{cols:"2"}}),n("b-col",{directives:[{name:"show",rawName:"v-show",value:t.data.userid===this.$store.state.userid,expression:"data.userid === this.$store.state.userid"}],staticClass:"postBtn",attrs:{cols:"2"}},[n("b-button-group",[n("b-button",{attrs:{variant:"outline-success"},on:{click:t.modify}},[t._v("수정")]),n("b-button",{attrs:{variant:"outline-danger"}},[t._v("삭제")])],1)],1)],1),n("br"),n("b-row",[n("b-col",{attrs:{cols:"2"}},[t._v("작성자 : "+t._s(t.data.userid))]),n("b-col",{attrs:{cols:"10"}},[t._v(t._s(t.data.date))])],1),n("br"),n("hr"),n("br"),n("b-row",{ref:"content"})],1)],1)},St=[],xt=r["default"].extend({props:{id:{type:String||Number,default:0}},data:function(){var t;return{test:"ReadPage",data:{},user:null!==(t=localStorage.getItem("userid"))&&void 0!==t?t:"null"}},created:function(){var t=this;Object(kt["a"])("/post/read/".concat(this.id),(function(e){t.data=e;var n=t.$refs.content;n.innerHTML=e.contents}))},methods:{modify:function(){this.$router.push({name:"Modify",params:{id:this.id.toString()}})}}}),$t=xt,Ct=(n("4041"),Object(f["a"])($t,Et,St,!1,null,"659a85f5",null)),It=Ct.exports;r["default"].use(V["a"]);var Pt=[{path:"/",name:"Main",component:Ot},{path:"/write",name:"Write",component:function(){return n.e("chunk-4d5bfcd6").then(n.bind(null,"ed6a"))},beforeEnter:function(t,e,n){Object(R["a"])("/post/write",(function(){n()}),(function(){alert("로그인이 필요합니다.")}))}},{path:"/modify/:id",name:"Modify",props:!0,component:function(){return n.e("chunk-4d5bfcd6").then(n.bind(null,"ed6a"))},beforeEnter:function(t,e,n){Object(R["a"])("/post".concat(t.path),(function(e){var r=e.data;t.params.data=r.post,n()}),(function(){alert("본인의 글만 수정 가능합니다.")}))}},{path:"/read/:id",name:"Read",component:It,props:!0},{name:"catch-all",path:"*",component:ot}],Tt=new V["a"]({mode:"history",base:"/board/",routes:Pt}),Lt=Tt,At=n("0613"),Mt=n("ecee"),Nt=n("c074"),Ht=n("ad3d"),Rt=n("953d"),Dt=n.n(Rt),Bt=n("5f5b"),Ut=n("b1e0");n("f9e3"),n("2dd8");Mt["c"].add(Nt["a"]),r["default"].use(Dt.a),r["default"].component("font-awesome-icon",Ht["a"]),r["default"].config.productionTip=!1,r["default"].use(Bt["a"]),r["default"].use(Ut["a"]),r["default"].config.productionTip=!1,new r["default"]({router:Lt,store:At["a"],render:function(t){return t(F)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e599:function(t,e,n){},ff11:function(t,e,n){}});
//# sourceMappingURL=app.76ace378.js.map