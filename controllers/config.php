<?php
    header('Access-Control-Allow-Origin: *');
	$server = "localhost";
	$user = "root";
	$password = "";
	$dbName = "db_pi2";

	if ($conn=mysqli_connect($server,$user,$password,$dbName)){
//		echo "Conectado";		
	}	else
		echo "Erro!";

?>