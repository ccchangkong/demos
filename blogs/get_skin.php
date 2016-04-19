<?php
require 'config.php';
if ($_POST['type'] == 'all') {
	$query = mysql_query("SELECT s_bg,b_bg,bg_color,bg_text FROM blog_skin LIMIT 0,6") or die('SQL错误');
	$json = '';
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row) . ',';
	}
	echo '[' . substr($json, 0, strlen($json) - 1) . ']';
} else if ($_POST['type'] == 'main') {
	$query = mysql_query("SELECT b_bg,bg_color FROM blog_skin WHERE bg_flag=1") or die('SQL错误');
	echo json_encode(mysql_fetch_array($query, MYSQL_ASSOC));
}

mysql_close();
?>