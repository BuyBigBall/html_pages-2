/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
//jQuery mousewheel
/*
$("html,body").bind("mousewheel",bodyScroll)
var bodyScroll = function (delta,aS,aQ,deltaY){
	delta.preventDefault();
	if (deltaY > 0) {
		if(NOW>0 && SCROLL == true) {
			NOW-- 
			scrollAnimate(NOW)
		}
	} else if (deltaY < 0) {
			if(NOW<LIMIT && SCROLL == true) {
				NOW++ 
				scrollAnimate(NOW)
		}
	}
	return false;
}
*/
(function(a) {
	function d(b) {
		var c = b || window.event,
			d = [].slice.call(arguments, 1),
			e = 0,
			f = !0,
			g = 0,
			h = 0;
		return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
	}
	var b = ["DOMMouseScroll", "mousewheel"] ;
	if (a.event.fixHooks) for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
			else this.onmousewheel = d
		},
		teardown: function() {
			if (this.removeEventListener) for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
			else this.onmousewheel = null
		}
	},
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery);

//jQuery animate easing method
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/***********************
Copyright C 2012 sunyang
FileName: jQuery.plus.extend.js
Author: adis
Version: 1.0
Date: 2012-11-15
Description: 整合常用javascript方式
************************/

jQuery.fn.extend({
	//去除连接和表单元素虚线
	outline:function(){
		return this.each(function(){
			var _this = $(this) ;
			_this.focus(function(){
				_this.blur()
			})
		})
	},
	//添加类名并且清除同类该类名
	tabClass:function(className) {
		return this.each(function(){
			$(this).addClass(className).siblings().removeClass(className)
		})
	},
	//元素划过样式切换
	hoverClass:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			_this.hover(function(){
				_this.addClass(className)
			},function(){
				_this.removeClass(className)
			})
		})
	},
	//表单文本元素聚焦样式切换
	focusClass:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			_this.focus(function(){
				_this.addClass(className)
			}).blur(function(){
				_this.removeClass(className)
			})	
		})
	},
	//表单文本元素聚焦默认提示文本
	defaultValue:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			var def = _this.val() ;
			_this.focus(function(){
				if(_this.val() == def) _this.val("")
			}).blur(function(){
				if(_this.val().length == 0) _this.val(def)
			})	
		})		
	},
	//表单文本元素聚焦默认提示文本
	tips:function(opacity){
		return this.each(function(){
			var _this = $(this) ;
			var tips = _this.next() ;
			var tipsValue = tips.text() ;
			if(_this.val().length != 0) tips.hide() ;
			tips.click(function(){
				_this.focus()
			})
			_this.focus(function(){
				tips.css({opacity:opacity})
			}).blur(function(){
				if(_this.val().length == 0) tips.show().css({opacity:1})
			}).keydown(function(){
				tips.hide()
			})
		})
	},
	//返回顶部按钮
	pageTop:function(){
		return this.each(function(){
			var _this = $(this) ;
			_this.bind("click",function(){
				$("html,body").stop().animate({scrollTop:0}) ;
				return false ;
			})
		})
	},
	//返回底部按钮
	pageBottom:function(){
		return this.each(function(){
			var _this = $(this) ;
			_this.bind("click",function(){
				$("html,body").stop().animate({scrollTop:$(document).height()}) ;
				return false ;
			})
		})
	},
	//表单全选中按钮
	allSelected:function(controlElm){
		return this.each(function(){
			var _this = $(this) ;
			var controlElm = $(controlElm)
			_this.bind("click",function(){
				if(this.checked) {
					controlElm.attr("checked","checked")
				} else {
					controlElm.removeAttr("checked")
				}
			})
			controlElm.bind("click",function(){
				if(this.checked) {
					var success = controlElm.length-1 ;
					var selected = 0 ;
					controlElm.each(function(){
						if(this.checked) selected++
						if(selected == success) _this.attr("checked","checked")
					})
				} else {
					_this.removeAttr("checked")
				}
			})
		})
	}
})

jQuery.extend({
	//$.tab({parentElm:"parentElm",tabElm:"tabElm",switchElm:"switchElm",trigger:"trigger",tabClassName:"tabClassName",tabSwitchClassName:"tabSwitchClassName"})
	tab:function(opt){
		var def = {
			trigger:"hover",
			tabClassName:"selected",
			tabSwitchClassName:"block"
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm)
		var tabElm = $(opt.tabElm) ;
		var switchElm = $(opt.switchElm) ;
		var trigger = opt.trigger ;
		var tabClassName = opt.tabClassName ;
		var tabSwitchClassName = opt.tabSwitchClassName ;
		tabElm.bind(trigger,function(){
			var _this = $(this) ;
			var _thisIndex = _this.index() ;
			_this.tabClass(tabClassName) ;
			switchElm.eq(_thisIndex).tabClass(tabSwitchClassName) ;
		})
	},	//$.scroll({parentElm:"parentElm",scrollElm:"scrollElm",direction:"direction",prevElm:"prevElm",nextElm:"nextElm",controlElm:"controlElm",limitNum:limitNum,delay:delay,transition:transition,easing:"easing",space:space,controlElmClassName:"controlElmClassName",scrollElmChild:"scrollElmChild",autoScroll:true})
	scroll:function(opt){
		var def = {
			direction:"marginLeft",
			prevElm:null,
			nextElm:null,
			controlElm:null,
			limitNum:1,
			delay:7000,
			transition:1000,
			easing:"swing",
			controlElmClassName:"selected",
			scrollElmChild:"li",
			autoScroll:true
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm) ;
		var scrollElm = $(opt.scrollElm) ;
		var direction = opt.direction ;
		var prevElm = $(opt.prevElm) ;
		var nextElm = $(opt.nextElm) ;
		var controlElm = $(opt.controlElm) ;
		var limitNum = opt.limitNum ;
		var delay = opt.delay ;
		var transition = opt.transition ;
		var easing = opt.easing ;
		var space = opt.space ;
		var controlElmClassName = opt.controlElmClassName ;
		var scrollIndex = 0 ;
		var scrollElmLength = scrollElm.find(opt.scrollElmChild).length ;
		var limit = scrollElmLength-limitNum ;
		var distance = 0 ;
		var autoScroll = opt.autoScroll ;
		if(autoScroll) {
			var scrollSetInter = function(){
				scrollIndex+1>limit?scrollIndex=0:scrollIndex++ ;
				scrollAnimate(scrollIndex)
			}
			var scrollTimer = setInterval(scrollSetInter,delay)
			parentElm.hover(function(){
				clearInterval(scrollTimer)
			},function(){
				scrollTimer = setInterval(scrollSetInter,delay)
			})
		}
		prevElm.bind("click",function(){
			scrollIndex-1<0?scrollIndex=limit:scrollIndex-- ;
			scrollAnimate(scrollIndex)
		})
		nextElm.bind("click",function(){
			scrollIndex+1>limit?scrollIndex=0:scrollIndex++ ;
			scrollAnimate(scrollIndex)
		})
		controlElm.bind("click",function(){
			var _this = $(this) ;
			var _thisIndex = _this.index() ;
			scrollIndex = _thisIndex ;
			scrollAnimate(scrollIndex)
		})
		function scrollAnimate(target) {
			distance = -(target*space) ;
			controlElm.eq(target).tabClass(controlElmClassName) ;
			eval('scrollElm.stop().animate({'+direction+':distance},transition,easing)')
		}
	},//$.scrollLoop({parentElm:"parentElm",scrollElm:"scrollElm",direction:"direction",prevElm:"prevElm",nextElm:"nextElm",delay:delay,transition:transition,easing:"easing",space:space,scrollElmChild:"scrollElmChild",autoScroll:true})
	scrollLoop:function(opt){
		var def = {
			direction:"marginLeft",
			prevElm:null,
			nextElm:null,
			delay:7000,
			transition:1000,
			easing:"swing",
			scrollElmChild:"li"
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm) ;
		var scrollElm = $(opt.scrollElm) ;
		var direction = opt.direction ;
		var prevElm = $(opt.prevElm) ;
		var nextElm = $(opt.nextElm) ;
		var delay = opt.delay ;
		var transition = opt.transition ;
		var easing = opt.easing ;
		var space = -opt.space ;
		var scrollLoopLock = true ;
		var scrollLoopIndex = 0 ;
		var scrollElmLength = scrollElm.find(opt.scrollElmChild).length ;
		var scrollLoopLimit = scrollElmLength - 1 ;
		var autoScroll = opt.autoScroll ;
		var prevScrollLoop = function(){
			if(scrollLoopLock) {
				scrollLoopLock = false ;
				scrollLoopIndex-1<0?scrollLoopIndex=scrollLoopLimit:scrollLoopIndex-- ;
				eval('scrollElm.css({'+direction+':space}) ;')
				scrollElm.find(opt.scrollElmChild+":last").prependTo(opt.scrollElm) ;
				eval('scrollElm.animate({'+direction+':0},transition,easing,function(){ scrollLoopLock = true ; })')
			}
		}
		var nextScrollLoop = function(){
			if(scrollLoopLock) {
				scrollLoopLock = false ;
				scrollLoopIndex+1>scrollLoopLimit?scrollLoopIndex=0:scrollLoopIndex++ ;
				eval('scrollElm.animate({'+direction+':space},transition,easing,function(){ scrollElm.find(opt.scrollElmChild+":first").appendTo(this) ; scrollElm.css({'+direction+':0}) ; scrollLoopLock = true ; })')
			}
		}
		if(autoScroll) {
			var scrollLoopSetInter = nextScrollLoop ;
			var scrollLoopTimer = setInterval(scrollLoopSetInter,delay) ;
			parentElm.hover(function(){
				clearInterval(scrollLoopTimer) ;
			},function(){
				scrollLoopTimer = setInterval(scrollLoopSetInter,delay) ;
			})
		}
		prevElm.bind("click",prevScrollLoop) ;
		nextElm.bind("click",nextScrollLoop) ;
	},
	//$.loginAlert({overMaskDom:"overMaskDom",loginDom:"loginDom",openDom:"openDom",overMaskTransparent:overMaskTransparent})
	loginAlert:function(opt){
		var def = {
			overMaskTransparent:0.6
		}
		var opt = $.extend(def,opt) ;
		var overMaskDom = $(opt.overMaskDom) ;
		var loginDom = $(opt.loginDom) ;
		var openDom = $(opt.openDom) ;
		var overMaskTransparent = opt.overMaskTransparent ;
		openDom.click(function(){
			overMaskDom.css({display:"block",opacity:0})
			loginDom.css({display:"block",opacity:0})
			overMaskDom.stop().animate({opacity:overMaskTransparent})
			loginDom.stop().animate({opacity:1})
		})
		overMaskDom.click(function(){
			overMaskDom.stop().animate({opacity:0},function(){
				overMaskDom.hide()
			})
			loginDom.stop().animate({opacity:0},function(){
				loginDom.hide()
			})
		})
	},
	drag:function(opt){
		var def = {
			center:true
		}
		var opt = $.extend(def,opt) ;
		var dragElm = $(opt.dragElm) ;
		var wrapElm = $(opt.wrapElm) ;
		var center = opt.center ;
		var startX = 0 ;
		var startY = 0 ;
		var startLeft = 0 ; 
		var startTop = 0 ;
		if(center) dragElm.css({top:-((dragElm.height() - wrapElm.height())/2),left:-((dragElm.width() - wrapElm.width())/2)}) ;
		dragElm.bind("mousedown",startDrag) ;
		function startDrag(e) {
			var e = e || window.event ;
			if (((e.target && e.button == 0) || e.button == 1)) {
				startX = e.clientX ;
				startY = e.clientY ;
				startLeft = dragElm.get(0).offsetLeft ;
				startTop = dragElm.get(0).offsetTop ;
				wrapElm.bind("mousemove",doDrag) ;
				wrapElm.bind("mouseup",stopDarg) ;
				wrapElm.bind("mouseleave",stopDarg) ;
			}
			return false ;
		}
		function doDrag(e) {
			var e = e || window.event ;
			var nowX = e.clientX - startX + startLeft ;
			var nowY = e.clientY - startY + startTop ;
			if (nowX > 0) {
				nowX = 0 ;
			} else if (nowX < 0 - (dragElm.width() - wrapElm.width())) {
				nowX = -(dragElm.width() - wrapElm.width()) ;
			}
			if (nowY > 0) {
				nowY = 0 ;
			} else if (nowY < 0 - (dragElm.height() - wrapElm.height())) {
				nowY = -(dragElm.height() - wrapElm.height()) ;
			}
			dragElm.css({top:nowY,left:nowX}) ;
			return false ;
		}
		function stopDarg() {
			wrapElm.unbind("mousemove",doDrag) ;
			wrapElm.unbind("mouseup",stopDarg) ;
			wrapElm.unbind("mouseleave",stopDarg) ;
			dragElm.unbind("mousemove") ;
			dragElm.unbind("mouseup") ;
		}
	},
	slideLi : function(opt){
		var triggerElm = $(opt.triggerElm);
		var prevElm = $(opt.prevElm);
		var nextElm = $(opt.nextElm);
		var listElm = opt.listElm;
		var itemElm = opt.itemElm;
		var stopElm = opt.stopElm;
		var moveUnit = opt.moveUnit;
		var switchNum = opt.switchNum || 1; //切换个数，默认为1
		var interval = opt.interval;
		var direction = opt.direction || "horizontal";
		var speed = opt.speed;
		var easing = opt.easing || "swing";
		var showNum = opt.showNum; //显示个数
		var length = $(listElm).children().size();
		if(length <= showNum){
			return false;
		}
		length = Math.ceil(length/switchNum);
		var curIndex = 0;
		var yn = true;

		triggerElm.eq(0).tabClass("sel");
		$(itemElm).find(".elm").removeClass("animated");
		$(itemElm).eq(curIndex).find(".elm").addClass("animated");

		var slideQueue = function(index){
			if(yn){
				yn = false;
				curIndex = index;
				var moveDtc = curIndex * moveUnit;
				triggerElm.eq(curIndex).tabClass("sel");
				if(direction == "horizontal"){
					$(listElm).animate({"left":"-"+moveDtc+"px"},speed,easing,function(){
						$(itemElm).find(".elm").removeClass("animated");
						$(itemElm).eq(curIndex).find(".elm").addClass("animated");
						yn = true;
					});	
				}
				else{
					$(listElm).animate({"top":"-"+moveDtc+"px"},speed,easing,function(){
						$(itemElm).find(".elm").removeClass("animated");
						$(itemElm).eq(curIndex).find(".elm").addClass("animated");
						yn = true;
					});	
				}
			}
		}

		triggerElm.click(function(){
			var idx = triggerElm.index($(this));
			slideQueue(idx);
		});
		prevElm.click(function(){
			var idx = curIndex <= 0 ? (length - 1) : (curIndex - 1) ;
			slideQueue(idx);
		});
		nextElm.click(function(){
			var idx = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
			slideQueue(idx);
		});

		var t = setInterval(function(){
			curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
			slideQueue(curIndex);
		},interval);
		$(stopElm).mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			t = setInterval(function(){
				curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
				slideQueue(curIndex);
			},interval);
		});
	},
	//淡入淡出切换
	toggleFade : function(opt){
		var prevElm = $(opt.prevElm);
		var nextElm = $(opt.nextElm);
		var fadeElm = $(opt.fadeElm);
		var crlElm = $(opt.crlElm);
		var textElm = $(opt.textElm);
		var stopElm = $(opt.stopElm);
		var moveDtc = opt.moveDtc;
		var interval = opt.interval;
		var speed = opt.speed;
		var length = $(fadeElm).size();
		var curIndex = 0;
		var aimIndex = 0;
		var yn = true;
		fadeElm.eq(0).css({"opacity":1}).tabClass("active");
		crlElm.eq(0).tabClass("active");

		var fade = function(){
			yn = false;
			if(curIndex != aimIndex){
				setTimeout(function(){
					fadeElm.eq(aimIndex).tabClass("active");
				},1200);
				fadeElm.eq(curIndex).animate({"opacity":0},speed);	
				fadeElm.eq(aimIndex).animate({"opacity":1},speed,function(){
					curIndex = aimIndex;
					yn = true;
				});	
				crlElm.eq(aimIndex).tabClass("active");
				if(textElm && moveDtc){
					textElm.animate({"top":"-"+moveDtc*aimIndex+"px"},500);
				}
			}
			else{
				yn = true;
			}
		}

		prevElm.click(function(){
			if(yn){
				aimIndex = curIndex <= 0 ? (length - 1) : (aimIndex - 1) ;
				fade();
			}
		});
		nextElm.click(function(){
			if(yn){
				aimIndex = curIndex >= (length - 1) ? 0 : (aimIndex + 1) ;
				fade();
			}
		});
		crlElm.click(function(){
			if(yn){
				var crlIndex = $(this).index();
				if(crlIndex!=curIndex){
					aimIndex = crlIndex;
					fade();
				}
			}
		});

		var t = setInterval(function(){
			if(yn){
				aimIndex = curIndex >= (length - 1) ? 0 : (aimIndex + 1) ;
				fade();
			}
		},interval);
		stopElm.mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			t = setInterval(function(){
				if(yn){
					aimIndex = curIndex >= (length - 1) ? 0 : (aimIndex + 1) ;
					fade();
				}
			},interval);
		});
	},
	//banner切换滑动
	scrollItem : function(opt){
		var triggerElm = $(opt.triggerElm);
		var prevElm = $(opt.prevElm);
		var nextElm = $(opt.nextElm);
		var wrapElm = $(opt.wrapElm);
		var listElm = opt.listElm;
		var stopElm = opt.stopElm;
		var interval = opt.interval || 5000;
		var easingAnt = opt.easingAnt || "easeInOutExpo";
		var direction = opt.direction || "horizontal";
		var moveUnit = direction == "horizontal" ? opt.moveUnit || $(wrapElm).width() : opt.moveUnit || $(wrapElm).height();
		var speed = opt.speed || 800;
		var loop = opt.loop || true;
		var auto = opt.auto || true;
		var switchNum = opt.switchNum || 1; //切换个数，默认为1
		var showNum = opt.showNum || 4; //显示个数
		var length = $(listElm).children().size();
		if(length <= showNum){
			triggerElm.remove();
			prevElm.remove();
			nextElm.remove();
			return false;
		}
		$(listElm).append($(listElm).children().clone());
		length = Math.ceil(length/switchNum);

		var curIndex = 0;
		var slideLock = false;
		triggerElm.first().tabClass("sel");
		direction == "horizontal" ? $(listElm).css({"left":"-"+moveUnit+"px"}) : $(listElm).css({"top":"-"+moveUnit+"px"}) ;
        $(listElm).prepend($(listElm).children().last());

		var slideQueue = function(dir,index){
			if(!slideLock){
				slideLock = true;	
				var _listElm = $(listElm);
				if(dir == "next"){
					if(direction == "horizontal"){			
						_listElm.stop().animate({"left":"-="+moveUnit},speed,easingAnt,function(){			
							_listElm.append($(listElm).children().first());
							_listElm.css({"left":"-"+moveUnit+"px"});												
							slideLock = false;
						});
					}
					if(direction == "vertical"){			
						_listElm.stop().animate({"top":"-="+moveUnit},speed,easingAnt,function(){	
							_listElm.append($(listElm).children().first());
							_listElm.css({"top":"-"+moveUnit+"px"});	
							slideLock = false;
						});
					}
				}
				if(dir == "prev"){
					if(direction == "horizontal"){		
						_listElm.prepend($(listElm).children().last());
						_listElm.css({"left":"-="+moveUnit+"px"});
						_listElm.stop().animate({"left":"+="+moveUnit},speed,easingAnt,function(){	
							slideLock = false;
						});
					}
					if(direction == "vertical"){			
						_listElm.prepend($(listElm).children().last());
						_listElm.css({"top":"-="+moveUnit+"px"});
						_listElm.stop().animate({"top":"+="+moveUnit},speed,easingAnt,function(){
							slideLock = false;
						});
					}
				}
			}
		}

		var isVpt = function(dir){
			if(dir == "next"){
				if(loop || curIndex < length - 1 ){
					return true;
				}
				else{
					return false;
				}
			}
			else if(dir == "prev"){
				if(loop || curIndex > 0 ){
					return true;
				}
				else{
					return false;
				}
			}
		}

		var toggleCtl = function(){
			if(!loop){
				curIndex <= 0 ? prevElm.hide() : prevElm.show();				
				curIndex >= length - 1 ? nextElm.hide() : nextElm.show();
			}
		}

		prevElm.click(function(){
			if(isVpt("prev") && !slideLock){
				curIndex = curIndex <= 0 ? (length - 1) : (curIndex - 1) ;
				slideQueue("prev");
				toggleCtl();
			}
		});
		nextElm.click(function(){
			if(isVpt("next") && !slideLock){
				curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
				slideQueue("next");
				toggleCtl();
			}
		});

		if(auto){
			var autoSt = setInterval(function(){
				if(isVpt("next") && !slideLock){
					curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
					slideQueue("next");
					toggleCtl();
				}
			},interval);
			$(stopElm).mouseover(function(){
				clearInterval(autoSt);
			}).mouseout(function(){
				autoSt = setInterval(function(){
					if(isVpt("next") && !slideLock){
						curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
						slideQueue("next");
						toggleCtl();
					}
				},interval);
			});
		}

		toggleCtl();
	}
})