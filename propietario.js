export default class Propietario{
    constructor(nombre, direccion, telefono, animal){
        this._nombre = nombre; 
        this._direccion = direccion; 
        this._telefono = telefono; 
        this._animal = animal; 
    }
    datosdelpropietario(){
        return `El nombre del propietario es ${nombre}, con direccion en ${direccion}, su telefono es ${telefono} y tiene un ${animal}`
    }
} 