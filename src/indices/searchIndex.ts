import { Esindex } from "./esindex";
import { Injectable } from "@nestjs/common";

export interface search {
    line:string;
    subline:string;
    query:string;
    searches:number;
}

@Injectable()
export class SearchsIndex extends Esindex<search> {
    constructor(){
        super('searchs')
    }

    public increaseSearchCount(id: string): Promise<any> {
        return this.esClient.update({
            id: id,
            index: this.index,
            type: '_doc',
            body: {
                script: {
                    "source": "ctx._source.searches += 1"
                }
            }
        })
    }  

}