'use strict'
//conseguir elementos con un ID concreto
//DOM = document object model
//puedo modificar el html y sus objetos como quiera
function cambiaColor(color){
    caja.style.background = color;
};//esta funcion es para cambiar desde consola el dom de la caja
//a otro color

//var caja = document.getElementById("micaja");//se usa para tomar los 
//elementos de html con id
var caja = document.querySelector("#micaja");// otra forma de seleccionar
//elemento del dom es con queryselector, es mas elegante


//con el dom inner.HTML puedo modificar el elemento de la caja

caja.innerHTML = "putito!";
caja.style.backgroundColor = "red";//puedo aplicar reglas css
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola, Hola2";//le puedo agregar clases a la caja

console.log(caja);