webpackJsonp([3],{"1Ieq":function(t,s,a){t.exports=a("60LC")},"1kkG":function(t,s,a){var e=a("iosC");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("1c09bd58",e,!0)},"5jE4":function(t,s,a){var e,n,l;!function(a,v){n=[t,s],e=v,void 0!==(l="function"==typeof e?e.apply(s,n):e)&&(t.exports=l)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{keyword:""}}},t.exports=s.default})},"60LC":function(t,s,a){a("1kkG");var e=a("VU/8")(a("5jE4"),a("r9Od"),null,null);t.exports=e.exports},iosC:function(t,s,a){s=t.exports=a("FZ+f")(),s.push([t.i,".tangram-suggestion-main{z-index:1}",""])},r9Od:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Auto Complete (Not Recommended)")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Notice")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("CSS Hooks")]),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),a("h3",[t._v("Using CustomControls, AutoComplete and LocalSearch component")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(5),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{attrs:{center:{lng:116.403765,lat:39.91485},zoom:11}},[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-control",{attrs:{offset:{width:10,height:10}}},[a("bm-auto-complete",{model:{value:t.keyword,callback:function(s){t.keyword=s},expression:"keyword"}},[a("text-field",{attrs:{placeholder:"Keywords"}})],1)],1),t._v(" "),a("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmAutoComplete")]),t._v(" component renders an"),a("code",[t._v("input")]),t._v(" element by default. You can define your own form component in the slot to instead.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("AutoComplete is a "),a("strong",[t._v("not recommended")]),t._v(" class by the offical BaiduMap JS API because of its poor customization.")]),t._v(" "),a("li",[t._v("If you have advanced UI customization requirements for the auto completed search box, It's recommended to use the "),a("a",{attrs:{href:"http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi"}},[t._v("BaiduMap Web API")]),t._v(" for requesets, and uses the response data with your custom UI components.")]),t._v(" "),a("li",[t._v("The popup of this component is sometimes overridden by another element, and you need to manually wrap the CSS class "),a("code",[t._v(".tangram-suggestion-main")]),t._v(" and specify the"),a("code",[t._v("z-index")]),t._v(" attribute to adjust it.")]),t._v(" "),a("li",[t._v("This component may be removed from version 1.0.0 and implemented in a better way in other component libraries.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, Map, Point")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("map")]),t._v(" "),a("td",[t._v("Set the range of the returned result.")])]),t._v(" "),a("tr",[a("td",[t._v("types")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'city', None")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("The response data type. 'city' or none.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("AutocompleteResult")]),t._v(" "),a("td",[t._v("Triggers when after searching.")])]),t._v(" "),a("tr",[a("td",[t._v("confirm")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type,target,item}")]),t._v(" "),a("td",[t._v("Triggers when select an item.")])]),t._v(" "),a("tr",[a("td",[t._v("highlight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type,target,fromitem,toitem}")]),t._v(" "),a("td",[t._v("Triggers when highlight an item.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tangram-suggestion-main")]),t._v(" "),a("td",[t._v("The popup CSS hook.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.403765, lat: 39.914850}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":offset")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{width: '10px', height: '10px'}\"")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-auto-complete")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"keyword"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("search-field")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Keywords"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("search-field")]),t._v(">")]),t._v(" "),a("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- This is a custom search box component --\x3e")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-auto-complete")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-local-search")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":keyword")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"keyword"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" >")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-local-search")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("keyword")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),a("span",{staticClass:"css"},[t._v("\n"),a("span",{staticClass:"hljs-selector-class"},[t._v(".tangram-suggestion-main")]),t._v(" {\n  "),a("span",{staticClass:"hljs-attribute"},[t._v("z-index")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])}]}}});