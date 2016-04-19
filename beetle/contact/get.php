<?php
header("content-Type: text/html; charset=utf-8");
$q = mysql_connect("localhost","qdm170159190","chl288842");
if(!$q)
{

die('Could not connect: ' . mysql_error());

}

mysql_query("set names utf8"); //以utf8读取数据

mysql_select_db("qdm170159190_db",$q); //数据库

class User 
{
public  $name ;
public $id ;
}




$sql ="select * from people"; //SQL
$result =mysql_query($sql);//执行SQL
$json ="";
$data =array(); //定义好一个数组.PHP中array相当于一个数据字典.
//定义一个类,用到存放从数据库中取出的数据.

while ($row= mysql_fetch_array($result, MYSQL_ASSOC))
{
$user = new User();
$user->name= $row["name"];
$user->id = $row["id"];
$data[]=$user;
}
$json = json_encode($data);//把数据转换为JSON数据.

echo $json;
/*
//


$user =new User();
$user->name = $row["name"];
$user->id = $row["id"];
$data[]=$user;
}
$json = json_encode($data);//把数据转换为JSON数据.
echo $json;
echo "{".'"user"'.":".$json."}";*/









/*


$name= $_POST['name'];

$time=date("Y/m/d");

$patch = $_POST['message'];

$content = str_replace("

","<br />",$patch);

$sql = "insert into kaoqin (name,content,time) values ('$name','$content','$time')";

mysql_query($sql);

*/
?>