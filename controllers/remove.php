<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$id = $_POST ['id'];


  if (empty($id)){
    echo json_encode(["message"=>"Nenhum id foi passado"]);
  }
  else {
    $sql = "DELETE FROM table_pi2 WHERE id=$id";

    if(mysqli_query($conn,$sql)){
        http_response_code(200);
        echo json_encode(["message"=>"Usuário deletado com sucesso"]);
      } else
      {
      http_response_code(500);
      echo json_encode(["message"=>"Falha ao deletar o usuário"]);
      }
    }
//  }  
//}

?>