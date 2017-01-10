<?php 

$callback = $_GET['_jsonp'];   
$arr = array("lucy","jack","tom");


echo $callback."(".json_encode($arr).")";  //这里返回的是函数callback的调用

 ?>
