import estudiante from "./Cl_estudiante.js";

export default class deportista extends estudiante{
    constructor(nombre, acNotas, cantMaterias, deporte, edad){
        super(nombre, acNotas, cantMaterias);
        this.deporte = deporte;
        this.edad = edad;
    }

    tipDeporte(){
        switch(this.deporte){
            case 1:
                if(this.promNotas() > 14 && this.edad >= 21)

                    return "es admitido en beisbol"
                
                else 
                    return "no es adminito en beisbol";
                    
                    break;
            case 2:
                if(this.promNotas() >= 12 && this.edad >=19)

                    return "es admitido en futbol"
                else
                    return "no es admitido en futbol";
                
                    break;
                }

        }
    
}
