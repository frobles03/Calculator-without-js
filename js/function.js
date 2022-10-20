

var opc1;
var opc2;
var operacion;


function obtener(){
    var mostrarNum = document.getElementById('result');
    var mostrarOperacion = document.getElementById('current-function');
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
        mostrarNum.textContent = mostrarNum.textContent  + "1";
    }
    dos.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "2";
    }
    tres.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "3";
    }
    cuatro.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "4";
    }
    cinco.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "5";
    }
    seis.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "6";
    }
    siete.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "7";
    }
    ocho.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "8";
    }
    nueve.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "9";
    }
    cero.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + "0";
    }
    punto.onclick = function(e){
        mostrarNum.textContent = mostrarNum.textContent  + ".";
    }
    reset.onclick = function(e){
        limpiar();
    }
    // suma.onclick = function(e){
    //     mostrarNum.textContent = mostrarNum.textContent  + "+";
    // }
    // resta.onclick = function(e){
    //     mostrarNum.textContent = mostrarNum.textContent  + "-";
    // }

    // reset.onclick = function(e){
    //     limpiar();
    // }
    
    suma.onclick = function(e){
        opc1 = mostrarNum.textContent;
        operacion = "+";
        mostrarNum.textContent = mostrarNum.textContent  + "+";
        borrar();
    }
    
    resta.onclick = function(e){
        opc1 = mostrarNum.textContent;
        operacion = "-";
        mostrarNum.textContent = mostrarNum.textContent  + "-";
        borrar();
    }
    multiplicacion.onclick = function(e){
        opc1 = mostrarNum.textContent;
        operacion = "*";
        mostrarNum.textContent = mostrarNum.textContent  + "*";
        borrar();
    }
    division.onclick = function(e){
        opc1 = mostrarNum.textContent;
        operacion = "/";
        mostrarNum.textContent = mostrarNum.textContent  + "/";
        borrar();
        
    }
    igual.onclick = function(e){
        opc2 = mostrarNum.textContent;
        mostrarNum.textContent = mostrarNum.textContent  + "=";
        alert("esta la opcion 2"+opc2);
        resolver();
    }
}

function removeElement( opc1 ) {
	opc1.parentNode.removeChild(opc1);
}

  function limpiar(){
    mostrarNum.textContent = " ";
    
    opc1 = 0;
    alert("la opcion 1 fue borrada, nuevo valor="+opc1);
    opc2 = 0;
    alert("la opcion 2 fue borrada, nuevo valor="+opc2);
    operacion = "";
    alert("la operacion fue borrada, nuevo valor="+operacion);
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(opc1) + parseFloat(opc2);
        alert(res);
        break;
      case "-":
          res = parseFloat(opc1) - parseFloat(opc2);
          break;
      case "*":
        res = parseFloat(opc1) * parseFloat(opc2);
        break;
      case "/":
        res = parseFloat(opc1) / parseFloat(opc2);
        break;
    }
    limpiar();
        mostrarNum.textContent = res;
  }
