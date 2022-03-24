/*
//EJERCICIO 1

//Nombre Completo
var boton = document.getElementById("botton")
boton.addEventListener(`click`, function () {
    event.preventDefault()

    var texto = document.querySelector(".nombre").value
    var textocorrecto = /[A-Za-z]/
    if (texto.match(textocorrecto)) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!"
    }
    else {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido"
    }

})


//Asunto
var boton = document.getElementById("botton")
boton.addEventListener(`click`, function () {
    event.preventDefault()

    var texto = document.querySelector(".asunto").value
    var textocorrecto = /[A-Za-z]/
    if (texto.match(textocorrecto)) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!"
    }
    else {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
    }

})


//Mensaje
var boton = document.getElementById("botton")
boton.addEventListener(`click`, function () {
    event.preventDefault()

    var texto = document.querySelector(".mensaje").value
    var textocorrecto = /[A-Za-z]/
    if (texto.match(textocorrecto)) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!"
    }
    else {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido"
    }

})

*/




/*

//EJERCICIO 2

//funciones para cambio de color
const cambiarColor= (color) => cajaBlanca.style.backgroundColor = color;


const cambiarNaranjo = () => cajaBlanca.style.backgroundColor ="#dd6b20";
const cambiarAmarillo=()=>cajaBlanca.style.backgroundColor="#faf089";
const cambiarVerde=()=> cajaBlanca.style.backgroundColor="#48bb78"
function cambiarCeleste() {
    cajaBlanca.style.backgroundColor = "#81e6d9"
}; 
const cambiarMorado=()=>cajaBlanca.style.backgroundColor="#d53f8c" 



//Let cajas
let botonRojo = document.getElementById("btn-1");
let botonNaranjo = document.getElementById("btn-2");


let botonAmarillo = document.getElementById("btn-3");
let botonVerde = document.getElementById("btn-4");
let botonCeleste = document.getElementById("btn-5");
let botonMorado = document.getElementById("btn-6"); 

let cajaBlanca = document.getElementById("btn-7");



// click cambio de color
botonRojo.addEventListener(`click`, cambiarColor("red"));
botonNaranjo.addEventListener(`click`, cambiarColor());
botonAmarillo.addEventListener(`click`, cambiarAmarillo);
botonVerde.addEventListener(`click`, cambiarVerde);
botonCeleste.addEventListener(`click`, cambiarCeleste);
botonMorado.addEventListener(`click`, cambiarMorado);



*/




// EJERCICIO 3

var botonsumar = document.getElementById("btn-sumar")
botonsumar.addEventListener(`button`, sumar)

// suma

function sumar() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    var resultado = num1+num2;


    
    
    document.getElementsByClassName("resultado").innerHTML = "el resultado es"
}


/*
// resta 
var boton = document.getElementById("btn-restar")
boton.addEventListener(`click`, restar)

function restar (){
    let num1=parseInt(document.getElementById("valor1").value);
    let num2=parseInt(document.getElementById("valor2").value);
    var resultadoresta;
    resultadoresta = num1-num2
    
}
*/