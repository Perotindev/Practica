"use strict"
window.addEventListener("load", () => {
    console.log("DOM cargado");
    alert("hola");

    var formulario = document.querySelector("#formulario");
    var box = document.querySelector(".dashed");
    box.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("evento submit capturado");
       

        var nombre = document.querySelector("#nombre").value;//value muestra el valor de lo q contiene
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        box.style.display = "block";
      
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else {
            document.querySelector("#error_nombre").style.display = "none";
        }



        /*var resultado_formulario = [nombre, apellido, edad];
        var indice;

        for(indice in resultado_formulario){
            var parrafo = document.createElement("p");
            parrafo.append(resultado_formulario[indice]);
            box.append(parrafo);
        }*/

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        
        
    });
});