//$(function() {
//	//	box.style.left=500+'px';
//	//$('#box').animate('left',10,500,50);
//	$('#button').click(function() {
//		$('#box').animate({
//			'attr': 'o',
//			//'start': 60,
//			'target': 30,
//			'step': 7,
//
//
//		});
//	});
//});

$(function() {
	$('#button').toggle(function() {
		$('#box').css('background', 'blue');
	}, function() {
		$('#box').css('background', 'red');
	}, function() {
		$('#box').css('background', 'green');
	});
	$('#button2').toggle(function() {
		$('#pox').css('background', 'blue');
	}, function() {
		$('#pox').css('background', 'red');
	}, function() {
		$('#pox').css('background', 'green');
	});	
	
	
});



//addDomLoaded(function() {
////	var box = document.getElementById('box');
////	alert(box.innerHTML);
//})


//	var oButton = document.getElementById('button');
//	addEvent(oButton, 'click', function(){
//		
//		alert('button');
//	});
//	addEvent(document, 'click', function(){
//		e.stopPropagation;
//		alert('doc');
//	});
//	addEvent(oButton, 'click', fn2);
//	addEvent(oButton, 'click', fn3);
//	removeEvent(oButton, 'click', fn1)
//var a =document.getElementById('a');
//addEvent(a,'click',function(e){
//	e.preventDefault();
//})
//};
//
//function fn1(e) {
//	alert('1'+this.value);
//}
//
//function fn2(e) {
//	alert('2');
//}
//
//function fn3(e) {
//	alert('3');

//$('#box p').css('color','red');

//}

//document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>')
//var ie_loaded=document.getElementById('ie_loaded');
//ie_loaded.onreadystatechange=function(){
//	if(this.readyState=='complete'){
//		var box = document.getElementById('box')
//		alert(box.innerHTML);
//	}
//}
//addEvent(document, 'DOMContentLoaded', function() {
//		var box = document.getElementById('box')
//		alert(box.innerHTML);
//});
//var timer=null;
//timer=setInterval(function(){
//	try {
//		document.documentElement.doScroll('left');
//		var box = document.getElementById('box');
//		alert(box.innerHTML);
//	} catch (e) {};
//});