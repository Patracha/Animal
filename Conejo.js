import Animal from "./animal.js"
export default class Conejo extends Animal{
    constructor(nombre, edad){
        super(nombre, edad); 
        
    }
  
    
    datosAnimal(){
        return `${nombre}, que tiene ${enfermadad}`
    }
}