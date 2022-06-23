<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$id_login = $_POST ['id_login'];

$str = "SELECT * FROM table_pi2 WHERE id=$id_login";

$response = $conn->query ($str);

if ($response->num_rows>0){
    foreach ($response as $row){
      echo json_encode(["message"=>$row["nome"]]);
    }
}
else{
    echo json_encode(["message"=>"ID não cadastrado"]);
}

?>