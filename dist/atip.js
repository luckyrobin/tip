define("arale/tip/1.1.2/atip",["$","./tip","arale/popup/1.1.0/popup","arale/overlay/1.1.0/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/position/1.0.0/position","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events","./atip.tpl"],function(a,b,c){var d=a("$"),e=a("./tip");a("alice/poptip/1.0.0/poptip.css");var f=e.extend({attrs:{template:a("./atip.tpl"),content:"这是一个提示框",arrowPosition:7,theme:"yellow",inViewport:!1,width:"auto",height:"auto"},setup:function(){this._originArrowPosition=this.get("arrowPosition"),f.superclass.setup.call(this)},show:function(){f.superclass.show.call(this),this._makesureInViewport()},_makesureInViewport:function(){if(this.get("inViewport")){var a=this._originArrowPosition,b=d(window).scrollTop(),c=d(window).outerHeight(),e=this.element.height()+this.get("distance"),f=d(this.get("trigger")).offset().top,g={1:"5",5:"1",7:"11",11:"7"};(11===a||1===a)&&f>b+c-e?this.set("arrowPosition",g[a]):(7===a||5===a)&&b+e>f?this.set("arrowPosition",g[a]):this.set("arrowPosition",this._originArrowPosition)}},_onRenderArrowPosition:function(a,b){a=parseInt(a,10);var c=this.$(".ui-poptip-arrow");c.removeClass("ui-poptip-arrow-"+b).addClass("ui-poptip-arrow-"+a);var d="",e=0;10===a?(d="right",e=20):11===a?(d="down",e=22):1===a?(d="down",e=-22):2===a?(d="left",e=20):5===a?(d="up",e=-22):7===a&&(d="up",e=22),this.set("direction",d),this.set("arrowShift",e),this._setAlign()},_onRenderWidth:function(a){this.$('[data-role="content"]').css("width",a)},_onRenderHeight:function(a){this.$('[data-role="content"]').css("height",a)},_onRenderTheme:function(a,b){this.element.removeClass("ui-poptip-"+b),this.element.addClass("ui-poptip-"+a)}});c.exports=f}),define("arale/tip/1.1.2/tip",["arale/popup/1.1.0/popup","$","arale/overlay/1.1.0/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/position/1.0.0/position","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events"],function(a,b,c){var d=a("arale/popup/1.1.0/popup"),e=d.extend({attrs:{content:null,direction:"up",distance:8,arrowShift:22,pointPos:"50%"},_setAlign:function(){var a={},b=this.get("arrowShift"),c=this.get("distance"),d=this.get("pointPos"),e=this.get("direction");0>b&&(b="100%"+b),"up"===e?(a.baseXY=[d,0],a.selfXY=[b,"100%+"+c]):"down"===e?(a.baseXY=[d,"100%+"+c],a.selfXY=[b,0]):"left"===e?(a.baseXY=[0,d],a.selfXY=["100%+"+c,b]):"right"===e&&(a.baseXY=["100%+"+c,d],a.selfXY=[0,b]),this.set("align",a)},setup:function(){e.superclass.setup.call(this),this._setAlign()},_onRenderContent:function(a){var b=this.$('[data-role="content"]');"string"!=typeof a&&(a=a.call(this)),b&&b.html(a)}});c.exports=e}),define("alice/poptip/1.0.0/poptip.css",[],function(){seajs.importStyle("@charset \"utf-8\";.ui-poptip{color:#DB7C22;z-index:101;font-size:12px;line-height:1.5;zoom:1}.ui-poptip-shadow{background-color:rgba(229,169,107,.15);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#26e5a96b, endColorstr=#26e5a96b);border-radius:2px;padding:2px;zoom:1;_display:inline}.ui-poptip-container{position:relative;background-color:#FFFCEF;border:1px solid #ffbb76;border-radius:2px;padding:5px 15px;zoom:1;_display:inline}.ui-poptip:after,.ui-poptip-shadow:after,.ui-poptip-container:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}a.ui-poptip-close{position:absolute;right:3px;top:3px;border:1px solid #ffc891;text-decoration:none;border-radius:3px;width:12px;height:12px;font-family:tahoma;color:#dd7e00;line-height:10px;*line-height:12px;text-align:center;font-size:14px;background:#ffd7af;background:-webkit-gradient(linear,left top,left bottom,from(#FFF0E1),to(#FFE7CD));background:-moz-linear-gradient(top,#FFF0E1,#FFE7CD);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF0E1', endColorstr='#FFE7CD');background:-o-linear-gradient(top,#FFF0E1,#FFE7CD);background:linear-gradient(top,#FFF0E1,#FFE7CD);overflow:hidden}a.ui-poptip-close:hover{border:1px solid #ffb24c;text-decoration:none;color:#dd7e00;background:#ffd7af;background:-webkit-gradient(linear,left top,left bottom,from(#FFE5CA),to(#FFCC98));background:-moz-linear-gradient(top,#FFE5CA,#FFCC98);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFE5CA', endColorstr='#FFCC98');background:-o-linear-gradient(top,#FFE5CA,#FFCC98);background:linear-gradient(top,#FFE5CA,#FFCC98)}.ui-poptip-arrow,.ui-poptip-arrow em,.ui-poptip-arrow span{position:absolute;font-size:14px;font-family:SimSun,Hiragino Sans GB;font-style:normal;line-height:21px;z-index:10;*zoom:1}.ui-poptip-arrow em{color:#ffbb76}.ui-poptip-arrow span{color:#FFFCEF;top:0;left:0}.ui-poptip-arrow-10{top:6px;left:-6px}.ui-poptip-arrow-10 em{top:0;left:-1px}.ui-poptip-arrow-2{top:6px;right:7px}.ui-poptip-arrow-2 em{top:0;left:1px}.ui-poptip-arrow-11{left:14px;top:-10px;top:-9px\\0}.ui-poptip-arrow-11 em{top:-1px;left:0}.ui-poptip-arrow-1{right:28px;top:-10px;top:-9px\\0}.ui-poptip-arrow-1 em{top:-1px;left:0}.ui-poptip-arrow-7{left:14px;bottom:10px}.ui-poptip-arrow-7 em{top:1px;left:0}.ui-poptip-arrow-5{right:28px;bottom:10px}.ui-poptip-arrow-5 em{top:1px;left:0}:root .ui-poptip-shadow{FILTER:none\\9}.ui-poptip-blue{color:#4d4d4d}.ui-poptip-blue .ui-poptip-shadow{background-color:rgba(0,0,0,.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000)}.ui-poptip-blue .ui-poptip-container{background-color:#F8FCFF;border:1px solid #B9C8D3}.ui-poptip-blue .ui-poptip-arrow em{color:#B9C8D3}.ui-poptip-blue .ui-poptip-arrow span{color:#F8FCFF}.ui-poptip-white{color:#333}.ui-poptip-white .ui-poptip-shadow{background-color:rgba(0,0,0,.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000)}.ui-poptip-white .ui-poptip-container{background-color:#fff;border:1px solid #b1b1b1}.ui-poptip-white .ui-poptip-arrow em{color:#b1b1b1}.ui-poptip-white .ui-poptip-arrow span{color:#fff}")}),define("arale/tip/1.1.2/atip.tpl",[],'<div class="ui-poptip">\n    <div class="ui-poptip-shadow">\n    <div class="ui-poptip-container">\n        <div class="ui-poptip-arrow">\n            <em>◆</em>\n            <span>◆</span>\n        </div>\n        <div class="ui-poptip-content" data-role="content">\n        </div>\n    </div>\n    </div>\n</div>\n\n');
