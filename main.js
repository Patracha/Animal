import Propietario from "./propietario.js"
import Gato from "./Gato.js";
import Perro from "./Perro.js";
import Conejo from "./Conejo.js";
let cliente =[];
let boton = document.getElementById("boton"); 
let tabla = document.querySelector("#resultado")
/* Capturar los elementos desde el DOM */
boton.addEventListener("click",() =>{

    let propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombre = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value; 
    let tipo = document.getElementById("tipo").value; 

let nuevaMascota; 

        if (tipo === "perro") {
    nuevaMascota = new Perro(nombre, enfermedad);
}       else if (tipo === "gato") {
    nuevaMascota = new Gato(nombre, enfermedad);
}       else if (tipo === "conejo") {
    nuevaMascota = new Conejo(nombre, enfermedad);
}
    
    cliente.push(new Propietario(propietario, direccion, telefono, nuevaMascota));
    tabla.innerHTML = "";
    cliente.forEach(function(cliente) {
    
        let filas = ` <tr>
                           <th>${cliente._nombre}</th>
                           <td>${cliente._telefono}</td>
                           <td>${cliente._direccion}</td>
                           <td>${cliente._animal.nombre}</td>
                           <td>${tipo}</td>
                           <td>${cliente._animal.enfermedad}</td>
                           
                           
                       ` 
        tabla.innerHTML += filas; 
    }
    )
})



