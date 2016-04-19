$(function() {
	$.ajax({
		type: "post",
		url: "get_data.php",
		success: function(data) {
			var json = JSON.parse(data);
			var html = '';
			for (var i = 0; i < json.length; i++) {
				html += '<div class="content"><h2>' + json[i].id_device + '<em>' + json[i].date + '</em></h2><p>' + json[i].type_device +  json[i].data1 + json[i].data2+ +json[i].data3+ '</p></div>';
			}
			$('#data').html(html);
		},
		async: true,
	});
});



//ajax({
//	method: 'post',
//	url: 'get_data.php',
//	data: {},
//	success: function(text) {
//		var json = JSON.parse(text);
//		var html = '';
//		for (var i = 0; i < json.length; i++) {
//			html += '<div class="content"><h2>' + json[i].title + '<em>' + json[i].date + '</em></h2><p>' + json[i].content + '</p></div>';
//		}
//		$('#index').html(html);
//		for (var i = 0; i < json.length; i++) {
//			$('#index .content').eq(i).animate({
//				attr: 'o',
//				target: 100,
//				t: 30,
//				step: 10
//
//			});
//		}
//
//	},
//	async: true
//});