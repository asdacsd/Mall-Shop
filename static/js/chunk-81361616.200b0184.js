(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81361616"],{"2a47":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"question-answer"},[t._m(0),a("div",{staticClass:"qa-filter-container"},[a("ul",t._l(t.filterList,function(s,e){return a("li",{key:e,staticClass:"filter-item",class:{active:e==t.currentIndex},on:{click:function(s){return t.handleFilterClick(e)}}},[t._v("\n        "+t._s(s.title)+"\n      ")])}),0)]),a("ul",{staticClass:"qa-list"},t._l(t.qaList,function(s,e){return a("li",{key:e,staticClass:"qa-item"},[a("div",{staticClass:"avatar-box"},[a("img",{attrs:{src:s.avatar,alt:""}})]),a("div",{staticClass:"qa-content"},[a("h3",{staticClass:"title"},[t._v("\n          "+t._s(s.title)+"\n        ")]),s.answer?[a("p",{staticClass:"answer-status"},[a("span",{staticClass:"status"},[t._v("讲师回答")]),a("span",{staticClass:"split"},[t._v("/")]),a("span",{staticClass:"name"},[t._v(t._s(s.answer.teacher))])]),a("p",{staticClass:"answer"},[t._v("\n            "+t._s(s.answer.content)+"\n          ")])]:t._e(),a("p",{staticClass:"qa-bottom"},[a("span",[t._v(t._s(s.answers)+"回答")]),a("span",[t._v(t._s(s.views)+"浏览")]),a("span",[t._v(t._s(s.chapter))]),a("span",{staticClass:"time"},[t._v(t._s(s.time))])])],2),s.status&&1==s.status.code?a("div",{staticClass:"icon"},[t._v("\n        已采纳\n      ")]):t._e()])}),0)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"qa-search-container"},[a("div",{staticClass:"search-box"},[a("i",{staticClass:"iconfont"},[t._v("")]),a("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入问题"}})]),a("div",{staticClass:"search-btn"},[t._v("\n      我要提问\n    ")])])}],i=a("8897"),c=a("da71"),r={data:function(){return{currentIndex:0,qaList:[]}},created:function(){this.filterList=[{title:"全部",code:""},{title:"待解决",code:0},{title:"已采纳",code:1}]},mounted:function(){this.getLessonQa()},methods:{handleFilterClick:function(t){this.currentIndex=t,this.getLessonQa()},getLessonQa:function(){var t=this,s={id:this.$route.params.id,code:this.currentCode};this.qaList=[],Object(i["e"])(s).then(function(s){var a=s.code,e=s.data,n=s.msg;a===c["a"]?t.qaList=e:t.$message.error(n)}).catch(function(){t.$message.error("接口异常")})}},computed:{currentCode:function(){return this.filterList[this.currentIndex].code}}},l=r,o=(a("b6ef"),a("2877")),u=Object(o["a"])(l,e,n,!1,null,"3dc7db60",null);s["default"]=u.exports},b6ef:function(t,s,a){"use strict";var e=a("e866"),n=a.n(e);n.a},e866:function(t,s,a){}}]);