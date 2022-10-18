alert("hola, soy una alerta: No te alertes");

var opc1;
var opc2;
var opc3;


function obtener(){
    var resultado = document.getElementById('result');
    var reset = document.getElementById('button-c');
    var suma = document.getElementById('button-add');
    var resta = document.getElementById('button-subtract');
    var multiplicacion = document.getElementById('button-multiply');
    var division = document.getElementById('button-divide');
    var igual = document.getElementById('button-equals');
    var uno = document.getElementById('button-1');
    var dos = document.getElementById('button-2');
    var tres = document.getElementById('button-3');
    var cuatro = document.getElementById('button-4');
    var cinco = document.getElementById('button-5');
    var seis = document.getElementById('button-6');
    var siete = document.getElementById('button-7');
    var ocho = document.getElementById('button-8');
    var nueve = document.getElementById('button-9');
    var cero = document.getElementById('button-0');
    var punto = document.getElementById('button-dot');




    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}