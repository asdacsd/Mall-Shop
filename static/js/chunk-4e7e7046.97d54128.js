(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e7e7046"],{"06c9":function(t,e,a){"use strict";var s=a("d696"),n=a.n(s);n.a},"4ead":function(t,e,a){"use strict";var s=a("eb1d"),n=a.n(s);n.a},aa01:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"read-detail"},[a("div",{staticClass:"read-header-container"},[a("div",{staticClass:"m-center"},[a("div",{staticClass:"header"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.readDetail.detailImg,alt:""}})]),a("div",{staticClass:"header-content"},[a("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.readDetail.title)+"\n          ")]),a("p",{staticClass:"desc"},[t._v("\n            "+t._s(t.readDetail.desc)+"\n          ")]),a("p",{staticClass:"other-info"},[t.readDetail.teacher?a("span",{staticClass:"teacher-info"},[t._v(t._s(t.readDetail.teacher.name)+" / "+t._s(t.readDetail.teacher.job))]):t._e(),a("span",{staticClass:"term"},[t._v("共"+t._s(t.readDetail.term)+"小节")]),a("span",{staticClass:"number"},[t._v("共"+t._s(t.readDetail.persons)+"人购买")])]),a("p",{staticClass:"price"},[t._v("\n            ¥ "+t._s(t.readDetail.price)+"\n          ")]),t._m(0)])])])]),a("div",{staticClass:"m-center"},[a("div",{staticClass:"read-list"},[a("dl",{staticClass:"left"},[t._m(1),t._l(t.readDetail.chapter,function(e,s){return a("dd",{key:s,staticClass:"read-item"},[a("dl",[a("dt",{staticClass:"chapter-title"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._l(e.data,function(e,s){return a("dd",{key:s},[a("p",[a("span",{staticClass:"term-title"},[t._v(t._s(e.title))]),e.isTry?a("span",{staticClass:"try-btn"},[t._v("试读")]):t._e()]),a("span",{staticClass:"time"},[t._v(t._s(e.time))])])})],2)])})],2),t.readRecommend.length?a("div",{staticClass:"right"},[a("recommend-read",{attrs:{title:"慕课专栏",list:t.readRecommend}})],1):t._e()])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"read-btn"},[a("span",{staticClass:"read"},[t._v("立即订阅")]),a("span",{staticClass:"try"},[t._v("试读")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dt",{staticClass:"read-title"},[t._v("\n          课程目录\n          "),a("span",{staticClass:"total"},[t._v("已更新14个小节")])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend"},[t.title?a("h3",{staticClass:"recommend-title"},[t._v("\n    "+t._s(t.title)+"\n    "),a("span",{staticClass:"more",on:{click:t.handleMoreClick}},[t._v("更多>")])]):t._e(),a("ul",t._l(t.list,function(e,s){return a("li",{key:s,staticClass:"recommend-item",on:{click:function(a){return t.handleReadItemClick(e)}}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.detailImg,alt:""}})]),a("div",{staticClass:"recommend-content"},[a("p",{staticClass:"name ellipsis"},[t._v("\n          "+t._s(e.title)+"\n        ")]),a("p",{staticClass:"other-info"},[a("span",{staticClass:"trem"},[t._v("\n            共"+t._s(e.term)+"小节\n          ")]),a("span",{staticClass:"number"},[t._v("\n            共"+t._s(e.persons)+"人购买\n          ")])]),a("p",{staticClass:"price"},[a("span",{staticClass:"price"},[t._v("\n            ¥"+t._s(e.price)+"\n          ")]),a("span",{staticClass:"subscribe"},[t._v("\n            立即订阅\n          ")])])])])}),0)])},r=[],c={props:{title:{type:String,default:""},list:{type:Array,default:function(){return[]}}},methods:{handleMoreClick:function(){this.$router.push("/read")},handleReadItemClick:function(t){this.$router.push("/read/".concat(t.id))}}},d=c,l=(a("06c9"),a("2877")),o=Object(l["a"])(d,i,r,!1,null,"a6c118b6",null),u=o.exports,m=a("bd03"),p=a("da71"),_={data:function(){return{readDetail:{},readRecommend:[]}},mounted:function(){this.getReadDetailData(),this.getRecommendReadData()},methods:{getReadDetailData:function(){var t=this,e=this.$route.params.id;Object(m["a"])(e).then(function(e){var a=e.code,s=e.data,n=e.msg;a===p["a"]?t.readDetail=s:(t.readDetail={},t.$message.error(n))}).catch(function(){t.readDetail={}})},getRecommendReadData:function(){var t=this;Object(m["d"])().then(function(e){var a=e.code,s=e.data,n=e.msg;a===p["a"]?t.readRecommend=s:(t.readRecommend=[],t.$message.error(n))}).catch(function(){t.readRecommend=[]})}},watch:{$route:function(t,e){t.params.id!==e.params.id&&this.getReadDetailData()}},components:{RecommendRead:u}},v=_,f=(a("4ead"),Object(l["a"])(v,s,n,!1,null,"970f26ba",null));e["default"]=f.exports},bd03:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"b",function(){return i}),a.d(e,"a",function(){return r}),a.d(e,"d",function(){return c});var s=a("a27e");function n(){return s["a"].get("/api/v1/read/types")}function i(t){return s["a"].get("/api/v1/read",{params:t})}function r(t){return s["a"].get("/api/v1/read/".concat(t))}function c(){return s["a"].get("/api/v1/read/recommend")}},d696:function(t,e,a){},eb1d:function(t,e,a){}}]);