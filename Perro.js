import Animal from "./animal.js"
export default class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad); 
        
    }
   
    
    datosAnimal(){
        return `${nombre}, que tiene ${enfermadad}`
    }
}