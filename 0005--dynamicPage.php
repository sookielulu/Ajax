<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单异步提交</title>
    <script type="text/javascript">

    </script>
</head>
<body>
<div>
	<!-- 下面的PHP标签是后台填进来 -->
    <?php

    	$flag = $_GET['username'];
    	$book1 = '三国演义(这里是从数据库取过来的数据)';
    	$book2 = '西游记(这里是从数据库取过来的数据)';
    	if ($flag == 1) {
    		echo '<div>aaaaaaaaaa</div>'.$book1;
    	}else if ($flag == 2) {
    		echo '<div>aaaaaaaaaa</div>'.$book2;
    	}
    ?>
    <div id="showInfo"></div>
    <form action="./0005--asyncSubmit.php" method="get">
        用户名：<input type="text" name="username" id="username"><br>
        密码：<input type="password" name="password" id="password"><br>
        <input type="submit" value="提交">
    </form>

    <?php
        echo '<div>bbbbbbbbbb</div>';
    ?>
</div>
</body>
</html>