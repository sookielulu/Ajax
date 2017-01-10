<?php 
header("Content-Type:text/html;charset=utf-8");
$username = $_GET['username'];
$password = $_GET['password'];
/*$username = $_POST['username'];
$password = $_POST['password'];*/

echo '用户名：'.$username.'密码：'.$password;

//下面这句，表单提交后页面不跳转，直接刷新当前页面
header("location:./0004--syncSubmit.html?flag=1");
?>