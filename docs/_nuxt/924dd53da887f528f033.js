(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{128:function(t,n,e){var content=e(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("6add6edb",content,!0,{sourceMap:!1})},129:function(t,n,e){var content=e(134);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("6224379b",content,!0,{sourceMap:!1})},130:function(t,n,e){"use strict";var o=e(139),r=e.n(o),l={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===r.a.apps.length&&r.a.initializeApp(l),n.a=r.a},131:function(t,n,e){"use strict";var o=e(128);e.n(o).a},132:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-header{padding:6px 0;box-shadow:0 3px 5px rgba(0,0,0,.1)}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:24px}.p-page-title a{color:#000;text-decoration:none}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:10px}",""])},133:function(t,n,e){"use strict";var o=e(129);e.n(o).a},134:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-footer div{margin:0 auto;width:640px}",""])},135:function(t,n,e){"use strict";var o=e(130),r={props:["currentUserId"],methods:{signOut:function(){o.a.auth().signOut()}}},l=(e(131),e(15)),component=Object(l.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"p-header"},[e("div",{staticClass:"p-header__container"},[e("h1",{staticClass:"p-page-title"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("NippoHub")])],1),t._v(" "),e("nav",[e("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?e("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);n.a=component.exports},136:function(t,n,e){"use strict";e(133);var o=e(15),component=Object(o.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("footer",{staticClass:"p-footer"},[n("div",[n("span",[this._v("\n      ©NippoHub\n    ")]),this._v(" "),n("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[this._v("利用規約")]),this._v(" "),n("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[this._v("プライバシーポリシー")])],1)])},[],!1,null,null,null);n.a=component.exports},137:function(t,n,e){var content=e(142);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("a174d48a",content,!0,{sourceMap:!1})},138:function(t,n,e){var content=e(146);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("2bfdbba2",content,!0,{sourceMap:!1})},141:function(t,n,e){"use strict";var o=e(137);e.n(o).a},142:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-btn,.p-submit{background-color:#fff;border:.1em solid #ddd;border-radius:.3em;padding:.25em 2em}",""])},143:function(t,n,e){var content=e(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("67c5c354",content,!0,{sourceMap:!1})},144:function(t,n,e){var content=e(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("30207abe",content,!0,{sourceMap:!1})},145:function(t,n,e){"use strict";var o=e(138);e.n(o).a},146:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".u-mt-075{margin-top:.75em}.u-text-align-right{text-align:right}",""])},155:function(t,n,e){"use strict";var o=e(143);e.n(o).a},156:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-oneline-input{height:2.5em;padding:.25em .5em;outline:none;border:.1em solid #ddd;border-radius:.3em;box-sizing:border-box}",""])},157:function(t,n,e){"use strict";var o=e(144);e.n(o).a},158:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-auth-form__input{display:inline-block;width:100%}",""])},209:function(t,n,e){"use strict";e.r(n);var o=e(130),r=e(135),l=e(136),c={components:{MainHeader:r.a,MainFooter:l.a},data:function(){return{email:"",password:"",passwordConfirmation:""}},methods:{signUp:function(){var t=o.a.auth();this.password===this.passwordConfirmation&&t.createUserWithEmailAndPassword(this.email,this.password).then(function(){location.href="/"}).catch(function(t){"auth/email-already-in-use"===t.code?alert("ご入力のメールアドレスは登録済みです"):(console.error(t.code),console.error(t.message))})}}},d=(e(141),e(155),e(157),e(145),e(15)),component=Object(d.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("main-header",{attrs:{currentUserId:null}}),t._v(" "),e("div",{staticClass:"l-container p-auth-form"},[e("form",{on:{submit:function(n){return n.preventDefault(),t.signUp(n)}}},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"p-oneline-input p-auth-form__input",attrs:{type:"text",name:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"u-mt-075"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"p-oneline-input p-auth-form__input",attrs:{type:"password",name:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"u-mt-075"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"p-oneline-input p-auth-form__input",attrs:{type:"password",nane:"password_confirmation",placeholder:"password confirmation"},domProps:{value:t.passwordConfirmation},on:{input:function(n){n.target.composing||(t.passwordConfirmation=n.target.value)}}})]),t._v(" "),e("p",[t._v("\n        サインアップすると"),e("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[t._v("利用規約")]),t._v("と"),e("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[t._v("プライバシーポリシー")]),t._v("に同意したことになります。\n      ")],1),t._v(" "),t._m(0)])]),t._v(" "),e("main-footer")],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"u-mt-075 u-text-align-right"},[n("button",{staticClass:"p-submit",attrs:{type:"submit"}},[this._v("サインアップ")])])}],!1,null,null,null);n.default=component.exports}}]);