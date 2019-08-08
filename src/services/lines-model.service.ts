import { Injectable } from '@nestjs/common';
import { GenericModel } from "../services/generic-model";

@Injectable()
export class LinesModelService extends GenericModel{
    
    constructor() {
        super()
    }

    
}
