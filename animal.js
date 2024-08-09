export default class Animal{
    constructor(nombre, enfermedad){
        this._nombre = nombre; 
        this.enfermedad = enfermedad; 
    }

    get nombre(){
        return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre; 
    }
    get enfermedad(){
        return this._enfermedad; 
    }
    set enfermedad(enfermedad){
        this._enfermedad = enfermedad; 
    }
    
    datosAnimal(){
        return `${nombre}, que tiene ${enfermadad}`
    }
}

