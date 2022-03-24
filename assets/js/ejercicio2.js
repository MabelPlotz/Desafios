/*
function cambiarCeleste() {
    cajaBlanca.style.backgroundColor = "#81e6d9"
}; 
*/

//EJERCICIO 2

//funciones para cambio de color
const cambiarColor= (color) => cajaBlanca.style.backgroundColor = color;

//Let cajas
let botonRojo = document.getElementById("btn-1");
let botonNaranjo = document.getElementById("btn-2");
let botonAmarillo = document.getElementById("btn-3");
let botonVerde = document.getElementById("btn-4");
let botonCeleste = document.getElementById("btn-5");
let botonMorado = document.getElementById("btn-6"); 
let cajaBlanca = document.getElementById("btn-7");


// click cambio de color
botonRojo.addEventListener(`click`, () => cambiarColor("#e53e3e"));
botonNaranjo.addEventListener(`click`,() => cambiarColor("#dd6b20"));
botonAmarillo.addEventListener(`click`, () => cambiarColor("#faf089"));
botonVerde.addEventListener(`click`,() => cambiarColor("#48bb78"));
botonCeleste.addEventListener(`click`,() => cambiarColor("#81e6d9"));
botonMorado.addEventListener(`click`, () =>cambiarColor("#d53f8c"));

