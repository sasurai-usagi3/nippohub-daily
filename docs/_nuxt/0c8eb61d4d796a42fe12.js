(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(t,e,n){"use strict";var r=n(139),o=n.n(r),l={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===o.a.apps.length&&o.a.initializeApp(l),e.a=o.a},129:function(t,e,n){var content=n(135);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("6add6edb",content,!0,{sourceMap:!1})},130:function(t,e,n){var content=n(137);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("2bfdbba2",content,!0,{sourceMap:!1})},131:function(t,e,n){var content=n(142);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("9bfcc092",content,!0,{sourceMap:!1})},132:function(t,e,n){var content=n(144);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("24bfbbfc",content,!0,{sourceMap:!1})},133:function(t,e,n){var content=n(146);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("da02b386",content,!0,{sourceMap:!1})},134:function(t,e,n){"use strict";var r=n(129);n.n(r).a},135:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-header{padding:6px 0;box-shadow:0 -2px 20px 3px #000}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:24px}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:10px}",""])},136:function(t,e,n){"use strict";var r=n(130);n.n(r).a},137:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".u-mt-075{margin-top:.75em}.u-text-align-right{text-align:right}",""])},138:function(t,e,n){"use strict";var r=n(128),o={props:["currentUserId"],methods:{signOut:function(){r.a.auth().signOut()}}},l=(n(134),n(15)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"p-header"},[n("div",{staticClass:"p-header__container"},[n("h1",{staticClass:"p-page-title"},[t._v("NippoHub")]),t._v(" "),n("nav",[n("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?n("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[t._m(0),t._v(" "),t._m(1)]],2)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"p-auth-links__item"},[e("a",{attrs:{href:"/sign_in"}},[this._v("Sign in")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"p-auth-links__item"},[e("a",{attrs:{href:"/sign_up"}},[this._v("Sign up")])])}],!1,null,null,null);e.a=component.exports},141:function(t,e,n){"use strict";var r=n(131);n.n(r).a},142:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-oneline-input{height:2.5em;padding:.25em .5em;outline:none;border:.1em solid #ddd;border-radius:.3em;box-sizing:border-box}",""])},143:function(t,e,n){"use strict";var r=n(132);n.n(r).a},144:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-submit{background-color:#fff;border:.1em solid #ddd;border-radius:.3em;padding:.25em 2em}",""])},145:function(t,e,n){"use strict";var r=n(133);n.n(r).a},146:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-daily-report-form__date-form{width:20%}.p-daily-report-form__title-form{margin-left:calc(3% - .5em);width:77%}.p-daily-report-form__content-form{width:100%;resize:vertical;box-sizing:border-box;border:.1em solid #ddd;border-radius:.3em;padding:.5em;height:10em;outline:none}",""])},147:function(t,e,n){var content=n(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("9da3fc9a",content,!0,{sourceMap:!1})},151:function(t,e,n){"use strict";var r=n(128),o={props:["currentUserId","dailyReportId"],data:function(){return{date:"",title:"",content:""}},methods:{post:function(){var t=r.a.database();null!=this.currentUserId&&(null!=this.dailyReportId?t.ref("daily_reports/".concat(this.dailyReportId)).update({date:this.date,title:this.title,content:this.content}):(t.ref("daily_reports/").push({date:this.date,title:this.title,content:this.content,createdAt:Date.now(),userId:this.currentUserId}),this.date=null,this.title="",this.content=""))}},mounted:function(){var t=this,e=r.a.database();null!=this.dailyReportId&&e.ref("/daily_reports/".concat(this.dailyReportId)).once("value",function(e){var n=e.val();if(null!=n){var r=new Date(n.createdAt);"".concat(r.getFullYear(),"-").concat(r.getMonth(),"-").concat(r.getDate());t.date=n.date,t.title=n.title,t.content=n.content}})}},l=(n(141),n(143),n(145),n(136),n(15)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"p-daily-report-form",on:{submit:function(e){return e.preventDefault(),t.post(e)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"p-oneline-input p-daily-report-form__date-form",attrs:{type:"date",placeholder:"日付"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"p-oneline-input p-daily-report-form__title-form",attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"u-mt-075",staticStyle:{"line-height":"1"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"p-daily-report-form__content-form",attrs:{name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-text-align-right u-mt-075"},[e("button",{staticClass:"p-submit",attrs:{type:"submit"}},[this._v("送信")])])}],!1,null,null,null);e.a=component.exports},154:function(t,e,n){"use strict";var r=n(147);n.n(r).a},155:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-daily-report-list{margin:0;padding:0;list-style-type:none;border-top:.1em solid #ddd;border-bottom:.1em solid #ddd}.p-daily-report-list__item{display:flex;justify-content:space-between;align-items:center;padding:.5em 1.5em}.p-daily-report-list__item:nth-last-of-type(n+2){border-bottom:.1em solid #ddd}h3{margin:0}.u-mt-05{margin-top:.5em}",""])},162:function(t,e,n){var content=n(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("2907cf9f",content,!0,{sourceMap:!1})},165:function(t,e,n){"use strict";var r=n(128),o={props:["currentUserId"],data:function(){return{dailyReports:[]}},mounted:function(){var t=this,e=r.a.database().ref("daily_reports/");null!=this.currentUserId&&(e.off(),e.orderByChild("userId").equalTo(this.currentUserId).on("value",function(e){var n=e.val(),r=[];for(var o in n){var l=n[o],c=new Date(l.createdAt),d=function(t){return"0".concat(t).slice(-2)},f="".concat(c.getFullYear(),"-").concat(d(c.getMonth()+1),"-").concat(d(c.getDate())," ").concat(d(c.getHours()),":").concat(d(c.getMinutes()));r.push({id:o,title:l.title,createdAt:f,date:l.date})}t.dailyReports=r}))}},l=(n(154),n(15)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"p-daily-report-list u-mt-05"},t._l(t.dailyReports,function(e){return n("li",{staticClass:"p-daily-report-list__item"},[n("a",{attrs:{href:"/daily_reports/"+e.id}},[n("h3",[t._v(t._s(e.date)+" "+t._s(e.title))])]),t._v(" "),n("a",{attrs:{href:"/daily_reports/"+e.id+"/edit"}},[t._v("編集")])])}),0)},[],!1,null,null,null);e.a=component.exports},191:function(t,e,n){"use strict";var r=n(162);n.n(r).a},192:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-sub-title{font-size:20px;margin:0}",""])},202:function(t,e,n){"use strict";n.r(e);var r=n(128),o=n(138),l=n(151),c=n(165),d={components:{DailyReportForm:l.a,DailyReportList:c.a,MainHeader:o.a},data:function(){return{currentUserId:null}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){t.currentUserId=null!=e?e.uid:null})}},f=(n(191),n(15)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-header",{attrs:{currentUserId:t.currentUserId}}),t._v(" "),null!=t.currentUserId?n("div",{staticClass:"l-container"},[n("daily-report-form",{attrs:{currentUserId:t.currentUserId}}),t._v(" "),n("div",[n("h2",{staticClass:"p-sub-title"},[t._v("過去の日報(最大30件)")]),t._v(" "),n("daily-report-list",{attrs:{currentUserId:t.currentUserId}})],1)],1):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);