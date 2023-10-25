export interface signUp{
    name: string;
    email: string;
    password : string;
}
export interface Login{
    email:string
    password:string
    name: string
}
export interface product{
    name:string
    price:string
    category:string
    description:string
    image:string
    id: number;
    quantity:number|undefined
}
