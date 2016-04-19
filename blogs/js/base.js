var $ = function(args) {
	return new Base(args);
}

function Base(args) {
	this.elements = [];
	if (typeof args == 'string') {
		//css模拟
		if (args.indexOf(' ') != -1) {
			var elements = args.split(' ');
			var childElements = [];
			var node = [];
			for (var i = 0; i < elements.length; i++) {
				if (node.length == 0) node.push(document);
				switch (elements[i].charAt(0)) {
					case '#':
						childElements = [];
						childElements.push(this.getId(elements[i].substring(1)));
						node = childElements;
						break;
					case '.':
						childElements = [];
						for (var j = 0; j < node.length; j++) {
							var temps = this.getClass(elements[i].substring(1), node[j]);
							for (var k = 0; k < temps.length; k++) {
								childElements.push(temps[k]);
							}
						}
						node = childElements;
						break;
					default:
						childElements = [];
						for (var j = 0; j < node.length; j++) {
							var temps = this.getTagName(elements[i], node[j]);
							for (var k = 0; k < temps.length; k++) {
								childElements.push(temps[k]);
							}
						}
						node = childElements;
				}
			}
			this.elements = childElements;
		} else {
			switch (args.charAt(0)) {
				case '#':
					this.elements.push(this.getId(args.substring(1)));
					break;
				case '.':
					this.elements = this.getClass(args.substring(1));
					break;
				default:
					this.elements = this.getTagName(args);
			}
		}
	} else if (typeof args == 'object') {
		if (args != undefined) {
			this.elements[0] = args;
		}
	} else if (typeof args == 'function') {
		this.ready(args);
	}
}

Base.prototype.ready = function(fn) {
	addDomLoaded(fn);
};
Base.prototype.getId = function(id) {
	return document.getElementById(id);
}

Base.prototype.getTagName = function(tag, parentNode) {
	var node = null;
	var temps = [];
	if (parentNode != undefined) {
		node = parentNode;
	} else {
		node = document;
	}
	var tags = node.getElementsByTagName(tag);
	for (var i = 0; i < tags.length; i++) {
		temps.push(tags[i]);
	}
	return temps

}
Base.prototype.getClass = function(className, parentNode) {
	var node = null;
	var temps = [];
	if (parentNode != undefined) {
		node = parentNode;
	} else {
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i++) {
		if ((new RegExp('(\\s|^)' + className + '(\\s|$)')).test(all[i].className)) {
			temps.push(all[i]);
		}
	}
	return temps;
};

Base.prototype.find = function(str) {
	var childElenments = [];
	for (var i = 0; i < this.elements.length; i++) {

		switch (str.charAt(0)) {
			case '#':
				childElenments.push(this.getId(str.substring(1)));
				break;
			case '.':
				var temps = this.getClass(str.substring(1), this.elements[i]);
				for (var j = 0; j < temps.length; j++) {
					childElenments.push(temps[j]);
				}

				break;
			default:

				var temps = this.getTagName(str, this.elements[i]);
				for (var j = 0; j < temps.length; j++) {
					childElenments.push(temps[j]);
				}
		}

	}
	this.elements = childElenments;
	return this;
}
Base.prototype.ge = function(num) {
	return this.elements[num];

}
Base.prototype.first = function() {
	return this.elements[0];
};
Base.prototype.last = function() {
	return this.elements[this.elements.length - 1];
}

Base.prototype.length = function() {
	return this.elements.length;
}
Base.prototype.attr = function(attr) {
		return this.elements[0].getAttribute(attr);
	}
	//获取节点属性
Base.prototype.attr = function(attr, value) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 1) {
			return this.elements[i].getAttribute(attr);
		} else {
			if (arguments.length == 2) {
				this.elements[i].setAttribute(attr, value);
			}
		}

	}
	return this;
}

//获取索引
Base.prototype.index = function() {
	var children = this.elements[0].parentNode.children;
	for (var i = 0; i < children.length; i++) {
		if (this.elements[0] == children[i])
			return i;
	}
}
Base.prototype.opacity = function(num) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.opacity = num / 100;
		this.elements[i].style.filter = 'aplha(opacity=' + num + ')';
	}
	return this;
}
Base.prototype.eq = function(num) {
	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
}
Base.prototype.next = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i].nextSibling;
		if (this.elements[i] == null) throw new Error("找不到下一个同级节点");
		if (this.elements[i].nodeType == 3) this.next();
	}
	return this;
}
Base.prototype.prev = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i].previousSibling;
		if (this.elements[i] == null) throw new Error("找不到上一个同级节点");
		if (this.elements[i].nodeType == 3) this.prev();
	}
	return this;
}
Base.prototype.css = function(attr, value) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 1) {
			return getStyle(this.elements[i], attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
};
Base.prototype.addClass = function(className) {
	for (var i = 0; i < this.elements.length; i++) {
		if (!hasClass(this.elements[i], className)) {
			this.elements[i].className += ' ' + className;
		}

	}
	return this;
};
Base.prototype.removeClass = function(className) {
	for (var i = 0; i < this.elements.length; i++) {
		if (this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
		}

	}
	return this;
};
Base.prototype.addRule = function(num, selectorText, cssText, position) {
	var sheet = document.styleSheets[num];
	insertRule(sheet, selectorText, cssText, position);
}
Base.prototype.removeRule = function(num, index) {
	var sheet = document.styleSheets[num];
	deleteRule(sheet, index);
}
Base.prototype.html = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

Base.prototype.text = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return getlnnerText(this.elements[i]);
		}
		setlnnerText(this.elements[i], str);
	}
	return this;
}
Base.prototype.form = function(name) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i][name];
	}
	return this;
}
Base.prototype.value = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].value;
		}
		this.elements[i].value = str;
	}
	return this;
}
Base.prototype.hover = function(over, out) {
		for (var i = 0; i < this.elements.length; i++) {
			//		this.elements[i].onmouseover = over;
			//		this.elements[i].onmouseout = out;
			addEvent(this.elements[i], 'mouseover', over);
			addEvent(this.elements[i], 'mouseout', out);
		}
		return this;
	}
	//点击切换
Base.prototype.toggle = function() {
	for (var i = 0; i < this.elements.length; i++) {
		(function(element, args) {
			var count = 0;
			addEvent(element, 'click', function() {
				args[count++ % args.length].call(this);
				//			if (count >= args.length) count = 0;
			});
		})(this.elements[i], arguments);
	}
	return this;
}

Base.prototype.bind = function(event, fn) {
	for (var i = 0; i < this.elements.length; i++) {
		addEvent(this.elements[i], event, fn);
	}
	return this;
}
Base.prototype.show = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'block';
	}
	return this;
}
Base.prototype.hide = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'none';
	}
	return this;
}

Base.prototype.click = function(fn) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick = fn;

	}

	return this;
}

Base.prototype.center = function(width, height) {
	var top = (getInner().height - height) / 2 + getScroll().top;
	var left = (getInner().width - width) / 2 + getScroll().left;
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.top = top + 'px';
		this.elements[i].style.left = left + 'px';
	}
	return this;
}
Base.prototype.resize = function(fn) {
	for (var i = 0; i < this.elements.length; i++) {
		var element = this.elements[i];
		addEvent(window, 'resize', function() {
			fn();
			if (element.offsetTop > getInner().height + getScroll().top - element.offsetHeight) {
				element.style.top = getInner().height + getScroll().top - element.offsetHeight + 'px';
				if (element.offsetLeft <= 0 + getScroll().left) {
					element.style.left = 0 + getScroll().left + 'px';
				}
			}
			if (element.offsetLeft > getInner().width + getScroll().left - element.offsetWidth) {
				element.style.left = getInner().width + getScroll().left - element.offsetWidth + 'px';
				if (element.offsetTop <= 0 + getScroll().top) {
					element.style.top = 0 + getScroll().top + 'px';
				}
			}

		});
	}
	return this;
}
Base.prototype.lock = function() {
	for (var i = 0; i < this.elements.length; i++) {
		fixedScroll.top = getScroll().top;
		fixedScroll.left = getScroll().left;
		this.elements[i].style.height = getInner().height + getScroll().top + 'px';
		this.elements[i].style.width = getInner().width + getScroll().left + 'px';
		this.elements[i].style.display = 'block';
		parseFloat(sys.firefox) < 4 ? document.body.style.overflow = 'hidden' : document.documentElement.style.overflow = 'hidden';
		addEvent(this.elements[i], 'mousedown', predef);
		addEvent(this.elements[i], 'mouseup', predef);
		addEvent(this.elements[i], 'selectstart', predef);
		addEvent(window, 'scroll', fixedScroll);
	}
	return this;
}
Base.prototype.unlock = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'none';
		parseFloat(sys.firefox) < 4 ? document.body.style.overflow = 'auto' : document.documentElement.style.overflow = 'auto';
		removeEvent(this.elements[i], 'mousedown', predef);
		removeEvent(this.elements[i], 'mouseup', predef);
		removeEvent(this.elements[i], 'selectstart', predef);
		removeEvent(window, 'scroll', fixedScroll);
	}

	return this;
}
Base.prototype.animate = function(obj) {
	for (var i = 0; i < this.elements.length; i++) {
		var element = this.elements[i];

		var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' :
			obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' :
			obj['attr'] == 'o' ? 'opacity' : obj['attr'] != undefined ? obj['attr'] : 'left ';


		var start = obj['start'] != undefined ? obj['start'] :
			attr == 'opacity' ? parseFloat(getStyle(element, attr)) * 100 :
			parseInt(getStyle(element, attr));
		var t = obj['t'] != undefined ? obj['t'] : 30;
		var step = obj['step'] != undefined ? obj['step'] : 10;

		var alter = obj['alter'];
		var target = obj['target'];
		var mul = obj['mul'];

		var speed = obj['speed'] != undefined ? obj['speed'] : 6;
		var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';
		if (alter != undefined && target == undefined) {
			target = alter + start;
		} else if (alter == undefined && target == undefined && mul == undefined) {
			throw new Error('aletr或target必须传一个！');
		}

		if (start > target) step = -step;

		if (attr == 'opacity') {
			element.style.opacity = parseInt(start) / 100;
			element.style.filter = 'alpha(opacity=' + parseInt(start) + ')';
		} else {
			//			element.style[attr] = start + 'px';
		}
		if (mul == undefined) {
			mul = {};
			mul[attr] = target;
		}

		clearInterval(element.timer);
		element.timer = setInterval(function() {
			var flag = true;
			for (var i in mul) {
				attr = i == 'x' ? 'left' : i == 'y' ? 'top' : i == 'w' ? 'width' : i == 'h' ? 'height' : i == 'o' ? 'opacity' : i != undefined ? i : 'left';
				target = mul[i];


				if (type == 'buffer') {
					step = attr == 'opacity' ? (target - parseFloat(getStyle(element, attr)) * 100) / speed :
						(target - parseInt(getStyle(element, attr)) * 100) / speed;
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
				}


				if (attr == 'opacity') {

					if (step == 0) {
						setOpacity();
					} else if (step > 0 && Math.abs(parseFloat(getStyle(element, attr)) * 100 - target) <= step) {

						setOpacity();
					} else if (step < 0 && (parseFloat(getStyle(element, attr)) * 100 - target) <= Math.abs(step)) {
						setOpacity();
					} else {
						var temp = parseFloat(getStyle(element, attr)) * 100;
						element.style.opacity = parseInt(temp + step) / 100;
						element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')';
					}
					if (parseInt(target) != parseInt(parseFloat(getStyle(element, attr)) * 100)) flag = false;


				} else {
					if (step == 0) {
						setTarget();
					} else if (step > 0 && Math.abs(parseInt(getStyle(element, attr)) - target) <= step) {
						setTarget();
					} else if (step < 0 && (parseInt(getStyle(element, attr)) - target) <= Math.abs(step)) {
						setTarget();
					} else {
						element.style[attr] = parseInt(getStyle(element, attr)) + step + 'px';
					}
					if (parseInt(target) != parseInt(getStyle(element, attr))) flag = false;
				}

			}
			if (flag) {
				clearInterval(element.timer);
				if (obj.fn) obj.fn();
			}
			//document.getElementById('aaa').innerHTML += step + '\n';
		}, t);

		function setTarget() {
			element.style[attr] = target + 'px';

		}

		function setOpacity() {
			element.style.opacity = parseInt(target) / 100;
			element.style.filter = 'alpha(opacity=' + parseInt(target) + ')'

		}
	}
	return this;
}
Base.prototype.extend = function(name, fn) {
	Base.prototype[name] = fn;
};