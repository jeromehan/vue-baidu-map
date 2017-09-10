webpackJsonp([15],{"+RDb":function(t,s,e){var n=e("VU/8")(e("ahRV"),e("evSh"),null,null);t.exports=n.exports},Ptac:function(t,s,e){t.exports=e("+RDb")},ahRV:function(t,s,e){var n,a,i;!function(e,l){a=[t,s],n=l,void 0!==(i="function"==typeof n?n.apply(s,a):n)&&(t.exports=i)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{infoWindow:{show:!0,contents:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}},methods:{infoWindowClose:function(t){this.infoWindow.show=!1},infoWindowOpen:function(t){this.infoWindow.show=!0},clear:function(){this.infoWindow.contents=""}}},t.exports=s.default})},evSh:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[[e("h1",[t._v("Info Window Overlay")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Examples")]),t._v(" "),e("h3",[t._v("Add a info window on the map")]),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[e("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[e("bm-info-window",{attrs:{position:{lng:116.404,lat:39.915},title:"Info Window Title",show:t.infoWindow.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[e("p",{domProps:{textContent:t._s(t.infoWindow.contents)}}),t._v(" "),e("button",{on:{click:t.clear}},[t._v("Clear")])])],1),t._v(" "),e("md-table",[e("md-table-header",[e("md-table-head",[t._v("Toggle")]),t._v(" "),e("md-table-head",[t._v("Content")])],1),t._v(" "),e("md-table-body",[e("md-table-row",[e("md-table-cell",[e("md-switch",{staticClass:"md-primary",model:{value:t.infoWindow.show,callback:function(s){t.infoWindow.show=s},expression:"infoWindow.show"}})],1),t._v(" "),e("md-table-cell",[e("md-input-container",[e("md-textarea",{model:{value:t.infoWindow.contents,callback:function(s){t.infoWindow.contents=s},expression:"infoWindow.contents"}})],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("BmInfoWindow")]),t._v(" component renders the child nodes in slot mode.\nIf your browser supports the "),e("code",[t._v("MutationObserver")]),t._v(" function, the size of the info windows are automatically adjusted when you update the child nodes. If it's not supported, you need to manually call the instance function "),e("code",[t._v("redraw ()")]),t._v(" to update view.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",[t._v("Whether the info window is opened or not.")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Point")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Position of the info window.")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Width of the info window. Ranges: 0, 220 - 730.")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Height of the info window. Ranges:0, 60 - 650.")])]),t._v(" "),e("tr",[e("td",[t._v("maxWidth")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("MaxWidth of the info window.")])]),t._v(" "),e("tr",[e("td",[t._v("offset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Offset of the info window.")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Title message of the info window.")])]),t._v(" "),e("tr",[e("td",[t._v("autoPan")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",[t._v("Whether auto moving when info window is opened.")])]),t._v(" "),e("tr",[e("td",[t._v("closeOnClick")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",[t._v("Whether close the info window when clicking on the map.")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Custom SMS content.")])]),t._v(" "),e("tr",[e("td",[t._v("maximize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",[t._v("Enable maximize.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point}")]),t._v(" "),e("td",[t._v("Triggers when the info window is closed.")])]),t._v(" "),e("tr",[e("td",[t._v("open")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point}")]),t._v(" "),e("td",[t._v("Triggers when the info window is opened.")])]),t._v(" "),e("tr",[e("td",[t._v("maximize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),e("td",[t._v("Triggers when the info window is maximized.")])]),t._v(" "),e("tr",[e("td",[t._v("restore")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),e("td",[t._v("Triggers when the info window is restored.")])]),t._v(" "),e("tr",[e("td",[t._v("clickclose")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),e("td",[t._v("Triggers when clicking the close button in the info window.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Info Window Title"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":show")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"infoWindow.show"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@close")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"infoWindowClose"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@open")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-text")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"infoWindow.contents"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"clear"')]),t._v(">")]),t._v("Clear"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),e("span",{staticClass:"hljs-attr"},[t._v("infoWindow")]),t._v(": {\n        "),e("span",{staticClass:"hljs-attr"},[t._v("show")]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n        "),e("span",{staticClass:"hljs-attr"},[t._v("contents")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'")]),t._v("\n      }\n    }\n  },\n  "),e("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    infoWindowClose (e) {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.show = "),e("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    },\n    infoWindowOpen (e) {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.show = "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    },\n    clear () {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.contents = "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n    }\n  }\n}\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}}});