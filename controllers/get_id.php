<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$id = $_POST ['id'];


  if (empty($id)){
    echo json_encode(["message"=>"Nenhum id foi passado"]);
  }
  else {
    $sql = "SELECT * FROM table_pi2 WHERE id=$id";
    $response = $conn->query($sql);
    $rows=array();
    if($response-> num_rows > 0){
        foreach($response as $r){
            $rows[] = $r;
            
        }
        echo json_encode($rows);
       
    }

    }
//  }  
//}

?>