"use strict"

//conseguir elementos por su etiqueta

//var todosLosDivs = document.getElementsByTagName("div");//esa funcion
//selecciona por etiqueta

//console.log(todosLosDivs);

//var contenidoDelTexto = todosLosDivs[2].textContent; //muestra el 
//contenido del texto
//console.log(contenidoDelTexto);

//seleccionar por clase

var seleccionClases = document.getElementsByClassName("rojo");
console.log(seleccionClases);
var color;
for(color in seleccionClases){
    if(seleccionClases[color].className === "rojo"){
        seleccionClases[color].style.background = "red";
    }

}