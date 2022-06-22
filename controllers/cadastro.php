<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$name = $_POST ['name'];
$cpf = $_POST ['cpf'];
$nivel = $_POST ['nivel'];
$pontuacao = $_POST ['pontuacao'];

if (empty($name)||empty($cpf)||empty($nivel)||empty($pontuacao)) {
  echo json_encode (["message"->"Todos os campos deste formulário devem estar preenchidos!"]);
}
else{
  $str = "SELECT * FROM table_pi2 WHERE cpf=$cpf";

  $response = $conn->query ($str);
  if ($response->num_rows>0){
    echo json_encode(["message"=>"CPF número $cpf já cadastrado"]);
  }
  else {
    echo json_encode(["message"=>"blao $cpf já cadastrado"]);
    //$sql="INSERT INTO 'table_pi2' ('nome','cpf','nivel','pontuacao') VALUES ('$name','$cpf','$nivel','$pontuacao')";
    $sql="INSERT INTO `table_pi2` (`nome`,`cpf`,`nivel`,`pontuacao`) VALUES ('$name','$cpf','$nivel','$pontuacao')";
    //$sql="INSERT INTO `table_pi2` (`nome`,`cpf`,`nivel`,`pontuacao`) VALUES ('Wagner','12345','54321','25')";

//    if(mysqli_query($conn,$sql)){
//        http_response_code(200);
//        echo json_encode(["message"=>"Cadastrou aluno com sucesso"]);
//      } else
//      {
//      http_response_code(500);
//      echo json_encode(["message"=>"Falha ao cadastrar no banco de dados"]);
//      }
//      echo json_encode(["message"=>"Cadastrou aluno com sucesso"]);

    }
  }  
//}

?>