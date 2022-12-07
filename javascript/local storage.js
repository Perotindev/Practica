"use strict"
window.addEventListener("load", function () {
//Local storage
//comprobar si el local storage esta disponible en el navegador
if(typeof(Storage) !== "undefined"){
    console.log("Local storage disponible");
}else{
    console.log("incompatible con local storage");
};

//guardar datos en el local storage

this.localStorage.setItem("titulo", "curso de javascript");

//recuperar elemento

this.document.querySelector("#peliculas").innerHTML = this.localStorage.getItem("titulo");

//guardar objetos en el local storage, siempre hay q guardarlo como JSON string pq el local storage no permite en json puro

var perotin = {
    nombre: "leonardo",
    email: "leobrasso@hotmail.com",
    web: "perotin.com.ar"

};
this.localStorage.setItem("perotin", JSON.stringify(perotin));

//recuperar objeto que fue convertido a json string para que lo lea javascript y no lo reconozca como un string, sino como objeto

var user = JSON.parse(this.localStorage.getItem("perotin"));
console.log(user);

});