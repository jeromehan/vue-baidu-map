webpackJsonp([20],{"3WpM":function(s,t,a){var n=a("VU/8")(a("Dbqf"),a("Dsh+"),null,null);s.exports=n.exports},Dbqf:function(s,t,a){var n,l,_;!function(a,v){l=[s,t],n=v,void 0!==(_="function"==typeof n?n.apply(t,l):n)&&(s.exports=_)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{zoom:10}},methods:{addZoom:function(s){this.zoom=s}}},s.exports=t.default})},"Dsh+":function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("自定义控件")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("插入自定义控件")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(2),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{zoom:s.zoom,center:{lng:116.404,lat:39.915}}},[a("bm-control",[a("button",{on:{click:function(t){s.addZoom(19)}}},[s._v("缩放至最大")]),s._v(" "),a("button",{on:{click:function(t){s.addZoom(10)}}},[s._v("还原")]),s._v(" "),a("button",{on:{click:function(t){s.addZoom(3)}}},[s._v("缩放至最小")])])],1)],1)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmControl")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("anchor")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("ControlAnchor")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}}),s._v(" "),a("td",[s._v("控件停靠位置，默认为左上。")])]),s._v(" "),a("tr",[a("td",[s._v("offset")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("Size")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}}),s._v(" "),a("td",[s._v("控件偏移值")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(19)"')]),s._v(">")]),s._v("缩放至最大"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(10)"')]),s._v(">")]),s._v("还原"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(3)"')]),s._v(">")]),s._v("缩放至最小"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    addZoom (level) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".zoom = level\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},yWoZ:function(s,t,a){s.exports=a("3WpM")}});