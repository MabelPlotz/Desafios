

// EJERCICIO 3

var botonSumar = document.getElementById("btn-sumar")
botonSumar.addEventListener(`click`, sumar)

// suma

function sumar() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    var resultado = num1+num2;    

    document.querySelector(".resultado").innerHTML = resultado 

}




// resta 
var botonResta = document.getElementById("btn-restar")
botonResta.addEventListener(`click`, restar)

function restar (){
    let num1=parseInt(document.getElementById("valor1").value);
    let num2=parseInt(document.getElementById("valor2").value);
    var resultadoresta = num1-num2;
    
    if (resultadoresta <0 ){
        document.querySelector(".resultado").innerHTML = 0
    }

    else {
        document.querySelector(".resultado").innerHTML = resultadoresta

    }
    
}


