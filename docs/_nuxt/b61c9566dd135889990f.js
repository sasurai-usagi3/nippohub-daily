(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{128:function(t,n,e){var content=e(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("6add6edb",content,!0,{sourceMap:!1})},129:function(t,n,e){var content=e(134);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("6224379b",content,!0,{sourceMap:!1})},130:function(t,n,e){"use strict";var r=e(139),l=e.n(r),o={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===l.a.apps.length&&l.a.initializeApp(o),n.a=l.a},131:function(t,n,e){"use strict";var r=e(128);e.n(r).a},132:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-header{padding:6px 0;box-shadow:0 3px 5px rgba(0,0,0,.1)}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:24px}.p-page-title a{color:#000;text-decoration:none}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:10px}",""])},133:function(t,n,e){"use strict";var r=e(129);e.n(r).a},134:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-footer div{margin:0 auto;width:640px}",""])},135:function(t,n,e){"use strict";var r=e(130),l={props:["currentUserId"],methods:{signOut:function(){r.a.auth().signOut()}}},o=(e(131),e(15)),component=Object(o.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"p-header"},[e("div",{staticClass:"p-header__container"},[e("h1",{staticClass:"p-page-title"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("NippoHub")])],1),t._v(" "),e("nav",[e("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?e("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);n.a=component.exports},136:function(t,n,e){"use strict";e(133);var r=e(15),component=Object(r.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("footer",{staticClass:"p-footer"},[n("div",[n("span",[this._v("\n      ©NippoHub\n    ")]),this._v(" "),n("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[this._v("利用規約")]),this._v(" "),n("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[this._v("プライバシーポリシー")])],1)])},[],!1,null,null,null);n.a=component.exports},150:function(t,n,e){"use strict";var r=e(130),l=e(135),o=e(136),_={components:{MainHeader:l.a,MainFooter:o.a},data:function(){return{currentUserId:null}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(n){t.currentUserId=null!=n?n.uid:null})}};n.a=_},212:function(t,n,e){"use strict";e.r(n);var r=e(150),l=e(15),component=Object(l.a)(r.a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("main-header",{attrs:{currentUserId:this.currentUserId}}),this._v(" "),this._m(0),this._v(" "),n("main-footer")],1)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"l-container"},[e("article",[e("p",[t._v("本ウェブサービスは、日報の作成・管理を行うサービスです。")]),t._v(" "),e("h2",[t._v("個人情報保護方針")]),t._v(" "),e("p",[t._v("当社は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。")]),t._v(" "),e("h2",[t._v("個人情報の管理")]),t._v("\n      当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。\n\n      "),e("h2",[t._v("個人情報の利用目的")]),t._v(" "),e("p"),t._v("本ウェブサービスでは、会員登録時やお問合せ時に、e-mailアドレス等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。\n      お客さまからお預かりした個人情報は、ユーザ認証やお問い合わせに対する返信の目的でのみ利用いたします。"),e("p"),t._v(" "),e("h2",[t._v("個人情報の第三者への開示・提供の禁止")]),t._v(" "),e("p",[t._v("当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。")]),t._v(" "),e("ul",[e("li",[t._v("お客さまの同意がある場合")]),t._v(" "),e("li",[t._v("お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合")]),t._v(" "),e("li",[t._v("法令に基づき開示することが必要である場合")])]),t._v(" "),e("h2",[t._v("個人情報の安全対策")]),t._v(" "),e("p",[t._v("当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。")]),t._v(" "),e("h2",[t._v("ご本人の照会")]),t._v(" "),e("p",[t._v("お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。")]),t._v(" "),e("h2",[t._v("法令、規範の遵守と見直し")]),t._v(" "),e("p",[t._v("当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。")]),t._v(" "),e("h2",[t._v("お問い合せ")]),t._v(" "),e("p",[t._v("当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。")]),t._v("\n\n      お問い合わせは"),e("a",{attrs:{href:"https://forms.gle/mjWV5f7XNbUXVUgW6",target:"_blank"}},[t._v("こちら(フォームへ)")])])])}],!1,null,null,null);n.default=component.exports}}]);