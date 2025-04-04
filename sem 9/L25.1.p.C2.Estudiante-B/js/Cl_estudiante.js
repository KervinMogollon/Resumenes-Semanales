export default class estudiante{
    constructor(nombre, acNotas, cantMaterias){
        this.nombre = nombre;
        this.acNotas = acNotas;
        this.cantMaterias = cantMaterias;
    }

    promNotas(){
        return this.acNotas / this.cantMaterias;
    }
}