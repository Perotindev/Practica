"use strict"

//el evento load se utiliza para cargar todo el codigo javascript 
//pq lo mas conveniente es cargarlo en el head, entonces lo q modifique
//en el dom sin el evento load no see va a cargar

window.addEventListener("load",() => {
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
    
    //evento mouseover cambia al pasar el cursor por encima
    
    boton.addEventListener("mouseover", function(){
        boton.style.background = "yellow";
    });
    
    //evento mouseout al salir el cursor cambia 
    boton.addEventListener("mouseout", function(){
        boton.style.background = "pink";
    });
    var input = document.querySelector("#nombre");

    //evento foco
    input.addEventListener("focus", function(){
        console.log("Estas dentro del campo de texto");
    });

    //evento blur 

    input.addEventListener("blur", function(){
        console.log("Estas fuera del campo de texto");
    });

    //evento keydown, sucede cuando oprimis una tecla

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
    })
