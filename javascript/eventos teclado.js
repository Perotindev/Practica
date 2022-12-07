'use strict'

// evento focus

var input = document.querySelector("#nombre");

input.addEventListener("focus", function(){
    console.log("Estas dentro del campo de texto");
});

//evento blur 

input.addEventListener("blur", function(){
    console.log("Estas fuera del campo de texto");
});

//evento keydown, sucede cuando oprimir una tecla

input.addEventListener("keydown", function(event){
    console.log("apretaste la tecla", String.fromCharCode(event.keyCode));
});

//evento keypress, es similar a keydown

input.addEventListener("keydown", function(event){
    console.log("oprimiste la tecla", String.fromCharCode(event.keyCode));
});

//evento keyup, captura el evento cuando levanto el dedo de la tecla

input.addEventListener("keyup", function(event){
    console.log("levantaste el dedo de la tecla", String.fromCharCode(event.keyCode));
});