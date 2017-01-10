<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>link</title>
</head>
<body>
<?php

$apple = '苹果111';

$flag = $_GET['param'];

if($flag == 1){
    echo '<div>'.$apple.'</div>';
}else if($flag == 2){
    echo '<div>香蕉456</div>';
}else{
    echo '<div>橘子</div>';
}
?>
</body>
</html>