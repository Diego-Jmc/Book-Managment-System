import { Book, Editorial, Gender, Role , User } from "../models/models"


export interface IDbConnection{
    connect():void

}

export interface ApiError{
    debug_msg:string,
    status:number,
    date:Date,
}

export interface UserResult{
     id: number;
     name: string;
     lastname: string;
     email: string;
     role_id: number;
}

export interface UserLogin{
    email:string,
    password:string
}

export interface IRoleRepository {
    findById(id: number): Promise<Role | null>
    findAll(): Promise<Role[]>
}

export interface IUserRepository{

    findById(id: number): Promise<User | null>
    findByEmail(email:string):Promise<User | null>
    findAll(): Promise<User[]>
    deleteById(id:number):Promise<boolean>
    create(user:User):Promise<void>
    update(user:User):Promise<boolean>


}

export interface  IEditorialRepository{
    findAll():Promise<Editorial[]>
    findById(id:number):Promise<Editorial|null>
    create(gender:Editorial):Promise<void>
}

export interface IGenderRepository{
    findAll():Promise<Gender[]>
    findById(id:number):Promise<Gender|null>
    create(gender:Gender):Promise<void>

}

export interface IBookRepository{
    findAll():Promise<Book[]>
    findById(id:number):Promise<Book|null>
    create(gender:Book):Promise<void>
    deleteByID(id:number):Promise<boolean>
}