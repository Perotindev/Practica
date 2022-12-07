"use strict"

window.addEventListener("load", function () {
    //timers
    //setInterval permite ejecutar un codigo cada cierta cantidad de
    //tiempo
    var tiempo = setInterval( function (){
        console.log("setInterval ejecutado");

        var encabezado = document.querySelector("#titulo");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontsize = "50px";
        }
    }, 500);//tiempo en milisegundos
    clearInterval(tiempo);

    //var tiempo = setTimeout( function(){
    //    console.log("settimeout ejecutado")
    //}, 500); //solo se ejecuta una vez

    //clearInterval es para parar el bucle

});