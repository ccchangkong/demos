(function() {
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1]:
		(s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
		(s = ua.match(/opera\/.*version\/([\d.]+)/)) ? sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
	if (/webkit/.test(ua)) sys.webkit = ua.match(/webkit\/([\d.]+)/)[1];

})();

function addDomLoaded(fn) {
	var isReady = false;
	var timer = null;

	function doReady() {
		if (timer) clearInterval(timer);
		if (isReady) return;
		isReady = true;
		fn();
	}
	if ((sys.opera && sys.opera < 9) || (sys.firefox && sys.firefox < 3) || (sys.webkit && sys.webkit < 525)) {
		timer = setInterval(function() {
			if (/loaded|complete/.test(document.readyState)) {
				doReady();
			}
		}, 1);

	} else if (document.addEventListener) {
		//w3c
		addEvent(document, 'DOMContentLoaded', function() {
			fn();
			removeEvent(document, 'DOMContentLoaded', arguments.callee);
		});
	} else if (sys.ie && sys.ie < 9) {
		var timer = null;
		timer = setInterval(function() {
			try {
				document.documentElement.doScroll('left');
				doReady();
			} catch (e) {};
		}, 1);
	}
}

function addEvent(obj, type, fn) {
	if (typeof obj.addEventListener != 'undefined') {
		obj.addEventListener(type, fn, false);
	} else {
		if (!obj.events) obj.events = {};
		if (!obj.events[type]) {
			obj.events[type] = [];
			if (obj['on' + type]) obj.events[type][0] = fn;
		} else {
			if (addEvent.equal(obj.events[type], fn) == true) return false;
		}
		obj.events[type][addEvent.ID++] = fn;
		obj['on' + type] = addEvent.exec;
	}
}
addEvent.ID = 1;

addEvent.exec = function(event) {
	var e = event || addEvent.fixEvent(window.event);
	var es = this.events[e.type]
	for (var i in es) {
		es[i].call(this, e);
	};
}

addEvent.equal = function(es, fn) {
	for (var i in es) {
		if (es[i] == fn) return true;
	}
	return false;
}

addEvent.fixEvent = function(event) {
	event.preventDefault = addEvent.fixEvent.preventDefault;
	event.stopPropagation = addEvent.fixEvent.stopPropagation;
	event.target = event.srcElement;
	return event;
}
addEvent.fixEvent.preventDefault = function() {
	this.returnValue = false;
}
addEvent.fixEvent.stopPropagation = function() {
	this.cancelBubble = true;
}

function removeEvent(obj, type, fn) {
	if (typeof obj.removeEventListener != 'undefined') {
		obj.removeEventListener(type, fn, false);
	} else {
		if (obj.events) {
			for (var i in obj.events[type]) {
				if (obj.events[type][i] == fn) {
					delete obj.events[type][i];
				}
			}
		}
	}
}



//跨浏览器获取视口大小
function getInner() {
	if (typeof window.innerWidth != 'undefined') {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}

}

function getScroll() {
	return {
		top: document.documentElement.scrollTop || document.body.scrollTop,
		left: document.documentElement.scrollLeft || document.body.scrollLeft,
	}
}

function getStyle(element, attr) {
	var value;
	if (typeof window.getComputedStyle != 'undefined') { //W3C
		value = window.getComputedStyle(element, null)[attr];
	} else if (typeof element.currentStyle != 'undefined') { //ie
		value = element.currentStyle[attr];
	}
	return value;
}

function hasClass(element, className) {
	return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function insertRule(sheet, selectorText, cssText, position) {
	if (typeof sheet.insertRule != 'undefined') { //w3c
		sheet.insertRule(selectorText + '{' + cssText + '}', position);
	} else if (typeof sheet.addRule != 'undefined') { //ie
		sheet.addRule(selectorText, cssText, position)
	}
}

function deleteRule(sheet, index) {
	if (typeof sheet.deleteRule != 'undefined') { //w3c
		sheet.deleteRule(index);
	} else if (typeof sheet.removeRule != 'undefined') { //ie
		sheet.removeRule(index);
	}
}

function getlnnerText(element) {
	return (typeof element.textContent == 'string') ? element.textContent : element.innerText;
}

function setlnnerText(element, text) {
	if (typeof element.textContent == 'string') {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}

function offsetTop(element) {
	var top = element.offsetTop;
	var parent = element.offsetparent;
	while (parent != null) {
		top + parent.offsetTop;
		parent = parent.offsetTop;
	}
	return top;
}

function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, '');
}

function inArray(array, value) {
	for (var i in array) {
		if (array[i] === value) return true;
	}
	return false
}

function scrollTop() {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

function predef(e) {
	e.preventDefault();
}

function fixedScroll() {
	setTimeout(function() {
		window.scrollTo(fixedScroll.left, fixedScroll.top);
	}, 100)
}

function prevIndex(current, parent) {
	var length = parent.children.length;
	if (current == 0) return length - 1;
	return parseInt(current) - 1;
}

function nextIndex(current, parent) {
	var length = parent.children.length;
	if (current == length - 1) return 0;
	return parseInt(current) + 1;
}

function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create) return Object.create(p);
	if (t != 'object' && t != "function") throw TypeError();

	function f() {};
	f.prototype = p;
	return new f();
}

function setCookie(name, value, expires, path, domain, secure) {
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieText += ';expires=' + expires;
	}
	if (path) {
		cookieText += ';path=' + expires;
	}
	if (domain) {
		cookieText += ';domain=' + domain;
	}
	if (secure) {
		cookieText += ';secure';
	}
	document.cookie = cookieText;
}

function getCookie(name) {
	var cookieName = encodeURIComponent(name) + '=';
	var cookieStart = document.cookie.indexOf(cookieName);
	var cookieValue = null;
	if (cookieStart > -1) {
		var cookieEnd = document.cookie.indexOf(';', cookieStart);
		if (cookieEnd == -1) {
			cookieEnd = document.cookie.length;
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}

function unsetCookie(name) {
	document.cookie = name + '=;expires=' + new Date(0);
}