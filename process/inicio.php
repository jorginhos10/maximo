<?php 
require_once("../lib/class.inputfilter.php");
date_default_timezone_set('America/Bogota');
$ifilter = new InputFilter();

$usuario = $ifilter->process($_POST['usr']);
setcookie('usuario',$usuario,time()+60*9);
?>