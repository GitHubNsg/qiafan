(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/help/favor"],{"146d":function(t,n,e){"use strict";e.r(n);var a=e("f2b6"),o=e("9b50");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},"2c90":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{waterfall:"",list:[],_isEnded:!1,page:1}},onLoad:function(t){this.loadData()},methods:{news:function(n){t.navigateTo({url:"./news?id="+n.currentTarget.id})},loadData:function(){var t=this;this.$net.fetch((function(n){n.page.pages<=n.page.current&&(t._isEnded=!0),t.list=t.list.concat(n.list)}),this.$net.getFavor,{page:t.page},"post")},onPullDownRefresh:function(){this.list=[],this.page=1,this._isEnded=!1,this.loadData()},onReachBottom:function(){this.loadMore()},loadMore:function(){this._isEnded?t.showToast({title:"暂无更多数据",icon:"none"}):(this.page++,this.loadData())}}};n.default=e}).call(this,e("543d")["default"])},"2f37":function(t,n,e){"use strict";(function(t){e("16bf");a(e("66fd"));var n=a(e("146d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"9b50":function(t,n,e){"use strict";e.r(n);var a=e("2c90"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},f2b6:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["2f37","common/runtime","common/vendor"]]]);