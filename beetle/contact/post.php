<?php
header("content-Type: text/html; charset=utf-8");
$q = mysql_connect("localhost", "qdm170159190", "chl288842");

if (!$q) {

	die('Could not connect: ' . mysql_error());

}

mysql_query("set names utf8");
//以utf8读取数据

mysql_select_db("qdm170159190_db", $q);
//数据库

$name = $_POST['sname'];

$time = date("Y/m/d");

$patch = $_POST['message'];

$content = str_replace("

", "<br />", $patch);

$sql = "insert into kaoqin (name,content,time) values ('$name','$content','$time')";

mysql_query($sql);
?>