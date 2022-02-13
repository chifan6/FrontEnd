//bind绑定函数
function bind(obj, eventStr, callback) {
	if(obj.addEventListener) {
		var reg = /^on/;
		var eventStr = eventStr.replace(reg, '');
		return obj.addEventListener(eventStr, callback, false);
	} else {
		return obj.attachEvent(eventStr, function() {
			callback.call(obj);
		});
	}
}

//动画
function move(obj, attr, target, speed, callback) {
	clearInterval(obj.timer);
	var current = parseInt(getstyle(obj, attr))
	if(current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getstyle(obj, attr))
		var newValue = oldValue + speed;
		if(speed < 0 & newValue < target || speed > 0 & newValue > target) {
			newValue = target;
		}
		obj.style[attr] = newValue + "px";
		if(newValue == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 30);
};

//获取样式
function getstyle(obj, name) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
};

//类操作
function addClass(obj, cn) {
	obj.className += " " + cn
};

function hasClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b")
	return reg.test(obj.className)
};

function remove(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b")
	obj.className = obj.className.replace(reg, "")
};

function toggleClass(obj, cn) {
	if(hasClass(obj, cn)) {
		remove(obj, cn);
	} else {
		addClass(obj, cn);
	};
};