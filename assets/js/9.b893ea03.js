(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{444:function(e,t,i){},543:function(e,t,i){"use strict";i(444)},553:function(e,t,i){"use strict";i.r(t);i(239),i(68);var a={props:{bvid:{type:String,default:null,required:!0},page:{type:Number,default:1,required:!1},highQuality:{type:Boolean,default:!1,required:!1},danmaku:{type:Boolean,default:!1,required:!1}},data:function(){return{src:"//player.bilibili.com/player.html?bvid=".concat(this.bvid,"&page=").concat(this.page,"&high_quality=").concat(this.highQuality?1:0,"&danmaku=").concat(this.danmaku)}}},n=(i(543),i(18)),l=Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{staticClass:"bbplayer",attrs:{src:this.src,allowfullscreen:"allowfullscreen",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"}}),this._v(" "),t("script",[this._v('\n    var bbplayers = document.getElementsByClassName("bbplayer");\n    bbplayers.forEach(function (item, index, arr) {\n      item.style.height = item.scrollWidth * 0.76 + "px";\n    });\n    window.onresize = function () {\n      bbplayers.forEach(function (item, index, arr) {\n        item.style.height = item.scrollWidth * 0.76 + "px";\n      });\n    };\n  ')])])}),[],!1,null,"ca4f515e",null);t.default=l.exports}}]);