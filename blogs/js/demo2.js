$(function() {
	$('#block').click(function() {

	});


	$('#header .member').hover(function() {
		$('#header .member_ul').show().animate({

			t: 30,
			step: 10,
			mul: {
				o: 100,
				h: 120
			}
		});
	}, function() {
		$('#header .member_ul').animate({

			t: 30,
			step: 10,
			mul: {
				o: 0,
				h: 0
			},
			fn: function() {
				$('#header .member_ul').hide();
			}
		});
	});
	var screen = $('#screen');
	//登陆框
	var login = $('#login');

	login.center(350, 250).resize(function() {
		//		login.center(350, 250);
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});

	$('#header .login').click(function() {
		login.center(350, 250).show();
		screen.lock().animate({
			attr: 'o',
			target: 30,
			t: 30,
			step: 10
		});
	});
	$('#login .close').click(function() {
		login.hide();
		screen.animate({
			attr: 'opacity',
			target: 0,
			t: 30,
			step: 10,
			fn: function() {
				screen.unlock();
			}
		});
	});

	login.drag($('#login h2').first());


	var reg = $('#reg');

	reg.center(600, 550).resize(function() {
		//		login.center(350, 250);
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});

	$('#header .reg').click(function() {
		reg.center(600, 550).show();
		screen.lock().animate({
			attr: 'o',
			target: 30,
			t: 30,
			step: 10
		});
	});
	$('#reg .close').click(function() {
		reg.hide();
		screen.animate({
			attr: 'opacity',
			target: 0,
			t: 30,
			step: 10,
			fn: function() {
				screen.unlock();
			}
		});
	});

	reg.drag($('#reg h2').first());

	$('#nav .about li').hover(function() {
		var target = $(this).first().offsetLeft;
		$('#nav .nav_bg').animate({
			attr: 'x',
			target: target + 20,
			t: 30,
			step: 10,
			fn: function() {
				$('#nav .white').animate({
					attr: 'x',
					target: -target
				});
			}
		});
	}, function() {
		$('#nav .nav_bg').animate({
			attr: 'x',
			target: 20,
			t: 30,
			step: 10,
			fn: function() {
				$('#nav .white').animate({
					attr: 'x',
					target: 0
				});
			}
		});
	});

	$('#sidebar h2').toggle(function() {
		$(this).next().animate({
			mul: {
				h: 0,
				o: 0
			}
		});
	}, function() {
		$(this).next().animate({
			mul: {
				h: 150,
				o: 100
			}
		});
	});
	//	$('form').eq(0).form('user').value('000');

	$('form').eq(0).first().reset();

	$('form').eq(0).form('user').bind('focus', function() {
		$('#reg .info_user').show();
		$('#reg .error_user').hide();
		$('#reg .succ_user').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {
			$('#reg .info_user').hide();
			$('#reg .succ_user').hide();
			$('#reg .error_user').hide();
		} else if (!check_user()) {
			$('#reg .error_user').show();
			$('#reg .info_user').hide();
			$('#reg .succ_user').hide();
		} else {
			$('#reg .succ_user').show();
			$('#reg .error_user').hide();
			$('#reg .info_user').hide();
		}
	});

	function check_user() {
		var flag = true;
		if (!/[\w\d]{2,20}/.test(trim($('form').eq(0).form('user').value()))) {
			$('#reg .error_user').text('输入不合法');
			return false;
		} else {
			$('#reg .loading').show();
			$('#reg .info_user').hide();
			ajax({
				method: 'post',
				url: 'is_user.php',
				data: $('form').eq(0).serialize(),
				success: function(text) {
					if (text == 1) {
						$('#reg .error_user').text('已有');
						flag = false;
					} else {
						flag = true;
					}
				},
				async: false
			});
		}
		return flag;
	}


	$('form').eq(0).form('pass').bind('focus', function() {
		$('#reg .info_pass').show();
		$('#reg .error_pass').hide();
		$('#reg .succ_pass').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {
			$('#reg .info_pass').hide();
		} else {
			if (check_pass()) {
				$('#reg .info_pass').hide();
				$('#reg .error_pass').hide();
				$('#reg .succ_pass').show();
			} else {
				$('#reg .info_pass').hide();
				$('#reg .error_pass').show();
				$('#reg .succ_pass').hide();
			}
		}
	});

	$('form').eq(0).form('pass').bind('keyup', function() {
		check_pass();
	});

	function check_pass() {
		var value = trim($('form').eq(0).form('pass').value());
		var value_length = value.length;
		var code_length = 0;

		if (value_length >= 6 && value_length <= 20) {
			$('#reg .info_pass .q1').html('!').css('color', 'green');
		} else {
			$('#reg .info_pass .q1').html('?').css('color', '#666');
		}

		if (value_length > 0 && !/\s/.test(value)) {
			$('#reg .info_pass .q2').html('!').css('color', 'green');
		} else {
			$('#reg .info_pass .q2').html('?').css('color', '#666');
		}

		if (/[\d]/.test(value)) {
			code_length++;
		}
		if (/[a-z]/.test(value)) {
			code_length++;
		}
		if (/[A-Z]/.test(value)) {
			code_length++;
		}
		if (/[^\w]/.test(value)) {
			code_length++;
		}
		if (code_length >= 2) {
			$('#reg .info_pass .q3').html('!').css('color', 'green');
		} else {
			$('#reg .info_pass .q3').html('?').css('color', '#666666');
		}

		if (value_length >= 10 && code_length >= 3) {
			$('#reg .info_pass .s1').css('color', 'green');
			$('#reg .info_pass .s2').css('color', 'green');
			$('#reg .info_pass .s3').css('color', 'green');
			$('#reg .info_pass .s4').html('high').css('color', 'green');
		} else if (value_length >= 8 && code_length >= 2) {
			$('#reg .info_pass .s1').css('color', '#f60');
			$('#reg .info_pass .s2').css('color', '#f60');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html('mid').css('color', '#f60');
		} else if (value_length >= 1) {
			$('#reg .info_pass .s1').css('color', 'maroon');
			$('#reg .info_pass .s2').css('color', '#ccc');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html('low').css('color', 'maroon');
		} else {
			$('#reg .info_pass .s1').css('color', '#ccc');
			$('#reg .info_pass .s2').css('color', '#ccc');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html('').css('color', '#ccc');
		}
		if (value_length >= 6 && value_length <= 20 && !/\s/.test(value) && code_length >= 2) {
			return true;
		} else {
			return false;
		}

	}


	$('form').eq(0).form('notpass').bind('focus', function() {
		$('#reg .info_notpass').show();
		$('#reg .error_notpass').hide();
		$('#reg .succ_notpass').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {
			$('#reg .info_notpass').hide();
		} else if (check_notpass()) {
			$('#reg .info_notpass').hide();
			$('#reg .error_notpass').hide();
			$('#reg .succ_notpass').show();

		} else {
			$('#reg .info_notpass').hide();
			$('#reg .error_notpass').show();
			$('#reg .succ_notpass').hide();
		}
	});

	function check_notpass() {
		if (trim($('form').eq(0).form('notpass').value()) == trim($('form').eq(0).form('pass').value()))
			return true;
	}
	$('form').eq(0).form('ques').bind('change', function() {
		if (checek_ques()) $('#reg .error_ques').hide();
	})

	function checek_ques() {
		if ($('form').eq(0).form('ques').value() != 0)
			return true;
	}

	$('form').eq(0).form('ans').bind('focus', function() {
		$('#reg .info_ans').show();
		$('#reg .error_ans').hide();
		$('#reg .succ_ans').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {
			$('#reg .info_ans').hide();
		} else if (check_ans()) {
			$('#reg .info_ans').hide();
			$('#reg .error_ans').hide();
			$('#reg .succ_ans').show();

		} else {
			$('#reg .info_ans').hide();
			$('#reg .error_ans').show();
			$('#reg .succ_ans').hide();
		}
	});

	function check_ans() {
		if (trim($('form').eq(0).form('ans').value()).length >= 2 && trim($('form').eq(0).form('ans').value()).length <= 32)
			return true;
	}

	$('form').eq(0).form('email').bind('focus', function() {

		if ($(this).value().indexOf('@') == -1) $('#reg .all_email').show();

		$('#reg .info_email').show();
		$('#reg .error_email').hide();
		$('#reg .succ_email').hide();
	}).bind('blur', function() {
		$('#reg .all_email').hide()
		if (trim($(this).value()) == '') {

			$('#reg .info_email').hide();
		} else if (check_email()) {
			$('#reg .info_email').hide();
			$('#reg .error_email').hide();
			$('#reg .succ_email').show();
		} else {
			$('#reg .info_email').hide();
			$('#reg .error_email').show();
			$('#reg .succ_email').hide();
		}
	});

	function check_email() {
		if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,6}){1,2}$/.test(trim($('form').eq(0).form('email').value())))
			return true;
	}

	$('#reg .all_email li').hover(function() {
		$(this).css('background', '#e5edf2');
		$(this).css('color', '#369');
	}, function() {
		$(this).css('background', 'none');
		$(this).css('color', '#666');
	})

	//选择补全
	$('form').eq(0).form('email').bind('keyup', function(event) {
		if ($(this).value().indexOf('@') == -1) {
			$('#reg .all_email').show();
			$('#reg .all_email span').html($(this).value());
		} else {
			$('#reg .all_email').hide();
		}
		$('#reg .all_email li').css('background', 'none');
		$('#reg .all_email li').css('color', '#369');

		if (event.keyCode == 40) {
			if (this.index == undefined || this.index >= $('#reg .all_email li').length() - 1) {
				this.index = 0;
			} else {
				this.index++;
			}
			$('#reg .all_email li').eq(this.index).css('background', '#e5edf2');
			$('#reg .all_email li').eq(this.index).css('color', '#369');

		}
		if (event.keyCode == 38) {
			if (this.index == undefined || this.index <= 0) {
				this.index = $('#reg .all_email li').length() - 1;
			} else {
				this.index--;
			}
			$('#reg .all_email li').eq(this.index).css('background', '#e5edf2');
			$('#reg .all_email li').eq(this.index).css('color', '#369');
		}
		if (event.keyCode == 13) {
			$(this).value($('#reg .all_email li').eq(this.index).text());
			$('#reg .all_email').hide();
			this.index = undefined;
		}


	});

	$('#reg .all_email li').bind('mousedown', function() {
		$('form').eq(0).form('email').value($(this).text());
	});

	var year = $('form').eq(0).form('year');
	var month = $('form').eq(0).form('month');
	var day = $('form').eq(0).form('day');

	var day30 = [4, 6, 9, 11];
	var day31 = [1, 3, 5, 7, 8, 10, 12];

	for (var i = 1950; i <= 2016; i++) {
		year.first().add(new Option(i, i), undefined);
	}
	for (var i = 1; i <= 12; i++) {
		month.first().add(new Option(i, i), undefined);
	}
	year.bind('change', select_day);
	month.bind('change', select_day);
	day.bind('change', function() {
		if (check_birthday())
			$('#reg .error_birthday').hide();
	})

	function check_birthday() {
		if (year.value() != 0 && month.value() != 0 && day.value() != 0)
			return true;
	}

	function select_day() {
		if (year.value() != 0 && month.value() != 0) {

			day.first().options.length = 1;

			var cur_day = 0;

			if (inArray(day31, parseInt(month.value()))) {
				cur_day = 31;
			} else if (inArray(day30, parseInt(month.value()))) {
				cur_day = 30;
			} else {
				if ((parseInt($(year).value()) % 4 == 0 && parseInt(year.value()) % 100 != 0) || parseInt(year.value()) % 400 == 0) {
					cur_day = 29;
				} else {
					cur_day = 28;
				}

			}
			for (var i = 1; i <= 31; i++) {
				day.first().add(new Option(i, i), undefined);
			}

		} else {
			day.first().options.length = 1;
		}
	}


	$('form').eq(0).form('ps').bind('keyup', check_ps).bind('paste', function() {
		setTimeout(check_ps, 50);
	});



	$('#reg .ps .clear').click(function() {
		$('form').eq(0).form('ps').value($('form').eq(0).form('ps').value().substring(0, 200));
		check_ps();
	})

	function check_ps() {
		var num = 200 - $('form').eq(0).form('ps').value().length;
		if (num >= 0) {

			$('#reg .ps').eq(0).show();
			$('#reg .ps .num').eq(0).html(num);
			$('#reg .ps').eq(1).hide();
			return true;
		} else {
			$('#reg .ps').eq(0).hide();
			$('#reg .ps .num').eq(1).html(Math.abs(num));
			$('#reg .ps').eq(1).show();
			return false;
		}
	}


	$('form').eq(0).form('sub').click(function() {
		var flag = true;
		if (!check_user()) {
			$('#reg .error_user').show();
			flag = false;
		}
		if (!check_pass()) {
			$('#reg .error_pass').show();
			flag = false;
		}
		if (!check_notpass()) {
			$('#reg .error_notpass').show();
			flag = false;
		}
		if (!checek_ques()) {
			$('#reg .error_ques').show();
			flag = false;
		}
		if (!check_ans()) {
			$('#reg .error_ans').show();
			flag = false;
		}
		if (!check_email()) {
			$('#reg .error_email').show();
			flag = false;
		}
		if (!check_birthday()) {
			$('#reg .error_birthday').show();
			flag = false;
		}
		if (!check_ps()) {
			flag = false;
		}
		if (flag) {
			var _this = this
			_this.disabled = true;
			$('#loading').show().center(200, 40);
			$('#loading p').text('正在提交注册中');

			ajax({
				method: 'post',
				url: 'demo.php',
				data: $('form').eq(0).serialize(),
				success: function(text) {
					if (text == 1) {
						$('#loading').hide();
						$('#success').show().center(200, 40);
						$('#success p').text('注册成功');
						setTimeout(function() {
							$('#success').hide();
							reg.hide();
							$('#reg .succ').hide();
							$('form').eq(0).first().reset();
							_this.disabled = false;
							screen.animate({
								attr: 'opacity',
								target: 0,
								t: 30,
								step: 10,
								fn: function() {
									screen.unlock();
								}
							});
						}, 1500);
					}
				},
				async: true
			});
		}


	});

	$('form').eq(1).form('sub').click(function() {

		if (/[\w]{2,20}/.test(trim($('form').eq(1).form('user').value())) && $('form').eq(1).form('pass').value().length >= 6) {
			var _this = this;
			_this.disabled = true;
			$('#loading').show().center(200, 40);
			$('#loading p').text('正在登陆');
			//			alert(trim($('form').eq(1).form('user').value())+'+'+trim($('form').eq(1).form('pass').value()));
			ajax({
				method: 'post',
				url: 'is_login.php',
				data: $('form').eq(1).serialize(),
				success: function(text) {
					$('#loading').hide();
					if (text == 1) {
						$('#login .info').text('error1');
					} else {
						$('#login .info').text('');
						$('#success').show().center(200, 40);
						$('#success p').text('success');
						setCookie('user', trim($('form').eq(1).form('user').value()));
						setTimeout(function() {
							$('#success').hide();

							$('#login').hide();
							$('form').eq(1).first().reset();
							_this.disabled = false;
							screen.animate({
								attr: 'opacity',
								target: 0,
								t: 30,
								step: 10,
								fn: function() {
									screen.unlock();
								}
							});
							$('#header .reg').hide();
							$('#header .login').hide();
							$('#header .info').show().html(getCookie('user') + ',hello!');

						}, 1500);
					}
					_this.disabled = false;
				},
				async: true
			});
		} else {
			$('#login .info').text('error2');
		}
	});

	//	setCookie('user', 'cc');
	//	alert(getCookie('user'));


	//轮播器初始化
	$('#banner img').opacity(0);
	$('#banner img').eq(0).opacity(100);
	$('#banner ul li').eq(0).css('color', '#333');
	$('#banner strong').html($('#banner img').eq(0).attr('alt'));

	$('#banner ul li').hover(function() {
		clearInterval(banner_timer);
		if ($(this).css('color') != 'rgb(51,51,51)' && $(this).css('color') != '#333') {
			banner(this, banner_index == 0 ? $('#banner ul li').length() - 1 : banner_index - 1);
		}

	}, function() {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 3000);
	});

	var banner_index = 1;
	var banner_type = 1;
	var banner_timer = setInterval(banner_fn, 3000);

	function banner(obj, prev) {
		$('#banner ul li').css('color', '#999');
		$(obj).css('color', '#333');
		$('#banner strong').html($('#banner img').eq($(obj).index()).attr('alt'));
		//		$('#banner img').css('z-index',1).opacity(0);
		if (banner_type == 1) {
			$('#banner img').eq(prev).animate({
				attr: 'o',
				target: 0,
				t: 30,
				step: 10
			}).css('z-index', 1);
			$('#banner img').eq($(obj).index()).animate({
				attr: 'o',
				target: 100,
				t: 30,
				step: 10
			}).css('z-index', 2);
		} else {
			if (banner_type == 2) {
				$('#banner img').eq(prev).animate({
					attr: 'y',
					target: 650,
					t: 300,
					step: 10
				}).css('z-index', 1).opacity(100);
				$('#banner img').eq($(obj).index()).animate({
					attr: 'y',
					target: 0,
					t: 300,
					step: 10
				}).css('top', '-150').css('z-index', 2).opacity(100);
			}
		}

	}

	function banner_fn() {
		if (banner_index >= $('#banner ul li').length())
			banner_index = 0;
		banner($('#banner ul li').eq(banner_index).first(), banner_index == 0 ? $('#banner ul li').length() - 1 : banner_index - 1);
		banner_index++;
	}

	//延迟加载
	//console.log($('.wait_load').eq(0).attr('src'));
	//$('.wait_load').eq(0).attr('src', $('.wait_load').eq(0).attr('xsrc'));
	var wait_load = $('.wait_load');
	wait_load.opacity(0);
	$(window).bind('scroll', _wait_load);
	$(window).bind('resize', _wait_load);

	function _wait_load() {
		setTimeout(function() {
			for (var i = 0; i < wait_load.length(); i++) {
				var _this = wait_load.ge(i);
				if (getInner().height + getScroll().top >= offsetTop(_this)) {
					//可视区域最低点位置
					$(_this).attr('src', $(_this).attr('xsrc')).animate({
						attr: 'o',
						target: 100,
						t: 30,
						step: 10
					});
				}
			}
		}, 100);
	}

	var photo_big = $('#photo_big');

	photo_big.center(600, 550).resize(function() {
		//		login.center(350, 250);
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});

	$('#photo dl dt img').click(function() {
		photo_big.center(600, 550).show();
		screen.lock().animate({
			attr: 'o',
			target: 30,
			t: 30,
			step: 10
		});
		var temp_img = new Image();

		$(temp_img).bind('load', function() {
			$('#photo_big .big img').attr('src', temp_img.src).animate({
				attr: 'o',
				target: 100,
				t: 30,
				step: 10
			}).css('width', '600px').css('height', '400px').css('top', '0').css('right', '0').opacity(0);
		});
		temp_img.src = $(this).attr('bsrc'); //ie下src放下面才能运行
		var children = this.parentNode.parentNode;
		prev_next_img(children);
	});
	$('#photo_big .close').click(function() {
		photo_big.hide();
		screen.animate({
			attr: 'opacity',
			target: 0,
			t: 30,
			step: 10,
			fn: function() {
				screen.unlock();
			}
		});
		$('#photo_big .big').attr('src', 'img/AjaxLoader.gif');
	});

	photo_big.drag($('#photo_big h2').last());

	$('#photo_big .big .left').hover(function() {
		$('#photo_big .big .sl').animate({
			attr: 'o',
			target: 50,
			t: 30,
			step: 10
		});
	}, function() {
		$('#photo_big .big .sl').animate({
			attr: 'o',
			target: 0,
			t: 30,
			step: 10
		});
	});

	$('#photo_big .big .right').hover(function() {
		$('#photo_big .big .sr').animate({
			attr: 'o',
			target: 50,
			t: 30,
			step: 10
		});
	}, function() {
		$('#photo_big .big .sr').animate({
			attr: 'o',
			target: 0,
			t: 30,
			step: 10
		});
	});

	$('#photo_big .big .left').click(function() {
		$('#photo_big .big img').attr('src', 'img/AjaxLoader.gif');
		var current_img = new Image();
		$(current_img).bind('load', function() {
			$('#photo_big .big img').attr('src', current_img.src).animate({
				attr: 'o',
				target: 100,
				t: 30,
				step: 10
			}).opacity(0).css('width', '600px').css('height', '450px').css('top', '0');
		});

		current_img.src = $(this).attr('src');
		var children = $('#photo dl dt img').ge(prevIndex($('#photo_big .big img').attr('index'), $('#photo').first())).parentNode.parentNode;
		prev_next_img(children);
	});
	$('#photo_big .big .right').click(function() {
		$('#photo_big .big img').attr('src', 'img/AjaxLoader.gif');
		var current_img = new Image();
		$(current_img).bind('load', function() {
			$('#photo_big .big img').attr('src', current_img.src).animate({
				attr: 'o',
				target: 100,
				t: 30,
				step: 10
			}).opacity(0).css('width', '600px').css('height', '450px').css('top', '0');
		});

		current_img.src = $(this).attr('src');
		var children = $('#photo dl dt img').ge(nextIndex($('#photo_big .big img').attr('index'), $('#photo').first())).parentNode.parentNode;
		prev_next_img(children);
	});

	function prev_next_img(children) {
		var prev = prevIndex($(children).index(), children.parentNode);
		var next = nextIndex($(children).index(), children.parentNode);
		var prev_img = new Image();
		var next_img = new Image();
		prev_img.src = $('#photo dl dt img').eq(prev).attr('bsrc');
		next_img.src = $('#photo dl dt img').eq(next).attr('bsrc');
		$('#photo_big .big .left').attr('src', prev_img.src);
		$('#photo_big .big .right').attr('src', next_img.src);
		$('#photo_big .big img').attr('index', $(children).index());
		$('#photo_big .big .index').html(parseInt($(children).index()) + 1 + '/' + (parseInt($('#photo_big .big img').length()) + 1));
	}





	$('#blog').center(580, 320).resize(function() {
		if ($('#blog').css('display') == 'block') {
			screen.lock();
		}
	});

	$('#header .member a').eq(0).click(function() {
		$('#blog').center(580, 320).show();
		screen.lock().animate({
			attr: 'o',
			target: 30,
			t: 30,
			step: 10
		});
	});
	$('#blog .close').click(function() {
		$('#blog').hide();
		screen.animate({
			attr: 'opacity',
			target: 0,
			t: 30,
			step: 10,
			fn: function() {
				screen.unlock();
			}
		});
	});

	$('#blog').drag($('#blog h2').last());

	$('form').eq(2).form('sub').click(function() {
		if (trim($('form').eq(2).form('title').value()).length <= 0 || trim($('form').eq(2).form('connet').value()).length <= 0) {
			$('#blog .info').text('no text');
		} else {


			var _this = this;
			_this.disabled = true;
			$('#loading').show().center(200, 40);
			$('#loading p').text('正在发表');
			//			alert($('form').eq(2).serialize());
			ajax({
				method: 'post',
				url: 'add_blog.php',
				data: $('form').eq(2).serialize(),
				success: function(text) {
					$('#loading').hide();
					if (text == 1) {

						$('#login .info').text('');
						$('#success').show().center(200, 40);
						$('#success p').text('success');

						setTimeout(function() {
							$('#success').hide();

							$('#blog').hide();
							$('form').eq(2).first().reset();
							_this.disabled = false;
							screen.animate({
								attr: 'opacity',
								target: 0,
								t: 30,
								step: 10,
								fn: function() {
									screen.unlock();
									$('#index').html('<span class="loading"></span>');
									$('#index .loading').show();
									ajax({
										method: 'post',
										url: 'get_blog.php',
										data: {},
										success: function(text) {
											var json = JSON.parse(text);
											var html = '';
											//			alert(json[0]['title']);
											//			alert(json[0].title);
											for (var i = 0; i < json.length; i++) {
												html += '<div class="content"><h2>' + json[i].title + '<em>' + json[i].date + '</em></h2><p>' + json[i].content + '</p></div>';
											}
											$('#index').html(html);
											for (var i = 0; i < json.length; i++) {
												$('#index .content').eq(i).animate({
													attr: 'o',
													target: 100,
													t: 30,
													step: 10

												});
											}

										},
										async: true
									});

								}
							});
						}, 1500);
					}
					_this.disabled = false;
				},
				async: true
			});

		}
	});



	//获取内容
	$('#index').html('<span class="loading"></span>');
	$('#index .loading').show();
	ajax({
		method: 'post',
		url: 'get_blog.php',
		data: {},
		success: function(text) {
			var json = JSON.parse(text);
			var html = '';
			//			alert(json[0]['title']);
			//			alert(json[0].title);
			for (var i = 0; i < json.length; i++) {
				html += '<div class="content"><h2>' + json[i].title + '<em>' + json[i].date + '</em></h2><p>' + json[i].content + '</p></div>';
			}
			$('#index').html(html);
			for (var i = 0; i < json.length; i++) {
				$('#index .content').eq(i).animate({
					attr: 'o',
					target: 100,
					t: 30,
					step: 10

				});
			}

		},
		async: true
	});


	$('#skin').center(650, 360).resize(function() {
		if ($('#skin').css('display') == 'block') {
			screen.lock();
		}
	});

	$('#header .member a').eq(1).click(function() {
		$('#skin').center(650, 360).show();
		screen.lock().animate({
			attr: 'o',
			target: 30,
			t: 30,
			step: 10
		});
		ajax({
			method: 'post',
			url: 'get_skin.php',
			data: {
				'type': 'all'
			},
			success: function(text) {
				var json = JSON.parse(text)
				var html = '';
				for (var i = 0; i < json.length; i++) {
					html += '<dl><dt><img src="img/' + json[i].s_bg + '" b_bg="' + json[i].b_bg + '" bg_color="' + json[i].bg_color + '"/></dt><dd>' + json[i].bg_text + '</dd></dl>'
				}
				$('#skin .skin_bg').html(html).opacity(0).animate({
					attr: 'o',
					target: 100,
					t: 30,
					step: 10
				});
				$('#skin dl dt img').click(function() {
					$('html').css('background', $(this).attr('bg_color') + ' ' + 'url(img/' + $(this).attr('b_bg') + ') repeat-x');
				});
			},
			async: true
		});
	});
	$('#skin .close').click(function() {
		$('#skin').hide();
		screen.animate({
			attr: 'opacity',
			target: 0,
			t: 30,
			step: 10,
			fn: function() {
				screen.unlock();
			}
		});
	});

	$('#skin').drag($('#skin h2').last());

	ajax({
		method: 'post',
		url: 'get_skin.php',
		data: {
			'type': 'main'
		},
		success: function(text) {
			var json = JSON.parse(text)

			$('html').css('background', json.bg_color + ' ' + 'url(img/' + json.b_bg + ') repeat-x');

		},
		async: true
	});
});