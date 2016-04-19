var url = "http://www.vastskycc.com/web/get_data.php";
var xhr = null;


function xhrCreate() {
	if (xhr) {
		outLine("xhr请求已创建");
		return;
	}
	outSet("创建请求：");
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function() {
		switch (xhr.readyState) {
			case 0:
				outLine("xhr请求已初始化");
				break;
			case 1:
				outLine("xhr请求已打开");
				break;
			case 2:
				outLine("xhr请求已发送");
				break;
			case 3:
				outLine("xhr请求已响应");
				break;
			case 4:
				outLine("xhr请求已完成");
				if (xhr.status == 200) {

					var json = JSON.parse(xhr.responseText);
					var ticks = new Array(); //横坐标值 
					var data1Value = new Array(); //数据  
					var data2Value = new Array(); //数据  
					var data3Value = new Array(); //数据  

					for (var i = 0; i < json.length; i++) {
						ticks.push(json[i].id_device);
						data1Value.push(parseInt(json[i].data1));
						data2Value.push(parseInt(json[i].data2));
						data3Value.push(parseInt(json[i].data3));
					}
					$('#container').highcharts({
						title: {
							text: 'Monthly Average Temperature',
							x: -20 //center
						},
						subtitle: {
							text: 'Source: WorldClimate.com',
							x: -20
						},
						xAxis: {
							//						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
							categories: ticks
						},
						yAxis: {
							title: {
								text: 'Temperature (°C)'
							},
							plotLines: [{
								value: 0,
								width: 1,
								color: '#808080'
							}]
						},
						tooltip: {
							valueSuffix: '°C'
						},
						legend: {
							layout: 'vertical',
							align: 'right',
							verticalAlign: 'middle',
							borderWidth: 0
						},
						series: [{
								name: 'data1',
								//						data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
								data: data1Value
							}, {
								name: 'data2',
								//						data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
								data: data2Value
							}, {
								name: 'data3',
								//						data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
								data: data3Value
							}
							//					, {
							//						name: 'London',
							//						data: [data1Value[0],data2Value[0],data3Value[0]]
							//							//						data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
							//					}
						]

					});

					//					outLine("xhr请求成功：" + json[0].data1);

					//					lineChart.setOption({
					//						xAxis: {
					//							data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					//						},
					//						series: [{
					//							data: [5, 20, 36, 10, 10, 20]
					//						}]
					//					});




				} else {
					outLine("xhr请求失败：" + xhr.status);
				}
				break;
			default:
				break;
		}
	}
	xhr.open("POST", url);
	xhr.send();
}

function xhrResponseHeader() {
	if (xhr) {
		if (xhr.readyState != 4) {
			outLine("xhr请求未完成");
		} else if (xhr.status != 200) {
			outSet("xhr请求失败：" + xhr.readyState);
		} else {
			outSet("xhr请求响应头数据：");
			outLine(xhr.getAllResponseHeaders());
		}
	} else {
		outSet("未发送请求");
	}
}

function xhrAbort() {
	if (xhr) {
		outSet("取消请求");
		if (xhr.readyState != 4) {
			xhr.abort();
		}
		xhr = null;
	} else {
		outSet("未发送请求");
	}
}