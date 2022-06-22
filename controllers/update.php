<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$id = $_POST ['id'];
$name = $_POST ['name'];
$cpf = $_POST ['cpf'];
$nivel = $_POST ['nivel'];
$pontuacao = $_POST ['pontuacao'];
//  echo json_encode (["message"=>"$id"]);

//if (empty($name)||empty($cpf)||empty($nivel)||empty($pontuacao)) {
//  echo json_encode (["message"=>"Todos os campos deste formulário devem estar preenchidos!"]);
//}
//else{
//    $sql="UPDATE clientes SET name='".$name."', cpf='".$cpf."', address='".$address."', telephone='".$tel."', email='".$email."' WHERE id='$id'";
    $sql="UPDATE table_pi2 SET nome='".$name."', cpf='".$cpf."', nivel='".$nivel."', pontuacao='".$pontuacao."' WHERE id='$id'";
//    $sql="UPDATE table_pi2 SET nome='".$name."', cpf='".$cpf."', nivel='".$nivel."', pontuacao='".$pontuacao."' WHERE id='63'";

    if(mysqli_query($conn,$sql)){
        http_response_code(200);
        echo json_encode(["message"=>"Atualizou aluno com sucesso"]);
      } else
      {
      http_response_code(500);
      echo json_encode(["message"=>"Falha ao atualizar no banco de dados"]);
      }
//  }  
//}

?>