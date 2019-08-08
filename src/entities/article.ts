export class Article {
    public title:string;
    public content:string;
    public tags?:string[];
    public resume?:string;
    public attached?:string[];
    public likes?:string[];//user ids
    public disLikes?:string[];//user ids
    public favorites?:string[];//user ids
    public role?:"noticia"|"articulo";
    public publicationDate?:Date;
    public modificationDate?:Date;
    public modificationUser?:string;
    public creator?:string;
    public commentsList?:string;
    public id?:string;
    public category:string;

    constructor(config:Article){
        Object.assign(this, config)
    }
}