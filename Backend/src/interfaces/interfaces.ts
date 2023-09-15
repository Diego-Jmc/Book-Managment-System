import { Role , User } from "../models/models"


export interface IDbConnection{
    connect():void

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
    findAll(): Promise<User[]>
    deleteById(id:number):Promise<boolean>
    create(user:User):Promise<void>
    update(user:User):Promise<boolean>

}