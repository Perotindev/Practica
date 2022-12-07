'use strict'

//1-pida 6 numeros por pantalla y los meta en un array
//2-mostrar el array entero en el cuerpo de la pag y en la consola
//3-ordenarlo y mostrarlo
//4-invertir su orden y mostrarlo
//5-mostrar cuantos elemento tiene el array
//6-busqueda de un valor introducido por el usuario, que nos diga
//si lo encuentra y su indice(usar funciones)

//funcion para mostrar el array y luego q pueda ser llamada para 
//mostrar modificaciones
function mostrarArray(elementos, textoCustom = ""){ 
document.write("<h1>Contenido del array "+textoCustom+"</h1>");
document.write("<ul>");
elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+"</li>");
   });
document.write("</ul>");
}

//var numeros = new Array(6); //esta es una manera
var numeros = []; //esta es otra
//pide 6 numeros
for(var i = 0; i <= 5; i++){
  //numeros[i] = parseInt(prompt("introduce un numero", 0));// una 
  //manera de pedirlos
   numeros.push(parseInt(prompt("introduzca un numero", 0)));//otra 
   //manera de pedirlos
}
mostrarArray(numeros);



//ordenarlo y mostrarlo
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenados");

//mostrarlo revertido
numeros.reverse();
mostrarArray(numeros, "revertidos");

//mostrar cuantos elementos tiene
document.write("<h1>el array tiene: "+numeros.length+" elementos</h1>");

//busqueda del numero
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr><h1>ENCONTRADO</h1>");
    document.write("<h1>La posicion es: "+posicion+"</h1></hr>");
    }else{
        document.write("<hr><h1>No encontrado</h1></hr>");
    };