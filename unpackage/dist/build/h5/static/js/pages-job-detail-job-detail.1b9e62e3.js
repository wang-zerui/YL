(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-job-detail-job-detail"],{"3bba":function(t,e,i){"use strict";i.r(e);var a=i("bd19"),n=i("74f4");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("41ba");var s,u=i("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"a700f7f2",null,!1,a["a"],s);e["default"]=c.exports},"41ba":function(t,e,i){"use strict";var a=i("d3e5"),n=i.n(a);n.a},"67b7":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o={data:function(){return{field:"默认领域",nature:"默认",reqNumber:10,job:{content:""},uuid:10}},methods:{getData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/POANDSE/xdjobs/content",data:{uuid:t.uuid,rd3session:111},header:{sessionid:"yhf"}});case 2:i=e.sent,0==i.success?uni.showToast({title:i.title}):t.job=i.data.data;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.uuid=t.uuid,void 0==this.uuid&&uni.switchTab({url:"../home/home"})},created:function(){this.getData()}};e.default=o},"69ab":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content2[data-v-a700f7f2]{margin-top:15;margin-bottom:%?100?%}.content2[data-v-a700f7f2],\r\n.content[data-v-a700f7f2]{padding:%?70?%;padding-top:%?15?%;line-height:%?60?%}.title[data-v-a700f7f2]{font-size:%?30?%;font-weight:530}.detail[data-v-a700f7f2]{font-size:%?22?%;margin-left:%?15?%}.foot-fixed[data-v-a700f7f2]{position:fixed;bottom:%?0?%;left:%?0?%;height:%?96?%;width:100%;background-color:#0062cc}.foot[data-v-a700f7f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:left;-webkit-align-items:left;align-items:left;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:100%;font-size:%?28?%}.vline[data-v-a700f7f2]{width:%?1?%;height:100%;border:solid %?1?% #000}.foot-left[data-v-a700f7f2],\r\n.foot-right[data-v-a700f7f2]{width:50%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.foot-left uni-image[data-v-a700f7f2]{height:%?46?%;width:%?46?%}.foot-right uni-image[data-v-a700f7f2]{height:%?46?%;width:%?46?%}",""]),t.exports=e},"74f4":function(t,e,i){"use strict";i.r(e);var a=i("67b7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},bd19:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={jobCard:i("dd08").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("job-card",{attrs:{uuid:t.job.uuid,title:t.job.title,company:t.job.company,collect:t.job.collect}},[a("v-uni-text",[t._v(t._s(t.field)+"（"+t._s(t.nature)+"性质）| "+t._s(t.reqNumber)+"人")])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v("职位详情")]),a("v-uni-view",{staticClass:"detail"},[a("v-uni-text",[t._v(t._s(t.job.content.replace("/\\n/","\n")))])],1)],1),a("v-uni-view",{staticClass:"content2"},[a("v-uni-view",{staticClass:"title"},[t._v("投递要求")]),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",[t._v("学历要求："+t._s(t.job.education))]),a("v-uni-view",[t._v("毕业年份："+t._s(2020))]),a("v-uni-view",[t._v("截止日期：2020-3-15")])],1)],1),a("v-uni-view",{staticClass:"foot-fixed"},[a("v-uni-view",{staticClass:"foot"},[a("v-uni-view",{staticClass:"foot-left"},[a("v-uni-image",{attrs:{src:t.job.collect?"../../static/collect-active.png":"../../static/collect.png"}}),a("v-uni-text",[t._v("收藏")])],1),a("v-uni-view",{staticClass:"vline"}),a("v-uni-view",{staticClass:"foot-right"},[a("v-uni-image",{attrs:{src:i("e662")}}),a("v-uni-text",[t._v("分享")])],1)],1)],1)],1)},o=[]},d3e5:function(t,e,i){var a=i("69ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("10226e52",a,!0,{sourceMap:!1,shadowMode:!1})},e662:function(t,e,i){t.exports=i.p+"static/img/share.7cbb223d.png"}}]);