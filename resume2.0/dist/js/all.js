$(function() {
    $(window).bind('scroll', function() {

        if ($(window).scrollTop() > 50) {
            $('.naver').addClass('docs-naver-fixed');
        } else {
            $('.naver').removeClass('docs-naver-fixed');
        }
    });
    $('#btnDown').click(function() {
        open("http://www.vastskycc.com/resume.doc");
    });
    $('#page3 .info_text_2').hover(function () {
    	$(this).children().removeClass('hidden')
    },function () {
    	$(this).children().addClass('hidden')
    });
    console.log("bootstrap和scrollify.js布的局，gulp打包合并压缩，主流移动端显示还行（触摸滚动没做），桌面小于21寸效果没问题，再大没测；");
console.log("自己demo做也做了一些，不过感觉都是商场首页程度的东西，就不拿出来了，能说道的也只有跟着敲了遍jq;");
console.log("犀牛书红皮书看的差不多了，也开始系统的补习html+css；");
console.log("没了，2016年3月8日22:43:22");
});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
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

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

$(function() {

    $('.page').css('height', $(window).height());

    $(window).resize(function() {
        $('.page').css('height', $(window).height());
    })



    $('html,body').animate({
        'scrollTop': 0
    });

    var scrollpage = function(a, c) {
        delta = a;

        if (delta == -1) {
            //console.log($(this).scrollTop());

            next_nav_li = $('.cnav .selected').next();

        } else if (delta == 1) {

            next_nav_li = $('.cnav .selected').prev();

        }

        if (next_nav_li.size() < 1) {
            return false;
        }
        next_page = $(next_nav_li.find('a').attr('href'));

        /*��ǰҳ���active��ʽ*/
        $('.page').removeClass('active');
        next_page.addClass('active');
        $('.active img').addClass('animated rollIn');
        $('.active img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name(argument) {
            $('.active img').removeClass('animated rollIn');
        });
        $('html,body').stop().animate({
            'scrollTop': next_page.offset().top
        }, 'normal', 'swing', function() {

            $('.cnav li').removeClass('selected');
            next_nav_li.addClass('selected');

            if (!next_nav_li.hasClass('hide')) {
                $('.cnav li').removeClass('navCurr');
                next_nav_li.addClass('navCurr');
            }

        });
    }

    var i = !1;
    !
        $('body').mousewheel(function(event, delta) {


            if (!$('html,body').is(":animated") && !i) {
                i = !0,
                setTimeout(function() {
                        i = !1
                    },
                    'normal');

                scrollpage(delta, null);

            }


        });


    $('.cnav li, .naver li').click(function() {
        $('html,body').stop().animate({
            'scrollTop': $($(this).find('a').attr('href')).offset().top
        }, 'slow', 'swing');

        $('.cnav li').removeClass('navCurr').eq($(this).index()).addClass('navCurr');
        $('.cnav li').removeClass('selected').eq($(this).index()).addClass('selected');

        $('.page').removeClass('active');
        $($(this).find('a').attr('href')).addClass('active');
        $('.active img').addClass('animated rollIn');
        $('.active img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name(argument) {
            $('.active img').removeClass('animated rollIn');
        });

    });

    $('#btnDown').click(function() {
        open("http://www.vastskycc.com/resume.doc");
    });


    // console.log('我妈突然让我写个简历,太突然了,所以这个很简陋，有机会会做的更好看点')
});
(function(e,t,n,r){var i=[],s=[],o=[],u=0,a=t.location.hash,f=false,l,c=e(t).scrollTop(),h=false,p={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:true,before:function(){},after:function(){}};e.scrollify=function(r){function d(n){if(s[n]){p.before(n,o);if(p.sectionName){t.location.hash=s[n]}e("html,body").stop().animate({scrollTop:i[n]},p.scrollSpeed,p.easing);e("html,body").promise().done(function(){p.after(n,o)})}}var v={handleMousedown:function(){h=false},handleMouseup:function(){h=true},handleScroll:function(){if(l){clearTimeout(l)}l=setTimeout(function(){c=e(t).scrollTop();if(h==false){return false}h=false;var n=1,r=i.length,s=0,o=Math.abs(i[0]-c),a;for(;n<r;n++){a=Math.abs(i[n]-c);if(a<o){o=a;s=n}}u=s;d(s)},200)},wheelHandler:function(e,t){e.preventDefault();t=t||-e.originalEvent.detail/3||e.originalEvent.wheelDelta/120;if(l){clearTimeout(l)}l=setTimeout(function(){if(t<0){if(u<i.length-1){u++}}else if(t>0){if(u>0){u--}}if(u>=0){d(u)}else{u=0}},25)},keyHandler:function(e){e.preventDefault();if(e.keyCode==38){if(u>0){u--}d(u)}else if(e.keyCode==40){if(u<i.length-1){u++}d(u)}},init:function(){if(p.scrollbars){e(t).bind("mousedown",v.handleMousedown);e(t).bind("mouseup",v.handleMouseup);e(t).bind("scroll",v.handleScroll)}else{e("body").css({overflow:"hidden"})}e(n).bind("DOMMouseScroll mousewheel",v.wheelHandler);e(n).bind("keyup",v.keyHandler)}};var m={touches:{touchstart:{y:-1},touchmove:{y:-1},touchend:false,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){var t;if(typeof e!=="undefined"){e.preventDefault();if(typeof e.touches!=="undefined"){t=e.touches[0];switch(e.type){case"touchstart":m.options.timeStamp=(new Date).getTime();m.touches.touchend=false;case"touchmove":m.touches[e.type].y=t.pageY;if(m.options.timeStamp+m.options.timeGap<(new Date).getTime()&&m.touches.touchend==false){m.touches.touchend=true;if(m.touches.touchstart.y>-1){if(Math.abs(m.touches.touchmove.y-m.touches.touchstart.y)>m.options.distance){if(m.touches.touchstart.y<m.touches.touchmove.y){if(u>0){u--}d(u)}else{if(u<i.length-1){u++}d(u)}}}}break;case"touchend":if(m.touches[e.type]==false){m.touches[e.type]=true;if(m.touches.touchstart.y>-1){if(Math.abs(m.touches.touchmove.y-m.touches.touchstart.y)>m.options.distance){if(m.touches.touchstart.y<m.touches.touchmove.y){if(u>0){u--}d(u)}else{if(u<i.length-1){u++}d(u)}}}};default:break}}}},init:function(){if(n.addEventListener){n.addEventListener("touchstart",m.touchHandler,false);n.addEventListener("touchmove",m.touchHandler,false);n.addEventListener("touchend",m.touchHandler,false)}}};if(typeof r==="string"){var g=s.length;for(;g>=0;g--){if(typeof arguments[1]==="string"){if(s[g]==arguments[1]){u=g;d(g)}}else{if(g==arguments[1]){u=g;d(g)}}}}else{p=e.extend(p,r);e(p.section).each(function(t){if(t>0){i[t]=e(this).offset().top+p.offset}else{i[t]=e(this).offset().top}if(p.sectionName&&e(this).data(p.sectionName).length>0){s[t]="#"+e(this).data(p.sectionName).replace(/ /g,"-")}else{s[t]="#"+(t+1)}o[t]=e(this);if(a==s[t]){u=t;f=true}});if(f==false&&p.sectionName){t.location.hash=s[0]}else{d(u)}v.init();m.init()}}})(jQuery,this,document)
/*!
 * tipso - A Lightweight Responsive jQuery Tooltip Plugin v1.0.1
 * Copyright (c) 2014 Bojan Petkovski
 * http://tipso.object505.com
 * Licensed under the MIT license
 * http://object505.mit-license.org/
 */
!function(t,o,s,e){function r(o,s){this.element=t(o),this.settings=t.extend({},l,s),this._defaults=l,this._name=d,this._title=this.element.attr("title"),this.mode="hide",this.init()}function i(){var t=o.navigator.msMaxTouchPoints,e="ontouchstart"in s.createElement("div");return t||e?!0:!1}function n(o){var s=o.clone();s.css("visibility","hidden"),t("body").append(s);var e=s.outerHeight();return s.remove(),e}function a(s){var e,r,i,a=s.tooltip(),d=s.element,l=s,f=t(o),p=10;switch(l.settings.position){case"top":r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,e=d.offset().top-n(a)-p,a.find(".tipso_arrow").css({marginLeft:-8}),e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top"));break;case"bottom":r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({marginLeft:-8}),e+n(a)>f.scrollTop()+f.outerHeight()?(e=d.offset().top-n(a)-p,a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")):(a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position));break;case"left":r=d.offset().left-a.outerWidth()-p,e=d.offset().top+d.outerHeight()/2-n(a)/2,a.find(".tipso_arrow").css({marginTop:-8,marginLeft:""}),r<f.scrollLeft()?(r=d.offset().left+d.outerWidth()+p,a.find(".tipso_arrow").css({"border-right-color":l.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("right")):(a.find(".tipso_arrow").css({"border-left-color":l.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position));break;case"right":r=d.offset().left+d.outerWidth()+p,e=d.offset().top+d.outerHeight()/2-n(a)/2,a.find(".tipso_arrow").css({marginTop:-8,marginLeft:""}),r+p+l.settings.width>f.scrollLeft()+f.outerWidth()?(r=d.offset().left-a.outerWidth()-p,a.find(".tipso_arrow").css({"border-left-color":l.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("left")):(a.find(".tipso_arrow").css({"border-right-color":l.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position))}r<f.scrollLeft()&&("bottom"==l.settings.position||"top"==l.settings.position)&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0),r+l.settings.width>f.outerWidth()&&("bottom"==l.settings.position||"top"==l.settings.position)&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&("left"==l.settings.position||"right"==l.settings.position)&&(r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,a.find(".tipso_arrow").css({marginLeft:-8,marginTop:""}),e=d.offset().top-n(a)-p,e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")),r+l.settings.width>f.outerWidth()&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0)),r+l.settings.width>f.outerWidth()&&("left"==l.settings.position||"right"==l.settings.position)&&(r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,a.find(".tipso_arrow").css({marginLeft:-8,marginTop:""}),e=d.offset().top-n(a)-p,e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")),r+l.settings.width>f.outerWidth()&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0)),a.css({left:r+l.settings.offsetX,top:e+l.settings.offsetY})}var d="tipso",l={speed:400,background:"#55b555",color:"#ffffff",position:"top",width:200,delay:200,offsetX:0,offsetY:0,content:null,ajaxContentUrl:null,useTitle:!0,onBeforeShow:null,onShow:null,onHide:null};t.extend(r.prototype,{init:function(){var o=this,e=this.element;e.addClass("tipso_style").removeAttr("title"),i()?(e.on("click."+d,function(t){"hide"==o.mode?o.show():o.hide(),t.stopPropagation()}),t(s).on("click",function(){"show"==o.mode&&o.hide()})):(e.on("mouseover."+d,function(){o.show()}),e.on("mouseout."+d,function(){o.hide()}))},tooltip:function(){return this.tipso_bubble||(this.tipso_bubble=t('<div class="tipso_bubble"><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')),this.tipso_bubble},show:function(){var s=this.tooltip(),e=this,r=t(o);t.isFunction(e.settings.onBeforeShow)&&e.settings.onBeforeShow(t(this)),s.css({background:e.settings.background,color:e.settings.color,width:e.settings.width}).hide(),s.find(".tipso_content").html(e.content()),a(e),r.resize(function(){a(e)}),e.timeout=o.setTimeout(function(){s.appendTo("body").stop(!0,!0).fadeIn(e.settings.speed,function(){e.mode="show",t.isFunction(e.settings.onShow)&&e.settings.onShow(t(this))})},e.settings.delay)},hide:function(){var s=this,e=this.tooltip();o.clearTimeout(s.timeout),s.timeout=null,e.stop(!0,!0).fadeOut(s.settings.speed,function(){t(this).remove(),t.isFunction(s.settings.onHide)&&"show"==s.mode&&s.settings.onHide(t(this)),s.mode="hide"})},destroy:function(){var t=this.element;t.off("."+d),t.removeData(d),t.removeClass("tipso_style").attr("title",this._title)},content:function(){var o,s=this.element,e=this,r=this._title;return o=e.settings.ajaxContentUrl?t.ajax({type:"GET",url:e.settings.ajaxContentUrl,async:!1}).responseText:e.settings.content?e.settings.content:e.settings.useTitle===!0?r:s.data("tipso")},update:function(t,o){var s=this;return o?void(s.settings[t]=o):s.settings[t]}}),t[d]=t.fn[d]=function(o){var s=arguments;if(o===e||"object"==typeof o)return this instanceof t||t.extend(l,o),this.each(function(){t.data(this,"plugin_"+d)||t.data(this,"plugin_"+d,new r(this,o))});if("string"==typeof o&&"_"!==o[0]&&"init"!==o){var i;return this.each(function(){var e=t.data(this,"plugin_"+d);e||(e=t.data(this,"plugin_"+d,new r(this,o))),e instanceof r&&"function"==typeof e[o]&&(i=e[o].apply(e,Array.prototype.slice.call(s,1))),"destroy"===o&&t.data(this,"plugin_"+d,null)}),i!==e?i:this}}}(jQuery,window,document);