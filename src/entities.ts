export type userRaw = {
    id: number
    user_name: string
    creation_date: string
    documento: string
}

export class User {
    "sub":string
    "name":string
    "rol":string
}
export type perfil = {
    id:number
    nombre:string
}