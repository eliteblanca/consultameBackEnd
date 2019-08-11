import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";

@Injectable()
export class UserModelService extends GenericModel{
    
    constructor() {
        super()
    }

    public userLines(id_usuario:string):string[]{
        return ["Bancolombia", "Sura", "DirecTV"]
    }

    public userSubLines(id_usuario:string, id_linea:string):{name:string, sublines:string[]}{
        let subLines = [];      

        switch (id_linea) {
          case 'Bancolombia':
            subLines = ["Atencion al cliente", "Ventas", "Soporte"]
            break;      
          case 'Sura':
            subLines = ["Citas", "Urgencias"]
            break;      
          case 'DirecTV':
            subLines = ["Soporte", "SAC"]
            break;      
          default:          
              subLines = ["Atencion al cliente", "Ventas", "Soporte"]
            break;
        }

        return {name:id_linea, sublines:subLines}
    }
    
}