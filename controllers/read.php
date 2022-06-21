<?php
header('Access-Control-Allow-Origin: *');

require_once('config.php');
session_start();
$str = "SELECT * FROM table_pi2 ORDER BY id ASC";

$response = $conn->query ($str);

if ($response->num_rows>0){
    foreach ($response as $row){
        echo "<tr>";
        echo "<td>".$row["id"]."</td>";
        echo "<td>".$row["nome"]."</td>";
        echo "<td>".$row["cpf"]."</td>";
        echo "<td>".$row["nivel"]."</td>";
        echo "<td>".$row["pontuacao"]."</td>";
        echo "<td>
            <button type='button' class='btn btn-success'>Editar</button>
            <button type='button' class='btn btn-danger'>Excluir</button>
        </td>";
        echo "</tr>"; 
    }
}
else{
    echo ("");
}

?>