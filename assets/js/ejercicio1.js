
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













