<?php 

$callback = $_GET['name']; 
$arr = array("girl","15","100");


echo $callback."(".json_encode($arr).")";  //这里返回的是函数callback的调用

 ?>