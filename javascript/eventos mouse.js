"use strict"

//un evento es una funcion q se ejecuta cuando sucede algo

//eventos de raton
//evento click
function cambiarColor(){
    console.log("has presionado el boton");
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    return true;
}
var boton = document.querySelector("#boton");

boton.addEventListener("click", function(){
    cambiarColor();
});

//evento mouse over cambia al pasar el cursor por encima

boton.addEventListener("mouseover", function(){
    boton.style.background = "yellow";
});

//evento mouseout al salir el cursor cambia 
boton.addEventListener("mouseout", function(){
    boton.style.background = "pink";
});


