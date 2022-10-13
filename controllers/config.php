<?php
    header('Access-Control-Allow-Origin: *');
//	$server = "localhost";
//	$user = "root";
//	$password = "";
//	$dbName = "db_pi2";
	$server = "servermysqlpi2.mysql.database.azure.com";
	$user = "wagner@servermysqlpi2";
	$password = "Sena!502";
	$dbName = "db_pi2";

//$conn = mysqli_init();
//mysqli_ssl_set($conn,NULL,NULL, "/var/www/html/BaltimoreCyberTrustRoot.crt.pem", NULL, NULL);
//mysqli_real_connect($conn, 'mydemoserver.mysql.database.azure.com', 'myadmin@mydemoserver', 'yourpassword', 'quickstartdb', 3306, MYSQLI_CLIENT_SSL);
//if (mysqli_connect_errno($conn)) {
//die('Failed to connect to MySQL: '.mysqli_connect_error());
//}

	if ($conn=mysqli_connect($server,$user,$password,$dbName)){
//		echo "Conectado";		
	}	else
		echo "Erro!";

?>