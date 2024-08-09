import Animal from "./animal.js"
import Propietario from "./propietario.js"
import Gato from "./Gato.js";
import Perro from "./Perro.js";
import Conejo from "./Conejo.js";
let cliente =[];
let boton = document.getElementById("boton"); 
/* Capturar los elementos desde el DOM */
boton.addEventListener("click",() =>{

    let propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombre = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value; 
    let tipo = document.getElementById("tipo").value; 

    if (tipo == "perro"){
        cliente.push(new Propietario(propietario, direccion, telefono, new Perro(nombre, enfermedad))) ;
    
    }
    else if (tipo == "gato"){
        cliente.push = new Propietario(propietario, direccion, telefono, new Gato(nombre, enfermedad));
    }
    else if (tipo == "conejo"){
        cliente.push = new Propietario(propietario, direccion, telefono, new Conejo(nombre, enfermedad));
    }
    
    console.log(cliente[0]); 

})



