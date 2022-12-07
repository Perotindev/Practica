"use strict"

//Bom Browser object model

function getbom(){
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","widht=400,height=300");
}
getbom();