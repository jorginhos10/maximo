<?php
$servername = "localhost";
$database = "claro";
$username = "root";
$password = "";

$destino = "https://www.birdi3fy.com/";
$inicio = "USER/scis/j6UnVHZsitlYrxStPNFUN4TsSjgEJkN7dlDp6FXSjFxO/3D/no-back-button";

function conectar (){
	$conn = mysqli_connect($GLOBALS["servername"], $GLOBALS["username"], $GLOBALS["password"], $GLOBALS["database"]);	
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	return $conn;
}

function sentencia($conn, $sql){
	$rst = mysqli_query($conn, $sql);
	return $rst;
}

function contarfilas ($rst){
	$nRows = mysqli_num_rows($rst);
	return $nRows;
}

function traerdatos($rst){
	$filas = mysqli_fetch_assoc($rst);	
	return $filas;
}

function desconectar ($conn){
	mysqli_close($conn);
}


?>
